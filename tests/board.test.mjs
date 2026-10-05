// Cause-and-effect boards: model unit tests, board data checks, and an end-to-end run in headless Chrome.
import test, { before, after } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
import path from "node:path";
import { createRequire } from "node:module";
import { pathToFileURL } from "node:url";
import puppeteer from "puppeteer";
import { ROOT, APP } from "./load.mjs";

const BM = createRequire(import.meta.url)(path.join(APP, "js", "board-model.js"));

function loadBoards() {
  const ctx = { window: {} };
  vm.createContext(ctx);
  const dir = path.join(APP, "boards");
  for (const f of fs.readdirSync(dir).filter((f) => f.endsWith(".js"))) vm.runInContext(fs.readFileSync(path.join(dir, f), "utf8"), ctx, { filename: f });
  return JSON.parse(JSON.stringify(ctx.window.BOARDS));
}
const BOARDS = loadBoards();

const tiny = () => ({
  id: "t", title: "T", question: "Q?",
  tiles: [{ id: "a", title: "A", date: "1" }, { id: "b", title: "B", date: "2" }, { id: "c", title: "C", date: "3" }],
  links: [{ from: "a", to: "b", why: "x" }, { from: "b", to: "c", why: "y" }],
  also: [{ from: "a", to: "c" }]
});

test("every board is valid and registered under its own id", () => {
  assert.ok(Object.keys(BOARDS).length >= 1);
  for (const [id, b] of Object.entries(BOARDS)) {
    assert.equal(b.id, id);
    assert.deepEqual(BM.validate(b), [], id);
  }
});

test("every board's required links form a chain without cycles, and every tile is used", () => {
  for (const b of Object.values(BOARDS)) {
    const out = new Map(b.tiles.map((t) => [t.id, []]));
    for (const l of b.links) out.get(l.from).push(l.to);
    const state = {};
    const visit = (n) => {
      assert.notEqual(state[n], 1, `${b.id}: cycle through ${n}`);
      if (state[n] === 2) return;
      state[n] = 1; out.get(n).forEach(visit); state[n] = 2;
    };
    b.tiles.forEach((t) => visit(t.id));
    const used = new Set(b.links.flatMap((l) => [l.from, l.to]));
    for (const t of b.tiles) assert.ok(used.has(t.id), `${b.id}: tile ${t.id} is in no required link`);
  }
});

test("validate catches the common mistakes", () => {
  const b = tiny();
  b.tiles.push({ id: "a", title: "dup", date: "4" });
  b.links.push({ from: "a", to: "zz", why: "?" }, { from: "c", to: "c", why: "?" }, { from: "a", to: "b", why: "again" });
  b.links[1].why = "";
  const errs = BM.validate(b).join("\n");
  for (const want of ["duplicate tile a", "unknown tile", "itself", "listed twice", "needs a why"]) assert.match(errs, new RegExp(want));
});

test("arrows score more the earlier they are found; wrong arrows cost nothing", () => {
  const b = tiny(), g = BM.newGame();
  let r = BM.check(b, g, [["a", "b"], ["c", "a"]]);
  assert.deepEqual([r.gained, r.correct.length, r.wrong.length, r.done], [10, 1, 1, false]);
  r = BM.check(b, g, [["a", "b"], ["c", "a"]]);
  assert.equal(r.gained, 0, "an arrow already confirmed doesn't score twice");
  r = BM.check(b, g, [["a", "b"], ["b", "c"], ["a", "c"]]);
  assert.equal(r.gained, 3 + 3, "third check: 3 each for the required and the also-accepted arrow");
  assert.ok(r.done);
  assert.equal(g.score, 16);
  assert.equal(BM.percent(b, g), 80);
});

test("a perfect first check is 100% and comes back in three weeks", () => {
  const b = tiny(), g = BM.newGame();
  BM.check(b, g, b.links.map((l) => [l.from, l.to]));
  assert.equal(BM.percent(b, g), 100);
  assert.equal(BM.nextReviewDays(100), 21);
  assert.deepEqual([90, 70, 40, 39, 0].map(BM.nextReviewDays), [21, 7, 3, 1, 1]);
});

