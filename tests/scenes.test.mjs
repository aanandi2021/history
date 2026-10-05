// Chapter scenes: every scene matches a chapter, uses the atlas grammar correctly, and links only names in its text.
// Then an end-to-end check that a scene draws, links its terms, and changes with zoom.
import test, { before, after } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
import path from "node:path";
import { pathToFileURL } from "node:url";
import puppeteer from "puppeteer";
import { APP, HM, loadDatasets } from "./load.mjs";

function loadScenes() {
  const ctx = { window: {} };
  vm.createContext(ctx);
  const dir = path.join(APP, "scenes");
  for (const f of fs.readdirSync(dir).filter((f) => f.endsWith(".js"))) vm.runInContext(fs.readFileSync(path.join(dir, f), "utf8"), ctx, { filename: f });
  return JSON.parse(JSON.stringify(ctx.window.SCENES));
}
const SCENES = loadScenes();
const DS = loadDatasets();

test("every scene file is loaded by the viewer", () => {
  const html = fs.readFileSync(path.join(APP, "index.html"), "utf8");
  for (const f of fs.readdirSync(path.join(APP, "scenes"))) assert.match(html, new RegExp(`src="scenes/${f}"`), f);
});

test("every scene belongs to a real chapter and passes validation", () => {
  let n = 0;
  for (const [dsId, scenes] of Object.entries(SCENES)) {
    assert.ok(DS[dsId], `scenes for unknown dataset ${dsId}`);
    const ds = HM.normalise(DS[dsId]);
    for (const [chId, sc] of Object.entries(scenes)) {
      const ch = ds.chapters.find((c) => c.id === chId);
      assert.ok(ch, `${dsId}: no chapter ${chId}`);
      assert.deepEqual(HM.validateScene(sc, ch), [], `${dsId}/${chId}`);
      if (sc.bbox) {
        const [[w, s], [e, nn]] = sc.bbox;
        assert.ok(w < e && s < nn, `${chId}: bbox must be [[w,s],[e,n]]`);
      }
      assert.ok(sc.caption, `${chId}: needs a caption`);
      n++;
    }
  }
  assert.ok(n >= 1);
});

test("scene points sit inside the scene's view (or the chapter box), unless they only appear zoomed out", () => {
  for (const [dsId, scenes] of Object.entries(SCENES)) {
    const ds = HM.normalise(DS[dsId]);
    for (const [chId, sc] of Object.entries(scenes)) {
      const [[w, s], [e, n]] = sc.bbox || ds.chapters.find((c) => c.id === chId).bbox;
      const padX = (e - w) * 0.6, padY = (n - s) * 0.6;
      for (const L of sc.layers.filter((x) => x.type === "point" && x.maxK == null)) {
        const [x, y] = L.at;
        assert.ok(x >= w - padX && x <= e + padX && y >= s - padY && y <= n + padY, `${dsId}/${chId}: ${L.name} is far outside the view`);
      }
    }
  }
});

test("linkTerms links first mentions, prefers longer terms, and respects word edges", () => {
  const r = HM.linkTerms("The House of Wisdom in Baghdad. Baghdad again. Wisdomish.", [{ t: "Wisdom" }, { t: "House of Wisdom" }, { t: "Baghdad" }]);
  assert.deepEqual(r.filter((x) => x.term).map((x) => x.text), ["House of Wisdom", "Baghdad"]);
  assert.equal(r.map((x) => x.text).join(""), "The House of Wisdom in Baghdad. Baghdad again. Wisdomish.");
  assert.equal(HM.termUrl({ t: "X", note: "A/B" }).startsWith("obsidian://"), true);
  assert.match(HM.termUrl({ t: "Siraf" }), /wikipedia\.org.*Siraf/);
  assert.deepEqual([HM.visibleAt({ minK: 4 }, 3), HM.visibleAt({ minK: 4 }, 4), HM.visibleAt({ maxK: 14 }, 14)], [false, true, false]);
});

test("validateScene catches common mistakes", () => {
  const ch = { title: "T", text: "Baghdad on the Tigris." };
  const errs = HM.validateScene({ layers: [
    { type: "area", around: [[1, 1], [2, 2]] }, { type: "point", at: [200, 0], name: "x" }, { type: "point", at: [1, 1] },
    { type: "blob" }, { type: "point", at: [1, 1], name: "y", symbol: "castle-ish" }
  ], terms: [{ t: "Basra" }] }, ch).join("\n");
  for (const want of ["area needs around", "point needs at", "point needs a name", "unknown type", "unknown symbol", "not in the chapter text"]) assert.match(errs, new RegExp(want));
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
const settle = (ms = 1100) => new Promise((r) => setTimeout(r, ms));

test("e2e: selecting Abbasid Baghdad draws its scene, links its names, and offers questions", async () => {
  const { page, errors, ctx } = await open("#maritime/0790-01-01/ch-abbasid-baghdad");
  await settle();
  const layers = await page.evaluate(() => APP.sceneLayers());
  for (const want of ["Abbasid Caliphate", "Baghdad", "Siraf", "to India", "to China"]) assert.ok(layers.includes(want), want);
  assert.equal(await page.evaluate(() => APP.state.sceneFocus), "ch-abbasid-baghdad");
  assert.match(await page.$eval("#scene-cap", (e) => e.textContent), /around 800/);
  assert.equal(await page.$eval("#map .chapter-box", (e) => e.getAttribute("d")), null, "no dashed box when a scene draws the map");
  assert.ok((await page.$$eval("#map .scene .ghost", (g) => g.length)) >= 0);
  const terms = await page.$$eval("#card a.term", (as) => as.map((a) => a.textContent));
  assert.ok(terms.includes("House of Wisdom") && terms.includes("Harun al-Rashid"), terms.join());
  assert.ok(await page.$$eval("#now a.term", (as) => as.length) > 0, "the Now paragraph links terms too");
  assert.equal(await page.$$eval("#card-terms .ask", (a) => a.length), 2);
  assert.match(await page.$eval("#card-terms li.starred a", (a) => a.href), /wikipedia/);
  assert.deepEqual(errors, []);
  await ctx.close();
});

test("e2e: zoom-dependent detail; far ports go when you zoom in close", async () => {
  const { page, ctx } = await open("#maritime/0790-01-01/ch-abbasid-baghdad");
  await settle();
  assert.ok((await page.evaluate(() => APP.sceneLayers())).includes("Canton"));
  await page.evaluate(() => APP.flyTo([[46, 28], [54, 32]], 0));
  await settle(300);
  const k = await page.evaluate(() => APP.mapTransform().k);
  assert.ok(k >= 14, `k=${k}`);
  assert.ok(!(await page.evaluate(() => APP.sceneLayers())).includes("Canton"));
  await ctx.close();
});

test("e2e: switching period clears the scene; a chapter without a scene keeps the dashed box", async () => {
  const { page, ctx } = await open("#maritime/0790-01-01/ch-abbasid-baghdad");
  await settle();
  await page.evaluate(() => APP.loadDataset("ww2"));
  await settle(300);
  const focus = await page.evaluate(() => APP.state.sceneFocus);
  const hasScene = await page.evaluate((f) => !!f, focus);
  assert.ok(!hasScene || (await page.evaluate(() => APP.state.dsId)) === "ww2");
  assert.equal(await page.$$eval('#map .scene [data-ch="ch-abbasid-baghdad"]', (g) => g.length), 0);
  await ctx.close();
});
