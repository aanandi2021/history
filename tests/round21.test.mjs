import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
import path from "node:path";
import { ROOT, HM, loadDatasets } from "./load.mjs";
const DS = loadDatasets();
const interwar2 = HM.normalise(DS.interwar2);
function loadPlates(){ const ctx={window:{PLATES:{},DATASETS:DS}, encodeURIComponent}; vm.createContext(ctx); for(const f of fs.readdirSync(path.join(ROOT,"atlas","plates")).filter(f=>f.endsWith(".js"))) vm.runInContext(fs.readFileSync(path.join(ROOT,"atlas","plates",f),"utf8"),ctx,{filename:f}); return JSON.parse(JSON.stringify(ctx.window.PLATES)); }
const PLATES=loadPlates();
const ROUND7=["stalin-ussr-1928-1939","great-depression-worldwide-1929-1933","nazi-germany-expansion-1933-1939","spanish-civil-war-1936-1939","fascist-italy-ethiopia-1922-1939","japan-expansion-1931-1939","europe-alliances-road-to-war-1933-1939"];
test("Vol. 2 round 7 registers inter-war part II and closes the gap",()=>{ assert.ok(DS.interwar2); assert.equal(DS.interwar2.lanes[0].id,"canada"); assert.equal(DS.interwar2.lanes[0].pinned,true); assert.equal(DS.interwar1.gapAfter, undefined); assert.equal(DS.interwar2.range[1], DS.ww2.range[0]); for(const id of ROUND7){ assert.ok(PLATES[id], id); assert.ok(DS.interwar2.plates.some(p=>p.id===id), `${id} missing from interwar2 dataset`); assert.equal(PLATES[id].viewer.split("/")[0], "interwar2"); }});
test("Vol. 2 round 7 includes Russia, Canada and road-to-war priorities",()=>{ const text=JSON.stringify(DS.interwar2); for(const term of ["Holodomor","Kazakh famine","Gulag","Kolyma","Magnitogorsk","Great Terror","Prairie","Bennett","On-to-Ottawa","Saar","Rhineland","Anschluss","Sudetenland","Memel","Danzig","Mackenzie-Papineau","Ethiopia","Manchukuo","Long March","Khalkhin","Molotov-Ribbentrop"]){ assert.match(text,new RegExp(term,"i"),term); } assert.ok(interwar2.chapters.some(c=>c.region==="asia")); assert.ok(interwar2.chapters.some(c=>c.region==="africa")); assert.ok(interwar2.chapters.some(c=>c.region==="americas")); assert.ok(interwar2.chapters.some(c=>c.region==="europe")); });
