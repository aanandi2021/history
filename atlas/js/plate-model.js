/* Plate model: validation, symbol registry, legend and cross-reference logic for atlas plates.
   UMD so the browser (window.PLATE) and Node tests share it. No DOM here. */
(function (root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory();
  else root.PLATE = factory();
})(typeof self !== "undefined" ? self : this, function () {
  "use strict";

  // The book's own key (Kinder & Hilgemann, "Symbols and Abbreviations"), plus resource and site glyphs used on its plates.
  const SYMBOLS = {
    city: "City, town", "large-city": "Large city, or cultural centre", capital: "Capital city",
    archbishopric: "Archbishopric", bishopric: "Bishopric", monastery: "Monastery, abbey", castle: "Castle, palace",
    fortress: "Fortress, stronghold", siege: "Siege", conference: "Conference site", treaty: "Treaty site",
    destroyed: "Destroyed town", pass: "Mountain pass", blockade: "Barrage, blockade", insurrection: "Insurrection, revolution",
    conflict: "Site of conflict", battle: "Battlefield", monarch: "Monarch", "head-of-state": "Head of state",
    legislature: "Legislature", parliament: "Parliamentary institution", power: "Political power", marriage: "Marriage",
    // sites and resources
    temple: "Temple, sanctuary", stupa: "Stupa", pyramid: "Pyramid", ziggurat: "Ziggurat", excavation: "Excavation site",
    find: "Archaeological find", cave: "Cave site", port: "Port", wreck: "Shipwreck", university: "Centre of learning", volcano: "Volcano",
    gold: "Gold", silver: "Silver", copper: "Copper", tin: "Tin", iron: "Iron", stone: "Building stone", gem: "Precious stones",
    spice: "Spices", textile: "Textiles", porcelain: "Porcelain", timber: "Timber", horse: "Horses", salt: "Salt"
  };
  const SYMBOL_GROUPS = {
    "From the book's key": ["city", "large-city", "capital", "archbishopric", "bishopric", "monastery", "castle", "fortress", "siege", "conference", "treaty", "destroyed", "pass", "blockade", "insurrection", "conflict", "battle", "monarch", "head-of-state", "legislature", "parliament", "power", "marriage"],
    "Sites": ["temple", "stupa", "pyramid", "ziggurat", "excavation", "find", "cave", "port", "wreck", "university", "volcano"],
    "Resources (local legend on each plate)": ["gold", "silver", "copper", "tin", "iron", "stone", "gem", "spice", "textile", "porcelain", "timber", "horse", "salt"]
  };
  const LAYER_TYPES = ["area", "arrow", "route", "boundary", "point", "label"];
  const PATTERNS = ["solid", "hatch", "hatch-back", "crosshatch", "dots", "stripe", "stipple", "none"];
  // degrees of control, from round 2 (China, Asoka, Persia): solid core, striped conquest, pale influence
  const TIERS = ["core", "conquest", "influence"];
  const BOUNDARY_STYLES = ["dashed", "solid", "dashdot", "wall", "partition"];
  const ROUTE_STYLES = ["dotted", "dashed", "road"];
  const LABEL_STYLES = ["region", "people", "water", "date", "note", "realm"];

  const isLonLat = (p) => Array.isArray(p) && p.length === 2 && p.every(Number.isFinite) && p[0] >= -180 && p[0] <= 180 && p[1] >= -90 && p[1] <= 90;
  const isColour = (c) => typeof c === "string" && /^(#[0-9a-f]{3}|#[0-9a-f]{6}|[a-z]+)$/i.test(c);

  /** Return a list of human-readable problems; empty means the plate can be drawn. */
  function validate(spec) {
    const errs = [];
    const bad = (m) => errs.push(`${spec && spec.id || "?"}: ${m}`);
    if (!spec || typeof spec !== "object") return ["plate is not an object"];
    if (!/^[a-z0-9-]+$/.test(spec.id || "")) bad("id must be a lowercase slug");
    if (!spec.title) bad("title is required");
    if (!Array.isArray(spec.figures) || !spec.figures.length) { bad("at least one figure is required"); return errs; }
    if (spec.figures.length > 4) bad("at most four figures fit on a plate");
    const ids = new Set();
    spec.figures.forEach((f, fi) => {
      const w = `figure ${fi + 1}`;
      if (!f.caption) bad(`${w}: caption is required (the atlas always captions under the frame)`);
      if (f.kind === "diagram") {
        const d = f.diagram || {};
        for (const c of d.compartments || []) {
          if (c.id) { if (ids.has(c.id)) bad(`duplicate layer id ${c.id}`); ids.add(c.id); }
          if (!c.label) bad(`${w} compartment ${c.id || "?"}: needs a label`);
        }
        for (const n of d.nodes || []) {
          if (!n.id) bad(`${w}: every diagram node needs an id`);
          else { if (ids.has(n.id)) bad(`duplicate layer id ${n.id}`); ids.add(n.id); }
          if (!n.label) bad(`${w} node ${n.id || "?"}: needs a label`);
        }
        for (const a of d.arrows || []) {
          if (a.id) { if (ids.has(a.id)) bad(`duplicate layer id ${a.id}`); ids.add(a.id); }
          if (!a.from || !a.to) bad(`${w} arrow ${a.id || "?"}: needs from and to`);
        }
        return;
      }
      const e = f.extent;
      if (!e || !isLonLat(e[0]) || !isLonLat(e[1]) || e[0][0] >= e[1][0] || e[0][1] >= e[1][1]) bad(`${w}: extent must be [[west,south],[east,north]] and not cross 180°`);
      if (f.kind === "small-multiples" && (!Array.isArray(f.panels) || f.panels.length < 2)) bad(`${w}: small-multiples needs at least two panels`);
      const layerList = f.kind === "small-multiples" ? [...(f.layers || []), ...(f.panels || []).flatMap((p) => p.layers || [])] : (f.layers || []);
      for (const L of layerList) {
        const lw = `${w} layer ${L.id || L.name || L.text || L.type}`;
        if (!LAYER_TYPES.includes(L.type)) { bad(`${lw}: unknown type ${L.type}`); continue; }
        if (L.id) { if (ids.has(L.id)) bad(`duplicate layer id ${L.id}`); ids.add(L.id); }
        if (L.colour && !isColour(L.colour)) bad(`${lw}: bad colour ${L.colour}`);
        if (L.type === "area") {
          const pts = L.around || L.polygon;
          if (!Array.isArray(pts) || !pts.length || !pts.every(isLonLat)) bad(`${lw}: needs around:[[lon,lat],...] or polygon`);
          if (L.pattern && !PATTERNS.includes(L.pattern)) bad(`${lw}: unknown pattern ${L.pattern}`);
          if (L.tier && !TIERS.includes(L.tier)) bad(`${lw}: unknown tier ${L.tier} (core, conquest or influence)`);
          if (L.clipToLand != null && typeof L.clipToLand !== "boolean") bad(`${lw}: clipToLand must be true or false`);
        }
        if (L.type === "arrow" || L.type === "route" || L.type === "boundary") {
          if (!Array.isArray(L.path) || L.path.length < 2 || !L.path.every(isLonLat)) bad(`${lw}: needs path of at least two [lon,lat]`);
          if (L.type === "boundary" && L.style && !BOUNDARY_STYLES.includes(L.style)) bad(`${lw}: unknown boundary style ${L.style}`);
          if (L.type === "route" && L.style && !ROUTE_STYLES.includes(L.style)) bad(`${lw}: unknown route style ${L.style}`);
          if (L.type === "route" && L.weight != null && (!Number.isFinite(L.weight) || L.weight <= 0)) bad(`${lw}: route weight must be a positive number`);
          for (const dt of L.dates || []) {
            if (!Array.isArray(dt) || typeof dt[0] !== "number" || dt[0] < 0 || dt[0] > 1 || !dt[1]) bad(`${lw}: dates must be [[0..1, "text"], ...]`);
          }
        }
        if (L.type === "point") {
          if (!isLonLat(L.at)) bad(`${lw}: needs at:[lon,lat]`);
          if (!SYMBOLS[L.symbol || "city"]) bad(`${lw}: unknown symbol ${L.symbol}`);
          if (L.halo && !isColour(L.halo)) bad(`${lw}: bad halo colour ${L.halo}`);
          if (L.hub != null && (!Number.isFinite(L.hub) || L.hub <= 0)) bad(`${lw}: hub must be a positive number`);
        }
        if (L.type === "label") {
          if (!L.text) bad(`${lw}: label needs text`);
          if (!(isLonLat(L.at) || (Array.isArray(L.along) && L.along.length >= 2 && L.along.every(isLonLat)))) bad(`${lw}: label needs at or along`);
          if (L.style && !LABEL_STYLES.includes(L.style)) bad(`${lw}: unknown label style ${L.style}`);
        }
      }
    });
    for (const s of (spec.text && spec.text.sections) || []) {
      for (const en of s.entries || []) {
        for (const r of en.refs || []) if (!ids.has(r)) bad(`text entry "${(en.text || "").slice(0, 40)}" refers to unknown layer ${r}`);
      }
    }
    return errs;
  }

  /** Legend rows for a figure: one per distinct legend text, in layer order, then any extras. */
  function legendItems(fig) {
    const seen = new Set(), out = [];
    const layers = fig.kind === "small-multiples" ? [...(fig.layers || []), ...(fig.panels || []).flatMap((p) => p.layers || [])] : (fig.layers || []);
    for (const L of layers) {
      if (!L.legend || seen.has(L.legend)) continue;
      seen.add(L.legend);
      out.push({ text: L.legend, layer: L });
    }
    for (const x of (fig.legend && fig.legend.extra) || []) if (!seen.has(x.text)) { seen.add(x.text); out.push({ text: x.text, layer: x.swatch || x.layer }); }
    return out;
  }

  /** Map each layer id to the text entries that mention it, and each entry to its layers. */
  function crossRefs(spec) {
    const byLayer = new Map(), byEntry = [];
    let n = 0;
    for (const s of (spec.text && spec.text.sections) || []) {
      for (const en of s.entries || []) {
        const k = n++;
        byEntry[k] = en.refs || [];
        for (const r of en.refs || []) { if (!byLayer.has(r)) byLayer.set(r, []); byLayer.get(r).push(k); }
      }

    }
    return { byLayer, byEntry };
  }

function namedThings(spec) {
  const out = [];
  for (const f of spec.figures || []) {
    out.push(...(f.layers || []).filter((L) => L.id));
    if (f.kind === "small-multiples") out.push(...(f.panels || []).flatMap((p) => p.layers || []).filter((L) => L.id));
    if (f.kind === "diagram" && f.diagram) out.push(...["compartments", "nodes", "arrows"].flatMap((k) => (f.diagram[k] || []).filter((x) => x.id)));
  }
  return out;
}
  /** Share of drawn layers that the text mentions, and of text entries that point at the map. */
  function coverage(spec) {
    const { byLayer, byEntry } = crossRefs(spec);
    const named = namedThings(spec);
    const entries = byEntry.length;
    return {
      layersExplained: named.length ? named.filter((L) => byLayer.has(L.id)).length / named.length : 1,
      entriesMapped: entries ? byEntry.filter((r) => r.length).length / entries : 1
    };
  }

  return { SYMBOLS, SYMBOL_GROUPS, LAYER_TYPES, PATTERNS, TIERS, BOUNDARY_STYLES, ROUTE_STYLES, LABEL_STYLES, validate, legendItems, crossRefs, coverage, isLonLat };
});
