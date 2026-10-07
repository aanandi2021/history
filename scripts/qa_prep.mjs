// Render the fixed prep QA set into study/qa-prep/latest with the current short commit in each filename.
import puppeteer from "puppeteer";
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { pathToFileURL } from "node:url";

const ROOT = path.resolve(new URL("..", import.meta.url).pathname.replace(/^\/(.:)/, "$1"));
const OUT = path.join(ROOT, "study", "qa-prep", "latest");
fs.mkdirSync(OUT, { recursive: true });
const commit = execFileSync("git", ["rev-parse", "--short", "HEAD"], { cwd: ROOT, encoding: "utf8" }).trim();
const pageUrl = pathToFileURL(path.join(ROOT, "app", "index.html")).href;
const views = [
  { name: "landing", hash: "" },
  { name: "world_ancient_1", hash: "#ancient/1" },
  { name: "world_medieval_1096", hash: "#medieval/1096" },
  { name: "world_transition_1550", hash: "#transition/1550" },
  { name: "world_early-modern_1715", hash: "#early-modern/1715" },
  { name: "world_ww2_1942", hash: "#ww2/1942" },
  { name: "regional_medieval_1180_europe", hash: "#medieval/1180", eval: "window.APP.flyTo([[-10,35],[30,58]],0)" },
  { name: "regional_ancient_1_rome", hash: "#ancient/1", eval: "window.APP.flyTo([[-10,30],[45,55]],0)" },
  { name: "tour_jewish_history_stop4", hash: "#medieval/1096?tour=jewish-history&stop=4" }
];

const browser = await puppeteer.launch({ headless: true });
const results = [];
try {
  for (const v of views) {
    const context = await browser.createBrowserContext();
    const page = await context.newPage();
    const errs = [];
    page.on("console", (m) => { if (["error", "warning"].includes(m.type())) errs.push(`${m.type()}: ${m.text()}`); });
    page.on("pageerror", (e) => errs.push(`pageerror: ${e.message}`));
    page.on("requestfailed", (r) => errs.push(`requestfailed: ${r.url()}`));
    await page.setViewport({ width: 1440, height: 900 });
    await page.goto(pageUrl + v.hash);
    await page.waitForFunction("window.APP && APP.ready", { timeout: 10000 });
    if (v.eval) await page.evaluate(v.eval);
    await page.waitForFunction("!window.APP.histBasemapDate || !window.HistBasemaps || window.APP.state.dsId === 'ww2' || window.APP.histBasemapLoaded()", { timeout: 10000 }).catch(() => errs.push("historical basemap did not finish loading"));
    await new Promise((r) => setTimeout(r, 1000));
    const file = path.join(OUT, `${commit}_${v.name}.png`);
    await page.screenshot({ path: file });
    const hashNow = await page.evaluate(() => location.hash);
    results.push({ file, hash: hashNow, errors: errs });
    await context.close();
  }
} finally {
  await browser.close();
}
for (const r of results) {
  console.log(`${r.errors.length ? "WARN" : "OK"} ${r.file}`);
  console.log(`  ${r.hash}`);
  for (const e of r.errors) console.log(`  ${e}`);
}