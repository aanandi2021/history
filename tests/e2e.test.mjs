// End-to-end tests: one per user story in specs/001-world-viewer/spec.md, mirroring quickstart.md.
// Runs the real app from file:// in headless Chrome with all network requests blocked (FR-016).
import test, { before, after } from "node:test";
import assert from "node:assert/strict";
import path from "node:path";
import fs from "node:fs";
import { pathToFileURL } from "node:url";
import puppeteer from "puppeteer";
import { ROOT } from "./load.mjs";

const URL0 = pathToFileURL(path.join(ROOT, "app", "index.html")).href;
const SHOTS = path.join(ROOT, "tests", "screenshots");
fs.mkdirSync(SHOTS, { recursive: true });
let browser;

before(async () => { browser = await puppeteer.launch({ headless: true }); });
after(async () => { await browser?.close(); });

/** Open the app at a hash. Returns { page, errors, blocked }. */
async function open(hash = "", { width = 1440, height = 900, ctx } = {}) {
  const context = ctx || (await browser.createBrowserContext());
  const page = await context.newPage();
  await page.setViewport({ width, height });
  const errors = [], blocked = [];
  page.on("pageerror", (e) => errors.push(e.message));
  page.on("console", (m) => { if (m.type() === "error") errors.push(m.text()); });
  await page.setRequestInterception(true);
  page.on("request", (r) => {
    if (r.url().startsWith("file:") || r.url().startsWith("data:")) r.continue();
    else { blocked.push(r.url()); r.abort(); }
  });
  const t0 = Date.now();
  await page.goto(URL0 + hash);
  await page.waitForFunction("window.APP && APP.ready");
  const loadMs = Date.now() - t0;
  return { page, errors, blocked, loadMs, context };
}
const settle = (ms = 1100) => new Promise((r) => setTimeout(r, ms));
const meanwhile = (page) => page.$$eval("#meanwhile li[data-event] a", (as) => as.map((a) => a.textContent));
const inPower = (page) => page.$eval("#meanwhile", (el) => el.textContent);

test("US1: 19 Aug 1942 shows Dieppe, the wider war and the leaders, offline", async () => {
  const { page, errors, blocked, loadMs, context } = await open("#ww2/1942-08-19/dieppe-1942");
  await settle();
  const ev = await meanwhile(page);
  for (const want of ["Dieppe", "Stalingrad", "Guadalcanal"]) assert.ok(ev.includes(want), `${want} in ${ev}`);
  const firstLane = await page.$eval("#meanwhile .lane-h", (el) => el.getAttribute("data-lane"));
  assert.equal(firstLane, "canada", "Canada is listed first");
  const txt = await inPower(page);
  for (const want of ["Mackenzie King", "Churchill", "Roosevelt", "Stalin"]) assert.ok(txt.includes(want), want);
  assert.ok(await page.$('#map g.pin.sel[data-id="dieppe-1942"]'), "Dieppe pin is selected on the map");
  assert.equal(await page.$eval("#card h2", (h) => h.textContent), "Dieppe");
  assert.deepEqual(blocked, [], "no network requests");
  assert.deepEqual(errors, []);
  assert.ok(loadMs < 3000, `loaded in ${loadMs} ms`);
  await page.screenshot({ path: path.join(SHOTS, "us1-dieppe.png") });
  await context.close();
});

test("US1: hovering the timeline moves the date; clicking pins it", async () => {
  const { page, context } = await open("#ww2");
  const box = await (await page.$("#tl")).boundingBox();
  const before = await page.evaluate(() => APP.state.cursor.toISOString());
  // Find an empty spot of timeline background at 70% across.
  const X = box.x + box.width * 0.7;
  const Y = await page.evaluate((x, y0) => {
    for (let y = y0 + 40; y < y0 + 600; y += 3) {
      const e = document.elementFromPoint(x, y);
      if (e && e.closest("#tl") && !e.closest("g.item")) return y;
    }
    return null;
  }, X, box.y);
  assert.ok(Y, "found an empty spot");
  await page.mouse.move(X, Y);
  await settle(300);
  const hovered = await page.evaluate(() => APP.state.cursor.toISOString());
  assert.notEqual(hovered, before);
  assert.equal(await page.evaluate(() => APP.state.pinned), false);
  await page.mouse.click(X, Y);
  await settle(300);
  assert.equal(await page.evaluate(() => APP.state.pinned), true);
  await page.mouse.move(X - box.width * 0.4, Y);
  await settle(300);
  assert.equal(await page.evaluate(() => APP.state.cursor.toISOString()), hovered, "pinned cursor ignores hover");
  await context.close();
});

