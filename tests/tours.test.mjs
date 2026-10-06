import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
import path from "node:path";
import { ROOT, HM, loadDatasets } from "./load.mjs";

const DS = loadDatasets();
function loadTours() {
  const ctx = { window: { TOURS: {} } };
  vm.createContext(ctx);
  for (const f of fs.readdirSync(path.join(ROOT, "app", "tours")).filter((f) => f.endsWith(".js"))) {
    vm.runInContext(fs.readFileSync(path.join(ROOT, "app", "tours", f), "utf8"), ctx, { filename: f });
  }
  return JSON.parse(JSON.stringify(ctx.window.TOURS));
}
const TOURS = loadTours();
const tourYearDate = (y) => y < 0 ? `-${String(Math.abs(y)).padStart(4, "0")}` : String(y).padStart(4, "0");
const plateIds = new Set(fs.readdirSync(path.join(ROOT, "atlas", "plates")).filter((f) => f.endsWith(".js")).map((f) => f.replace(/\.js$/, "")));

test("tour schema: two pilot tours with answer cards and plain stops", () => {
  assert.deepEqual(Object.keys(TOURS).sort(), ["jewish-history", "rome-rise-fall"]);
  for (const tour of Object.values(TOURS)) {
    assert.equal(tour.id in TOURS, true);
    assert.ok(tour.title && tour.question && tour.intro);
    assert.ok(Array.isArray(tour.stops) && tour.stops.length >= 10);
    assert.ok(tour.answer?.pattern);
    assert.ok(tour.answer.reading?.length >= 3);
    for (const stop of tour.stops) {
      assert.equal(typeof stop.year, "number", `${tour.id}/${stop.title}: numeric year`);
      assert.ok(stop.era && DS[stop.era], `${tour.id}/${stop.title}: known era ${stop.era}`);
      assert.ok(stop.title && stop.text);
      assert.ok(!/\bfloor\b/i.test(stop.text), `${tour.id}/${stop.title}: banned word`);
      if (stop.focus) assert.equal(stop.focus.length, 2, `${tour.id}/${stop.title}: focus bounds`);
    }
  }
});

test("tour references resolve to datasets, years and plates", () => {
  for (const tour of Object.values(TOURS)) for (const stop of tour.stops) {
    const ds = DS[stop.era];
    const t = HM.parseDate(tourYearDate(stop.year));
    assert.ok(t >= HM.parseDate(ds.range[0]) && t <= HM.parseDate(ds.range[1]), `${tour.id}/${stop.title}: ${stop.year} inside ${stop.era}`);
    if (stop.plate) assert.ok(plateIds.has(stop.plate), `${tour.id}/${stop.title}: plate ${stop.plate} exists`);
  }
});
