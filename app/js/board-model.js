/* Cause-and-effect boards: pure functions, no DOM.
   A board is a set of event tiles and an answer key of arrows ("this led to that"). The player draws arrows
   from memory, checks, and tries again; arrows found earlier score more. Works in the browser (window.BM) and Node. */
(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  else root.BM = api;
})(typeof self !== "undefined" ? self : this, function () {
  "use strict";

  // points for each correct arrow, by the check on which it was first confirmed (1st, 2nd, 3rd, later)
  const POINTS = [10, 6, 3, 1];
  const HINT_COST = 3;
  const KINDS = ["background", "crisis", "trigger", "july", "war"];

  const key = (a, b) => `${a}>${b}`;

  function validate(b) {
    const errs = [];
    const bad = (m) => errs.push(m);
    if (!b || !b.id || !/^[a-z0-9-]+$/.test(b.id)) bad("board needs an id (lowercase, hyphens)");
    if (!b.title || !b.question) bad("board needs a title and a question");
    const ids = new Set();
    for (const t of b.tiles || []) {
      if (!t.id) { bad("tile without id"); continue; }
      if (ids.has(t.id)) bad(`duplicate tile ${t.id}`);
      ids.add(t.id);
      if (!t.title || !t.date) bad(`tile ${t.id}: needs title and date`);
      if (t.kind && !KINDS.includes(t.kind)) bad(`tile ${t.id}: unknown kind ${t.kind}`);
    }
    if ((b.tiles || []).length < 3) bad("a board needs at least three tiles");
    const seen = new Set();
    for (const [list, name] of [[b.links || [], "link"], [b.also || [], "also"]]) {
      for (const l of list) {
        if (!ids.has(l.from) || !ids.has(l.to)) bad(`${name} ${l.from} → ${l.to}: unknown tile`);
        if (l.from === l.to) bad(`${name} ${l.from}: an arrow can't point at itself`);
        const k = key(l.from, l.to);
        if (seen.has(k)) bad(`${name} ${k}: listed twice`);
        seen.add(k);
        if (name === "link" && !l.why) bad(`link ${k}: needs a why`);
      }
    }
    if (!(b.links || []).length) bad("a board needs at least one required link");
    return errs;
  }

  /** Answer key: arrow key -> { link, required }. */
  function answerKey(b) {
    const m = new Map();
    for (const l of b.links) m.set(key(l.from, l.to), { link: l, required: true });
    for (const l of b.also || []) m.set(key(l.from, l.to), { link: l, required: false });
    return m;
  }

  function newGame() {
    return { checks: 0, score: 0, hints: 0, confirmed: new Map(), done: false, revealed: false };
  }

  /**
   * Check the player's arrows. Arrows already confirmed stay confirmed; newly correct ones score by check number.
   * Returns { correct, wrong, gained, foundRequired, totalRequired, done }.
   */
  function check(b, game, arrows) {
    const ak = answerKey(b);
    const pts = POINTS[Math.min(game.checks, POINTS.length - 1)];
    const correct = [], wrong = [];
    let gained = 0;
    for (const [a, c] of arrows) {
      const k = key(a, c);
      if (ak.has(k)) {
        correct.push(k);
        if (!game.confirmed.has(k)) { game.confirmed.set(k, game.checks + 1); gained += pts; }
      } else wrong.push(k);
    }
    game.checks += 1;
    game.score += gained;
    const totalRequired = b.links.length;
    const foundRequired = b.links.filter((l) => game.confirmed.has(key(l.from, l.to))).length;
    game.done = foundRequired === totalRequired;
    return { correct, wrong, gained, foundRequired, totalRequired, done: game.done };
  }

  /** A required link not yet confirmed, for a hint (the first in key order, so hints are predictable). */
  function hint(b, game) {
    const l = b.links.find((x) => !game.confirmed.has(key(x.from, x.to)));
    if (!l) return null;
    game.hints += 1;
    game.score = Math.max(0, game.score - HINT_COST);
    return l;
  }

  /** Share of the best possible score (every required arrow on the first check, no hints). */
  function percent(b, game) {
    return Math.round(Math.min(100, (100 * game.score) / (b.links.length * POINTS[0])));
  }

  /** Spaced review: the better you did, the longer until the board comes back. */
  function nextReviewDays(pct) {
    return pct >= 90 ? 21 : pct >= 70 ? 7 : pct >= 40 ? 3 : 1;
  }

  /** Small seeded shuffle so a test (or a shared link) can reproduce a layout. */
  function shuffled(list, seed) {
    let s = (seed >>> 0) || 1;
    const rnd = () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296);
    const a = list.slice();
    for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
    return a;
  }

  /** Scatter tiles over a grid, in shuffled order so the layout gives nothing away. */
  function layout(tiles, seed, w, h, tw, th) {
    const cols = Math.max(1, Math.floor(w / (tw + 24)));
    const rows = Math.ceil(tiles.length / cols);
    const gx = (w - cols * tw) / (cols + 1), gy = Math.max(12, (h - rows * th) / (rows + 1));
    const pos = {};
    shuffled(tiles, seed).forEach((t, i) => {
      const c = i % cols, r = Math.floor(i / cols);
      pos[t.id] = { x: Math.round(gx + c * (tw + gx)), y: Math.round(gy + r * (th + gy)) };
    });
    return pos;
  }

  /**
   * After the game: arrange tiles in rows by causal step so the chain reads top to bottom.
   * Each tile sits as late as it can (just above what it leads to); rows are ordered to follow their parents.
   */
  function tidy(b, w, h, tw, th) {
    const out = new Map(b.tiles.map((t) => [t.id, []])), inn = new Map(b.tiles.map((t) => [t.id, []]));
    for (const l of b.links) { out.get(l.from).push(l.to); inn.get(l.to).push(l.from); }
    const toSink = {};
    const L = (n) => (toSink[n] ??= Math.max(0, ...out.get(n).map((m) => L(m) + 1)));
    b.tiles.forEach((t) => L(t.id));
    const depth = Math.max(...Object.values(toSink));
    const rows = Array.from({ length: depth + 1 }, () => []);
    b.tiles.forEach((t) => rows[depth - toSink[t.id]].push(t.id));
    const rowGap = Math.max(th + 8, Math.min(th + 40, (h - 16) / rows.length));
    const pos = {};
    rows.forEach((row, r) => {
      const cx = (id) => {
        const ps = inn.get(id).filter((p) => pos[p]);
        return ps.length ? ps.reduce((s, p) => s + pos[p].x, 0) / ps.length : b.tiles.findIndex((t) => t.id === id) * 1e3;
      };
      row.sort((a, c) => cx(a) - cx(c));
      const gap = Math.min(40, Math.max(8, (w - row.length * tw) / (row.length + 1)));
      const x0 = (w - (row.length * tw + (row.length - 1) * gap)) / 2;
      row.forEach((id, i) => { pos[id] = { x: Math.round(Math.max(0, x0 + i * (tw + gap))), y: Math.round(8 + r * rowGap) }; });
    });
    return pos;
  }

  return { POINTS, HINT_COST, KINDS, key, validate, answerKey, newGame, check, hint, percent, nextReviewDays, shuffled, layout, tidy };
});
