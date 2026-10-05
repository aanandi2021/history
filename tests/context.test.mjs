// Plates point back to the bigger picture: HM.plateContext and the "Where this sits" strip on the atlas page.
import test, { before, after } from "node:test";
import assert from "node:assert/strict";
import path from "node:path";
import { pathToFileURL } from "node:url";
import puppeteer from "puppeteer";
import { ROOT, HM, loadDatasets } from "./load.mjs";

const DS = loadDatasets();
const tree = {
  t: {
    id: "t", title: "Test period", range: ["-0600-01-01", "0100-01-01"], lanes: [], events: [], leaders: [], books: [], colours: { sides: {}, lanes: {} }, mapNote: "x",
    plates: [{ id: "p1", title: "Plate one", start: "-0218", end: "-0201" }, { id: "p2", title: "Plate two", start: "-0300", end: "-0200" }],
    chapters: [
      { id: "ch-rome", title: "Rome", start: "-0509", end: "0014", bbox: [[0, 0], [1, 1]] },
      { id: "ch-punic", title: "Punic Wars", parent: "ch-rome", start: "-0264", end: "-0146", bbox: [[0, 0], [1, 1]] },
      { id: "ch-hannibal", title: "Hannibal", parent: "ch-punic", start: "-0218", end: "-0201", bbox: [[0, 0], [1, 1]] },
      { id: "ch-cannae", title: "Cannae", parent: "ch-hannibal", start: "-0216", end: "-0216", bbox: [[0, 0], [1, 1]] },
      { id: "ch-italy", title: "Italy", parent: "ch-rome", start: "-0509", end: "-0264", bbox: [[0, 0], [1, 1]] },
      { id: "ch-han", title: "Han", start: "-0206", end: "0014", bbox: [[0, 0], [1, 1]] },
      { id: "ch-han-wudi", title: "Wudi", parent: "ch-han", start: "-0141", end: "-0087", bbox: [[0, 0], [1, 1]] }
    ]
  }
};

test("plateContext: crumbs from the period down to the plate's chapter, its insides, and what else was happening", () => {
  const c = HM.plateContext(tree, "t/-0216/ch-hannibal", "p1");
  assert.equal(c.period.title, "Test period");
  assert.deepEqual(c.crumbs.map((x) => x.title), ["Rome", "Punic Wars", "Hannibal"]);
  assert.equal(c.crumbs[2].href, "../app/index.html#t/-0216-07-02/ch-hannibal");
  assert.equal(c.crumbs[2].dates, "c. 218–201 BC");
  assert.deepEqual(c.inside.map((x) => x.title), ["Cannae"]);
  assert.deepEqual(c.meanwhile.map((x) => x.title), ["Han"], "Han overlaps; Italy doesn't; Wudi is after; Rome is an ancestor");
  assert.deepEqual(c.plates.map((x) => x.id), ["p2"]);
  assert.equal(HM.plateContext(tree, "nope/-0216", "p1"), null);
});

test("every plate with a viewer link points at a loaded period and, if named, a real chapter", async () => {
  const fs = await import("node:fs");
  const vm = await import("node:vm");
  const ctx = { window: { PLATES: {} } };
  vm.createContext(ctx);
  const dir = path.join(ROOT, "atlas", "plates");
  for (const f of fs.readdirSync(dir).filter((f) => f.endsWith(".js"))) vm.runInContext(fs.readFileSync(path.join(dir, f), "utf8"), ctx, { filename: f });
  for (const [id, p] of Object.entries(ctx.window.PLATES)) {
    if (!p.viewer) continue;
    const [dsId, , chId] = p.viewer.split("/");
    assert.ok(DS[dsId], `${id}: period ${dsId} is loaded`);
    const c = HM.plateContext(DS, p.viewer, id);
    if (chId) assert.equal(c.crumbs.at(-1).id, chId, `${id}: chapter ${chId} exists`);
    assert.ok((DS[dsId].plates || []).some((q) => q.id === id), `${id}: the ${dsId} period lists this plate, so the viewer links to it too`);
  }
});

let browser;
before(async () => { browser = await puppeteer.launch({ headless: true }); });
after(async () => { await browser?.close(); });

test("e2e: the atlas shows 'Where this sits' with links back to the timeline", async () => {
  const page = await browser.newPage();
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));
  await page.goto(pathToFileURL(path.join(ROOT, "atlas", "index.html")).href + "#maritime-monsoon");
  await page.waitForFunction("window.ATLAS && ATLAS.ready");
  const strip = await page.$eval("#context", (e) => ({ hidden: e.hidden, text: e.textContent, links: [...e.querySelectorAll("a")].map((a) => a.getAttribute("href")) }));
  assert.equal(strip.hidden, false);
  assert.match(strip.text, /Where this sits/);
  assert.ok(strip.links.some((h) => h.startsWith("../app/index.html#maritime/")), "links back into the viewer");
  assert.deepEqual(errors, []);
  await page.close();
});
