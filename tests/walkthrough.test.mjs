// Browser tests for the Spec Kit walkthrough (docs/speckit/index.html).
import test, { before, after } from "node:test";
import assert from "node:assert/strict";
import path from "node:path";
import fs from "node:fs";
import os from "node:os";
import { pathToFileURL } from "node:url";
import puppeteer from "puppeteer";
import { ROOT } from "./load.mjs";

const URL0 = pathToFileURL(path.join(ROOT, "docs", "speckit", "index.html")).href;
const SHOTS = path.join(ROOT, "tests", "screenshots");
let browser;
before(async () => { browser = await puppeteer.launch({ headless: true }); });
after(async () => { await browser?.close(); });

async function open(hash = "", ctx) {
  const context = ctx || (await browser.createBrowserContext());
  const page = await context.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  const errors = [], blocked = [];
  page.on("pageerror", (e) => errors.push(e.message));
  page.on("console", (m) => { if (m.type() === "error") errors.push(m.text()); });
  await page.setRequestInterception(true);
  page.on("request", (r) => (r.url().startsWith("file:") || r.url().startsWith("data:") || r.url().startsWith("blob:") ? r.continue() : (blocked.push(r.url()), r.abort())));
  await page.goto(URL0 + hash);
  await page.waitForFunction("window.WALK && WALK.ready");
  return { page, errors, blocked, context };
}
const wait = (ms) => new Promise((r) => setTimeout(r, ms));

test("artifacts bundle is current with the spec files", () => {
  const src = fs.readFileSync(path.join(ROOT, "docs", "speckit", "artifacts.js"), "utf8");
  const ART = JSON.parse(src.slice(src.indexOf("=") + 1).trim().replace(/;$/, ""));
  for (const [f, text] of Object.entries(ART.files)) {
    const disk = fs.readFileSync(path.join(ROOT, f), "utf8");
    assert.equal(text.replace(/\r\n/g, "\n"), disk.replace(/\r\n/g, "\n"), `${f} changed; run python scripts/build_walkthrough.py`);
  }
});

