// Chapter tree (parts > chapters > details), folding, the zoom-aware map focus, and the scene colour key.
import test, { before, after } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
import path from "node:path";
import { pathToFileURL } from "node:url";
import puppeteer from "puppeteer";
import { APP, HM, loadDatasets } from "./load.mjs";

const DS = loadDatasets();
function loadSceneGlobals() {
  const ctx = { window: {} };
  vm.createContext(ctx);
  const dir = path.join(APP, "scenes");
  for (const f of fs.readdirSync(dir).filter((f) => f.endsWith(".js"))) vm.runInContext(fs.readFileSync(path.join(dir, f), "utf8"), ctx, { filename: f });
  return JSON.parse(JSON.stringify({ scenes: ctx.window.SCENES, actors: ctx.window.SCENE_ACTORS || {} }));
}
const { scenes: SCENES, actors: ACTORS } = loadSceneGlobals();
const D = (y) => HM.parseDate(String(y));

const raw = (chapters) => ({
  id: "t", title: "T", range: ["1000", "2000"], lanes: [], events: [], leaders: [], books: [], colours: { sides: {}, lanes: {} }, mapNote: "x",
  chapters: chapters.map((c) => Object.assign({ bbox: [[0, 0], [10, 10]] }, c))
});

test("normalise links parents, children (by start) and depth", () => {
  const ds = HM.normalise(raw([
    { id: "a", title: "A", start: "1100", end: "1900" },
    { id: "b2", title: "B2", start: "1500", end: "1600", parent: "a" },
    { id: "b1", title: "B1", start: "1200", end: "1300", parent: "a" },
    { id: "c", title: "C", start: "1210", end: "1220", parent: "b1" },
    { id: "lost", title: "Lost", start: "1100", end: "1200", parent: "nope" }
  ]));
  const g = (id) => ds.byId.get(id);
  assert.deepEqual(g("a").children, ["b1", "b2"]);
  assert.deepEqual([g("a").depth, g("b1").depth, g("c").depth, g("lost").depth], [0, 1, 2, 0]);
  assert.deepEqual(HM.ancestors(ds, g("c")).map((c) => c.id), ["b1", "a"]);
  assert.ok(HM.within(ds, g("a"), g("c")) && !HM.within(ds, g("c"), g("a")) && HM.within(ds, g("c"), g("c")));
  const open = HM.openChapters(ds, (c) => c.id === "b1").map((c) => c.id);
  assert.ok(open.includes("b1") && !open.includes("c"), "folding b1 hides c but not b1 itself");
});

test("cycles never hang and leave chapters at the top", () => {
  const ds = HM.normalise(raw([
    { id: "x", title: "X", start: "1100", end: "1200", parent: "y" },
    { id: "y", title: "Y", start: "1100", end: "1200", parent: "x" }
  ]));
  assert.ok(ds.chapters.some((c) => c.depth === 0));
  const errs = HM.validate(raw([
    { id: "x", title: "X", start: "1100", end: "1200", parent: "y" },
    { id: "y", title: "Y", start: "1100", end: "1200", parent: "x" }
  ])).join("\n");
  assert.match(errs, /loops/);
});

test("validate catches unknown parents and children outside their parent", () => {
  const errs = HM.validate(raw([
    { id: "p", title: "P", start: "1200", end: "1300" },
    { id: "k", title: "K", start: "1250", end: "1350", parent: "p" },
    { id: "q", title: "Q", start: "1250", end: "1260", parent: "zzz" }
  ])).join("\n");
  assert.match(errs, /runs outside its parent "P"/);
  assert.match(errs, /unknown parent zzz/);
});

