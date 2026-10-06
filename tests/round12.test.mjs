import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
import path from "node:path";
import { ROOT, HM, loadDatasets } from "./load.mjs";

const DS = loadDatasets();
const transition = HM.normalise(DS.transition);
const round12 = [
  ["german-reformation-1521-1555", "ch-german-reformation"],
  ["charles-v-habsburg-valois-1519-1556", "ch-charles-v-habsburg-valois"],
  ["confessional-europe-1560-1660", "ch-confessional-europe"],
  ["dutch-revolt-maritime-empires-1568-1648", "ch-dutch-revolt-maritime-empires"]
];

function loadPlates() {
  const ctx = { window: { PLATES: {} }, encodeURIComponent };
  vm.createContext(ctx);
  for (const f of fs.readdirSync(path.join(ROOT, "atlas", "plates")).filter((f) => f.endsWith(".js"))) vm.runInContext(fs.readFileSync(path.join(ROOT, "atlas", "plates", f), "utf8"), ctx, { filename: f });
  return JSON.parse(JSON.stringify(ctx.window.PLATES));
}
const PLATES = loadPlates();

test("round 12 registers four Age of Religious Discord plates", () => {
  const atlasHtml = fs.readFileSync(path.join(ROOT, "atlas", "index.html"), "utf8");
  for (const [id] of round12) {
    assert.ok(PLATES[id], `${id} did not load`);
    assert.ok(atlasHtml.includes(`plates/${id}.js`), `${id} missing from atlas/index.html`);
    assert.ok((transition.plates || []).some((p) => p.id === id), `${id} missing from transition plates`);
  }
});

test("round 12 plate viewer links resolve to transition chapters", () => {
  for (const [id, chId] of round12) {
    const [period, date, chapter] = PLATES[id].viewer.split("/");
    assert.equal(period, "transition");
    assert.ok(HM.parseDate(date));
    assert.equal(chapter, chId);
    assert.equal(transition.byId.get(chapter).plate, id);
  }
});

test("round 12 adds the Reformation and religious-war event vocabulary", () => {
  const text = JSON.stringify(DS.transition);
  for (const phrase of ["Worms", "Peasant War", "Schmalkaldic", "Muhlberg", "Charles V", "Pavia", "Council of Trent", "Geneva", "Huguenot", "Union of Utrecht", "Antwerp", "VOC", "Batavia", "Defenestration of Prague"]) {
    assert.ok(text.includes(phrase), `missing ${phrase}`);
  }
});

test("round 12 uses confessional hatching for mixed religious geography", () => {
  const layers = PLATES["confessional-europe-1560-1660"].figures.flatMap((f) => f.layers || []);
  assert.ok(layers.some((l) => l.type === "area" && l.pattern === "crosshatch" && /Mixed/.test(l.legend || "")));
  assert.ok(layers.some((l) => l.type === "area" && l.pattern === "hatch" && /Mixed/.test(l.legend || "")));
});
