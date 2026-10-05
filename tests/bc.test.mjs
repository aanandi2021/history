// BC dates: "-0218" is 218 BC in the historian's numbering (no year 0), stored as astronomical year -217.
import test from "node:test";
import assert from "node:assert/strict";
import { HM } from "./load.mjs";

test("parseDate reads BC years, months and days; year 0 doesn't exist", () => {
  assert.equal(HM.parseDate("-0218").getUTCFullYear(), -217);
  assert.equal(HM.parseDate("-1").getUTCFullYear(), 0, "1 BC is astronomical year 0");
  const cannae = HM.parseDate("-0216-08-02");
  assert.deepEqual([cannae.getUTCFullYear(), cannae.getUTCMonth(), cannae.getUTCDate()], [-215, 7, 2]);
  assert.equal(HM.parseDate("0000"), null);
  assert.equal(HM.parseDate("-0000"), null);
  assert.ok(HM.parseDate("-0044-03-15") < HM.parseDate("0014-08-19"));
  assert.ok(HM.parseDate("-0001-12-31") < HM.parseDate("0001-01-01"));
});

test("isoDate round-trips BC dates in the historian's numbering", () => {
  for (const s of ["-0218-07-02", "-1792-01-01", "-0001-12-31", "0001-01-01", "0476-09-04", "1812-06-24"]) {
    assert.equal(HM.isoDate(HM.parseDate(s)), s);
  }
});

test("fmtDate, fmtRange and fmtYear say BC", () => {
  assert.equal(HM.fmtDate("-0218"), "218 BC");
  assert.equal(HM.fmtDate("-0044-03-15"), "15 Mar 44 BC");
  assert.equal(HM.fmtDate("-0216-08"), "Aug 216 BC");
  assert.equal(HM.fmtRange("-0264", "-0146"), "264–146 BC");
  assert.equal(HM.fmtRange("-0027", "0014"), "27 BC – AD 14");
  assert.equal(HM.fmtRange("0376", "0476"), "376–476");
  assert.equal(HM.fmtYear(-217), "218 BC");
  assert.equal(HM.fmtYear(1812), "1812");
});

test("partial BC dates cover their whole year, and itineraries label BC stops", () => {
  assert.ok(HM.isPartial("-0218") && HM.isPartial("-0218-10") && !HM.isPartial("-0218-10-01"));
  assert.equal(HM.liveAt({ from: "-0241" }, HM.parseDate("-0241-01-01")), true);
  assert.equal(HM.liveAt({ from: "-0241" }, HM.parseDate("-0242-12-31")), false);
  const st = [{ date: "-0218-04" }, { date: "-0218-12" }, { date: "-0216-08-02" }, { date: "-0202" }];
  assert.equal(HM.stopLabel(st, 0), "Apr 218 BC");
  assert.equal(HM.stopLabel(st, 1), "Dec");
  assert.equal(HM.stopLabel(st, 2), "2 Aug 216 BC");
  assert.equal(HM.stopLabel(st, 3), "202 BC");
});

test("hashes carry BC dates", () => {
  const ds = { ancient: { range: ["-1800-01-01", "0500-01-01"], startAt: "-0218" } };
  const h = HM.parseHash("#ancient/-0216-08-02/ch-hannibals-war", ds, "ancient");
  assert.equal(HM.isoDate(h.date), "-0216-08-02");
  assert.equal(h.item, "ch-hannibals-war");
  assert.equal(HM.formatHash("ancient", h.date, "x"), "#ancient/-0216-08-02/x");
  assert.equal(HM.isoDate(HM.parseHash("#ancient", ds, "ancient").date), "-0218-07-02");
});
