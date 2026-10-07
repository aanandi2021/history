// Lazy loader for GPL-3.0 historical basemaps generated from aourednik/historical-basemaps.
(function () {
  "use strict";
  const pending = new Map();
  const key = (date) => String(date);
  function dates() { return (window.HIST_BASEMAP_DATES || []).map(Number).filter(Number.isFinite).sort((a, b) => a - b); }
  function dateForYear(year) {
    const HM = window.HM;
    return HM && HM.histBasemapDateAtOrBefore ? HM.histBasemapDateAtOrBefore(dates(), year) : fallbackDateForYear(year);
  }
  function fallbackDateForYear(year) {
    const y = Number(year);
    let best = null;
    for (const d of dates()) { if (d <= y) best = d; else break; }
    return best == null ? (dates()[0] ?? null) : best;
  }
  function fileForDate(date) { return `data/hist/world_${date}.js`; }
  function isLoaded(date) { return !!(window.HIST_BASEMAPS && window.HIST_BASEMAPS[key(date)]); }
  function topology(date) { return window.HIST_BASEMAPS && window.HIST_BASEMAPS[key(date)] || null; }
  function load(date) {
    if (date == null) return Promise.resolve(null);
    if (isLoaded(date)) return Promise.resolve(topology(date));
    const k = key(date);
    if (pending.has(k)) return pending.get(k);
    const promise = new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = fileForDate(date);
      script.async = true;
      script.dataset.histBasemap = k;
      script.onload = () => { pending.delete(k); resolve(topology(date)); };
      script.onerror = () => { pending.delete(k); reject(new Error(`Could not load historical basemap ${date}`)); };
      document.head.appendChild(script);
    });
    pending.set(k, promise);
    return promise;
  }
  function ensureForYear(year) {
    const date = dateForYear(year);
    return { date, loaded: isLoaded(date), topology: topology(date), promise: load(date) };
  }
  window.HistBasemaps = { dates, dateForYear, fileForDate, isLoaded, topology, load, ensureForYear };
})();