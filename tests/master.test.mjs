// The master timeline: every period on one strip, synced with the Period dropdown.
import test, { before, after } from "node:test";
import assert from "node:assert/strict";
import path from "node:path";
import { pathToFileURL } from "node:url";
import puppeteer from "puppeteer";
import { ROOT, HM, loadDatasets } from "./load.mjs";

const DS = loadDatasets();

test("masterLayout: every period, in order, with readable from/to years and no overlaps within a row", () => {
  const L = HM.masterLayout(DS);
  assert.equal(L.periods.length, Object.values(DS).filter((d) => d.kind !== "thread").length);
  const anc = L.periods.find((p) => p.id === "ancient");
  assert.equal(anc.from, "1800 BC");
  assert.equal(anc.to, "AD 700");
  const ww2 = L.periods.find((p) => p.id === "ww2");
  assert.equal(`${ww2.from} – ${ww2.to}`, "1939 – 1945");
  for (const a of L.periods) for (const b of L.periods) {
    if (a !== b && a.row === b.row) assert.ok(a.y1 <= b.y0 || b.y1 <= a.y0, `${a.id} and ${b.id} share a row but overlap`);
  }
});

test("masterX: piecewise scale gives each span between breaks equal width, so short modern periods stay visible", () => {
  const L = HM.masterLayout(DS);
  assert.equal(HM.masterX(L, L.y0), 0);
  assert.equal(HM.masterX(L, L.y1), 1);
  const n = L.breaks.length - 1;
  L.breaks.forEach((b, i) => assert.ok(Math.abs(HM.masterX(L, b) - i / n) < 1e-9));
  const ww2 = L.periods.find((p) => p.id === "ww2");
  assert.ok(HM.masterX(L, ww2.y1) - HM.masterX(L, ww2.y0) > 0.015, "the Second World War is wider than a hairline");
  let last = -1;
  for (let y = L.y0; y <= L.y1; y += 37) { const v = HM.masterX(L, y); assert.ok(v >= last); last = v; }
});

let browser;
before(async () => { browser = await puppeteer.launch({ headless: true }); });
after(async () => { await browser?.close(); });

test("e2e: the strip highlights the open period, follows the dropdown, and opens a period when clicked", async () => {
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));
  await page.goto(pathToFileURL(path.join(ROOT, "app", "index.html")).href + "#ancient/-0216");
  await page.waitForFunction("window.APP && APP.ready");
  const on = () => page.evaluate(() => ({
    on: [...document.querySelectorAll("#master .m-period.on")].map((g) => g.dataset.id),
    years: [...document.querySelectorAll("#master .m-from, #master .m-to")].map((t) => t.textContent),
    dropdown: document.querySelector("#dataset").value,
    cursor: +document.querySelector("#master .m-cursor").getAttribute("data-x")
  }));
  let s = await on();
  assert.deepEqual(s.on, ["ancient"]);
  assert.deepEqual(s.years, ["1800 BC", "AD 700"]);
  await page.select("#dataset", "medieval");
  s = await on();
  assert.deepEqual(s.on, ["medieval"], "dropdown → strip");
  await page.click('#master .m-period[data-id="ww2"] rect');
  s = await on();
  assert.equal(s.dropdown, "ww2", "strip → dropdown");
  assert.deepEqual(s.on, ["ww2"]);
  assert.deepEqual(s.years, ["1939", "1945"]);
  await page.waitForFunction(() => location.hash.startsWith("#ww2/"), { timeout: 3000 });
  const before = s.cursor;
  await page.evaluate(() => APP.setCursor(new Date(Date.UTC(1945, 0, 1))));
  assert.ok((await on()).cursor > before, "the cursor tick follows the date");
  assert.deepEqual(errors, []);
  await page.close();
});

test("e2e: header D, with a status line of clickable crumbs, the title as the dropdown, the date, and a zoom bracket", async () => {
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));
  await page.goto(pathToFileURL(path.join(ROOT, "app", "index.html")).href + "#ancient/-0216-08-02");
  await page.waitForFunction("window.APP && APP.ready");
  const read = () => page.evaluate(() => ({
    status: document.querySelector("#status").textContent,
    crumbs: [...document.querySelectorAll("#status a[data-id]")].map((a) => a.dataset.id),
    title: document.querySelector("#ds-title").textContent,
    years: document.querySelector("#ds-years").textContent,
    date: document.querySelector("#cursor-date").textContent,
    showing: document.querySelector("#tl-showing").textContent,
    zoom: [+document.querySelector("#master .m-zoom").dataset.a, +document.querySelector("#master .m-zoom").dataset.b],
    picker: !!document.querySelector(".picker select#dataset"),
    barRows: Math.round(document.querySelector("#bar").getBoundingClientRect().height)
  }));
  let s = await read();
  const barH = s.barRows;
  assert.ok(barH <= 46, "the bar is one row");
  assert.match(s.status, /Nothing selected/);
  assert.match(s.status, /v\d/, "the version sits at the right of the status line");
  assert.equal(s.picker, true, "the title is the period dropdown");
  assert.equal(s.years, "1800 BC – AD 700");
  assert.equal(s.date, "216 BC");
  assert.equal(s.showing, "Showing the whole period");
  const wide = s.zoom[1] - s.zoom[0];
  await page.evaluate(() => APP.select("ch-hannibals-war"));
  s = await read();
  assert.deepEqual(s.crumbs, ["ch-rome", "ch-punic-wars", "ch-hannibals-war"], "path then the item itself");
  assert.match(s.status, /Chapter/);
  await new Promise((r) => setTimeout(r, 900));
  s = await read();
  assert.match(s.showing, /^Showing \d+ BC – \d+ BC$/);
  assert.ok(s.zoom[1] - s.zoom[0] < wide / 4, "the bracket narrows when the timeline zooms in");
  await page.click('#status a[data-id="ch-punic-wars"]');
  assert.equal(await page.evaluate(() => APP.state.selected), "ch-punic-wars", "a crumb opens its chapter");
  await page.click("#status .x");
  assert.equal(await page.evaluate(() => APP.state.selected), null, "× clears");
  await page.select("#dataset", "russia");
  s = await read();
  assert.equal(s.title, "Russia: Muscovy to Stalin");
  assert.equal(s.barRows, barH, "one fixed row, whatever the title");
  await page.select("#dataset", "maritime");
  assert.equal((await read()).barRows, barH);
  assert.deepEqual(errors, []);
  await page.close();
});
