import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
import path from "node:path";
import { ROOT, HM, loadDatasets } from "./load.mjs";

const DS = loadDatasets();
const national = HM.normalise(DS.national);
function loadPlates() {
  const ctx = { window: { PLATES: {}, DATASETS: DS }, encodeURIComponent };
  vm.createContext(ctx);
  for (const f of fs.readdirSync(path.join(ROOT, "atlas", "plates")).filter((f) => f.endsWith(".js"))) {
    vm.runInContext(fs.readFileSync(path.join(ROOT, "atlas", "plates", f), "utf8"), ctx, { filename: f });
  }
  return JSON.parse(JSON.stringify(ctx.window.PLATES));
}
const PLATES = loadPlates();
const ROUND3 = [
  "italian-unification-1850-1871",
  "german-unification-1866-1871",
  "balkans-san-stefano-berlin-1878",
  "us-civil-war-reconstruction-1854-1877",
  "canadian-confederation-cpr-resistance-1867-1885",
  "africa-before-partition-1870",
  "china-japan-treaty-ports-meiji-1850-1890"
];

test("Vol. 2 round 3 registers the national period and plates", () => {
  assert.ok(DS.national);
  assert.equal(DS.national.lanes[0].id, "canada");
  assert.equal(DS.national.lanes[0].pinned, true);
  assert.equal(DS.national.gapAfter, "1890-1939 not yet built (Penguin Vol. 2)");
  assert.equal(DS.restoration.gapAfter, undefined);
  for (const id of ROUND3) {
    assert.ok(PLATES[id], id);
    assert.ok(DS.national.plates.some((p) => p.id === id), `${id} missing from national dataset`);
    assert.equal(PLATES[id].viewer.split("/")[0], "national");
  }
});

test("Vol. 2 round 3 includes Canada-first, U.S. and colonial lenses", () => {
  const text = JSON.stringify(DS.national);
  for (const term of ["Confederation", "Red River", "Manitoba", "British Columbia", "Treaties 1-7", "Canadian Pacific Railway", "North-West Resistance", "Kansas-Nebraska", "Dred Scott", "Emancipation", "Reconstruction", "Jim Crow", "Italian unification", "German Empire", "Austria-Hungary", "San Stefano", "Indian Rebellion", "Crown rule", "Taiping", "Meiji", "Africa before partition", "Sokoto", "Zanzibar"]) {
    assert.match(text, new RegExp(term, "i"), term);
  }
  assert.ok(national.chapters.some((c) => c.region === "asia"));
  assert.ok(national.chapters.some((c) => c.region === "africa"));
  assert.ok(national.chapters.some((c) => c.region === "islamic"));
});
