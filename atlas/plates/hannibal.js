// Hannibal's war, drawn as an atlas campaign plate from general historical knowledge.
(function () {
  const R = "#d66a4a", C = "#8c8b49", H = "#6f7132", S = "#b43d2e", G = "#b65b86";
  const NEWC = [-0.98, 37.60], SAG = [-0.28, 39.68], EBRO = [0.52, 40.82], RHONE = [4.65, 43.95], ALPS = [6.9, 45.0],
    TREB = [9.58, 45.02], TRAS = [12.10, 43.15], CAN = [16.15, 41.30], CAPUA = [14.21, 41.08], TAR = [17.24, 40.47],
    META = [12.87, 43.65], ZAMA = [9.42, 36.23], CAR = [10.32, 36.85], ROME = [12.496, 41.902], BAEC = [-3.47, 38.12],
    ILIPA = [-6.05, 37.5], UTICA = [10.06, 37.06], SYR = [15.29, 37.07];
  window.PLATES.hannibal = {
    id: "hannibal",
    title: "Hannibal's war, 218-201 B.C.",
    head: "Antiquity / The Second Punic War",
    folio: "6",
    viewer: "ancient/-0216/ch-hannibals-war",
    figures: [
      {
        caption: "The western Mediterranean in 218 B.C.",
        share: 0.72, extent: [[-10.5, 29.2], [20.8, 47.8]], projection: "mercator",
        layers: [
          { id: "rome-218", type: "area", tier: "core", colour: R, pad: 1.1, legend: "Rome and the Italian alliance, 218", around: [ROME, [10.5, 43.6], [12.8, 44.3], [15.5, 41.2], [17.2, 40.4], [15.2, 37.5], [13.4, 41.8], [12.6, 38.1]] },
          { id: "roman-islands", type: "area", tier: "conquest", colour: R, pad: 0.8, legend: "Roman gains before the war", around: [[14.0, 37.6], [8.9, 40.0], [9.1, 42.2], [12.2, 38.0]] },
          { id: "carthage-core", type: "area", tier: "core", colour: C, pad: 1.0, legend: "Carthage and old Punic territory", around: [CAR, [8.8, 36.8], [11.4, 35.6], [7.9, 34.5], [12.2, 33.5], [10.8, 37.2]] },
          { id: "barcid-spain", type: "area", colour: C, pattern: "stripe", pad: 1.1, legend: "Barcid Spain", around: [[-6.2, 37.3], [-4.2, 38.5], [-1.0, 37.6], [0.3, 39.4], [-2.2, 41.0], [-5.8, 39.6]] },
          { id: "gauls", type: "area", colour: G, pattern: "hatch", pad: 1.4, legend: "Gauls and Ligurians", around: [[-1, 45.4], [2.5, 45.8], [5.0, 45.4], [8.0, 45.2], [9.8, 44.9], [6.5, 43.8]] },
          { id: "defectors", type: "area", colour: "#f1c75b", pattern: "dots", pad: 0.8, legend: "Italian allies defecting after Cannae", around: [CAPUA, TAR, [15.8, 40.6], [16.4, 41.1], [14.6, 40.6]] },
          { id: "hannibal-route", type: "arrow", colour: H, width: 10, legend: "Hannibal's march, 218-203", path: [NEWC, SAG, EBRO, [2.1, 42.5], RHONE, ALPS, TREB, TRAS, CAN, CAPUA, TAR, [15.4, 39.3], [13.5, 38.0], CAR] },
          { id: "scipio-route", type: "arrow", colour: S, width: 7, label: "Scipio", date: "209-202", legend: "Scipio's campaigns", path: [[12.4, 41.9], [3.2, 41.7], NEWC, BAEC, ILIPA, UTICA, ZAMA] },
          { id: "hasdrubal-route", type: "route", style: "dashed", colour: H, label: "Hasdrubal", legend: "Hasdrubal from Spain, 207", path: [ILIPA, [2.5, 42.6], [6.6, 45.2], META], head: true },
          { id: "roman-sea", type: "boundary", style: "wall", side: "right", colour: S, legend: "Roman sea control after 210", path: [[0.5, 39.4], [4.5, 40.4], [8.5, 39.4], [12.7, 38.5], [15.4, 38.0]] },
          { id: "new-carthage", type: "point", symbol: "large-city", at: NEWC, name: "New Carthage", labelPos: "s", tag: { text: "218/209", colour: "#f1c75b" } },
          { id: "saguntum", type: "point", symbol: "siege", at: SAG, name: "Saguntum", labelPos: "n", tag: { text: "219", colour: "#e8806a" } },
          { id: "ebro", type: "point", symbol: "pass", at: EBRO, name: "Ebro", labelPos: "e", tag: { text: "218", colour: "#f1c75b" } },
          { id: "rhone", type: "point", symbol: "pass", at: RHONE, name: "Rhone", labelPos: "e", tag: { text: "218", colour: "#f1c75b" } },
          { id: "alps", type: "point", symbol: "pass", at: ALPS, name: "Alps", labelPos: "e", tag: { text: "218", colour: "#f1c75b" } },
          { id: "trebia", type: "point", symbol: "battle", at: TREB, name: "Trebia", labelPos: "n", tag: { text: "218", colour: "#e8806a" }, legend: "Battle" },
          { id: "trasimene", type: "point", symbol: "battle", at: TRAS, name: "Trasimene", labelPos: "w", tag: { text: "217", colour: "#e8806a" } },
          { id: "cannae", type: "point", symbol: "battle", at: CAN, name: "Cannae", labelPos: "e", tag: { text: "216", colour: "#e8806a" } },
          { id: "capua", type: "point", symbol: "large-city", at: CAPUA, name: "Capua", labelPos: "w", halo: "#f1c75b", tag: { text: "216-211", colour: "#f1c75b" }, legend: "Defecting ally" },
          { id: "tarentum", type: "point", symbol: "large-city", at: TAR, name: "Tarentum", labelPos: "e", halo: "#f1c75b", tag: { text: "212-209", colour: "#f1c75b" } },
          { id: "metaurus", type: "point", symbol: "battle", at: META, name: "Metaurus", labelPos: "e", tag: { text: "207", colour: "#e8806a" } },
          { id: "zama", type: "point", symbol: "battle", at: ZAMA, name: "Zama", labelPos: "s", tag: { text: "202", colour: "#e8806a" } },
          { id: "carthage", type: "point", symbol: "capital", at: CAR, name: "Carthage", labelPos: "e" },
          { id: "rome", type: "point", symbol: "capital", at: ROME, name: "Rome", labelPos: "e" },
          { id: "baecula", type: "point", symbol: "battle", at: BAEC, name: "Baecula", labelPos: "sw", tag: { text: "208", colour: "#f1c75b" } },
          { id: "ilipa", type: "point", symbol: "battle", at: ILIPA, name: "Ilipa", labelPos: "s", tag: { text: "206", colour: "#f1c75b" } },
          { id: "utica", type: "point", symbol: "port", at: UTICA, name: "Utica", labelPos: "n", tag: { text: "204", colour: "#f1c75b" } },
          { id: "syracuse", type: "point", symbol: "large-city", at: SYR, name: "Syracuse", labelPos: "e", tag: { text: "212", colour: "#f1c75b" } },
          { type: "label", style: "realm", colour: R, text: "Rome", at: [14.8, 42.5], size: 14 },
          { type: "label", style: "realm", colour: C, text: "Carthage", at: [5.4, 34.2], size: 14 },
          { type: "label", style: "people", colour: G, text: "Gauls", at: [3.8, 46.1], size: 9 },
          { type: "label", style: "water", text: "Western Mediterranean", at: [4.2, 36.9], size: 10 },
          { type: "label", style: "water", text: "Tyrrhenian Sea", at: [11.0, 39.4], size: 8.5 }
        ],
        legend: { position: "bottom-left", columns: 2 }
      },
      {
        caption: "The settlement of 201 B.C.",
        share: 0.28, extent: [[-9.6, 31.0], [15.2, 43.7]], projection: "mercator",
        layers: [
          { id: "rome-after", type: "area", tier: "core", colour: R, pad: 1.0, legend: "Rome after the war", around: [[-6.4, 38.0], [-3, 39.4], [0.0, 40.2], [3, 41.5], [8.8, 40.0], [12.4, 41.9], [14.0, 37.6], [10, 38.5]] },
          { id: "carthage-after", type: "area", tier: "influence", colour: C, pad: 0.8, legend: "Carthage restricted to Africa", around: [CAR, [9.0, 36.7], [11.1, 35.9], [10.0, 34.9]] },
          { id: "numidia", type: "area", colour: "#d8b84a", pattern: "hatch", pad: 0.8, legend: "Numidia, Roman ally", around: [[7.5, 36.1], [8.5, 35.2], [9.6, 34.8], [10.4, 35.5]] },
          { id: "spain-provinces", type: "area", colour: R, pattern: "stripe", pad: 0.9, legend: "Roman Spain after 197", around: [[-6.3, 37.4], [-3.7, 38.6], [-0.6, 39.6], [0.3, 41.0], [-3.0, 41.7], [-6.5, 40.2]] },
          { id: "treaty-201", type: "boundary", style: "wall", colour: S, side: "right", legend: "Carthaginian fleet surrendered", path: [[8.4, 37.4], [9.6, 37.4], [10.8, 37.2], [12.0, 36.8]] },
          { id: "indemnity", type: "route", style: "dashed", colour: S, label: "indemnity", legend: "Carthaginian indemnity to Rome", path: [CAR, [11.2, 38.3], ROME], head: true },
          { id: "carthage-201", type: "point", symbol: "capital", at: CAR, name: "Carthage", labelPos: "e" },
          { id: "rome-201", type: "point", symbol: "capital", at: ROME, name: "Rome", labelPos: "e" },
          { id: "zama-201", type: "point", symbol: "battle", at: ZAMA, name: "Zama", labelPos: "s", tag: { text: "202", colour: "#e8806a" }, legend: "Battle" },
          { type: "label", style: "realm", colour: R, text: "Roman sea", at: [2.5, 40.5], size: 12 },
          { type: "label", style: "region", text: "Numidia", at: [7.6, 34.7], size: 8 },
          { type: "label", style: "water", text: "Mediterranean", at: [2.0, 36.0], size: 9 }
        ],
        legend: { position: "bottom-left" }
      }
    ],
    text: {
      intro: "The Second Punic War was a war of routes. Hannibal made Italy the battlefield by walking from Spain over the Alps; Scipio ended it by carrying the war back to Africa.",
      sections: [
        { heading: "Hannibal crosses the map", entries: [
          { date: "219-218", text: "Saguntum falls and Hannibal leaves New Carthage, crosses the Ebro, Pyrenees, Rhone and Alps, and reaches the Po valley.", refs: ["saguntum", "hannibal-route", "new-carthage", "ebro", "rhone", "alps", "barcid-spain"] },
          { date: "Dec 218", text: "At the Trebia the first Roman army in Italy is beaten.", refs: ["trebia"] },
          { date: "217", text: "Hannibal ambushes Flaminius at Lake Trasimene and turns central Italy into the theatre.", refs: ["trasimene", "gauls"] },
          { date: "216", text: "Cannae is the great encirclement. Capua and other southern communities defect or waver afterwards.", refs: ["cannae", "defectors", "capua", "tarentum"] }
        ] },
        { heading: "Rome survives", entries: [
          { date: "212-209", text: "Rome retakes Syracuse and Tarentum. Hannibal still moves in southern Italy, but the alliance system does not collapse.", refs: ["syracuse", "tarentum", "rome-218", "roman-islands"] },
          { date: "207", text: "Hasdrubal tries to repeat the Alpine move from Spain. He is stopped at the Metaurus before he can join Hannibal.", refs: ["hasdrubal-route", "metaurus"] },
          { date: "209-206", text: "Scipio takes New Carthage, then wins at Baecula and Ilipa, breaking Punic Spain.", refs: ["scipio-route", "new-carthage", "baecula", "ilipa"] },
          { date: "204-202", text: "Scipio lands near Utica; Hannibal is recalled from Italy. Zama decides the war.", refs: ["utica", "zama", "carthage"] }
        ] },
        { heading: "The settlement", entries: [
          { date: "201", text: "Carthage keeps its city but loses Spain, fleet and independent war policy. Numidia becomes Rome's ally on its flank.", refs: ["carthage-after", "spain-provinces", "treaty-201", "numidia"] },
          { text: "Rome emerges with the western Mediterranean as its theatre. The old Italian alliance has survived its hardest test.", refs: ["rome-after", "indemnity", "rome-201"] }
        ] }
      ]
    },
    sources: ["Conventional chronology of the Second Punic War", "Approximate soft areas; coastlines and rivers: Natural Earth 1:50m"]
  };
})();
