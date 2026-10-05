// Atlas plates: model checks in Node, then each plate rendered in headless Chrome with the network blocked.
// The self-review warnings (label collisions, labels under the legend, arrow labels that don't fit) must be empty,
// because the mapify skill relies on them to tell it when a plate is done.
import test, { before, after } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { createRequire } from "node:module";
import puppeteer from "puppeteer";
import { ROOT } from "./load.mjs";

const ATLAS = path.join(ROOT, "atlas");
const P = createRequire(import.meta.url)(path.join(ATLAS, "js", "plate-model.js"));
const URL0 = pathToFileURL(path.join(ATLAS, "index.html")).href;

function loadPlates() {
  const ctx = { window: { PLATES: {} }, encodeURIComponent };
  vm.createContext(ctx);
  for (const f of fs.readdirSync(path.join(ATLAS, "plates")).filter((f) => f.endsWith(".js"))) {
    vm.runInContext(fs.readFileSync(path.join(ATLAS, "plates", f), "utf8"), ctx, { filename: f });
  }
  return JSON.parse(JSON.stringify(ctx.window.PLATES));
}
const PLATES = loadPlates();

test("every plate file is listed in atlas/index.html", () => {
  const html = fs.readFileSync(path.join(ATLAS, "index.html"), "utf8");
  for (const f of fs.readdirSync(path.join(ATLAS, "plates")).filter((f) => f.endsWith(".js"))) assert.ok(html.includes(`plates/${f}`), `${f} missing from index.html`);
});

test("every plate validates and its id matches its key", () => {
  assert.ok(Object.keys(PLATES).length >= 2);
  for (const [k, spec] of Object.entries(PLATES)) {
    assert.equal(spec.id, k);
    assert.deepEqual(P.validate(spec), [], k);
  }
});

test("map and text refer to each other (coverage thresholds from the book's spreads)", () => {
  for (const [k, spec] of Object.entries(PLATES)) {
    const c = P.coverage(spec);
    assert.ok(c.entriesMapped >= 0.8, `${k}: only ${Math.round(c.entriesMapped * 100)}% of text entries point at the map`);
    assert.ok(c.layersExplained >= 0.6, `${k}: only ${Math.round(c.layersExplained * 100)}% of named layers are explained in the text`);
  }
});

test("symbol groups cover the registry exactly once", () => {
  const grouped = Object.values(P.SYMBOL_GROUPS).flat();
  assert.equal(new Set(grouped).size, grouped.length, "a symbol is listed twice");
  assert.deepEqual([...grouped].sort(), Object.keys(P.SYMBOLS).sort());
});

test("validate catches the mistakes a generator is likely to make", () => {
  const good = { id: "t", title: "T", figures: [{ caption: "c", extent: [[0, 0], [10, 10]], layers: [{ id: "a", type: "point", at: [5, 5] }] }], text: { sections: [{ heading: "h", entries: [{ text: "x", refs: ["a"] }] }] } };
  assert.deepEqual(P.validate(good), []);
  const bad = (mut) => { const s = JSON.parse(JSON.stringify(good)); mut(s); return P.validate(s).join(" | "); };
  assert.match(bad((s) => { s.figures[0].layers[0].at = [5, 95]; }), /needs at/);
  assert.match(bad((s) => { s.figures[0].layers[0].at = [200, 5]; }), /needs at/);
  assert.match(bad((s) => { s.figures[0].layers[0].symbol = "dragon"; }), /unknown symbol/);
  assert.match(bad((s) => { s.text.sections[0].entries[0].refs = ["nope"]; }), /unknown layer nope/);
  assert.match(bad((s) => { s.figures[0].extent = [[10, 0], [0, 10]]; }), /extent/);
  assert.match(bad((s) => { delete s.figures[0].caption; }), /caption/);
  assert.match(bad((s) => { s.figures = [1, 2, 3, 4, 5].map(() => good.figures[0]); }), /at most four/);
  assert.match(bad((s) => { s.figures[0].layers.push({ id: "a", type: "point", at: [1, 1] }); }), /duplicate layer id a/);
  assert.match(bad((s) => { s.figures[0].layers.push({ type: "arrow", path: [[1, 1]] }); }), /at least two/);
  // round 2 grammar (PDF pp. 34–53)
  assert.match(bad((s) => { s.figures[0].layers.push({ type: "area", around: [[1, 1]], tier: "vassal" }); }), /unknown tier vassal/);
  assert.match(bad((s) => { s.figures[0].layers.push({ type: "boundary", style: "zigzag", path: [[1, 1], [2, 2]] }); }), /unknown boundary style/);
  assert.match(bad((s) => { s.figures[0].layers.push({ type: "route", style: "highway", path: [[1, 1], [2, 2]] }); }), /unknown route style/);
  assert.match(bad((s) => { s.figures[0].layers.push({ type: "boundary", style: "wall", path: [[1, 1], [2, 2]], dates: [[1.5, "214"]] }); }), /dates must be/);
  assert.match(bad((s) => { s.figures[0].layers.push({ type: "point", at: [1, 1], halo: "not a colour!" }); }), /bad halo/);
});

