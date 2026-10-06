import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
import path from "node:path";
import { ROOT, HM, loadDatasets } from "./load.mjs";

const DS = loadDatasets();
const early = HM.normalise(DS["early-modern"]);
const round13 = [
  ["thirty-years-war-westphalia-1618-1648", "ch-thirty-years-war-westphalia"],
  ["louis-xiv-france-absolutism-1610-1697", "ch-louis-xiv-france"],
  ["austria-ottoman-danube-1663-1739", "ch-austria-ottoman-danube"],
  ["baltic-russia-sweden-1632-1721", "ch-baltic-russia-sweden"]
];

function loadPlates() {
  const ctx = { window: { PLATES: {}, DATASETS: DS }, encodeURIComponent };
  vm.createContext(ctx);
  for (const f of fs.readdirSync(path.join(ROOT, "atlas", "plates")).filter((f) => f.endsWith(".js"))) vm.runInContext(fs.readFileSync(path.join(ROOT, "atlas", "plates", f), "utf8"), ctx, { filename: f });
  return JSON.parse(JSON.stringify(ctx.window.PLATES));
}
const PLATES = loadPlates();

test("round 13 opens the early-modern Age of Reason period", () => {
  assert.ok(DS["early-modern"]);
  assert.equal(DS["early-modern"].range[0], "1600-01-01");
  assert.equal(DS["early-modern"].range[1], "1790-01-01");
  assert.ok(DS["early-modern"].events.filter((e) => e.lane === "canada").length >= 10);
});

test("round 13 registers four Age of Reason plates", () => {
  const atlasHtml = fs.readFileSync(path.join(ROOT, "atlas", "index.html"), "utf8");
  for (const [id] of round13) {
    assert.ok(PLATES[id], `${id} did not load`);
    assert.ok(atlasHtml.includes(`plates/${id}.js`), `${id} missing from atlas/index.html`);
    assert.ok((DS["early-modern"].plates || []).some((p) => p.id === id), `${id} missing from early-modern plates`);
  }
});

test("round 13 plate viewer links resolve to early-modern chapters", () => {
  for (const [id, chId] of round13) {
    const [period, date, chapter] = PLATES[id].viewer.split("/");
    assert.equal(period, "early-modern");
    assert.ok(HM.parseDate(date));
    assert.equal(chapter, chId);
    assert.equal(early.byId.get(chapter).plate, id);
  }
});

test("round 13 covers the actual page vocabulary", () => {
  const text = JSON.stringify(DS["early-modern"]);
  for (const phrase of ["White Mountain", "Peace of Westphalia", "Versailles", "Revocation", "Karlowitz", "Passarowitz", "Glorious Revolution", "Utrecht", "Poltava", "Nystad", "Hudson's Bay Company"]) {
    assert.ok(text.includes(phrase), `missing ${phrase}`);
  }
});

test("round 13 uses clean diagram routing without via or labelAt overrides", () => {
  const diagrams = round13.flatMap(([id]) => (PLATES[id].figures || []).filter((f) => f.kind === "diagram"));
  assert.ok(diagrams.length >= 1);
  for (const fig of diagrams) for (const arrow of fig.diagram.arrows || []) {
    assert.equal(arrow.via, undefined, `${arrow.id} uses via`);
    assert.equal(arrow.labelAt, undefined, `${arrow.id} uses labelAt`);
  }
});