test("US2: a chapter zooms the map and the timeline together; World resets the map", async () => {
  const { page, context } = await open("#ww2/1939-09-01");
  await settle(300);
  const k0 = (await page.evaluate(() => APP.mapTransform())).k;
  const d0 = await page.evaluate(() => APP.domain());
  const id = await page.evaluate(() => APP.state.ds.chapters.find((c) => c.title === "Barbarossa to Stalingrad").id);
  const t0 = Date.now();
  await page.click(`#tl g.item.chapter[data-id="${id}"] rect`);
  await settle(1300);
  const k1 = (await page.evaluate(() => APP.mapTransform())).k;
  const d1 = await page.evaluate(() => APP.domain());
  assert.ok(k1 > k0 * 1.5, `map zoomed in (k ${k0} → ${k1})`);
  assert.notDeepEqual(d1, d0);
  assert.ok(d1[0] >= "1941-03" && d1[1] <= "1943-06", `timeline window ${d1}`);
  assert.ok(Date.now() - t0 < 3000);
  assert.match(await page.evaluate(() => location.hash), new RegExp(`/${id}$`), "chapter is in the address");
  await page.screenshot({ path: path.join(SHOTS, "us2-chapter.png") });
  await page.click("#world");
  await settle(1100);
  assert.equal((await page.evaluate(() => APP.mapTransform())).k, 1);
  await context.close();
});

test("US2: playing with Follow chapters flies the map to each chapter", async () => {
  const { page, context } = await open("#ww2/1941-06-01");
  await page.evaluate(() => { APP.setCursor(new Date("1941-06-23"), { scrub: true }); });
  await settle(1200);
  assert.ok((await page.evaluate(() => APP.mapTransform())).k > 1.5, "followed into a chapter");
  await page.evaluate(() => APP.setPlaying(true));
  await settle(600);
  const c1 = await page.evaluate(() => +APP.state.cursor);
  assert.ok(c1 > +new Date("1941-06-23"), "play moves the cursor forward");
  await page.keyboard.press("Space");
  assert.equal(await page.evaluate(() => APP.state.playing), false, "space pauses");
  await context.close();
});

test("US3: Russia cards link to the vault note, Wikipedia and books", async () => {
  const { page, errors, context } = await open("#russia/1709-07-08/poltava-1709");
  await settle(400);
  const links = await page.$$eval("#card a[data-link]", (as) => as.map((a) => ({ kind: a.dataset.link, href: a.href, target: a.target })));
  const note = links.find((l) => l.kind === "note");
  assert.ok(note, "has an Open note link");
  assert.match(note.href, /^obsidian:\/\/open\?vault=Fourth%20Vault%20July%202023&file=.*Russia.*%23Peter/);
  assert.equal(note.target, "", "obsidian links open in place");
  const wiki = links.find((l) => l.kind === "wiki");
  assert.equal(wiki.target, "_blank");
  const books = await page.$$eval("#card .books li", (li) => li.map((x) => x.textContent));
  assert.equal(books.length, 3);
  assert.ok(books[0].includes("Massie"));
  // A ruler card also carries books.
  await page.evaluate(() => APP.select(APP.state.ds.leaders.find((l) => l.name.startsWith("Peter I")).id));
  await settle(300);
  assert.match(await page.$eval("#card h2", (h) => h.textContent), /Peter/);
  assert.equal((await page.$$("#card .books li")).length, 3);
  // A book in Calibre gets a calibre:// link.
  await page.evaluate(() => APP.loadDataset("ww2"));
  await page.evaluate(() => APP.select(APP.state.ds.books.find((b) => b.calibreId).id));
  await settle(300);
  const cal = await page.$eval('#card a[data-link="calibre"]', (a) => a.href);
  assert.match(cal, /^calibre:\/\/show-book\/CalibreLibrary\/\d+$/);
  assert.deepEqual(errors, []);
  await page.screenshot({ path: path.join(SHOTS, "us3-card.png") });
  await context.close();
});

test("US3: clicking a meanwhile entry selects it; search finds and selects", async () => {
  const { page, context } = await open("#russia/1812-09-14");
  await settle(300);
  await page.click('#meanwhile li[data-event] a[data-id="moscow-burns-1812"]');
  await settle(300);
  assert.equal(await page.evaluate(() => APP.state.selected), "moscow-burns-1812");
  await page.keyboard.press("Escape");
  assert.equal(await page.evaluate(() => APP.state.selected), null);
  await page.keyboard.press("/");
  await page.keyboard.type("borodino");
  await settle(200);
  assert.ok(await page.$("#results li[data-id]"));
  await page.keyboard.press("Enter");
  await settle(300);
  assert.equal(await page.$eval("#card h2", (h) => h.textContent), "Borodino");
  await context.close();
});

