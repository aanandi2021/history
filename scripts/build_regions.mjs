import fs from "node:fs";
import path from "node:path";
import https from "node:https";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SRC = path.join(ROOT, "study", "regions-src");
const OUT = path.join(ROOT, "atlas", "data", "regions-eu.js");
const BBOX = "-25,25,65,72";
const urls = {
  admin0: "https://naciscdn.org/naturalearth/50m/cultural/ne_50m_admin_0_countries.zip",
  admin1: "https://naciscdn.org/naturalearth/10m/cultural/ne_10m_admin_1_states_provinces.zip"
};
const files = {
  admin0Zip: path.join(SRC, "ne_50m_admin_0_countries.zip"),
  admin1Zip: path.join(SRC, "ne_10m_admin_1_states_provinces.zip"),
  admin0Shp: path.join(SRC, "admin0", "ne_50m_admin_0_countries.shp"),
  admin1Shp: path.join(SRC, "admin1", "ne_10m_admin_1_states_provinces.shp"),
  topo: path.join(SRC, "regions-eu.topojson")
};
fs.mkdirSync(SRC, { recursive: true });
function download(url, file) {
  if (fs.existsSync(file)) return Promise.resolve();
  return new Promise((resolve, reject) => {
    const out = fs.createWriteStream(file);
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) return download(res.headers.location, file).then(resolve, reject);
      if (res.statusCode !== 200) return reject(new Error(`${url}: HTTP ${res.statusCode}`));
      res.pipe(out);
      out.on("finish", () => out.close(resolve));
    }).on("error", reject);
  });
}
function run(cmd, args) {
  const r = spawnSync(cmd, args, { cwd: ROOT, stdio: "inherit" });
  if (r.error) throw r.error;
  if (r.status) throw new Error(`${cmd} ${args.join(" ")} failed with ${r.status}`);
}
await download(urls.admin0, files.admin0Zip);
await download(urls.admin1, files.admin1Zip);
if (!fs.existsSync(files.admin0Shp)) run("powershell", ["-NoProfile", "-Command", `Expand-Archive -Force ${JSON.stringify(files.admin0Zip)} ${JSON.stringify(path.dirname(files.admin0Shp))}`]);
if (!fs.existsSync(files.admin1Shp)) run("powershell", ["-NoProfile", "-Command", `Expand-Archive -Force ${JSON.stringify(files.admin1Zip)} ${JSON.stringify(path.dirname(files.admin1Shp))}`]);
const shp1 = path.relative(ROOT, files.admin1Shp);
const topoOut = path.relative(ROOT, files.topo);
const mapshaper = path.join(ROOT, "node_modules", "mapshaper", "bin", "mapshaper");
run(process.execPath, [mapshaper,
  "-i", shp1, "name=admin1", "-clip", `bbox=${BBOX}`,
  "-filter", "adm0_a3 != '-99' && iso_3166_2 != '-99'",
  "-each", "adm0=adm0_a3 == 'KOS' ? 'XKX' : adm0_a3",
  "-dissolve", "adm0", "copy-fields=adm0", "+", "name=admin0",
  "-target", "admin0",
  "-each", "code=adm0, kind='admin0', name=adm0",
  "-filter-fields", "code,kind,name,adm0",
  "-target", "admin1",
  "-each", "code=iso_3166_2, kind='admin1', name=name, adm0=adm0",
  "-filter-fields", "code,kind,name,adm0",
  "-target", "admin0,admin1", "-merge-layers", "name=regions",
  "-simplify", "weighted", "5%", "keep-shapes",
  "-o", "format=topojson", "quantization=1e5", topoOut, "force"
]);
const topo = fs.readFileSync(files.topo, "utf8");
const js = `// Natural Earth admin-0/admin-1 Europe region building blocks (public domain). Built by scripts/build_regions.mjs.\nwindow.ATLAS_REGIONS = ${topo};\n`;
fs.writeFileSync(OUT, js);
const bytes = fs.statSync(OUT).size;
if (bytes > 1_500_000) throw new Error(`regions-eu.js is ${bytes} bytes; target is <= 1.5 MB`);
console.log(`Wrote ${path.relative(ROOT, OUT)} (${bytes} bytes)`);