test("every step renders offline with no errors, and arrow keys move between steps", async () => {
  const { page, errors, blocked, context } = await open("#setup");
  const ids = await page.evaluate(() => STEPS.map((s) => s.id));
  for (const id of ids.slice(1)) {
    await page.keyboard.press("ArrowRight");
    assert.equal(await page.evaluate(() => WALK.current()), id);
    assert.ok(await page.$eval("#step h2", (h) => h.textContent.length > 3));
    assert.ok((await page.$$("#step ul.done input")).length >= 1, `${id} has done-when checks`);
  }
  assert.match(await page.evaluate(() => location.hash), /#converge$/);
  await page.keyboard.press("ArrowLeft");
  assert.equal(await page.evaluate(() => WALK.current()), "implement");
  assert.deepEqual(errors, []);
  assert.deepEqual(blocked, []);
  await context.close();
});

test("every 'Read' button opens a real file, and anchors land on the heading", async () => {
  const { page, context } = await open("#clarify");
  await page.click("#step [data-open]");
  await wait(200);
  assert.equal(await page.$eval("#viewer", (d) => d.open), true);
  assert.equal(await page.$eval("#viewer-file", (s) => s.value), "specs/001-world-viewer/spec.md");
  const top = await page.$eval("#viewer-body", (b) => b.scrollTop);
  assert.ok(top > 0, "scrolled to Clarifications");
  assert.ok(await page.$("#viewer-body h2.flash"));
  assert.match(await page.$eval("#viewer-gh", (a) => a.href), /github\.com\/aanandi2021\/history\/blob\/main\/specs/);
  await page.screenshot({ path: path.join(SHOTS, "walk-viewer.png") });
  await page.click("#viewer-close");
  // Each step's file exists in the bundle.
  const missing = await page.evaluate(() => STEPS.filter((s) => s.file && !ARTIFACTS.files[s.file]).map((s) => s.id));
  assert.deepEqual(missing, []);
  // And each commit named by a step is in the history.
  const unknown = await page.evaluate(() => STEPS.filter((s) => s.commit && !ARTIFACTS.commits.some((c) => c.hash === s.commit)).map((s) => s.id));
  assert.deepEqual(unknown, []);
  await context.close();
});

test("a new project fills prompts from its details, saves progress, and exports a note", async () => {
  const ctx = await browser.createBrowserContext();
  let { page } = await open("#setup", ctx);
  page.on("dialog", (d) => d.accept("Neon Test"));
  await page.click("#new-project");
  await wait(200);
  assert.equal(await page.$eval("#details", (d) => d.open), true);
  await page.type('#fields [name="idea"]', "a rain-soaked arcade racer");
  await page.type('#fields [name="values"]', "every build playable; offline first");
  await page.click('#details button[value="save"]');
  await wait(200);
  assert.equal(await page.$eval("#proj-title", (h) => h.textContent), "Neon Test");
  assert.match(await page.$eval("#prompt", (p) => p.dataset.text), /specify init neon-test --integration copilot/);
  await page.evaluate(() => WALK.go("constitution"));
  const t = await page.$eval("#prompt", (p) => p.dataset.text);
  assert.match(t, /Neon Test: a rain-soaked arcade racer\. Principles: every build playable; offline first\./);
  assert.match(t, /<constraints>/, "blank fields show as placeholders");
  assert.ok(await page.$('#step [data-act="details"]'), "offers to fill in blanks");
  // Tick every check on this step; it shows as done in the flow.
  for (const cb of await page.$$("#step ul.done input")) await cb.click();
  assert.ok(await page.$('#flow-svg .node.done[data-step="constitution"]'));
  // Survives a reload.
  await page.reload();
  await page.waitForFunction("window.WALK && WALK.ready");
  assert.equal(await page.$eval("#proj-title", (h) => h.textContent), "Neon Test");
  assert.ok(await page.$('#flow-svg .node.done[data-step="constitution"]'));
  const note = await page.evaluate(() => WALK.exportMarkdown());
  assert.match(note, /^---\ntype: project_speckit\nproject: "Neon Test"/);
  assert.match(note, /## 1\. Constitution ✅/);
  assert.match(note, /- \[x\] Each principle could fail a plan/);
  assert.match(note, /- \[ \] `\.specify\/` and `\.github\/skills\/` exist/);
  // The download button produces a file.
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "walk-"));
  const cdp = await page.createCDPSession();
  await cdp.send("Browser.setDownloadBehavior", { behavior: "allow", downloadPath: dir, browserContextId: ctx.id });
  await page.click("#export");
  let files = [];
  for (let i = 0; i < 30 && !files.some((f) => f.endsWith(".md")); i++) { await wait(100); files = fs.readdirSync(dir); }
  assert.ok(files.includes("Neon Test — Spec Kit.md"), `downloads: [${files.join(", ")}]`);
  await page.screenshot({ path: path.join(SHOTS, "walk-new-project.png") });
  // The worked example is untouched and read-only.
  await page.select("#project", "example");
  await wait(100);
  assert.equal(await page.$eval("#proj-title", (h) => h.textContent), "Amit's World");
  await page.click("#edit-project");
  assert.equal(await page.$eval('#fields [name="name"]', (i) => i.readOnly), true);
  await ctx.close();
});

test("presets start a project named for them", async () => {
  const { page, context } = await open("#setup");
  await page.select("#project", "preset:dead-heat");
  await wait(150);
  assert.equal(await page.$eval("#proj-title", (h) => h.textContent), "Dead Heat");
  assert.match(await page.$eval("#prompt", (p) => p.dataset.text), /specify init dead-heat/);
  assert.equal(await page.$('#project option[value="preset:dead-heat"]'), null, "preset no longer offered");
  await context.close();
});
