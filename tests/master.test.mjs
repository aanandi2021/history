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
  assert.equal(L.periods.length, Object.keys(DS).length);
  const anc = L.periods.find((p) => p.id === "ancient");
  assert.equal(anc.from, "1800 BC");
  assert.equal(anc.to, "AD 700");
  const ww2 = L.periods.find((p) => p.id === "ww2");
  assert.equal(`${ww2.from} – ${ww2.to}`, "1937 – 1945");
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
    cursor: +document.querySelector("#master .m-cursor").getAttribute("x1")
  }));
  let s = await on();
  assert.deepEqual(s.on, ["ancient"]);
  assert.deepEqual(s.years, ["1800 BC", "AD 700"]);
  await page.select("#dataset", "russia");
  s = await on();
  assert.deepEqual(s.on, ["russia"], "dropdown → strip");
  await page.click('#master .m-period[data-id="ww2"] rect');
  s = await on();
  assert.equal(s.dropdown, "ww2", "strip → dropdown");
  assert.deepEqual(s.on, ["ww2"]);
  assert.deepEqual(s.years, ["1937 – 1945"]);
  await page.waitForFunction(() => location.hash.startsWith("#ww2/"), { timeout: 3000 });
  const before = s.cursor;
  await page.evaluate(() => APP.setCursor(new Date(Date.UTC(1937, 1, 1))));
  assert.ok((await on()).cursor < before, "the cursor tick follows the date");
  assert.deepEqual(errors, []);
  await page.close();
});
