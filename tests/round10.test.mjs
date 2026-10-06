import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
import path from "node:path";
import { ROOT, HM, loadDatasets } from "./load.mjs";

const DS = loadDatasets();
const medieval = HM.normalise(DS.medieval);
const round10 = [
  ["baltic-orders-kalmar", "ch-baltic-orders-kalmar"],
  ["muscovy-lithuania-steppe", "ch-muscovy-lithuania-steppe"],
  ["ottoman-rise-1453", "ch-ottoman-rise-1453"]
];

function loadPlates() {
  const ctx = { window: { PLATES: {} }, encodeURIComponent };
  vm.createContext(ctx);
  for (const f of fs.readdirSync(path.join(ROOT, "atlas", "plates")).filter((f) => f.endsWith(".js"))) vm.runInContext(fs.readFileSync(path.join(ROOT, "atlas", "plates", f), "utf8"), ctx, { filename: f });
  return JSON.parse(JSON.stringify(ctx.window.PLATES));
}
const PLATES = loadPlates();

test("round 10 plates are registered in atlas and medieval period", () => {
  const atlasHtml = fs.readFileSync(path.join(ROOT, "atlas", "index.html"), "utf8");
  for (const [id] of round10) {
    assert.ok(PLATES[id], `${id} did not load`);
    assert.ok(atlasHtml.includes(`plates/${id}.js`), `${id} missing from atlas/index.html`);
    assert.ok((medieval.plates || []).some((p) => p.id === id), `${id} missing from medieval plates`);
  }
});

test("round 10 viewer links resolve to two-way medieval chapters", () => {
  for (const [id, chId] of round10) {
    const [period, date, chapter] = PLATES[id].viewer.split("/");
    assert.equal(period, "medieval");
    assert.ok(HM.parseDate(date));
    assert.equal(chapter, chId);
    assert.equal(medieval.byId.get(chapter).plate, id);
  }
});

test("round 10 closes the medieval period into Russia, maritime and Mughal contexts", () => {
  for (const id of ["ch-baltic-orders-kalmar", "ch-muscovy-lithuania-steppe", "ch-ottoman-rise-1453", "ch-medieval-transition"]) assert.ok(medieval.byId.get(id), `missing ${id}`);
  const text = JSON.stringify(DS.medieval);
  for (const phrase of ["Grunwald", "end of the Tatar yoke", "Fall of Constantinople", "Vasco da Gama", "Babur", "Mongols to Mughals board"]) assert.ok(text.includes(phrase), `missing ${phrase}`);
  assert.ok(DS.medieval.events.length >= 190, "round 10 should add substantial event coverage");
});

test("round 10 uses phase labels for dated expansion zones", () => {
  const layers = PLATES["ottoman-rise-1453"].figures.flatMap((f) => f.layers || []);
  assert.ok(layers.some((l) => l.type === "area" && l.phaseLabel === "1326"), "expected an Ottoman phase label");
  assert.ok(layers.some((l) => l.type === "area" && l.phaseLabel === "1451"), "expected a late Ottoman phase label");
});
