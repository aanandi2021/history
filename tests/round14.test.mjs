import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
import path from "node:path";
import { ROOT, HM, loadDatasets } from "./load.mjs";

const DS = loadDatasets();
const early = HM.normalise(DS["early-modern"]);
const round14 = [
  ["china-india-manchu-mughal-1644-1765", "ch-china-india-asia"],
  ["atlantic-america-new-france-1607-1763", "ch-atlantic-america-new-france"],
  ["seven-years-war-global-1756-1763", "ch-seven-years-war-global"],
  ["prussia-poland-enlightened-despotism-1713-1795", "ch-prussia-poland-enlightened"]
];

function loadPlates() {
  const ctx = { window: { PLATES: {}, DATASETS: DS }, encodeURIComponent };
  vm.createContext(ctx);
  for (const f of fs.readdirSync(path.join(ROOT, "atlas", "plates")).filter((f) => f.endsWith(".js"))) vm.runInContext(fs.readFileSync(path.join(ROOT, "atlas", "plates", f), "utf8"), ctx, { filename: f });
  return JSON.parse(JSON.stringify(ctx.window.PLATES));
}
const PLATES = loadPlates();

test("round 14 extends early-modern through the atlas proper", () => {
  assert.equal(DS["early-modern"].range[1], "1800-01-01");
  for (const lane of ["asia", "america", "prussia"]) assert.ok(DS["early-modern"].lanes.some((l) => l.id === lane), lane);
});

test("round 14 registers four final Age of Reason plates", () => {
  const atlasHtml = fs.readFileSync(path.join(ROOT, "atlas", "index.html"), "utf8");
  for (const [id] of round14) {
    assert.ok(PLATES[id], `${id} did not load`);
    assert.ok(atlasHtml.includes(`plates/${id}.js`), `${id} missing from atlas/index.html`);
    assert.ok((DS["early-modern"].plates || []).some((p) => p.id === id), `${id} missing from early-modern plates`);
  }
});

test("round 14 plate viewer links resolve to early-modern chapters", () => {
  for (const [id, chId] of round14) {
    const [period, date, chapter] = PLATES[id].viewer.split("/");
    assert.equal(period, "early-modern");
    assert.ok(HM.parseDate(date));
    assert.equal(chapter, chId);
    assert.equal(early.byId.get(chapter).plate, id);
  }
});

test("round 14 covers the final page vocabulary", () => {
  const text = JSON.stringify(DS["early-modern"]) + JSON.stringify(PLATES);
  for (const phrase of ["Qing", "Aurangzeb", "Plassey", "Hudson's Bay Company", "Louisbourg", "Quebec", "Royal Proclamation", "Seven Years", "Silesia", "Hubertusburg", "First Partition", "May Constitution", "enlightened despotism"]) {
    assert.ok(text.includes(phrase), `missing ${phrase}`);
  }
});

test("round 14 uses regions for state-like areas and clean diagram routing", () => {
  for (const [id] of round14) for (const fig of PLATES[id].figures || []) {
    if (fig.kind === "diagram") {
      for (const arrow of fig.diagram.arrows || []) {
        assert.equal(arrow.via, undefined, `${arrow.id} uses via`);
        assert.equal(arrow.labelAt, undefined, `${arrow.id} uses labelAt`);
      }
      continue;
    }
    for (const layer of fig.layers || []) {
      if (layer.type === "area" && !["jesuit-paraguay"].includes(layer.id)) assert.ok(Array.isArray(layer.regions), `${id}:${layer.id} should use regions`);
    }
  }
});