test("hints point at an unfound link and cost points, never below zero", () => {
  const b = tiny(), g = BM.newGame();
  assert.equal(BM.hint(b, g).from, "a");
  assert.equal(g.score, 0);
  BM.check(b, g, [["a", "b"]]);
  assert.equal(BM.hint(b, g).from, "b");
  assert.equal(g.score, 10 - BM.HINT_COST);
  BM.check(b, g, [["b", "c"]]);
  assert.equal(BM.hint(b, g), null);
});

test("layout is reproducible from a seed, stays in bounds and never overlaps tiles", () => {
  const b = BOARDS["ww1-origins"];
  const p1 = BM.layout(b.tiles, 42, 1100, 760, 176, 74), p2 = BM.layout(b.tiles, 42, 1100, 760, 176, 74);
  assert.deepEqual(p1, p2);
  assert.notDeepEqual(p1, BM.layout(b.tiles, 43, 1100, 760, 176, 74));
  const boxes = Object.values(p1);
  for (const q of boxes) assert.ok(q.x >= 0 && q.y >= 0 && q.x + 176 <= 1100, JSON.stringify(q));
  for (let i = 0; i < boxes.length; i++) for (let j = i + 1; j < boxes.length; j++) {
    const a = boxes[i], c = boxes[j];
    assert.ok(Math.abs(a.x - c.x) >= 176 || Math.abs(a.y - c.y) >= 74, "tiles overlap");
  }
});

test("tidy puts every cause in a row above its effect, in bounds and without overlaps", () => {
  for (const b of Object.values(BOARDS)) {
    const p = BM.tidy(b, 1100, 840, 176, 56);
    for (const l of b.links) assert.ok(p[l.from].y < p[l.to].y, `${l.from} → ${l.to}`);
    const boxes = Object.values(p);
    for (const q of boxes) assert.ok(q.x >= 0 && q.x + 176 <= 1100 && q.y + 56 <= 840, JSON.stringify(q));
    for (let i = 0; i < boxes.length; i++) for (let j = i + 1; j < boxes.length; j++) {
      const a = boxes[i], c = boxes[j];
      assert.ok(Math.abs(a.x - c.x) >= 176 || Math.abs(a.y - c.y) >= 56, "tiles overlap");
    }
  }
});

// ---- end to end
let browser;
before(async () => { browser = await puppeteer.launch({ headless: true }); });
after(async () => { await browser?.close(); });

async function openBoard(q = "?seed=7#ww1-origins") {
  const ctx = await browser.createBrowserContext();
  const page = await ctx.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));
  page.on("console", (m) => { if (m.type() === "error") errors.push(m.text()); });
  await page.goto(pathToFileURL(path.join(APP, "board.html")).href + q);
  await page.waitForFunction("window.BOARD && BOARD.ready");
  return { page, errors, ctx };
}

test("e2e: clicking two tiles draws an arrow, clicking it removes it", async () => {
  const { page, errors, ctx } = await openBoard();
  assert.equal(await page.$$eval(".tile", (t) => t.length), BOARDS["ww1-origins"].tiles.length);
  await page.click('.tile[data-id="sarajevo"] .t');
  await page.click('.tile[data-id="blank-cheque"] .t');
  assert.deepEqual(await page.evaluate(() => BOARD.arrows()), [{ key: "sarajevo>blank-cheque", status: "draft" }]);
  assert.equal(await page.$$eval("#b-lines line.draft", (l) => l.length), 1);
  const hit = await page.$("#b-lines line.hit");
  const [x, y] = await hit.evaluate((l) => {
    const r = l.getBoundingClientRect(); return [r.x + r.width / 2, r.y + r.height / 2];
  });
  await page.mouse.click(x, y);
  assert.deepEqual(await page.evaluate(() => BOARD.arrows()), []);
  assert.deepEqual(errors, []);
  await ctx.close();
});

