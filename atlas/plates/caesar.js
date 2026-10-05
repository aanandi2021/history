// Caesar in Gaul and the civil war, written from general historical knowledge for the atlas renderer.
(function () {
  const R = "#d66a4a", C = "#9d2424", P = "#6c4bb2", G = "#9fbd72";
  const ROME = [12.496, 41.902], RUB = [12.38, 44.06], MASS = [5.37, 43.30], BIB = [4.04, 46.92], ARIO = [7.55, 48.0],
    SABIS = [4.9, 50.25], VEN = [-2.75, 47.65], RHINE = [7.65, 50.0], DOVER = [1.31, 51.13], THAMES = [-0.2, 51.5],
    AVAR = [2.40, 47.08], GERG = [3.12, 45.71], ALES = [4.50, 47.54], NARB = [3.0, 43.2], ILERDA = [0.62, 41.62],
    DYR = [19.45, 41.32], PHAR = [22.38, 39.29], ALEX = [29.92, 31.20], ZELA = [35.89, 40.30], THAP = [11.05, 35.62],
    MUNDA = [-4.78, 37.55], BRUND = [17.94, 40.64];
  window.PLATES.caesar = {
    id: "caesar",
    title: "Caesar in Gaul and the civil war, 58-44 B.C.",
    head: "Antiquity / Caesar and the fall of the Republic",
    folio: "8",
    viewer: "ancient/-0052/ch-caesar-in-gaul",
    figures: [
      {
        caption: "Caesar's conquest of Gaul, 58-51 B.C.",
        share: 0.48, extent: [[-7.5, 41.0], [11.5, 54.2]], projection: "mercator",
        layers: [
          { id: "narbonensis", type: "area", tier: "core", colour: R, pad: 0.75, legend: "Roman province: Gallia Narbonensis", around: [[2.3, 43.4], [4.8, 43.6], [5.7, 44.2], [4.2, 45.0], [1.7, 44.0], [3.0, 43.0]] },
          { id: "cisalpine", type: "area", tier: "core", colour: R, pad: 0.8, legend: "Cisalpine Gaul and Italy", around: [[7.5, 44.6], [9.1, 45.1], [10.3, 44.3], [8.8, 43.7]] },
          { id: "gaul-quilt", type: "area", colour: G, opacity: 0.36, pad: 1.3, legend: "Gaulish tribal world", around: [[-4.5, 48.2], [-2.0, 47.3], [1.0, 46.6], [4.0, 47.6], [6.0, 49.2], [5.2, 50.5], [2.2, 51.1], [-1.8, 50.2]] },
          { id: "belgae", type: "area", colour: "#8bb4a6", pattern: "stipple", pad: 0.85, legend: "Belgae", around: [[2.5, 50.2], [4.9, 50.4], [5.8, 49.6], [3.3, 49.2]] },
          { id: "aquitania", type: "area", colour: "#c9a65d", pattern: "stipple", pad: 0.9, legend: "Aquitani", around: [[-1.4, 44.8], [0.5, 44.3], [1.0, 43.4], [-1.2, 43.4]] },
          { id: "helvetii", type: "area", colour: "#d8b84a", pattern: "hatch", pad: 0.7, legend: "Helvetii", around: [[6.2, 46.6], [7.5, 46.8], [8.4, 47.3], [6.8, 47.4]] },
          { id: "germani", type: "area", colour: "#7d5a9e", pattern: "hatch-back", pad: 1.0, legend: "Germanic peoples beyond the Rhine", around: [[7.8, 49.0], [9.2, 50.3], [10.3, 51.4], [8.2, 52.2], [7.2, 50.5]] },
          { id: "caesar-gaul-route", type: "arrow", colour: C, width: 8, label: "C.", legend: "Caesar's campaigns, 58-52", path: [NARB, BIB, ARIO, SABIS, VEN, RHINE, DOVER, THAMES, [1.7, 48.9], AVAR, GERG, ALES] },
          { id: "britain-55", type: "route", style: "dashed", colour: C, legend: "Britain expeditions, 55 and 54", path: [[2.0, 50.9], DOVER, THAMES], head: true, dates: [[0.5, "55-54"]] },
          { id: "rhine-bridge", type: "boundary", style: "wall", side: "right", colour: C, legend: "Rhine bridge, 55", path: [[7.35, 49.75], [7.95, 50.15]], dates: [[0.5, "55"]] },
          { id: "vercingetorix", type: "arrow", colour: "#3f7a3c", width: 7, label: "Revolt", date: "52", legend: "Vercingetorix and the great revolt", path: [[2.0, 46.3], AVAR, GERG, ALES] },
          { id: "bibracte", type: "point", symbol: "battle", at: BIB, name: null, labelPos: "nw", tag: { text: "58", colour: "#e8806a" }, legend: "Battle or siege" },
          { id: "ariovistus", type: "point", symbol: "battle", at: ARIO, name: "Ariovistus", labelPos: "e", tag: { text: "58", colour: "#e8806a" } },
          { id: "sabis", type: "point", symbol: "battle", at: SABIS, name: "Sabis", labelPos: "se", tag: { text: "57", colour: "#e8806a" } },
          { id: "veneti", type: "point", symbol: "battle", at: VEN, name: "Veneti", labelPos: "w", tag: { text: "56", colour: "#e8806a" } },
          { id: "avaricum", type: "point", symbol: "siege", at: AVAR, name: "Avaricum", labelPos: "e", tag: { text: "52", colour: "#e8806a" } },
          { id: "gergovia", type: "point", symbol: "battle", at: GERG, name: "Gergovia", labelPos: "s", tag: { text: "52", colour: "#e8806a" } },
          { id: "alesia", type: "point", symbol: "siege", at: ALES, name: "Alesia", labelPos: "n", tag: { text: "52", colour: "#e8806a" } },
          { id: "massilia", type: "point", symbol: "port", at: MASS, name: null, labelPos: "s" },
          { id: "rome-gaul", type: "point", symbol: "capital", at: ROME, name: "Rome", labelPos: "e" },
          { type: "label", style: "people", colour: "#5b7f3e", text: "Gauls", at: [1.0, 48.2], size: 12 },
          { type: "label", style: "people", colour: "#4b817a", text: "Belgae", at: [4.3, 50.0], size: 9 },
          { type: "label", style: "water", text: "Oceanus Britannicus", at: [-2.2, 52.6], size: 8.5 }
        ],
        legend: { position: "bottom-left", columns: 2 }
      },
      {
        caption: "The civil war, 49-45 B.C.",
        share: 0.52, extent: [[-8.5, 29.0], [38.2, 46.7]], projection: "mercator",
        layers: [
          { id: "roman-empire-49", type: "area", colour: R, opacity: 0.34, pad: 1.4, legend: "Roman empire and provinces", around: [[-6.4, 38.0], [-1.5, 41.4], [3.0, 43.2], [8.5, 44.0], ROME, [15.2, 37.5], [19.0, 40.5], [24.9, 38.7], [30.0, 36.8], [35.0, 34.8], [13.3, 32.5]] },
          { id: "caesar-provinces", type: "area", colour: C, pattern: "hatch", pad: 0.95, legend: "Caesar's Gallic command", around: [[-1.5, 49.0], [2.5, 48.2], [5.2, 46.5], [7.0, 44.7], [3.3, 43.4], [0.5, 44.0]] },
          { id: "pompey-spain", type: "area", colour: P, pattern: "hatch-back", pad: 1.2, legend: "Pompeian Spain and eastern strength", around: [[-7.0, 37.2], [-3.5, 39.4], [0.6, 41.6], [-2.0, 43.0]] },
          { id: "pompey-east", type: "area", colour: P, pattern: "dots", pad: 1.2, around: [[18.8, 41.2], [22.4, 39.3], [25.2, 38.0], [29.9, 31.2], [33.0, 34.8]] },
          { id: "caesar-civil-route", type: "arrow", colour: "#111111", width: 7, legend: "Caesar's campaigns, 49-45", path: [RUB, ROME, MASS, ILERDA, ROME, BRUND, DYR, PHAR, ALEX, ZELA, THAP, MUNDA] },
          { id: "pompey-flight", type: "route", style: "dashed", colour: P, legend: "Pompey's flight, 48", path: [ROME, BRUND, DYR, [23.5, 37.8], ALEX], head: true },
          { id: "rubicon", type: "point", symbol: "pass", at: RUB, name: "Rubicon", labelPos: "n", tag: { text: "49", colour: "#f1c75b" }, legend: "Dated stop" },
          { id: "ilerda", type: "point", symbol: "battle", at: ILERDA, name: "Ilerda", labelPos: "n", tag: { text: "49", colour: "#e8806a" }, legend: "Battle" },
          { id: "dyrrhachium", type: "point", symbol: "battle", at: DYR, name: "Dyrrhachium", labelPos: "w", tag: { text: "48", colour: "#e8806a" } },
          { id: "pharsalus", type: "point", symbol: "battle", at: PHAR, name: "Pharsalus", labelPos: "e", tag: { text: "48", colour: "#e8806a" } },
          { id: "alexandria", type: "point", symbol: "siege", at: ALEX, name: "Alexandria", labelPos: "e", tag: { text: "48-47", colour: "#e8806a" } },
          { id: "zela", type: "point", symbol: "battle", at: ZELA, name: "Zela", labelPos: "n", tag: { text: "47", colour: "#e8806a" } },
          { id: "thapsus", type: "point", symbol: "battle", at: THAP, name: "Thapsus", labelPos: "s", tag: { text: "46", colour: "#e8806a" } },
          { id: "munda", type: "point", symbol: "battle", at: MUNDA, name: "Munda", labelPos: "s", tag: { text: "45", colour: "#e8806a" } },
          { id: "rome-civil", type: "point", symbol: "capital", at: ROME, name: "Rome", labelPos: "e" },
          { id: "brundisium", type: "point", symbol: "port", at: BRUND, name: "Brundisium", labelPos: "se", tag: { text: "49", colour: "#f1c75b" } },
          { type: "label", style: "realm", colour: R, text: "Roman Empire", at: [10.0, 37.4], size: 12 },
          { type: "label", style: "water", text: "Mediterranean", at: [3.6, 33.0], size: 9 }
        ],
        legend: { position: "bottom-left", columns: 2, extra: [{ text: "1 Rubicon/Italy - 2 Spain - 3 Greece/Egypt - 4 Africa/Spain", swatch: { type: "route", style: "dashed", colour: "#111111" } }] }
      }
    ],
    text: {
      intro: "Caesar first used a provincial command to conquer Gaul, then used the army and credit from that conquest to fight a Mediterranean civil war.",
      sections: [
        { heading: "Gaul", entries: [
          { date: "58", text: "Caesar turns back the Helvetii at Bibracte and defeats Ariovistus near the Rhine.", refs: ["helvetii", "bibracte", "ariovistus", "caesar-gaul-route"] },
          { date: "57", text: "The campaign moves north against the Belgae; the Sabis is the hard battle of the year.", refs: ["belgae", "sabis"] },
          { date: "56", text: "The Veneti are beaten on the Atlantic coast, showing that the conquest is not just an inland war.", refs: ["veneti", "gaul-quilt"] },
          { date: "55-54", text: "Caesar bridges the Rhine and crosses to Britain twice. Both are demonstrations of reach more than permanent conquests.", refs: ["rhine-bridge", "britain-55", "germani"] },
          { date: "52", text: "Vercingetorix raises the great revolt. Avaricum falls, Gergovia resists, and Alesia ends the war.", refs: ["vercingetorix", "avaricum", "gergovia", "alesia"] }
        ] },
        { heading: "Civil war", entries: [
          { date: "49", text: "Caesar crosses the Rubicon, takes Italy and Spain, and beats Pompeian forces at Ilerda.", refs: ["rubicon", "caesar-civil-route", "ilerda", "pompey-spain"] },
          { date: "48", text: "Pompey holds the east. Caesar is checked at Dyrrhachium, then wins at Pharsalus; Pompey flees to Egypt.", refs: ["pompey-east", "pompey-flight", "dyrrhachium", "pharsalus"] },
          { date: "48-47", text: "The war carries Caesar to Alexandria and then to Zela in Pontus.", refs: ["alexandria", "zela"] },
          { date: "46-45", text: "The last Pompeian armies are beaten at Thapsus in Africa and Munda in Spain.", refs: ["thapsus", "munda"] },
          { date: "44", text: "Caesar is made dictator perpetuo and murdered on the Ides of March. The map of provinces has become a map of armies.", refs: ["roman-empire-49", "caesar-provinces", "rome-civil"] }
        ] }
      ]
    },
    sources: ["Conventional chronology of Caesar's campaigns", "Approximate soft areas; coastlines and rivers: Natural Earth 1:50m"]
  };
})();
