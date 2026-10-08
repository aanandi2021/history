import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
import path from "node:path";
import { ROOT, HM, loadDatasets } from "./load.mjs";

const DS = loadDatasets();
const revolution = HM.normalise(DS.revolution);
function loadPlates() {
  const ctx = { window: { PLATES: {}, DATASETS: DS }, encodeURIComponent };
  vm.createContext(ctx);
  for (const f of fs.readdirSync(path.join(ROOT, "atlas", "plates")).filter((f) => f.endsWith(".js"))) {
    vm.runInContext(fs.readFileSync(path.join(ROOT, "atlas", "plates", f), "utf8"), ctx, { filename: f });
  }
  return JSON.parse(JSON.stringify(ctx.window.PLATES));
}
const PLATES = loadPlates();

const ROUND1 = [
  "american-revolution-loyalist-north-1763-1783",
  "french-revolution-france-1789-1799",
  "napoleonic-europe-empire-1812",
  "congress-vienna-settlement-1815",
  "haiti-abolition-war-of-1812-atlantic-1791-1815"
];

test("Vol. 2 round 1 registers the revolution period and plates", () => {
  assert.ok(DS.revolution);
  assert.equal(DS.revolution.lanes[0].id, "canada");
  assert.equal(DS.revolution.lanes[0].pinned, true);
  assert.equal(DS.revolution.gapAfter, undefined);
  for (const id of ROUND1) {
    assert.ok(PLATES[id], id);
    assert.ok(DS.revolution.plates.some((p) => p.id === id), `${id} missing from revolution dataset`);
    assert.equal(PLATES[id].viewer.split("/")[0], "revolution");
  }
});

test("Vol. 2 round 1 includes the required Canadian and Atlantic lenses", () => {
  const text = JSON.stringify(DS.revolution);
  for (const term of ["Quebec Act", "invasion of Quebec", "Loyalist", "Constitutional Act", "Brock", "Queenston", "Tecumseh", "York", "Chateauguay", "Treaty of Ghent", "Haitian Revolution", "Toussaint", "abolishes the Atlantic slave trade", "Indigenous", "Egypt", "Maratha", "Buenos Aires"]) {
    assert.match(text, new RegExp(term, "i"), term);
  }
  assert.ok(revolution.chapters.some((c) => c.region === "americas"));
});
