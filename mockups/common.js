// Shared helpers for the mockups.
const H = {
  parse: d3.timeParse("%Y-%m-%d"),
  fmt: d3.timeFormat("%-d %b %Y"),
  fmtMonth: d3.timeFormat("%b %Y"),

  prepare(data) {
    data.events.forEach(e => {
      e.d0 = H.parse(e.date);
      e.d1 = e.end ? H.parse(e.end) : null;
    });
    data.leaders.forEach(l => ["born", "died", "start", "end"].forEach(k => l[k + "D"] = H.parse(l[k])));
    data.books.forEach(b => { b.d0 = H.parse(b.start); b.d1 = H.parse(b.end); });
    return data;
  },

  when(e) { return e.d1 ? `${H.fmt(e.d0)} – ${H.fmt(e.d1)}` : H.fmt(e.d0); },

  tooltip() {
    const el = document.createElement("div");
    el.className = "tooltip";
    document.body.appendChild(el);
    return {
      show(html, ev) {
        el.innerHTML = html;
        el.style.opacity = 1;
        const x = Math.min(ev.clientX + 14, window.innerWidth - 320);
        el.style.left = x + "px";
        el.style.top = (ev.clientY + 14) + "px";
      },
      hide() { el.style.opacity = 0; }
    };
  },

  // Family birth years live in the browser only; nothing personal is stored in the repo.
  family: {
    key: "history.family.v1",
    load() { try { return JSON.parse(localStorage.getItem(this.key)) || {}; } catch { return {}; } },
    save(v) { localStorage.setItem(this.key, JSON.stringify(v)); },
    edit(member) {
      const all = this.load();
      const cur = all[member.id] || {};
      const born = prompt(`${member.label}: birth year`, cur.born || "");
      if (born === null) return false;
      const died = prompt(`${member.label}: year of death (leave blank if living)`, cur.died || "");
      all[member.id] = { born: born.trim(), died: (died || "").trim() };
      this.save(all);
      return true;
    }
  },

  // Events within ±days of a date, across all lanes.
  near(events, date, days) {
    const ms = days * 864e5;
    return events.filter(e => {
      const a = +e.d0, b = +(e.d1 || e.d0), t = +date;
      return t >= a - ms && t <= b + ms;
    }).sort((a, b) => a.d0 - b.d0);
  }
};
