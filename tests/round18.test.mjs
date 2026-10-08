import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
import path from "node:path";
import { ROOT, HM, loadDatasets } from "./load.mjs";

const DS = loadDatasets();
const imperial = HM.normalise(DS.imperial);
function loadPlates() {
  const ctx = { window: { PLATES: {}, DATASETS: DS }, encodeURIComponent };
  vm.createContext(ctx);
  for (const f of fs.readdirSync(path.join(ROOT, "atlas", "plates")).filter((f) => f.endsWith(".js"))) {
    vm.runInContext(fs.readFileSync(path.join(ROOT, "atlas", "plates", f), "utf8"), ctx, { filename: f });
  }
  return JSON.parse(JSON.stringify(ctx.window.PLATES));
}
const PLATES = loadPlates();
const ROUND4 = [
  "colonial-empires-world-1914",
  "scramble-for-africa-1880-1914",
  "south-africa-boer-war-union-1899-1913",
  "russia-japan-asia-expansion-1865-1910",
  "southeast-asia-pacific-imperialism-1880-1914",
  "united-states-overseas-west-1865-1914",
  "balkan-crises-1908-1913"
];

test("Vol. 2 round 4 registers the imperial period and plates", () => {
  assert.ok(DS.imperial);
  assert.equal(DS.imperial.lanes[0].id, "canada");
  assert.equal(DS.imperial.lanes[0].pinned, true);
  assert.equal(DS.imperial.gapAfter, "1914-1939 not yet built (Penguin Vol. 2)");
  assert.equal(DS.national.gapAfter, undefined);
  for (const id of ROUND4) {
    assert.ok(PLATES[id], id);
    assert.ok(DS.imperial.plates.some((p) => p.id === id), `${id} missing from imperial dataset`);
    assert.equal(PLATES[id].viewer.split("/")[0], "imperial");
  }
});

test("Vol. 2 round 4 includes Canada, colonial comparison and non-European lenses", () => {
  const text = JSON.stringify(DS.imperial);
  for (const term of ["Komagata Maru", "Boer War", "residential schools", "Chinese head tax", "Belgian Congo", "rubber", "Herero", "Nama", "British India", "famines", "Dutch East Indies", "Aceh", "Ethical Policy", "Portuguese Timor", "Adwa", "Korea", "Taiwan", "Panama", "Balkan Wars"]) {
    assert.match(text, new RegExp(term, "i"), term);
  }
  assert.ok(imperial.chapters.some((c) => c.region === "asia"));
  assert.ok(imperial.chapters.some((c) => c.region === "africa"));
  assert.ok(imperial.chapters.some((c) => c.region === "americas"));
  assert.ok(imperial.chapters.some((c) => c.region === "europe"));
});