test("US4: addresses round-trip, switch periods and fall back safely", async () => {
  let { page, context } = await open("#russia/1812-09-14");
  assert.equal(await page.evaluate(() => APP.state.dsId), "russia");
  assert.equal(await page.evaluate(() => APP.state.cursor.toISOString().slice(0, 10)), "1812-09-14");
  await page.select("#dataset", "ww2");
  await settle(400);
  assert.match(await page.evaluate(() => location.hash), /^#ww2\//);
  assert.match(await page.$eval("#ds-title", (h) => h.textContent), /Second World War/);
  // Typing a new address into the bar.
  await page.evaluate(() => { location.hash = "#russia/1917-11-07"; });
  await settle(400);
  assert.equal(await page.evaluate(() => APP.state.dsId), "russia");
  await context.close();
  ({ page, context } = await open("#atlantis/12345/nothing"));
  assert.equal(await page.evaluate(() => APP.state.dsId), "ww2");
  assert.equal(await page.evaluate(() => APP.state.selected), null);
  await context.close();
});

test("US5: family birth years persist in this browser only", async () => {
  const ctx = await browser.createBrowserContext();
  let { page } = await open("#ww2/1942-08-19", { ctx });
  const answers = ["1980", ""];
  page.on("dialog", (d) => d.accept(answers.shift() ?? ""));
  await page.click('#tl [data-family-add="self"]');
  await settle(300);
  const stored = await page.evaluate(() => localStorage.getItem("history.family.v1"));
  assert.match(stored, /"self"/);
  await page.evaluate(() => APP.setCursor(new Date("1990-01-01")));
  await page.close();
  ({ page } = await open("#russia/1900", { ctx }));
  await page.evaluate(() => APP.loadDataset("ww2"));
  await page.evaluate(() => APP.setCursor(new Date("1944-06-06")));
  await settle(200);
  const line = await page.$eval('#meanwhile [data-family-age="self"]', (li) => li.textContent);
  assert.match(line, /born 36 years later/);
  await ctx.close();
});

test("works on a narrow window (panel stacks below)", async () => {
  const { page, errors, context } = await open("#ww2/1942-08-19/dieppe-1942", { width: 820, height: 1000 });
  await settle();
  const panel = await (await page.$("#panel")).boundingBox();
  const map = await (await page.$("#map-wrap")).boundingBox();
  assert.ok(panel.y >= map.y + map.height - 1, "panel is below the map");
  assert.deepEqual(errors, []);
  await page.screenshot({ path: path.join(SHOTS, "narrow.png"), fullPage: true });
  await context.close();
});

test("T029 timing: hover update and dataset switch are quick", async () => {
  const { page, context } = await open("#russia");
  const ms = await page.evaluate(() => {
    const ds = APP.state.ds, n = 40, t0 = performance.now();
    for (let i = 0; i < n; i++) APP.setCursor(new Date(+ds.t0 + (ds.t1 - ds.t0) * i / n), { hover: true });
    return (performance.now() - t0) / n;
  });
  assert.ok(ms < 50, `cursor update took ${ms.toFixed(1)} ms`);
  const sw = await page.evaluate(() => { const t0 = performance.now(); APP.loadDataset("ww2"); return performance.now() - t0; });
  assert.ok(sw < 1000, `dataset switch took ${sw.toFixed(0)} ms`);
  await context.close();
});

test("no two bars overlap on the timeline, so every chapter, ruler and book can be clicked", async () => {
  for (const ds of ["ww2", "russia"]) {
    const { page, context } = await open(`#${ds}`);
    const clashes = await page.evaluate(() => {
      const rects = [...document.querySelectorAll("#tl g.item rect")].map((r) => ({ id: r.closest("[data-id]").dataset.id, b: r.getBoundingClientRect() }))
        .filter((r) => r.b.width > 3);
      const out = [];
      for (let i = 0; i < rects.length; i++) for (let j = i + 1; j < rects.length; j++) {
        const a = rects[i].b, b = rects[j].b;
        if (a.left < b.right - 1 && a.right > b.left + 1 && a.top < b.bottom - 1 && a.bottom > b.top + 1) out.push(rects[i].id + " × " + rects[j].id);
      }
      return out;
    });
    assert.deepEqual(clashes, [], ds);
    await context.close();
  }
});
