// Chapter scenes for "The ancient world: Hammurabi to the fall of Rome".
// Borders are approximate: they show the story of each chapter, not surveyed lines.
window.SCENES = window.SCENES || {};
(function () {
  const ROME = "#8c3b3b", CARTHAGE = "#3f6e8c", GREEK = "#6b5fa8", GAUL = "#5f8a55", SAMNITE = "#9a6a38", GERMAN = "#6b6b6b", GOTH = "#7a5a8c", HUN = "#4b4642", VANDAL = "#2f7f86", PERSIA = "#6b8c3f", HAN = "#b36b2e", XIONGNU = "#7a5a8c", BABYLON = "#9a6a38", MARI = "#2f7f8c", ELAM = "#8a7a5a", ASSYRIA = "#6d5a45", SEA = "#2e5f8a", ROAD = "#7b6848";

  (window.SCENE_ACTORS = window.SCENE_ACTORS || {}).ancient = {
    [ROME]: "Rome", [CARTHAGE]: "Carthage", [GREEK]: "Greek and Hellenistic kingdoms", [GAUL]: "Gauls and Celts", [SAMNITE]: "Samnites and Italian allies",
    [GERMAN]: "Germanic peoples", [GOTH]: "Goths", [HUN]: "Huns", [VANDAL]: "Vandals", [PERSIA]: "Parthia and Persia", [HAN]: "Han China",
    [XIONGNU]: "Xiongnu", [BABYLON]: "Babylon", [MARI]: "Mari", [ELAM]: "Elam", [ASSYRIA]: "Assyria", [SEA]: "Sea routes", [ROAD]: "Roads"
    , "#d8b84a": "Senatorial provinces and Christian regions", "#e0a080": "Eastern Roman Empire", "#79a85a": "Slavic settlement zones", "#6f8f5f": "Frankish kingdom"
  };

  window.SCENES.ancient = {
    "ch-hammurabi": {
      caption: "Babylon rises among rival Mesopotamian kingdoms in Hammurabi's lifetime. Borders are approximate.",
      bbox: [[35, 28], [50, 38]],
      layers: [
        { type: "area", name: "Babylon", tier: "core", colour: BABYLON, labelAt: [44.6, 32.5], around: [[42.8, 31.2], [44.2, 32.9], [45.4, 33.5], [46.3, 32.2], [45.5, 30.8], [43.7, 30.6]] },
        { type: "area", name: "Hammurabi's conquests", tier: "conquest", from: "-1763", colour: BABYLON, labelAt: [44.0, 34.0], around: [[39.8, 33.5], [41.4, 35.0], [43.6, 35.5], [46.8, 34.8], [47.4, 32.4], [45.8, 30.4], [43.0, 30.2], [40.6, 31.5]] },
        { type: "area", name: "Mari", tier: "core", colour: MARI, labelAt: [40.8, 34.6], around: [[39.5, 33.7], [40.7, 35.1], [42.0, 35.0], [42.2, 33.8], [40.8, 33.2]] },
        { type: "area", name: "Elam", tier: "influence", colour: ELAM, labelAt: [48.0, 31.5], around: [[46.0, 30.0], [48.6, 32.0], [50.2, 31.0], [50.0, 28.8], [47.0, 28.7]] },
        { type: "area", name: "Assyria", tier: "influence", colour: ASSYRIA, labelAt: [43.5, 36.0], around: [[41.5, 35.0], [43.4, 37.0], [45.2, 36.8], [45.4, 35.2], [43.0, 34.6]] },
        { type: "arrow", colour: BABYLON, name: "Hammurabi's campaigns", labelAt: [43.3, 33.7], from: "-1765", path: [[44.42, 32.54], [43.13, 36.36], [40.89, 34.55], [45.9, 31.6]] },
        { type: "arrow", colour: ELAM, name: "Elamite pressure", labelAt: [46.4, 32.3], side: "l", until: "-1764", path: [[48.5, 31.3], [46.8, 32.0], [44.42, 32.54]] },
        { type: "point", symbol: "capital", name: "Babylon", year: "Hammurabi", at: [44.42, 32.54], dy: -18 },
        { type: "point", symbol: "capital", name: "Mari", year: "taken c. 1761 BC", at: [40.89, 34.55], side: "l" },
        { type: "point", symbol: "large-city", name: "Larsa", year: "1763 BC", at: [45.84, 31.28] },
        { type: "point", symbol: "treaty", name: "Code of Hammurabi", year: "c. 1755 BC", at: [44.42, 32.54], dy: 26, minK: 4 },
        { type: "label", style: "water", text: "Euphrates", at: [42.2, 33.4] },
        { type: "label", style: "water", text: "Tigris", at: [45.0, 34.1] }
      ],
      terms: [
        { t: "Hammurabi", wiki: "Hammurabi", why: "His reign is the anchor for Old Babylonian chronology." },
        { t: "Babylon", wiki: "Babylon" },
        { t: "Mari", wiki: "Mari, Syria", why: "Mari's palace archive shows the politics Hammurabi entered." },
        { t: "Elam", wiki: "Elam" },
        { t: "Assyria", wiki: "Old Assyrian Empire" },
        { t: "Code of Hammurabi", wiki: "Code of Hammurabi", star: "What does the Code of Hammurabi show about justice and rank in Old Babylonian society?" }
      ]
    },

    "ch-han-china": {
      caption: "Han China expands from the Qin heartland to the Hexi Corridor and Tarim routes. Borders are approximate.",
      bbox: [[72, 18], [125, 45]],
      layers: [
        { type: "area", name: "Han core", tier: "core", colour: HAN, labelAt: [110.5, 34.0], around: [[103, 29], [106, 33], [109, 36], [114, 38], [119, 37], [121, 33], [118, 29], [113, 27], [107, 27]] },
        { type: "area", name: "Emperor Wu's expansion", tier: "conquest", from: "-0141", colour: HAN, labelAt: [100.5, 39.0], around: [[92, 36], [98, 40], [105, 41], [111, 38], [109, 35], [100, 35], [94, 34]] },
        { type: "area", name: "Xiongnu steppe", tier: "influence", colour: XIONGNU, labelAt: [101, 43], around: [[82, 42], [94, 45], [110, 45], [123, 43], [120, 40], [104, 40], [90, 39]] },
        { type: "front", colour: XIONGNU, name: "Xiongnu frontier", side: "r", path: [[92, 40], [98, 41], [104, 41], [111, 40], [116, 39]] },
        { type: "route", style: "dotted", colour: ROAD, name: "Silk Road", labelAt: [90, 38], path: [[108.94, 34.26], [103.84, 36.06], [94.66, 40.14], [82.94, 41.72], [75.99, 39.47]] },
        { type: "arrow", colour: HAN, name: "Zhang Qian west", labelAt: [96, 36.7], from: "-0138", path: [[108.94, 34.26], [101, 36.5], [94.66, 40.14], [82.94, 41.72]] },
        { type: "point", symbol: "capital", name: "Chang'an", year: "Han", at: [108.94, 34.26], side: "l" },
        { type: "point", symbol: "capital", name: "Luoyang", year: "Eastern Han", from: "0025", at: [112.45, 34.62] },
        { type: "point", symbol: "fortress", name: "Dunhuang", year: "Hexi Corridor", from: "-0119", at: [94.66, 40.14] },
        { type: "point", symbol: "insurrection", name: "Yellow Turban rebellion", year: "184", from: "0184", at: [114.3, 35.0] },
        { type: "label", style: "medallion", text: "H", at: [116, 31.2], colour: HAN },
        { type: "label", style: "medallion", text: "X", at: [90, 44], colour: XIONGNU }
      ],
      terms: [
        { t: "Han China", wiki: "Han dynasty" },
        { t: "Emperor Wu", wiki: "Emperor Wu of Han", why: "His reign made Han power more expansionist." },
        { t: "Xiongnu", wiki: "Xiongnu", why: "The steppe confederation shaped Han frontier policy." },
        { t: "Hexi Corridor", wiki: "Hexi Corridor", why: "The corridor linked the Chinese heartland to Central Asia." },
        { t: "Zhang Qian", wiki: "Zhang Qian" },
        { t: "Silk Road", wiki: "Silk Road", star: "How much did Han frontier war create the Silk Road?" },
        { t: "Yellow Turban rebellion", wiki: "Yellow Turban Rebellion" }
      ]
    },

    "ch-rome": {
      caption: "Rome grows from an Italian city to a Mediterranean empire and then fragments in the west. Borders are approximate.",
      bbox: [[-10, 30], [45, 56]],
      layers: [
        { type: "area", name: "Italy", tier: "core", colour: ROME, labelAt: [13.0, 42.0], around: [[8, 44], [10, 45], [13, 44], [16, 41], [17, 39], [15, 37], [12, 40], [10, 42]] },
        { type: "area", name: "Roman Mediterranean", tier: "conquest", colour: ROME, labelAt: [18, 38], around: [[-6, 36], [2, 42], [12, 45], [24, 43], [35, 39], [34, 33], [20, 31], [7, 33]] },
        { type: "area", name: "Carthage", tier: "influence", colour: CARTHAGE, labelAt: [3, 37], around: [[-7, 35], [-1, 39], [8, 39], [11, 36], [8, 33], [-1, 33]] },
        { type: "area", name: "Greek east", tier: "influence", colour: GREEK, labelAt: [28, 38], around: [[20, 36], [26, 41], [35, 42], [42, 38], [39, 34], [28, 34]] },
        { type: "arrow", colour: ROME, name: "Roman expansion", labelAt: [16, 40], path: [[12.5, 41.9], [14, 37.6], [10.31, 36.85], [23.7, 37.9], [31.2, 31.2]] },
        { type: "arrow", colour: GOTH, name: "Goths", labelAt: [25, 45], from: "0376", path: [[27.8, 43.8], [21, 44.5], [12.5, 41.9]] },
        { type: "arrow", colour: VANDAL, name: "Vandals", labelAt: [6, 39], from: "0429", path: [[-5.4, 36.7], [0, 35.5], [10.31, 36.85], [12.5, 41.9]] },
        { type: "point", symbol: "capital", name: "Rome", at: [12.5, 41.9] },
        { type: "point", symbol: "capital", name: "Carthage", at: [10.31, 36.85], colour: CARTHAGE },
        { type: "point", symbol: "capital", name: "Constantinople", year: "330", from: "0330", at: [28.98, 41.01] },
        { type: "label", style: "medallion", text: "R", at: [18, 44], colour: ROME },
        { type: "label", style: "medallion", text: "C", at: [2, 34], colour: CARTHAGE }
      ],
      terms: [
        { t: "Rome", wiki: "Ancient Rome" },
        { t: "Republic", wiki: "Roman Republic" },
        { t: "Carthage", wiki: "Ancient Carthage", star: "Why did Carthage force Rome to become a naval and overseas power?" },
        { t: "Mediterranean", wiki: "Mediterranean Sea" },
        { t: "Augustus", wiki: "Augustus" },
        { t: "Goths", wiki: "Goths" },
        { t: "Vandals", wiki: "Vandals" },
        { t: "Huns", wiki: "Huns" }
      ]
    },

    "ch-rome-conquers-italy": {
      caption: "Rome's control in Italy builds in dated tiers from Latium to the south. Borders are approximate.",
      bbox: [[6, 36], [19, 46.5]],
      layers: [
        { type: "area", name: "Rome and Latium", tier: "core", from: "-0509", colour: ROME, labelAt: [12.15, 41.25], around: [[11.8, 41.2], [12.5, 42.1], [13.3, 41.8], [13.2, 41.1], [12.4, 40.9]] },
        { type: "area", name: "Veii", tier: "conquest", from: "-0396", colour: ROME, labelAt: [11.7, 42.65], around: [[11.6, 41.7], [12.2, 42.4], [13.1, 42.5], [13.4, 41.7], [12.6, 41.3]] },
        { type: "area", name: "Latin League settlement", tier: "conquest", from: "-0338", colour: ROME, labelAt: [13.8, 40.15], around: [[11.7, 40.7], [12.8, 42.4], [14.1, 41.8], [14.3, 40.7], [13.2, 40.2]] },
        { type: "area", name: "After the Samnite wars", tier: "conquest", from: "-0290", colour: ROME, labelAt: [15.6, 39.55], around: [[11.0, 42.8], [13.5, 43.0], [15.6, 41.5], [16.0, 39.8], [14.1, 39.6], [12.2, 40.6]] },
        { type: "area", name: "Italy south of the Po", tier: "conquest", from: "-0272", colour: ROME, labelAt: [10.4, 44.4], around: [[8.4, 44.8], [10.2, 45.3], [12.7, 44.3], [15.6, 41.8], [17.3, 40.5], [17.0, 38.7], [15.4, 37.4], [13.0, 40.0], [10.5, 42.0]] },
        { type: "area", name: "Samnite highlands", tier: "influence", colour: SAMNITE, labelAt: [15.4, 41.75], until: "-0290", around: [[13.2, 42.0], [14.5, 42.2], [15.6, 41.3], [15.1, 40.4], [13.9, 40.5]] },
        { type: "route", style: "road", colour: ROAD, name: "Via Appia", labelAt: [13.6, 41.0], from: "-0312", path: [[12.5, 41.9], [13.4, 41.3], [14.8, 41.13], [15.8, 40.64], [17.94, 40.64]] },
        { type: "point", symbol: "capital", name: "Rome", year: "509 BC", at: [12.5, 41.9], dy: -18 },
        { type: "point", symbol: "fortress", name: "Veii", year: "396 BC", from: "-0396", at: [12.4, 42.02], side: "l", dy: -12 },
        { type: "point", symbol: "ally", name: "Latin League", year: "338 BC", from: "-0338", at: [12.85, 41.7], side: "r", dy: 16 },
        { type: "point", symbol: "fortress", name: "Beneventum", year: "268 BC", from: "-0268", at: [14.78, 41.13], side: "r", dy: -12 },
        { type: "point", symbol: "port", name: "Tarentum", year: "272 BC", from: "-0272", at: [17.24, 40.46], side: "r", dy: 18 },
        { type: "label", style: "water", text: "Adriatic", at: [16.6, 43.6] }
      ],
      terms: [
        { t: "Rome", wiki: "Ancient Rome" },
        { t: "Republic", wiki: "Roman Republic" },
        { t: "Latin League", wiki: "Latin League", why: "Rome used varied alliances and citizenship rights rather than one simple annexation." },
        { t: "Samnite Wars", wiki: "Samnite Wars", star: "Why did fighting the Samnites teach Rome how to fight across Italy?" },
        { t: "Via Appia", wiki: "Appian Way" },
        { t: "Tarentum", wiki: "Taranto" },
        { t: "Po", wiki: "Po (river)" }
      ]
    },

    "ch-punic-wars": {
      caption: "Rome and Carthage fight across Sicily, the islands, Spain and North Africa. Borders are approximate.",
      bbox: [[-8, 30], [22, 45]],
      layers: [
        { type: "area", name: "Roman Italy", tier: "core", colour: ROME, labelAt: [13.5, 42], around: [[8.5, 44.5], [11, 45], [14, 43.5], [17, 40.5], [16, 38], [13, 40], [10, 42]] },
        { type: "area", name: "Sicily", tier: "conquest", from: "-0241", colour: ROME, labelAt: [14, 37.4], around: [[12.1, 36.7], [13.9, 38.3], [15.6, 37.5], [15.0, 36.5]] },
        { type: "area", name: "Sardinia and Corsica", tier: "conquest", from: "-0238", colour: ROME, labelAt: [9.2, 40.5], around: [[8, 38.8], [9.7, 42.9], [10.4, 42.6], [9.7, 38.7]] },
        { type: "area", name: "Spain", tier: "conquest", from: "-0201", colour: ROME, labelAt: [-1.5, 39.5], around: [[-7, 36.5], [-2, 43], [3, 41], [1, 37], [-4, 36]] },
        { type: "area", name: "Africa and Macedonia", tier: "conquest", from: "-0146", colour: ROME, labelAt: [15, 35.2], around: [[8, 34], [13, 37], [22, 40], [20, 33], [13, 32]] },
        { type: "area", name: "Carthaginian sphere", tier: "influence", colour: CARTHAGE, labelAt: [3.5, 36.8], around: [[-6, 36], [-1, 40], [8, 39.5], [12, 36], [8, 33], [-1, 33]] },
        { type: "front", colour: CARTHAGE, name: "Carthaginian sea control", side: "r", until: "-0241", path: [[8.8, 39.8], [11.4, 38.2], [13.7, 37.6], [10.3, 36.9]] },
        { type: "arrow", colour: ROME, name: "Rome overseas", labelAt: [10.5, 38.5], from: "-0264", path: [[12.5, 41.9], [14, 37.6], [9, 40.0], [-0.98, 37.6], [10.31, 36.85]] },
        { type: "point", symbol: "capital", name: "Rome", at: [12.5, 41.9] },
        { type: "point", symbol: "capital", name: "Carthage", at: [10.31, 36.85], colour: CARTHAGE },
        { type: "point", symbol: "battle", name: "Aegates", year: "241 BC", at: [11.0, 37.9] },
        { type: "point", symbol: "port", name: "New Carthage", year: "Spain", at: [-0.98, 37.6], colour: CARTHAGE },
        { type: "point", symbol: "battle", name: "Zama", year: "202 BC", at: [9.9, 36.2] }
      ],
      terms: [
        { t: "Punic Wars", wiki: "Punic Wars" },
        { t: "Carthage", wiki: "Ancient Carthage" },
        { t: "Sicily", wiki: "Sicily" },
        { t: "Sardinia", wiki: "Sardinia" },
        { t: "Corsica", wiki: "Corsica" },
        { t: "Spain", wiki: "Hispania" },
        { t: "Hannibal", wiki: "Hannibal", star: "Why did Hannibal come closer than anyone to breaking Rome?" },
        { t: "Africa", wiki: "Africa (Roman province)" }
      ]
    },

    "ch-hannibals-war": {
      caption: "Hannibal's march to Italy and Scipio's counterstroke in Spain and Africa. Borders are approximate.",
      bbox: [[-6, 35], [18, 46]],
      layers: [
        { type: "area", name: "Rome and allies", tier: "core", colour: ROME, labelAt: [13.5, 42], around: [[8.5, 44.5], [11, 45], [14, 43.5], [17, 40.5], [16, 38], [13, 40], [10, 42]] },
        { type: "area", name: "Carthaginian Spain and Africa", tier: "influence", colour: CARTHAGE, labelAt: [1, 36.3], around: [[-6, 36], [-2, 40], [4, 39.5], [11, 36.9], [9, 35], [-1, 35]] },
        { type: "itinerary", colour: CARTHAGE, name: "Hannibal", labelAt: [5.5, 43.4], stops: [
          { name: "New Carthage", date: "-0218-04", at: [-0.98, 37.6], side: "l" },
          { name: "Ebro", date: "-0218-06", at: [0.5, 41.3], via: [[-0.2, 39.6]] },
          { name: "Pyrenees", date: "-0218-08", at: [2.2, 42.7] },
          { name: "Rhone crossing", date: "-0218-09", at: [4.8, 43.9], side: "l" },
          { name: "Alps", date: "-0218-10", at: [6.9, 45.0] },
          { name: "Trebia", date: "-0218-12", at: [9.6, 45.05], battle: true, dy: -14 },
          { name: "Trasimene", date: "-0217-06-21", at: [12.1, 43.1], battle: true },
          { name: "Cannae", date: "-0216-08-02", at: [16.15, 41.3], battle: true },
          { name: "southern Italy", date: "-0215", at: [14.8, 40.6], via: [[16.4, 40.8]] },
          { name: "back to Africa", date: "-0203", at: [10.31, 36.85] },
          { name: "Zama", date: "-0202-10", at: [9.9, 36.2], battle: true }
        ] },
        { type: "itinerary", colour: ROME, name: "Scipio", labelAt: [4.2, 38.1], numbered: false, stops: [
          { name: "New Carthage", date: "-0209", at: [-0.98, 37.6], battle: true },
          { name: "Ilipa", date: "-0206", at: [-5.98, 37.5], battle: true, side: "l" },
          { name: "landing in Africa", date: "-0204", at: [10.5, 36.8] },
          { name: "Zama", date: "-0202-10", at: [9.9, 36.2], battle: true }
        ] },
        { type: "point", symbol: "capital", name: "Rome", at: [12.5, 41.9] },
        { type: "point", symbol: "capital", name: "Carthage", at: [10.31, 36.85], colour: CARTHAGE }
      ],
      terms: [
        { t: "Hannibal", wiki: "Hannibal" },
        { t: "Second Punic War", wiki: "Second Punic War" },
        { t: "New Carthage", wiki: "Cartagena, Spain" },
        { t: "Ebro", wiki: "Ebro" },
        { t: "Rhone", wiki: "Rhone" },
        { t: "Alps", wiki: "Hannibal's crossing of the Alps", star: "Why did crossing the Alps make strategic sense despite the losses?" },
        { t: "Trebia", wiki: "Battle of the Trebia" },
        { t: "Trasimene", wiki: "Battle of Lake Trasimene" },
        { t: "Cannae", wiki: "Battle of Cannae" },
        { t: "Scipio", wiki: "Scipio Africanus" },
        { t: "Zama", wiki: "Battle of Zama" }
      ]
    },

    "ch-end-of-the-republic": {
      caption: "Civil war carries Caesar from Italy to Greece, Egypt, Africa and Spain. Borders are approximate.",
      bbox: [[-10, 30], [35, 48]],
      layers: [
        { type: "area", name: "Roman provinces", tier: "core", colour: ROME, labelAt: [15, 40], around: [[-7, 36], [2, 42], [12, 45], [23, 43], [32, 37], [28, 32], [15, 32], [4, 34]] },
        { type: "area", name: "Hellenistic east", tier: "influence", colour: GREEK, labelAt: [27, 38], around: [[20, 36], [27, 41], [35, 39], [33, 33], [24, 33]] },
        { type: "itinerary", colour: ROME, name: "Caesar civil war", labelAt: [18, 39], stops: [
          { name: "Rubicon", date: "-0049-01-10", at: [12.35, 44.06] },
          { name: "Pharsalus", date: "-0048-08-09", at: [22.38, 39.3], battle: true },
          { name: "Alexandria", date: "-0048-10", at: [29.92, 31.2] },
          { name: "Zela", date: "-0047", at: [35.9, 40.3], battle: true },
          { name: "Thapsus", date: "-0046", at: [10.56, 35.62], battle: true },
          { name: "Munda", date: "-0045", at: [-4.7, 37.3], battle: true }
        ] },
        { type: "itinerary", colour: GREEK, style: "dashed", numbered: false, name: "Pompey's escape", labelAt: [24, 35.2], stops: [
          { name: "Brundisium", date: "-0049-03", at: [17.94, 40.64] },
          { name: "Dyrrhachium", date: "-0048-07", at: [19.45, 41.32] },
          { name: "Egypt", date: "-0048-09", at: [31.2, 31.3] }
        ] },
        { type: "point", symbol: "capital", name: "Rome", at: [12.5, 41.9] },
        { type: "point", symbol: "insurrection", name: "Ides of March", year: "44 BC", from: "-0044-03-15", at: [12.48, 41.89], dy: -20 },
        { type: "point", symbol: "battle", name: "Actium", year: "31 BC", from: "-0031-09-02", at: [20.72, 38.95] }
      ],
      terms: [
        { t: "Republic", wiki: "Roman Republic" },
        { t: "Gracchi", wiki: "Gracchi" },
        { t: "Sulla", wiki: "Sulla" },
        { t: "Caesar", wiki: "Julius Caesar" },
        { t: "Rubicon", wiki: "Crossing the Rubicon", star: "Why did the Rubicon matter as a legal and political line?" },
        { t: "Pompey", wiki: "Pompey" },
        { t: "Ides of March", wiki: "Assassination of Julius Caesar" },
        { t: "Actium", wiki: "Battle of Actium" },
        { t: "Octavian", wiki: "Augustus" }
      ]
    },

    "ch-caesar-in-gaul": {
      caption: "Caesar's campaigns move from central Gaul to the Rhine, Britain and Alesia. Borders are approximate.",
      bbox: [[-6, 42], [10, 53]],
      layers: [
        { type: "area", name: "Roman province", tier: "core", colour: ROME, labelAt: [5.2, 43.8], around: [[2.5, 43], [4.5, 45], [7.5, 44.5], [7.2, 42.8], [4.2, 42.5]] },
        { type: "area", name: "Gaul conquered", tier: "conquest", from: "-0052", colour: ROME, labelAt: [2.5, 47.5], around: [[-4, 43.5], [-2, 49], [2, 51.2], [6, 50.5], [8, 47], [6, 44], [2, 43]] },
        { type: "area", name: "Gaul", tier: "influence", colour: GAUL, labelAt: [2.0, 48.5], until: "-0052", around: [[-4, 43.5], [-2, 49], [2, 51.2], [6, 50.5], [8, 47], [6, 44], [2, 43]] },
        { type: "itinerary", colour: ROME, name: "Caesar's campaigns", labelAt: [3, 49], stops: [
          { name: "Bibracte", date: "-0058", at: [4.3, 46.92], battle: true },
          { name: "Belgae/Sabis", date: "-0057", at: [4.8, 50.25], battle: true },
          { name: "Rhine bridge", date: "-0055", at: [7.6, 50.4] },
          { name: "Britain", date: "-0055", at: [1.3, 51.2] },
          { name: "Britain", date: "-0054", at: [0.2, 51.5] },
          { name: "Gergovia", date: "-0052", at: [3.12, 45.72], battle: true },
          { name: "Alesia", date: "-0052-09", at: [4.5, 47.54], battle: true }
        ] },
        { type: "point", symbol: "capital", name: "Rome", at: [12.5, 41.9], maxK: 7 },
        { type: "point", symbol: "fortress", name: "Alesia", year: "52 BC", at: [4.5, 47.54] },
        { type: "label", style: "water", text: "Rhine", at: [7.5, 49.4] }
      ],
      terms: [
        { t: "Caesar in Gaul", wiki: "Gallic Wars" },
        { t: "Helvetii", wiki: "Helvetii" },
        { t: "Bibracte", wiki: "Battle of Bibracte" },
        { t: "Belgae", wiki: "Belgae" },
        { t: "Sabis", wiki: "Battle of the Sabis" },
        { t: "Rhine", wiki: "Caesar's Rhine bridges" },
        { t: "Britain", wiki: "Caesar's invasions of Britain" },
        { t: "Gergovia", wiki: "Battle of Gergovia" },
        { t: "Alesia", wiki: "Battle of Alesia", star: "Why did Alesia decide more than one battle?" },
        { t: "Vercingetorix", wiki: "Vercingetorix" }
      ]
    },

    "ch-pax-romana": {
      caption: "The high empire links the Mediterranean with roads, legions and frontier lines. Borders are approximate.",
      bbox: [[-10, 24], [45, 56]],
      layers: [
        { type: "area", name: "Roman Empire", tier: "core", colour: ROME, labelAt: [20, 39], around: [[-7, 36], [0, 45], [10, 51], [22, 47], [35, 42], [43, 36], [40, 29], [28, 31], [15, 32], [4, 34]] },
        { type: "area", name: "Trajan's eastern gains", tier: "conquest", from: "0106", until: "0118", colour: ROME, labelAt: [39, 37], around: [[35, 34], [42, 38], [45, 34], [42, 30], [36, 31]] },
        { type: "area", name: "Parthia", tier: "influence", colour: PERSIA, labelAt: [48, 35], around: [[42, 31], [48, 38], [56, 37], [57, 30], [49, 28]] },
        { type: "route", style: "road", colour: ROAD, name: "Roman roads", labelAt: [12, 43], path: [[-1.5, 43.6], [5, 45.5], [12.5, 41.9], [18, 41.0], [28.98, 41.01], [35, 37]] },
        { type: "front", colour: GERMAN, name: "Rhine-Danube frontier", side: "r", path: [[6, 50.5], [8, 49], [12, 48.5], [16, 48.2], [20, 47], [25, 45.5], [29, 44.2]] },
        { type: "point", symbol: "capital", name: "Rome", year: "Augustus", at: [12.5, 41.9] },
        { type: "point", symbol: "capital", name: "Constantinople", year: "later capital", at: [28.98, 41.01] },
        { type: "point", symbol: "fortress", name: "Hadrian's Wall", year: "122", from: "0122", at: [-2.3, 55.0] },
        { type: "point", symbol: "battle", name: "Danube wars", year: "Marcus Aurelius", from: "0166", at: [16.37, 48.2] },
        { type: "label", style: "medallion", text: "R", at: [20, 45], colour: ROME },
        { type: "label", style: "water", text: "Mediterranean", at: [16, 35] }
      ],
      terms: [
        { t: "imperial system", wiki: "Roman Empire" },
        { t: "roads", wiki: "Roman roads" },
        { t: "legions", wiki: "Roman legion" },
        { t: "Augustus", wiki: "Augustus" },
        { t: "Trajan", wiki: "Trajan", star: "Why did Trajan's widest empire not become Rome's permanent shape?" },
        { t: "Hadrian", wiki: "Hadrian" },
        { t: "Marcus Aurelius", wiki: "Marcus Aurelius" },
        { t: "frontier armies", wiki: "Roman army" }
      ]
    },

    "ch-augustus-principate": {
      caption: "Augustus turns civil-war victory into a provincial and frontier settlement. Borders are approximate.",
      bbox: [[-10, 26], [43, 52]],
      layers: [
        { type: "area", name: "Imperial provinces", tier: "core", colour: ROME, labelAt: [15, 39], around: [[-3, 38], [4, 45], [9, 47], [16, 45], [24, 41], [31, 37], [30, 31], [18, 33], [8, 36]] },
        { type: "area", name: "Senatorial provinces", tier: "influence", colour: "#d8b84a", labelAt: [17, 36], around: [[10, 37], [14, 39], [23, 38], [30, 31], [10, 36]] },
        { type: "area", name: "Client kingdoms", tier: "influence", colour: PERSIA, labelAt: [34, 37], around: [[31, 39], [38, 39], [40, 34], [34, 31]] },
        { type: "arrow", colour: ROME, name: "Actium and Egypt", labelAt: [22, 37], path: [[12.5, 41.9], [17.94, 40.64], [20.72, 38.95], [29.92, 31.2]] },
        { type: "route", style: "road", colour: ROAD, name: "Augustan roads", labelAt: [7, 44], from: "-0016", path: [[1.25, 41.12], [4.83, 45.76], [12.5, 41.9]] },
        { type: "front", colour: GERMAN, name: "Rhine after Teutoburg", side: "r", from: "0009", path: [[6.7, 51.4], [7.4, 49.0], [6.0, 46.5]] },
        { type: "front", colour: GERMAN, name: "Danube frontier", side: "r", path: [[10.5, 47], [16.37, 48.21], [19.7, 45.0], [22.0, 44.8]] },
        { type: "point", symbol: "capital", name: "Rome", year: "Augustus", at: [12.5, 41.9] },
        { type: "point", symbol: "battle", name: "Actium", year: "31 BC", at: [20.72, 38.95] },
        { type: "point", symbol: "large-city", name: "Alexandria", year: "30 BC", at: [29.92, 31.2] },
        { type: "point", symbol: "battle", name: "Teutoburg", year: "AD 9", from: "0009", at: [8.9, 52.1] }
      ],
      terms: [
        { t: "Augustus", wiki: "Augustus" },
        { t: "Principate", wiki: "Principate" },
        { t: "Imperial provinces", wiki: "Roman province" },
        { t: "Senate", wiki: "Roman Senate" },
        { t: "Danube", wiki: "Danube" },
        { t: "Teutoburg", wiki: "Battle of the Teutoburg Forest", star: "Why did Teutoburg make the Rhine a Roman frontier?" }
      ]
    },

    "ch-high-empire-frontiers": {
      caption: "The high empire is a network of provinces, walls, legion roads and pressure frontiers. Borders are approximate.",
      bbox: [[-12, 24], [47, 56]],
      layers: [
        { type: "area", name: "Roman Empire c. 100", tier: "core", colour: ROME, labelAt: [18, 39], around: [[-7, 36], [0, 45], [10, 51], [22, 47], [35, 42], [43, 36], [40, 29], [28, 31], [15, 32], [4, 34]] },
        { type: "area", name: "Trajanic conquests", tier: "conquest", from: "0106", until: "0118", colour: ROME, labelAt: [38, 37], around: [[24.8, 46.5], [35, 34], [42, 38], [45, 34], [42, 30], [36, 31]] },
        { type: "area", name: "Parthia", tier: "influence", colour: PERSIA, labelAt: [47, 35], around: [[42, 31], [48, 38], [56, 37], [57, 30], [49, 28]] },
        { type: "front", colour: GERMAN, name: "Rhine-Danube limes", side: "r", path: [[6, 50.5], [8, 49], [12, 48.5], [16, 48.2], [20, 47], [25, 45.5], [29, 44.2]] },
        { type: "front", colour: GERMAN, name: "Hadrian's Wall", side: "l", from: "0122", path: [[-3.1, 55.0], [-2.3, 55.0], [-1.5, 55.05], [-0.7, 54.98]] },
        { type: "arrow", colour: ROME, name: "Trajan east", labelAt: [35, 37], from: "0114", until: "0118", path: [[36.2, 36.2], [41.21, 37.07], [44.58, 33.1]] },
        { type: "arrow", colour: PERSIA, name: "Parthian pressure", labelAt: [39, 35], from: "0162", path: [[42.0, 36.2], [40.73, 34.75], [36.2, 36.2]] },
        { type: "point", symbol: "capital", name: "Rome", at: [12.5, 41.9] },
        { type: "point", symbol: "fortress", name: "Dacia", year: "106", at: [25.0, 45.8] },
        { type: "point", symbol: "fortress", name: "Hadrian's Wall", year: "122", from: "0122", at: [-2.3, 55.0] },
        { type: "point", symbol: "fortress", name: "Dura-Europos", from: "0162", at: [40.73, 34.75] },
        { type: "point", symbol: "treaty", name: "Citizenship", year: "212", from: "0212", at: [12.5, 41.9], dy: 22 }
      ],
      terms: [
        { t: "high empire", wiki: "Roman Empire" },
        { t: "Trajan", wiki: "Trajan" },
        { t: "Hadrian", wiki: "Hadrian" },
        { t: "Rhine", wiki: "Rhine" },
        { t: "Danube", wiki: "Danube" },
        { t: "Euphrates", wiki: "Euphrates" },
        { t: "Severan", wiki: "Severan dynasty", star: "Why did a wider citizenship not make the empire easier to govern?" }
      ]
    },

    "ch-late-antiquity": {
      caption: "Late Rome rebuilds authority while Persia, Goths and Huns press on the old map. Borders are approximate.",
      bbox: [[-12, 27], [43, 57]],
      layers: [
        { type: "area", name: "Western prefectures", tier: "core", colour: ROME, labelAt: [5, 43], around: [[-7, 36], [0, 45], [8, 50], [16, 47], [19, 41], [15, 36], [6, 35]] },
        { type: "area", name: "Eastern prefectures", tier: "core", colour: "#e0a080", labelAt: [28, 39], around: [[18, 40], [24, 45], [34, 42], [39, 36], [33, 31], [23, 35]] },
        { type: "area", name: "Sasanian Persia", tier: "influence", colour: PERSIA, labelAt: [43, 34], around: [[37, 31], [45, 38], [54, 36], [55, 29], [46, 28]] },
        { type: "front", colour: GERMAN, name: "East-West division", side: "r", from: "0395", path: [[18.5, 47], [18.6, 43.5], [19.2, 40.5], [19.2, 36.0]] },
        { type: "arrow", colour: GOTH, name: "Gothic settlement", labelAt: [24, 43], from: "0376", path: [[27.8, 43.8], [26.56, 41.68], [21, 44.5], [12.5, 41.9]] },
        { type: "arrow", colour: HUN, name: "Huns", labelAt: [21, 48.5], from: "0375", path: [[34, 49], [29, 47], [21, 45], [11, 48], [4.1, 48.3]] },
        { type: "point", symbol: "capital", name: "Constantinople", year: "330", from: "0330", at: [28.98, 41.01] },
        { type: "point", symbol: "capital", name: "Ravenna", year: "404", from: "0404", at: [12.2, 44.42] },
        { type: "point", symbol: "battle", name: "Adrianople", year: "378", from: "0378", at: [26.56, 41.68] },
        { type: "point", symbol: "battle", name: "Catalaunian Plains", year: "451", from: "0451", at: [4.1, 48.3] }
      ],
      terms: [
        { t: "Late antiquity", wiki: "Late antiquity" },
        { t: "Diocletian", wiki: "Diocletian" },
        { t: "Constantine", wiki: "Constantine the Great" },
        { t: "Christianity", wiki: "Christianity in late antiquity" },
        { t: "Persian", wiki: "Sasanian Empire" },
        { t: "frontier peoples", wiki: "Migration Period" }
      ]
    },

    "ch-christianity-migrations": {
      caption: "Christian centres and migrating peoples share the same late Roman geography. Borders are approximate.",
      bbox: [[-10, 27], [43, 57]],
      layers: [
        { type: "area", name: "Christianized regions", tier: "influence", colour: "#d8b84a", labelAt: [20, 38], around: [[-5, 40], [3, 45], [12, 47], [20, 45], [29, 42], [36, 37], [31, 31], [15, 35], [5, 36]] },
        { type: "area", name: "Slavic settlement zones", tier: "influence", from: "0600", colour: "#79a85a", labelAt: [22, 47], around: [[14, 50], [19, 50], [24, 49], [27, 46], [23, 43], [19, 42], [16, 45]] },
        { type: "area", name: "Frankish kingdom", tier: "influence", from: "0500", colour: "#6f8f5f", labelAt: [5, 49], around: [[1, 49], [4, 50.5], [7, 49.5], [8, 47], [4, 46], [1, 47]] },
        { type: "arrow", colour: GOTH, name: "Goths", from: "0376", path: [[27.8, 43.8], [26.56, 41.68], [20, 43.5], [12.5, 41.9], [1.44, 43.6]] },
        { type: "arrow", colour: VANDAL, name: "Vandals", from: "0406", path: [[7, 50], [2, 47], [-3, 41], [-5, 36], [2, 35], [10.31, 36.85], [12.5, 41.9]] },
        { type: "route", style: "dashed", colour: "#111111", name: "Pauline route memory", until: "0400", path: [[36.2, 36.2], [27.34, 37.94], [22.93, 37.94], [12.5, 41.9]], head: true },
        { type: "point", symbol: "capital", name: "Rome", at: [12.5, 41.9] },
        { type: "point", symbol: "capital", name: "Constantinople", at: [28.98, 41.01] },
        { type: "point", symbol: "treaty", name: "Nicaea", year: "325", from: "0325", at: [29.72, 40.43] },
        { type: "point", symbol: "city", name: "Hippo", year: "Augustine", from: "0395", at: [7.75, 36.88] },
        { type: "point", symbol: "large-city", name: "Prague", from: "0600", at: [14.42, 50.08] },
        { type: "point", symbol: "large-city", name: "Kiev", from: "0600", at: [30.52, 50.45] }
      ],
      terms: [
        { t: "Christianity", wiki: "Christianity in late antiquity" },
        { t: "Constantine", wiki: "Constantine the Great" },
        { t: "Councils", wiki: "First seven ecumenical councils" },
        { t: "Goths", wiki: "Goths" },
        { t: "Vandals", wiki: "Vandals" },
        { t: "Huns", wiki: "Huns" },
        { t: "Franks", wiki: "Franks" },
        { t: "Slavic-speaking peoples", wiki: "Early Slavs", star: "Why does the post-Roman map become a mosaic of peoples instead of provinces?" }
      ]
    },

    "ch-fall-of-the-west": {
      caption: "Goths, Vandals and Huns press into the western empire before 476. Borders are approximate.",
      bbox: [[-10, 32], [32, 56]],
      layers: [
        { type: "area", name: "Western Roman Empire", tier: "core", colour: ROME, labelAt: [9, 43], around: [[-6, 36], [0, 45], [8, 47], [16, 45], [20, 41], [17, 36], [8, 35]] },
        { type: "area", name: "Vandal Africa", tier: "conquest", from: "0439", colour: VANDAL, labelAt: [8, 35], around: [[-5, 34], [2, 37], [11, 37], [13, 34], [7, 32], [0, 32]] },
        { type: "arrow", colour: GOTH, name: "Goths cross the Danube", labelAt: [23, 43.7], from: "0376", path: [[27.8, 43.8], [24, 43.2], [20, 43.5]] },
        { type: "arrow", colour: GOTH, name: "Alaric to Rome", labelAt: [17, 42.4], from: "0401", path: [[20, 45], [15, 44], [12.5, 41.9]] },
        { type: "arrow", colour: VANDAL, name: "Vandals to Africa and Rome", labelAt: [1, 38.2], from: "0429", path: [[-5.4, 36.7], [-1, 35.8], [10.31, 36.85], [12.5, 41.9]] },
        { type: "arrow", colour: HUN, name: "Attila into Gaul", labelAt: [12, 48.5], from: "0451", path: [[20, 47], [14, 48.2], [4.1, 48.3]] },
        { type: "front", colour: GERMAN, name: "Rhine pressure", side: "r", from: "0406", path: [[7.6, 47.6], [7.6, 49.2], [6.1, 50.8], [5.8, 52.0]] },
        { type: "point", symbol: "battle", name: "Adrianople", year: "378", from: "0378-08-09", at: [26.56, 41.68] },
        { type: "point", symbol: "battle", name: "Sack of Rome", year: "410", from: "0410-08-24", at: [12.5, 41.9], dy: -18 },
        { type: "point", symbol: "battle", name: "Catalaunian Plains", year: "451", from: "0451", at: [4.1, 48.3] },
        { type: "point", symbol: "battle", name: "Vandal sack", year: "455", from: "0455", at: [12.5, 41.9], dy: 20 },
        { type: "point", symbol: "treaty", name: "Ravenna", year: "476", from: "0476-09-04", at: [12.2, 44.42] }
      ],
      terms: [
        { t: "fall of the West", wiki: "Fall of the Western Roman Empire" },
        { t: "Gothic", wiki: "Goths" },
        { t: "Danube", wiki: "Danube" },
        { t: "Adrianople", wiki: "Battle of Adrianople", star: "Why did Adrianople matter so much even though the eastern empire survived?" },
        { t: "Alaric", wiki: "Alaric I" },
        { t: "Vandals", wiki: "Vandals" },
        { t: "Attila", wiki: "Attila" },
        { t: "Huns", wiki: "Huns" },
        { t: "Odoacer", wiki: "Odoacer" },
        { t: "Romulus Augustulus", wiki: "Romulus Augustulus" }
      ]
    }
  };
})();
