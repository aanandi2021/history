import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
import path from "node:path";
import { ROOT, HM, loadDatasets } from "./load.mjs";

const DS = loadDatasets();
const transition = HM.normalise(DS.transition);
const round11 = [
  ["transition-economy-1500", "ch-transition-economy"],
  ["voyages-discovery-1415-1522", "ch-voyages-discovery"],
  ["american-civilizations-1500", "ch-american-civilizations"]
];

function loadPlates() {
  const ctx = { window: { PLATES: {} }, encodeURIComponent };
  vm.createContext(ctx);
  for (const f of fs.readdirSync(path.join(ROOT, "atlas", "plates")).filter((f) => f.endsWith(".js"))) vm.runInContext(fs.readFileSync(path.join(ROOT, "atlas", "plates", f), "utf8"), ctx, { filename: f });
  return JSON.parse(JSON.stringify(ctx.window.PLATES));
}
const PLATES = loadPlates();

test("round 11 opens the transition period and registers its plates", () => {
  assert.equal(DS.transition.title, "The age of transition");
  assert.equal(DS.transition.range[0], "1450-01-01");
  assert.equal(DS.transition.range[1], "1651-01-01");
  const atlasHtml = fs.readFileSync(path.join(ROOT, "atlas", "index.html"), "utf8");
  for (const [id] of round11) {
    assert.ok(PLATES[id], `${id} did not load`);
    assert.ok(atlasHtml.includes(`plates/${id}.js`), `${id} missing from atlas/index.html`);
    assert.ok((transition.plates || []).some((p) => p.id === id), `${id} missing from transition plates`);
  }
});

test("round 11 viewer links resolve to two-way transition chapters", () => {
  for (const [id, chId] of round11) {
    const [period, date, chapter] = PLATES[id].viewer.split("/");
    assert.equal(period, "transition");
    assert.ok(HM.parseDate(date));
    assert.equal(chapter, chId);
    assert.equal(transition.byId.get(chapter).plate, id);
  }
});

test("transition dataset gives Ford early Canada and connected-world breadth", () => {
  assert.ok(DS.transition.events.length >= 30 && DS.transition.events.length <= 60);
  assert.ok(DS.transition.events.filter((e) => e.lane === "canada").length >= 10);
  const text = JSON.stringify(DS.transition);
  for (const phrase of ["Cabot", "Cartier", "Stadacona", "Hochelaga", "Champlain", "Basque whalers", "Wendat", "Haudenosaunee", "Tordesillas", "Babur", "Kazan"]) assert.ok(text.includes(phrase), `missing ${phrase}`);
});

test("round 11 uses a meridian style for treaty claim lines", () => {
  const layers = PLATES["voyages-discovery-1415-1522"].figures.flatMap((f) => f.layers || []);
  assert.ok(layers.some((l) => l.type === "boundary" && l.style === "meridian" && /Tordesillas/.test(l.legend || "")));
});
