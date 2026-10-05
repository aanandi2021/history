/* World Viewer model: pure functions, no DOM.
   Works in the browser (window.HM) and in Node (module.exports) so it can be unit-tested. */
(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  else root.HM = api;
})(typeof self !== "undefined" ? self : this, function () {
  "use strict";

  const DAY = 86400000;
  const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const DATE_RE = /^(\d{4})(?:-(\d{2})(?:-(\d{2}))?)?$/;
  const VAULT = "Fourth Vault July 2023";
  // Obsidian's id for the A:\ vault (from %APPDATA%\obsidian\obsidian.json). Links use the id, not the name, because a
  // stale OneDrive copy is registered under the same name and Obsidian would open that one instead.
  const VAULT_ID = "333bfdd695459a48";
  const CALIBRE_LIBRARY = "CalibreLibrary";

  function utc(y, m, d) {
    const t = new Date(Date.UTC(2000, m, d));
    t.setUTCFullYear(y);
    return t;
  }

  /** Parse YYYY, YYYY-MM or YYYY-MM-DD. Partial dates go to the middle of the year or month. */
  function parseDate(s) {
    if (s instanceof Date) return new Date(s.getTime());
    const m = DATE_RE.exec(String(s || "").trim());
    if (!m) return null;
    const y = +m[1];
    if (m[3]) {
      const mo = +m[2] - 1, d = +m[3];
      const t = utc(y, mo, d);
      if (t.getUTCMonth() !== mo || t.getUTCDate() !== d) return null;
      return t;
    }
    if (m[2]) {
      const mo = +m[2] - 1;
      if (mo < 0 || mo > 11) return null;
      return utc(y, mo, 15);
    }
    return utc(y, 6, 2);
  }

  const isPartial = (s) => typeof s === "string" && /^\d{4}(-\d{2})?$/.test(s);

  function isoDate(t) {
    const y = String(t.getUTCFullYear()).padStart(4, "0");
    return `${y}-${String(t.getUTCMonth() + 1).padStart(2, "0")}-${String(t.getUTCDate()).padStart(2, "0")}`;
  }

  /** Human date. Respects the precision of the original string. */
  function fmtDate(s, approx) {
    const t = parseDate(s);
    if (!t) return "";
    const str = typeof s === "string" ? s : isoDate(t);
    let out;
    if (/^\d{4}$/.test(str)) out = String(t.getUTCFullYear());
    else if (/^\d{4}-\d{2}$/.test(str)) out = `${MONTHS[t.getUTCMonth()]} ${t.getUTCFullYear()}`;
    else out = `${t.getUTCDate()} ${MONTHS[t.getUTCMonth()]} ${t.getUTCFullYear()}`;
    return (approx ? "c. " : "") + out;
  }

  function fmtRange(a, b, approx) {
    if (!b || b === a) return fmtDate(a, approx);
    const ta = parseDate(a), tb = parseDate(b);
    if (/^\d{4}$/.test(a) && /^\d{4}$/.test(b)) return `${approx ? "c. " : ""}${ta.getUTCFullYear()}–${tb.getUTCFullYear()}`;
    return `${fmtDate(a, approx)} – ${fmtDate(b, approx)}`;
  }

  function slug(s) {
    return String(s).toLowerCase()
      .normalize("NFKD").replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 48);
  }

  /** Return a working copy of a dataset with ids, parsed times and terms filled in. */
  function normalise(raw) {
    const ds = Object.assign({}, raw);
    const used = new Set();
    const uid = (base) => {
      let id = base || "item", n = 2;
      while (used.has(id)) id = `${base}-${n++}`;
      used.add(id);
      return id;
    };
    const year = (s) => (parseDate(s) || { getUTCFullYear: () => "" }).getUTCFullYear();
    ds.t0 = parseDate(raw.range[0]);
    ds.t1 = parseDate(raw.range[1]);
    ds.laneOrder = raw.lanes.map((l) => l.id);
    ds.events = raw.events.map((e) => {
      const t0 = parseDate(e.date), t1 = parseDate(e.end || e.date);
      return Object.assign({}, e, {
        kind: "event",
        id: uid(e.id || `${slug(e.title)}-${year(e.date)}`),
        t0, t1,
        approx: !!e.approx || isPartial(e.date),
        span: !!e.end && t1 - t0 > DAY
      });
    }).sort((a, b) => a.t0 - b.t0);
    ds.leaders = raw.leaders.map((l) => {
      const terms = (l.terms || [[l.start, l.end]]).map(([a, b]) => ({ a, b, t0: parseDate(a), t1: parseDate(b) }));
      return Object.assign({}, l, {
        kind: "leader",
        id: uid(l.id || slug(l.name)),
        terms,
        t0: terms[0].t0,
        t1: terms[terms.length - 1].t1,
        bornT: parseDate(l.born),
        diedT: parseDate(l.died)
      });
    });
    ds.chapters = (raw.chapters || []).map((c) => Object.assign({}, c, {
      kind: "chapter", id: uid(c.id || `ch-${slug(c.title)}`), t0: parseDate(c.start), t1: parseDate(c.end)
    }));
    ds.books = (raw.books || []).map((b) => Object.assign({}, b, {
      kind: "book", id: uid(b.id || `bk-${slug(b.title)}`), t0: parseDate(b.start), t1: parseDate(b.end)
    }));
    ds.plates = (raw.plates || []).map((p) => Object.assign({}, p, { t0: parseDate(p.start), t1: parseDate(p.end) }));
    ds.mapStates = (raw.mapStates || []).map((s) => Object.assign({}, s, { t: parseDate(s.date) }))
      .sort((a, b) => a.t - b.t);
    ds.byId = new Map();
    for (const list of [ds.events, ds.leaders, ds.chapters, ds.books]) for (const it of list) ds.byId.set(it.id, it);
    return ds;
  }

  /** Width of "near" around the cursor: 4% of the visible window, but at least a week. */
  function nearWindow(domain) {
    const span = domain[1] - domain[0];
    return Math.max(7 * DAY, span * 0.04);
  }

  const overlaps = (it, a, b) => it.t0 <= b && it.t1 >= a;

  /** Events within ±w of t, grouped by lane in the dataset's lane order. */
  function nearbyEvents(ds, t, w) {
    const a = new Date(+t - w), b = new Date(+t + w);
    const groups = ds.laneOrder.map((lane) => ({ lane, events: [] }));
    const idx = new Map(groups.map((g, i) => [g.lane, i]));
    for (const e of ds.events) if (overlaps(e, a, b)) groups[idx.get(e.lane)].events.push(e);
    return groups;
  }

  /** Leaders in power at t (any term covering t). */
  function activeLeaders(ds, t) {
    return ds.leaders.filter((l) => l.terms.some((r) => r.t0 <= t && r.t1 >= t));
  }

  function activeChapters(ds, t) {
    return ds.chapters.filter((c) => c.t0 <= t && c.t1 >= t);
  }

  /** The chapter to follow: the shortest one covering t. */
  function activeChapter(ds, t) {
    let best = null;
    for (const c of activeChapters(ds, t)) if (!best || c.t1 - c.t0 < best.t1 - best.t0) best = c;
    return best;
  }

  /** The map state in force at t: the latest at or before t. */
  function mapStateAt(ds, t) {
    let cur = null;
    for (const s of ds.mapStates) if (s.t <= t) cur = s; else break;
    return cur;
  }

  /** Books relevant to an item: same vault section first, then those overlapping its dates. */
  function booksFor(ds, item, max = 3) {
    if (item.kind === "book") return [];
    const pub = ds.books.filter((b) => !b.amits);
    const same = item.section ? pub.filter((b) => b.section && b.section === item.section) : [];
    if (same.length) return same.slice(0, max);
    return pub.filter((b) => overlaps(b, item.t0, item.t1))
      .sort((x, y) => (x.t1 - x.t0) - (y.t1 - y.t0)).slice(0, max);
  }

  /** Amit's own writing that touches this item: anything tagged `fic`, or overlapping in time. */
  function fictionFor(ds, item) {
    if (item.kind === "book" && item.amits) return [];
    return ds.books.filter((b) => b.amits && (item.fic || overlaps(b, item.t0, item.t1)));
  }

  /** Where an item's `fic` points: a heading in the work's note, or {note, heading} for a sibling file. */
  function ficTarget(ds, item) {
    if (!item.fic) return null;
    const work = ds.books.find((b) => b.amits && (!item.work || b.id === item.work || b.title === item.work));
    const f = typeof item.fic === "string" ? { heading: item.fic } : item.fic;
    const note = f.note || (work && work.note);
    return note ? { note, heading: f.heading || null, work } : null;
  }

  // ---- links -------------------------------------------------------------

  function obsidianUrl(notePath, section, vault = VAULT_ID) {
    if (!notePath) return null;
    const file = section ? `${notePath}#${section}` : notePath;
    return `obsidian://open?vault=${encodeURIComponent(vault)}&file=${encodeURIComponent(file)}`;
  }

  function wikiUrl(topic) {
    if (!topic) return null;
    return `https://en.wikipedia.org/w/index.php?search=${encodeURIComponent(topic)}&title=Special%3ASearch&go=Go`;
  }

  function calibreUrl(id, library = CALIBRE_LIBRARY) {
    return `calibre://show-book/${encodeURIComponent(library)}/${id}`;
  }

  /** Plates live in the sibling atlas app; links are relative so the repo can move. */
  function plateUrl(id) {
    return `../atlas/index.html#${encodeURIComponent(id)}`;
  }

  function libraryUrl(book) {
    const q = `${book.title.replace(/\s*\(.*?\)\s*/g, " ").trim()} ${book.author}`;
    return `https://ottawa.bibliocommons.com/v2/search?query=${encodeURIComponent(q)}&searchType=smart`;
  }

  /** All links for an item, in display order. */
  function linksFor(ds, item) {
    const out = [];
    const note = item.note || ds.note;
    if (item.section && note) out.push({ kind: "note", label: "Open note", href: obsidianUrl(note, item.section) });
    const fic = ficTarget(ds, item);
    if (fic) out.push({ kind: "fiction", label: "Amit's Fiction", href: obsidianUrl(fic.note, fic.heading) });
    if (item.kind !== "book") {
      for (const p of ds.plates || []) {
        if (item.t0 <= p.t1 && item.t1 >= p.t0) out.push({ kind: "plate", label: `Atlas plate: ${p.title}`, href: plateUrl(p.id) });
      }
    }
    if (item.kind === "book" && item.amits) {
      out.push({ kind: "fiction", label: "Open in Amit's Fiction", href: obsidianUrl(item.note, item.heading) });
    } else if (item.kind === "book") {
      if (item.owned && item.calibreId != null) out.push({ kind: "calibre", label: "Open in Calibre", href: calibreUrl(item.calibreId) });
      out.push({ kind: "library", label: "Ottawa Public Library", href: libraryUrl(item) });
    } else {
      const topic = item.wiki || item.name || item.title;
      out.push({ kind: "wiki", label: "Wikipedia", href: wikiUrl(topic) });
    }
    return out;
  }

  // ---- address -----------------------------------------------------------

  function parseHash(hash, datasets, defaultId) {
    const parts = String(hash || "").replace(/^#/, "").split("/").map(decodeURIComponent);
    const id = parts[0] && datasets[parts[0]] ? parts[0] : defaultId;
    const fellBack = id !== parts[0];
    const raw = datasets[id];
    const lo = parseDate(raw.range[0]), hi = parseDate(raw.range[1]);
    let t = fellBack ? null : parseDate(parts[1]);
    if (!t) t = parseDate(raw.startAt) || lo;
    if (t < lo) t = lo;
    if (t > hi) t = hi;
    return { dataset: id, date: t, item: fellBack ? null : (parts[2] || null) };
  }

  function formatHash(id, t, itemId) {
    return `#${id}/${isoDate(t)}${itemId ? "/" + encodeURIComponent(itemId) : ""}`;
  }

  // ---- search ------------------------------------------------------------

  function search(ds, q, max = 8) {
    q = String(q || "").trim().toLowerCase();
    if (!q) return [];
    const scored = [];
    for (const it of ds.byId.values()) {
      const name = (it.title || it.name || "").toLowerCase();
      const hay = `${name} ${(it.text || "").toLowerCase()} ${(it.author || "").toLowerCase()} ${(it.country || "").toLowerCase()}`;
      let s = -1;
      if (name.startsWith(q)) s = 0;
      else if (name.includes(q)) s = 1;
      else if (hay.includes(q)) s = 2;
      if (s >= 0) scored.push([s, it]);
    }
    return scored.sort((a, b) => a[0] - b[0] || a[1].t0 - b[1].t0).slice(0, max).map((x) => x[1]);
  }

  /** Next / previous event from t (strictly after / before). */
  function stepEvent(ds, t, dir) {
    if (dir > 0) return ds.events.find((e) => e.t0 > t) || null;
    for (let i = ds.events.length - 1; i >= 0; i--) if (ds.events[i].t0 < t) return ds.events[i];
    return null;
  }

  // ---- validation (used by tests and logged by the viewer) ----------------

  function validate(raw) {
    const errs = [];
    const bad = (m) => errs.push(`${raw.id || "?"}: ${m}`);
    const okDate = (s) => !!parseDate(s);
    if (!/^[a-z0-9-]+$/.test(raw.id || "")) bad("id must be a lowercase slug");
    if (!raw.range || !okDate(raw.range[0]) || !okDate(raw.range[1])) { bad("bad range"); return errs; }
    const lo = parseDate(raw.range[0]), hi = parseDate(raw.range[1]);
    if (!(lo < hi)) bad("range start must be before end");
    if (!raw.lanes || !raw.lanes.length) bad("no lanes");
    else if (raw.lanes[0].id !== "canada" || !raw.lanes[0].pinned) bad("first lane must be the pinned Canada lane (Principle III)");
    const lanes = new Set((raw.lanes || []).map((l) => l.id));
    const sides = new Set(Object.keys((raw.colours || {}).sides || {}));
    const lonlat = (p) => Array.isArray(p) && p.length === 2 && p[0] >= -180 && p[0] <= 180 && p[1] >= -90 && p[1] <= 90;
    const ids = new Set();
    const dup = (id, what) => { if (!id) return; if (ids.has(id)) bad(`duplicate id ${id} (${what})`); ids.add(id); };
    for (const e of raw.events || []) {
      const w = `event "${e.title}"`;
      dup(e.id, w);
      if (!lanes.has(e.lane)) bad(`${w}: unknown lane ${e.lane}`);
      if (!okDate(e.date)) bad(`${w}: bad date ${e.date}`);
      else if (parseDate(e.date) < lo || parseDate(e.date) > hi) bad(`${w}: date outside range`);
      if (e.end && (!okDate(e.end) || parseDate(e.end) < parseDate(e.date))) bad(`${w}: bad end`);
      if (e.at && !lonlat(e.at)) bad(`${w}: bad coordinates`);
      if (!e.title) bad("event without a title");
    }
    for (const l of raw.leaders || []) {
      const w = `leader "${l.name}"`;
      dup(l.id, w);
      if (!sides.has(l.side)) bad(`${w}: unknown side ${l.side}`);
      const lifeKnown = !l.lifeUnknown;
      if (lifeKnown && (!okDate(l.born) || !okDate(l.died))) { bad(`${w}: bad life dates (or set lifeUnknown)`); continue; }
      const terms = l.terms || [[l.start, l.end]];
      for (const [a, b] of terms) {
        if (!okDate(a) || !okDate(b)) { bad(`${w}: bad term`); continue; }
        if (parseDate(a) > parseDate(b)) bad(`${w}: term ends before it starts`);
        if (lifeKnown && (parseDate(a) < parseDate(l.born) || parseDate(b) > parseDate(l.died))) bad(`${w}: term outside lifetime`);
      }
    }
    for (const c of raw.chapters || []) {
      const w = `chapter "${c.title}"`;
      dup(c.id, w);
      if (!okDate(c.start) || !okDate(c.end) || parseDate(c.start) > parseDate(c.end)) bad(`${w}: bad dates`);
      const bb = c.bbox;
      if (!bb || !lonlat(bb[0]) || !lonlat(bb[1])) bad(`${w}: bad bbox`);
      else if (bb[0][0] >= bb[1][0] || bb[0][1] >= bb[1][1]) bad(`${w}: bbox must be [[west,south],[east,north]] and must not cross 180°`);
    }
    for (const b of raw.books || []) {
      const w = `book "${b.title}"`;
      dup(b.id, w);
      if (!okDate(b.start) || !okDate(b.end)) bad(`${w}: bad dates`);
      if (b.owned && !Number.isInteger(b.calibreId)) bad(`${w}: owned books need a calibreId`);
      if (b.amits && !b.note) bad(`${w}: Amit's own work needs a vault note path`);
    }
    const fictionLanes = new Set((raw.lanes || []).filter((l) => l.fiction).map((l) => l.id));
    const works = (raw.books || []).filter((b) => b.amits);
    for (const it of [...(raw.events || []), ...(raw.chapters || [])]) {
      const w = `"${it.title}"`;
      if (fictionLanes.has(it.lane) && !it.fic) bad(`${w}: events in a fiction lane need a fic heading`);
      if (it.fic && !works.length) bad(`${w}: has fic but the dataset lists none of Amit's works`);
      if (it.fic && typeof it.fic !== "string" && !(it.fic && typeof it.fic.note === "string")) bad(`${w}: fic must be a heading or {note, heading}`);
    }
    for (const p of raw.plates || []) {
      const w = `plate "${p.id}"`;
      if (!p.id || !/^[a-z0-9-]+$/.test(p.id)) bad(`${w}: id must be the atlas plate id (lowercase, hyphens)`);
      if (!p.title) bad(`${w}: needs a title`);
      if (!okDate(p.start) || !okDate(p.end) || parseDate(p.start) > parseDate(p.end)) bad(`${w}: bad dates`);
    }
    for (const s of raw.mapStates || []) {
      if (!okDate(s.date)) bad(`map state "${s.label}": bad date`);
      for (const k of Object.keys(s.status || {})) if (!sides.has(k)) bad(`map state "${s.label}": unknown side ${k}`);
    }
    if (typeof raw.mapNote !== "string" || !raw.mapNote) bad("mapNote is required (Principle II)");
    for (const l of raw.lanes || []) if (!((raw.colours || {}).lanes || {})[l.id]) bad(`lane ${l.id} has no colour`);
    return errs;
  }

  // ---- chapter scenes: each chapter can carry a small atlas-grammar map and the names in its text

  /** The scene for a chapter, from window.SCENES[datasetId][chapterId], or null. */
  function sceneFor(scenes, dsId, ch) {
    const s = scenes && scenes[dsId];
    return (ch && s && s[ch.id]) || null;
  }

  /** Is this layer shown at map zoom k? Layers can set minK / maxK for detail that appears as you zoom in. */
  function visibleAt(layer, k) {
    return (layer.minK == null || k >= layer.minK) && (layer.maxK == null || k < layer.maxK);
  }

  /**
   * Split text into plain runs and linked terms. Each term links at its first mention only; longer terms win,
   * so "House of Wisdom" isn't eaten by "Wisdom". Returns [{ text, term? }].
   */
  function linkTerms(text, terms) {
    const src = String(text || "");
    const hits = [];
    for (const term of [...(terms || [])].sort((a, b) => b.t.length - a.t.length)) {
      let from = 0, at;
      while ((at = src.indexOf(term.t, from)) >= 0) {
        const end = at + term.t.length;
        const word = (i) => i >= 0 && i < src.length && /[\p{L}\p{N}]/u.test(src[i]);
        if (!word(at - 1) && !word(end) && !hits.some((h) => at < h.end && end > h.at)) { hits.push({ at, end, term }); break; }
        from = at + 1;
      }
    }
    hits.sort((a, b) => a.at - b.at);
    const out = [];
    let i = 0;
    for (const h of hits) {
      if (h.at > i) out.push({ text: src.slice(i, h.at) });
      out.push({ text: src.slice(h.at, h.end), term: h.term });
      i = h.end;
    }
    if (i < src.length) out.push({ text: src.slice(i) });
    return out;
  }

  /** Where a term goes: your note if there is one, otherwise Wikipedia. */
  function termUrl(term) {
    return term.note ? obsidianUrl(term.note, term.heading) : wikiUrl(term.wiki || term.t);
  }

  const SCENE_TYPES = ["area", "arrow", "route", "boundary", "point", "label"];
  const SCENE_TIERS = ["core", "conquest", "influence"];
  const SCENE_SYMBOLS = ["city", "large-city", "capital", "port", "university", "temple", "stupa", "monastery", "battle", "fortress", "treaty", "insurrection", "find"];

  /** Problems with one chapter's scene (layers in the atlas grammar, plus terms). Empty means it can be drawn. */
  function validateScene(scene, ch) {
    const errs = [], name = ch ? ch.title : "?";
    const bad = (m) => errs.push(`scene "${name}": ${m}`);
    const ll = (p) => Array.isArray(p) && p.length === 2 && p.every(Number.isFinite) && Math.abs(p[0]) <= 180 && Math.abs(p[1]) <= 90;
    if (!scene || !Array.isArray(scene.layers) || !scene.layers.length) { bad("needs layers"); return errs; }
    scene.layers.forEach((L, i) => {
      const w = `layer ${i + 1} (${L.name || L.text || L.type})`;
      if (!SCENE_TYPES.includes(L.type)) return bad(`${w}: unknown type ${L.type}`);
      if (L.type === "area" && !(Array.isArray(L.around) && L.around.length >= 3 && L.around.every(ll))) bad(`${w}: area needs around of 3+ [lon,lat]`);
      if (L.type === "area" && L.tier && !SCENE_TIERS.includes(L.tier)) bad(`${w}: unknown tier ${L.tier}`);
      if (["arrow", "route", "boundary"].includes(L.type) && !(Array.isArray(L.path) && L.path.length >= 2 && L.path.every(ll))) bad(`${w}: needs a path of 2+ [lon,lat]`);
      if (L.type === "point" && !ll(L.at)) bad(`${w}: point needs at`);
      if (L.type === "point" && L.symbol && !SCENE_SYMBOLS.includes(L.symbol)) bad(`${w}: unknown symbol ${L.symbol}`);
      if (L.type === "point" && !L.name) bad(`${w}: point needs a name`);
      if (L.type === "label" && !(L.text && ll(L.at))) bad(`${w}: label needs text and at`);
      if (L.minK != null && !(L.minK >= 1)) bad(`${w}: minK must be 1 or more`);
    });
    const text = ch && ch.text ? ch.text : "";
    for (const term of scene.terms || []) {
      if (!term.t) { bad("term without t"); continue; }
      if (text && !linkTerms(text, [term]).some((r) => r.term)) bad(`term "${term.t}" is not in the chapter text`);
    }
    return errs;
  }

  return {
    sceneFor, visibleAt, linkTerms, termUrl, validateScene, SCENE_SYMBOLS,
    DAY, VAULT, VAULT_ID, parseDate, isPartial, isoDate, fmtDate, fmtRange, slug, normalise, nearWindow,
    nearbyEvents, activeLeaders, activeChapters, activeChapter, mapStateAt, booksFor, fictionFor, ficTarget,
    obsidianUrl, wikiUrl, calibreUrl, plateUrl, libraryUrl, linksFor, parseHash, formatHash, search, stepEvent, validate
  };
});
