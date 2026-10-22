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
const NEW_TOUR_IDS = [
  "after-empire", "atlantic-slave-trade", "colonial-powers", "indigenous-north-america",
  "mongols-to-mughals", "south-africa-colony-apartheid", "us-slavery-and-backlash",
];
const tourYearDate = (y) => y < 0 ? `-${String(Math.abs(y)).padStart(4, "0")}` : String(y).padStart(4, "0");
const plateIds = new Set(fs.readdirSync(path.join(ROOT, "atlas", "plates")).filter((f) => f.endsWith(".js")).map((f) => f.replace(/\.js$/, "")));

test("tour schema: two pilot tours and seven investigations with answer cards and plain stops", () => {
  assert.deepEqual(Object.keys(TOURS).sort(), [...NEW_TOUR_IDS, "jewish-history", "rome-rise-fall"].sort());
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
      assert.ok(Array.isArray(stop.places) && stop.places.length >= 2, `${tour.id}/${stop.title}: tour places`);
      for (const p of stop.places) {
        assert.ok(p.name, `${tour.id}/${stop.title}: place name`);
        assert.equal(typeof p.lon, "number", `${tour.id}/${stop.title}/${p.name}: lon`);
        assert.equal(typeof p.lat, "number", `${tour.id}/${stop.title}/${p.name}: lat`);
      }
    }
  }
});

test("new investigation stops provide named Wikipedia context and public citations", () => {
  for (const id of NEW_TOUR_IDS) {
    const tour = TOURS[id];
    assert.ok(tour.stops.length >= 10, `${id}: substantial investigation`);
    assert.ok(tour.answer.openQuestions?.length >= 2, `${id}: open questions`);
    assert.ok(tour.answer.sources?.length, `${id}: answer-level citations`);
    for (const source of tour.answer.sources) {
      assert.ok(source.label?.trim(), `${id}: named answer source`);
      assert.match(source.url, /^https:\/\/[^/\s]+\.[^/\s]+\/\S*$/, `${id}: direct answer source URL`);
    }
    for (const stop of tour.stops) {
      assert.ok(stop.wiki?.trim(), `${id}/${stop.title}: exact Wikipedia article`);
      assert.ok(stop.wideWiki?.trim(), `${id}/${stop.title}: wider Wikipedia article`);
      assert.ok(stop.sources?.length, `${id}/${stop.title}: public source`);
      for (const source of stop.sources) {
        assert.ok(source.label?.trim(), `${id}/${stop.title}: named source`);
        assert.match(source.url, /^https:\/\/[^/\s]+\.[^/\s]+\/\S*$/, `${id}/${stop.title}: direct public URL`);
        assert.ok(!source.url.includes("Special:Search"), `${id}/${stop.title}: no Wikipedia search link`);
      }
    }
  }
  for (const id of ["after-empire", "south-africa-colony-apartheid", "us-slavery-and-backlash"]) {
    assert.ok(TOURS[id].answer.reading.filter((book) => book.url).length >= 2, `${id}: sources for post-1945 synthesis`);
  }
});

test("tour references resolve to datasets, years and plates", () => {
  for (const tour of Object.values(TOURS)) for (const stop of tour.stops) {
    const ds = DS[stop.era];
    const t = HM.parseDate(tourYearDate(stop.year));
    assert.ok(t >= HM.parseDate(ds.range[0]) && t <= HM.parseDate(ds.range[1]), `${tour.id}/${stop.title}: ${stop.year} inside ${stop.era}`);
    if (stop.plate) assert.ok(plateIds.has(stop.plate), `${tour.id}/${stop.title}: plate ${stop.plate} exists`);
    if (stop.chapter) {
      const ch = HM.normalise(ds).byId.get(stop.chapter);
      assert.ok(ch && ch.kind === "chapter", `${tour.id}/${stop.title}: chapter ${stop.chapter} exists`);
      assert.ok(t >= ch.t0 && t <= ch.t1, `${tour.id}/${stop.title}: chapter ${stop.chapter} covers stop year`);
    }
  }
});

test("tour BC labels use historical years with no year zero", () => {
  const t = HM.parseDate(tourYearDate(-264));
  assert.equal(HM.fmtYear(t.getUTCFullYear()), "264 BC");
  for (const tour of Object.values(TOURS)) for (const stop of tour.stops.filter((s) => s.year < 0)) {
    const label = HM.fmtYear(HM.parseDate(tourYearDate(stop.year)).getUTCFullYear());
    assert.equal(label, `${Math.abs(stop.year)} BC`, `${tour.id}/${stop.title}: BC label`);
  }
});
