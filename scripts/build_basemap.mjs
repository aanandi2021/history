// Build atlas/data/base-50m.js: land, rivers and lakes at 1:50m, as one TopoJSON on window.ATLAS_BASE.
// Sources: world-atlas (land-50m) and Natural Earth 50m rivers and lakes (public domain).
// Usage: node scripts/build_basemap.mjs <dir containing ne_50m_rivers_lake_centerlines.geojson and ne_50m_lakes.geojson>
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
import { topology } from "topojson-server";
import { presimplify, simplify, quantile } from "topojson-simplify";
import * as tc from "topojson-client";

const require = createRequire(import.meta.url);
const root = path.resolve(path.dirname(new URL(import.meta.url).pathname.replace(/^\/(\w:)/, "$1")), "..");
const ne = process.argv[2] || path.join(process.env.TEMP || "/tmp", "ne");
const land50 = require("world-atlas/land-50m.json");
const land = tc.feature(land50, land50.objects.land);
const read = (f) => JSON.parse(fs.readFileSync(path.join(ne, f), "utf8"));
const keep = (fc, props) => ({ type: "FeatureCollection", features: fc.features.map((f) => ({ type: "Feature", geometry: f.geometry, properties: Object.fromEntries(props.map((p) => [p, f.properties[p]])) })) });
const rivers = keep(read("ne_50m_rivers_lake_centerlines.geojson"), ["name", "scalerank"]);
const lakes = keep(read("ne_50m_lakes.geojson"), ["name", "scalerank"]);

let topo = topology({ land, rivers, lakes }, 1e5);
topo = presimplify(topo);
topo = simplify(topo, quantile(topo, 0.35));
const out = path.join(root, "atlas", "data", "base-50m.js");
fs.mkdirSync(path.dirname(out), { recursive: true });
fs.writeFileSync(out, "// Natural Earth 1:50m land, rivers and lakes (public domain). Built by scripts/build_basemap.mjs.\nwindow.ATLAS_BASE = " + JSON.stringify(topo) + ";\n");
console.log("wrote", out, (fs.statSync(out).size / 1024).toFixed(0), "KB");
