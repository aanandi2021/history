import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
import path from "node:path";
import { ROOT, HM, loadDatasets } from "./load.mjs";

const DS = loadDatasets();
const medieval = HM.normalise(DS.medieval);
const round9 = [
  ["byzantium-basil-crisis", "ch-byzantium-basil-crisis"],
  ["medieval-trade-networks", "ch-medieval-trade-networks"],
  ["hundred-years-war", "ch-hundred-years-war"]
];

function loadPlates() {
  const ctx = { window: { PLATES: {} }, encodeURIComponent };
  vm.createContext(ctx);
  for (const f of fs.readdirSync(path.join(ROOT, "atlas", "plates")).filter((f) => f.endsWith(".js"))) vm.runInContext(fs.readFileSync(path.join(ROOT, "atlas", "plates", f), "utf8"), ctx, { filename: f });
  return JSON.parse(JSON.stringify(ctx.window.PLATES));
}
const PLATES = loadPlates();

test("round 9 plates are registered in atlas and medieval period", () => {
  const atlasHtml = fs.readFileSync(path.join(ROOT, "atlas", "index.html"), "utf8");
  for (const [id] of round9) {
    assert.ok(PLATES[id], `${id} did not load`);
    assert.ok(atlasHtml.includes(`plates/${id}.js`), `${id} missing from atlas/index.html`);
    assert.ok((medieval.plates || []).some((p) => p.id === id), `${id} missing from medieval plates`);
  }
});

test("round 9 viewer links resolve to two-way medieval chapters", () => {
  for (const [id, chId] of round9) {
    const [period, date, chapter] = PLATES[id].viewer.split("/");
    assert.equal(period, "medieval");
    assert.ok(HM.parseDate(date));
    assert.equal(chapter, chId);
    assert.equal(medieval.byId.get(chapter).plate, id);
  }
});

test("round 9 adds late medieval coverage for Byzantium, trade, plague and France", () => {
  for (const id of ["ch-byzantium-basil-crisis", "ch-medieval-trade-networks", "ch-hundred-years-war"]) assert.ok(medieval.byId.get(id), `missing ${id}`);
  const text = JSON.stringify(DS.medieval);
  for (const phrase of ["Manzikert", "Novgorod", "Black Death", "Joan of Arc", "Castillon", "Burgundy"]) assert.ok(text.includes(phrase), `missing ${phrase}`);
  assert.ok(DS.medieval.events.length >= 150, "round 9 should add substantial event coverage");
});

test("trade-network grammar uses weighted routes and hub rings", () => {
  const layers = PLATES["medieval-trade-networks"].figures.flatMap((f) => f.layers || []);
  assert.ok(layers.some((l) => l.type === "route" && l.weight >= 4), "expected a weighted high-volume route");
  assert.ok(layers.some((l) => l.type === "point" && l.hub >= 5), "expected a hub symbol");
});
