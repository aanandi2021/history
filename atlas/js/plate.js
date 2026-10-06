/* Atlas plate renderer: a plate spec (window.PLATES[id]) -> a two-page spread in the manner of
   Kinder & Hilgemann's Penguin Atlas: framed map figures with legend and caption on the left page,
   date-led text on the right. Styles are written as SVG attributes so an exported SVG is self-contained.
   Depends on d3, topojson-client, window.ATLAS_BASE (land/rivers/lakes) and window.PLATE (plate-model.js). */
(function () {
  "use strict";
  const P = window.PLATE;
  const $ = (s, el = document) => el.querySelector(s);
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  // ---- palette and type, distilled from the atlas (see docs/atlas-design-language.md)
  const INK = "#1f1d1a", SEA = "#c4dcea", SEA_EDGE = "#9cc3dc", LAND = "#f3ebcb", RIVER = "#5f9dc7", PAPER = "#fbf8f0";
  const SANS = "'Helvetica Neue', Helvetica, Arial, sans-serif";
  const SERIF = "Georgia, 'Times New Roman', serif";
  const AREA_DEFAULT = "#e0a080";

  const BASE = window.ATLAS_BASE;
  const LANDF = topojson.feature(BASE, BASE.objects.land);
  const RIVERS = topojson.feature(BASE, BASE.objects.rivers);
  const LAKES = topojson.feature(BASE, BASE.objects.lakes);

  const PAGE_W = 620, PAGE_H = 1000, HEAD_H = 34, CAP_H = 30, GAP = 14;

  // ---- colour helpers
  function shade(hex, k) {
    const c = d3.color(hex) || d3.color(AREA_DEFAULT);
    return (k < 0 ? c.darker(-k) : c.brighter(k)).formatHex();
  }
  const isDark = (hex) => { const c = d3.hsl(hex); return c.l < 0.55; };

  // ---- projection fitted to the figure frame
  function projectionFor(fig, w, h) {
    const [[W, S], [E, N]] = fig.extent;
    const corners = { type: "MultiPoint", coordinates: [[W, S], [E, S], [E, N], [W, N], [(W + E) / 2, S], [(W + E) / 2, N]] };
    let proj;
    const kind = fig.projection || ((N - S) > 30 && Math.max(Math.abs(N), Math.abs(S)) > 25 ? "conic" : "mercator");
    if (kind === "conic") {
      const p1 = S + (N - S) / 6, p2 = N - (N - S) / 6;
      proj = d3.geoConicConformal().parallels([p1, p2]).rotate([-(W + E) / 2, 0]);
    } else proj = d3.geoMercator();
    proj.fitExtent([[6, 6], [w - 6, h - 6]], corners);
    // clip geometry to the frame so a figure only carries the coastline it shows (keeps SVG exports small)
    proj.clipExtent([[-30, -30], [w + 30, h + 30]]);
    return proj;
  }

  // ---- patterns (one per colour and kind, defined once per svg)
  function patternId(defs, kind, colour) {
    const id = `pat-${kind}-${colour.replace("#", "")}`;
    if (!defs.select(`#${id}`).empty()) return id;
    const p = defs.append("pattern").attr("id", id).attr("patternUnits", "userSpaceOnUse").attr("width", 7).attr("height", 7);
    if (kind === "hatch" || kind === "hatch-back" || kind === "crosshatch") {
      const rot = kind === "hatch-back" ? -45 : 45;
      p.attr("patternTransform", `rotate(${rot})`);
      p.append("rect").attr("width", 7).attr("height", 7).attr("fill", colour).attr("fill-opacity", 0.12);
      p.append("line").attr("x1", 0).attr("y1", 0).attr("x2", 0).attr("y2", 7).attr("stroke", colour).attr("stroke-width", 2.6);
      if (kind === "crosshatch") p.append("line").attr("x1", 0).attr("y1", 3.5).attr("x2", 7).attr("y2", 3.5).attr("stroke", colour).attr("stroke-width", 1.6);
    } else if (kind === "dots") {
      p.append("circle").attr("cx", 3.5).attr("cy", 3.5).attr("r", 1.3).attr("fill", colour);
    } else if (kind === "stripe") {
      // upright stripes: conquered or garrisoned land, as on the Han and Asoka plates
      p.append("rect").attr("width", 7).attr("height", 7).attr("fill", colour).attr("fill-opacity", 0.14);
      p.append("line").attr("x1", 1.5).attr("y1", 0).attr("x2", 1.5).attr("y2", 7).attr("stroke", colour).attr("stroke-width", 2.4);
    } else if (kind === "stipple") {
      // fine stipple: fuzzy social or cultural zones that should not read as states
      p.append("rect").attr("width", 7).attr("height", 7).attr("fill", colour).attr("fill-opacity", 0.1);
      for (const [cx, cy] of [[1.2, 1.4], [4.6, 2.3], [2.6, 5.1], [6.1, 5.9]]) p.append("circle").attr("cx", cx).attr("cy", cy).attr("r", 0.75).attr("fill", colour);
    }
    return id;
  }

  const TIER_LOOK = {
    core: { opacity: 0.62, edge: "strong" },
    conquest: { pattern: "stripe" },
    influence: { opacity: 0.18, edge: "dashed" }
  };
  /** An area with its tier defaults filled in; anything set on the layer wins. */
  function areaLook(L) { return L.tier ? Object.assign({}, TIER_LOOK[L.tier], L) : L; }

  function areaFill(defs, L) {
    L = areaLook(L);
    const c = L.colour || AREA_DEFAULT, pat = L.pattern || "solid";
    if (pat === "solid") return { fill: c, op: L.opacity != null ? L.opacity : 0.55 };
    if (pat === "none") return { fill: "none", op: 1 };
    return { fill: `url(#${patternId(defs, pat, c)})`, op: L.opacity != null ? L.opacity : 1 };
  }

  // ---- geometry: a soft "zone" around anchor places, the way the atlas draws realms
  function zonePath(L, proj) {
    if (L.polygon) {
      const pts = L.polygon.map(proj);
      return d3.line().curve(L.smooth === false ? d3.curveLinearClosed : d3.curveCatmullRomClosed.alpha(0.5))(pts);
    }
    const padDeg = L.pad != null ? L.pad : 1.2;
    const pts = [];
    for (const [lon, lat] of L.around) {
      for (let a = 0; a < 360; a += 30) {
        const r = (a * Math.PI) / 180;
        pts.push(proj([lon + padDeg * Math.cos(r) / Math.cos((lat * Math.PI) / 180), lat + padDeg * Math.sin(r)]));
      }
    }
    const hull = d3.polygonHull(pts.filter(Boolean));
    return hull ? d3.line().curve(d3.curveCatmullRomClosed.alpha(0.5))(hull) : null;
  }

  function measure(svg, d) {
    const p = svg.append("path").attr("d", d).attr("fill", "none").attr("visibility", "hidden");
    const node = p.node();
    return { node, L: node.getTotalLength(), at: (t) => node.getPointAtLength(t), remove: () => p.remove() };
  }

  // ---- symbols from the book's key, drawn with plain SVG so they export cleanly
  function drawSymbol(g, name, s, colour) {
    const c = colour || INK;
    const k = s / 10;
    const path = (d, fill = c, extra = {}) => { const e = g.append("path").attr("d", d).attr("fill", fill); for (const [a, v] of Object.entries(extra)) e.attr(a, v); return e; };
    switch (name) {
      case "city": g.append("circle").attr("r", 3.2 * k).attr("fill", c); break;
      case "large-city": case "capital": g.append("rect").attr("x", -4 * k).attr("y", -4 * k).attr("width", 8 * k).attr("height", 8 * k).attr("fill", c); break;
      case "fortress": path(`M0,${-5 * k}L${5 * k},0L0,${5 * k}L${-5 * k},0Z`); break;
      case "battle": g.append("path").attr("d", `M${-4 * k},${-4 * k}L${4 * k},${4 * k}M${4 * k},${-4 * k}L${-4 * k},${4 * k}`).attr("stroke", c).attr("stroke-width", 2 * k); break;
      case "treaty": g.append("circle").attr("r", 5 * k).attr("fill", "#fff").attr("stroke", c).attr("stroke-width", 1.4 * k); g.append("circle").attr("r", 2.6 * k).attr("fill", c); break;
      case "destroyed": g.append("circle").attr("r", 4.2 * k).attr("fill", "#fff").attr("stroke", c).attr("stroke-width", 1.2 * k); path(`M${-4.2 * k},0A${4.2 * k},${4.2 * k} 0 0 0 ${4.2 * k},0Z`); break;
      case "siege": g.append("circle").attr("r", 3 * k).attr("fill", c); g.append("circle").attr("r", 6 * k).attr("fill", "none").attr("stroke", c).attr("stroke-width", 1.4 * k).attr("stroke-dasharray", `${1.2 * k} ${2 * k}`); break;
      case "conference": path(`M0,${-6 * k}C${2 * k},${-2 * k} ${2 * k},${-2 * k} ${6 * k},0C${2 * k},${2 * k} ${2 * k},${2 * k} 0,${6 * k}C${-2 * k},${2 * k} ${-2 * k},${2 * k} ${-6 * k},0C${-2 * k},${-2 * k} ${-2 * k},${-2 * k} 0,${-6 * k}Z`); break;
      case "pass": path(`M${-4 * k},${-5 * k}L${4 * k},${-5 * k}L0,0L${4 * k},${5 * k}L${-4 * k},${5 * k}L0,0Z`); break;
      case "blockade": for (const dx of [-6, 0, 6]) path(`M${(dx - 3) * k},${3 * k}L${dx * k},${-3 * k}L${(dx + 3) * k},${3 * k}Z`); break;
      case "insurrection": path(`M0,${-7 * k}C${4 * k},${-2 * k} ${5 * k},${2 * k} ${3 * k},${5 * k}C${2 * k},${2 * k} 0,${2 * k} 0,${5 * k}C${-1 * k},${2 * k} ${-3 * k},${2 * k} ${-4 * k},${5 * k}C${-5 * k},${1 * k} ${-2 * k},${-3 * k} 0,${-7 * k}Z`, c === INK ? "#b8341f" : c); break;
      case "conflict": path(`M${2 * k},${-7 * k}L${-4 * k},${1 * k}L${0},${1 * k}L${-2 * k},${7 * k}L${4 * k},${-1 * k}L0,${-1 * k}Z`); break;
      case "monarch": path(`M${-6 * k},${3 * k}L${-6 * k},${-4 * k}L${-3 * k},${-1 * k}L0,${-5 * k}L${3 * k},${-1 * k}L${6 * k},${-4 * k}L${6 * k},${3 * k}Z`); break;
      case "head-of-state": case "pyramid": case "excavation": path(`M${-5 * k},${4 * k}L0,${-5 * k}L${5 * k},${4 * k}Z`); break;
      case "ziggurat": path(`M${-6 * k},${4 * k}L${-6 * k},${2 * k}L${-4 * k},${2 * k}L${-4 * k},0L${-2 * k},0L${-2 * k},${-2 * k}L${2 * k},${-2 * k}L${2 * k},0L${4 * k},0L${4 * k},${2 * k}L${6 * k},${2 * k}L${6 * k},${4 * k}Z`, c === INK ? "#9c7a3c" : c); break;
      case "temple": path(`M${-6 * k},${4 * k}L${6 * k},${4 * k}L${6 * k},${2.5 * k}L${-6 * k},${2.5 * k}Z M${-5 * k},${2.5 * k}L${-5 * k},${-2 * k}L${-3.6 * k},${-2 * k}L${-3.6 * k},${2.5 * k}Z M${-0.7 * k},${2.5 * k}L${-0.7 * k},${-2 * k}L${0.7 * k},${-2 * k}L${0.7 * k},${2.5 * k}Z M${3.6 * k},${2.5 * k}L${3.6 * k},${-2 * k}L${5 * k},${-2 * k}L${5 * k},${2.5 * k}Z M${-6.5 * k},${-2 * k}L0,${-6 * k}L${6.5 * k},${-2 * k}Z`); break;
      case "stupa": path(`M${-5 * k},${4 * k}A${5 * k},${5 * k} 0 0 1 ${5 * k},${4 * k}Z M${-0.6 * k},${-1 * k}L${-0.6 * k},${-7 * k}L${0.6 * k},${-7 * k}L${0.6 * k},${-1 * k}Z`); break;
      case "university": path(`M${-6 * k},${-1 * k}L0,${-5 * k}L${6 * k},${-1 * k}Z M${-5 * k},${0}L${5 * k},0L${5 * k},${4 * k}L${-5 * k},${4 * k}Z`); break;
      case "monastery": case "archbishopric": case "bishopric":
        g.append("path").attr("d", `M0,${-6 * k}L0,${5 * k}M${-3 * k},${-3 * k}L${3 * k},${-3 * k}` + (name === "archbishopric" ? `M${-3 * k},${0}L${3 * k},0` : "")).attr("stroke", c).attr("stroke-width", 1.6 * k);
        if (name === "monastery") g.append("circle").attr("cy", 3 * k).attr("r", 2.6 * k).attr("fill", c);
        break;
      case "castle": path(`M${-4 * k},${5 * k}L${-4 * k},${-1 * k}L${-2 * k},${-1 * k}L${-2 * k},${-3 * k}L0,${-3 * k}L0,${-1 * k}L${2 * k},${-1 * k}L${2 * k},${-3 * k}L${4 * k},${-3 * k}L${4 * k},${5 * k}Z`); break;
      case "port": g.append("path").attr("d", `M0,${-5 * k}L0,${5 * k}M${-3 * k},${-2 * k}L${3 * k},${-2 * k}M${-5 * k},${1 * k}C${-4 * k},${5 * k} ${4 * k},${5 * k} ${5 * k},${1 * k}`).attr("stroke", c).attr("stroke-width", 1.5 * k).attr("fill", "none"); g.append("circle").attr("cy", -6 * k).attr("r", 1.4 * k).attr("fill", "none").attr("stroke", c).attr("stroke-width", 1.2 * k); break;
      case "wreck": g.append("path").attr("d", `M${-6 * k},${-1 * k}L${6 * k},${-1 * k}L${4 * k},${3 * k}L${-4 * k},${3 * k}Z`).attr("fill", c); g.append("path").attr("d", `M${-7 * k},${5 * k}C${-4 * k},${3.5 * k} ${-2 * k},${6.5 * k} 0,${5 * k}C${2 * k},${3.5 * k} ${4 * k},${6.5 * k} ${7 * k},${5 * k}`).attr("stroke", RIVER).attr("stroke-width", 1.2 * k).attr("fill", "none"); break;
      case "volcano": path(`M${-6 * k},${5 * k}L${-1.5 * k},${-4 * k}L${1.5 * k},${-4 * k}L${6 * k},${5 * k}Z`, c === INK ? "#7a4a32" : c); g.append("path").attr("d", `M${-1 * k},${-5 * k}L${-2.5 * k},${-8 * k}M${1 * k},${-5 * k}L${2.5 * k},${-8 * k}M0,${-5 * k}L0,${-8.5 * k}`).attr("stroke", "#c0392b").attr("stroke-width", 0.9 * k); break;
      case "find": case "cave": g.append("circle").attr("r", 3.6 * k).attr("fill", "#fff").attr("stroke", c).attr("stroke-width", 1.6 * k); break;
      case "legislature": g.append("circle").attr("r", 6 * k).attr("fill", "#fff").attr("stroke", c).attr("stroke-width", 1.2 * k); g.append("text").attr("text-anchor", "middle").attr("dy", "0.36em").attr("font-size", 8 * k).attr("font-family", SERIF).attr("fill", c).text("§"); break;
      case "parliament": path(`M${-6 * k},${3 * k}A${6 * k},${6 * k} 0 0 1 ${6 * k},${3 * k}Z`); break;
      case "power": g.append("circle").attr("r", 6 * k).attr("fill", "#fff").attr("stroke", c).attr("stroke-width", 1.6 * k); break;
      case "marriage": for (const dx of [-2, 2]) g.append("circle").attr("cx", dx * k).attr("r", 3.4 * k).attr("fill", "none").attr("stroke", c).attr("stroke-width", 1.2 * k); break;
      // resources: the plate's local family of coloured glyphs
      case "gold": g.append("circle").attr("r", 5 * k).attr("fill", "#f2b33d").attr("stroke", "#a8741b").attr("stroke-width", 0.8 * k); break;
      case "silver": g.append("circle").attr("r", 5 * k).attr("fill", "#d9dde2").attr("stroke", "#7d858f").attr("stroke-width", 0.8 * k); break;
      case "copper": g.append("rect").attr("x", -4.5 * k).attr("y", -4.5 * k).attr("width", 9 * k).attr("height", 9 * k).attr("fill", "#e0894a").attr("stroke", "#8f4d1f").attr("stroke-width", 0.8 * k); break;
      case "tin": g.append("rect").attr("x", -4.5 * k).attr("y", -4.5 * k).attr("width", 9 * k).attr("height", 9 * k).attr("fill", "#b9c0c7").attr("stroke", "#5f6770").attr("stroke-width", 0.8 * k); break;
      case "iron": g.append("rect").attr("x", -4.5 * k).attr("y", -4.5 * k).attr("width", 9 * k).attr("height", 9 * k).attr("fill", "#55524f"); break;
      case "stone": g.append("rect").attr("x", -6 * k).attr("y", -2.5 * k).attr("width", 12 * k).attr("height", 5 * k).attr("fill", "#d8c08a").attr("stroke", "#7f6a3a").attr("stroke-width", 0.8 * k); break;
      case "gem": path(`M0,${-6 * k}L${4 * k},0L0,${6 * k}L${-4 * k},0Z`, "#5fbf6a", { stroke: "#2f6f37", "stroke-width": 0.8 * k }); break;
      case "spice": path(`M0,${-5 * k}C${4 * k},${-5 * k} ${5 * k},${3 * k} 0,${6 * k}C${-5 * k},${3 * k} ${-4 * k},${-5 * k} 0,${-5 * k}Z`, "#8d5a2b"); break;
      case "textile": g.append("rect").attr("x", -5 * k).attr("y", -4 * k).attr("width", 10 * k).attr("height", 8 * k).attr("fill", "#c94f6d"); g.append("path").attr("d", `M${-5 * k},${-1 * k}H${5 * k}M${-5 * k},${2 * k}H${5 * k}`).attr("stroke", "#fff").attr("stroke-width", 0.8 * k); break;
      case "porcelain": g.append("path").attr("d", `M${-4 * k},${-4 * k}L${4 * k},${-4 * k}C${4 * k},${3 * k} ${2 * k},${5 * k} 0,${5 * k}C${-2 * k},${5 * k} ${-4 * k},${3 * k} ${-4 * k},${-4 * k}Z`).attr("fill", "#fff").attr("stroke", "#2a5ca8").attr("stroke-width", 1.2 * k); break;
      case "timber": path(`M0,${-6 * k}L${4 * k},${2 * k}L${-4 * k},${2 * k}Z M${-0.8 * k},${2 * k}L${0.8 * k},${2 * k}L${0.8 * k},${6 * k}L${-0.8 * k},${6 * k}Z`, "#3f7a3c"); break;
      case "horse": path(`M${-5 * k},${5 * k}L${-4 * k},${-1 * k}L${2 * k},${-1 * k}L${4 * k},${-5 * k}L${6 * k},${-3 * k}L${4 * k},0L${4 * k},${5 * k}L${3 * k},${5 * k}L${2.5 * k},${1 * k}L${-3 * k},${1 * k}L${-4 * k},${5 * k}Z`, "#6b4a2b"); break;
      case "salt": g.append("rect").attr("x", -4 * k).attr("y", -4 * k).attr("width", 8 * k).attr("height", 8 * k).attr("fill", "#fff").attr("stroke", "#888").attr("stroke-width", 0.8 * k); break;
      default: g.append("circle").attr("r", 3.2 * k).attr("fill", c);
    }
  }

  const haloText = (sel, colour = LAND, w = 2.6) => sel.attr("stroke", colour).attr("stroke-width", w).attr("stroke-linejoin", "round").attr("paint-order", "stroke");
function drawDiagramFigure(container, fig, fi, w, h) {
  const svg = d3.select(container).append("svg")
    .attr("xmlns", "http://www.w3.org/2000/svg").attr("viewBox", `0 0 ${w} ${h}`).attr("width", w).attr("height", h)
    .attr("class", "fig").attr("data-fig", fi).attr("font-family", SANS);
  const defs = svg.append("defs");
  defs.append("marker").attr("id", `diag-head-${fi}`).attr("viewBox", "0 0 10 10").attr("refX", 9).attr("refY", 5)
    .attr("markerWidth", 7).attr("markerHeight", 7).attr("orient", "auto-start-reverse")
    .append("path").attr("d", "M0,0L10,5L0,10Z").attr("fill", INK);
  svg.append("rect").attr("width", w).attr("height", h).attr("fill", LAND);
  const d = fig.diagram || {};
  const sx = (x) => x * w, sy = (y) => y * h;
  const byId = new Map();
  const layer = svg.append("g").attr("class", "diagram");
  for (const c of d.compartments || []) {
    const g = layer.append("g").attr("class", "layer diagram-compartment").attr("data-layer", c.id || null);
    g.append("rect").attr("x", sx(c.x)).attr("y", sy(c.y)).attr("width", sx(c.w)).attr("height", sy(c.h))
      .attr("rx", 10).attr("fill", c.fill || "#efe2bd").attr("fill-opacity", c.opacity == null ? 0.45 : c.opacity)
      .attr("stroke", c.colour || "#8c6d3f").attr("stroke-width", 1.2);
    g.append("text").attr("x", sx(c.x) + 10).attr("y", sy(c.y) + 18).attr("font-family", SERIF)
      .attr("font-weight", 700).attr("font-size", 13).attr("fill", c.colour || INK).text(c.label);
  }
  for (const n of d.nodes || []) {
    byId.set(n.id, n);
    const g = layer.append("g").attr("class", "layer diagram-node").attr("data-layer", n.id);
    const x = sx(n.x), y = sy(n.y), bw = sx(n.w || 0.18), bh = sy(n.h || 0.09);
    g.append("rect").attr("x", x - bw / 2).attr("y", y - bh / 2).attr("width", bw).attr("height", bh).attr("rx", 8)
      .attr("fill", n.fill || PAPER).attr("stroke", n.colour || INK).attr("stroke-width", n.strong ? 2 : 1.3);
    const lines = String(n.label).split(/\n/);
    const text = g.append("text").attr("x", x).attr("y", y - (lines.length - 1) * 6).attr("text-anchor", "middle")
      .attr("font-family", n.serif ? SERIF : SANS).attr("font-weight", n.strong ? 700 : 600).attr("font-size", n.size || 12).attr("fill", n.colour || INK);
    lines.forEach((line, i) => text.append("tspan").attr("x", x).attr("dy", i ? 13 : 0).text(line));
    if (n.note) g.append("text").attr("x", x).attr("y", y + bh / 2 - 8).attr("text-anchor", "middle").attr("font-size", 9).attr("fill", "#6b6255").text(n.note);
  }
  const edge = (n, toward) => {
    const bw = sx(n.w || 0.18), bh = sy(n.h || 0.09), cx = sx(n.x), cy = sy(n.y);
    const dx = sx(toward.x) - cx, dy = sy(toward.y) - cy;
    const k = 1 / Math.max(Math.abs(dx) / (bw / 2 + 7), Math.abs(dy) / (bh / 2 + 7), 1e-6);
    return [cx + dx * k, cy + dy * k];
  };
  for (const a of d.arrows || []) {
    const A = byId.get(a.from), B = byId.get(a.to);
    if (!A || !B) continue;
    const p = edge(A, B), q = edge(B, A), mid = [(p[0] + q[0]) / 2, (p[1] + q[1]) / 2];
    const g = layer.append("g").attr("class", "layer diagram-arrow").attr("data-layer", a.id || null);
    g.append("path").attr("d", `M${p[0]},${p[1]}C${p[0]},${mid[1]} ${q[0]},${mid[1]} ${q[0]},${q[1]}`)
      .attr("fill", "none").attr("stroke", a.colour || INK).attr("stroke-width", a.width || 1.6)
      .attr("stroke-dasharray", a.dashed ? "5 4" : null).attr("marker-end", `url(#diag-head-${fi})`);
    if (a.label) haloText(g.append("text").attr("x", mid[0]).attr("y", mid[1] - 4).attr("text-anchor", "middle")
      .attr("font-size", 10).attr("font-style", "italic").attr("fill", a.colour || INK).text(a.label), LAND, 4);
  }
  return svg.node();
}

  // ---- one figure
  function drawFigure(container, fig, fi, w, h) {
    if (fig.kind === "diagram") return drawDiagramFigure(container, fig, fi, w, h);
    const svg = d3.select(container).append("svg")
      .attr("xmlns", "http://www.w3.org/2000/svg").attr("viewBox", `0 0 ${w} ${h}`).attr("width", w).attr("height", h)
      .attr("class", "fig").attr("data-fig", fi).attr("font-family", SANS);
    const defs = svg.append("defs");
    const proj = projectionFor(fig, w, h);
    const geo = d3.geoPath(proj);
    const clipId = `frame-${fi}`, landClip = `land-${fi}`;
    defs.append("clipPath").attr("id", clipId).append("rect").attr("width", w).attr("height", h);
    defs.append("clipPath").attr("id", landClip).append("path").attr("d", geo(LANDF));
    const blur = defs.append("filter").attr("id", `soft-${fi}`).attr("x", "-10%").attr("y", "-10%").attr("width", "120%").attr("height", "120%");
    blur.append("feGaussianBlur").attr("stdDeviation", 3);

    const root = svg.append("g").attr("clip-path", `url(#${clipId})`);
    const base = fig.base || {};
    root.append("rect").attr("width", w).attr("height", h).attr("fill", base.sea || SEA);
    root.append("path").attr("d", geo(LANDF)).attr("fill", "none").attr("stroke", base.seaEdge || SEA_EDGE).attr("stroke-width", 9).attr("filter", `url(#soft-${fi})`);
    root.append("path").attr("d", geo(LANDF)).attr("fill", base.land || LAND).attr("stroke", "#7fa9c4").attr("stroke-width", 0.6);

    const L_AREA = root.append("g").attr("class", "areas");
    const L_WATER = root.append("g").attr("class", "water");
    const L_LINES = root.append("g").attr("class", "lines");
    const L_POINTS = root.append("g").attr("class", "points");
    const L_LABELS = root.append("g").attr("class", "labels");

    if (base.rivers !== false) {
      L_WATER.append("path").attr("d", geo(LAKES)).attr("fill", base.sea || SEA).attr("stroke", "#7fa9c4").attr("stroke-width", 0.4);
      for (const f of RIVERS.features) {
        const sr = f.properties.scalerank || 6;
        if (sr > (base.riverRank || 6)) continue;
        L_WATER.append("path").attr("d", geo(f)).attr("fill", "none").attr("stroke", RIVER).attr("stroke-width", Math.max(0.5, 1.6 - sr * 0.18)).attr("stroke-linecap", "round");
      }

    }

    const layerG = (parent, L) => parent.append("g").attr("class", `layer ${L.type}`).attr("data-layer", L.id || null);
    const layers = fig.layers || [];

    // areas first, largest first so cores sit on top of extents
    for (const L0 of layers.filter((l) => l.type === "area")) {
      const L = areaLook(L0);
      const d = zonePath(L, proj);
      if (!d) continue;
      const g = layerG(L_AREA, L);
      const clipToLand = L.clipToLand || (L.clip !== "none" && L.clip !== false);
      if (clipToLand) g.attr("clip-path", `url(#${landClip})`);
      const { fill, op } = areaFill(defs, L);
      g.append("path").attr("d", d).attr("fill", fill).attr("fill-opacity", op)
        .attr("stroke", L.edge === false || L.clipToLand ? "none" : shade(L.colour || AREA_DEFAULT, 0.6)).attr("stroke-width", L.edge === "strong" ? 1.6 : 0.8)
        .attr("stroke-dasharray", L.edge === "dashed" ? "5 3" : null);
    }

    for (const L of layers.filter((l) => l.type === "boundary")) {
      const g = layerG(L_LINES, L);
      const c = L.colour || "#4a3f35";
      const d = d3.line().curve(d3.curveCatmullRom.alpha(0.5))(L.path.map(proj));
      const line = g.append("path").attr("d", d).attr("fill", "none").attr("stroke", c).attr("stroke-width", L.width || (L.style === "wall" ? 1.8 : 1.3))
        .attr("stroke-dasharray", L.style === "solid" || L.style === "wall" ? null : L.style === "dashdot" ? "7 3 1.5 3" : "6 3.5");
      if (L.style === "wall") crenellate(g, line.node(), c, L.side === "right" ? 1 : -1);
      lineDates(g, svg, L, proj, c);
    }

    for (const L of layers.filter((l) => l.type === "route")) {
      const g = layerG(L_LINES, L);
      const d = d3.line().curve(d3.curveCatmullRom.alpha(0.5))(L.path.map(proj));
      const c = L.colour || "#b0753a";
      if (L.style === "road") {
        // a built road (the Persian royal road, the Roman roads): pale bed with dark dashes, never confused with a campaign
        g.append("path").attr("d", d).attr("fill", "none").attr("stroke", L.bed || "#f0d27a").attr("stroke-width", (L.width || 2.4) + 1.6).attr("stroke-linecap", "round");
        g.append("path").attr("d", d).attr("fill", "none").attr("stroke", c).attr("stroke-width", L.width || 2.4).attr("stroke-dasharray", "6 4");
      } else if (L.style === "dashed") g.append("path").attr("d", d).attr("fill", "none").attr("stroke", c).attr("stroke-width", L.width || 2).attr("stroke-dasharray", "7 4");
      else g.append("path").attr("d", d).attr("fill", "none").attr("stroke", c).attr("stroke-width", L.width || 3).attr("stroke-linecap", "round").attr("stroke-dasharray", "0.1 5.5");
      if (L.head) arrowHead(svg, g, d, L.width || 3, c, 6);
      if (L.label) alongLabel(g, svg, readable(L.path, proj), L.label, { size: 8.5, fill: shade(c, -1.2), dy: -5, italic: true });
      lineDates(g, svg, L, proj, c);
    }

    for (const L of layers.filter((l) => l.type === "arrow")) {
      const g = layerG(L_LINES, L);
      const pts = L.path.map(proj);
      const d = d3.line().curve(d3.curveCatmullRom.alpha(0.5))(pts);
      const c = L.colour || "#c0392b", wdt = L.width || (L.label ? 13 : 5);
      const m = measure(svg, d);
      const hl = Math.max(7, wdt * 1.25);
      g.append("path").attr("d", d).attr("fill", "none").attr("stroke", c).attr("stroke-width", wdt).attr("stroke-opacity", L.opacity || 0.9)
        .attr("stroke-dasharray", `${Math.max(0, m.L - hl + 1)} ${m.L + 10}`).attr("stroke-linecap", L.taper ? "round" : "butt");
      m.remove();
      arrowHead(svg, g, d, wdt, c, hl, L.opacity || 0.9);
      const flip = L.path.length > 1 && proj(L.path[0])[0] > proj(L.path[L.path.length - 1])[0];
      const at = flip ? 0.58 : 0.42;
      if (L.label) {
        const o = { size: Math.min(11, Math.max(7.5, wdt * 0.72)), fill: isDark(c) ? "#fff" : INK, spacing: "0.18em", bold: true, at };
        let res = alongLabel(g, svg, readable(L.path, proj), L.label.toUpperCase(), o);
        if (!res.fits) { res.node.remove(); res = alongLabel(g, svg, readable(L.path, proj), L.label.toUpperCase(), Object.assign(o, { size: o.size * 0.8, spacing: "0.05em", at: 0.5 })); }
        if (!res.fits) warn(`arrow ${L.id || L.label}: label "${L.label}" is longer than the arrow; lengthen the path or shorten the label`);
      }
      if (L.date) {
        let r = alongLabel(g, svg, readable(L.path, proj), L.date, { size: 8, fill: shade(c, -1.4), dy: -(wdt / 2 + 3), at });
        if (!r.fits) { r.node.remove(); r = alongLabel(g, svg, readable(L.path, proj), L.date, { size: 7, fill: shade(c, -1.4), dy: -(wdt / 2 + 3), at: 0.5 }); }
        if (!r.fits) warn(`arrow ${L.id || L.label}: date "${L.date}" is longer than the arrow`);
      }
    }

    for (const L of layers.filter((l) => l.type === "point")) {
      const [x, y] = proj(L.at) || [-99, -99];
      const g = layerG(L_POINTS, L).attr("transform", `translate(${x},${y})`);
      const size = L.size || (L.symbol === "capital" || L.symbol === "large-city" ? 9 : 8.5);
      g.append("circle").attr("class", "hit").attr("r", size + 2).attr("fill", "transparent");
      // origin halo: who founded it (colony maps colour each settlement by its mother city)
      if (L.halo) g.append("circle").attr("r", size * 0.9).attr("fill", L.halo).attr("fill-opacity", 0.7);
      drawSymbol(g, L.symbol || "city", size, L.colour);
      if (L.name) {
        const pos = L.labelPos || "e", off = 6 + size * 0.25;
        const dx = { e: off, w: -off, n: 0, s: 0, ne: off * 0.8, nw: -off * 0.8, se: off * 0.8, sw: -off * 0.8 }[pos] || off;
        const dy = { e: 0, w: 0, n: -off - 2, s: off + 6, ne: -off * 0.8, nw: -off * 0.8, se: off * 0.9 + 3, sw: off * 0.9 + 3 }[pos] || 0;
        const anchor = /w$/.test(pos) || pos === "w" ? "end" : pos === "n" || pos === "s" ? "middle" : "start";
        const big = L.symbol === "capital" || L.symbol === "large-city";
        const t = g.append("text").attr("x", dx).attr("y", dy).attr("dy", "0.35em").attr("text-anchor", anchor)
          .attr("font-size", big ? 9.5 : 8.5).attr("font-weight", big ? 700 : 400).attr("fill", INK).text(L.name);
        haloText(t, base.land || LAND, 2.4);
        if (L.symbol === "capital") {
          const bb = t.node().getBBox();
          g.append("line").attr("x1", bb.x).attr("x2", bb.x + bb.width).attr("y1", bb.y + bb.height + 0.5).attr("y2", bb.y + bb.height + 0.5).attr("stroke", INK).attr("stroke-width", 0.9);
        }
        if (L.tag) {
          const bb = t.node().getBBox();
          const tg = g.append("g").attr("transform", `translate(${anchor === "end" ? bb.x + bb.width : anchor === "middle" ? bb.x + bb.width / 2 : bb.x},${bb.y + bb.height + 2})`);
          const tt = tg.append("text").attr("y", 7).attr("font-size", 7.5).attr("fill", isDark(L.tag.colour || "#f1c75b") ? "#fff" : INK).attr("text-anchor", anchor).text(L.tag.text);
          const tb = tt.node().getBBox();
          tg.insert("rect", "text").attr("x", tb.x - 2).attr("y", tb.y - 0.5).attr("width", tb.width + 4).attr("height", tb.height + 1).attr("fill", L.tag.colour || "#f1c75b");
        }
      }
    }

    for (const L of layers.filter((l) => l.type === "label")) {
      const g = layerG(L_LABELS, L);
      const st = L.style || "region";
      const look = {
        region: { size: 11, fill: "#4a3b2a", spacing: "0.3em", bold: true, caps: true },
        realm: { size: 15, fill: shade(L.colour || "#8a4a2a", -0.6), spacing: "0.35em", bold: true, caps: true },
        people: { size: 10, fill: shade(L.colour || "#7a3e1d", -0.4), spacing: "0.22em", bold: true, caps: true },
        water: { size: 9.5, fill: "#2f6a95", spacing: "0.12em", italic: true },
        date: { size: 8.5, fill: "#5a4a3a", spacing: "0" },
        note: { size: 8, fill: "#3a3a3a", spacing: "0" }
      }[st];
      const opts = Object.assign({}, look, L.size ? { size: L.size } : {}, L.colour && st !== "realm" && st !== "people" ? { fill: L.colour } : {});
      const text = opts.caps ? L.text.toUpperCase() : L.text;
      if (L.along) {
        let pts = L.along.map(proj);
        if (pts[0][0] > pts[pts.length - 1][0]) pts = pts.reverse();
        const res = alongLabel(g, svg, d3.line().curve(d3.curveNatural)(pts), text, Object.assign({ halo: st !== "water" && st !== "realm" ? (base.land || LAND) : null }, opts));
        if (!res.fits) {
          // too long for its curve: set it straight at the curve's midpoint rather than cut it off
          res.node.remove();
          const mid = pts[Math.floor(pts.length / 2)];
          const t = g.append("text").attr("x", mid[0]).attr("y", mid[1]).attr("dy", "0.35em").attr("text-anchor", "middle").attr("font-size", opts.size)
            .attr("font-weight", opts.bold ? 700 : 400).attr("font-style", opts.italic ? "italic" : null).attr("letter-spacing", opts.spacing).attr("fill", opts.fill).attr("data-fallback", "straight").text(text);
          if (st !== "water" && st !== "realm") haloText(t, base.land || LAND, 2.2);
        }
      } else {
        const [x, y] = proj(L.at);
        const lines = text.split("\n");
        const t = g.append("text").attr("x", x).attr("y", y).attr("text-anchor", "middle").attr("font-size", opts.size)
          .attr("font-weight", opts.bold ? 700 : 400).attr("font-style", opts.italic ? "italic" : null).attr("letter-spacing", opts.spacing).attr("fill", opts.fill);
        lines.forEach((ln, i) => t.append("tspan").attr("x", x).attr("dy", i ? "1.15em" : `${-(lines.length - 1) * 0.55 + 0.35}em`).text(ln));
        if (st !== "water" && st !== "realm") haloText(t, base.land || LAND, 2.2);
      }
    }

    // legend, loose on the map like the atlas, on a pale panel so it reads over anything
    const items = P.legendItems(fig);
    if (items.length && !(fig.legend && fig.legend.hidden)) drawLegend(svg, defs, items, fig.legend || {}, w, h, base);

    if (fig.note) {
      const t = svg.append("text").attr("x", w - 8).attr("y", h - 8).attr("text-anchor", "end").attr("font-size", 7.5).attr("fill", "#555").attr("font-style", "italic").text(fig.note);
      haloText(t, base.sea || SEA, 2);
    }
    svg.append("rect").attr("x", 0.6).attr("y", 0.6).attr("width", w - 1.2).attr("height", h - 1.2).attr("fill", "none").attr("stroke", INK).attr("stroke-width", 1.2);
    return svg;
  }

  function arrowHead(svg, g, d, wdt, c, hl, op = 1) {
    const m = measure(svg, d);
    const tip = m.at(m.L), back = m.at(Math.max(0, m.L - hl));
    m.remove();
    const dx = tip.x - back.x, dy = tip.y - back.y, n = Math.hypot(dx, dy) || 1;
    const ux = dx / n, uy = dy / n, hw = Math.max(5, wdt * 1.15);
    g.append("path").attr("d", `M${back.x - uy * hw},${back.y + ux * hw}L${tip.x},${tip.y}L${back.x + uy * hw},${back.y - ux * hw}Z`).attr("fill", c).attr("fill-opacity", op);
  }

  // battlements on one side of a fortified frontier (the Great Wall, the Roman limes)
  function crenellate(g, node, c, side) {
    const len = node.getTotalLength(), step = 7, m = 3.2;
    let d = "";
    for (let s = step / 2; s < len - 1; s += step) {
      const a = node.getPointAtLength(Math.max(0, s - 0.5)), b = node.getPointAtLength(Math.min(len, s + 0.5));
      const n = Math.hypot(b.x - a.x, b.y - a.y) || 1, ux = (b.x - a.x) / n, uy = (b.y - a.y) / n;
      const p = node.getPointAtLength(s), nx = -uy * side, ny = ux * side, h = m / 2;
      d += `M${p.x - ux * h},${p.y - uy * h}L${p.x - ux * h + nx * m},${p.y - uy * h + ny * m}L${p.x + ux * h + nx * m},${p.y + uy * h + ny * m}L${p.x + ux * h},${p.y + uy * h}Z`;
    }
    g.append("path").attr("class", "merlons").attr("d", d).attr("fill", c);
  }

  // dates printed on a line itself ([[0..1, "text"], ...] measured from the first point of the path)
  function lineDates(g, svg, L, proj, c) {
    if (!L.dates) return;
    const pts = L.path.map(proj), flip = pts[0][0] > pts[pts.length - 1][0];
    for (const [t, text] of L.dates) {
      const r = alongLabel(g, svg, readable(L.path, proj), text, { size: 7.5, fill: shade(c, -1.2), dy: -5, at: flip ? 1 - t : t, halo: LAND });
      r.node.attr("class", "line-date");
      // a textPath silently drops glyphs that run off either end of its path
      const room = Math.min(t, 1 - t) * 2 * svg.select(`#tp-${pathSeq}`).node().getTotalLength();
      if (r.node.node().getComputedTextLength() > room) warn(`${L.type} ${L.id}: date "${text}" runs off the end of the line; move it toward the middle`);
    }
  }

  // a text path that always reads left to right, whatever direction the line was drawn in
  function readable(path, proj) {
    let pts = path.map(proj);
    if (pts[0][0] > pts[pts.length - 1][0]) pts = pts.slice().reverse();
    return d3.line().curve(d3.curveCatmullRom.alpha(0.5))(pts);
  }

  let warnings = [];
  const warn = (m) => warnings.push(m);

  let pathSeq = 0;
  function alongLabel(g, svg, d, text, o) {
    const id = `tp-${++pathSeq}`;
    svg.select("defs").append("path").attr("id", id).attr("d", d);
    const t = g.append("text").attr("font-size", o.size || 9).attr("fill", o.fill || INK).attr("letter-spacing", o.spacing || "0")
      .attr("font-weight", o.bold ? 700 : 400).attr("font-style", o.italic ? "italic" : null).attr("dy", o.dy != null ? o.dy : "0.35em");
    t.append("textPath").attr("href", `#${id}`).attr("startOffset", `${(o.at != null ? o.at : 0.5) * 100}%`).attr("text-anchor", "middle").text(text);
    if (o.halo) haloText(t, o.halo, 2.2);
    const pathLen = svg.select(`#${id}`).node().getTotalLength();
    return { node: t, fits: t.node().getComputedTextLength() <= pathLen * 0.96 };
  }

  function drawLegend(svg, defs, items, cfg, w, h, base) {
    const g = svg.append("g").attr("class", "legend");
    const rowH = 13, sw = 24, pad = 6, colGap = 12;
    const cols = cfg.columns || (items.length > 9 ? 2 : 1);
    const perCol = Math.ceil(items.length / cols);
    const rows = g.append("g");
    let x0 = pad;
    for (let c = 0; c < cols; c++) {
      const col = rows.append("g").attr("transform", `translate(${x0},0)`);
      items.slice(c * perCol, (c + 1) * perCol).forEach((it, i) => {
        const r = col.append("g").attr("transform", `translate(0,${pad + i * rowH + rowH / 2})`).attr("data-legend", it.layer && it.layer.id || null);
        swatch(r, defs, it.layer || {}, sw);
        r.append("text").attr("x", sw + 6).attr("dy", "0.35em").attr("font-size", 8).attr("fill", INK).text(it.text);
      });
      x0 += col.node().getBBox().width + colGap;
    }
    const bb = rows.node().getBBox();
    const bw = bb.width + pad * 2, bh = perCol * rowH + pad * 2;
    const pos = cfg.position || "bottom-left";
    const x = /right/.test(pos) ? w - bw - 6 : 6, y = /top/.test(pos) ? 6 : h - bh - 6;
    g.attr("transform", `translate(${x},${y})`);
    g.insert("rect", "g").attr("width", bw).attr("height", bh).attr("fill", PAPER).attr("fill-opacity", 0.88).attr("stroke", cfg.boxed ? INK : "none").attr("stroke-width", 0.6);
  }

  function swatch(g, defs, L, sw) {
    L = L.type === "area" ? areaLook(L) : L;
    const c = L.colour;
    if (L.type === "area") {
      const { fill, op } = areaFill(defs, L);
      g.append("rect").attr("y", -5).attr("width", sw).attr("height", 10).attr("fill", fill).attr("fill-opacity", op).attr("stroke", shade(c || AREA_DEFAULT, 0.6)).attr("stroke-width", 0.6);
    } else if (L.type === "arrow") {
      const wd = Math.min(7, L.width || 5);
      g.append("path").attr("d", `M0,0L${sw - 7},0`).attr("stroke", c || "#c0392b").attr("stroke-width", wd);
      g.append("path").attr("d", `M${sw - 8},${-wd}L${sw},0L${sw - 8},${wd}Z`).attr("fill", c || "#c0392b");
    } else if (L.type === "route" && L.style === "road") {
      g.append("path").attr("d", `M1,0L${sw - 1},0`).attr("stroke", L.bed || "#f0d27a").attr("stroke-width", 4).attr("stroke-linecap", "round");
      g.append("path").attr("d", `M1,0L${sw - 1},0`).attr("stroke", c || "#b0753a").attr("stroke-width", 2.4).attr("stroke-dasharray", "6 4");
    } else if (L.type === "route") {
      g.append("path").attr("d", `M1,0L${sw - 1},0`).attr("stroke", c || "#b0753a").attr("stroke-width", 3).attr("stroke-linecap", "round").attr("stroke-dasharray", L.style === "dashed" ? "5 3" : "0.1 5.5");
    } else if (L.type === "boundary") {
      const p = g.append("path").attr("d", `M0,0L${sw},0`).attr("stroke", c || "#4a3f35").attr("stroke-width", L.style === "wall" ? 1.8 : 1.3)
        .attr("stroke-dasharray", L.style === "solid" || L.style === "wall" ? null : L.style === "dashdot" ? "7 3 1.5 3" : "6 3.5");
      if (L.style === "wall") crenellate(g, p.node(), c || "#4a3f35", -1);
    } else if (L.type === "point" || L.symbol) {
      const s = g.append("g").attr("transform", `translate(${sw / 2},0)`);
      if (L.halo) s.append("circle").attr("r", 7).attr("fill", L.halo).attr("fill-opacity", 0.7);
      drawSymbol(s, L.symbol || "city", 8, c);
    }
  }

  // ---- the spread
  function render(spec, host) {
    host.innerHTML = "";
    const errs = P.validate(spec);
    if (errs.length) { host.innerHTML = `<div class="errors"><h2>This plate has problems</h2><ul>${errs.map((e) => `<li>${esc(e)}</li>`).join("")}</ul></div>`; return { errors: errs }; }
    warnings = [];
    const spread = document.createElement("div");
    spread.className = "spread";
    host.appendChild(spread);

    const left = document.createElement("section");
    left.className = "page plate-page";
    left.innerHTML = `<div class="head"><span class="folio">${esc(spec.folio || "")}</span> ${esc(spec.head || spec.title)}</div>`;
    spread.appendChild(left);

    const figs = spec.figures;
    const avail = PAGE_H - HEAD_H - figs.length * (CAP_H + GAP);
    const shares = figs.map((f) => f.share || 1), tot = shares.reduce((a, b) => a + b, 0);
    figs.forEach((fig, i) => {
      const box = document.createElement("figure");
      box.className = "fig-box";
      left.appendChild(box);
      const h = Math.round((avail * shares[i]) / tot);
      drawFigure(box, fig, i, PAGE_W, h);
      const cap = document.createElement("figcaption");
      cap.textContent = fig.caption;
      box.appendChild(cap);
    });

    const right = document.createElement("section");
    right.className = "page text-page";
    let t = `<div class="head right">${esc(spec.head || spec.title)} <span class="folio">${esc(spec.folio ? +spec.folio + 1 : "")}</span></div>`;
    t += `<h1>${esc(spec.title)}</h1>`;
    if (spec.text && spec.text.intro) t += `<p class="intro">${esc(spec.text.intro)}</p>`;
    let n = 0;
    for (const s of (spec.text && spec.text.sections) || []) {
      t += `<h2>${esc(s.heading)}</h2>`;
      for (const en of s.entries || []) {
        const refs = (en.refs || []).join(" ");
        t += `<p class="entry${refs ? " linked" : ""}" data-entry="${n++}" data-refs="${esc(refs)}">${en.date ? `<b class="date">${esc(en.date)}</b> ` : ""}${esc(en.text)}${refs ? ' <span class="see" aria-hidden="true">▸</span>' : ""}</p>`;
      }
    }
    if (spec.sources && spec.sources.length) t += `<div class="sources"><b>Sources:</b> ${spec.sources.map(esc).join("; ")}</div>`;
    if (spec.from) t += `<div class="from">Mapified from <a href="${esc(spec.from.href || "#")}">${esc(spec.from.label || spec.from.href)}</a></div>`;
    right.innerHTML = t;
    spread.appendChild(right);

    wireCrossRefs(spread);
    return { errors: [], warnings: warnings.concat(overlapWarnings(spread)), coverage: P.coverage(spec) };
  }

  function wireCrossRefs(spread) {
    const setHot = (ids, entries) => {
      spread.classList.toggle("focus", !!(ids && ids.length));
      spread.querySelectorAll(".layer.hot, .entry.hot").forEach((e) => e.classList.remove("hot"));
      for (const id of ids || []) spread.querySelectorAll(`[data-layer="${CSS.escape(id)}"]`).forEach((e) => e.classList.add("hot"));
      for (const k of entries || []) spread.querySelectorAll(`[data-entry="${k}"]`).forEach((e) => e.classList.add("hot"));
    };
    spread.addEventListener("mouseover", (ev) => {
      const en = ev.target.closest(".entry.linked");
      if (en) { setHot(en.dataset.refs.split(" "), [en.dataset.entry]); return; }
      const ly = ev.target.closest("[data-layer]");
      if (ly && ly.dataset.layer) {
        const id = ly.dataset.layer;
        const ks = [...spread.querySelectorAll(".entry.linked")].filter((e) => e.dataset.refs.split(" ").includes(id)).map((e) => e.dataset.entry);
        setHot([id], ks);
        return;
      }
      setHot(null, null);
    });
    spread.addEventListener("mouseleave", () => setHot(null, null));
  }

  /** Self-review: labels that collide with each other or sit under the legend. */
  function overlapWarnings(spread) {
    const out = [];
    // a curved label's bounding box is a big diagonal rectangle, so test its glyphs instead
    const boxesOf = (t) => {
      if (!t.querySelector("textPath")) { const r = t.getBoundingClientRect(); return r.width && r.height ? [r] : []; }
      const m = t.getScreenCTM(), rs = [];
      for (let i = 0; i < t.getNumberOfChars(); i++) {
        let e; try { e = t.getExtentOfChar(i); } catch (_) { continue; }
        if (!e.width) continue;
        const p = new DOMPoint(e.x, e.y).matrixTransform(m), q = new DOMPoint(e.x + e.width, e.y + e.height).matrixTransform(m);
        rs.push({ left: Math.min(p.x, q.x), right: Math.max(p.x, q.x), top: Math.min(p.y, q.y), bottom: Math.max(p.y, q.y) });
      }
      return rs;
    };
    const area = (r) => (r.right - r.left) * (r.bottom - r.top);
    const inter = (a, b) => Math.max(0, Math.min(a.right, b.right) - Math.max(a.left, b.left)) * Math.max(0, Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top));
    const hits = (as, bs) => as.some((a) => bs.some((b) => inter(a, b) > 0.3 * Math.min(area(a), area(b))));
    spread.querySelectorAll("svg.fig").forEach((svg, fi) => {
      const boxes = [];
      svg.querySelectorAll(".points text, .labels text, .lines text").forEach((t) => {
        const rs = boxesOf(t);
        if (rs.length) boxes.push({ name: t.textContent.trim(), rs });
      });
      const leg = svg.querySelector(".legend");
      const lr = leg && leg.getBoundingClientRect();
      for (let i = 0; i < boxes.length; i++) {
        const A = boxes[i];
        if (lr && hits(A.rs, [lr])) out.push(`figure ${fi + 1}: "${A.name}" is under the legend`);
        for (let j = i + 1; j < boxes.length; j++) if (hits(A.rs, boxes[j].rs)) out.push(`figure ${fi + 1}: "${A.name}" overlaps "${boxes[j].name}"`);
      }
    });
    return out;
  }

  /** Serialise one figure as a standalone SVG string (for Obsidian embeds). */
  function figureSVG(i = 0) {
    const svg = document.querySelectorAll("svg.fig")[i];
    if (!svg) return null;
    const clone = svg.cloneNode(true);
    clone.querySelectorAll(".hot").forEach((e) => e.classList.remove("hot"));
    return '<?xml version="1.0" encoding="UTF-8"?>\n' + new XMLSerializer().serializeToString(clone);
  }

  // ---- page shell
  function plateIds() { return Object.keys(window.PLATES || {}); }
  function renderKey(host) {
    let h = `<div class="keysheet"><h1>Symbol key</h1><p>The book's own key, plus the site and resource glyphs its plates use. A plate may only use these names in <code>symbol</code>.</p>`;
    for (const [group, names] of Object.entries(P.SYMBOL_GROUPS)) {
      h += `<h2>${esc(group)}</h2><div class="keygrid">` + names.map((n) => `<div class="keyitem" data-symbol="${esc(n)}"><svg width="26" height="22" viewBox="-13 -11 26 22"></svg><span>${esc(P.SYMBOLS[n])} <code>${esc(n)}</code></span></div>`).join("") + `</div>`;
    }
    host.innerHTML = h + `</div>`;
    host.querySelectorAll(".keyitem").forEach((el) => drawSymbol(d3.select(el.querySelector("svg")), el.dataset.symbol, 11));
  }

  /**
   * "Where this sits": a strip above the plate linking back to the viewer. The period, the chapters above the plate's
   * own, what's inside it, what else was happening at the same time, and the period's other plates. Built from the
   * viewer's own data (window.DATASETS) with HM.plateContext, so it never goes stale.
   */
  function renderContext(spec, id) {
    let box = document.getElementById("context");
    if (!box) { box = document.createElement("nav"); box.id = "context"; box.setAttribute("aria-label", "Where this plate sits"); $("#host").before(box); }
    const ctx = spec && spec.viewer && window.HM && window.HM.plateContext ? window.HM.plateContext(window.DATASETS, spec.viewer, id) : null;
    if (!ctx) { box.hidden = true; box.innerHTML = ""; return; }
    const a = (it, cls) => `<a class="${cls || ""}" href="${esc(it.href)}" title="${esc(it.dates || "")}">${esc(it.title)}</a>`;
    const row = (label, items, cls) => items.length ? `<div class="ctx-row ${cls}"><span class="ctx-l">${label}</span>${items.map((it) => a(it) + (it.dates ? ` <span class="ctx-d">${esc(it.dates)}</span>` : "")).join('<span class="ctx-sep">·</span>')}</div>` : "";
    box.innerHTML =
      `<div class="ctx-row ctx-crumbs"><span class="ctx-l">Where this sits</span>${a(ctx.period, "ctx-period")}` +
      ctx.crumbs.map((c, i) => `<span class="ctx-gt">›</span>${a(c, i === ctx.crumbs.length - 1 ? "ctx-here" : "")}`).join("") +
      (ctx.crumbs.length ? ` <span class="ctx-d">${esc(ctx.crumbs[ctx.crumbs.length - 1].dates)}</span>` : "") + `</div>` +
      row("Inside it", ctx.inside, "ctx-inside") +
      row("Meanwhile", ctx.meanwhile, "ctx-meanwhile") +
      row("Other plates", ctx.plates, "ctx-plates");
    box.hidden = false;
  }

  function show(id) {
    const host = $("#host");
    const ids = plateIds();
    const sel = $("#plate");
    sel.innerHTML = ids.map((k) => `<option value="${esc(k)}"${k === id ? " selected" : ""}>${esc(window.PLATES[k].title)}</option>`).join("")
      + `<option value="key"${id === "key" ? " selected" : ""}>Symbol key</option>`;
    const spec = window.PLATES[id];
    const home = document.querySelector("a.home");
    if (home) {
      const v = spec && spec.viewer;
      home.href = v ? `../app/index.html#${v}` : "../app/index.html";
      home.textContent = v ? "← On the timeline" : "← Amit's World";
    }
    renderContext(spec, id);
    if (id === "key") { renderKey(host); window.ATLAS.current = { id, errors: [] }; document.title = "Symbol key · Amit's Atlas"; window.ATLAS.ready = true; return; }
        if (!spec) { host.innerHTML = `<p class="empty">${ids.length ? `No plate called “${esc(id)}”.` : "No plates yet."}</p>`; window.ATLAS.current = { id, errors: [`no plate ${id}`] }; window.ATLAS.ready = true; return; }
        const res = render(spec, host);
    window.ATLAS.current = { id, ...res };
    document.title = `${spec.title} · Amit's Atlas`;
    window.ATLAS.ready = true;
  }

  window.ATLAS = { render, figureSVG, show, drawSymbol, ready: false };

  document.addEventListener("DOMContentLoaded", () => {
    const pick = () => decodeURIComponent(location.hash.replace(/^#/, "")) || plateIds()[0];
    $("#plate").addEventListener("change", (e) => { location.hash = e.target.value; });
    $("#svg").addEventListener("click", () => {
      const s = figureSVG(0);
      if (!s) return;
      const a = document.createElement("a");
      a.href = URL.createObjectURL(new Blob([s], { type: "image/svg+xml" }));
      a.download = `${window.ATLAS.current.id}.svg`;
      a.click();
    });
    $("#key").addEventListener("click", () => { location.hash = "key"; });
    window.addEventListener("hashchange", () => show(pick()));
    show(pick());
  });
})();
