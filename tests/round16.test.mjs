import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
import path from "node:path";
import { ROOT, HM, loadDatasets } from "./load.mjs";

const DS = loadDatasets();
const restoration = HM.normalise(DS.restoration);
function loadPlates() {
  const ctx = { window: { PLATES: {}, DATASETS: DS }, encodeURIComponent };
  vm.createContext(ctx);
  for (const f of fs.readdirSync(path.join(ROOT, "atlas", "plates")).filter((f) => f.endsWith(".js"))) {
    vm.runInContext(fs.readFileSync(path.join(ROOT, "atlas", "plates", f), "utf8"), ctx, { filename: f });
  }
  return JSON.parse(JSON.stringify(ctx.window.PLATES));
}
const PLATES = loadPlates();
const ROUND2 = [
  "europe-restoration-congress-system-1815-1830",
  "latin-american-independence-1804-1830",
  "revolutions-europe-1830-1848",
  "germany-confederation-zollverein-frankfurt-1815-1848",
  "british-north-america-rebellions-responsible-government-1837-1848"
];

test("Vol. 2 round 2 registers the restoration period and plates", () => {
  assert.ok(DS.restoration);
  assert.equal(DS.restoration.lanes[0].id, "canada");
  assert.equal(DS.restoration.lanes[0].pinned, true);
  assert.equal(DS.restoration.gapAfter, undefined);
  assert.equal(DS.revolution.gapAfter, undefined);
  for (const id of ROUND2) {
    assert.ok(PLATES[id], id);
    assert.ok(DS.restoration.plates.some((p) => p.id === id), `${id} missing from restoration dataset`);
    assert.equal(PLATES[id].viewer.split("/")[0], "restoration");
  }
});

test("Vol. 2 round 2 includes Canada-first and global lenses", () => {
  const text = JSON.stringify(DS.restoration);
  for (const term of ["Rideau Canal", "Lower Canada", "Upper Canada", "Durham Report", "Act of Union", "responsible government", "Oregon Treaty", "Grosse Ile", "Bolivar", "San Martin", "Brazil", "Mexico", "Greek", "Mehmet Ali", "Opium War", "Treaty of Nanking", "Slavery Abolition", "Great Trek", "Liberia", "Indian Removal", "Trail of Tears"]) {
    assert.match(text, new RegExp(term, "i"), term);
  }
  assert.ok(restoration.chapters.some((c) => c.region === "asia"));
  assert.ok(restoration.chapters.some((c) => c.region === "africa"));
});
