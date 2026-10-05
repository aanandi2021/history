/* Cause-and-effect board UI. Logic lives in board-model.js (window.BM); boards register in window.BOARDS. */
(function () {
  "use strict";
  const BM = window.BM, BOARDS = window.BOARDS || {};
  const $ = (s) => document.querySelector(s);
  const SVGNS = "http://www.w3.org/2000/svg";
  const TW = 176, TH = 64;
  const STORE = "hist-board:";

  let board, game, arrows, status, pos, sel, revealed;

  const wiki = (t) => "https://en.wikipedia.org/wiki/" + encodeURIComponent(t.replace(/ /g, "_"));
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const tileById = (id) => board.tiles.find((t) => t.id === id);
  const load = () => { try { return JSON.parse(localStorage.getItem(STORE + board.id)) || {}; } catch { return {}; } };
  const save = (o) => { try { localStorage.setItem(STORE + board.id, JSON.stringify({ ...load(), ...o })); } catch { /* file:// may refuse */ } };

  function start(id) {
    board = BOARDS[id] || BOARDS[Object.keys(BOARDS)[0]];
    const errs = BM.validate(board);
    if (errs.length) console.warn("board problems", errs);
    game = BM.newGame();
    arrows = new Map();   // key -> [from, to]
    status = new Map();   // key -> "ok" | "bad"
    sel = null; revealed = false;
    document.title = `${board.title} · cause and effect`;
    $("#b-title").textContent = board.title;
    $("#b-question").textContent = board.question;
    $("#b-viewer").href = "index.html" + (board.viewer ? "#" + board.viewer : "");
    $("#b-pick").value = board.id;
    if (location.hash.slice(1) !== board.id) history.replaceState(null, "", "#" + board.id);
    const st = $("#b-stage");
    pos = BM.layout(board.tiles, Number(new URLSearchParams(location.search).get("seed")) || Date.now(),
      Math.max(st.clientWidth, 600), Math.max(st.clientHeight, 420), TW, TH + 10);
    renderTiles(); renderSide(); draw();
  }

  // ---- tiles
  function renderTiles() {
    const box = $("#b-tiles");
    box.innerHTML = "";
    for (const t of board.tiles) {
      const el = document.createElement("div");
      el.className = "tile";
      el.dataset.id = t.id;
      el.dataset.kind = t.kind || "";
      el.tabIndex = 0;
      el.innerHTML = `<button class="more" title="What happened" aria-label="Details">ⓘ</button>
        <div class="t">${esc(t.title)}</div><div class="d">${esc(t.date)}</div>
        <div class="x">${esc(t.text || "")}${t.wiki ? ` <a href="${wiki(t.wiki)}" target="_blank" rel="noopener">Wikipedia</a>` : ""}</div>`;
      place(el, t.id);
      el.querySelector(".more").addEventListener("click", (e) => { e.stopPropagation(); el.classList.toggle("open"); draw(); });
      el.querySelector(".x").addEventListener("pointerdown", (e) => { if (e.target.tagName === "A") e.stopPropagation(); });
      el.addEventListener("pointerdown", (e) => grab(e, el));
      el.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); pick(t.id); } });
      box.appendChild(el);
    }
  }
  const place = (el, id) => { el.style.left = pos[id].x + "px"; el.style.top = pos[id].y + "px"; };

  function grab(e, el) {
    if (e.button !== 0 || e.target.closest(".more")) return;
    const id = el.dataset.id, sx = e.clientX, sy = e.clientY, ox = pos[id].x, oy = pos[id].y;
    let moved = false;
    el.setPointerCapture(e.pointerId);
    const move = (m) => {
      const dx = m.clientX - sx, dy = m.clientY - sy;
      if (!moved && Math.hypot(dx, dy) < 5) return;
      moved = true;
      el.classList.add("dragging");
      const st = $("#b-stage");
      pos[id] = { x: Math.max(0, Math.min(st.clientWidth - el.offsetWidth, ox + dx)), y: Math.max(0, Math.min(st.clientHeight - el.offsetHeight, oy + dy)) };
      place(el, id); draw();
    };
    const up = () => {
      el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerup", up);
      el.classList.remove("dragging");
      if (!moved) pick(id);
    };
    el.addEventListener("pointermove", move);
    el.addEventListener("pointerup", up);
  }

  function pick(id) {
    if (sel === null) { sel = id; }
    else if (sel === id) { sel = null; }
    else { connect(sel, id); sel = null; }
    document.querySelectorAll(".tile").forEach((t) => t.classList.toggle("sel", t.dataset.id === sel));
  }

  // ---- arrows
  function connect(a, b) {
    if (revealed || a === b || !tileById(a) || !tileById(b)) return false;
    const k = BM.key(a, b);
    if (arrows.has(k)) return false;
    arrows.set(k, [a, b]);
    status.delete(k);
    draw(); return true;
  }
  function disconnect(k) {
    if (revealed || status.get(k) === "ok") return false;
    const had = arrows.delete(k);
    status.delete(k);
    draw(); return had;
  }

  function box(id) {
    const el = document.querySelector(`.tile[data-id="${CSS.escape(id)}"]`);
    return { x: pos[id].x, y: pos[id].y, w: el ? el.offsetWidth : TW, h: el ? el.offsetHeight : TH };
  }
  // point where the line from the box centre towards (tx,ty) leaves the box, plus a small gap
  function edge(b, tx, ty, gap) {
    const cx = b.x + b.w / 2, cy = b.y + b.h / 2, dx = tx - cx, dy = ty - cy;
    const s = 1 / Math.max(Math.abs(dx) / (b.w / 2 + gap), Math.abs(dy) / (b.h / 2 + gap), 1e-6);
    return [cx + dx * s, cy + dy * s];
  }
  function line(g, a, b, cls, k) {
    const A = box(a), B = box(b);
    const [x1, y1] = edge(A, B.x + B.w / 2, B.y + B.h / 2, 2);
    const [x2, y2] = edge(B, A.x + A.w / 2, A.y + A.h / 2, 5);
    const mk = (c) => {
      const l = document.createElementNS(SVGNS, "line");
      l.setAttribute("x1", x1); l.setAttribute("y1", y1); l.setAttribute("x2", x2); l.setAttribute("y2", y2);
      l.setAttribute("class", c);
      if (k) l.dataset.key = k;
      return l;
    };
    const vis = mk(cls);
    vis.setAttribute("marker-end", `url(#h-${cls})`);
    g.appendChild(vis);
    if (k && cls !== "ok" && cls !== "missed") {
      const hit = mk("hit");
      hit.addEventListener("click", () => disconnect(k));
      hit.appendChild(document.createElementNS(SVGNS, "title")).textContent = "Click to remove";
      g.appendChild(hit);
    }
    return [(x1 + x2) / 2, (y1 + y2) / 2];
  }
  function draw() {
    const g = $("#b-lines");
    g.innerHTML = "";
    for (const [k, [a, b]] of arrows) {
      const cls = status.get(k) || "draft";
      const mid = line(g, a, b, cls, k);
      const n = game.confirmed.get(k);
      if (cls === "ok" && n) {
        const t = document.createElementNS(SVGNS, "text");
        t.setAttribute("class", "badge"); t.setAttribute("x", mid[0] + 4); t.setAttribute("y", mid[1] - 4);
        t.textContent = "+" + BM.POINTS[Math.min(n - 1, BM.POINTS.length - 1)];
        g.appendChild(t);
      }
    }
    if (revealed) for (const l of board.links) if (!arrows.has(BM.key(l.from, l.to))) line(g, l.from, l.to, "missed");
  }

  // ---- side panel
  function msg(text, cls) { const m = $("#b-msg"); m.textContent = text; m.className = cls || ""; }
  function renderSide() {
    $("#b-score").textContent = game.score;
    const found = board.links.filter((l) => game.confirmed.has(BM.key(l.from, l.to))).length;
    $("#b-found").textContent = `${found} / ${board.links.length}`;
    $("#b-checks").textContent = game.checks;
    $("#b-worth").textContent = BM.POINTS[Math.min(game.checks, BM.POINTS.length - 1)];
    const over = revealed || game.done;
    ["#b-check", "#b-hint", "#b-reveal"].forEach((s) => ($(s).disabled = over));
    const why = $("#b-why");
    why.innerHTML = "";
    if (over) {
      for (const l of board.links) {
        const ok = game.confirmed.has(BM.key(l.from, l.to));
        const li = document.createElement("li");
        li.className = ok ? "ok" : "missed";
        li.innerHTML = `<b>${esc(tileById(l.from).title)} → ${esc(tileById(l.to).title)}</b>${ok ? "" : '<span class="tag">missed</span>'}<br>${esc(l.why)}`;
        why.appendChild(li);
      }
    }
    const bk = board.books || [];
    $("#b-books").innerHTML = over && bk.length
      ? `<h3>To read next</h3><ul>${bk.map((b) => `<li><i>${esc(b.title)}</i>, ${esc(b.author)} (${b.year})</li>`).join("")}</ul>` : "";
    const s = load();
    $("#b-due").textContent = s.due
      ? `Best ${s.best}%. Next review ${s.due <= today() ? "is due now" : "on " + s.due}.`
      : "Not played yet. Your score sets when this board comes back.";
  }
  const today = () => new Date().toISOString().slice(0, 10);

  // slide tiles into the causal chain, redrawing arrows as they move
  function arrange() {
    const st = $("#b-stage");
    pos = BM.tidy(board, st.clientWidth, st.clientHeight, TW, TH);
    document.body.classList.add("tidying");
    document.querySelectorAll(".tile").forEach((el) => place(el, el.dataset.id));
    const t0 = performance.now();
    const step = (t) => { draw(); if (t - t0 < 650) requestAnimationFrame(step); else document.body.classList.remove("tidying"); };
    requestAnimationFrame(step);
  }

  function finish() {
    for (const [k] of arrows) if (status.get(k) === "bad") { arrows.delete(k); status.delete(k); }
    arrange();
    const pct = BM.percent(board, game);
    const days = BM.nextReviewDays(revealed ? 0 : pct);
    const due = new Date(Date.now() + days * 864e5).toISOString().slice(0, 10);
    save({ best: Math.max(load().best || 0, pct), last: pct, due, played: today() });
    return { pct, days, due };
  }

  function doCheck() {
    if (revealed || game.done) return null;
    if (!arrows.size) { msg("Draw some arrows first.", "warn"); return null; }
    const r = BM.check(board, game, arrows.values());
    for (const k of r.correct) status.set(k, "ok");
    for (const k of r.wrong) status.set(k, "bad");
    if (r.done) {
      const f = finish();
      msg(`All ${r.totalRequired} found in ${game.checks} check${game.checks > 1 ? "s" : ""}. ${f.pct}%. See you in ${f.days} day${f.days > 1 ? "s" : ""}.`, "good");
    } else {
      const left = r.totalRequired - r.foundRequired;
      msg(`+${r.gained}. ${r.correct.length} right, ${r.wrong.length} not in the key. ${left} still to find.`, r.gained ? "good" : "warn");
    }
    renderSide(); draw();
    return r;
  }

  function doHint() {
    const l = BM.hint(board, game);
    if (!l) return null;
    msg(`Something leads out of "${tileById(l.from).title}".`, "");
    const el = document.querySelector(`.tile[data-id="${CSS.escape(l.from)}"]`);
    el.classList.remove("hinted"); void el.offsetWidth; el.classList.add("hinted");
    renderSide();
    return l.from;
  }

  function doReveal() {
    if (revealed) return;
    revealed = true;
    for (const [k] of arrows) if (status.get(k) !== "ok") arrows.delete(k);
    const f = finish();
    msg(`Answer shown. Amber arrows are the ones you missed. This board comes back in ${f.days} day${f.days > 1 ? "s" : ""}.`, "");
    renderSide(); draw();
  }

  // ---- wiring
  const pickSel = $("#b-pick");
  for (const id of Object.keys(BOARDS)) pickSel.add(new Option(BOARDS[id].title, id));
  pickSel.addEventListener("change", () => { location.hash = pickSel.value; });
  window.addEventListener("hashchange", () => { if (location.hash.slice(1) !== board.id) start(location.hash.slice(1)); });
  $("#b-dates").addEventListener("change", (e) => { document.body.classList.toggle("show-dates", e.target.checked); draw(); });
  $("#b-check").addEventListener("click", doCheck);
  $("#b-hint").addEventListener("click", doHint);
  $("#b-reveal").addEventListener("click", doReveal);
  $("#b-reset").addEventListener("click", () => { start(board.id); msg("", ""); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") pick(sel); });
  window.addEventListener("resize", draw);

  start(location.hash.slice(1));

  // test and console hook
  window.BOARD = {
    ready: true,
    get id() { return board.id; },
    connect, check: doCheck, hint: doHint, reveal: doReveal,
    remove: (a, b) => disconnect(BM.key(a, b)),
    arrows: () => [...arrows.keys()].map((k) => ({ key: k, status: status.get(k) || "draft" })),
    state: () => ({ score: game.score, checks: game.checks, done: game.done, revealed, confirmed: game.confirmed.size }),
    links: () => board.links.map((l) => [l.from, l.to]),
    also: () => (board.also || []).map((l) => [l.from, l.to])
  };
})();