let browser;
before(async () => { browser = await puppeteer.launch({ headless: true }); });
after(async () => { await browser?.close(); });

async function open(hash) {
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 1000 });
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));
  page.on("console", (m) => { if (m.type() === "error") errors.push(m.text()); });
  await page.setRequestInterception(true);
  page.on("request", (r) => (r.url().startsWith("file:") || r.url().startsWith("data:") || r.url().startsWith("blob:") ? r.continue() : (errors.push("network: " + r.url()), r.abort())));
  await page.goto(URL0 + hash);
  await page.waitForFunction("window.ATLAS && ATLAS.ready", { timeout: 10000 });
  return { page, errors };
}

for (const id of Object.keys(PLATES)) {
  test(`plate ${id} renders cleanly with no label collisions`, async () => {
    const { page, errors } = await open("#" + id);
    const cur = await page.evaluate(() => window.ATLAS.current);
    assert.deepEqual(errors, []);
    assert.deepEqual(cur.errors, []);
    assert.deepEqual(cur.warnings, [], "self-review warnings");
    const figs = await page.$$eval("svg.fig", (s) => s.length);
    assert.equal(figs, PLATES[id].figures.length);
    const caps = await page.$$eval("figcaption", (c) => c.map((x) => x.textContent));
    assert.deepEqual(caps, PLATES[id].figures.map((f) => f.caption));
    await page.screenshot({ path: path.join(ROOT, "tests", "screenshots", `atlas-${id}.png`), fullPage: true });
    await page.close();
  });
}

test("hovering a text entry lights its map layers, and hovering a layer lights its entries", async () => {
  const { page } = await open("#maritime-monsoon");
  const entry = await page.$('.entry[data-refs~="an-lushan"]');
  await entry.hover();
  let st = await page.evaluate(() => ({
    focus: document.querySelector(".spread").classList.contains("focus"),
    hot: [...document.querySelectorAll(".layer.hot")].map((e) => e.dataset.layer)
  }));
  assert.ok(st.focus);
  assert.ok(st.hot.includes("an-lushan") && st.hot.includes("changan") && st.hot.includes("tang"), st.hot.join());
  await page.hover('[data-layer="borobudur"] circle.hit');
  st = await page.evaluate(() => [...document.querySelectorAll(".entry.hot")].map((e) => e.textContent));
  assert.equal(st.length, 1);
  assert.match(st[0], /Borobudur rises/);
  await page.mouse.move(2, 2);
  assert.equal(await page.evaluate(() => document.querySelector(".spread").classList.contains("focus")), false);
  await page.close();
});

