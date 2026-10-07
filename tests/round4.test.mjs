// Atlas round 4 (Rome, PDF pp. 74–93): dated growth tiers, campaign itineraries and fronts with teeth.
import test, { before, after } from "node:test";
import assert from "node:assert/strict";
import path from "node:path";
import { pathToFileURL } from "node:url";
import puppeteer from "puppeteer";
import { APP, HM } from "./load.mjs";

const D = (s) => HM.parseDate(s);
const march = {
  type: "itinerary", colour: "#4f6fa0",
  stops: [{ name: "A", date: "1812-06-24", at: [24, 55] }, { name: "B", date: "1812-07-24", at: [30, 55] }, { name: "C", date: "1812-09-14", at: [37, 56] }]
};

test("liveAt: a tier appears on its from date and goes after until; partial dates cover their whole span", () => {
  const L = { from: "1552", until: "1556" };
  assert.equal(HM.liveAt(L, D("1551-12-31")), false);
  assert.equal(HM.liveAt(L, D("1552-01-01")), true);
  assert.equal(HM.liveAt(L, D("1556-12-31")), true);
  assert.equal(HM.liveAt(L, D("1557-01-01")), false);
  assert.equal(HM.liveAt({ from: "1812-09" }, D("1812-09-01")), true);
  assert.equal(HM.liveAt({}, D("1000")), true);
  assert.equal(HM.liveAt(L, null), true, "no moment: show everything");
});

test("itineraryAt: before, during and after a campaign", () => {
  const pre = HM.itineraryAt(march, D("1812-06-01"));
  assert.equal(pre.started, false);
  const mid = HM.itineraryAt(march, D("1812-07-09"));
  assert.equal(mid.leg, 0);
  assert.ok(Math.abs(mid.f - 0.5) < 0.02, `halfway through leg 1, got ${mid.f}`);
  assert.ok(Math.abs(mid.pos[0] - 27) < 0.2);
  const leg2 = HM.itineraryAt(march, D("1812-08-01"));
  assert.equal(leg2.leg, 1);
  assert.equal(leg2.done, 1);
  const post = HM.itineraryAt(march, D("1813"));
  assert.equal(post.ended, true);
  assert.deepEqual(post.pos, [37, 56]);
});

test("stopLabel prints dates the way the atlas does beside a route", () => {
  const st = [{ date: "1812-06-24" }, { date: "1812-09-07" }, { date: "1813-01" }, { date: "1814" }];
  assert.equal(HM.stopLabel(st, 0), "24 Jun 1812");
  assert.equal(HM.stopLabel(st, 1), "7 Sep");
  assert.equal(HM.stopLabel(st, 2), "Jan 1813");
  assert.equal(HM.stopLabel(st, 3), "1814");
});

test("sceneLadder lists dated area tiers oldest first", () => {
  const sc = { layers: [{ type: "area", from: "1582", name: "c" }, { type: "area", name: "core" }, { type: "area", from: "1478", name: "a" }, { type: "arrow", from: "1300" }] };
  assert.deepEqual(HM.sceneLadder(sc).map((r) => r.from), ["1478", "1582"]);
});

test("validateScene checks itineraries, fronts and dates", () => {
  const ch = { title: "x", text: "" };
  assert.deepEqual(HM.validateScene({ layers: [march] }, ch), []);
  const back = { ...march, stops: [march.stops[1], march.stops[0]] };
  assert.match(HM.validateScene({ layers: [back] }, ch).join(), /earlier than the stop before/);
  assert.match(HM.validateScene({ layers: [{ type: "itinerary", stops: [march.stops[0]] }] }, ch).join(), /2\+ stops/);
  assert.match(HM.validateScene({ layers: [{ type: "front", path: [[0, 0]] }] }, ch).join(), /front needs a path/);
  assert.match(HM.validateScene({ layers: [{ type: "label", text: "t", at: [0, 0], from: "soon" }] }, ch).join(), /from must be/);
  assert.match(HM.validateScene({ layers: [{ type: "label", text: "t", at: [0, 0], from: "1600", until: "1500" }] }, ch).join(), /until is before from/);
  assert.deepEqual(HM.validateScene({ layers: [{ type: "point", symbol: "ally", name: "Rhodes", at: [28, 36] }] }, ch), []);
});

