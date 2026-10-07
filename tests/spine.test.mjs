import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
import path from "node:path";
import { pathToFileURL } from "node:url";
import puppeteer from "puppeteer";
import { ROOT, HM, loadDatasets } from "./load.mjs";

const DS = loadDatasets();
function loadSnapshots() {
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(path.join(ROOT, "app", "data", "world-snapshots.js"), "utf8"), ctx);
  return JSON.parse(JSON.stringify(ctx.window.WORLD_SNAPSHOTS));
}
function loadHistDates() {
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(path.join(ROOT, "app", "data", "hist", "index.js"), "utf8"), ctx);
  return ctx.window.HIST_BASEMAP_DATES;
}
function loadRegions() {
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(path.join(ROOT, "atlas", "data", "regions-eu.js"), "utf8"), ctx);
  return ctx.window.ATLAS_REGIONS;
}

test("spine: Russia and Maritime are threads, not master-strip eras", () => {
  assert.equal(DS.russia.kind, "thread");
  assert.equal(DS.maritime.kind, "thread");
  const L = HM.masterLayout(DS);
  assert.equal(L.periods.some((p) => p.id === "russia"), false);
  assert.equal(L.periods.some((p) => p.id === "maritime"), false);
  assert.deepEqual(L.periods.map((p) => p.id), ["ancient", "medieval", "transition", "early-modern", "ww2"]);
});

test("spine: Vol. 2 gap, world snapshots and historical basemap date selection", () => {
  const L = HM.masterLayout(DS);
  const early = L.periods.find((p) => p.id === "early-modern");
  assert.equal(early.gapAfter, "1800-1939 not yet built (Penguin Vol. 2)");
  const snaps = loadSnapshots();
  assert.equal(HM.snapshotAt(snaps, 1301).year, 1300);
  assert.equal(HM.snapshotAt(snaps, 1715).year, 1715);
  assert.equal(HM.snapshotAt(snaps, 1938).year, 1914);
  const histDates = loadHistDates();
  assert.equal(HM.histBasemapDateAtOrBefore(histDates, 1789), 1783);
  assert.equal(HM.histBasemapDateAtOrBefore(histDates, 1715), 1715);
  assert.equal(HM.histBasemapDateAtOrBefore(histDates, -999), -1000);
  assert.equal(HM.histBasemapDateAtOrBefore(histDates, 1), -1);
});

test("spine: unknown region codes in snapshots fail", () => {
  const regions = loadRegions();
  const snaps = loadSnapshots();
  assert.deepEqual(HM.validateWorldSnapshots(snaps, regions), []);
  const bad = JSON.parse(JSON.stringify(snaps));
  bad[0].polities[0].regions.push("NO-SUCH-REGION");
  assert.match(HM.validateWorldSnapshots(bad, regions).join("\n"), /NO-SUCH-REGION/);
});

test("e2e: switching era carries and clamps the current year; dropdown has Threads", async () => {
  const browser = await puppeteer.launch({ headless: true });
  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900 });
    await page.goto(pathToFileURL(path.join(ROOT, "app", "index.html")).href + "#early-modern/1715");
    await page.waitForFunction("window.APP && APP.ready");
    await page.select("#dataset", "medieval");
    await page.waitForFunction(() => location.hash.startsWith("#medieval/1501-01-01"));
    await page.evaluate(() => APP.loadDataset("early-modern", { cursor: new Date(Date.UTC(1715, 0, 1)) }));
    await page.select("#dataset", "russia");
    await page.waitForFunction(() => location.hash.startsWith("#russia/1715"));
    const groups = await page.evaluate(() => [...document.querySelectorAll("#dataset optgroup")].map((g) => ({ label:g.label, ids:[...g.children].map((o)=>o.value) })));
    assert.ok(groups.find((g) => g.label === "Threads").ids.includes("russia"));
    assert.equal(await page.$('#master .m-period[data-id="russia"]') === null, true);
  } finally {
    await browser.close();
  }
});

