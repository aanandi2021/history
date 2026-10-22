import test, { before, after } from "node:test";
import assert from "node:assert/strict";
import path from "node:path";
import { pathToFileURL } from "node:url";
import puppeteer from "puppeteer";
import { ROOT } from "./load.mjs";

let browser;
before(async () => { browser = await puppeteer.launch({ headless: true }); });
after(async () => { await browser?.close(); });

async function offlinePage(file, hash = "") {
  const page = await browser.newPage();
  const errors = [], external = [];
  page.on("pageerror", (e) => errors.push(e.message));
  page.on("console", (m) => { if (m.type() === "error") errors.push(m.text()); });
  await page.setRequestInterception(true);
  page.on("request", (r) => {
    if (r.url().startsWith("file:") || r.url().startsWith("data:")) r.continue();
    else { external.push(r.url()); r.abort(); }
  });
  await page.goto(pathToFileURL(path.join(ROOT, file)).href + hash);
  return { page, errors, external };
}

const pair = (page, selector) => page.$$eval(selector, (nodes) =>
  nodes.map((a) => ({ url: a.href, target: a.target, title: a.textContent })));
function assertPair(links) {
  assert.equal(links.length, 2, JSON.stringify(links));
  assert.notEqual(links[0].url, links[1].url);
  for (const link of links) {
    assert.match(link.url, /^https:\/\/en\.wikipedia\.org\/wiki\/[^?]+$/);
    assert.equal(link.target, "_blank");
  }
}

test("investigations stay over the timeline while sourced answers follow the era, then open a route", async () => {
  const { page, errors, external } = await offlinePage("app/index.html", "#ww2/1942-08-19/dieppe-1942");
  await page.waitForFunction("window.APP && APP.ready");
  assertPair(await pair(page, "#card .links a.wiki, #card .links a.wiki-wide"));
  assertPair(await pair(page, "#now .wiki-pair a"));
  const before = await page.evaluate(() => ({ date: APP.state.cursor.toISOString(), map: document.querySelector("#map-state").textContent, card: document.querySelector("#card h2").textContent }));
  await page.click("#investigations-btn");
  assert.equal(await page.$eval("#investigations-drawer", (el) => el.hidden), false);
  assert.equal(await page.$eval("#investigations-drawer details", (el) => el.closest("#investigation-body").querySelectorAll("details").length), 11);
  await page.click("#investigations-drawer details summary");
  assert.match(await page.$eval("#investigations-drawer details[open] .sources a", (a) => a.href), /^https:\/\//);
  const still = await page.evaluate(() => ({ date: APP.state.cursor.toISOString(), map: document.querySelector("#map-state").textContent, card: document.querySelector("#card h2").textContent }));
  assert.deepEqual(still, before, "opening a question preserves date, map and card");
  await page.click('[data-investigation-tab="routes"]');
  assert.ok((await page.$$("#investigation-body .route")).length >= 9, "both existing tours plus seven new routes");
  await page.click("#investigation-body .route");
  assert.equal(await page.$eval("#investigations-drawer", (el) => el.hidden), true);
  assertPair(await pair(page, "#tour-card .wiki-pair a"));
  await page.click("#investigations-btn");
  await page.click('[data-investigation-tab="lenses"]');
  await page.evaluate(() => APP.loadDataset("ancient"));
  assert.match(await page.$eval("#investigation-body", (el) => el.textContent), /ancient/i);
  assert.equal(await page.$eval("#investigation-body", (el) => el.querySelectorAll("details").length), 11);
  const book = await page.evaluate(() => Object.entries(window.DATASETS).map(([era, raw]) => {
    const ds = HM.normalise(raw);
    const found = ds.books.find((b) => HM.linksFor(ds, b).some((l) => l.kind === "wiki"));
    return found && { era, id: found.id };
  }).find(Boolean));
  assert.ok(book, "a book has a verified article");
  await page.evaluate(({ era, id }) => { APP.loadDataset(era); APP.select(id); }, book);
  assertPair(await pair(page, "#card .links a.wiki, #card .links a.wiki-wide"));
  assert.deepEqual(external, [], "the app made no online requests");
  assert.deepEqual(errors, []);
  await page.close();
});

test("boards and atlas plates show the direct subject and wider article offline", async () => {
  const board = await offlinePage("app/board.html", "#ww1-origins");
  await board.page.waitForFunction("window.BOARD && BOARD.ready");
  await board.page.click("#b-tiles .tile .more");
  assertPair(await pair(board.page, "#b-tiles .tile.open .x a"));
  assert.deepEqual(board.external, []);
  assert.deepEqual(board.errors, []);
  await board.page.close();

  const atlas = await offlinePage("atlas/index.html", "#ww2-barbarossa-stalingrad-1941-1943");
  await atlas.page.waitForFunction("window.ATLAS && ATLAS.ready", { timeout: 30000 });
  assertPair(await pair(atlas.page, ".text-page .wiki-context a"));
  assert.deepEqual(atlas.external, []);
  assert.deepEqual(atlas.errors, []);
  await atlas.page.close();
});
