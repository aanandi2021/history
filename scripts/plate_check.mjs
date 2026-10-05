// Check, screenshot and export an atlas plate.
//   node scripts/plate_check.mjs <plate-id> [--out <dir>] [--thumb]
// Prints validation errors, self-review warnings and map/text coverage as JSON, writes a full-spread PNG to
// tests/screenshots/atlas-<id>.png, and with --out also writes <id>-fig<N>.svg and <id>-fig<N>.png per figure
// (for embedding in an Obsidian note). Exit code 1 if the plate has errors or warnings.
import puppeteer from "puppeteer";
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL, fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const args = process.argv.slice(2);
const id = args.find((a) => !a.startsWith("--"));
const outIdx = args.indexOf("--out");
const out = outIdx >= 0 ? path.resolve(args[outIdx + 1]) : null;
// --thumb writes app/plates/<id>.jpg (the first figure, small) for the timeline viewer's plate tile
const thumb = args.includes("--thumb");
if (!id) { console.error("usage: node scripts/plate_check.mjs <plate-id> [--out <dir>]"); process.exit(2); }

const browser = await puppeteer.launch({ headless: true });
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 1000, deviceScaleFactor: 2 });
const consoleErrors = [];
page.on("pageerror", (e) => consoleErrors.push(e.message));
page.on("console", (m) => { if (m.type() === "error") consoleErrors.push(m.text()); });
await page.goto(pathToFileURL(path.join(ROOT, "atlas", "index.html")).href + "#" + encodeURIComponent(id));
await page.waitForFunction("window.ATLAS && ATLAS.ready", { timeout: 10000 });
const report = await page.evaluate((id) => {
  if (!window.PLATES[id]) return { id, errors: [`no plate with id "${id}" (is its file listed in atlas/index.html?)`], known: Object.keys(window.PLATES) };
  const c = window.ATLAS.current;
  return { id, errors: c.errors || [], warnings: c.warnings || [], coverage: c.coverage, figures: document.querySelectorAll("svg.fig").length };
}, id);
report.consoleErrors = consoleErrors;
const shot = path.join(ROOT, "tests", "screenshots", `atlas-${id}.png`);
fs.mkdirSync(path.dirname(shot), { recursive: true });
await page.screenshot({ path: shot, fullPage: true });
report.screenshot = shot;

if (out && !report.errors.length) {
  fs.mkdirSync(out, { recursive: true });
  report.exports = [];
  for (let i = 0; i < report.figures; i++) {
    const svg = await page.evaluate((i) => window.ATLAS.figureSVG(i), i);
    const svgPath = path.join(out, `${id}-fig${i + 1}.svg`);
    fs.writeFileSync(svgPath, svg);
    const box = (await page.$$("figure.fig-box"))[i];
    const pngPath = path.join(out, `${id}-fig${i + 1}.png`);
    await box.screenshot({ path: pngPath });
    report.exports.push(svgPath, pngPath);
  }
}
if (thumb && !report.errors.length) {
  await page.setViewport({ width: 1440, height: 1000, deviceScaleFactor: 1 });
  await page.evaluate(() => new Promise((r) => requestAnimationFrame(() => r())));
  const thumbPath = path.join(ROOT, "app", "plates", `${id}.jpg`);
  fs.mkdirSync(path.dirname(thumbPath), { recursive: true });
  await (await page.$("svg.fig")).screenshot({ path: thumbPath, type: "jpeg", quality: 72 });
  report.thumb = thumbPath;
}
await browser.close();
console.log(JSON.stringify(report, null, 2));
process.exit(report.errors.length || (report.warnings || []).length || consoleErrors.length ? 1 : 0);
