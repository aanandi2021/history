import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
import path from "node:path";
import { ROOT, HM, loadDatasets } from "./load.mjs";

const DS = loadDatasets();
const medieval = HM.normalise(DS.medieval);
const round6 = [
  ["barbarian-kingdoms", "ch-barbarian-kingdoms"],
  ["justinian-reconquest", "ch-justinian-reconquest"],
  ["carolingian-partition", "ch-franks-carolingians"]
];

function loadPlates() {
  const ctx = { window: { PLATES: {} }, encodeURIComponent };
  vm.createContext(ctx);
  for (const f of fs.readdirSync(path.join(ROOT, "atlas", "plates")).filter((f) => f.endsWith(".js"))) {
    vm.runInContext(fs.readFileSync(path.join(ROOT, "atlas", "plates", f), "utf8"), ctx, { filename: f });
  }
  return JSON.parse(JSON.stringify(ctx.window.PLATES));
}
const PLATES = loadPlates();

test("round 6 medieval period is registered and fills the ancient-to-late gap", () => {
  const appHtml = fs.readFileSync(path.join(ROOT, "app", "index.html"), "utf8");
  assert.ok(DS.medieval, "medieval dataset missing");
  assert.ok(appHtml.includes("data/medieval.js"));
  assert.ok(appHtml.includes("scenes/medieval.js"));
  assert.equal(DS.medieval.title, "The Middle Ages");
  assert.ok(HM.parseDate(DS.medieval.range[0]) <= HM.parseDate("0500"));
  assert.ok(HM.parseDate(DS.medieval.range[1]) >= HM.parseDate("1500"));
  assert.ok(HM.parseDate(DS.ancient.range[1]) >= HM.parseDate("0700"), "ancient should overlap the medieval opening");
});

test("round 6 plates are registered in the atlas and medieval period", () => {
  const atlasHtml = fs.readFileSync(path.join(ROOT, "atlas", "index.html"), "utf8");
  for (const [id] of round6) {
    assert.ok(PLATES[id], `${id} plate file did not load`);
    assert.ok(atlasHtml.includes(`plates/${id}.js`), `${id} missing from atlas/index.html`);
    assert.ok((medieval.plates || []).some((p) => p.id === id), `${id} missing from medieval plates list`);
  }
});

test("round 6 viewer links resolve to real medieval chapters", () => {
  for (const [id, chId] of round6) {
    const spec = PLATES[id];
    assert.ok(spec.viewer, `${id} has no viewer hash`);
    const [period, date, chapter] = spec.viewer.split("/");
    assert.equal(period, "medieval");
    assert.equal(chapter, chId);
    const chObj = medieval.byId.get(chapter);
    assert.ok(chObj, `${id} points at missing chapter ${chapter}`);
    assert.equal(chObj.plate, id, `${chapter} does not point back to ${id}`);
    assert.ok(HM.parseDate(date), `${id} viewer date does not parse: ${date}`);
  }
});

test("medieval dataset has the required breadth for future rounds", () => {
  assert.ok(DS.medieval.events.length >= 50, "expected at least 50 medieval events");
  for (const lane of ["canada", "west", "byz", "islam", "steppe", "asia"]) {
    assert.ok(DS.medieval.lanes.some((l) => l.id === lane), `missing lane ${lane}`);
    assert.ok(DS.medieval.events.some((e) => e.lane === lane), `no events in lane ${lane}`);
  }
  for (const phrase of ["Kievan Rus", "Maritime Asia", "Rome"]) {
    assert.ok(JSON.stringify(DS.medieval).includes(phrase), `missing cross-link context for ${phrase}`);
  }
});

test("partition boundary primitive is used by the Verdun plate", () => {
  const layers = PLATES["carolingian-partition"].figures.flatMap((f) => f.layers || []);
  assert.ok(layers.some((l) => l.type === "boundary" && l.style === "partition"), "Verdun needs partition boundaries");
});
