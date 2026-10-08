import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
import path from "node:path";
import { ROOT, HM, loadDatasets } from "./load.mjs";

const DS = loadDatasets();
const ww1 = HM.normalise(DS.ww1);
function loadPlates() {
  const ctx = { window: { PLATES: {}, DATASETS: DS }, encodeURIComponent };
  vm.createContext(ctx);
  for (const f of fs.readdirSync(path.join(ROOT, "atlas", "plates")).filter((f) => f.endsWith(".js"))) {
    vm.runInContext(fs.readFileSync(path.join(ROOT, "atlas", "plates", f), "utf8"), ctx, { filename: f });
  }
  return JSON.parse(JSON.stringify(ctx.window.PLATES));
}
const PLATES = loadPlates();
const ROUND5 = [
  "ww1-europe-alliances-july-crisis-1914",
  "western-front-1914-1918",
  "eastern-front-russia-1914-1918",
  "middle-east-secondary-theatres-1914-1918",
  "world-at-war-1914-1918",
  "versailles-europe-1919-1920"
];

test("Vol. 2 round 5 registers the WW1 period and plates", () => {
  assert.ok(DS.ww1);
  assert.equal(DS.ww1.lanes[0].id, "canada");
  assert.equal(DS.ww1.lanes[0].pinned, true);
  assert.equal(DS.ww1.gapAfter, "1920-1939 not yet built (Penguin Vol. 2)");
  assert.equal(DS.imperial.gapAfter, undefined);
  for (const id of ROUND5) {
    assert.ok(PLATES[id], id);
    assert.ok(DS.ww1.plates.some((p) => p.id === id), `${id} missing from WW1 dataset`);
    assert.equal(PLATES[id].viewer.split("/")[0], "ww1");
  }
});

test("Vol. 2 round 5 includes Canada, Russia, global and peace lenses", () => {
  const text = JSON.stringify(DS.ww1);
  for (const term of ["Valcartier", "Second Ypres", "Beaumont-Hamel", "Vimy", "Passchendaele", "Halifax", "conscription", "intern", "Tannenberg", "Brusilov", "Brest-Litovsk", "Armenian genocide", "Sykes-Picot", "Balfour", "Arab Revolt", "Indian Army", "Chinese Labour Corps", "Tsingtao", "May Fourth", "Amritsar", "Egyptian revolution"]) {
    assert.match(text, new RegExp(term, "i"), term);
  }
  assert.ok(ww1.chapters.some((c) => c.region === "asia"));
  assert.ok(ww1.chapters.some((c) => c.region === "islamic"));
  assert.ok(ww1.chapters.some((c) => c.region === "americas"));
  assert.ok(ww1.chapters.some((c) => c.region === "europe"));
});