/* World Viewer model: pure functions, no DOM.
   Works in the browser (window.HM) and in Node (module.exports) so it can be unit-tested. */
(function (root, factory) {
  const api = factory(root);
  if (typeof module === "object" && module.exports) module.exports = api;
  else root.HM = api;
})(typeof self !== "undefined" ? self : this, function (root) {
  "use strict";

  const WIKI_TITLES = typeof module === "object" && module.exports
    ? require("../data/wiki-titles.js") : root.WIKI_TITLES;
  const WIDE_WIKI = {
    ancient: "Ancient history", medieval: "Middle Ages", maritime: "Age of Discovery",
    transition: "Early modern period", "early-modern": "Early modern period",
    revolution: "Age of Revolution", restoration: "19th century", national: "19th century",
    imperial: "New Imperialism", ww1: "World War I", interwar1: "Interwar period",
    interwar2: "Interwar period", ww2: "World War II", russia: "History of Russia"
  };
  const DAY = 86400000;
  const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  // Dates are YYYY, YYYY-MM or YYYY-MM-DD. BC years take a minus sign and the historian's numbering, with no
  // year 0: "-0218" is 218 BC, "-0216-08-02" is 2 Aug 216 BC. Inside, they become astronomical years (218 BC = -217),
  // which is what JavaScript dates use.
  const DATE_RE = /^(-\d{1,4}|\d{1,4})(?:-(\d{2})(?:-(\d{2}))?)?$/;
  const YEAR_ONLY = /^(-\d{1,4}|\d{4})$/, YEAR_MONTH = /^(-\d{1,4}|\d{4})-\d{2}$/;
  const toAstro = (y) => (y < 0 ? y + 1 : y);
  const toHist = (Y) => (Y <= 0 ? Y - 1 : Y);
  /** A year for people: 218 BC, 1812. Takes the astronomical year a Date holds. */
  const fmtYear = (Y) => (Y <= 0 ? `${1 - Y} BC` : String(Y));
  const VAULT = "Fourth Vault July 2023";
  // Obsidian's id for the A:\ vault (from %APPDATA%\obsidian\obsidian.json). Links use the id, not the name, because a
  // stale OneDrive copy is registered under the same name and Obsidian would open that one instead.
  const VAULT_ID = "333bfdd695459a48";
  const CALIBRE_LIBRARY = "CalibreLibrary";
  const BOOKS = {
    "golden-road": {
      id: "golden-road",
      label: "Golden Road aha",
      title: "The Golden Road",
      author: "William Dalrymple",
      note: "Golden Road - aha notes"
    }
  };

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
    if (+m[1] === 0) return null;
    const y = toAstro(+m[1]);
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

  const isPartial = (s) => typeof s === "string" && (YEAR_ONLY.test(s) || YEAR_MONTH.test(s));

  function isoDate(t) {
    const h = toHist(t.getUTCFullYear());
    const y = (h < 0 ? "-" : "") + String(Math.abs(h)).padStart(4, "0");
    return `${y}-${String(t.getUTCMonth() + 1).padStart(2, "0")}-${String(t.getUTCDate()).padStart(2, "0")}`;
  }

  /** Human date. Respects the precision of the original string. */
  function fmtDate(s, approx) {
    const t = parseDate(s);
    if (!t) return "";
    const str = typeof s === "string" ? s : isoDate(t);
    const yr = fmtYear(t.getUTCFullYear());
    let out;
    if (YEAR_ONLY.test(str)) out = yr;
    else if (YEAR_MONTH.test(str)) out = `${MONTHS[t.getUTCMonth()]} ${yr}`;
    else out = `${t.getUTCDate()} ${MONTHS[t.getUTCMonth()]} ${yr}`;
    return (approx ? "c. " : "") + out;
  }

  function fmtRange(a, b, approx) {
    if (!b || b === a) return fmtDate(a, approx);
    const ta = parseDate(a), tb = parseDate(b);
    if (YEAR_ONLY.test(a) && YEAR_ONLY.test(b)) {
      const ya = ta.getUTCFullYear(), yb = tb.getUTCFullYear(), c = approx ? "c. " : "";
      if (yb <= 0) return `${c}${1 - ya}–${1 - yb} BC`;
      if (ya <= 0) return `${c}${1 - ya} BC – AD ${yb}`;
      return `${c}${ya}–${yb}`;
    }
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
    const year = (s) => { const t = parseDate(s); if (!t) return ""; const Y = t.getUTCFullYear(); return Y <= 0 ? `${1 - Y}bc` : Y; };
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
    linkChapters(ds.chapters);
    const chapterRegions = raw.chapterRegions || {};
    for (const c of ds.chapters) c.region = c.region || chapterRegions[c.id] || null;
    for (const c of ds.chapters) if (!c.region && c.parentId) c.region = ds.chapters.find((p) => p.id === c.parentId)?.region || null;
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

  // ---- chapter tree: a chapter can name a `parent` chapter by id, so big parts hold smaller chapters

  /** Fill in parentId, children (ids, by start) and depth. Unknown parents and cycles leave a chapter at the top. */
  function linkChapters(chapters) {
    const byId = new Map(chapters.map((c) => [c.id, c]));
    for (const c of chapters) { c.parentId = null; c.children = []; }
    for (const c of chapters) {
      const p = c.parent && byId.get(c.parent);
      if (!p || p === c) continue;
      let a = p, loop = false;
      for (let n = 0; a && n <= chapters.length; n++, a = byId.get(a.parentId)) if (a === c) { loop = true; break; }
      if (!loop) c.parentId = p.id;
    }
    for (const c of chapters) if (c.parentId) byId.get(c.parentId).children.push(c.id);
    for (const c of chapters) c.children.sort((a, b) => byId.get(a).t0 - byId.get(b).t0);
    const depth = (c) => (c.parentId ? 1 + depth(byId.get(c.parentId)) : 0);
    for (const c of chapters) c.depth = depth(c);
    return chapters;
  }

  /** Parent, grandparent, … of a chapter, nearest first. */
  function ancestors(ds, c) {
    const out = [];
    for (let p = c && ds.byId.get(c.parentId); p; p = ds.byId.get(p.parentId)) out.push(p);
    return out;
  }

  /** Is a an ancestor of b (or b itself)? */
  function within(ds, a, b) {
    return !!a && !!b && (a === b || ancestors(ds, b).includes(a));
  }

  /** Chapters you can see: those whose ancestors are all open. `collapsed(c)` says if a parent is folded. */
  function openChapters(ds, collapsed) {
    return ds.chapters.filter((c) => !ancestors(ds, c).some((p) => collapsed(p)));
  }

  /**
   * The chapter whose map fits this moment and this zoom. Zoomed out, a big part tells the story; zoomed in, its
   * detailed chapters do. Among the chapters covering t (and passing `ok`), prefer the shortest one that still fills at
   * least `share` of the visible span; if none is that long, the shortest of all.
   */
  function focusChapter(ds, t, span, ok = () => true, share = 0.2) {
    const cands = activeChapters(ds, t).filter(ok).sort((a, b) => (a.t1 - a.t0) - (b.t1 - b.t0));
    if (!cands.length) return null;
    const priority = cands.filter((c) => Number.isFinite(c.focusPriority)).sort((a, b) => b.focusPriority - a.focusPriority || (a.t1 - a.t0) - (b.t1 - b.t0));
    if (priority.length) return priority[0];
    return (span && cands.find((c) => c.t1 - c.t0 >= span * share)) || cands[0];
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

  function ahaLinks(item) {
    return (item.aha || []).map((a) => {
      const book = BOOKS[a.book];
      if (!book) return null;
      return { kind: "aha", book: book.id, label: book.label, heading: a.heading, href: obsidianUrl(book.note, a.heading) };
    }).filter(Boolean);
  }

  function wikiUrl(topic) {
    const title = topic && WIKI_TITLES[topic.trim()];
    return title ? `https://en.wikipedia.org/wiki/${encodeURIComponent(title.replace(/ /g, "_"))}` : null;
  }

  function wikiPair(subjects, wider) {
    const subject = [].concat(subjects || []).find((s) => wikiUrl(s));
    const broad = [].concat(wider || []).find((s) => wikiUrl(s) && wikiUrl(s) !== wikiUrl(subject));
    if (!subject || !broad) return [];
    return [
      { kind: "wiki", label: "Overview", title: WIKI_TITLES[subject], href: wikiUrl(subject) },
      { kind: "wiki-wide", label: "Wider history", title: WIKI_TITLES[broad], href: wikiUrl(broad) }
    ];
  }

  function wikiLinks(ds, item) {
    const chapters = ds.chapters.filter((c) => c.id !== item.id && c.t0 <= item.t0 && c.t1 >= item.t0)
      .sort((a, b) => (a.t1 - a.t0) - (b.t1 - b.t0));
    return wikiPair(
      [item.wiki, item.name, item.title, ...chapters.map((c) => c.wiki || c.title), WIDE_WIKI[ds.id]],
      [WIDE_WIKI[ds.id], "World history"]
    );
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
      // A chapter's own plate (its `plate` field) comes first, then any plate whose dates overlap it.
      const own = item.plate ? [].concat(item.plate) : [];
      const ps = (ds.plates || []).filter((p) => own.includes(p.id) || (item.t0 <= p.t1 && item.t1 >= p.t0));
      ps.sort((a, b) => (own.includes(b.id) ? 1 : 0) - (own.includes(a.id) ? 1 : 0));
      for (const p of ps) out.push({ kind: "plate", label: `Atlas plate: ${p.title}`, href: plateUrl(p.id) });
    }
    if (item.kind === "book" && item.amits) {
      out.push({ kind: "fiction", label: "Open in Amit's Fiction", href: obsidianUrl(item.note, item.heading) });
    } else if (item.kind === "book") {
      if (item.owned && item.calibreId != null) out.push({ kind: "calibre", label: "Open in Calibre", href: calibreUrl(item.calibreId) });
      out.push({ kind: "library", label: "Ottawa Public Library", href: libraryUrl(item) });
      if (!item.fiction) out.push(...wikiPair([`book:${item.title} by ${item.author}`], [WIDE_WIKI[ds.id], "World history"]));
    } else if (!(item.kind === "event" && ds.lanes.find((l) => l.id === item.lane)?.fiction)) {
      out.push(...wikiLinks(ds, item));
    }
    return out;
  }


  function parseQuery(q) {
    const out = {};
    String(q || "").replace(/^\?/, "").split("&").filter(Boolean).forEach((pair) => {
      const i = pair.indexOf("=");
      const k = decodeURIComponent(i < 0 ? pair : pair.slice(0, i));
      out[k] = decodeURIComponent(i < 0 ? "" : pair.slice(i + 1));
    });
    return out;
  }
  function queryString(params) {
    const pairs = Object.entries(params || {}).filter(([, v]) => v != null && v !== "");
    return pairs.length ? "?" + pairs.map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`).join("&") : "";
  }

  function histBasemapDateAtOrBefore(dates, t) {
    const y = t instanceof Date ? yearOf(t) : Number(t);
    const sorted = (dates || []).map(Number).filter(Number.isFinite).sort((a, b) => a - b);
    let best = null;
    for (const d of sorted) { if (d <= y) best = d; else break; }
    return best == null ? (sorted[0] ?? null) : best;
  }

  function snapshotAt(snapshots, t) {
    const y = t instanceof Date ? yearOf(t) : Number(t);
    let best = null;
    for (const s of (snapshots || []).slice().sort((a, b) => a.year - b.year)) {
      if (s.year <= y) best = s; else break;
    }
    return best || (snapshots || []).slice().sort((a, b) => a.year - b.year)[0] || null;
  }

  function validateWorldSnapshots(snapshots, regionsTopo) {
    const errs = [];
    const geoms = regionsTopo && regionsTopo.objects && regionsTopo.objects.regions && regionsTopo.objects.regions.geometries || [];
    const codes = new Set(geoms.map((g) => g.properties && g.properties.code).filter(Boolean));
    for (const snap of snapshots || []) {
      if (typeof snap.year !== "number") errs.push(`snapshot ${snap.year}: year must be a number`);
      for (const p of snap.polities || []) {
        if (!p.id || !p.name || !p.colour) errs.push(`snapshot ${snap.year}: polity needs id, name and colour`);
        for (const code of [...(p.regions || []), ...(p.minus || [])]) if (!codes.has(code)) errs.push(`snapshot ${snap.year}: ${p.id}: unknown region ${code}`);
        if ((!p.regions || !p.regions.length) && !p.polygon) errs.push(`snapshot ${snap.year}: ${p.id}: needs regions or polygon`);
      }
    }
    return errs;
  }

  // ---- address -----------------------------------------------------------

  function parseHash(hash, datasets, defaultId) {
    const rawHash = String(hash || "").replace(/^#/, "");
    const [pathPart, queryPart] = rawHash.split("?");
    const query = parseQuery(queryPart);
    const parts = pathPart.split("/").map(decodeURIComponent);
    const id = parts[0] && datasets[parts[0]] ? parts[0] : defaultId;
    const fellBack = id !== parts[0];
    const raw = datasets[id];
    const lo = parseDate(raw.range[0]), hi = parseDate(raw.range[1]);
    let t = fellBack ? null : parseDate(parts[1]);
    if (!t) t = parseDate(raw.startAt) || lo;
    if (t < lo) t = lo;
    if (t > hi) t = hi;
    return { dataset: id, date: t, item: fellBack ? null : (parts[2] || null), query };
  }

  function formatHash(id, t, itemId, params) {
    return `#${id}/${isoDate(t)}${itemId ? "/" + encodeURIComponent(itemId) : ""}${queryString(params)}`;
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
    const chIds = new Map((raw.chapters || []).map((c) => [c.id || `ch-${slug(c.title)}`, c]));
    for (const c of raw.chapters || []) {
      const w = `chapter "${c.title}"`;
      dup(c.id, w);
      if (!okDate(c.start) || !okDate(c.end) || parseDate(c.start) > parseDate(c.end)) bad(`${w}: bad dates`);
      const bb = c.bbox;
      if (!bb || !lonlat(bb[0]) || !lonlat(bb[1])) bad(`${w}: bad bbox`);
      else if (bb[0][0] >= bb[1][0] || bb[0][1] >= bb[1][1]) bad(`${w}: bbox must be [[west,south],[east,north]] and must not cross 180°`);
      if (c.parent) {
        const p = chIds.get(c.parent);
        if (!p) bad(`${w}: unknown parent ${c.parent}`);
        else if (p === c) bad(`${w}: is its own parent`);
        else if (okDate(p.start) && okDate(p.end) && okDate(c.start) && okDate(c.end) &&
          (parseDate(c.start) < parseDate(p.start) || parseDate(c.end) > parseDate(p.end))) bad(`${w}: runs outside its parent "${p.title}"`);
        const seen = new Set([c]);
        for (let a = p; a && a.parent; a = chIds.get(a.parent)) {
          if (seen.has(a)) { bad(`${w}: parent chain loops`); break; }
          seen.add(a);
        }
      }
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
      for (const a of it.aha || []) {
        if (!BOOKS[a.book]) bad(`${w}: unknown aha book ${a.book}`);
        if (!a.heading) bad(`${w}: aha needs a heading`);
      }
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

  // The first and last instant a partial date covers: "1505" runs from 1 Jan to 31 Dec, "1812-09" through September.
  function dateStart(s) {
    const t = parseDate(s);
    if (!t || !isPartial(s)) return t;
    return YEAR_ONLY.test(s) ? utc(t.getUTCFullYear(), 0, 1) : utc(t.getUTCFullYear(), t.getUTCMonth(), 1);
  }
  function dateEnd(s) {
    const t = parseDate(s);
    if (!t || !isPartial(s)) return t;
    return YEAR_ONLY.test(s) ? utc(t.getUTCFullYear(), 11, 31) : utc(t.getUTCFullYear(), t.getUTCMonth() + 1, 0);
  }

  /**
   * Is a dated layer true at moment t? `from` / `until` take YYYY, YYYY-MM or YYYY-MM-DD. This is the atlas's dated
   * growth tier ("conquests to 201", "areas conquered 241–218") played out on the timeline: a tier appears when its
   * date comes. Undated layers, or no moment at all, are always live.
   */
  function liveAt(layer, t) {
    if (!t) return true;
    if (layer.from && t < dateStart(layer.from)) return false;
    if (layer.until && t > dateEnd(layer.until)) return false;
    return true;
  }

  /**
   * Where a dated campaign itinerary stands at moment t. Stops carry `at` and `date`; leg i runs from stop i to stop i+1.
   * Returns { done: legs finished, leg: the leg under way (or -1), f: 0..1 along it, pos: [lon, lat] or null, started, ended }.
   * Before the first stop nothing has happened; after the last, everything has. With no moment, the whole route is shown done.
   */
  function itineraryAt(L, t) {
    const stops = L.stops || [], n = stops.length - 1;
    const ts = stops.map((s) => parseDate(s.date).getTime());
    if (!t) return { done: n, leg: -1, f: 1, pos: null, started: true, ended: true };
    const x = t.getTime();
    if (x < ts[0]) return { done: 0, leg: -1, f: 0, pos: null, started: false, ended: false };
    if (x >= ts[n]) return { done: n, leg: -1, f: 1, pos: stops[n].at, started: true, ended: true };
    let i = 0;
    while (i < n - 1 && x >= ts[i + 1]) i++;
    const f = ts[i + 1] > ts[i] ? (x - ts[i]) / (ts[i + 1] - ts[i]) : 1;
    const [a, b] = [stops[i].at, stops[i + 1].at];
    return { done: i, leg: i, f, pos: [a[0] + (b[0] - a[0]) * f, a[1] + (b[1] - a[1]) * f], started: true, ended: false };
  }

  /** A stop's date as the atlas prints it beside the route: "7 Sep", "Sep" or "1812", plus the year when it changes. */
  function stopLabel(stops, i) {
    const s = stops[i], t = parseDate(s.date), y = t.getUTCFullYear();
    const prevY = i ? parseDate(stops[i - 1].date).getUTCFullYear() : null;
    const yr = i === 0 || y !== prevY ? ` ${fmtYear(y)}` : "";
    if (YEAR_ONLY.test(s.date)) return fmtYear(y);
    if (YEAR_MONTH.test(s.date)) return `${MONTHS[t.getUTCMonth()]}${yr}`;
    return `${t.getUTCDate()} ${MONTHS[t.getUTCMonth()]}${yr}`;
  }

  /** The dated growth tiers in a scene, oldest first, for the key's chronology ladder: [{ from, label }]. */
  function sceneLadder(scene) {
    const seen = new Map();
    for (const L of (scene && scene.layers) || []) if (L.type === "area" && L.from && !seen.has(L.from)) seen.set(L.from, L.name || L.from);
    return [...seen].map(([from, label]) => ({ from, label })).sort((a, b) => dateStart(a.from) - dateStart(b.from));
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

  const SCENE_TYPES = ["area", "arrow", "route", "boundary", "point", "label", "itinerary", "front"];
  const SCENE_TIERS = ["core", "conquest", "influence"];
  const SCENE_SYMBOLS = ["city", "large-city", "capital", "port", "university", "temple", "stupa", "monastery", "battle", "fortress", "treaty", "insurrection", "find", "ally"];

  /** Problems with one chapter's scene (layers in the atlas grammar, plus terms). Empty means it can be drawn. */
  function validateScene(scene, ch) {
    const errs = [], name = ch ? ch.title : "?";
    const bad = (m) => errs.push(`scene "${name}": ${m}`);
    const ll = (p) => Array.isArray(p) && p.length === 2 && p.every(Number.isFinite) && Math.abs(p[0]) <= 180 && Math.abs(p[1]) <= 90;
    if (!scene || !Array.isArray(scene.layers) || !scene.layers.length) { bad("needs layers"); return errs; }
    scene.layers.forEach((L, i) => {
      const w = `layer ${i + 1} (${L.name || L.text || L.type})`;
      if (!SCENE_TYPES.includes(L.type)) return bad(`${w}: unknown type ${L.type}`);
      if (L.type === "area" && !(Array.isArray(L.around) && L.around.length >= 3 && L.around.every(ll)) && !(Array.isArray(L.regions) && L.regions.length) && !(L.hist && Number.isFinite(+L.hist.year) && Array.isArray(L.hist.names) && L.hist.names.length)) bad(`${w}: area needs around of 3+ [lon,lat], regions, or hist names`);
      if (L.type === "area" && L.tier && !SCENE_TIERS.includes(L.tier)) bad(`${w}: unknown tier ${L.tier}`);
      if (["arrow", "route", "boundary"].includes(L.type) && !(Array.isArray(L.path) && L.path.length >= 2 && L.path.every(ll))) bad(`${w}: needs a path of 2+ [lon,lat]`);
      if (L.type === "point" && !ll(L.at)) bad(`${w}: point needs at`);
      if (L.type === "point" && L.symbol && !SCENE_SYMBOLS.includes(L.symbol)) bad(`${w}: unknown symbol ${L.symbol}`);
      if (L.type === "point" && !L.name) bad(`${w}: point needs a name`);
      if (L.type === "label" && !(L.text && ll(L.at))) bad(`${w}: label needs text and at`);
      if (L.minK != null && !(L.minK >= 1)) bad(`${w}: minK must be 1 or more`);
      if (L.type === "front" && !(Array.isArray(L.path) && L.path.length >= 2 && L.path.every(ll))) bad(`${w}: front needs a path of 2+ [lon,lat]`);
      for (const k of ["from", "until"]) if (L[k] != null && !parseDate(L[k])) bad(`${w}: ${k} must be YYYY, YYYY-MM or YYYY-MM-DD`);
      if (L.from && L.until && dateStart(L.from) > dateEnd(L.until)) bad(`${w}: until is before from`);
      if (L.type === "itinerary") {
        const st = L.stops;
        if (!(Array.isArray(st) && st.length >= 2)) return bad(`${w}: itinerary needs 2+ stops`);
        st.forEach((s, j) => {
          if (!ll(s.at)) bad(`${w}: stop ${j + 1} needs at`);
          if (!parseDate(s.date)) bad(`${w}: stop ${j + 1} (${s.name || "?"}) needs a date`);
          else if (j && parseDate(st[j - 1].date) && parseDate(s.date) < parseDate(st[j - 1].date)) bad(`${w}: stop ${j + 1} (${s.name || "?"}) is earlier than the stop before`);
          if (s.via && !(Array.isArray(s.via) && s.via.every(ll))) bad(`${w}: stop ${j + 1} via must be [lon,lat] points`);
        });
      }
    });
    const text = ch && ch.text ? ch.text : "";
    for (const term of scene.terms || []) {
      if (!term.t) { bad("term without t"); continue; }
      if (text && !linkTerms(text, [term]).some((r) => r.term)) bad(`term "${term.t}" is not in the chapter text`);
    }
    return errs;
  }

  /**
   * The colour key for a scene, grouped the way the atlas reads: who (areas, with any arrows in the same colour), and
   * movement in colours no area claims. A layer's `who` names its actor; otherwise an area's name does. `scene.key`
   * overrides everything. Returns [{ colour, label, marks: ["core"|"conquest"|"influence"|"arrow"|"route"], group }].
   */
  function sceneKey(scene, actors) {
    if (!scene) return [];
    if (Array.isArray(scene.key)) return scene.key.map((e) => Object.assign({ marks: ["core"], group: "who" }, e));
    const named = new Map(Object.entries(actors || {}).map(([c, n]) => [c.toLowerCase(), n]));
    const by = new Map();
    for (const L of scene.layers || []) {
      if (!["area", "arrow", "route", "itinerary", "front"].includes(L.type)) continue;
      const colour = (L.colour || (L.type === "route" ? "#2e5f8a" : "#8a7a5a")).toLowerCase();
      const mark = L.type === "area" ? (L.tier || "core") : L.type === "itinerary" ? (L.style === "dashed" ? "itinerary-dashed" : "itinerary") : L.type;
      if (!by.has(colour)) by.set(colour, { colour, who: null, area: null, names: [], marks: [] });
      const e = by.get(colour);
      if (L.who && !e.who) e.who = L.who;
      if (L.type === "area" && L.name && !e.area) e.area = L.name;
      if (L.type !== "area" && L.name) e.names.push(L.name);
      if (!e.marks.includes(mark)) e.marks.push(mark);
    }
    const out = [];
    for (const e of by.values()) {
      const label = e.who || named.get(e.colour) || e.area || (e.names.length ? e.names[0] + (e.names.length > 1 ? ` + ${e.names.length - 1} more` : "") : null);
      if (!label) continue;
      const hasArea = e.marks.some((m) => SCENE_TIERS.includes(m));
      out.push({ colour: e.colour, label, marks: e.marks, group: hasArea || ((e.who || named.has(e.colour)) && e.marks.some((m) => m === "arrow" || m.startsWith("itinerary"))) ? "who" : "movement" });
    }
    return out.sort((a, b) => (a.group === b.group ? 0 : a.group === "who" ? -1 : 1));
  }

  /**
   * Where an atlas plate sits in the viewer, so a plate can point back to the bigger picture. `viewer` is the plate's
   * hash ("ancient/-0216/ch-hannibals-war"). Returns null if the period isn't loaded, else { period, crumbs, inside,
   * meanwhile, plates }: the chapters above and including the plate's, its own sub-chapters, other chapters running
   * at the same time that aren't part of the same story, and the period's other plates. Each has a title, dates and
   * an href relative to the atlas page.
   */
  function plateContext(datasets, viewer, plateId) {
    const [dsId, date, chId] = String(viewer || "").split("/").map(decodeURIComponent);
    const raw = datasets && datasets[dsId];
    if (!raw) return null;
    const ds = normalise(raw);
    const at = parseDate(date) || ds.t0;
    const link = (t, id) => `../app/index.html${formatHash(dsId, t, id)}`;
    const item = (c, t) => ({ id: c.id, title: c.title, dates: fmtRange(c.start, c.end, isPartial(c.start)), href: link(t || c.t0, c.id) });
    const ch = chId && ds.byId.get(chId);
    const t0 = ch ? ch.t0 : at, t1 = ch ? ch.t1 : at;
    const crumbs = ch ? [...ancestors(ds, ch).reverse().map((c) => item(c)), item(ch, at)] : [];
    const inside = ch ? ch.children.map((cid) => item(ds.byId.get(cid))) : [];
    const meanwhile = ds.chapters
      .filter((c) => c.t0 <= t1 && c.t1 >= t0 && !(ch && (within(ds, c, ch) || within(ds, ch, c))))
      .filter((c) => !c.parentId || !ds.chapters.some((p) => p.id === c.parentId && p.t0 <= t1 && p.t1 >= t0 && !(ch && within(ds, p, ch))))
      .map((c) => item(c, c.t0 > t0 ? c.t0 : t0));
    const plates = ds.plates.filter((p) => p.id !== plateId).map((p) => ({ id: p.id, title: p.title, dates: fmtRange(p.start, p.end), href: `#${encodeURIComponent(p.id)}` }));
    return { period: { title: ds.title, href: link(at, ch ? ch.id : null) }, crumbs, inside, meanwhile, plates };
  }

  /**
   * The master timeline: every period on one strip. The scale is piecewise: each span between breaks gets an equal
   * share of the strip, so 1800 BC-500 BC takes the same width as 1900-1950. Otherwise a six-year war would be a
   * hairline next to two thousand years of antiquity. Years are astronomical (fractional), as from yearOf().
   */
  const MASTER_BREAKS = [-1499, -499, 500, 1000, 1500, 1800, 1939, 1946];
  /** Years on the master strip: "1800 BC", "AD 500", "1945". */
  const masterYear = (Y) => (Y <= 0 ? `${1 - Y} BC` : Y < 1000 ? `AD ${Y}` : String(Y));
  const histBasemapYear = (Y) => (Y < 0 ? `${Math.abs(Y)} BC` : Y < 1000 ? `AD ${Y}` : String(Y));
  function yearOf(t) {
    const y = t.getUTCFullYear(), a = utc(y, 0, 1), b = utc(y + 1, 0, 1);
    return y + (t - a) / (b - a);
  }
  function masterLayout(datasets) {
    const periods = Object.entries(datasets || {}).filter(([, d]) => d.kind !== "thread").map(([id, d]) => {
      const t0 = parseDate(d.range[0]), t1 = parseDate(d.range[1]);
      const ey = t1.getUTCFullYear(), jan1 = t1.getUTCMonth() === 0 && t1.getUTCDate() === 1;
      const endYear = jan1 && toHist(ey) % 5 !== 0 ? ey - 1 : ey;
      const extra = d.subtitle && d.subtitle.includes("·") ? d.subtitle.split("·").slice(1).join("·").trim() : "";
      return { id, title: d.title, full: extra ? `${d.title} (with ${extra})` : d.title, short: d.masterTitle || d.title.split(":")[0], from: masterYear(t0.getUTCFullYear()), to: masterYear(endYear), y0: yearOf(t0), y1: yearOf(t1), gapAfter: d.gapAfter || null };
    }).sort((a, b) => a.y0 - b.y0 || b.y1 - a.y1);
    if (!periods.length) return { periods, breaks: [], y0: 0, y1: 1 };
    const y0 = Math.min(...periods.map((p) => p.y0)), y1 = Math.max(...periods.map((p) => p.y1));
    const breaks = [y0, ...MASTER_BREAKS.filter((b) => b > y0 + 50 && b < y1 - 1), y1];
    const rows = [];
    for (const p of periods) {
      let r = rows.findIndex((end) => end <= p.y0);
      if (r < 0) { r = rows.length; rows.push(0); }
      rows[r] = p.y1; p.row = r;
    }
    return { periods, breaks, y0, y1, rows: rows.length };
  }
  /** Where a year falls on the master strip, 0..1. */
  function masterX(layout, year) {
    const b = layout.breaks, n = b.length - 1;
    if (n < 1) return 0;
    if (year <= b[0]) return 0;
    if (year >= b[n]) return 1;
    let i = 0;
    while (i < n - 1 && year > b[i + 1]) i++;
    return (i + (year - b[i]) / (b[i + 1] - b[i])) / n;
  }

  return {
    yearOf, masterLayout, masterX, masterYear, histBasemapYear, histBasemapDateAtOrBefore, snapshotAt, validateWorldSnapshots,
    plateContext,
    sceneKey,
    sceneFor, visibleAt, liveAt, itineraryAt, stopLabel, sceneLadder, dateStart, dateEnd, linkTerms, termUrl, validateScene, SCENE_SYMBOLS,
    linkChapters, ancestors, within, openChapters, focusChapter,
    DAY, VAULT, VAULT_ID, parseDate, isPartial, isoDate, fmtDate, fmtYear, fmtRange, slug, normalise, nearWindow,
    nearbyEvents, activeLeaders, activeChapters, activeChapter, mapStateAt, booksFor, fictionFor, ficTarget,
    BOOKS, obsidianUrl, wikiUrl, wikiPair, wikiLinks, WIDE_WIKI, calibreUrl, plateUrl, libraryUrl, ahaLinks, linksFor, parseHash, formatHash, search, stepEvent, validate
  };
});
