// Broad smoke sweep: loads many viewer states, every tour stop and every atlas plate, and reports console errors,
// failed requests and slow year changes. Usage: node scripts/smoke_sweep.mjs
import puppeteer from "puppeteer";
import path from "node:path";
import fs from "node:fs";
import { pathToFileURL } from "node:url";

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname.replace(/^\/(\w:)/, "$1")), "..");
const appUrl = pathToFileURL(path.join(ROOT, "app", "index.html")).href;
const atlasUrl = pathToFileURL(path.join(ROOT, "atlas", "index.html")).href;
const browser = await puppeteer.launch({ headless: true });
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
let errs = [];
page.on("console", (m) => { if (m.type() === "error") errs.push(m.text()); });
page.on("pageerror", (e) => errs.push("pageerror: " + e.message));
page.on("requestfailed", (r) => errs.push("requestfailed: " + r.url()));
const problems = [];
const check = (label) => { if (errs.length) problems.push({ label, errs: [...new Set(errs)].slice(0, 5) }); errs = []; };

await page.goto(appUrl);
await page.waitForFunction("window.APP && window.APP.ready", { timeout: 15000 });
const info = await page.evaluate(() => ({
  ds: Object.values(window.DATASETS).map((d) => ({ id: d.id, from: d.from || d.start, to: d.to || d.end })),
  tours: Object.values(window.TOURS || {}).map((t) => ({ id: t.id, n: t.stops.length }))
}));
check("landing");

for (const id of info.ds.map((d) => d.id)) {
  await page.goto(appUrl + "#" + id);
  await page.waitForFunction("window.APP && window.APP.ready", { timeout: 15000 });
  const dom = await page.evaluate(() => window.APP.domain());
  const [a, b] = dom.map((s) => parseInt(s, 10));
  const years = [0, 0.2, 0.4, 0.6, 0.8, 1].map((f) => Math.round(a + (b - a) * f));
  for (const y of years) {
    const t0 = Date.now();
    await page.evaluate((y) => { location.hash = location.hash.split("/")[0] + "/" + (y < 0 ? "-" + String(-y).padStart(4, "0") : String(y).padStart(4, "0")); }, y);
    await new Promise((r) => setTimeout(r, 350));
    check(`#${id}/${y}`);
    if (Date.now() - t0 > 2500) problems.push({ label: `#${id}/${y}`, errs: ["slow: " + (Date.now() - t0) + "ms"] });
  }
}
for (const t of info.tours) {
  for (let s = 0; s < t.n; s++) {
    await page.goto(`${appUrl}#ancient?tour=${t.id}&stop=${s}`);
    await page.waitForFunction("window.APP && window.APP.ready", { timeout: 15000 });
    await new Promise((r) => setTimeout(r, 400));
    const ok = await page.evaluate(() => !!document.querySelector("#tour-card") && !document.querySelector("#tour-card").hidden);
    if (!ok) errs.push("tour card not shown");
    check(`tour ${t.id} stop ${s}`);
  }
}
await page.goto(atlasUrl);
await new Promise((r) => setTimeout(r, 1500));
const plates = await page.evaluate(() => Object.keys(window.PLATES || {}).map((k) => "#" + encodeURIComponent(k)));
check("atlas index");
const uniq = [...new Set(plates)];
for (const h of uniq) {
  await page.goto(new URL(h, atlasUrl).href);
  await new Promise((r) => setTimeout(r, 700));
  check("atlas " + h);
}
await browser.close();
console.log(`datasets ${info.ds.length}, tours ${info.tours.length}, atlas plates ${uniq.length}`);
console.log(problems.length ? JSON.stringify(problems, null, 1) : "no problems");
fs.mkdirSync(path.join(ROOT, "study"), { recursive: true });
fs.writeFileSync(path.join(ROOT, "study", "smoke-sweep.json"), JSON.stringify(problems, null, 1));
