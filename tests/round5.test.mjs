import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
import path from "node:path";
import { ROOT, HM, loadDatasets } from "./load.mjs";

const DS = loadDatasets();
const ancient = HM.normalise(DS.ancient);
const round5 = [
  ["augustus-principate", "ch-augustus-principate"],
  ["roman-frontiers", "ch-high-empire-frontiers"],
  ["christianity-migrations", "ch-christianity-migrations"]
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

test("round 5 plates are registered in the atlas and ancient period", () => {
  const atlasHtml = fs.readFileSync(path.join(ROOT, "atlas", "index.html"), "utf8");
  for (const [id] of round5) {
    assert.ok(PLATES[id], `${id} plate file did not load`);
    assert.ok(atlasHtml.includes(`plates/${id}.js`), `${id} missing from atlas/index.html`);
    assert.ok((ancient.plates || []).some((p) => p.id === id), `${id} missing from ancient plates list`);
  }
});

test("round 5 viewer links resolve to real ancient chapters", () => {
  for (const [id, chId] of round5) {
    const spec = PLATES[id];
    assert.ok(spec.viewer, `${id} has no viewer hash`);
    const [period, date, chapter] = spec.viewer.split("/");
    assert.equal(period, "ancient");
    assert.equal(chapter, chId);
    const chObj = ancient.byId.get(chapter);
    assert.ok(chObj, `${id} points at missing chapter ${chapter}`);
    assert.equal(chObj.plate, id, `${chapter} does not point back to ${id}`);
    assert.ok(HM.parseDate(date), `${id} viewer date does not parse: ${date}`);
  }
});

test("round 5 chapter dates sit inside the ancient period range", () => {
  const [start, end] = ancient.range.map(HM.parseDate);
  for (const [, chId] of round5) {
    const ch = ancient.byId.get(chId);
    assert.ok(ch.t0 >= start, `${chId} starts before ancient period`);
    assert.ok(ch.t1 <= end, `${chId} ends after ancient period`);
  }
  assert.ok(HM.parseDate("0700-12-31") <= end, "ancient period should include AD 700");
});
