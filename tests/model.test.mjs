// Unit tests for app/js/model.js.
import test from "node:test";
import assert from "node:assert/strict";
import { loadDatasets, HM } from "./load.mjs";

const D = loadDatasets();
const ww2 = HM.normalise(D.ww2);
const ru = HM.normalise(D.russia);
const d = HM.parseDate;

test("parseDate handles full, month and year precision", () => {
  assert.equal(HM.isoDate(d("1812-09-14")), "1812-09-14");
  assert.equal(HM.isoDate(d("1812-09")), "1812-09-15");
  assert.equal(HM.isoDate(d("1812")), "1812-07-02");
  assert.equal(HM.isoDate(d("0800-12-25")), "0800-12-25");
  assert.equal(d("1812-02-30"), null);
  assert.equal(d("nonsense"), null);
});

test("fmtDate respects precision and approx", () => {
  assert.equal(HM.fmtDate("1942-08-19"), "19 Aug 1942");
  assert.equal(HM.fmtDate("1649-02"), "Feb 1649");
  assert.equal(HM.fmtDate("1582", true), "c. 1582");
  assert.equal(HM.fmtRange("1918", "1921"), "1918–1921");
});

test("partial dates are flagged approximate (FR-015)", () => {
  const yermak = ru.events.find((e) => e.title === "Yermak crosses the Urals");
  assert.equal(yermak.approx, true);
  const borodino = ru.events.find((e) => e.title === "Borodino");
  assert.equal(borodino.approx, false);
});

test("US1: on 19 Aug 1942 the meanwhile panel has Dieppe, Stalingrad and Guadalcanal", () => {
  const t = d("1942-08-19");
  const groups = HM.nearbyEvents(ww2, t, HM.nearWindow([ww2.t0, ww2.t1]));
  assert.equal(groups[0].lane, "canada");
  const titles = groups.flatMap((g) => g.events.map((e) => e.title));
  for (const want of ["Dieppe", "Stalingrad", "Guadalcanal"]) assert.ok(titles.includes(want), want);
  const leaders = HM.activeLeaders(ww2, t).map((l) => l.name);
  for (const want of ["Winston Churchill", "Franklin D. Roosevelt", "W. L. Mackenzie King", "Joseph Stalin"]) assert.ok(leaders.includes(want), want);
});

test("leaders with several terms: Macdonald is out of office in 1875", () => {
  const names = (t) => HM.activeLeaders(ru, d(t)).map((l) => l.name);
  assert.ok(names("1870").includes("John A. Macdonald"));
  assert.ok(!names("1875").includes("John A. Macdonald"));
  assert.ok(names("1885").includes("John A. Macdonald"));
});

test("activeChapter picks the shortest covering chapter", () => {
  const ch = HM.activeChapter(ww2, d("1942-08-19"));
  assert.equal(ch.title, "Barbarossa to Stalingrad");
  assert.equal(HM.activeChapter(ru, d("1854-10-25")).title, "Crimean War");
  assert.equal(HM.activeChapter(ru, d("1460")), null);
});

test("mapStateAt picks the latest state at or before the date", () => {
  assert.equal(HM.mapStateAt(ww2, d("1942-12-15")).label, "Axis high-water mark, Nov 1942");
  assert.equal(HM.mapStateAt(ww2, d("1937-06-01")), null);
  assert.equal(HM.mapStateAt(ru, d("1900")), null);
});

test("booksFor prefers books from the same vault section", () => {
  const peter = ru.leaders.find((l) => l.name.startsWith("Peter I"));
  const books = HM.booksFor(ru, peter).map((b) => b.author);
  assert.deepEqual(books, ["Robert K. Massie", "Lindsey Hughes", "Henri Troyat"]);
});

test("links: Obsidian section, Wikipedia, Calibre and library", () => {
  const poltava = ru.byId.get("poltava-1709");
  const links = HM.linksFor(ru, poltava);
  assert.equal(links[0].kind, "note");
  assert.ok(links[0].href.includes(encodeURIComponent("#Peter the Great (r. 1682–1725)")));
  assert.equal(links[1].kind, "wiki");
  const doerr = ww2.books.find((b) => b.author === "Anthony Doerr");
  assert.deepEqual(HM.linksFor(ww2, doerr).map((l) => l.kind), ["calibre", "library"]);
  assert.equal(HM.calibreUrl(91), "calibre://show-book/CalibreLibrary/91");
});