test("focusChapter: zoomed out picks the part, zoomed in picks the detail", () => {
  const ds = HM.normalise(raw([
    { id: "part", title: "Part", start: "1100", end: "1500" },
    { id: "ch", title: "Ch", start: "1200", end: "1240", parent: "part" }
  ]));
  const t = D(1220);
  assert.equal(HM.focusChapter(ds, t, D(2000) - D(1000)).id, "part", "whole millennium visible");
  assert.equal(HM.focusChapter(ds, t, D(1260) - D(1190)).id, "ch", "seventy years visible");
  assert.equal(HM.focusChapter(ds, t, null).id, "ch", "no span: most specific");
  assert.equal(HM.focusChapter(ds, t, D(2000) - D(1000), (c) => c.id !== "part").id, "ch", "filtered");
});

test("every dataset's tree is valid: children inside parents, depth at most 3", () => {
  for (const [id, r] of Object.entries(DS)) {
    assert.deepEqual(HM.validate(r), [], id);
    const ds = HM.normalise(r);
    for (const c of ds.chapters) {
      assert.ok(c.depth <= 2, `${id}/${c.id} is nested too deep`);
      for (const k of c.children.map((x) => ds.byId.get(x))) assert.ok(k.t0 >= c.t0 && k.t1 <= c.t1, `${id}/${k.id} outside ${c.id}`);
    }
  }
});

test("every part (a chapter with children) has an overview scene", () => {
  for (const [id, r] of Object.entries(DS)) {
    const ds = HM.normalise(r);
    for (const c of ds.chapters.filter((c) => c.children.length)) assert.ok(SCENES[id] && SCENES[id][c.id], `${id}/${c.id} has no scene`);
  }
});

test("sceneKey groups by colour: actors first, named by SCENE_ACTORS, then routes", () => {
  const sc = { layers: [
    { type: "area", colour: "#111111", name: "Realm", tier: "core", around: [[0, 0], [1, 0], [1, 1]] },
    { type: "arrow", colour: "#111111", name: "march", path: [[0, 0], [1, 1]] },
    { type: "arrow", colour: "#222222", name: "raid", path: [[0, 0], [1, 1]] },
    { type: "route", colour: "#333333", name: "sea road", path: [[0, 0], [1, 1]] },
    { type: "route", colour: "#333333", name: "second", path: [[0, 0], [1, 1]] }
  ] };
  const k = HM.sceneKey(sc, { "#222222": "Raiders" });
  assert.deepEqual(k.map((e) => [e.label, e.group, e.marks.join("+")]), [
    ["Realm", "who", "core+arrow"], ["Raiders", "who", "arrow"], ["sea road + 1 more", "movement", "route"]
  ]);
  assert.deepEqual(HM.sceneKey({ key: [{ colour: "#1", label: "X" }] })[0].label, "X");
  assert.deepEqual(HM.sceneKey(null), []);
});

test("every colour used by a scene's areas and arrows has a name in SCENE_ACTORS", () => {
  for (const [id, byCh] of Object.entries(SCENES)) {
    const names = new Set(Object.keys(ACTORS[id] || {}).map((c) => c.toLowerCase()));
    for (const [ch, sc] of Object.entries(byCh)) {
      for (const L of sc.layers.filter((L) => (L.type === "area" || L.type === "arrow") && L.colour)) {
        assert.ok(names.has(L.colour.toLowerCase()) || L.who, `${id}/${ch}: ${L.name || L.type} uses ${L.colour}, which has no actor name`);
      }
    }
  }
});

// ---- end to end
let browser;
before(async () => { browser = await puppeteer.launch({ headless: true }); });
after(async () => { await browser?.close(); });
async function open(hash) {
  const ctx = await browser.createBrowserContext();
  const page = await ctx.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));
  page.on("console", (m) => { if (m.type() === "error") errors.push(m.text()); });
  await page.goto(pathToFileURL(path.join(APP, "index.html")).href + hash);
  await page.waitForFunction("window.APP && APP.ready");
  return { page, errors, ctx };
}
const settle = (ms = 900) => new Promise((r) => setTimeout(r, ms));

