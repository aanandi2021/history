import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
import path from "node:path";
import { ROOT, HM, loadDatasets } from "./load.mjs";

const DS = loadDatasets();
const medieval = HM.normalise(DS.medieval);
const round8 = [
  ["capetian-france", "ch-capetian-france"],
  ["angevin-empire", "ch-angevin-england"],
  ["eastern-kingdoms-mongols", "ch-eastern-kingdoms"]
];
function loadPlates() {
  const ctx = { window: { PLATES: {} }, encodeURIComponent };
  vm.createContext(ctx);
  for (const f of fs.readdirSync(path.join(ROOT, "atlas", "plates")).filter((f) => f.endsWith(".js"))) vm.runInContext(fs.readFileSync(path.join(ROOT, "atlas", "plates", f), "utf8"), ctx, { filename: f });
  return JSON.parse(JSON.stringify(ctx.window.PLATES));
}
const PLATES = loadPlates();

test("round 8 plates are registered in atlas and medieval period", () => {
  const atlasHtml = fs.readFileSync(path.join(ROOT, "atlas", "index.html"), "utf8");
  for (const [id] of round8) {
    assert.ok(PLATES[id], `${id} did not load`);
    assert.ok(atlasHtml.includes(`plates/${id}.js`), `${id} missing from atlas/index.html`);
    assert.ok((medieval.plates || []).some((p) => p.id === id), `${id} missing from medieval plates`);
  }
});

test("round 8 viewer links resolve to two-way medieval chapters", () => {
  for (const [id, chId] of round8) {
    const [period, date, chapter] = PLATES[id].viewer.split("/");
    assert.equal(period, "medieval");
    assert.ok(HM.parseDate(date));
    assert.equal(chapter, chId);
    assert.equal(medieval.byId.get(chapter).plate, id);
  }
});

test("round 8 covers France, England, empire, Iberia and the Mongol/Rus hinge", () => {
  for (const id of ["ch-capetian-france", "ch-angevin-england", "ch-hohenstaufen-empire", "ch-reconquista", "ch-eastern-kingdoms"]) assert.ok(medieval.byId.get(id), `missing ${id}`);
  const text = JSON.stringify(DS.medieval);
  for (const phrase of ["Bouvines", "Magna Carta", "Lombard League", "Las Navas", "Mongols to Mughals", "Russia period"]) assert.ok(text.includes(phrase), `missing ${phrase}`);
  assert.ok(DS.medieval.events.length >= 110, "round 8 should add substantial event coverage");
});

test("Mongol arrival is tied to the Russia period and the board context", () => {
  const kiev = DS.medieval.events.find((e) => e.title === "Mongols sack Kiev");
  assert.ok(kiev);
  assert.match(kiev.text, /Russia period/);
  assert.match(kiev.text, /Mongols to Mughals board/);
});