test("e2e: historical basemap lazy loader works from file URL", async () => {
  const browser = await puppeteer.launch({ headless: true });
  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900 });
    await page.goto(pathToFileURL(path.join(ROOT, "app", "index.html")).href + "#early-modern/1789");
    await page.waitForFunction("window.APP && APP.ready");
    await page.waitForFunction("window.APP.histBasemapLoaded && APP.histBasemapLoaded()", { timeout: 8000 });
    const info = await page.evaluate(() => ({
      date: APP.histBasemapDate(),
      loaded: !!(window.HIST_BASEMAPS && window.HIST_BASEMAPS["1783"]),
      src: document.querySelector('script[data-hist-basemap="1783"]')?.getAttribute("src") || "",
      label: document.querySelector("#world-date-label")?.textContent || ""
    }));
    assert.equal(info.date, 1783);
    assert.equal(info.loaded, true);
    assert.match(info.src, /data\/hist\/world_1783\.js$/);
    assert.equal(info.label, "(1783 map)");
  } finally {
    await browser.close();
  }
});
test("e2e: no-hash landing opens ancient spine, tour menu and orientation splash", async () => {
  const browser = await puppeteer.launch({ headless: true });
  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900 });
    await page.goto(pathToFileURL(path.join(ROOT, "app", "index.html")).href);
    await page.waitForFunction("window.APP && APP.ready");
    const info = await page.evaluate(() => ({
      hash: location.hash,
      dataset: APP.state.dsId,
      cursor: document.querySelector("#cursor-date").textContent,
      tourMenuOpen: !document.querySelector("#tour-menu").hidden,
      orientationOpen: !document.querySelector("#orientation").hidden,
      title: document.querySelector("#orientation-title")?.textContent || ""
    }));
    assert.equal(info.hash, "");
    assert.equal(info.dataset, "ancient");
    assert.equal(info.cursor, "1800 BC");
    assert.equal(info.tourMenuOpen, false, "tour menu waits until the orientation splash is gone");
    assert.equal(info.orientationOpen, true);
    assert.match(info.title, /History of the World/);
  } finally {
    await browser.close();
  }
});
test("e2e: AD 1 historical underlay draws a visible Roman Empire", async () => {
  const browser = await puppeteer.launch({ headless: true });
  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900 });
    await page.goto(pathToFileURL(path.join(ROOT, "app", "index.html")).href + "#ancient/1");
    await page.waitForFunction("window.APP && APP.ready");
    await page.waitForFunction("window.APP.histBasemapLoaded && APP.histBasemapLoaded()", { timeout: 8000 });
    await page.evaluate(() => APP.flyTo([[-10, 30], [45, 55]], 0));
    await new Promise((r) => setTimeout(r, 300));
    const roman = await page.$$eval("#map .world-underlay path.hist-polity", (paths) => paths.map((p) => ({
      name: p.getAttribute("data-name") || "",
      d: p.getAttribute("d") || "",
      fillOpacity: Number(p.getAttribute("fill-opacity") || getComputedStyle(p).fillOpacity || 0),
      stroke: p.getAttribute("stroke") || getComputedStyle(p).stroke || "",
      strokeOpacity: Number(p.getAttribute("stroke-opacity") || getComputedStyle(p).strokeOpacity || 0),
      strokeWidth: Number(p.getAttribute("stroke-width") || getComputedStyle(p).strokeWidth || 0)
    })).find((p) => /Roman/i.test(p.name)) || null);
    assert.ok(roman, "Roman Empire feature is present");
    assert.ok(roman.d.length > 100, "Roman Empire feature has real geometry");
    assert.ok(roman.fillOpacity >= 0.25, `fill-opacity ${roman.fillOpacity}`);
    assert.ok(roman.stroke && roman.stroke !== "none", "Roman Empire has a visible stroke colour");
    assert.ok(roman.strokeOpacity >= 0.5, `stroke-opacity ${roman.strokeOpacity}`);
    assert.ok(roman.strokeWidth >= 0.6, `stroke-width ${roman.strokeWidth}`);
    const romanLabel = await page.$$eval("#map .world-underlay g.hist-label", (labels) => labels.map((g) => ({
      text: g.textContent || "",
      display: g.style.display || getComputedStyle(g).display,
      box: (() => { const r = g.getBoundingClientRect(); return { width: r.width, height: r.height }; })()
    })).find((g) => /Roman Empire/i.test(g.text)) || null);
    assert.ok(romanLabel, "Roman Empire label exists");
    assert.notEqual(romanLabel.display, "none", "Roman Empire label is rendered");
    assert.ok(romanLabel.box.width > 0 && romanLabel.box.height > 0, "Roman Empire label has screen size");
  } finally {
    await browser.close();
  }
});