test("e2e: timeline shows parts with triangles; folding hides children and the map shows the part", async () => {
  const { page, errors, ctx } = await open("#russia/1700-01-01");
  await settle();
  await page.evaluate(() => APP.setAllFolds(false));
  await settle(200);
  assert.ok(await page.$('#tl [data-twisty="ch-romanov-empire"]'), "the Romanov part has a triangle");
  assert.ok(await page.$('#tl g.chapter[data-id="ch-peter-s-window-on-the-baltic"]'), "children visible when open");
  await page.click('#tl [data-twisty="ch-romanov-empire"]');
  await settle(200);
  assert.equal(await page.evaluate(() => APP.isFolded("ch-romanov-empire")), true);
  assert.equal(await page.$('#tl g.chapter[data-id="ch-peter-s-window-on-the-baltic"]'), null, "children hidden when folded");
  assert.match(await page.$eval('#tl g.chapter[data-id="ch-romanov-empire"] text', (t) => t.textContent), /▸.*· 3/);
  assert.equal(await page.evaluate(() => APP.focus()), "ch-romanov-empire", "a folded part shows its own map");
  await page.click('#tl [data-twisty="ch-romanov-empire"]');
  await settle(200);
  assert.equal(await page.evaluate(() => APP.isFolded("ch-romanov-empire")), false);
  assert.deepEqual(errors, []);
  await ctx.close();
});

test("e2e: selecting a detail opens its folded parts and shows breadcrumbs; a part lists its chapters", async () => {
  const { page, errors, ctx } = await open("#russia/1700-01-01");
  await settle();
  await page.evaluate(() => APP.setAllFolds(true));
  await page.evaluate(() => APP.select("ch-canada-in-siberia"));
  await settle();
  assert.equal(await page.evaluate(() => APP.isFolded("ch-civil-war")), false);
  assert.equal(await page.evaluate(() => APP.isFolded("ch-revolution")), false);
  assert.deepEqual(await page.$$eval("#card-crumbs a", (as) => as.map((a) => a.textContent)), ["Revolution and the Soviet state", "Civil War"]);
  await page.click('#card-crumbs a[data-id="ch-revolution"]');
  await settle();
  assert.match(await page.$eval("#card .kind", (e) => e.textContent), /Part/);
  const kids = await page.$$eval("#card-kids a", (as) => as.map((a) => a.textContent));
  assert.deepEqual(kids, ["War and revolution", "Civil War", "Stalin's revolution from above", "Pact, partition and invasion"]);
  await page.evaluate(() => APP.setAllFolds(false));
  assert.deepEqual(errors, []);
  await ctx.close();
});

test("e2e: zoom-aware focus and a colour key that names who is who", async () => {
  const { page, errors, ctx } = await open("#ww2/1942-06-01/ch-barbarossa-to-stalingrad");
  await settle();
  const key = await page.$$eval("#scene-key .sk-row span", (s) => s.map((x) => x.textContent));
  assert.ok(key.includes("Germany and its allies") && key.includes("Soviet Union"), key.join(" | "));
  await page.click("#scene-key .sk-toggle");
  assert.equal(await page.$("#scene-key .sk-body"), null, "key folds");
  await page.click("#scene-key .sk-toggle");
  assert.ok(await page.$("#scene-key .sk-body"));
  await page.click("#card .close");
  await page.evaluate(() => APP.zoomTimeline("1937-01-01", "1946-01-01"));
  await settle(300);
  await page.evaluate(() => APP.setCursor(new Date(Date.UTC(1942, 5, 1))));
  await settle(300);
  const wide = await page.evaluate(() => APP.focus());
  await page.evaluate(() => APP.zoomTimeline("1941-06-01", "1943-03-01"));
  await page.evaluate(() => APP.setCursor(new Date(Date.UTC(1942, 5, 1))));
  await settle(300);
  const close = await page.evaluate(() => APP.focus());
  assert.notEqual(wide, close, `wide ${wide} vs close ${close}`);
  assert.deepEqual(errors, []);
  await ctx.close();
});