test("e2e: dragging a tile moves it without drawing an arrow", async () => {
  const { page, ctx } = await openBoard();
  const el = await page.$('.tile[data-id="canada"]');
  const b0 = await el.boundingBox();
  await page.mouse.move(b0.x + 40, b0.y + 20);
  await page.mouse.down();
  await page.mouse.move(b0.x + 140, b0.y + 80, { steps: 6 });
  await page.mouse.up();
  const b1 = await el.boundingBox();
  assert.ok(Math.abs(b1.x - b0.x - 100) < 3 && Math.abs(b1.y - b0.y - 60) < 3, JSON.stringify([b0, b1]));
  assert.equal(await page.$$eval(".tile.sel", (t) => t.length), 0);
  await ctx.close();
});

test("e2e: check, iterate, finish; score, colours, explanations and the next review", async () => {
  const { page, errors, ctx } = await openBoard();
  const links = await page.evaluate(() => BOARD.links());
  const half = links.slice(0, 8), rest = links.slice(8);
  await page.evaluate((h) => { for (const [a, b] of h) BOARD.connect(a, b); BOARD.connect("canada", "unification"); }, half);
  let r = await page.evaluate(() => BOARD.check());
  assert.equal(r.gained, 80);
  assert.equal(await page.$$eval("#b-lines line.ok", (l) => l.length), 8);
  assert.equal(await page.$$eval("#b-lines line.bad", (l) => l.length), 1);
  assert.equal(await page.$eval("#b-found", (e) => e.textContent), `8 / ${links.length}`);
  assert.equal(await page.$eval("#b-worth", (e) => e.textContent), "6");
  assert.equal(await page.evaluate(() => BOARD.remove("sarajevo", "blank-cheque")), false, "confirmed arrows are locked");

  await page.evaluate((h) => { for (const [a, b] of h) BOARD.connect(a, b); }, rest);
  r = await page.evaluate(() => BOARD.check());
  assert.ok(r.done);
  const s = await page.evaluate(() => BOARD.state());
  assert.equal(s.score, 80 + 6 * rest.length);
  assert.match(await page.$eval("#b-msg", (e) => e.textContent), /All 16 found in 2 checks/);
  assert.equal(await page.$$eval("#b-why li.ok", (l) => l.length), links.length);
  assert.match(await page.$eval("#b-books", (e) => e.textContent), /Sleepwalkers/);
  assert.match(await page.$eval("#b-due", (e) => e.textContent), /Best \d+%\. Next review on \d{4}-\d{2}-\d{2}/);
  assert.ok(await page.$eval("#b-check", (e) => e.disabled));
  fs.mkdirSync(path.join(ROOT, "tests", "screenshots"), { recursive: true });
  await new Promise((r) => setTimeout(r, 900));
  await page.screenshot({ path: path.join(ROOT, "tests", "screenshots", "board-done.png") });
  assert.deepEqual(errors, []);
  await ctx.close();
});

test("e2e: reveal shows the missed links in amber with their reasons", async () => {
  const { page, ctx } = await openBoard();
  await page.evaluate(() => { BOARD.connect("britain", "canada"); BOARD.check(); BOARD.hint(); BOARD.reveal(); });
  const links = await page.evaluate(() => BOARD.links());
  assert.equal(await page.$$eval("#b-lines line.missed", (l) => l.length), links.length - 1);
  assert.equal(await page.$$eval("#b-why li.missed", (l) => l.length), links.length - 1);
  assert.equal(await page.evaluate(() => BOARD.connect("a", "b")), false, "no new arrows after the reveal");
  await new Promise((r) => setTimeout(r, 900));
  await page.screenshot({ path: path.join(ROOT, "tests", "screenshots", "board-reveal.png") });
  await ctx.close();
});

test("e2e: the viewer links to the board and the board links back", async () => {
  const { page, ctx } = await openBoard();
  assert.match(await page.$eval("#b-viewer", (a) => a.getAttribute("href")), /^index\.html#russia\/1914-07-28$/);
  const html = fs.readFileSync(path.join(APP, "index.html"), "utf8");
  assert.match(html, /href="board\.html#ww1-origins"/);
  await ctx.close();
});
