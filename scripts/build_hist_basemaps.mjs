import fs from "node:fs";
import path from "node:path";
import https from "node:https";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SRC = path.join(ROOT, "study", "hist-src");
const WORK = path.join(SRC, "build");
const OUT = path.join(ROOT, "app", "data", "hist");
const INDEX_URL = "https://raw.githubusercontent.com/aourednik/historical-basemaps/master/index.json";
const RAW_BASE = "https://raw.githubusercontent.com/aourednik/historical-basemaps/master/geojson";
const ATTRIBUTION = "Historical basemaps from aourednik/historical-basemaps (GPL-3.0), https://github.com/aourednik/historical-basemaps.";
const TARGET_MAX = Number(process.env.HIST_TARGET_MAX || 150_000);
const TARGET_MIN = Number(process.env.HIST_TARGET_MIN || 60_000);
const SIMPLIFY = (process.env.HIST_SIMPLIFY || "8,5,3,2,1,0.5,0.25").split(",").map((x) => x.trim()).filter(Boolean);

fs.mkdirSync(SRC, { recursive: true });
fs.mkdirSync(WORK, { recursive: true });
fs.mkdirSync(OUT, { recursive: true });

function download(url, file) {
  if (fs.existsSync(file) && fs.statSync(file).size > 0) return Promise.resolve(false);
  return new Promise((resolve, reject) => {
    const tmp = file + ".download";
    const out = fs.createWriteStream(tmp);
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        out.close(() => fs.rmSync(tmp, { force: true }));
        return download(res.headers.location, file).then(resolve, reject);
      }
      if (res.statusCode !== 200) {
        out.close(() => fs.rmSync(tmp, { force: true }));
        return reject(new Error(`${url}: HTTP ${res.statusCode}`));
      }
      res.pipe(out);
      out.on("finish", () => out.close(() => { fs.renameSync(tmp, file); resolve(true); }));
    }).on("error", (err) => { out.close(() => fs.rmSync(tmp, { force: true })); reject(err); });
  });
}

function run(cmd, args) {
  const r = spawnSync(cmd, args, { cwd: ROOT, stdio: "pipe", encoding: "utf8" });
  if (r.error) throw r.error;
  if (r.status) throw new Error(`${cmd} ${args.join(" ")} failed with ${r.status}\n${r.stdout}\n${r.stderr}`);
  return r;
}

function urlFileName(year) {
  return year < 0 ? `world_bc${Math.abs(year)}.geojson` : `world_${year}.geojson`;
}
function outFileName(year) { return `world_${year}.js`; }
function topoTmpName(year, pct) { return path.join(WORK, `world_${year}_${String(pct).replace(/[^0-9a-z]/gi, "_")}.topojson`); }

function wantedYears(index) {
  const arg = process.argv.find((a) => a.startsWith("--years="));
  if (arg) return arg.slice(8).split(",").map((x) => Number(x.trim())).filter(Number.isFinite).sort((a, b) => a - b);
  const min = Number(process.env.HIST_MIN_YEAR || -10000);
  const max = Number(process.env.HIST_MAX_YEAR || 1945);
  return index.years.map((d) => Number(d.year)).filter((y) => y >= min && y <= max).sort((a, b) => a - b);
}

const mapshaper = path.join(ROOT, "node_modules", "mapshaper", "bin", "mapshaper");
function convert(year, srcFile) {
  const candidates = [];
  for (const pct of SIMPLIFY) {
    const topoFile = topoTmpName(year, pct);
    run(process.execPath, [mapshaper,
      "-i", path.relative(ROOT, srcFile), "name=world",
      "-filter-fields", "NAME,SUBJECTO,PARTOF,BORDERPRECISION",
"-each", "NAME=String(NAME||'').trim(),SUBJECTO=String(SUBJECTO||'').trim(),PARTOF=String(PARTOF||'').trim(),BORDERPRECISION=Number(BORDERPRECISION)||1",
      "-filter", "!!(NAME || SUBJECTO || PARTOF)",
      "-simplify", "weighted", `${pct}%`, "keep-shapes",
      "-filter-islands", "min-area=20km2", "remove-empty",
      "-o", "format=topojson", "quantization=5e3", path.relative(ROOT, topoFile), "force"
    ]);
    const topo = fs.readFileSync(topoFile, "utf8");
    const js = `// ${ATTRIBUTION}\n// Source file: geojson/${urlFileName(year)}. Built by scripts/build_hist_basemaps.mjs.\nwindow.HIST_BASEMAPS = window.HIST_BASEMAPS || {};\nwindow.HIST_BASEMAPS[${JSON.stringify(String(year))}] = ${topo};\n`;
    candidates.push({ pct, js, bytes: Buffer.byteLength(js) });
  }
  let chosen = candidates.find((c) => c.bytes <= TARGET_MAX && c.bytes >= TARGET_MIN)
    || candidates.filter((c) => c.bytes <= TARGET_MAX).sort((a, b) => b.bytes - a.bytes)[0]
    || candidates.sort((a, b) => a.bytes - b.bytes)[0];
  const outFile = path.join(OUT, outFileName(year));
  fs.writeFileSync(outFile, chosen.js);
  for (const c of candidates) fs.rmSync(topoTmpName(year, c.pct), { force: true });
  return { year, bytes: chosen.bytes, pct: chosen.pct, outFile };
}

const indexPath = path.join(SRC, "index.json");
await download(INDEX_URL, indexPath);
const index = JSON.parse(fs.readFileSync(indexPath, "utf8"));
const years = wantedYears(index);
const known = new Map(index.years.map((d) => [Number(d.year), d]));
const built = [];
for (const year of years) {
  const meta = known.get(year);
  if (!meta) throw new Error(`Year ${year} is not in historical-basemaps index.json`);
  const srcFile = path.join(SRC, meta.filename || urlFileName(year));
  await download(`${RAW_BASE}/${meta.filename || urlFileName(year)}`, srcFile);
  const result = convert(year, srcFile);
  built.push(result);
  console.log(`${year}: ${path.relative(ROOT, result.outFile)} ${result.bytes} bytes (${result.pct}%)`);
}
const dates = built.map((b) => b.year).sort((a, b) => a - b);
const indexJs = `// ${ATTRIBUTION}\n// Date index for lazy file:// loading. Built by scripts/build_hist_basemaps.mjs.\nwindow.HIST_BASEMAP_DATES = ${JSON.stringify(dates)};\nwindow.HIST_BASEMAPS = window.HIST_BASEMAPS || {};\nwindow.HIST_BASEMAP_ATTRIBUTION = ${JSON.stringify(ATTRIBUTION)};\n`;
fs.writeFileSync(path.join(OUT, "index.js"), indexJs);
const total = built.reduce((n, b) => n + b.bytes, Buffer.byteLength(indexJs));
console.log(`Wrote ${built.length} historical basemaps plus index (${total} bytes total).`);