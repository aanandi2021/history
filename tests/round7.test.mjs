import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
import path from "node:path";
import { ROOT, HM, loadDatasets } from "./load.mjs";

const DS = loadDatasets();
const medieval = HM.normalise(DS.medieval);
const round7 = [
  ["abbasid-caliphate", "ch-abbasid-caliphate"],
  ["abbasid-baghdad", "ch-abbasid-baghdad"],
  ["first-crusades", "ch-crusades"]
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

test("round 7 plates are registered in the atlas and medieval period", () => {
  const atlasHtml = fs.readFileSync(path.join(ROOT, "atlas", "index.html"), "utf8");
  for (const [id] of round7) {
    assert.ok(PLATES[id], `${id} plate file did not load`);
    assert.ok(atlasHtml.includes(`plates/${id}.js`), `${id} missing from atlas/index.html`);
    assert.ok((medieval.plates || []).some((p) => p.id === id), `${id} missing from medieval plates list`);
  }
});

test("round 7 viewer links resolve to two-way medieval chapters", () => {
  for (const [id, chId] of round7) {
    const spec = PLATES[id];
    const [period, date, chapter] = spec.viewer.split("/");
    assert.equal(period, "medieval");
    assert.equal(chapter, chId);
    assert.ok(HM.parseDate(date), `${id} viewer date does not parse: ${date}`);
    const chObj = medieval.byId.get(chapter);
    assert.ok(chObj, `${id} points at missing chapter ${chapter}`);
    assert.equal(chObj.plate, id, `${chapter} does not point back to ${id}`);
  }
});

test("Baghdad plate includes the requested city plan and knowledge-flow mechanism", () => {
  const baghdad = PLATES["abbasid-baghdad"];
  const layers = baghdad.figures.flatMap((f) => f.layers || []);
  for (const id of ["outer-wall", "kufa-gate", "basra-gate", "khurasan-gate", "syria-gate", "palace", "mosque", "tigris", "sarat", "isa", "karkh", "wisdom"]) {
    assert.ok(layers.some((l) => l.id === id), `Baghdad plan missing ${id}`);
  }
  for (const id of ["greek", "indian", "paper", "persian", "westward"]) {
    assert.ok(layers.some((l) => l.id === id), `knowledge flow missing ${id}`);
  }
  assert.ok(baghdad.figures.some((f) => f.base && f.base.map === false), "city plan should be a diagram, not a coastline map");
});

test("round 7 broadens the medieval dataset without losing lane coverage", () => {
  for (const id of ["ch-abbasid-caliphate", "ch-abbasid-baghdad", "ch-ottonian-salian", "ch-church-reform", "ch-crusades"]) {
    assert.ok(medieval.byId.get(id), `missing chapter ${id}`);
  }
  assert.ok(DS.medieval.events.length >= 80, "expected at least 80 medieval events after round 7");
  assert.ok(DS.medieval.events.some((e) => e.title.includes("House of Wisdom") && e.aha), "Baghdad should link to the Golden Road aha note");
  assert.ok(JSON.stringify(DS.medieval).includes("Ottonian"), "missing Ottonian/Salian Germany context");
  assert.ok(JSON.stringify(DS.medieval).includes("Crusade"), "missing crusade context");
});

test("atlas renderer supports diagram figures with the basemap turned off", () => {
  const src = fs.readFileSync(path.join(ROOT, "atlas", "js", "plate.js"), "utf8");
  assert.match(src, /base\.map === false/);
});

test("atlas area polygons default to softened edges", () => {
  const src = fs.readFileSync(path.join(ROOT, "atlas", "js", "plate.js"), "utf8");
  assert.match(src, /L\.smooth == null \? true/);
  assert.match(src, /curveCatmullRomClosed/);
});
