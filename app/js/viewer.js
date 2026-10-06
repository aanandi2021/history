/* World Viewer: map + chapters + swimlanes + panel, sharing one time cursor.
   Depends on d3, topojson, window.WORLD, window.DATASETS and window.HM (model.js). */
(function () {
  "use strict";
  const M = window.HM;
  const $ = (s) => document.querySelector(s);
  const DEFAULT_DS = "ww2";
  const FAMILY = [
    { id: "father", label: "Dr. B. N. Nandi" },
    { id: "mother", label: "Mother" },
    { id: "self", label: "Amit" }
  ];
  const FAMILY_KEY = "history.family.v1";
  const MAP_W = 960, MAP_H = 470;

  const state = {
    dsId: null, ds: null,
    cursor: null, pinned: false, selected: null,
    playing: false, follow: true, followed: undefined,
    mapK: 1, flying: false,
    showWorld: true, tour: null, tourStop: 0
  };

  // ---------------------------------------------------------------- helpers
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const laneColour = (lane) => state.ds.colours.lanes[lane] || "#888";
  const sideColour = (side) => state.ds.colours.sides[side] || "#888";
  const itemName = (it) => it.title || it.name;
  const itemColour = (it) => it.kind === "event" ? laneColour(it.lane) : it.kind === "leader" ? sideColour(it.side) : it.kind === "book" ? (it.amits ? "#2e7d6b" : it.canadian ? "#b22d2d" : "#7b6a4f") : "#c9b48a";
  function itemWhen(it) {
    if (it.kind === "leader") return it.terms.map((r) => M.fmtRange(r.a, r.b)).join("; ");
    if (it.kind === "event") return M.fmtRange(it.date, it.end, it.approx && !M.isPartial(it.date));
    return M.fmtRange(it.start, it.end);
  }
  // Periods where only years are known (dataset.precision === "year") show the cursor as a bare year.
  const fmtCursor = (t) => (state.ds && state.ds.precision === "year") ? M.fmtYear(t.getUTCFullYear()) : M.fmtDate(M.isoDate(t));

  const tip = $("#tooltip");
  function showTip(ev, html) { tip.innerHTML = html; tip.hidden = false; moveTip(ev); }
  function moveTip(ev) {
    const x = Math.min(ev.clientX + 14, window.innerWidth - 300);
    tip.style.left = x + "px"; tip.style.top = (ev.clientY + 14) + "px";
  }
  const hideTip = () => { tip.hidden = true; };

  function loadFamily() {
    try { return JSON.parse(localStorage.getItem(FAMILY_KEY)) || {}; } catch (e) { return {}; }
  }
  function saveFamily(f) { localStorage.setItem(FAMILY_KEY, JSON.stringify(f)); }

  // ---------------------------------------------------------------- map
  const projection = d3.geoNaturalEarth1().scale(175).translate([MAP_W / 2, MAP_H / 2]);
  const geoPath = d3.geoPath(projection);
  const mapSvg = d3.select("#map");
  const mapRoot = mapSvg.append("g");
  const countries = topojson.feature(window.WORLD, window.WORLD.objects.countries).features.filter((f) => f.id !== "010");
  mapRoot.append("path").attr("class", "sphere").attr("d", geoPath({ type: "Sphere" }));
  mapRoot.append("path").attr("class", "grat").attr("d", geoPath(d3.geoGraticule10()));
  const countryPaths = mapRoot.append("g").selectAll("path").data(countries).join("path")
    .attr("class", "country").attr("d", geoPath);
  const worldLayer = mapRoot.append("g").attr("class", "world-underlay");
  const chapterBox = mapRoot.append("path").attr("class", "chapter-box");
  const sceneLayer = mapRoot.insert("g", ".chapter-box").attr("class", "scene");
  const sceneDefs = mapSvg.append("defs");
  const pinLayer = mapRoot.append("g");

  const mapZoom = d3.zoom().scaleExtent([1, 40])
    .translateExtent([[0, 0], [MAP_W, MAP_H]])
    .on("zoom", (ev) => {
      mapRoot.attr("transform", ev.transform);
      state.mapK = ev.transform.k;
      scaleScene();
      scalePins();
    });
  mapSvg.call(mapZoom).on("dblclick.zoom", null);

  function bboxRing(bb) {
    const [[w, s], [e, n]] = bb, pts = [], N = 16;
    for (let i = 0; i <= N; i++) pts.push([w + (e - w) * i / N, s]);
    for (let i = 0; i <= N; i++) pts.push([e, s + (n - s) * i / N]);
    for (let i = 0; i <= N; i++) pts.push([e - (e - w) * i / N, n]);
    for (let i = 0; i <= N; i++) pts.push([w, n - (n - s) * i / N]);
    return pts;
  }

  function flyToBBox(bb, duration = 900) {
    const pts = bboxRing(bb).map((p) => projection(p));
    const xs = pts.map((p) => p[0]), ys = pts.map((p) => p[1]);
    const x0 = Math.min(...xs), x1 = Math.max(...xs), y0 = Math.min(...ys), y1 = Math.max(...ys);
    const k = Math.max(1, Math.min(40, 0.9 / Math.max((x1 - x0) / MAP_W, (y1 - y0) / MAP_H)));
    const t = d3.zoomIdentity.translate(MAP_W / 2 - k * (x0 + x1) / 2, MAP_H / 2 - k * (y0 + y1) / 2).scale(k);
    mapSvg.transition("fly").duration(duration).call(mapZoom.transform, t);
  }
  function flyWorld(duration = 800) {
    mapSvg.transition("fly").duration(duration).call(mapZoom.transform, d3.zoomIdentity);
  }
  function panToPoint(lonlat) {
    const p = projection(lonlat);
    const cur = d3.zoomTransform(mapSvg.node());
    const [sx, sy] = cur.apply(p);
    const inside = sx > MAP_W * 0.08 && sx < MAP_W * 0.92 && sy > MAP_H * 0.08 && sy < MAP_H * 0.92;
    if (inside && cur.k >= 2) return;
    const k = Math.max(cur.k, 3);
    const t = d3.zoomIdentity.translate(MAP_W / 2 - k * p[0], MAP_H / 2 - k * p[1]).scale(k);
    mapSvg.transition("fly").duration(700).call(mapZoom.transform, t);
  }



  // ---------------------------------------------------------------- political underlay
  const REGIONS = window.ATLAS_REGIONS;
  let REGION_INDEX = null;
  function regionIndex() {
    if (REGION_INDEX) return REGION_INDEX;
    REGION_INDEX = new Map();
    const geoms = REGIONS && REGIONS.objects && REGIONS.objects.regions && REGIONS.objects.regions.geometries || [];
    for (const g of geoms) if (g.properties && g.properties.code) REGION_INDEX.set(g.properties.code, g);
    return REGION_INDEX;
  }
  function polityFeature(P) {
    if (P.polygon) return { type: "Feature", properties: {}, geometry: { type: "Polygon", coordinates: [[...P.polygon, P.polygon[0]]] } };
    const idx = regionIndex();
    const geoms = (P.regions || []).map((c) => idx.get(c)).filter(Boolean);
    if (!geoms.length) return null;
    return { type: "Feature", properties: {}, geometry: topojson.merge(REGIONS, geoms) };
  }
  function polityPath(P) {
    const f = polityFeature(P);
    return f ? geoPath(f) : "";
  }
  function drawWorldUnderlay(t) {
    const snap = M.snapshotAt(window.WORLD_SNAPSHOTS || [], t);
    const on = !!(state.showWorld && snap);
    worldLayer.attr("display", on ? null : "none");
    if (!on) { worldLayer.selectAll("*").remove(); return; }
    worldLayer.selectAll("path.polity").data(snap.polities, (d) => d.id).join(
      (e) => e.append("path").attr("class", "polity"),
      (u) => u,
      (x) => x.remove()
    ).attr("d", polityPath).attr("fill", (d) => d.colour).attr("stroke", (d) => d.colour);
    worldLayer.selectAll("text.polity-label").data(snap.polities.filter((d) => d.label || d.at), (d) => d.id).join(
      (e) => e.append("text").attr("class", "polity-label"),
      (u) => u,
      (x) => x.remove()
    ).attr("x", (d) => projection(d.label || d.at)[0]).attr("y", (d) => projection(d.label || d.at)[1]).text((d) => d.name + (d.approx ? " (approx.)" : ""));
    const el = $("#world-date-label");
    if (el) el.textContent = `World at this date: ${M.masterYear(snap.year)}`;
  }

  // ---------------------------------------------------------------- chapter scenes (atlas grammar on the viewer map)
  const SCENES = window.SCENES || {};
  const viewBox = (ch) => (M.sceneFor(SCENES, state.dsId, ch) || {}).bbox || ch.bbox;

  function drawChapterBox(ch) {
    // a chapter with a scene draws its own map, so the dashed box would only add clutter
    if (!ch || M.sceneFor(SCENES, state.dsId, ch)) { chapterBox.attr("d", null); return; }
    chapterBox.attr("d", geoPath({ type: "LineString", coordinates: bboxRing(ch.bbox) }));
  }


  let sceneKey = null;
  const SYMBOL_PATHS = {
    city: "M-2.6,0a2.6,2.6 0 1,0 5.2,0a2.6,2.6 0 1,0 -5.2,0",
    "large-city": "M-4,0a4,4 0 1,0 8,0a4,4 0 1,0 -8,0",
    find: "M-2.6,0a2.6,2.6 0 1,0 5.2,0a2.6,2.6 0 1,0 -5.2,0",
    port: "M0,-4.5L0,3.5M-3.2,1a3.2,3.2 0 0,0 6.4,0M-2,-2.5L2,-2.5",
    university: "M-4,-3L0,-4.6L4,-3L4,3.6L0,2.2L-4,3.6Z",
    temple: "M0,-4.8L4.4,3.4L-4.4,3.4Z",
    stupa: "M-4.4,2.8A4.4,4.4 0 0,1 4.4,2.8Z M0,-5.4L0,-1.6",
    monastery: "M-3.4,-3.4h6.8v6.8h-6.8Z",
    fortress: "M-3.6,-3.6h7.2v7.2h-7.2Z",
    battle: "M-4,-4L4,4M4,-4L-4,4",
    treaty: "M0,-4.6L4.6,0L0,4.6L-4.6,0Z",
    insurrection: "M0,-5L1.4,-1.4L5,0L1.4,1.4L0,5L-1.4,1.4L-5,0L-1.4,-1.4Z",
    ally: "M-6.5,0a6.5,6.5 0 1,0 13,0a6.5,6.5 0 1,0 -13,0"
  };
  const STROKED = new Set(["port", "battle", "find", "stupa", "monastery", "ally"]);

  function stripeFill(colour) {
    const id = "stripe-" + colour.replace(/[^a-z0-9]/gi, "");
    if (sceneDefs.select("#" + id).empty()) {
      const p = sceneDefs.append("pattern").attr("id", id).attr("patternUnits", "userSpaceOnUse")
        .attr("width", 7).attr("height", 7).attr("patternTransform", "rotate(45)");
      p.append("rect").attr("width", "100%").attr("height", "100%").attr("fill", colour).attr("opacity", 0.12);
      p.append("line").attr("x1", 0).attr("y1", 0).attr("x2", 0).attr("y2", 7).attr("stroke", colour).attr("stroke-width", 2.2).attr("opacity", 0.55);
    }
    return `url(#${id})`;
  }
  function fadeStroke(colour, a, b) {
    const id = `fade-${sceneDefs.selectAll("linearGradient").size()}`;
    const g = sceneDefs.append("linearGradient").attr("id", id).attr("gradientUnits", "userSpaceOnUse")
      .attr("x1", a[0]).attr("y1", a[1]).attr("x2", b[0]).attr("y2", b[1]);
    g.append("stop").attr("offset", 0).attr("stop-color", colour).attr("stop-opacity", 0.95);
    g.append("stop").attr("offset", 0.55).attr("stop-color", colour).attr("stop-opacity", 0.6);
    g.append("stop").attr("offset", 1).attr("stop-color", colour).attr("stop-opacity", 0);
    return `url(#${id})`;
  }
  const smooth = d3.line().curve(d3.curveCatmullRom.alpha(0.5));
  // a thing drawn at screen size: positioned in map space, scaled by 1/k in scaleScene
  const screenSized = (g, x, y, rot) => g.append("g").attr("class", "sc").datum({ x, y, rot });

  function sceneText(g, lines, anchor) {
    const t = g.append("text").attr("text-anchor", anchor);
    lines.forEach((ln, i) => t.append("tspan").attr("class", ln.cls).attr("x", anchor === "end" ? -7 : anchor === "middle" ? 0 : 7)
      .attr("dy", i ? (ln.cls === "s-who" ? 11 : 12) : 3.5).text(ln.text));
    return t;
  }

  /**
   * A dated campaign itinerary (atlas round 4: Hannibal, Caesar, the Cimbri). One heavy line in the actor's colour,
   * numbered legs, dates beside the stops and an X at battles. The legs already marched are solid; the ones still to
   * come are faint, and an arrowhead shows where the army is on the timeline's date (see updateItineraries).
   */
  function drawItinerary(g, L, colour) {
    const stops = L.stops;
    g.classed("dashed", L.style === "dashed");
    stops.slice(1).forEach((s, i) => {
      const pts = [stops[i].at, ...(s.via || []), s.at].map((p) => projection(p));
      g.append("path").attr("d", smooth(pts)).attr("class", "s-itin-leg").attr("data-leg", i).style("stroke", colour);
      if (L.numbered !== false && stops.length > 2) {
        const m = pts.length > 2 ? pts[Math.floor(pts.length / 2)] : [(pts[0][0] + pts[1][0]) / 2, (pts[0][1] + pts[1][1]) / 2];
        const b = screenSized(g, m[0], m[1]).attr("class", "sc s-itin-n").attr("data-leg", i);
        b.append("circle").attr("r", 6).style("stroke", colour);
        b.append("text").attr("dy", 3).attr("text-anchor", "middle").text(i + 1);
      }
    });
    stops.forEach((s, i) => {
      const [x, y] = projection(s.at);
      const p = screenSized(g, x, y).attr("class", "sc s-itin-stop").attr("data-stop", i);
      if (s.battle) p.append("path").attr("d", SYMBOL_PATHS.battle).attr("class", "s-sym-s");
      else p.append("circle").attr("r", 2.4).style("fill", colour);
      if (s.name) {
        const lines = [{ text: `${s.name ? s.name + " " : ""}${M.stopLabel(stops, i)}`, cls: "s-name" }];
        if (s.note) lines.push({ text: s.note, cls: "s-who" });
        const t = sceneText(p, lines, s.side === "l" ? "end" : "start");
        if (s.dy) t.attr("transform", `translate(0,${s.dy})`);
      }
      if (s.minK) p.classed("s-itin-minK", true).attr("data-mink", s.minK);
    });
    screenSized(g, 0, 0).attr("class", "sc s-itin-head").append("path").attr("d", "M3,0L-9,-6L-6.5,0L-9,6Z").style("fill", colour);
    if (L.name) {
      const at = projection(L.labelAt || stops[0].at);
      sceneText(screenSized(g, at[0], at[1]), [{ text: L.name, cls: "s-note" }], L.side === "l" ? "end" : "start").style("fill", d3.color(colour).darker(0.8));
    }
  }

  /** Move each itinerary to the scene's moment: legs done or to come, and the arrowhead at the army's position. */
  function updateItineraries() {
    const t = state.sceneT;
    sceneLayer.selectAll(".s-itinerary").each(function (L) {
      const g = d3.select(this), at = M.itineraryAt(L, t), n = L.stops.length - 1;
      g.selectAll(".s-itin-leg").classed("todo", function () { const i = +this.dataset.leg; return !at.started || i > at.done || (i === at.done && !at.ended); })
        .classed("now", function () { return +this.dataset.leg === at.leg; });
      g.selectAll(".s-itin-stop").classed("todo", function () { const i = +this.dataset.stop; return !at.started || (!at.ended && i > at.done); })
        .attr("display", function () { return this.dataset.mink && (state.mapK || 1) < +this.dataset.mink ? "none" : null; });
      // d3.select on the node, not g.select, which would copy the layer's datum onto the head
      const head = d3.select(this.querySelector(".s-itin-head"));
      if (!at.started) { head.attr("display", "none"); return; }
      const i = at.ended ? n - 1 : at.leg, a = projection(L.stops[i].at), b = projection(L.stops[i + 1].at);
      const p = at.ended ? b : projection(at.pos);
      head.attr("display", null).datum({ x: p[0], y: p[1], rot: Math.atan2(b[1] - a[1], b[0] - a[0]) * 180 / Math.PI });
    });
  }

  function drawSceneLayers(root, layers, ghost) {
    const order = ["area", "boundary", "front", "route", "arrow", "itinerary", "label", "point"];
    for (const L of [...layers].sort((a, b) => order.indexOf(a.type) - order.indexOf(b.type))) {
      const g = root.append("g").attr("class", `s-L s-${L.type}`).datum(L);
      const colour = L.colour || "#8a7a5a";
      if (L.type === "area") {
        const ring = [...L.around, L.around[0]];
        let f = { type: "Polygon", coordinates: [ring] };
        if (d3.geoArea(f) > 2 * Math.PI) f = { type: "Polygon", coordinates: [ring.slice().reverse()] };
        const tier = L.tier || "core";
        g.append("path").attr("d", geoPath(f)).attr("class", `s-fill ${tier}`)
          .style("fill", tier === "conquest" ? stripeFill(colour) : colour).style("stroke", colour);
        if (L.name && !ghost) {
          const [x, y] = projection(L.labelAt || d3.geoCentroid(f));
          sceneText(screenSized(g, x, y), [{ text: L.name, cls: "s-realm" }], "middle").style("fill", L.labelColour || d3.color(colour).darker(1.2));
        }
      } else if (L.type === "boundary") {
        g.append("path").attr("d", geoPath({ type: "LineString", coordinates: L.path })).attr("class", `s-line ${L.style || "dashed"}`).style("stroke", L.colour || null);
      } else if (L.type === "front") {
        // the atlas's blockade or front: a line with teeth on the side being pressed (side "r" or "l" of the direction drawn)
        const pts = L.path.map((p) => projection(p));
        const line = g.append("path").attr("d", smooth(pts)).attr("class", "s-front").style("stroke", colour);
        const node = line.node(), len = node.getTotalLength(), step = Math.max(len / 40, 6), flip = L.side === "l" ? -1 : 1;
        for (let d = step / 2; d < len; d += step) {
          const p = node.getPointAtLength(d), q = node.getPointAtLength(Math.min(d + 1, len));
          const rot = Math.atan2(q.y - p.y, q.x - p.x) * 180 / Math.PI;
          screenSized(g, p.x, p.y, rot).append("path").attr("d", `M-3,0L0,${4.5 * flip}L3,0Z`).style("fill", colour);
        }
        if (L.name && !ghost) {
          const at = L.labelAt ? projection(L.labelAt) : pts[Math.floor(pts.length / 2)];
          sceneText(screenSized(g, at[0], at[1]), [{ text: L.name, cls: "s-note" }], L.side === "l" ? "start" : "end").style("fill", d3.color(colour).darker(0.8));
        }
      } else if (L.type === "itinerary") {
        drawItinerary(g, L, colour);
      } else if (L.type === "route" || L.type === "arrow") {
        const pts = L.path.map((p) => projection(p));
        const path = g.append("path").attr("d", smooth(pts)).attr("class", L.type === "route" ? `s-route ${L.style || "dotted"}` : "s-arrow");
        const end = pts[pts.length - 1], prev = pts[pts.length - 2];
        if (L.type === "arrow") {
          path.style("stroke", L.fade ? fadeStroke(colour, pts[0], end) : colour);
          if (!L.fade) {
            const rot = Math.atan2(end[1] - prev[1], end[0] - prev[0]) * 180 / Math.PI;
            screenSized(g, end[0], end[1], rot).append("path").attr("d", "M2,0L-8,-5L-6,0L-8,5Z").style("fill", colour);
          }
        } else if (L.colour) path.style("stroke", L.colour);
        if (L.name) {
          const at = L.labelAt ? projection(L.labelAt) : pts[Math.floor(pts.length / 2)];
          sceneText(screenSized(g, at[0], at[1]), [{ text: L.name, cls: "s-note" }], L.side === "l" ? "end" : "start").style("fill", L.type === "arrow" ? d3.color(colour).darker(0.8) : null);
        }
      } else if (L.type === "label" && L.style === "medallion") {
        // the atlas's great-power initial in a ring (C, E, P on the Athens plate): an actor at overview scale
        const [x, y] = projection(L.at);
        const s = screenSized(g, x, y).attr("class", "sc s-medal");
        s.append("circle").attr("r", 11).style("stroke", colour);
        s.append("text").attr("dy", 4.5).attr("text-anchor", "middle").style("fill", colour).text(L.text);
      } else if (L.type === "label") {
        const [x, y] = projection(L.at);
        sceneText(screenSized(g, x, y), [{ text: L.text, cls: `s-${L.style || "note"}` }], "middle");
      } else if (L.type === "point") {
        const [x, y] = projection(L.at);
        const s = screenSized(g, x, y).attr("data-name", L.name);
        const sym = L.symbol || "city";
        if (sym === "capital") {
          s.append("circle").attr("r", 5.2).attr("class", "s-sym-o");
          s.append("circle").attr("r", 2.2).attr("class", "s-sym-f");
        } else {
          s.append("path").attr("d", SYMBOL_PATHS[sym]).attr("class", STROKED.has(sym) ? "s-sym-s" : "s-sym-f").style(STROKED.has(sym) ? "stroke" : "fill", L.colour || null);
        }
        const lines = [{ text: L.name + (L.year ? ` ${L.year}` : ""), cls: "s-name" }];
        for (const w of L.people || []) lines.push({ text: w, cls: "s-who" });
        if (L.note) lines.push({ text: L.note, cls: "s-who" });
        const t = sceneText(s, lines, L.side === "l" ? "end" : "start");
        if (L.dy) t.attr("transform", `translate(0,${L.dy})`);
      }
    }
  }

  /** The chapter whose map fits this moment, the timeline zoom and the folds: a big part when zoomed out or folded. */
  function focusAt(t) {
    const span = xs ? tlDomain()[1] - tlDomain()[0] : null;
    const open = new Set(M.openChapters(state.ds, isFolded));
    return M.focusChapter(state.ds, t, span, (c) => open.has(c) && !!M.sceneFor(SCENES, state.dsId, c));
  }

  /** Draw the focused chapter's scene, plus the areas of other chapters running at the same time, faintly. */
  function drawScene(t) {
    const ds = state.ds;
    const sel = state.selected && ds.byId.get(state.selected);
    const withScene = (c) => M.sceneFor(SCENES, state.dsId, c);
    const focus = sel && sel.kind === "chapter" && withScene(sel) ? sel : focusAt(t);
    // "Meanwhile" stories only: a part's own chapters, or the part above a chapter, are the same story at another scale
    const open = new Set(M.openChapters(ds, isFolded));
    const live = M.activeChapters(ds, t).filter((c) => withScene(c) && open.has(c));
    const ghosts = live
      .filter((c) => !focus || !(M.within(ds, focus, c) || M.within(ds, c, focus)))
      .filter((c) => !live.some((k) => k.parentId === c.id));
    const key = [state.dsId, focus && focus.id, ...ghosts.map((c) => c.id)].join("|");
    state.sceneT = t;
    if (key === sceneKey) { scaleScene(); return; }
    sceneKey = key;
    sceneLayer.selectAll("*").remove();
    sceneDefs.selectAll("linearGradient").remove();
    for (const c of ghosts) drawSceneLayers(sceneLayer.append("g").attr("class", "ghost").attr("data-ch", c.id), withScene(c).layers.filter((L) => L.type === "area"), true);
    if (focus) drawSceneLayers(sceneLayer.append("g").attr("class", "focus").attr("data-ch", focus.id), withScene(focus).layers, false);
    state.sceneFocus = focus ? focus.id : null;
    const cap = focus && withScene(focus).caption;
    $("#scene-cap").textContent = cap || "";
    $("#scene-cap").hidden = !cap;
    renderSceneKey(focus && withScene(focus));
    scaleScene();
  }

  // ---------------------------------------------------------------- colour key for the scene on the map
  const KEY_OPEN = "history.sceneKey.open";
  function keySwatch(colour, marks) {
    const area = marks.find((m) => m === "core" || m === "conquest" || m === "influence");
    let s = "";
    if (area === "core") s += `<rect x="1" y="2" width="12" height="9" rx="1.5" fill="${colour}" fill-opacity=".35" stroke="${colour}"/>`;
    if (area === "conquest") s += `<rect x="1" y="2" width="12" height="9" rx="1.5" fill="url(#k-${colour.slice(1)})" stroke="${colour}" stroke-dasharray="3 2"/>` +
      `<defs><pattern id="k-${colour.slice(1)}" width="4" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line y2="4" stroke="${colour}" stroke-width="1.6"/></pattern></defs>`;
    if (area === "influence") s += `<rect x="1" y="2" width="12" height="9" rx="1.5" fill="${colour}" fill-opacity=".12" stroke="${colour}" stroke-dasharray="1.5 2"/>`;
    const x0 = area ? 16 : 1;
    if (marks.includes("arrow")) s += `<path d="M${x0},6.5H${x0 + 9}" stroke="${colour}" stroke-width="2.4"/><path d="M${x0 + 13},6.5l-5,-3.4v6.8z" fill="${colour}"/>`;
    else if (marks.some((m) => m.startsWith("itinerary"))) s += `<path d="M${x0},6.5H${x0 + 9}" stroke="${colour}" stroke-width="3"${marks.includes("itinerary-dashed") && !marks.includes("itinerary") ? ' stroke-dasharray="4 2"' : ""}/><path d="M${x0 + 13},6.5l-5,-3.4v6.8z" fill="${colour}"/>`;
    else if (marks.includes("front")) s += `<path d="M${x0},5H${x0 + 13}" stroke="${colour}" stroke-width="1.6"/><path d="M${x0 + 1},5l2,4l2,-4M${x0 + 6},5l2,4l2,-4" fill="${colour}"/>`;
    else if (marks.includes("route")) s += `<path d="M${x0},6.5H${x0 + 13}" stroke="${colour}" stroke-width="2" stroke-dasharray="1.4 3" stroke-linecap="round"/>`;
    return `<svg width="32" height="13" aria-hidden="true">${s}</svg>`;
  }
  function renderSceneKey(scene) {
    const box = $("#scene-key");
    const rows = M.sceneKey(scene, (window.SCENE_ACTORS || {})[state.dsId]);
    if (!rows.length) { box.hidden = true; box.innerHTML = ""; return; }
    const open = localStorage.getItem(KEY_OPEN) !== "0";
    const tiers = new Set(rows.flatMap((r) => r.marks).filter((m) => m === "conquest" || m === "influence"));
    const ladder = M.sceneLadder(scene);
    const hasItin = rows.some((r) => r.marks.some((m) => m.startsWith("itinerary")));
    const group = (g, title) => {
      const rs = rows.filter((r) => r.group === g);
      return rs.length ? `<div class="sk-h">${title}</div>` + rs.map((r) => `<div class="sk-row">${keySwatch(r.colour, r.marks)}<span>${esc(r.label)}</span></div>`).join("") : "";
    };
    box.innerHTML = `<button class="sk-toggle" aria-expanded="${open}">Key ${open ? "▾" : "▸"}</button>` +
      (open ? `<div class="sk-body">${group("who", "Who")}${group("movement", "Routes and lines")}` +
        (tiers.size ? `<div class="sk-foot">solid: held${tiers.has("conquest") ? " · stripes: newly won" : ""}${tiers.has("influence") ? " · pale: influence" : ""}</div>` : "") +
        (ladder.length ? `<div class="sk-h">Growth</div><div class="sk-ladder">` + ladder.map((r) => `<span data-from="${esc(r.from)}" title="${esc(r.label)}">${esc(r.from.slice(0, 4))}</span>`).join(" → ") +
          `</div><div class="sk-foot">Each tier appears when the timeline reaches its date; older ground shows darker where tiers overlap.</div>` : "") +
        (hasItin ? `<div class="sk-foot">Campaign lines are numbered by leg and dated at each stop. Solid: marched by this date; faint: still to come.</div>` : "") +
        `<div class="sk-foot">An arrow takes the colour of whoever is moving.</div></div>` : "");
    box.hidden = false;
  }
  $("#scene-key").addEventListener("click", (ev) => {
    if (!ev.target.closest(".sk-toggle")) return;
    localStorage.setItem(KEY_OPEN, localStorage.getItem(KEY_OPEN) === "0" ? "1" : "0");
    const sc = state.sceneFocus && M.sceneFor(SCENES, state.dsId, state.ds.byId.get(state.sceneFocus));
    renderSceneKey(sc);
    scaleScene();
  });

  function scaleScene() {
    const k = state.mapK || 1, t = state.sceneT;
    sceneLayer.selectAll(".s-L").attr("display", (L) => (M.visibleAt(L, k) && M.liveAt(L, t) ? null : "none"));
    updateItineraries();
    $("#scene-key").querySelectorAll("[data-from]").forEach((el) => el.classList.toggle("on", !t || t >= M.dateStart(el.dataset.from)));
    sceneLayer.selectAll(".sc").attr("transform", (d) => `translate(${d.x},${d.y}) scale(${1 / k})${d.rot != null ? ` rotate(${d.rot})` : ""}`);
    sceneDefs.selectAll("pattern").attr("width", 7 / k).attr("height", 7 / k)
      .call((p) => p.select("line").attr("y2", 7 / k).attr("stroke-width", 2.2 / k));
  }

  /** Chapter text with its terms linked one move ahead: your note if it exists, else Wikipedia. ★ marks the ones worth asking about. */
  function richText(it) {
    const sc = it.kind === "chapter" && M.sceneFor(SCENES, state.dsId, it);
    if (!sc || !sc.terms) return esc(it.text);
    return M.linkTerms(it.text, sc.terms).map((r) => {
      if (!r.term) return esc(r.text);
      const ext = !r.term.note;
      return `<a class="term" data-link="term" href="${esc(M.termUrl(r.term))}"${ext ? ' target="_blank" rel="noopener"' : ""}${r.term.why ? ` title="${esc(r.term.why)}"` : ""}>${esc(r.text)}</a>` +
        (r.term.star ? `<span class="star" title="Worth asking about">★</span>` : "");
    }).join("");
  }

  function renderMapLegend() {
    const ds = state.ds;
    const legend = $("#map-legend");
    if (!ds.mapStates.length) { legend.innerHTML = ""; }
    else {
      const used = new Set();
      ds.mapStates.forEach((s) => Object.keys(s.status).forEach((k) => used.add(k)));
      legend.innerHTML = [...used].map((k) => `<span><i style="background:${sideColour(k)}"></i>${esc(k)}</span>`).join("") +
        `<span><i style="background:var(--land)"></i>neutral / other</span>`;
    }
    $("#map-note").textContent = ds.mapNote;
  }

  function colourMap(t) {
    const s = M.mapStateAt(state.ds, t);
    const fill = new Map();
    if (s) for (const [side, ids] of Object.entries(s.status)) for (const id of ids) fill.set(id, sideColour(side));
    countryPaths.style("fill", (f) => fill.get(+f.id) || null);
    $("#map-state").textContent = s ? s.label : "";
  }

  function renderPins(t) {
    const ds = state.ds;
    const w = M.nearWindow(tlDomain());
    const near = ds.events.filter((e) => e.at && e.t0 <= +t + w && e.t1 >= +t - w);
    const sel = state.selected && ds.byId.get(state.selected);
    if (sel && sel.kind === "event" && sel.at && !near.includes(sel)) near.push(sel);
    const g = pinLayer.selectAll("g.pin").data(near, (d) => d.id);
    g.exit().remove();
    const enter = g.enter().append("g").attr("class", "pin")
      .on("click", (ev, d) => { ev.stopPropagation(); select(d.id); })
      .on("mouseenter", (ev, d) => showTip(ev, `<b>${esc(d.title)}</b><br>${esc(itemWhen(d))}`))
      .on("mousemove", moveTip).on("mouseleave", hideTip);
    enter.append("circle");
    enter.append("text");
    pinLayer.selectAll("g.pin")
      .attr("data-id", (d) => d.id)
      .classed("sel", (d) => sel && d.id === sel.id)
      .attr("transform", (d) => `translate(${projection(d.at)})`)
      .each(function (d) {
        d3.select(this).select("circle").attr("fill", laneColour(d.lane));
        d3.select(this).select("text").text(d.title);
      });
    pinLayer.selectAll("g.pin.sel").raise();
    scalePins();
  }
  /** Place pin labels in screen space: selected first, then nearest in time; right side, else left, else hidden. */
  function scalePins() {
    const k = state.mapK, tr = d3.zoomTransform(mapSvg.node());
    pinLayer.selectAll("g.pin circle").attr("r", (d) => (state.selected === d.id ? 6 : 4.2) / k);
    const t = +state.cursor;
    const dist = (d) => Math.min(Math.abs(d.t0 - t), Math.abs(d.t1 - t), d.t0 <= t && d.t1 >= t ? 0 : Infinity);
    const pins = pinLayer.selectAll("g.pin").nodes().map((n) => {
      const d = d3.select(n).datum(), [x, y] = tr.apply(projection(d.at));
      return { n, d, x, y };
    });
    pins.sort((a, b) => (b.d.id === state.selected) - (a.d.id === state.selected) || dist(a.d) - dist(b.d));
    const dots = pins.map((p) => ({ x0: p.x - 5, x1: p.x + 5, y0: p.y - 5, y1: p.y + 5 }));
    // a pin sitting on a named scene point is already labelled by the scene
    const named = sceneLayer.selectAll(".focus .sc[data-name]").filter(function () { return !this.closest("[display=none]"); }).data().map((d) => tr.apply([d.x, d.y]));
    const near = (p) => named.some(([x, y]) => Math.hypot(x - p.x, y - p.y) < 9);
    // scene labels were placed first; pin labels give way to them (screen boxes converted to map viewBox units)
    const boxes = [];
    const inv = mapSvg.node().getScreenCTM && mapSvg.node().getScreenCTM();
    if (inv) {
      const m = inv.inverse();
      const toMap = (x, y) => { const q = new DOMPoint(x, y).matrixTransform(m); return [q.x, q.y]; };
      sceneLayer.selectAll(".focus text").each(function () {
        if (this.closest("[display=none]")) return;
        const r = this.getBoundingClientRect();
        if (!r.width) return;
        const [x0, y0] = toMap(r.left, r.top), [x1, y1] = toMap(r.right, r.bottom);
        boxes.push({ x0, x1, y0, y1 });
      });
    }
    const overlaps = (r, q) => r.x0 < q.x1 && r.x1 > q.x0 && r.y0 < q.y1 && r.y1 > q.y0;
    pins.forEach((p, i) => {
      const w = p.d.title.length * 6.2 + 4;
      const right = { x0: p.x + 7, x1: p.x + 7 + w, y0: p.y - 8, y1: p.y + 6 };
      const left = { x0: p.x - 7 - w, x1: p.x - 7, y0: p.y - 8, y1: p.y + 6 };
      const free = (r) => !boxes.some((q) => overlaps(r, q)) && !dots.some((q, j) => j !== i && overlaps(r, q));
      const side = near(p) ? null : free(right) ? "r" : free(left) ? "l" : p.d.id === state.selected ? "r" : null;
      if (side) boxes.push(side === "r" ? right : left);
      d3.select(p.n).classed("unlabelled", !side).select("text")
        .attr("display", side ? null : "none")
        .attr("text-anchor", side === "l" ? "end" : "start")
        .attr("x", (side === "l" ? -7 : 7) / k).attr("y", 4 / k).style("font-size", `${11 / k}px`).style("stroke-width", `${3 / k}px`);
    });
  }

  // ---------------------------------------------------------------- timeline
  const tlSvg = d3.select("#tl");
  const tlWrap = $("#tl-wrap");
  const GUTTER = 168, ROW = 17, PAD_R = 12;
  let tlW = 800, xs0 = null, xs = null, tlZoom = null;
  let cursorG = null, tlHeight = 0;

  const tlDomain = () => (xs ? xs.domain() : [state.ds.t0, state.ds.t1]);
  const tlScrollable = () => tlWrap.scrollHeight > tlWrap.clientHeight + 2;

  function setupTimeline(domain) {
    const ds = state.ds;
    tlW = Math.max(480, tlWrap.clientWidth);
    tlSvg.attr("width", tlW);
    xs0 = d3.scaleUtc().domain([ds.t0, ds.t1]).range([GUTTER, tlW - PAD_R]);
    xs = xs0.copy();
    tlZoom = d3.zoom()
      .scaleExtent([1, Math.max(2, (ds.t1 - ds.t0) / (20 * M.DAY))])
      .extent([[GUTTER, 0], [tlW - PAD_R, 1]])
      .translateExtent([[GUTTER, 0], [tlW - PAD_R, 1]])
      .clickDistance(4)
      .filter((ev) => (ev.type === "wheel" ? (ev.ctrlKey || ev.metaKey || !tlScrollable()) : !ev.button))
      .on("zoom", (ev) => {
        xs = ev.transform.rescaleX(xs0);
        renderTimeline();
        updateMasterZoom();
        if (state.cursor) { drawScene(state.cursor); renderPins(state.cursor); }
      });
    tlSvg.call(tlZoom).on("dblclick.zoom", null);
    tlSvg.call(tlZoom.transform, d3.zoomIdentity);
    if (domain) zoomToDomain(domain[0], domain[1], 0);
  }

  function zoomToDomain(a, b, duration = 700) {
    a = Math.max(+a, +state.ds.t0); b = Math.min(+b, +state.ds.t1);
    if (!(b > a)) return;
    const k = Math.max(1, (xs0.range()[1] - GUTTER) / (xs0(b) - xs0(a)));
    const t = d3.zoomIdentity.translate(GUTTER - k * xs0(a), 0).scale(k);
    if (duration) tlSvg.transition("tlzoom").duration(duration).call(tlZoom.transform, t);
    else tlSvg.call(tlZoom.transform, t);
  }

  /** Keep t visible; if it is off-screen, pan so it sits at `at` (0..1) across the window. */
  function keepInView(t, at = 0.3) {
    const [a, b] = tlDomain();
    if (t >= a && t <= b) return;
    const span = b - a;
    zoomToDomain(+t - span * at, +t - span * at + span, 0);
  }

  const labelWidth = (s) => String(s).length * 6.1 + 6;

  /** Greedy row assignment so that labels never overlap. Entries: {ref, t0, t1, label}. */
  function layoutRows(entries, maxRows, r = 4) {
    const W = tlW - PAD_R, ends = [], out = [];
    for (const en of entries) {
      const x0 = xs(en.t0), x1 = Math.max(xs(en.t1), x0);
      if (x1 < GUTTER || x0 > W) continue;
      const vx0 = Math.max(x0, GUTTER), vx1 = Math.min(x1, W);
      const isSpan = x1 - x0 > 3;
      const lw = labelWidth(en.label);
      let inside = isSpan && vx1 - vx0 >= lw + 6, lx, anchor = "start", o0, o1;
      if (inside) { lx = vx0 + 4; o0 = vx0; o1 = vx1; }
      else {
        const right = (isSpan ? vx1 : x0) + r + 3;
        if (right + lw <= W) { lx = right; o0 = vx0 - r; o1 = right + lw; }
        else { anchor = "end"; lx = vx0 - r - 3; o0 = lx - lw; o1 = vx1 + r; }
      }
      let row = ends.findIndex((e) => e < o0 - 3), showLabel = true;
      if (row === -1) {
        if (ends.length < maxRows) { row = ends.length; ends.push(-Infinity); }
        else {
          // Out of rows: try again without the label. Spans that still don't fit open a new
          // row (keeping their label) so bars never sit on top of each other; dots may overlap.
          const b0 = vx0 - r, b1 = vx1 + r;
          row = ends.findIndex((e) => e < b0);
          if (row !== -1) { showLabel = false; inside = false; o0 = b0; o1 = b1; }
          else if (isSpan) { row = ends.length; ends.push(-Infinity); }
          else { showLabel = false; inside = false; o0 = b0; o1 = b1; row = ends.length - 1; }
        }
      }
      ends[row] = Math.max(ends[row], o1);
      out.push({ en, row, x0, vx0, vx1, isSpan, inside, lx, anchor, showLabel });
    }
    return { out, rows: Math.max(1, ends.length) };
  }

  function drawEntries(g, laid, y0, opts = {}) {
    const h = opts.h || 10;
    for (const d of laid.out) {
      const it = d.en.ref;
      const cy = y0 + d.row * ROW + ROW / 2;
      const gi = g.append("g").datum(it)
        .attr("class", `item ${opts.cls || ""} ${it.kind}`)
        .attr("data-id", it.id)
        .classed("approx", !!it.approx)
        .classed("sel", it.id === state.selected)
        .on("click", (ev) => { ev.stopPropagation(); select(it.id); })
        .on("mouseenter", (ev) => showTip(ev, `<b>${esc(itemName(it))}</b><br>${esc(itemWhen(it))}${it.country ? " · " + esc(it.country) : ""}`))
        .on("mousemove", moveTip).on("mouseleave", hideTip);
      const fill = opts.fill ? opts.fill(it) : itemColour(it);
      if (d.isSpan || opts.alwaysBar) {
        gi.append("rect").attr("x", d.vx0).attr("y", cy - h / 2).attr("width", Math.max(2, d.vx1 - d.vx0))
          .attr("height", h).attr("rx", 2).attr("fill", fill);
      } else {
        gi.append("circle").attr("cx", d.x0).attr("cy", cy).attr("r", 4).attr("fill", fill);
      }
      if (d.showLabel) {
        const tx = gi.append("text").attr("x", d.lx).attr("y", cy + 4).attr("text-anchor", d.anchor)
          .attr("class", d.inside && !opts.darkText && !it.approx ? "in" : null);
        if (d.en.twisty) {
          twisty(tx.append("tspan"), it, d.en.twisty);
          tx.append("tspan").text(" " + d.en.text);
        } else tx.text(d.en.label);
      } else if (d.en.twisty && d.vx1 - d.vx0 >= 12) {
        twisty(gi.append("text").attr("x", d.vx0 + 3).attr("y", cy + 4), it, d.en.twisty);
      }
    }
  }

  // ---------------------------------------------------------------- folding chapters (▾ open, ▸ folded)
  const FOLD_KEY = "history.folds.v1", AUTO_FOLD_PX = 70;
  function loadFolds() {
    try { return JSON.parse(localStorage.getItem(FOLD_KEY)) || {}; } catch (e) { return {}; }
  }
  /** Folded if you said so; otherwise folded automatically while the part is too narrow on screen to hold its children. */
  function isFolded(c) {
    if (!c.children || !c.children.length) return false;
    const pref = (loadFolds()[state.dsId] || {})[c.id];
    if (pref != null) return pref;
    return !!xs && xs(c.t1) - xs(c.t0) < AUTO_FOLD_PX;
  }
  function setFold(id, folded) {
    const all = loadFolds();
    all[state.dsId] = Object.assign(all[state.dsId] || {}, { [id]: folded });
    localStorage.setItem(FOLD_KEY, JSON.stringify(all));
  }
  function setAllFolds(folded) {
    const all = loadFolds();
    all[state.dsId] = {};
    for (const c of state.ds.chapters) if (c.children.length) all[state.dsId][c.id] = folded;
    localStorage.setItem(FOLD_KEY, JSON.stringify(all));
    refold();
  }
  function refold() {
    renderTimeline();
    if (state.cursor) { drawScene(state.cursor); renderPanel(); }
  }
  /** Open every part above a chapter, so selecting it never leaves it hidden. */
  function unfoldTo(c) {
    for (const p of M.ancestors(state.ds, c)) if (isFolded(p)) setFold(p.id, false);
  }
  function twisty(el, c, glyph) {
    return el.attr("class", "twisty").attr("data-twisty", c.id).text(glyph)
      .on("click", (ev) => { ev.stopPropagation(); setFold(c.id, !isFolded(c)); refold(); hideTip(); });
  }

  function renderTimeline() {
    const ds = state.ds;
    tlSvg.selectAll("g.root, defs").remove();
    const defs = tlSvg.append("defs");
    defs.append("clipPath").attr("id", "tl-clip").append("rect").attr("x", GUTTER).attr("y", 0).attr("width", tlW - GUTTER).attr("height", 5000);
    const root = tlSvg.append("g").attr("class", "root");
    const bg = root.append("g"), labels = root.append("g"), body = root.append("g").attr("clip-path", "url(#tl-clip)");
    const W = tlW - PAD_R;

    // Axis
    const axisY = 22;
    const nTicks = Math.max(3, Math.floor((W - GUTTER) / 95));
    const axis = d3.axisTop(xs).tickSizeOuter(0).tickSize(4);
    const [d0, d1] = xs.domain();
    if (d0.getUTCFullYear() <= 0 && d1 - d0 > 4 * 365 * M.DAY) {
      // BC on the axis: round years in the historian's numbering (300 BC, 200 BC, 100 BC, AD 1, 100), not JavaScript's
      // astronomical ones, which would land on 301 BC and 201 BC.
      const yrs = (d1 - d0) / (365.25 * M.DAY), raw = yrs / nTicks;
      const step = [1, 2, 5, 10, 20, 25, 50, 100, 200, 250, 500, 1000].find((s) => s >= raw) || 1000;
      const Y0 = d0.getUTCFullYear(), h0 = Math.ceil((Y0 <= 0 ? Y0 - 1 : Y0) / step) * step;
      const ticks = [];
      for (let h = h0; ticks.length < 60; h += step) {
        const t = M.parseDate(h === 0 ? "0001" : (h < 0 ? "-" : "") + String(Math.abs(h)).padStart(4, "0") + "-01-01");
        if (t > d1) break;
        if (t >= d0) ticks.push(t);
      }
      axis.tickValues(ticks).tickFormat((d) => { const Y = d.getUTCFullYear(); return Y <= 0 ? `${1 - Y} BC` : Y < 1000 ? `AD ${Y}` : String(Y); });
    } else {
      const tf = xs.tickFormat(nTicks);
      axis.ticks(nTicks).tickFormat((d) => (d.getUTCFullYear() <= 0 && /^-?\d+$/.test(tf(d)) ? M.fmtYear(d.getUTCFullYear()) : tf(d).replace(/^0+(?=\d)/, "")));
    }
    root.append("g").attr("class", "axis").attr("transform", `translate(0,${axisY})`).call(axis);
    labels.append("text").attr("class", "hint").attr("x", 8).attr("y", 14).text("drag to pan · Ctrl+wheel to zoom");
    let y = axisY + 8;

    const section = (title) => {
      labels.append("text").attr("class", "sec-label").attr("x", 8).attr("y", y + 11).text(title);
      y += 15;
    };
    const lane = (label, colour, laid, draw, idx) => {
      const hgt = laid.rows * ROW + 6;
      bg.append("rect").attr("class", `lane-bg${idx % 2 ? " alt" : ""}`).attr("x", 0).attr("y", y).attr("width", tlW).attr("height", hgt);
      if (colour) labels.append("rect").attr("x", 8).attr("y", y + 6).attr("width", 4).attr("height", hgt - 12).attr("rx", 2).attr("fill", colour);
      labels.append("text").attr("class", colour ? "lane-label" : "sub-label").attr("x", colour ? 18 : 12).attr("y", y + 15).text(label);
      draw(y + 3);
      y += hgt;
    };

    // Chapters: one lane per level of the chapter tree. Parts with children carry a ▾/▸ to fold them.
    section("Chapters");
    if (ds.chapters.some((c) => c.children.length)) {
      labels.append("text").attr("class", "fold-all").attr("data-fold-all", "open").attr("x", 76).attr("y", y - 4).text("▾ open all")
        .on("click", (ev) => { ev.stopPropagation(); setAllFolds(false); });
      labels.append("text").attr("class", "fold-all").attr("data-fold-all", "fold").attr("x", 126).attr("y", y - 4).text("▸ fold")
        .on("click", (ev) => { ev.stopPropagation(); setAllFolds(true); });
    }
    const open = M.openChapters(ds, isFolded);
    const maxDepth = Math.max(0, ...open.map((c) => c.depth));
    const depthName = (d) => (maxDepth === 0 ? "click to zoom" : ["Parts", "Chapters", "Details"][d] || `Level ${d + 1}`);
    for (let d = 0; d <= maxDepth; d++) {
      const chEntries = open.filter((c) => c.depth === d).sort((a, b) => a.t0 - b.t0).map((c) => {
        const twisty = c.children.length ? (isFolded(c) ? "▸" : "▾") : null;
        const label = c.title + (twisty === "▸" ? ` · ${c.children.length}` : "");
        return { ref: c, t0: c.t0, t1: c.t1, label: twisty ? `${twisty} ${label}` : label, twisty, text: label };
      });
      const chLaid = layoutRows(chEntries, 4);
      lane(depthName(d), null, chLaid, (y0) => drawEntries(body, chLaid, y0, { cls: `chapter depth-${d}`, h: 14, alwaysBar: true, darkText: true, fill: () => null }), d);
    }

    // Event lanes
    section("Events");
    ds.lanes.forEach((ln, i) => {
      const entries = ds.events.filter((e) => e.lane === ln.id).map((e) => ({ ref: e, t0: e.t0, t1: e.t1, label: e.title }));
      const laid = layoutRows(entries, 6);
      lane(ln.label, laneColour(ln.id), laid, (y0) => drawEntries(body, laid, y0), i);
    });

    // Leaders, grouped into rows by `row` or country
    section("In power");
    const groups = new Map();
    for (const l of ds.leaders) {
      const key = l.row || l.country;
      if (!groups.has(key)) groups.set(key, []);
      for (const r of l.terms) groups.get(key).push({ ref: l, t0: r.t0, t1: r.t1, label: l.name });
    }
    let gi = 0;
    for (const [key, entries] of groups) {
      entries.sort((a, b) => a.t0 - b.t0);
      if (!entries.some((e) => e.t1 >= tlDomain()[0] && e.t0 <= tlDomain()[1])) continue;
      const laid = layoutRows(entries, 2, 0);
      lane(key, null, laid, (y0) => drawEntries(body, laid, y0, { alwaysBar: true, h: 12 }), gi++);
    }

    // Books
    section("Books");
    const bkEntries = ds.books.slice().sort((a, b) => a.t0 - b.t0 || b.t1 - a.t1)
      .map((b) => ({ ref: b, t0: b.t0, t1: b.t1, label: b.amits ? `✎ ${b.title} (Amit's fiction)` : `${b.title}${b.fiction ? " (fiction)" : ""}${b.owned ? " ✓" : ""}` }));
    const bkLaid = layoutRows(bkEntries, 10);
    lane("Reading", null, bkLaid, (y0) => drawEntries(body, bkLaid, y0, { alwaysBar: true, h: 11 }), 1);

    // Family (browser-only data)
    section("Family");
    const fam = loadFamily();
    FAMILY.forEach((m, i) => {
      const rec = fam[m.id] || {};
      const yy = y;
      bg.append("rect").attr("class", `lane-bg${i % 2 ? " alt" : ""}`).attr("x", 0).attr("y", yy).attr("width", tlW).attr("height", ROW + 6);
      labels.append("text").attr("class", "sub-label family-label").attr("x", 12).attr("y", yy + 15)
        .attr("data-family", m.id).style("cursor", "pointer").text(`${m.label} ✎`)
        .on("click", (ev) => { ev.stopPropagation(); editFamily(m); });
      if (rec.born) {
        const a = M.parseDate(String(rec.born)), b = rec.died ? M.parseDate(String(rec.died)) : new Date();
        const x0 = Math.max(GUTTER, xs(a)), x1 = Math.min(W, xs(b));
        if (x1 > GUTTER && x0 < W) {
          body.append("rect").attr("class", "family-bar").attr("data-family", m.id).attr("x", x0).attr("y", yy + 6)
            .attr("width", Math.max(2, x1 - x0)).attr("height", 11).attr("rx", 2).attr("fill", "#9c8a6a");
          body.append("text").attr("x", x0 + 4).attr("y", yy + 15).attr("fill", "#fff").style("font-size", "11px").text(`${rec.born}–${rec.died || ""}`);
        } else {
          body.append("text").attr("class", "sub-label").attr("x", GUTTER + 8).attr("y", yy + 15)
            .text(xs(a) > W ? `born ${rec.born}, after this window →` : `${rec.born}–${rec.died}, before this window`);
        }
      } else {
        body.append("text").attr("class", "family-add").attr("data-family-add", m.id).attr("x", GUTTER + 8).attr("y", yy + 15)
          .text("add birth year").on("click", (ev) => { ev.stopPropagation(); editFamily(m); });
      }
      y += ROW + 6;
    });
    y += 10;

    bg.insert("rect", ":first-child").attr("class", "gutter-bg").attr("x", 0).attr("y", 0).attr("width", GUTTER - 4).attr("height", y);
    tlHeight = y;
    tlSvg.attr("height", y);

    cursorG = root.append("g").attr("class", "cursor-g");
    cursorG.append("rect").attr("class", "near-band");
    cursorG.append("line").attr("class", "cursor");
    cursorG.append("text").attr("class", "cursor-label").attr("y", 10);
    updateCursorVisual();
  }

  function updateCursorVisual() {
    if (!cursorG || !state.cursor) return;
    const x = xs(state.cursor), W = tlW - PAD_R, vis = x >= GUTTER && x <= W;
    const w = M.nearWindow(tlDomain());
    const b0 = Math.max(GUTTER, xs(+state.cursor - w)), b1 = Math.min(W, xs(+state.cursor + w));
    cursorG.select(".near-band").attr("x", b0).attr("y", 24).attr("width", Math.max(0, b1 - b0)).attr("height", tlHeight - 24).attr("display", vis ? null : "none");
    cursorG.select("line").attr("x1", x).attr("x2", x).attr("y1", 24).attr("y2", tlHeight).classed("pinned", state.pinned).attr("display", vis ? null : "none");
    const label = fmtCursor(state.cursor);
    cursorG.select("text").attr("x", x > W - 90 ? x - 4 : x + 4).attr("text-anchor", x > W - 90 ? "end" : "start")
      .text(label + (state.pinned ? " 📌" : "")).attr("display", vis ? null : "none");
    // Fade year ticks that would sit under the cursor's date label.
    const lw = (label.length + 3) * 6.4, end = x > W - 90;
    const lx0 = vis ? (end ? x - 4 - lw : x - 2) : -1, lx1 = vis ? (end ? x + 2 : x + 4 + lw) : -1;
    tlSvg.selectAll(".axis .tick text").style("opacity", function () {
      const r = this.getBBox(), m = this.parentNode.transform.baseVal.consolidate();
      const cx = (m ? m.matrix.e : 0) + r.x;
      return cx + r.width > lx0 && cx < lx1 ? 0 : null;
    });
    const ac = state.ds.chapters.filter((c) => c.t0 <= state.cursor && c.t1 >= state.cursor).map((c) => c.id);
    tlSvg.selectAll("g.item.chapter").classed("active", (d) => ac.includes(d.id));
  }

  // Hover and click on the timeline background.
  function timeAt(ev) {
    const [mx] = d3.pointer(ev, tlSvg.node());
    if (mx < GUTTER || mx > tlW - PAD_R) return null;
    return xs.invert(mx);
  }
  tlSvg.on("mousemove", (ev) => {
    if (state.pinned || state.playing) return;
    const t = timeAt(ev);
    if (t) setCursor(t, { hover: true });
  });
  tlSvg.on("click", (ev) => {
    const t = timeAt(ev);
    if (!t) return;
    if (state.pinned && Math.abs(xs(t) - xs(state.cursor)) < 6) { state.pinned = false; updateCursorVisual(); scheduleHash(); return; }
    state.pinned = true;
    setCursor(t);
  });

  // ---------------------------------------------------------------- family
  function editFamily(m) {
    const fam = loadFamily();
    const rec = fam[m.id] || {};
    const born = window.prompt(`Birth year for ${m.label} (blank to clear). Kept in this browser only.`, rec.born || "");
    if (born === null) return;
    if (!born.trim()) { delete fam[m.id]; saveFamily(fam); renderTimeline(); renderPanel(); return; }
    if (!/^\d{4}$/.test(born.trim())) { window.alert("Please enter a four-digit year."); return; }
    let died = rec.died || "";
    if (m.id !== "self") {
      const d = window.prompt(`Year of death for ${m.label} (blank if living)`, died);
      if (d === null) return;
      died = /^\d{4}$/.test(d.trim()) ? d.trim() : "";
    }
    fam[m.id] = { born: born.trim() };
    if (died) fam[m.id].died = died;
    saveFamily(fam);
    renderTimeline(); renderPanel();
  }

  function familyLine(m, rec, t) {
    const y = t.getUTCFullYear(), b = +rec.born, d = rec.died ? +rec.died : null;
    if (y < b) return `born ${b - y} years later`;
    if (d && y > d) return `died ${y - d} years earlier`;
    return `age ${y - b}`;
  }

  // ---------------------------------------------------------------- panel and card
  function itemLink(it, extra = "") {
    return `<a class="it" href="#" data-id="${esc(it.id)}">${esc(itemName(it))}</a>${extra}`;
  }

  /** A plate as a picture, not a button: thumbnail, title, and where it goes. */
  function plateTile(p) {
    return `<a class="plate-tile" data-link="plate" data-plate="${esc(p.id)}" href="${esc(M.plateUrl(p.id))}">` +
      `<img src="plates/${esc(p.id)}.jpg" alt="" loading="lazy" onerror="this.remove()">` +
      `<span class="pt-k">Atlas plate</span><span class="pt-t">${esc(p.title)}</span><span class="pt-go">Open the map →</span></a>`;
  }

  function renderPanel() {
    const ds = state.ds, t = state.cursor;
    if (!t) return;
    const w = M.nearWindow(tlDomain());
    const groups = M.nearbyEvents(ds, t, w);
    const leaders = M.activeLeaders(ds, t);
    const chapters = M.activeChapters(ds, t);
    const fam = loadFamily();
    const span = w > 300 * M.DAY ? `±${Math.round(w / (365.25 * M.DAY))} yr` : w > 45 * M.DAY ? `±${Math.round(w / (30.4 * M.DAY))} months` : `±${Math.round(w / M.DAY)} days`;
    let h = `<h2 id="cursor-date">${esc(fmtCursor(t))}</h2><div class="when">${state.pinned ? "Pinned. Click the timeline again to let go." : "Hover the timeline, or click to pin."} Showing ${span}.</div>`;
    if (chapters.length) {
      // the selected chapter, else the one whose map is showing, tells the story of this moment
      const picked = state.selected && chapters.find((c) => c.id === state.selected && c.text);
      const shown = focusAt(t);
      const now = picked || (shown && shown.text ? shown : null) || chapters.filter((c) => c.text).sort((a, b) => (a.t1 - a.t0) - (b.t1 - b.t0))[0];
      if (now) h += `<div class="now" id="now"><div class="now-h">Now · <a class="it" href="#" data-id="${esc(now.id)}">${esc(now.title)}</a></div><p>${richText(now)}</p></div>`;
      const plates = (ds.plates || []).filter((p) => t >= p.t0 && t <= p.t1);
      if (plates.length) h += `<div class="plate-tiles" id="panel-plates">${plates.map(plateTile).join("")}</div>`;
      h += `<h3>Chapter</h3><div>${chapters.map((c) => `<span class="chip${c === now ? " on" : ""}" data-id="${esc(c.id)}">${esc(c.title)}</span>`).join("")}</div>`;
    }
    h += `<h3>Meanwhile</h3><div id="meanwhile-groups">`;
    for (const g of groups) {
      const ln = ds.lanes.find((l) => l.id === g.lane);
      h += `<div class="lane-h" data-lane="${esc(g.lane)}"><span class="sw" style="background:${laneColour(g.lane)}"></span>${esc(ln.label)}</div><ul>`;
      h += g.events.length ? g.events.map((e) => `<li data-event="${esc(e.id)}">${itemLink(e, `<span class="d">${esc(itemWhen(e))}</span>`)}</li>`).join("")
        : `<li class="empty">nothing recorded</li>`;
      h += `</ul>`;
    }
    h += `</div><h3>In power</h3><ul id="in-power">`;
    h += leaders.length ? leaders.map((l) => `<li data-leader="${esc(l.id)}">${itemLink(l, `<span class="d">${esc(l.country)}</span>`)}</li>`).join("") : `<li class="empty">nobody recorded</li>`;
    h += `</ul>`;
    const famLines = FAMILY.filter((m) => fam[m.id] && fam[m.id].born).map((m) => `<li data-family-age="${m.id}">${esc(m.label)}: <b>${esc(familyLine(m, fam[m.id], t))}</b></li>`);
    h += `<h3>Family</h3><ul>${famLines.length ? famLines.join("") : `<li class="empty">Add birth years in the Family row of the timeline.</li>`}</ul>`;
    $("#meanwhile").innerHTML = h;
  }

  function renderCard() {
    renderStatus();
    const card = $("#card");
    const it = state.selected && state.ds.byId.get(state.selected);
    if (!it) { card.hidden = true; card.innerHTML = ""; return; }
    const ds = state.ds;
    const kindLabel = { event: ds.lanes.find((l) => l.id === it.lane)?.label || "Event", leader: `In power · ${it.country}`, chapter: it.kind === "chapter" && it.children.length && !it.depth ? "Part" : "Chapter", book: it.amits ? "Amit's Fiction" : it.fiction ? "Book · fiction" : "Book" }[it.kind];
    let h = `<button class="close" title="Close (Esc)" aria-label="Close">×</button><div class="kind">${esc(kindLabel)}</div><h2>${esc(itemName(it))}</h2>`;
    h += `<div class="when" id="card-when">${esc(itemWhen(it))}</div>`;
    if (it.kind === "chapter") {
      const up = M.ancestors(ds, it).reverse();
      if (up.length) h = h.replace(`<div class="kind">`, `<div class="crumbs" id="card-crumbs">${up.map((p) => itemLink(p)).join(" › ")} ›</div><div class="kind">`);
    }
    if (it.approx) h += `<div class="when">Dates are approximate.</div>`;
    if (it.kind === "leader" && it.born && it.died) h += `<div class="when">Lived ${esc(M.fmtRange(it.born, it.died))}</div>`;
    if (it.kind === "leader" && it.lifeUnknown) h += `<div class="when">Birth and death dates are not known.</div>`;
    if (it.kind === "book") {
      h += `<p>${esc(it.author)}${it.amits ? '<span class="tag amits">Amit\'s fiction</span>' : ""}${it.owned ? '<span class="tag own">in Calibre</span>' : ""}${it.canadian ? '<span class="tag">Canadian</span>' : ""}${it.fiction && !it.amits ? '<span class="tag">fiction</span>' : ""}</p>`;
    }
    if (it.kind === "event" && ds.lanes.find((l) => l.id === it.lane)?.fiction) h += `<p><span class="tag amits">from Amit's novel, not history</span></p>`;
    const aha = M.ahaLinks(it);
    if (aha.length) h += `<p class="aha">${aha.map((a) => `<a data-link="aha" href="${esc(a.href)}"><span>✦</span> ${esc(a.label)}${a.heading ? ` · ${esc(a.heading)}` : ""}</a>`).join(" ")}</p>`;
    if (it.text) h += `<p>${richText(it)}</p>`;
    if (it.kind === "chapter" && it.children.length) {
      h += `<h3>Inside this part</h3><ul class="kids" id="card-kids">${it.children.map((k) => ds.byId.get(k)).map((k) =>
        `<li>${itemLink(k)} <span class="d">${esc(itemWhen(k))}${k.children.length ? ` · ${k.children.length} more inside` : ""}</span></li>`).join("")}</ul>`;
    }
    const allLinks = M.linksFor(ds, it);
    const plateLinks = allLinks.filter((l) => l.kind === "plate");
    if (plateLinks.length) {
      const ps = plateLinks.map((l) => (ds.plates || []).find((p) => l.href === M.plateUrl(p.id))).filter(Boolean);
      h += `<div class="plate-tiles" id="card-plates">${ps.map(plateTile).join("")}</div>`;
    }
    const links = allLinks.filter((l) => l.kind !== "plate");
    h += `<div class="links">`;
    for (const l of links) {
      const ext = l.kind === "wiki" || l.kind === "library";
      h += `<a class="${l.kind}" data-link="${l.kind}" href="${esc(l.href)}"${ext ? ' target="_blank" rel="noopener"' : ""}>${esc(l.label)}${ext ? " ↗" : ""}</a>`;
    }
    if (it.kind === "chapter") h += `<button data-zoom="${esc(it.id)}">Zoom here</button>`;
    h += `<button id="copy-link" title="Copy a link to this moment, for an Obsidian note">Copy link</button><span class="copied" id="copied"></span></div>`;
    const sc = it.kind === "chapter" && M.sceneFor(SCENES, state.dsId, it);
    if (sc && sc.terms && sc.terms.length) {
      const terms = [...sc.terms].sort((a, b) => !!b.star - !!a.star);
      h += `<h3>One move ahead</h3><ul class="terms" id="card-terms">${terms.map((tm) => {
        const ext = !tm.note;
        return `<li${tm.star ? ' class="starred"' : ""}><a data-link="term" href="${esc(M.termUrl(tm))}"${ext ? ' target="_blank" rel="noopener"' : ""}>${esc(tm.t)}${ext ? " ↗" : ""}</a>` +
          (tm.why ? ` <span class="d">${esc(tm.why)}</span>` : "") +
          (tm.star ? `<div class="ask">★ ${esc(tm.star)} <button class="copy-ask" data-ask="${esc(tm.star)}" title="Copy this question to ask Copilot">Copy question</button></div>` : "") + `</li>`;
      }).join("")}</ul>`;
    }
    const books = M.booksFor(ds, it);
    if (books.length) {
      h += `<h3>Reading</h3><ul class="books">${books.map((b) => {
        const bl = M.linksFor(ds, b).filter((l) => l.kind !== "note")[0];
        return `<li>${itemLink(b)} <span class="d">${esc(b.author)}</span>${b.owned ? '<span class="tag own">owned</span>' : ""}` +
          (bl ? ` <a class="d" data-link="${bl.kind}" href="${esc(bl.href)}"${bl.kind === "library" ? ' target="_blank" rel="noopener"' : ""}>${bl.kind === "calibre" ? "open" : "library ↗"}</a>` : "") + `</li>`;
      }).join("")}</ul>`;
    }
    const mine = M.fictionFor(ds, it);
    if (mine.length) {
      const fic = M.ficTarget(ds, it);
      h += `<h3>Amit's Fiction</h3><ul class="books amits">${mine.map((b) => {
        const href = fic && (!fic.work || fic.work.id === b.id) ? M.obsidianUrl(fic.note, fic.heading) : M.obsidianUrl(b.note, b.heading);
        const where = fic && fic.heading && (!fic.work || fic.work.id === b.id) ? ` <span class="d">· ${esc(fic.heading)}</span>` : "";
        return `<li data-amits="${esc(b.id)}">✎ ${itemLink(b)}${where} <a class="d" data-link="fiction" href="${esc(href)}">open notes</a></li>`;
      }).join("")}</ul>`;
    }
    card.innerHTML = h;
    card.hidden = false;
    card.style.borderLeftColor = itemColour(it) || "var(--accent)";
  }

  // Delegated clicks in the panel
  $("#panel").addEventListener("click", async (ev) => {
    const a = ev.target.closest("[data-id]");
    if (a && !ev.target.closest("[data-link]")) { ev.preventDefault(); select(a.getAttribute("data-id")); return; }
    if (ev.target.closest(".close")) { clearSelection(); return; }
    const z = ev.target.closest("[data-zoom]");
    if (z) { zoomChapter(z.getAttribute("data-zoom")); return; }
    const ask = ev.target.closest("[data-ask]");
    if (ask) {
      const q = ask.getAttribute("data-ask");
      try { await navigator.clipboard.writeText(q); ask.textContent = "Copied"; } catch (e) { window.prompt("Copy this question:", q); }
      return;
    }
    if (ev.target.id === "copy-link") {
      const url = location.href.split("#")[0] + M.formatHash(state.dsId, state.cursor, state.selected);
      let ok = false;
      try { await navigator.clipboard.writeText(url); ok = true; } catch (e) { ok = false; }
      if (!ok) window.prompt("Copy this link:", url);
      $("#copied").textContent = ok ? "copied" : "";
    }
  });

  // ---------------------------------------------------------------- state changes
  function setCursor(t, opts = {}) {
    const ds = state.ds;
    t = new Date(Math.min(+ds.t1, Math.max(+ds.t0, +t)));
    state.cursor = t;
    updateCursorVisual();
    updateMasterCursor();
    colourMap(t);
    drawWorldUnderlay(t);
    drawScene(t);
    renderPins(t);
    renderPanel();
    if (state.follow && (state.playing || opts.scrub)) followChapter(t);
    if (!opts.hover) scheduleHash();
  }

  function followChapter(t) {
    const ch = focusAt(t) || M.activeChapter(state.ds, t);
    const id = ch ? ch.id : null;
    if (id === state.followed) return;
    state.followed = id;
    drawChapterBox(ch);
    if (ch) flyToBBox(viewBox(ch)); else flyWorld();
  }

  function zoomChapter(id) {
    const ch = state.ds.byId.get(id);
    if (!ch) return;
    const pad = Math.max((ch.t1 - ch.t0) * 0.08, 20 * M.DAY);
    zoomToDomain(+ch.t0 - pad, +ch.t1 + pad);
    drawChapterBox(ch);
    flyToBBox(viewBox(ch));
    state.followed = ch.id;
    if (!state.cursor || state.cursor < ch.t0 || state.cursor > ch.t1) setCursor(ch.t0);
  }

  function select(id, opts = {}) {
    const it = state.ds.byId.get(id);
    if (!it) return;
    state.selected = id;
    state.pinned = true;
    let t = it.t0;
    if (it.kind === "leader" && state.cursor && it.terms.some((r) => r.t0 <= state.cursor && r.t1 >= state.cursor)) t = state.cursor;
    if (opts.keepCursor && state.cursor) t = state.cursor;
    if (it.kind === "chapter") { unfoldTo(it); zoomChapter(id); }
    else keepInView(t);
    tlSvg.selectAll("g.item").classed("sel", (d) => d && d.id === id);
    setCursor(t);
    renderCard();
    if (it.kind === "event" && it.at) panToPoint(it.at);
    hideTip();
  }

  function clearSelection() {
    state.selected = null;
    state.pinned = false;
    tlSvg.selectAll("g.item").classed("sel", false);
    renderCard();
    if (state.cursor) { drawScene(state.cursor); renderPins(state.cursor); updateCursorVisual(); renderPanel(); }
    scheduleHash();
  }

  // ---------------------------------------------------------------- address
  let hashTimer = null, writingHash = false;
  function scheduleHash() {
    clearTimeout(hashTimer);
    hashTimer = setTimeout(writeHash, 200);
  }
  function writeHash() {
    if (!state.cursor) return;
    const h = M.formatHash(state.dsId, state.cursor, state.selected, state.tour ? { tour: state.tour.id, stop: state.tourStop } : null);
    if (location.hash !== h) {
      writingHash = true;
      history.replaceState(null, "", h);
      writingHash = false;
    }
  }
  function applyHash() {
    const p = M.parseHash(location.hash, window.DATASETS, DEFAULT_DS);
    if (p.dataset !== state.dsId) loadDataset(p.dataset, { cursor: p.date, quiet: true });
    const item = p.item && state.ds.byId.get(p.item);
    state.selected = item ? item.id : null;
    state.pinned = !!(item || /^#[^/]+\/[^/]+/.test(location.hash));
    if (item && item.kind === "chapter") zoomChapter(item.id);
    else keepInView(p.date, 0.5);
    tlSvg.selectAll("g.item").classed("sel", (d) => d && d.id === state.selected);
    setCursor(p.date);
    renderCard();
    if (p.query && p.query.tour && window.TOURS && window.TOURS[p.query.tour]) { state.tour = window.TOURS[p.query.tour]; state.tourStop = Math.max(0, Math.min(+p.query.stop || 0, state.tour.stops.length)); renderTourCard(); }
    else if (!state.tour) renderTourCard();
    if (item && item.kind === "event" && item.at) panToPoint(item.at);
  }
  window.addEventListener("hashchange", () => { if (!writingHash) applyHash(); });

  // ---------------------------------------------------------------- play
  let lastFrame = null;
  function setPlaying(on) {
    state.playing = on;
    $("#play").textContent = on ? "❚❚ Pause" : "▶ Play";
    if (on) {
      if (+state.cursor >= +state.ds.t1) setCursor(state.ds.t0);
      state.followed = undefined;
      lastFrame = null;
      requestAnimationFrame(tick);
    }
  }
  function tick(ts) {
    if (!state.playing) return;
    if (lastFrame != null) {
      const speed = +$("#speed").value;
      const perMs = (state.ds.t1 - state.ds.t0) / 120000 * speed; // the whole period in two minutes at 1×
      const next = new Date(+state.cursor + perMs * Math.min(100, ts - lastFrame));
      const [a, b] = tlDomain();
      if (next > b) zoomToDomain(+next - (b - a) * 0.1, +next + (b - a) * 0.9, 0);
      setCursor(next);
      if (+next >= +state.ds.t1) { setPlaying(false); }
    }
    lastFrame = ts;
    requestAnimationFrame(tick);
  }

  // ---------------------------------------------------------------- search
  const searchEl = $("#search"), resultsEl = $("#results");
  let results = [], active = 0;
  function renderResults() {
    if (!results.length) { resultsEl.hidden = true; resultsEl.innerHTML = ""; return; }
    resultsEl.innerHTML = results.map((it, i) =>
      `<li role="option" data-id="${esc(it.id)}" aria-selected="${i === active}"><span class="k">${esc(it.kind)}</span><span>${esc(itemName(it))}</span><span class="d">${esc(itemWhen(it))}</span></li>`).join("");
    resultsEl.hidden = false;
  }
  searchEl.addEventListener("input", () => { results = M.search(state.ds, searchEl.value); active = 0; renderResults(); });
  searchEl.addEventListener("keydown", (ev) => {
    if (ev.key === "ArrowDown") { active = Math.min(results.length - 1, active + 1); renderResults(); ev.preventDefault(); }
    else if (ev.key === "ArrowUp") { active = Math.max(0, active - 1); renderResults(); ev.preventDefault(); }
    else if (ev.key === "Enter" && results[active]) { pick(results[active].id); }
    else if (ev.key === "Escape") { searchEl.value = ""; results = []; renderResults(); searchEl.blur(); }
  });
  resultsEl.addEventListener("mousedown", (ev) => {
    const li = ev.target.closest("li[data-id]");
    if (li) { ev.preventDefault(); pick(li.getAttribute("data-id")); }
  });
  searchEl.addEventListener("blur", () => setTimeout(() => { resultsEl.hidden = true; }, 150));
  function pick(id) { results = []; renderResults(); searchEl.blur(); select(id); }

  // ---------------------------------------------------------------- keys
  document.addEventListener("keydown", (ev) => {
    if (ev.target.matches("input, select, textarea")) return;
    if (ev.key === "/") { ev.preventDefault(); searchEl.focus(); searchEl.select(); }
    else if (ev.key === "Escape") { if (!$("#help").hidden) $("#help").hidden = true; else clearSelection(); }
    else if ((ev.key === "ArrowRight" || ev.key === "ArrowLeft") && state.tour) { ev.preventDefault(); moveTour(ev.key === "ArrowRight" ? 1 : -1); }
    else if (ev.key === "ArrowRight" || ev.key === "ArrowLeft") {
      const e = M.stepEvent(state.ds, state.cursor, ev.key === "ArrowRight" ? 1 : -1);
      if (e) { ev.preventDefault(); select(e.id); }
    } else if (ev.key === " ") { ev.preventDefault(); setPlaying(!state.playing); }
  });



  // ---------------------------------------------------------------- tours
  function renderTourMenu() {
    const menu = $("#tour-menu");
    if (!menu) return;
    const tours = Object.values(window.TOURS || {});
    menu.innerHTML = tours.map((t) => `<button data-tour="${esc(t.id)}"><b>${esc(t.title)}</b><br><span>${esc(t.question || t.intro || "")}</span></button>`).join("");
  }
  function tourYearDate(y) { return y < 0 ? `-${String(Math.abs(y)).padStart(4, "0")}` : String(y).padStart(4, "0"); }
  function startTour(id, stop = 0) {
    const tour = window.TOURS && window.TOURS[id];
    if (!tour) return;
    state.tour = tour;
    state.tourStop = Math.max(0, Math.min(stop, tour.stops.length));
    applyTourStop();
  }
  function exitTour() {
    state.tour = null; state.tourStop = 0; renderTourCard(); scheduleHash();
  }
  function moveTour(dir) {
    if (!state.tour) return;
    state.tourStop = Math.max(0, Math.min(state.tour.stops.length, state.tourStop + dir));
    applyTourStop();
  }
  function applyTourStop() {
    if (!state.tour) return;
    const stop = state.tour.stops[state.tourStop];
    if (stop) {
      const t = M.parseDate(tourYearDate(stop.year));
      if (stop.era !== state.dsId) loadDataset(stop.era, { cursor: t, quiet: true });
      else setCursor(t);
      if (stop.focus) flyToBBox(stop.focus);
    }
    renderTourCard();
    scheduleHash();
  }
  function renderTourCard() {
    const el = $("#tour-card");
    if (!el) return;
    if (!state.tour) { el.hidden = true; el.innerHTML = ""; return; }
    const t = state.tour, atEnd = state.tourStop >= t.stops.length, stop = t.stops[state.tourStop];
    let h = `<button class="exit" data-tour-exit title="Exit tour">×</button><div class="tour-title">${esc(t.title)}</div>`;
    if (atEnd) {
      h += `<h2>Answer</h2><p>${esc(t.answer.pattern)}</p>`;
      if (t.answer.openQuestions && t.answer.openQuestions.length) h += `<h3>Open questions</h3><ul>${t.answer.openQuestions.map((q) => `<li>${esc(q)}</li>`).join("")}</ul>`;
      if (t.answer.reading && t.answer.reading.length) h += `<h3>Reading</h3><ul>${t.answer.reading.map((r) => `<li><b>${esc(r.title)}</b>, ${esc(r.author)} <span class="d">${esc(r.note || "")}</span></li>`).join("")}</ul>`;
    } else {
      const y = stop.year <= 0 ? `${1 - stop.year} BC` : String(stop.year);
      h += `<div class="meta">Stop ${state.tourStop + 1} of ${t.stops.length} · ${esc(y)}</div><h2>${esc(stop.title)}</h2><p>${esc(stop.text)}</p>`;
      if (stop.plate) h += `<p><a class="it" href="../atlas/index.html#${esc(stop.plate)}" target="_blank">Plate: ${esc(stop.plate)}</a></p>`;
      if (stop.meanwhile) h += `<p class="meanwhile">Meanwhile: ${esc(stop.meanwhile)}</p>`;
    }
    h += `<div class="tour-actions"><button data-tour-prev ${state.tourStop <= 0 ? "disabled" : ""}>‹ Prev</button><button data-tour-next ${state.tourStop >= t.stops.length ? "disabled" : ""}>Next ›</button></div>`;
    el.innerHTML = h; el.hidden = false;
  }

  // ---------------------------------------------------------------- master timeline
  // Every period on one strip (HM.masterLayout). The open period is red with its from/to years; a black bracket under
  // it is the stretch the lower timeline shows; a small triangle is the date you're on. Clicking a period opens it,
  // the same as choosing it from the title.
  const master = { layout: M.masterLayout(window.DATASETS) };
  function renderMaster() {
    const svg = d3.select("#master-svg");
    if (svg.empty()) return;
    const W = svg.node().clientWidth || 1000, L = master.layout, pad = 6;
    const x = (y) => pad + M.masterX(L, y) * (W - 2 * pad);
    const rowH = 14, top = 15, axisY = top + L.rows * rowH + 3;
    master.x = x; master.top = top; master.rowH = rowH; master.axisY = axisY;
    svg.attr("height", axisY + 14);
    svg.selectAll("*").remove();
    const defs = svg.append("defs");
    const pat = defs.append("pattern").attr("id", "gap-hatch").attr("patternUnits", "userSpaceOnUse").attr("width", 8).attr("height", 8).attr("patternTransform", "rotate(45)");
    pat.append("rect").attr("width", 8).attr("height", 8).attr("fill", "#e8dfcf");
    pat.append("line").attr("x1", 0).attr("y1", 0).attr("x2", 0).attr("y2", 8).attr("stroke", "#b9ad96").attr("stroke-width", 2);
    const ax = svg.append("g").attr("class", "m-axis");
    ax.append("line").attr("x1", x(L.y0)).attr("x2", x(L.y1)).attr("y1", axisY).attr("y2", axisY);
    L.breaks.forEach((b, i) => {
      const last = i === L.breaks.length - 1;
      const label = M.masterYear(Math.floor(b) - (last && b === Math.floor(b) ? 1 : 0));
      ax.append("line").attr("class", "m-break").attr("x1", x(b)).attr("x2", x(b)).attr("y1", top - 2).attr("y2", axisY + 3);
      ax.append("text").attr("x", x(b)).attr("y", axisY + 11).attr("text-anchor", i === 0 ? "start" : last ? "end" : "middle").text(label);
    });
    // Label the deliberate Vol. 2 gap after the early-modern strip.
    L.periods.filter((q) => q.gapAfter).forEach((q) => {
      const nx = Math.min(x(L.y1), x(q.y1 + 139));
      const gx0 = x(q.y1), gw = Math.max(20, nx - gx0);
      svg.append("rect").attr("class", "m-gap-band").attr("x", gx0).attr("y", top + q.row * rowH).attr("width", gw).attr("height", rowH - 3);
      svg.append("text").attr("class", "m-gap").attr("x", gx0 + gw / 2).attr("y", top + q.row * rowH + rowH - 6).attr("text-anchor", "middle").text(q.gapAfter);
    });
    const n = L.breaks.length - 1;
    if (n > 1) svg.append("text").attr("class", "m-scale").attr("x", x(L.breaks[n - 1]) - 4).attr("y", top - 4).attr("text-anchor", "end")
      .text("scale stretches toward the present ›").append("title").text("Each stretch between the marked years gets the same width, so short modern periods stay visible.");
    const p = state.ds && L.periods.find((q) => q.id === state.dsId);
    const g = svg.selectAll("g.m-period").data(L.periods).join("g")
      .attr("class", (q) => `m-period${q.id === state.dsId ? " on" : ""}`)
      .attr("data-id", (q) => q.id)
      .on("click", (ev, q) => { if (q.id !== state.dsId) { setPlaying(false); loadDataset(q.id, { preserveYear: true }); scheduleHash(); } });
    g.append("title").text((q) => `${q.full}, ${q.from} – ${q.to}`);
    g.append("rect").attr("x", (q) => x(q.y0)).attr("y", (q) => top + q.row * rowH).attr("height", rowH - 3).attr("rx", 2)
      .attr("width", (q) => Math.max(4, x(q.y1) - x(q.y0)));
    // Every bar is named: inside if it fits, otherwise just outside it, on whichever side has room before the next bar.
    g.append("text").each(function (q) {
      const x0 = x(q.y0), x1 = Math.max(x0 + 4, x(q.y1)), w = x1 - x0, need = q.short.length * 5.6 + 8, y = top + q.row * rowH + rowH - 6;
      const same = L.periods.filter((o) => o !== q && o.row === q.row);
      const roomR = Math.min(W - pad, ...same.filter((o) => o.y0 >= q.y1).map((o) => x(o.y0))) - x1;
      const roomL = x0 - Math.max(pad, ...same.filter((o) => o.y1 <= q.y0).map((o) => x(o.y1)));
      const t = d3.select(this).text(q.short).attr("y", y);
      if (w > need) t.attr("class", "in").attr("x", x0 + 4);
      else if (roomR > need || roomR >= roomL) t.attr("x", x1 + 4);
      else t.attr("x", x0 - 4).attr("text-anchor", "end");
    });
    if (p) {
      const fx = x(p.y0), tx = x(p.y1), wide = tx - fx > 110;
      // Wide slices carry their years at their ends; narrow ones get one "745 – 865" label over the middle.
      if (wide) {
        svg.append("text").attr("class", "m-from").attr("x", fx).attr("y", 10).text(p.from);
        svg.append("text").attr("class", "m-to").attr("x", tx).attr("y", 10).attr("text-anchor", "end").text(p.to);
      } else {
        const label = `${p.from} – ${p.to}`, half = label.length * 3.2;
        const mid = Math.min(W - pad - half, Math.max(pad + half, (fx + tx) / 2));
        svg.append("text").attr("class", "m-from m-to").attr("x", mid).attr("y", 10).attr("text-anchor", "middle").text(label);
      }
      master.row = p.row;
    }
    svg.append("path").attr("class", "m-zoom");
    svg.append("path").attr("class", "m-cursor");
    updateMasterCursor();
    updateMasterZoom();
  }
  function updateMasterCursor() {
    if (!master.x || !state.cursor) return;
    const cx = master.x(M.yearOf(state.cursor));
    d3.select("#master-svg .m-cursor").attr("d", `M${cx},${master.axisY - 1} l-4,-6 h8 z`).attr("data-x", cx);
    const yr = state.cursor.getUTCFullYear();
    $("#cursor-date").textContent = state.ds.precision === "year" ? M.masterYear(yr) : fmtCursor(state.cursor);
  }
  /** The bracket under the open period: what the lower timeline is showing. Also writes "Showing …" on the timeline bar. */
  function updateMasterZoom() {
    if (!state.ds || !xs) return;
    const [a, b] = tlDomain(), ds = state.ds;
    const whole = +a <= +ds.t0 + M.DAY && +b >= +ds.t1 - M.DAY;
    const show = $("#tl-showing");
    if (show) show.textContent = whole ? "Showing the whole period" : `Showing ${fmtCursor(a)} – ${fmtCursor(b)}`;
    if (!master.x) return;
    const za = master.x(M.yearOf(a)), zb = Math.max(za + 3, master.x(M.yearOf(b))), zy = master.top + (master.row || 0) * master.rowH + master.rowH - 1;
    d3.select("#master-svg .m-zoom").attr("d", `M${za},${zy - 4} V${zy + 1} H${zb} V${zy - 4}`).attr("data-a", za).attr("data-b", zb);
  }

  // ---------------------------------------------------------------- status line
  // The thin line at the very top: whatever is selected, with its path. Every step is a link (chapters open and zoom
  // the timeline to themselves); × clears the selection.
  function deepestChapterAt(t) {
    const hits = state.ds.chapters.filter((c) => c.t0 <= t && c.t1 >= t);
    return hits.sort((a, b) => M.ancestors(state.ds, b).length - M.ancestors(state.ds, a).length || (a.t1 - a.t0) - (b.t1 - b.t0))[0] || null;
  }
  function renderStatus() {
    const el = $("#status");
    if (!el) return;
    const series = el.querySelector(".series");
    const it = state.selected && state.ds && state.ds.byId.get(state.selected);
    let h = "";
    if (!it) h = `<span class="none">Nothing selected. Click anything on the map or timeline.</span>`;
    else {
      const ds = state.ds;
      const kind = { event: "Event", leader: "Person", book: "Book", chapter: it.kind === "chapter" && it.children.length && !it.depth ? "Part" : "Chapter" }[it.kind] || "";
      let path = [];
      if (it.kind === "chapter") path = M.ancestors(ds, it).reverse().map((c) => ({ id: c.id, label: c.title }));
      else if (it.kind === "event") {
        const ch = deepestChapterAt(it.t0);
        if (ch) path = [...M.ancestors(ds, ch).reverse(), ch].map((c) => ({ id: c.id, label: c.title }));
        else path = [{ label: ds.lanes.find((l) => l.id === it.lane)?.label || "Events" }];
      } else if (it.kind === "leader") path = [{ label: it.country || "In power" }];
      else if (it.kind === "book") path = [{ label: it.amits ? "Amit's Fiction" : "Reading" }];
      h = `<span class="kind">${esc(kind)}</span><span class="path">` +
        path.map((p) => (p.id ? `<a data-id="${esc(p.id)}" title="Open ${esc(p.label)}">${esc(p.label)}</a>` : `<span>${esc(p.label)}</span>`) + `<span class="gt">›</span>`).join("") +
        `</span><a class="name" data-id="${esc(it.id)}" title="Go to it">${esc(itemName(it))}</a><span class="dates">${esc(itemWhen(it))}</span>` +
        `<button class="x" title="Clear selection (Esc)" aria-label="Clear selection">×</button>`;
    }
    el.innerHTML = h;
    if (series) el.append(series);
  }
  $("#status").addEventListener("click", (ev) => {
    const a = ev.target.closest("a[data-id]");
    if (a) { ev.preventDefault(); select(a.dataset.id); scheduleHash(); return; }
    if (ev.target.closest(".x")) clearSelection();
  });

  // ---------------------------------------------------------------- datasets
  function loadDataset(id, opts = {}) {
    state.dsId = id;
    state.ds = M.normalise(window.DATASETS[id]);
    const errs = M.validate(window.DATASETS[id]);
    if (errs.length) console.warn("Dataset problems:", errs);
    state.selected = null; state.pinned = false; state.followed = undefined;
    $("#dataset").value = id;
    const mp = master.layout.periods.find((q) => q.id === id);
    $("#ds-title").textContent = state.ds.title;
    $("#ds-years").textContent = mp ? `${mp.from} – ${mp.to}` : "";
    $(".picker").title = `${mp ? mp.full : state.ds.title}. Click to choose another period, or click one on the strip below.`;
    document.title = `${state.ds.title} — Amit's World`;
    renderMapLegend();
    drawChapterBox(null);
    flyWorld(0);
    renderCard();
    setupTimeline();
    renderMaster();
    const carry = opts.cursor || (opts.preserveYear && state.cursor) || null;
    setCursor(carry || M.parseDate(state.ds.startAt) || state.ds.t0, { hover: !!opts.quiet });
  }

  // ---------------------------------------------------------------- controls
  const dsSel = $("#dataset");
  const eraGroup = document.createElement("optgroup"); eraGroup.label = "Eras";
  for (const q of master.layout.periods) {
    const o = document.createElement("option");
    o.value = q.id; o.textContent = `${q.title}  (${q.from} – ${q.to})`;
    eraGroup.appendChild(o);
  }
  dsSel.appendChild(eraGroup);
  const threads = Object.entries(window.DATASETS).filter(([, d]) => d.kind === "thread");
  if (threads.length) {
    const tg = document.createElement("optgroup"); tg.label = "Threads";
    for (const [id, d] of threads) { const o = document.createElement("option"); o.value = id; o.textContent = `${d.title}  (${d.subtitle || "thread"})`; tg.appendChild(o); }
    dsSel.appendChild(tg);
  }
  dsSel.addEventListener("change", () => { setPlaying(false); loadDataset(dsSel.value, { preserveYear: true }); scheduleHash(); });
  renderTourMenu();
  $("#tour-btn").addEventListener("click", () => { const m = $("#tour-menu"); m.hidden = !m.hidden; });
  $("#tour-menu").addEventListener("click", (ev) => { const b = ev.target.closest("[data-tour]"); if (!b) return; $("#tour-menu").hidden = true; startTour(b.dataset.tour, 0); });
  $("#tour-card").addEventListener("click", (ev) => { if (ev.target.closest("[data-tour-exit]")) exitTour(); else if (ev.target.closest("[data-tour-prev]")) moveTour(-1); else if (ev.target.closest("[data-tour-next]")) moveTour(1); });
  $("#play").addEventListener("click", () => setPlaying(!state.playing));
  $("#follow").addEventListener("change", (ev) => { state.follow = ev.target.checked; state.followed = undefined; });
  $("#world").addEventListener("click", () => { drawChapterBox(null); state.followed = null; flyWorld(); });
  $("#world-underlay").addEventListener("change", (ev) => { state.showWorld = ev.target.checked; drawWorldUnderlay(state.cursor); });
  $("#fit").addEventListener("click", () => zoomToDomain(state.ds.t0, state.ds.t1));
  $("#help-btn").addEventListener("click", () => { $("#help").hidden = !$("#help").hidden; });
  $("#help-close").addEventListener("click", () => { $("#help").hidden = true; });
  let resizeTimer = null;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => { const d = tlDomain(); setupTimeline(d); renderMaster(); }, 150);
  });

  // ---------------------------------------------------------------- start
  const p = M.parseHash(location.hash, window.DATASETS, DEFAULT_DS);
  loadDataset(p.dataset, { cursor: location.hash ? p.date : null, quiet: true });
  if (location.hash) applyHash();
  if (p.query && p.query.tour) startTour(p.query.tour, +p.query.stop || 0);

  // Hooks for tests and the console.
  window.APP = {
    state, select, setCursor, zoomChapter, clearSelection, loadDataset, setPlaying, startTour, moveTour, exitTour,
    domain: () => tlDomain().map((d) => M.isoDate(d)),
    flyTo: (bb, ms = 0) => flyToBBox(bb, ms),
    sceneLayers: () => [...document.querySelectorAll("#map .scene .focus .s-L")].filter((n) => n.getAttribute("display") !== "none").map((n) => { const L = d3.select(n).datum(); return L.name || L.text || L.type; }),
    mapTransform: () => { const t = d3.zoomTransform(mapSvg.node()); return { k: t.k, x: t.x, y: t.y }; },
    isFolded: (id) => isFolded(state.ds.byId.get(id)), setFold: (id, f) => { setFold(id, f); refold(); }, setAllFolds,
    zoomTimeline: (a, b) => zoomToDomain(M.parseDate(a), M.parseDate(b), 0),
    focus: () => state.sceneFocus,
    ready: true
  };
})();