test("a figure exports as a standalone SVG that parses and keeps its styles inline", async () => {
  const { page } = await open("#hammurabi");
  const svg = await page.evaluate(() => window.ATLAS.figureSVG(1));
  assert.match(svg, /^<\?xml/);
  assert.ok(!/class="[^"]*hot/.test(svg));
  const ok = await page.evaluate((s) => !new DOMParser().parseFromString(s, "image/svg+xml").querySelector("parsererror"), svg);
  assert.ok(ok, "SVG does not parse");
  assert.match(svg, /fill="#e07b39"/, "area colour is not inline");
  assert.ok(svg.length < 600000, `export is ${svg.length} bytes`);
  await page.close();
});

test("an invalid plate shows its problems instead of a broken map", async () => {
  const { page } = await open("#key");
  const res = await page.evaluate(() => {
    const host = document.createElement("div");
    document.body.appendChild(host);
    return window.ATLAS.render({ id: "Bad Id", title: "x", figures: [] }, host).errors;
  });
  assert.ok(res.length >= 2);
  assert.equal(await page.$$eval(".errors li", (l) => l.length), res.length);
  await page.close();
});

test("the symbol key draws every registered symbol", async () => {
  const { page, errors } = await open("#key");
  assert.deepEqual(errors, []);
  const drawn = await page.$$eval(".keyitem svg", (s) => s.filter((x) => x.childElementCount > 0).length);
  assert.equal(drawn, Object.keys(P.SYMBOLS).length);
  await page.close();
});

test("viewer datasets and plates point at each other", async () => {
  const { loadDatasets } = await import("./load.mjs");
  const DS = loadDatasets();
  for (const [dsId, ds] of Object.entries(DS)) {
    for (const p of ds.plates || []) assert.ok(PLATES[p.id], `${dsId} lists plate ${p.id}, which does not exist`);
  }
  for (const [id, spec] of Object.entries(PLATES)) {
    if (!spec.viewer) continue;
    const period = spec.viewer.split("/")[0];
    assert.ok(DS[period], `plate ${id} points at viewer period ${period}, which does not exist`);
    assert.ok((DS[period].plates || []).some((p) => p.id === id), `plate ${id} links to ${period} but ${period} does not list it back`);
  }
});

test("a plate's header link goes back to its moment on the timeline", async () => {
  const { page, errors } = await open("#maritime-monsoon");
  const home = await page.$eval("a.home", (a) => ({ href: a.getAttribute("href"), text: a.textContent }));
  assert.equal(home.href, "../app/index.html#maritime/0800");
  assert.match(home.text, /timeline/);
  await page.evaluate(() => { location.hash = "key"; });
  await page.waitForFunction(() => document.querySelector("a.home").getAttribute("href") === "../app/index.html");
  assert.deepEqual(errors, []);
  await page.close();
});

test("round 2 grammar draws: wall battlements, dates on lines, tiers, roads and origin halos", async () => {
  const { page, errors } = await open("#han-china");
  const st = await page.evaluate(() => ({
    merlons: document.querySelectorAll('[data-layer="wall"] path.merlons, [data-layer="wall-2"] path.merlons').length,
    dates: [...document.querySelectorAll("text.line-date")].map((t) => t.textContent),
    stripe: !!document.querySelector('pattern[id^="pat-stripe-"]'),
    stipple: !!document.querySelector('pattern[id^="pat-stipple-"]'),
    road: document.querySelectorAll('[data-layer="zhidao"] path').length,
    halos: document.querySelectorAll('[data-layer="dunhuang"] circle:not(.hit)').length,
    influenceOpacity: +document.querySelector('[data-layer="western-regions"] path').getAttribute("fill-opacity")
  }));
  assert.deepEqual(errors, []);
  assert.equal(st.merlons, 2);
  assert.deepEqual(st.dates.sort(), ["121–111 B.C.", "138–126 B.C.", "c. 101 B.C."]);
  assert.ok(st.stripe && st.stipple, "conquest stripes and Qiang stipple are defined");
  assert.equal(st.road, 2, "a road is a pale bed plus dark dashes");
  assert.ok(st.halos >= 1, "commandery seats carry an origin halo");
  assert.ok(st.influenceOpacity < 0.3, "influence reads paler than the core");
  await page.close();
});