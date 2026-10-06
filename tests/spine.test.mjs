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

test("spine: Vol. 2 gap and world snapshot selection", () => {
  const L = HM.masterLayout(DS);
  const early = L.periods.find((p) => p.id === "early-modern");
  assert.equal(early.gapAfter, "1800-1939 not yet built (Penguin Vol. 2)");
  const snaps = loadSnapshots();
  assert.equal(HM.snapshotAt(snaps, 1301).year, 1300);
  assert.equal(HM.snapshotAt(snaps, 1715).year, 1715);
  assert.equal(HM.snapshotAt(snaps, 1938).year, 1914);
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
