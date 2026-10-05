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
    mapK: 1, flying: false
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
  const fmtCursor = (t) => (state.ds && state.ds.precision === "year") ? String(t.getUTCFullYear()) : M.fmtDate(M.isoDate(t));

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
  const chapterBox = mapRoot.append("path").attr("class", "chapter-box");
  const pinLayer = mapRoot.append("g");

  const mapZoom = d3.zoom().scaleExtent([1, 40])
    .translateExtent([[0, 0], [MAP_W, MAP_H]])
    .on("zoom", (ev) => {
      mapRoot.attr("transform", ev.transform);
      state.mapK = ev.transform.k;
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

  function drawChapterBox(ch) {
    if (!ch) { chapterBox.attr("d", null); return; }
    chapterBox.attr("d", geoPath({ type: "LineString", coordinates: bboxRing(ch.bbox) }));
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
    const boxes = [];
    const overlaps = (r, q) => r.x0 < q.x1 && r.x1 > q.x0 && r.y0 < q.y1 && r.y1 > q.y0;
    pins.forEach((p, i) => {
      const w = p.d.title.length * 6.2 + 4;
      const right = { x0: p.x + 7, x1: p.x + 7 + w, y0: p.y - 8, y1: p.y + 6 };
      const left = { x0: p.x - 7 - w, x1: p.x - 7, y0: p.y - 8, y1: p.y + 6 };
      const free = (r) => !boxes.some((q) => overlaps(r, q)) && !dots.some((q, j) => j !== i && overlaps(r, q));
      const side = free(right) ? "r" : free(left) ? "l" : p.d.id === state.selected ? "r" : null;
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
        if (state.cursor) { renderPins(state.cursor); }
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
        gi.append("text").attr("x", d.lx).attr("y", cy + 4).attr("text-anchor", d.anchor)
          .attr("class", d.inside && !opts.darkText && !it.approx ? "in" : null).text(d.en.label);
      }
    }
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
    const nTicks = Math.max(3, Math.floor((W - GUTTER) / 95)), tf = xs.tickFormat(nTicks);
    root.append("g").attr("class", "axis").attr("transform", `translate(0,${axisY})`)
      .call(d3.axisTop(xs).ticks(nTicks).tickFormat((d) => tf(d).replace(/^0+(?=\d)/, "")).tickSizeOuter(0).tickSize(4));
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

    // Chapters
    section("Chapters");
    const chEntries = ds.chapters.slice().sort((a, b) => a.t0 - b.t0).map((c) => ({ ref: c, t0: c.t0, t1: c.t1, label: c.title }));
    const chLaid = layoutRows(chEntries, 4);
    lane("click to zoom", null, chLaid, (y0) => drawEntries(body, chLaid, y0, { cls: "chapter", h: 14, alwaysBar: true, darkText: true, fill: () => null }), 0);

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
      // the most specific chapter (shortest span) tells the story of this moment
      const now = chapters.filter((c) => c.text).sort((a, b) => (a.t1 - a.t0) - (b.t1 - b.t0))[0];
      if (now) h += `<div class="now" id="now"><div class="now-h">Now · <a class="it" href="#" data-id="${esc(now.id)}">${esc(now.title)}</a></div><p>${esc(now.text)}</p></div>`;
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
    const card = $("#card");
    const it = state.selected && state.ds.byId.get(state.selected);
    if (!it) { card.hidden = true; card.innerHTML = ""; return; }
    const ds = state.ds;
    const kindLabel = { event: ds.lanes.find((l) => l.id === it.lane)?.label || "Event", leader: `In power · ${it.country}`, chapter: "Chapter", book: it.amits ? "Amit's Fiction" : it.fiction ? "Book · fiction" : "Book" }[it.kind];
    let h = `<button class="close" title="Close (Esc)" aria-label="Close">×</button><div class="kind">${esc(kindLabel)}</div><h2>${esc(itemName(it))}</h2>`;
    h += `<div class="when" id="card-when">${esc(itemWhen(it))}</div>`;
    if (it.approx) h += `<div class="when">Dates are approximate.</div>`;
    if (it.kind === "leader" && it.born && it.died) h += `<div class="when">Lived ${esc(M.fmtRange(it.born, it.died))}</div>`;
    if (it.kind === "leader" && it.lifeUnknown) h += `<div class="when">Birth and death dates are not known.</div>`;
    if (it.kind === "book") {
      h += `<p>${esc(it.author)}${it.amits ? '<span class="tag amits">Amit\'s fiction</span>' : ""}${it.owned ? '<span class="tag own">in Calibre</span>' : ""}${it.canadian ? '<span class="tag">Canadian</span>' : ""}${it.fiction && !it.amits ? '<span class="tag">fiction</span>' : ""}</p>`;
    }
    if (it.kind === "event" && ds.lanes.find((l) => l.id === it.lane)?.fiction) h += `<p><span class="tag amits">from Amit's novel, not history</span></p>`;
    if (it.text) h += `<p>${esc(it.text)}</p>`;
    const allLinks = M.linksFor(ds, it);
    const plateLinks = allLinks.filter((l) => l.kind === "plate");
    if (plateLinks.length) {
      const ps = (ds.plates || []).filter((p) => plateLinks.some((l) => l.href === M.plateUrl(p.id)));
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
    colourMap(t);
    renderPins(t);
    renderPanel();
    if (state.follow && (state.playing || opts.scrub)) followChapter(t);
    if (!opts.hover) scheduleHash();
  }

  function followChapter(t) {
    const ch = M.activeChapter(state.ds, t);
    const id = ch ? ch.id : null;
    if (id === state.followed) return;
    state.followed = id;
    drawChapterBox(ch);
    if (ch) flyToBBox(ch.bbox); else flyWorld();
  }

  function zoomChapter(id) {
    const ch = state.ds.byId.get(id);
    if (!ch) return;
    const pad = Math.max((ch.t1 - ch.t0) * 0.08, 20 * M.DAY);
    zoomToDomain(+ch.t0 - pad, +ch.t1 + pad);
    drawChapterBox(ch);
    flyToBBox(ch.bbox);
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
    if (it.kind === "chapter") zoomChapter(id);
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
    if (state.cursor) { renderPins(state.cursor); updateCursorVisual(); renderPanel(); }
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
    const h = M.formatHash(state.dsId, state.cursor, state.selected);
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
    else if (ev.key === "ArrowRight" || ev.key === "ArrowLeft") {
      const e = M.stepEvent(state.ds, state.cursor, ev.key === "ArrowRight" ? 1 : -1);
      if (e) { ev.preventDefault(); select(e.id); }
    } else if (ev.key === " ") { ev.preventDefault(); setPlaying(!state.playing); }
  });

  // ---------------------------------------------------------------- datasets
  function loadDataset(id, opts = {}) {
    state.dsId = id;
    state.ds = M.normalise(window.DATASETS[id]);
    const errs = M.validate(window.DATASETS[id]);
    if (errs.length) console.warn("Dataset problems:", errs);
    state.selected = null; state.pinned = false; state.followed = undefined;
    $("#dataset").value = id;
    $("#ds-title").textContent = `${state.ds.title} · ${state.ds.subtitle || ""}`;
    document.title = `${state.ds.title} — Amit's World`;
    renderMapLegend();
    drawChapterBox(null);
    flyWorld(0);
    renderCard();
    setupTimeline();
    setCursor(opts.cursor || M.parseDate(state.ds.startAt) || state.ds.t0, { hover: !!opts.quiet });
  }

  // ---------------------------------------------------------------- controls
  const dsSel = $("#dataset");
  for (const [id, d] of Object.entries(window.DATASETS)) {
    const o = document.createElement("option");
    o.value = id; o.textContent = `${d.title} (${d.subtitle})`;
    dsSel.appendChild(o);
  }
  dsSel.addEventListener("change", () => { setPlaying(false); loadDataset(dsSel.value); scheduleHash(); });
  $("#play").addEventListener("click", () => setPlaying(!state.playing));
  $("#follow").addEventListener("change", (ev) => { state.follow = ev.target.checked; state.followed = undefined; });
  $("#world").addEventListener("click", () => { drawChapterBox(null); state.followed = null; flyWorld(); });
  $("#fit").addEventListener("click", () => zoomToDomain(state.ds.t0, state.ds.t1));
  $("#help-btn").addEventListener("click", () => { $("#help").hidden = !$("#help").hidden; });
  $("#help-close").addEventListener("click", () => { $("#help").hidden = true; });
  let resizeTimer = null;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => { const d = tlDomain(); setupTimeline(d); }, 150);
  });

  // ---------------------------------------------------------------- start
  const p = M.parseHash(location.hash, window.DATASETS, DEFAULT_DS);
  loadDataset(p.dataset, { cursor: location.hash ? p.date : null, quiet: true });
  if (location.hash) applyHash();

  // Hooks for tests and the console.
  window.APP = {
    state, select, setCursor, zoomChapter, clearSelection, loadDataset, setPlaying,
    domain: () => tlDomain().map((d) => M.isoDate(d)),
    mapTransform: () => { const t = d3.zoomTransform(mapSvg.node()); return { k: t.k, x: t.x, y: t.y }; },
    ready: true
  };
})();
