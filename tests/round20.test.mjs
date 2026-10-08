import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
import path from "node:path";
import { ROOT, HM, loadDatasets } from "./load.mjs";

const DS = loadDatasets();
const interwar1 = HM.normalise(DS.interwar1);

function loadPlates() {
  const ctx = { window: { PLATES: {}, DATASETS: DS }, encodeURIComponent };
  vm.createContext(ctx);
  for (const f of fs.readdirSync(path.join(ROOT, "atlas", "plates")).filter((f) => f.endsWith(".js"))) {
    vm.runInContext(fs.readFileSync(path.join(ROOT, "atlas", "plates", f), "utf8"), ctx, { filename: f });
  }
  return JSON.parse(JSON.stringify(ctx.window.PLATES));
}

const PLATES = loadPlates();
const ROUND6 = [
  "russian-civil-war-allied-intervention-1918-1921",
  "polish-soviet-war-borders-1920-1921",
  "ussr-union-republics-1922-1924",
  "turkey-sevres-lausanne-1920-1923",
  "middle-east-mandates-asia-1919-1929",
  "british-commonwealth-autonomy-1919-1931",
  "china-japan-warlords-northern-expedition-1912-1931",
  "league-loans-disarmament-1919-1929"
];

test("Vol. 2 round 6 registers the inter-war part I period and plates", () => {
  assert.ok(DS.interwar1);
  assert.equal(DS.interwar1.lanes[0].id, "canada");
  assert.equal(DS.interwar1.lanes[0].pinned, true);
  assert.equal(DS.interwar1.gapAfter, undefined);
  assert.equal(DS.ww1.gapAfter, undefined);
  for (const id of ROUND6) {
    assert.ok(PLATES[id], id);
    assert.ok(DS.interwar1.plates.some((p) => p.id === id), `${id} missing from interwar1 dataset`);
    assert.equal(PLATES[id].viewer.split("/")[0], "interwar1");
  }
});

test("Vol. 2 round 6 keeps Russia central and includes Canada, mandates and Asia", () => {
  const text = JSON.stringify(DS.interwar1);
  for (const term of [
    "Red heartland", "Kolchak", "Denikin", "Yudenich", "Wrangel", "Czech Legion",
    "Vladivostok", "Archangel", "Canada", "war communism", "NEP", "USSR",
    "Curzon Line", "Miracle on the Vistula", "Sèvres", "Lausanne", "Amritsar",
    "Chanak", "Halibut", "King-Byng", "Balfour", "Winnipeg General Strike",
    "May Fourth", "Northern Expedition", "Shanghai massacre", "Locarno"
  ]) {
    assert.match(text, new RegExp(term, "i"), term);
  }
  assert.ok(interwar1.chapters.some((c) => c.region === "asia"));
  assert.ok(interwar1.chapters.some((c) => c.region === "islamic"));
  assert.ok(interwar1.chapters.some((c) => c.region === "americas"));
  assert.ok(interwar1.chapters.some((c) => c.region === "europe"));
});
