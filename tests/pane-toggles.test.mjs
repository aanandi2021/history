import test, { before, after } from "node:test";
import assert from "node:assert/strict";
import path from "node:path";
import { pathToFileURL } from "node:url";
import puppeteer from "puppeteer";
import { ROOT } from "./load.mjs";

const url = pathToFileURL(path.join(ROOT, "app", "index.html")).href + "#ww2/1942-08-19/dieppe-1942";
let browser;
before(async () => { browser = await puppeteer.launch({ headless: true }); });
after(async () => { await browser?.close(); });

async function open(width) {
  const context = await browser.createBrowserContext();
  const page = await context.newPage();
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));
  await page.setViewport({ width, height: 900 });
  await page.goto(url);
  await page.waitForFunction("window.APP && APP.ready");
  return { context, page, errors };
}

const view = (page) => page.evaluate(() => {
  const rect = (s) => document.querySelector(s).getBoundingClientRect();
  return {
    date: APP.state.cursor.toISOString(),
    selected: APP.state.selected,
    domain: APP.domain(),
    heading: document.querySelector("#cursor-date").textContent,
    master: rect("#master").height,
    map: rect("#map-wrap").height,
    left: rect("#left").width,
    panel: rect("#panel").width,
    panelHeight: rect("#panel").height,
    timeline: getComputedStyle(document.querySelector("#tl-wrap")).display,
    details: getComputedStyle(document.querySelector("#panel-content")).display,
    expanded: ["master-toggle", "timeline-toggle", "panel-toggle"].map((id) =>
      document.getElementById(id).getAttribute("aria-expanded"))
  };
});

test("all three sections collapse independently, free map space, restore, and survive reload", async () => {
  const { context, page, errors } = await open(1440);
  const initial = await view(page);
  assert.deepEqual(initial.expanded, ["true", "true", "true"]);
  await page.click("#master-toggle");
  const upper = await view(page);
  assert.ok(upper.master <= 28 && upper.map > initial.map, "upper strip closes and map grows");
  assert.deepEqual(upper.expanded, ["false", "true", "true"]);
  await page.click("#investigations-btn");
  assert.equal(await page.$eval("#investigations-drawer", (el) => el.hidden), false);
  await page.click("#timeline-toggle");
  const lower = await view(page);
  assert.equal(lower.timeline, "none");
  assert.ok(lower.map > upper.map, "hiding the lower timeline expands the map");
  assert.equal(await page.$eval("#investigations-drawer", (el) => el.hidden), true);
  assert.deepEqual(lower.expanded, ["false", "false", "true"]);
  await page.click("#panel-toggle");
  const allHidden = await view(page);
  assert.ok(allHidden.panel <= 33 && allHidden.left > lower.left, "right pane folds to a restore rail");
  assert.equal(allHidden.details, "none");
  assert.deepEqual(allHidden.expanded, ["false", "false", "false"]);
  assert.equal(allHidden.date, initial.date);
  assert.equal(allHidden.selected, initial.selected);
  assert.deepEqual(allHidden.domain, initial.domain);

  await page.reload();
  await page.waitForFunction("window.APP && APP.ready");
  const restored = await view(page);
  assert.deepEqual(restored.expanded, ["false", "false", "false"]);
  assert.ok(restored.heading, "the date remains visible with the master strip hidden at startup");
  await page.click("#panel-toggle");
  await page.click("#timeline-toggle");
  await page.click("#master-toggle");
  const openAgain = await view(page);
  assert.deepEqual(openAgain.expanded, ["true", "true", "true"]);
  assert.ok(openAgain.panel > 300 && openAgain.master > 50 && openAgain.timeline !== "none");
  assert.equal(openAgain.date, initial.date);
  assert.equal(openAgain.selected, initial.selected);
  assert.deepEqual(openAgain.domain, initial.domain);
  let hiddenMask = 0;
  const toggles = ["master-toggle", "timeline-toggle", "panel-toggle"];
  for (let mask = 0; mask < 8; mask++) {
    for (let i = 0; i < toggles.length; i++) {
      if (!!(hiddenMask & (1 << i)) !== !!(mask & (1 << i))) await page.click(`#${toggles[i]}`);
    }
    hiddenMask = mask;
    const current = await view(page);
    assert.deepEqual(current.expanded, toggles.map((_, i) => String(!(mask & (1 << i)))), `pane combination ${mask}`);
    assert.equal(current.date, initial.date);
    assert.equal(current.selected, initial.selected);
    assert.ok(current.map >= 220);
  }
  assert.deepEqual(errors, []);
  await context.close();
});

test("the restore arrows stay reachable when panes stack on a narrow screen", async () => {
  const { context, page, errors } = await open(800);
  await page.click("#panel-toggle");
  assert.ok((await view(page)).panelHeight < 45, "collapsed right pane becomes a short row");
  await page.click("#master-toggle");
  await page.click("#timeline-toggle");
  const collapsed = await view(page);
  assert.ok(collapsed.map >= 300);
  assert.deepEqual(collapsed.expanded, ["false", "false", "false"]);
  await page.click("#panel-toggle");
  await page.click("#timeline-toggle");
  await page.click("#master-toggle");
  assert.deepEqual((await view(page)).expanded, ["true", "true", "true"]);
  assert.deepEqual(errors, []);
  await context.close();
});
