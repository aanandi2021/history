import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
import path from "node:path";
import { ROOT, HM, loadDatasets } from "./load.mjs";
const DS = loadDatasets();
const ww2 = HM.normalise(DS.ww2);
function loadPlates() {
  const ctx = { window: { PLATES: {}, DATASETS: DS }, encodeURIComponent };
  vm.createContext(ctx);
  for (const f of fs.readdirSync(path.join(ROOT, "atlas", "plates")).filter((f) => f.endsWith(".js"))) {
    vm.runInContext(fs.readFileSync(path.join(ROOT, "atlas", "plates", f), "utf8"), ctx, { filename: f });
  }
  return JSON.parse(JSON.stringify(ctx.window.PLATES));
}
const PLATES = loadPlates();
const ROUND8 = [
  "ww2-blitzkrieg-1939-1940",
  "ww2-battle-atlantic-1939-1945",
  "ww2-barbarossa-stalingrad-1941-1943",
  "ww2-axis-europe-holocaust-1942",
  "ww2-mediterranean-north-africa-1940-1943",
  "ww2-pacific-war-1941-1945",
  "ww2-northwest-europe-1944-1945",
  "ww2-war-end-human-cost-1945"
];

test("Vol. 2 round 8 registers eight Second World War plates", () => {
  assert.ok(DS.ww2);
  assert.equal(DS.ww2.lanes[0].id, "canada");
  assert.equal(DS.ww2.lanes[0].pinned, true);
  for (const id of ROUND8) {
    assert.ok(PLATES[id], id);
    assert.ok(DS.ww2.plates.some((p) => p.id === id), `${id} missing from ww2 dataset`);
    assert.equal(PLATES[id].viewer.split("/")[0], "ww2");
  }
});

test("Vol. 2 round 8 covers Canada, Russia, Holocaust, Pacific and settlement priorities", () => {
  const text = JSON.stringify(DS.ww2) + JSON.stringify(PLATES);
  for (const term of [
    "Halifax", "Sydney", "Royal Canadian Navy", "Juno Beach", "Scheldt", "Netherlands", "Hong Kong", "Kiska", "Ortona",
    "Leningrad", "Moscow", "Stalingrad", "Uranus", "Kursk", "Urals",
    "Auschwitz", "Treblinka", "Sobibor", "Bełżec", "Chełmno", "Majdanek", "Warsaw ghetto",
    "Pearl Harbor", "Midway", "Guadalcanal", "Hiroshima", "Nagasaki",
    "Yalta", "Potsdam", "Curzon", "Oder-Neisse", "German expulsions"
  ]) assert.match(text, new RegExp(term, "i"), term);
  assert.ok(ww2.chapters.some((c) => c.plate === "ww2-battle-atlantic-1939-1945"));
  assert.ok(ww2.chapters.some((c) => c.plate === "ww2-barbarossa-stalingrad-1941-1943"));
});