test("sceneKey: itineraries count as the actor's movement, fronts as lines", () => {
  const rows = HM.sceneKey({ layers: [march, { type: "front", colour: "#4d463b", path: [[0, 0], [1, 1]] }] }, { "#4f6fa0": "France", "#4d463b": "Front lines" });
  assert.equal(rows.find((r) => r.label === "France").group, "who");
  assert.deepEqual(rows.find((r) => r.label === "Front lines").marks, ["front"]);
});

// ---- end to end
let browser;
before(async () => { browser = await puppeteer.launch({ headless: true }); });
after(async () => { await browser?.close(); });
async function open(hash) {
  const ctx = await browser.createBrowserContext();
  const page = await ctx.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));
  page.on("console", (m) => { if (m.type() === "error") errors.push(m.text()); });
  await page.goto(pathToFileURL(path.join(APP, "index.html")).href + hash);
  await page.waitForFunction("window.APP && APP.ready");
  await new Promise((r) => setTimeout(r, 900));
  return { page, errors, ctx };
}
const probe = (page) => page.evaluate(() => {
  const its = [...document.querySelectorAll("#map .scene .focus .s-itinerary")];
  return its.map((g) => ({
    shown: g.getAttribute("display") !== "none",
    todo: g.querySelectorAll(".s-itin-leg.todo").length,
    legs: g.querySelectorAll(".s-itin-leg").length,
    head: g.querySelector(".s-itin-head").getAttribute("display") !== "none"
  }));
});

test("e2e: the 1812 march plays out as the timeline moves; the retreat appears in October", async () => {
  const { page, errors, ctx } = await open("#russia/1812-08-01/ch-1812");
  let [adv, ret] = await probe(page);
  assert.ok(adv.shown && adv.head, "advance is drawn with its arrowhead");
  assert.equal(adv.legs, 5);
  assert.equal(adv.todo, 3, "on 1 Aug: Vitebsk reached, the Smolensk leg under way");
  assert.equal(ret.shown, false, "no retreat before 19 Oct");
  await page.evaluate(() => APP.setCursor(new Date(Date.UTC(1812, 10, 20))));
  await new Promise((r) => setTimeout(r, 300));
  [adv, ret] = await probe(page);
  assert.equal(adv.todo, 0, "the advance is complete");
  assert.ok(ret.shown && ret.head && ret.todo > 0 && ret.todo < ret.legs, "the retreat is part-way");
  assert.deepEqual(errors, []);
  await ctx.close();
});

test("e2e: Muscovy's growth ladder lights up tier by tier", async () => {
  const { page, errors, ctx } = await open("#russia/1560-01-01/ch-muscovy");
  const ladder = () => page.evaluate(() => [...document.querySelectorAll("#scene-key [data-from]")].map((e) => e.dataset.from + (e.classList.contains("on") ? "*" : "")));
  assert.deepEqual(await ladder(), ["1478*", "1552*", "1582"]);
  assert.ok(!(await page.evaluate(() => APP.sceneLayers())).includes("Muscovy by 1613"));
  await page.evaluate(() => APP.setCursor(new Date(Date.UTC(1600, 0, 1))));
  await new Promise((r) => setTimeout(r, 300));
  assert.deepEqual(await ladder(), ["1478*", "1552*", "1582*"]);
  assert.ok(!(await page.evaluate(() => APP.sceneLayers())).includes("Muscovy by 1613"), "chapters without atlas plates no longer draw hand area polygons");
  assert.deepEqual(errors, []);
  await ctx.close();
});

test("e2e: the Eastern Front shows the Dec 1941 front, then the Nov 1942 one, with teeth", async () => {
  const { page, errors, ctx } = await open("#ww2/1942-01-15/ch-barbarossa-to-stalingrad");
  const layers = () => page.evaluate(() => APP.sceneLayers());
  assert.ok((await layers()).includes("front, Dec 1941"));
  assert.ok(!(await layers()).includes("front, Nov 1942"));
  assert.ok(await page.evaluate(() => document.querySelectorAll("#map .scene .focus .s-front").length >= 1));
  await page.evaluate(() => APP.setCursor(new Date(Date.UTC(1942, 10, 25))));
  await new Promise((r) => setTimeout(r, 300));
  assert.ok((await layers()).includes("front, Nov 1942"));
  assert.ok(!(await layers()).includes("front, Dec 1941"));
  assert.deepEqual(errors, []);
  await ctx.close();
});