test("Amit's Fiction: novel events link into the novel's notes; history in its years lists the novel", () => {
  const mt = HM.normalise(D.maritime);
  const birth = mt.byId.get("ut-birth");
  const fic = HM.linksFor(mt, birth).find((l) => l.kind === "fiction");
  assert.equal(fic.label, "Amit's Fiction");
  assert.ok(fic.href.includes(encodeURIComponent("Writing/The Unseen Tomorrow/the_unseen_tomorrow_MASTER_REFERENCE#2. HISTORICAL TIMELINE (755-825 CE)")));
  const boro = mt.events.find((e) => e.title === "Borobudur rises");
  assert.ok(HM.linksFor(mt, boro).find((l) => l.kind === "fiction").href.includes(encodeURIComponent("unseen_tomorrow_locations 1#4. CENTRAL JAVA")));
  // Any history item in the novel's years shows the novel, but it never crowds out real books.
  const talas = mt.events.find((e) => e.title === "Baghdad founded");
  assert.deepEqual(HM.fictionFor(mt, talas).map((b) => b.title), ["The Unseen Tomorrow"]);
  assert.ok(HM.booksFor(mt, talas).every((b) => !b.amits));
  const verdun = mt.events.find((e) => e.title === "Treaty of Verdun");
  assert.deepEqual(HM.fictionFor(mt, verdun), []);
  // The novel's own card opens the vault, not Calibre or the library.
  const novel = mt.books.find((b) => b.amits);
  assert.deepEqual(HM.linksFor(mt, novel).map((l) => l.kind), ["note", "fiction"]);
  // Leaders with unknown lives validate; fiction lanes need fic headings.
  const broken = JSON.parse(JSON.stringify(D.maritime));
  broken.events.find((e) => e.lane === "unseen").fic = undefined;
  assert.ok(HM.validate(broken).some((m) => /fiction lane need a fic/.test(m)));
});

test("Golden Road aha links open the registered vault note heading", () => {
  const ancient = HM.normalise(D.ancient);
  const ashoka = ancient.events.find((e) => e.title === "Ashoka's edicts");
  const links = HM.ahaLinks(ashoka);
  assert.equal(links[0].label, "Golden Road aha");
  assert.ok(links[0].href.includes(encodeURIComponent("Golden Road - aha notes#Ashoka's edicts")));
  const bad = structuredClone(D.ancient);
  bad.events.find((e) => e.title === "Ashoka's edicts").aha = [{ book: "missing-book", heading: "x" }];
  assert.ok(HM.validate(bad).some((m) => /unknown aha book/.test(m)));
});

test("hash: parse, clamp and fall back (US4)", () => {
  const p = HM.parseHash("#russia/1812-09-14/moscow-burns-1812", D, "ww2");
  assert.equal(p.dataset, "russia");
  assert.equal(HM.isoDate(p.date), "1812-09-14");
  assert.equal(p.item, "moscow-burns-1812");
  const bad = HM.parseHash("#nonsense/9999", D, "ww2");
  assert.equal(bad.dataset, "ww2");
  assert.equal(HM.isoDate(bad.date), "1939-09-01");
  assert.equal(HM.isoDate(HM.parseHash("#russia", D, "ww2").date), "1480-11-15");
  assert.equal(bad.item, null);
  const clamp = HM.parseHash("#ww2/1999-01-01", D, "ww2");
  assert.equal(HM.isoDate(clamp.date), "1946-01-01");
  assert.equal(HM.formatHash("ww2", d("1942-08-19"), "dieppe-1942"), "#ww2/1942-08-19/dieppe-1942");
});

test("search ranks prefix matches first", () => {
  const r = HM.search(ru, "peter");
  assert.ok(r.length > 0);
  assert.ok(/^peter/i.test(r[0].title || r[0].name));
  assert.deepEqual(HM.search(ru, ""), []);
});

test("stepEvent moves to the next and previous event", () => {
  const n = HM.stepEvent(ww2, d("1942-08-18"), 1);
  assert.equal(n.title, "Dieppe");
  const p = HM.stepEvent(ww2, d("1942-08-19"), -1);
  assert.ok(p.t0 < d("1942-08-19"));
});

test("validate catches the usual mistakes", () => {
  const bad = structuredClone(D.ww2);
  bad.lanes = bad.lanes.slice(1);
  bad.events.push({ lane: "nowhere", date: "1950-01-01", title: "x", at: [200, 0] });
  bad.chapters.push({ title: "wrapped", start: "1940", end: "1941", bbox: [[170, 0], [-170, 10]] });
  const errs = HM.validate(bad).join("\n");
  assert.match(errs, /Canada lane/);
  assert.match(errs, /unknown lane/);
  assert.match(errs, /outside range/);
  assert.match(errs, /bad coordinates/);
  assert.match(errs, /cross 180/);
});
