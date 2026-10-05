// Chapter scenes for "Russia: Muscovy to Stalin". Each scene is a small map in the atlas grammar
// (docs/atlas-design-language.md), drawn on the viewer map while its chapter is in focus, plus terms linked one move ahead.
// Borders are approximate: they show the story of the chapter, not surveyed lines.
// Layer extras for the viewer: minK / maxK, fade, people, year and note follow the worked Maritime Asia example.
window.SCENES = window.SCENES || {};
(function () {
  const RUS = "#6f8655", RUS2 = "#8a9a5b", STEPPE = "#b88444", POL = "#8c6aa0", SWE = "#5b79a6", OTT = "#b05b4c",
    FRA = "#4f6fa0", BRIT = "#7a5a8c", CAN = "#b22d2d", WHITE = "#b89a64", RED = "#a33d3d", GER = "#505050",
    SEA = "#2e5f8a", RAIL = "#6d5a45", CHINA = "#b98b55", JAPAN = "#6b4f8c", UKR = "#caa44d", FIN = "#6c91b8", GULAG = "#46465a";

  // Who each colour stands for, for the map's colour key. One colour per actor across every chapter of the period.
  (window.SCENE_ACTORS = window.SCENE_ACTORS || {}).russia = {
    [RUS]: "Russia", [RUS2]: "Russian advances", [STEPPE]: "Tatars, steppe peoples and rebels", [POL]: "Poland–Lithuania", [SWE]: "Sweden",
    [OTT]: "Ottoman empire", [FRA]: "France", [BRIT]: "Britain and British India", [CAN]: "Canada", [WHITE]: "Whites", [RED]: "Reds and the Soviet state",
    [GER]: "Germany", [SEA]: "Sea routes", [RAIL]: "Railways", [CHINA]: "China", [JAPAN]: "Japan", [UKR]: "Ukraine", [FIN]: "Finland", [GULAG]: "Gulag"
  };

  window.SCENES.russia = {
    "ch-muscovy": {
      caption: "Muscovy gathers the Russian lands from Moscow's core to the Volga and western Siberia, 1462–1613. Borders are approximate.",
      bbox: [[18, 40], [75, 66]],
      layers: [
        { type: "area", name: "Moscow principality 1462", tier: "core", colour: RUS, labelAt: [36.0, 54.8],
          around: [[35.0, 54.4], [36.4, 55.2], [37.2, 56.1], [38.6, 56.7], [40.2, 56.3], [41.1, 55.2], [40.2, 54.2], [38.2, 53.8], [36.4, 53.9]] },
        { type: "area", name: "Muscovy by 1613", tier: "conquest", colour: RUS, labelAt: [49.5, 58.4],
          around: [[27.0, 56.5], [30.0, 59.5], [36.5, 61.5], [45.0, 60.2], [54.5, 57.5], [65.5, 58.6], [71.0, 56.5], [67.0, 53.5], [55.0, 52.0], [49.0, 47.0], [43.5, 45.5], [37.0, 48.0], [30.5, 52.0]] },
        { type: "area", name: "Tatar khanates and steppe", tier: "influence", colour: STEPPE, labelAt: [49.5, 49.5],
          around: [[36.0, 45.0], [42.0, 48.0], [49.0, 50.0], [58.0, 50.5], [65.0, 48.5], [64.0, 45.5], [55.0, 43.8], [45.0, 43.6], [38.0, 44.0]] },
        { type: "area", name: "Polish and Swedish pressure", tier: "influence", colour: POL, labelAt: [25.0, 55.0],
          around: [[18.5, 49.0], [22.0, 53.0], [23.5, 58.0], [29.0, 59.0], [32.0, 56.0], [30.0, 51.0], [25.0, 48.5]] },
        { type: "arrow", colour: RUS2, name: "down the Volga", labelAt: [45.5, 52.0], path: [[37.62, 55.75], [44.0, 56.3], [49.1, 55.8], [47.8, 52.0], [48.0, 46.4]] },
        { type: "arrow", colour: RUS2, name: "over the Urals", labelAt: [59.5, 57.6], fade: true, path: [[49.1, 55.8], [56.0, 56.7], [62.0, 57.8], [68.25, 58.2]] },
        { type: "arrow", colour: POL, name: "foreign armies", labelAt: [31.0, 55.0], side: "l", path: [[21.0, 52.2], [27.0, 53.5], [33.0, 54.7], [37.62, 55.75]] },
        { type: "point", symbol: "capital", name: "Moscow", year: "1462", at: [37.62, 55.75], side: "l", dy: 18 },
        { type: "point", symbol: "large-city", name: "Novgorod", year: "1478", at: [31.27, 58.52], side: "l" },
        { type: "point", symbol: "fortress", name: "Kazan", year: "1552", at: [49.1, 55.79], dy: -16 },
        { type: "point", symbol: "fortress", name: "Astrakhan", year: "1556", at: [48.03, 46.35], side: "l" },
        { type: "point", symbol: "battle", name: "Time of Troubles", year: "1598–1613", at: [37.62, 55.75], dy: 30, side: "l", minK: 7 },
        { type: "label", style: "medallion", text: "R", at: [57.0, 61.5], colour: RUS },
        { type: "label", style: "medallion", text: "P", at: [22.0, 47.2], colour: POL },
        { type: "label", style: "water", text: "Volga", at: [47.0, 52.2] },
        { type: "label", style: "water", text: "Caspian Sea", at: [51.0, 42.2] },
        { type: "label", style: "region", text: "western Siberia", at: [66.0, 59.5], minK: 4 }
      ],
      terms: [
        { t: "Moscow", wiki: "Moscow" },
        { t: "Tatar", wiki: "Tatars", why: "The Tatar khanates were the steppe powers Muscovy first paid, then conquered." },
        { t: "tsar", wiki: "Tsar" },
        { t: "Volga", wiki: "Volga", why: "Control of the river opened the route to the Caspian and the east.", star: "Why did control of the Volga change Muscovy's whole scale?" },
        { t: "Time of Troubles", wiki: "Time of Troubles" },
        { t: "Romanov", wiki: "House of Romanov" },
        { t: "Champlain", wiki: "Samuel de Champlain" }
      ]
    },

    "ch-romanov-empire": {
      caption: "The Romanovs turn Muscovy into a Baltic, Black Sea and Siberian empire, 1582–1796. Borders are approximate.",
      bbox: [[18, 39], [150, 72]],
      layers: [
        { type: "area", name: "Romanov core", tier: "core", colour: RUS, labelAt: [42.0, 56.5],
          around: [[27.0, 52.0], [31.0, 58.5], [39.0, 61.5], [50.0, 60.5], [57.0, 56.0], [55.0, 50.5], [47.0, 48.5], [37.0, 49.0], [30.0, 50.5]] },
        { type: "area", name: "Siberian and Pacific frontier", tier: "conquest", colour: RUS, labelAt: [96.0, 60.0],
          around: [[58.0, 54.0], [72.0, 58.0], [92.0, 61.0], [114.0, 61.5], [136.0, 59.0], [146.0, 56.5], [143.0, 53.0], [122.0, 53.5], [99.0, 55.0], [76.0, 54.0]] },
        { type: "area", name: "Baltic and Polish gains", tier: "conquest", colour: RUS, labelAt: [27.0, 56.8],
          around: [[20.0, 49.0], [23.0, 53.0], [24.0, 59.5], [30.5, 60.5], [34.0, 56.0], [31.0, 50.0], [25.0, 48.5]] },
        { type: "area", name: "Crimea and Black Sea coast", tier: "conquest", colour: RUS, labelAt: [34.5, 45.2],
          around: [[28.5, 44.7], [32.5, 46.6], [37.0, 46.2], [40.5, 44.8], [39.0, 43.2], [34.2, 44.0], [30.0, 43.8]] },
        { type: "area", name: "Ottoman Empire", tier: "influence", colour: OTT, labelAt: [32.5, 41.5],
          around: [[25.0, 39.5], [30.0, 42.6], [37.0, 42.2], [43.0, 40.2], [39.0, 37.6], [31.0, 37.7], [26.0, 38.7]] },
        { type: "area", name: "Qing China", tier: "influence", colour: CHINA, labelAt: [122.0, 48.0],
          around: [[104.0, 43.0], [116.0, 47.0], [129.0, 51.0], [137.0, 50.5], [138.0, 46.0], [128.0, 42.5], [114.0, 41.0], [105.0, 42.0]] },
        { type: "arrow", colour: RUS2, name: "Cossacks east", labelAt: [83.0, 60.0], fade: true, path: [[68.25, 58.2], [86.0, 60.2], [108.0, 61.2], [128.0, 59.5], [143.2, 59.4]] },
        { type: "arrow", colour: RUS2, name: "Baltic window", labelAt: [32.0, 58.2], path: [[37.62, 55.75], [33.0, 57.6], [30.31, 59.94]] },
        { type: "arrow", colour: RUS2, name: "Black Sea drive", labelAt: [35.8, 49.0], path: [[37.62, 55.75], [36.0, 51.0], [34.1, 44.95]] },
        { type: "point", symbol: "capital", name: "Moscow", at: [37.62, 55.75], side: "l" },
        { type: "point", symbol: "capital", name: "St. Petersburg", year: "1703", at: [30.31, 59.94] },
        { type: "point", symbol: "treaty", name: "Nerchinsk", year: "1689", at: [116.6, 51.98], side: "l", minK: 4 },
        { type: "point", symbol: "port", name: "Okhotsk", year: "1639", at: [143.2, 59.4], colour: SEA, minK: 4 },
        { type: "point", symbol: "battle", name: "Poltava", year: "1709", at: [34.55, 49.59], side: "l", minK: 4 },
        { type: "point", symbol: "fortress", name: "Crimea", year: "1783", at: [34.1, 44.95], side: "l" },
        { type: "point", symbol: "treaty", name: "Poland", year: "1772–95", at: [21.0, 52.23], side: "l" },
        { type: "label", style: "medallion", text: "R", at: [75.0, 66.0], colour: RUS },
        { type: "label", style: "medallion", text: "O", at: [44.0, 39.8], colour: OTT },
        { type: "label", style: "water", text: "Baltic Sea", at: [22.0, 58.0] },
        { type: "label", style: "water", text: "Black Sea", at: [35.0, 42.8] },
        { type: "label", style: "region", text: "Siberia", at: [102.0, 63.2] }
      ],
      terms: [
        { t: "Cossacks", wiki: "Cossacks" },
        { t: "Siberia", wiki: "Siberia", why: "The fur frontier carried Russia across the continent." },
        { t: "Peter the Great", wiki: "Peter the Great" },
        { t: "Baltic", wiki: "Baltic Sea" },
        { t: "St. Petersburg", wiki: "Saint Petersburg", star: "Why did Peter build a new capital on the Baltic instead of ruling from Moscow?" },
        { t: "Catherine the Great", wiki: "Catherine the Great" },
        { t: "Serfdom", wiki: "Serfdom in Russia" }
      ]
    },

    "ch-great-power": {
      caption: "Russia acts as a European great power while its frontiers stretch to Alaska, Central Asia and the Pacific, 1741–1907. Borders are approximate.",
      bbox: [[-172, 22], [150, 72]],
      layers: [
        { type: "area", name: "European Russia", tier: "core", colour: RUS, labelAt: [42.0, 56.0],
          around: [[21.0, 49.0], [27.0, 57.5], [39.0, 61.5], [55.0, 59.0], [63.0, 54.0], [58.0, 48.0], [43.0, 46.5], [29.0, 47.5]] },
        { type: "area", name: "Alaska reach", tier: "influence", colour: RUS, labelAt: [-149.0, 59.0],
          around: [[-167.0, 53.0], [-160.0, 58.0], [-150.0, 61.0], [-141.0, 60.2], [-135.0, 57.0], [-139.0, 55.0], [-151.0, 56.0], [-162.0, 54.5]] },
        { type: "area", name: "Central Asia taken", tier: "conquest", colour: RUS, labelAt: [65.0, 42.0],
          around: [[53.0, 40.5], [58.0, 45.0], [66.0, 45.6], [74.0, 43.0], [76.0, 39.5], [70.0, 37.0], [60.0, 38.0], [53.0, 39.0]] },
        { type: "area", name: "Amur and Pacific coast", tier: "conquest", colour: RUS, labelAt: [129.0, 49.0],
          around: [[119.0, 48.5], [126.0, 52.0], [136.0, 52.0], [141.0, 49.0], [140.0, 44.0], [132.0, 42.0], [126.0, 45.0]] },
        { type: "area", name: "British India", tier: "core", colour: BRIT, labelAt: [77.0, 27.0],
          around: [[67.0, 24.0], [72.0, 30.0], [78.0, 33.0], [85.0, 29.0], [86.0, 22.0], [78.0, 19.0], [70.0, 21.0]] },
        { type: "area", name: "Japan", tier: "core", colour: JAPAN, labelAt: [138.0, 37.0],
          around: [[130.0, 32.0], [134.0, 35.0], [139.0, 40.0], [145.0, 43.0], [143.0, 36.0], [137.0, 33.0]] },
        { type: "arrow", colour: FRA, name: "Napoleon beaten", labelAt: [27.0, 55.0], path: [[23.9, 54.9], [32.0, 55.2], [37.62, 55.75]] },
        { type: "arrow", colour: RUS2, name: "Central Asian advance", labelAt: [62.0, 45.0], path: [[55.1, 51.77], [60.0, 45.0], [69.2, 41.3]] },
        { type: "arrow", colour: RUS2, name: "to the Pacific", labelAt: [120.0, 52.0], path: [[104.0, 52.0], [119.0, 50.0], [131.9, 43.12]] },
        { type: "arrow", colour: JAPAN, name: "Japan stops expansion", labelAt: [129.0, 38.0], side: "l", path: [[139.7, 35.7], [134.5, 37.0], [129.5, 34.5]] },
        { type: "point", symbol: "port", name: "Alaska", year: "1741–1867", at: [-149.0, 61.2], side: "l" },
        { type: "point", symbol: "battle", name: "Borodino", year: "1812", at: [35.82, 55.52] },
        { type: "point", symbol: "battle", name: "Sevastopol", year: "1854–56", at: [33.52, 44.6], side: "l" },
        { type: "point", symbol: "treaty", name: "Alaska sale", year: "1867", at: [-135.33, 57.05], dy: 26, minK: 3 },
        { type: "point", symbol: "city", name: "Tashkent", year: "1865", at: [69.24, 41.31] },
        { type: "point", symbol: "port", name: "Vladivostok", year: "1860", at: [131.9, 43.12], colour: SEA },
        { type: "point", symbol: "battle", name: "Tsushima", year: "1905", at: [129.5, 34.5] },
        { type: "label", style: "medallion", text: "R", at: [92.0, 64.0], colour: RUS },
        { type: "label", style: "medallion", text: "B", at: [82.0, 23.5], colour: BRIT },
        { type: "label", style: "medallion", text: "J", at: [147.0, 36.0], colour: JAPAN },
        { type: "label", style: "region", text: "Central Asia", at: [66.0, 36.0] },
        { type: "label", style: "water", text: "Bering Sea", at: [-168.0, 58.0] },
        { type: "label", style: "water", text: "Pacific", at: [145.0, 47.0] }
      ],
      terms: [
        { t: "Europe", wiki: "Europe" },
        { t: "Alaska", wiki: "Russian America" },
        { t: "Central Asia", wiki: "Central Asia", why: "The Central Asian frontier brought Russia up against British India." },
        { t: "Amur", wiki: "Amur" },
        { t: "Napoleon", wiki: "Napoleon" },
        { t: "Crimean War", wiki: "Crimean War", star: "Why did the Crimean War expose Russia as both huge and backward?" },
        { t: "Japan", wiki: "Empire of Japan" }
      ]
    },

    "ch-revolution": {
      caption: "War, revolution, civil war and Stalin's Soviet state, 1914–1941. Borders are approximate.",
      bbox: [[10, 36], [142, 68]],
      layers: [
        { type: "area", name: "Russian Empire / Soviet core", tier: "core", colour: RED, labelAt: [43.0, 56.5],
          around: [[20.0, 49.0], [27.0, 58.0], [40.0, 62.5], [62.0, 62.0], [86.0, 58.0], [93.0, 52.0], [78.0, 46.0], [55.0, 45.0], [35.0, 46.0]] },
        { type: "area", name: "Brest-Litovsk and 1939–40 borderlands", tier: "conquest", colour: GER, labelAt: [25.5, 56.0],
          around: [[18.0, 48.8], [22.0, 54.0], [24.0, 59.0], [31.0, 59.0], [34.0, 55.0], [32.0, 50.0], [25.0, 48.0]] },
        { type: "area", name: "Civil war fronts", tier: "influence", colour: WHITE, labelAt: [66.0, 49.0],
          around: [[20.0, 42.0], [38.0, 45.0], [58.0, 47.0], [82.0, 53.0], [108.0, 55.0], [118.0, 50.0], [105.0, 44.0], [74.0, 40.5], [42.0, 40.0]] },
        { type: "area", name: "Collectivization and famine belt", tier: "conquest", colour: UKR, labelAt: [38.0, 49.5],
          around: [[25.0, 45.5], [32.0, 50.0], [41.0, 52.0], [51.0, 51.0], [53.0, 48.5], [45.0, 45.5], [34.0, 44.2]] },
        { type: "area", name: "Gulag regions", tier: "influence", colour: GULAG, labelAt: [73.0, 61.0],
          around: [[43.0, 56.0], [57.0, 62.0], [78.0, 64.0], [98.0, 61.5], [98.0, 56.0], [76.0, 54.0], [55.0, 54.0]] },
        { type: "arrow", colour: GER, name: "Germany drives east", labelAt: [26.0, 54.2], path: [[13.4, 52.5], [20.0, 53.0], [30.0, 54.0], [37.62, 55.75]] },
        { type: "arrow", colour: RED, name: "Bolshevik centre holds", labelAt: [51.0, 55.8], path: [[73.37, 54.99], [58.0, 55.2], [44.0, 55.8], [37.62, 55.75]] },
        { type: "arrow", colour: CAN, name: "Canadians to Siberia", labelAt: [136.0, 45.2], fade: true, path: [[142.0, 45.5], [137.0, 44.2], [131.9, 43.12]] },
        { type: "point", symbol: "capital", name: "Petrograd", year: "1917", at: [30.31, 59.94], dy: -18 },
        { type: "point", symbol: "treaty", name: "Brest-Litovsk", year: "1918", at: [23.7, 52.1], side: "l", dy: 18 },
        { type: "point", symbol: "capital", name: "Moscow", year: "1941", at: [37.62, 55.75], dy: 26 },
        { type: "point", symbol: "port", name: "Vladivostok", year: "Canadians 1918–19", at: [131.9, 43.12], colour: CAN, side: "l" },
        { type: "point", symbol: "find", name: "Holodomor", year: "1932–33", at: [31.0, 49.0], colour: UKR, side: "l", minK: 4 },
        { type: "point", symbol: "insurrection", name: "Great Terror", year: "1936–38", at: [37.62, 55.75], side: "l", dy: -24, minK: 4 },
        { type: "point", symbol: "battle", name: "Poland", year: "1939", at: [21.0, 52.23], side: "l" },
        { type: "label", style: "medallion", text: "S", at: [78.0, 65.0], colour: RED },
        { type: "label", style: "medallion", text: "G", at: [14.0, 48.0], colour: GER },
        { type: "label", style: "region", text: "Eastern Europe", at: [26.0, 49.0] },
        { type: "label", style: "region", text: "Siberia", at: [94.0, 58.5] },
        { type: "label", style: "water", text: "Black Sea", at: [34.0, 43.0] }
      ],
      terms: [
        { t: "First World War", wiki: "World War I" },
        { t: "tsar", wiki: "Tsar" },
        { t: "Bolsheviks", wiki: "Bolsheviks", why: "They seized the centre, made peace and then survived the civil war." },
        { t: "civil war", wiki: "Russian Civil War" },
        { t: "Canadians", wiki: "Canadian Siberian Expeditionary Force", star: "Why were Canadians on Russian soil after the armistice?" },
        { t: "Stalin", wiki: "Joseph Stalin" },
        { t: "Hitler", wiki: "Adolf Hitler" }
      ]
    },

    "ch-moscow-rises": {
      caption: "Muscovy at Ivan III's death in 1505. Borders are approximate.",
      layers: [
        { type: "area", name: "Muscovy before Novgorod", tier: "core", colour: RUS, labelAt: [39.2, 56.2],
          around: [[35.1, 54.2], [36.8, 55.1], [37.6, 56.1], [38.8, 57.2], [40.6, 57.8], [42.4, 56.9], [43.1, 55.5], [41.8, 54.2], [39.5, 53.6], [37.4, 53.8]] },
        { type: "area", name: "Novgorod added 1478", tier: "conquest", colour: RUS, labelAt: [32.4, 59.6],
          around: [[28.1, 57.1], [30.4, 58.1], [31.3, 59.8], [33.8, 61.5], [37.4, 61.2], [39.1, 59.6], [38.1, 57.8], [35.1, 57.1], [31.4, 56.6]] },
        { type: "area", name: "Great Horde", tier: "influence", colour: STEPPE, labelAt: [43.2, 50.3],
          around: [[34.8, 48.6], [38.2, 50.1], [42.8, 51.3], [49.2, 51.1], [52.4, 49.6], [51.0, 47.4], [45.4, 46.4], [39.2, 46.7]] },
        { type: "boundary", style: "dashed", colour: STEPPE, path: [[35.3, 54.9], [35.9, 54.5], [36.6, 54.0]] },
        { type: "arrow", colour: STEPPE, name: "Horde turns back", labelAt: [37.8, 54.2], side: "l", path: [[39.4, 52.2], [37.3, 53.4], [35.9, 54.5]] },
        { type: "point", symbol: "capital", name: "Moscow", at: [37.62, 55.75], people: ["Ivan III, r. 1462–1505"] },
        { type: "point", symbol: "large-city", name: "Novgorod", year: "1478", at: [31.27, 58.52], side: "l", note: "merchant republic absorbed" },
        { type: "point", symbol: "battle", name: "Ugra River", year: "1480", at: [35.9, 54.5], side: "l" },
        { type: "point", symbol: "city", name: "Constantinople", year: "1453", at: [28.98, 41.01], maxK: 9, note: "Byzantine claim" },
        { type: "label", style: "water", text: "Volga", at: [45.2, 52.8] }
      ],
      terms: [
        { t: "Ivan III", wiki: "Ivan III of Russia", why: "He made Moscow the dominant Russian principality and styled himself ruler of all Rus'." },
        { t: "Moscow", wiki: "Moscow" },
        { t: "Novgorod", wiki: "Novgorod Republic", why: "A rich northern republic whose fur routes made it worth taking.", star: "How did Novgorod's republican politics differ from Moscow's autocracy?" },
        { t: "Great Horde", wiki: "Great Horde" },
        { t: "Ugra River", wiki: "Great Stand on the Ugra River", why: "The standoff traditionally marks the end of Mongol tribute." },
        { t: "Byzantine princess", wiki: "Sophia Palaiologina", why: "Sophia Palaiologina connected Moscow's court to the fallen Byzantine imperial line." },
        { t: "tsar", wiki: "Tsar" }
      ]
    },

    "ch-ivan-s-conquests-on-the-volga": {
      caption: "Ivan IV takes the middle and lower Volga, 1552–1556. Borders are approximate.",
      layers: [
        { type: "area", name: "Muscovy under Ivan IV", tier: "core", colour: RUS, labelAt: [40.5, 56.1],
          around: [[30.5, 55.2], [32.8, 59.0], [37.5, 61.2], [43.8, 60.4], [48.0, 58.2], [49.4, 55.6], [47.6, 53.4], [42.2, 52.4], [37.1, 53.1], [33.4, 54.0]] },
        { type: "area", name: "Kazan 1552", tier: "conquest", colour: RUS, labelAt: [49.0, 55.2],
          around: [[46.0, 53.7], [48.2, 55.0], [50.9, 56.4], [53.0, 55.4], [52.4, 53.7], [49.2, 52.9]] },
        { type: "area", name: "Astrakhan 1556", tier: "conquest", colour: RUS, labelAt: [47.7, 46.6],
          around: [[45.0, 45.0], [47.7, 46.4], [50.7, 47.2], [52.0, 45.4], [49.4, 44.2], [46.0, 44.0]] },
        { type: "area", name: "Khanate of Sibir", tier: "influence", colour: STEPPE, labelAt: [67.2, 57.0],
          around: [[58, 55.2], [63, 57.8], [69, 59.0], [73, 57.4], [72, 54.4], [65, 53.0], [59, 53.6]] },
        { type: "route", style: "road", colour: SEA, name: "Volga route", labelAt: [47.5, 51.2], path: [[37.6, 55.8], [44.0, 56.2], [49.1, 55.8], [47.9, 52.0], [48.0, 46.4]] },
        { type: "arrow", colour: RUS2, name: "east over the Urals", labelAt: [59.2, 57.3], fade: true, path: [[49.1, 55.8], [56, 56.8], [62, 57.8], [68.25, 58.2]] },
        { type: "boundary", style: "dashed", colour: SWE, path: [[24.0, 59.0], [27.5, 58.3], [30.2, 57.5]] },
        { type: "point", symbol: "capital", name: "Moscow", year: "1547", at: [37.62, 55.75], people: ["Ivan IV, r. 1547–1584"], side: "l", dy: -18 },
        { type: "point", symbol: "fortress", name: "Kazan", year: "1552", at: [49.1, 55.79] },
        { type: "point", symbol: "fortress", name: "Astrakhan", year: "1556", at: [48.03, 46.35] },
        { type: "point", symbol: "city", name: "Alexandrov", year: "1581", at: [38.84, 56.4], side: "l", maxK: 10 },
        { type: "point", symbol: "insurrection", name: "oprichnina", year: "1565–72", at: [37.62, 55.75], dy: 24 },
        { type: "label", style: "region", text: "Livonian War fails", at: [25.0, 57.2] }
      ],
      terms: [
        { t: "Ivan IV", wiki: "Ivan the Terrible" },
        { t: "tsar", wiki: "Tsar" },
        { t: "Kazan", wiki: "Siege of Kazan (1552)", why: "The conquest broke a Tatar khanate on the middle Volga.", star: "How did taking Kazan change Muscovy from a Russian state into a multiethnic empire?" },
        { t: "Astrakhan", wiki: "Astrakhan Khanate" },
        { t: "Volga", wiki: "Volga" },
        { t: "Urals", wiki: "Ural Mountains" },
        { t: "oprichnina", wiki: "Oprichnina", why: "Ivan's private domain and terror apparatus against elite families." }
      ]
    },

    "ch-time-of-troubles": {
      caption: "The Time of Troubles: foreign occupation, civil war and the Romanov election. Borders are approximate.",
      layers: [
        { type: "area", name: "Muscovy", tier: "core", colour: RUS, labelAt: [38.4, 56.0],
          around: [[30.2, 54.0], [33.5, 57.8], [37.8, 60.5], [42.8, 59.8], [45.4, 56.0], [43.5, 53.0], [38.0, 52.4], [33.2, 52.8]] },
        { type: "area", name: "Polish-Lithuanian Commonwealth", tier: "influence", colour: POL, labelAt: [24.4, 53.5],
          around: [[18.3, 49.1], [21.5, 52.4], [22.8, 56.5], [27.2, 58.0], [31.0, 56.0], [30.2, 52.0], [26.4, 49.2], [21.0, 48.2]] },
        { type: "area", name: "Swedish occupation", tier: "conquest", colour: SWE, labelAt: [31.4, 59.6],
          around: [[27.5, 58.4], [30.4, 59.4], [33.8, 60.5], [36.5, 59.0], [35.0, 57.6], [30.8, 57.0]] },
        { type: "arrow", colour: POL, name: "Poles enter Moscow", labelAt: [31.2, 54.4], path: [[21.0, 52.2], [26.0, 53.6], [31.0, 54.6], [37.62, 55.75]] },
        { type: "arrow", colour: RUS2, name: "citizen army", labelAt: [41.0, 56.1], side: "l", path: [[44.0, 56.33], [41.8, 56.2], [39.5, 55.95], [37.62, 55.75]] },
        { type: "point", symbol: "capital", name: "Moscow Kremlin", year: "1610–12", at: [37.62, 55.75], side: "l" },
        { type: "point", symbol: "city", name: "Nizhny Novgorod", year: "1612", at: [44.0, 56.33] },
        { type: "point", symbol: "city", name: "Kostroma", year: "1613", at: [40.93, 57.77], note: "Michael Romanov chosen" },
        { type: "point", symbol: "city", name: "Smolensk", at: [32.05, 54.78], side: "l" },
        { type: "label", style: "date", text: "1598–1613", at: [37.0, 50.2] }
      ],
      terms: [
        { t: "Ivan's line", wiki: "Rurik dynasty", why: "The old ruling house ended with Feodor I, Ivan IV's surviving son." },
        { t: "Polish", wiki: "Polish–Muscovite War (1605–1618)" },
        { t: "Swedish", wiki: "Ingrian War" },
        { t: "Moscow Kremlin", wiki: "Moscow Kremlin" },
        { t: "Nizhny Novgorod", wiki: "Nizhny Novgorod", why: "The volunteer army that retook Moscow was raised there." },
        { t: "Michael Romanov", wiki: "Michael I of Russia", why: "His election began the dynasty that lasted until 1917.", star: "Why did a sixteen-year-old Romanov look like a safe answer after the Time of Troubles?" }
      ]
    },

    "ch-crossing-siberia": {
      caption: "Cossacks and fur traders cross Siberia by river, 1582–1689. Borders are approximate.",
      bbox: [[50, 43], [170, 73]],
      layers: [
        { type: "area", name: "Muscovy / Russia", tier: "core", colour: RUS, labelAt: [70.5, 58.2],
          around: [[50, 51], [58, 54], [67, 58], [80, 60], [95, 61], [108, 60], [119, 57], [124, 54], [116, 51], [101, 50], [84, 51], [68, 52], [56, 50]] },
        { type: "area", name: "Siberian river frontier", tier: "conquest", colour: RUS, labelAt: [104, 61],
          around: [[62, 55], [74, 58], [90, 61], [110, 62], [131, 61], [146, 59], [153, 56], [149, 53], [132, 54], [111, 56], [92, 56], [74, 54]] },
        { type: "area", name: "Qing China", tier: "influence", colour: CHINA, labelAt: [121, 48],
          around: [[104, 44], [115, 47], [127, 51], [135, 51], [137, 47], [130, 43], [116, 41], [106, 42]] },
        { type: "route", style: "dotted", colour: SEA, name: "river road east", labelAt: [95, 59.8],
          path: [[68.25, 58.2], [76, 58.8], [85, 60.2], [92, 60.6], [104, 61.5], [118, 60.5], [132, 58.8], [143.2, 59.4]] },
        { type: "arrow", colour: RUS2, name: "to Okhotsk", labelAt: [130, 60.2], path: [[104, 61.5], [118, 60.5], [132, 58.8], [143.2, 59.4]] },
        { type: "boundary", style: "dashed", colour: CHINA, path: [[116.6, 52.0], [120.2, 51.2], [124.0, 50.4], [127.5, 49.9], [131.5, 50.4]] },
        { type: "point", symbol: "fortress", name: "Sibir", year: "1582", at: [68.25, 58.2], side: "l" },
        { type: "point", symbol: "port", name: "Okhotsk", year: "1639", at: [143.2, 59.4], colour: SEA },
        { type: "point", symbol: "treaty", name: "Nerchinsk", year: "1689", at: [116.6, 51.98], side: "l" },
        { type: "point", symbol: "city", name: "Quebec", year: "1608", at: [-71.21, 46.81], maxK: 3, note: "St. Lawrence fur trade" },
        { type: "point", symbol: "find", name: "Hudson's Bay Company", year: "1670", at: [-92.4, 57.0], maxK: 3, side: "l" },
        { type: "label", style: "water", text: "Sea of Okhotsk", at: [148.2, 55.4] },
        { type: "label", style: "region", text: "sable frontier", at: [92, 64.2] }
      ],
      terms: [
        { t: "Yermak", wiki: "Yermak Timofeyevich" },
        { t: "Khanate of Sibir", wiki: "Khanate of Sibir" },
        { t: "Cossacks", wiki: "Cossacks" },
        { t: "Pacific", wiki: "Pacific Ocean" },
        { t: "Okhotsk", wiki: "Okhotsk" },
        { t: "Champlain", wiki: "Samuel de Champlain", why: "The comparison puts Siberian expansion beside the early French fur trade in Canada." },
        { t: "St. Lawrence fur trade", wiki: "North American fur trade" },
        { t: "Treaty of Nerchinsk", wiki: "Treaty of Nerchinsk", star: "How did Russia and Qing China negotiate a border before either side could map the region precisely?" },
        { t: "Amur", wiki: "Amur" }
      ]
    },

    "ch-peter-s-window-on-the-baltic": {
      caption: "Peter turns Russia toward the Baltic, 1697–1721. Borders are approximate.",
      layers: [
        { type: "area", name: "Russia before the war", tier: "core", colour: RUS, labelAt: [37.5, 56.0],
          around: [[29, 53], [32, 57], [37, 60], [43, 60], [49, 57], [48, 53], [42, 51], [34, 51]] },
        { type: "area", name: "Baltic provinces won", tier: "conquest", colour: RUS, labelAt: [27.4, 58.8],
          around: [[22.0, 56.0], [24.4, 59.6], [28.3, 60.6], [31.2, 59.7], [30.2, 57.4], [27.3, 55.8], [24.0, 55.0]] },
        { type: "area", name: "Swedish Empire", tier: "influence", colour: SWE, labelAt: [17.3, 61.0],
          around: [[10.5, 55.2], [13.0, 58.5], [16.2, 65.0], [22.0, 65.5], [24.0, 60.4], [21.0, 56.0], [16.5, 55.0]] },
        { type: "route", style: "dotted", colour: SEA, name: "Grand Embassy", labelAt: [10.0, 54.4], path: [[37.62, 55.75], [21.0, 52.2], [13.4, 52.5], [4.9, 52.4], [-0.1, 51.5]] },
        { type: "arrow", colour: RUS2, name: "toward the Baltic", labelAt: [30.2, 58.4], path: [[37.62, 55.75], [33.4, 57.2], [30.31, 59.94]] },
        { type: "arrow", colour: SWE, name: "Charles XII", labelAt: [31.2, 53.8], side: "l", path: [[18.1, 59.3], [23.0, 57.0], [29.0, 53.2], [34.55, 49.59]] },
        { type: "point", symbol: "capital", name: "Moscow", at: [37.62, 55.75], side: "l" },
        { type: "point", symbol: "capital", name: "St. Petersburg", year: "1703", at: [30.31, 59.94], people: ["capital from 1712"] },
        { type: "point", symbol: "battle", name: "Poltava", year: "1709", at: [34.55, 49.59], side: "l" },
        { type: "point", symbol: "treaty", name: "Nystad", year: "1721", at: [21.38, 60.80], side: "l", maxK: 10 },
        { type: "point", symbol: "port", name: "Zaandam", year: "1697", at: [4.83, 52.44], colour: SEA, maxK: 10 },
        { type: "label", style: "water", text: "Baltic Sea", at: [20.0, 57.7] }
      ],
      terms: [
        { t: "Peter the Great", wiki: "Peter the Great" },
        { t: "Holland", wiki: "Dutch Republic" },
        { t: "England", wiki: "Kingdom of England" },
        { t: "Sweden", wiki: "Swedish Empire" },
        { t: "Poltava", wiki: "Battle of Poltava", why: "The battle ended Sweden's bid to dominate northeastern Europe.", star: "Why did Poltava shift the balance of power in northern Europe?" },
        { t: "Baltic coast", wiki: "Baltic Sea" },
        { t: "St. Petersburg", wiki: "Saint Petersburg" },
        { t: "European", wiki: "Westernization" }
      ]
    },

    "ch-russian-america": {
      caption: "Russian America, the sea-otter frontier and the Alaska sale. Borders are approximate.",
      bbox: [[-158, 35], [-120, 62]],
      layers: [
        { type: "area", name: "Russian America", tier: "core", colour: RUS, labelAt: [-147, 61],
          around: [[-167, 53], [-160, 57], [-150, 61], [-141, 60.3], [-135.5, 58.2], [-132, 55.4], [-139, 55.6], [-150, 57.2], [-160, 55.2]] },
        { type: "area", name: "Fort Ross reach", tier: "influence", colour: RUS, labelAt: [-123.2, 39.4],
          around: [[-124.5, 42.5], [-122.0, 41.0], [-121.5, 38.5], [-123.3, 37.0], [-124.7, 38.7]] },
        { type: "route", style: "dotted", colour: SEA, name: "North Pacific sea-otter trade", labelAt: [-151.5, 53.0],
          path: [[-140.9, 60.3], [-151.5, 57.1], [-153.5, 57.1], [-145.3, 56.0], [-135.33, 57.05], [-123.15, 38.51]] },
        { type: "arrow", colour: CAN, name: "sold to the United States", labelAt: [-139.5, 55.0], path: [[-135.33, 57.05], [-140, 56.5], [-147, 55.8], [-153.5, 57.1]] },
        { type: "point", symbol: "port", name: "Mount St. Elias", year: "1741", at: [-140.9, 60.3], colour: SEA, side: "l" },
        { type: "point", symbol: "port", name: "Kodiak", year: "1784", at: [-153.5, 57.1], colour: SEA, side: "l" },
        { type: "point", symbol: "capital", name: "Sitka", year: "1799", at: [-135.33, 57.05], people: ["Novo-Arkhangelsk"], note: "company capital", side: "l", dy: -18 },
        { type: "point", symbol: "fortress", name: "Fort Ross", year: "1812", at: [-123.15, 38.51] },
        { type: "point", symbol: "treaty", name: "Alaska sale", year: "1867", at: [-135.33, 57.05], dy: 34 },
        { type: "point", symbol: "capital", name: "Ottawa", year: "1867", at: [-75.7, 45.42], maxK: 3, note: "Canadian Confederation" },
        { type: "label", style: "water", text: "Gulf of Alaska", at: [-147, 56] },
        { type: "label", style: "region", text: "California", at: [-122.0, 37.0] }
      ],
      terms: [
        { t: "Bering", wiki: "Vitus Bering" },
        { t: "North Pacific", wiki: "North Pacific Ocean" },
        { t: "Russian-American Company", wiki: "Russian-American Company", why: "A state-backed fur monopoly comparable in purpose to the Hudson's Bay Company.", star: "How similar were the Russian-American Company and the Hudson's Bay Company?" },
        { t: "Alaska", wiki: "Russian America" },
        { t: "Sitka", wiki: "Sitka, Alaska" },
        { t: "Fort Ross", wiki: "Fort Ross, California" },
        { t: "Crimean War", wiki: "Crimean War" },
        { t: "United States", wiki: "Alaska Purchase" },
        { t: "Canadian Confederation", wiki: "Canadian Confederation" }
      ]
    },

    "ch-catherine-s-empire": {
      caption: "Catherine's empire moves south and west, 1762–1796. Borders are approximate.",
      layers: [
        { type: "area", name: "Russian Empire", tier: "core", colour: RUS, labelAt: [40.5, 55.5],
          around: [[23, 52], [28, 57], [35, 60], [48, 60], [56, 56], [55, 51], [48, 49], [39, 49], [31, 50]] },
        { type: "area", name: "Crimea and Black Sea coast", tier: "conquest", colour: RUS, labelAt: [34.5, 45.7],
          around: [[28.8, 45.0], [32.4, 46.5], [36.5, 46.2], [40.2, 44.8], [39.2, 43.3], [34.1, 44.95], [31.0, 44.5]] },
        { type: "area", name: "Partitions of Poland", tier: "conquest", colour: RUS, labelAt: [25.0, 52.6],
          around: [[20.0, 49.0], [23.0, 52.0], [24.0, 56.0], [29.0, 56.6], [32.0, 53.6], [30.0, 50.0], [25.4, 48.5]] },
        { type: "area", name: "Ottoman Empire", tier: "influence", colour: OTT, labelAt: [32.5, 41.7],
          around: [[25, 40], [30, 42.5], [36, 42.0], [42, 40.5], [39, 37.0], [31, 37.2], [26, 38.5]] },
        { type: "arrow", colour: STEPPE, name: "Pugachev's revolt", labelAt: [52.0, 52.0], side: "l", path: [[55.1, 51.77], [51, 52.6], [47, 53.8], [44, 55.0]] },
        { type: "arrow", colour: RUS2, name: "toward the Black Sea", labelAt: [36.0, 48.2], path: [[37.62, 55.75], [36.0, 51.0], [34.1, 44.95]] },
        { type: "point", symbol: "capital", name: "St. Petersburg", year: "1762", at: [30.31, 59.94], people: ["Catherine II, r. 1762–1796"] },
        { type: "point", symbol: "insurrection", name: "Pugachev", year: "1773–75", at: [55.1, 51.77] },
        { type: "point", symbol: "fortress", name: "Crimea", year: "1783", at: [34.1, 44.95], side: "l" },
        { type: "point", symbol: "treaty", name: "Warsaw", year: "1795", at: [21.0, 52.23], side: "l" },
        { type: "point", symbol: "city", name: "Paris", year: "Voltaire", at: [2.35, 48.86], maxK: 6, side: "l" },
        { type: "label", style: "water", text: "Black Sea", at: [34.2, 43.0] }
      ],
      terms: [
        { t: "Catherine II", wiki: "Catherine the Great" },
        { t: "Voltaire", wiki: "Voltaire" },
        { t: "serfdom", wiki: "Serfdom in Russia", why: "Catherine's enlightened language did not free the peasantry." },
        { t: "Pugachev's peasant revolt", wiki: "Pugachev's Rebellion", star: "Why was Pugachev's revolt so frightening to Catherine's government?" },
        { t: "Crimea", wiki: "Annexation of the Crimean Khanate by the Russian Empire" },
        { t: "Black Sea coast", wiki: "New Russia (historical region)" },
        { t: "Ottomans", wiki: "Ottoman Empire" },
        { t: "Poland", wiki: "Partitions of Poland" }
      ]
    },

    "ch-1812": {
      caption: "Napoleon's invasion and retreat, with Canada fighting its own War of 1812. Borders are approximate.",
      bbox: [[-82, 43], [42, 59]],
      layers: [
        { type: "area", name: "Russian Empire", tier: "core", colour: RUS, labelAt: [35.0, 56.0],
          around: [[23.5, 53.5], [28, 57], [35, 58], [41, 56.5], [41, 52], [36, 50], [29, 50.5], [24, 51.5]] },
        { type: "area", name: "Napoleonic Europe", tier: "influence", colour: FRA, labelAt: [11.5, 51.5],
          around: [[-2, 44], [3, 50], [10, 54], [18, 54], [22, 51], [18, 47], [10, 45], [2, 43]] },
        { type: "arrow", colour: FRA, name: "Grande Armée", labelAt: [28.0, 55.2], path: [[23.9, 54.9], [28.0, 54.8], [32.0, 55.2], [35.82, 55.52], [37.62, 55.75]] },
        { type: "arrow", colour: STEPPE, name: "retreat", labelAt: [31.0, 53.5], side: "l", path: [[37.62, 55.75], [35.82, 55.52], [31.0, 54.6], [28.5, 54.25], [23.9, 54.9]] },
        { type: "arrow", colour: RUS2, name: "Russians to Paris", labelAt: [17.0, 51.0], path: [[37.62, 55.75], [28, 54.8], [18, 52.5], [8, 50.5], [2.35, 48.86]] },
        { type: "route", style: "dashed", colour: CAN, name: "War of 1812 in Canada", labelAt: [-78.5, 44.0], path: [[-83.0, 42.3], [-79.04, 43.15], [-76.5, 44.2], [-73.6, 45.5]] },
        { type: "point", symbol: "battle", name: "Niemen", year: "1812", at: [23.9, 54.9], side: "l" },
        { type: "point", symbol: "battle", name: "Borodino", year: "1812", at: [35.82, 55.52] },
        { type: "point", symbol: "capital", name: "Moscow", year: "burns", at: [37.62, 55.75], side: "l" },
        { type: "point", symbol: "battle", name: "Berezina", year: "1812", at: [28.5, 54.25], side: "l" },
        { type: "point", symbol: "capital", name: "Paris", year: "1814", at: [2.35, 48.86] },
        { type: "point", symbol: "battle", name: "Niagara", year: "1812", at: [-79.04, 43.15], colour: CAN, maxK: 7 },
        { type: "label", style: "date", text: "1812–1814", at: [21, 47.2] }
      ],
      terms: [
        { t: "Napoleon", wiki: "Napoleon" },
        { t: "Borodino", wiki: "Battle of Borodino" },
        { t: "Moscow", wiki: "Fire of Moscow (1812)" },
        { t: "Grande Armée", wiki: "Grande Armée" },
        { t: "Russian troops", wiki: "Battle of Paris (1814)" },
        { t: "Paris", wiki: "Battle of Paris (1814)" },
        { t: "Canada", wiki: "The Canadas" },
        { t: "War of 1812", wiki: "War of 1812", star: "How did Napoleon's invasion of Russia and the American invasion of Canada overlap in 1812?" }
      ]
    },

    "ch-the-great-game": {
      caption: "Russia and Britain face each other across Central Asia. Borders are approximate.",
      layers: [
        { type: "area", name: "Russian Turkestan", tier: "conquest", colour: RUS, labelAt: [66.5, 43.0],
          around: [[53, 44], [58, 46], [65, 45.5], [72, 43.5], [75, 40.5], [72, 38], [65, 38.4], [58, 40.0], [53, 41.5]] },
        { type: "area", name: "British India", tier: "core", colour: BRIT, labelAt: [75.0, 27.0],
          around: [[67, 24], [72, 30], [78, 33], [83, 30], [87, 24], [82, 20], [74, 20], [68, 22]] },
        { type: "area", name: "Persian spheres 1907", tier: "influence", colour: POL, labelAt: [54.0, 32.5],
          around: [[45, 26], [50, 36], [58, 38], [62, 34], [60, 28], [53, 26]] },
        { type: "arrow", colour: RUS2, name: "Russian advance", labelAt: [64.0, 42.0], path: [[55.1, 51.77], [60.0, 45.0], [69.2, 41.3], [66.97, 39.65], [69.24, 41.31]] },
        { type: "arrow", colour: BRIT, name: "Afghan buffer", labelAt: [68.5, 34.8], side: "l", path: [[77.2, 28.6], [73.0, 32.0], [69.2, 34.5], [66.9, 34.5]] },
        { type: "boundary", style: "dashdot", colour: POL, path: [[48, 36], [53, 34], [58, 32], [61, 29]] },
        { type: "point", symbol: "city", name: "Tashkent", year: "1865", at: [69.24, 41.31] },
        { type: "point", symbol: "city", name: "Samarkand", year: "1868", at: [66.97, 39.65], side: "l" },
        { type: "point", symbol: "fortress", name: "Khiva", year: "1873", at: [60.36, 41.38], side: "l" },
        { type: "point", symbol: "city", name: "Kabul", at: [69.2, 34.5] },
        { type: "point", symbol: "capital", name: "India", at: [77.2, 28.6], colour: BRIT, note: "British fear" },
        { type: "point", symbol: "treaty", name: "Anglo-Russian Convention", year: "1907", at: [51.4, 35.7], side: "l" },
        { type: "label", style: "region", text: "Afghanistan", at: [66.5, 33.5] }
      ],
      terms: [
        { t: "Central Asia", wiki: "Central Asia" },
        { t: "Tashkent", wiki: "Tashkent" },
        { t: "Samarkand", wiki: "Samarkand" },
        { t: "khanates", wiki: "Khanate of Khiva", why: "Khiva, Bukhara and Kokand were absorbed or reduced to protectorates." },
        { t: "Britain", wiki: "British Empire" },
        { t: "India", wiki: "British Raj" },
        { t: "Afghan wars", wiki: "Anglo-Afghan Wars", star: "Why did Afghanistan become the buffer state in the Great Game?" },
        { t: "Anglo-Russian Convention", wiki: "Anglo-Russian Convention" },
        { t: "Persia", wiki: "Qajar Iran" }
      ]
    },

    "ch-crimean-war": {
      caption: "The Crimean War centres on Sevastopol, 1853–1856. Borders are approximate.",
      bbox: [[24, 39], [43, 49]],
      layers: [
        { type: "area", name: "Russian Crimea", tier: "core", colour: RUS, labelAt: [34.5, 45.3],
          around: [[32.0, 45.1], [33.6, 45.8], [36.2, 45.4], [36.7, 44.4], [34.8, 44.0], [32.6, 44.4]] },
        { type: "area", name: "Ottoman Empire", tier: "influence", colour: OTT, labelAt: [31.4, 41.2],
          around: [[26, 40], [30, 42.5], [36, 42.0], [42, 40.5], [39, 38.6], [31, 38.8]] },
        { type: "route", style: "dotted", colour: SEA, name: "Allied fleets", labelAt: [31.5, 43.0], path: [[28.98, 41.01], [30.5, 42.6], [33.52, 44.6]] },
        { type: "arrow", colour: BRIT, name: "Britain and France", labelAt: [30.4, 44.3], path: [[29.1, 44.5], [31.2, 44.8], [33.52, 44.6]] },
        { type: "boundary", style: "solid", colour: BRIT, path: [[33.1, 44.3], [33.5, 44.6], [33.9, 44.8], [34.3, 44.7]] },
        { type: "point", symbol: "fortress", name: "Sevastopol", year: "1854–55", at: [33.52, 44.6], side: "l", dy: -18 },
        { type: "point", symbol: "battle", name: "Balaclava", year: "1854", at: [33.67, 44.52], dy: 16 },
        { type: "point", symbol: "battle", name: "Alma", year: "1854", at: [33.95, 44.84], dy: -28 },
        { type: "point", symbol: "port", name: "Scutari", year: "Nightingale", at: [29.03, 41.0], colour: SEA, side: "l" },
        { type: "point", symbol: "battle", name: "Toronto's Dunn", year: "1854", at: [33.67, 44.52], colour: CAN, dy: 38, note: "first Canadian VC" },
        { type: "label", style: "water", text: "Black Sea", at: [34.5, 42.7] }
      ],
      terms: [
        { t: "Nicholas I", wiki: "Nicholas I of Russia" },
        { t: "Ottoman Empire", wiki: "Ottoman Empire" },
        { t: "Britain", wiki: "United Kingdom of Great Britain and Ireland" },
        { t: "France", wiki: "Second French Empire" },
        { t: "Sevastopol", wiki: "Siege of Sevastopol (1854–1855)" },
        { t: "Florence Nightingale", wiki: "Florence Nightingale" },
        { t: "Charge of the Light Brigade", wiki: "Charge of the Light Brigade", star: "What actually went wrong in the orders before the Charge of the Light Brigade?" },
        { t: "serfs", wiki: "Emancipation reform of 1861" }
      ]
    },

    "ch-pacific-frontier-amur-to-tsushima": {
      caption: "Russia's Pacific frontier, the railway and defeat by Japan. Borders are approximate.",
      bbox: [[100, 28], [148, 58]],
      layers: [
        { type: "area", name: "Amur north bank 1858", tier: "conquest", colour: RUS, labelAt: [126.2, 51.5],
          around: [[120, 50.0], [126, 52.0], [134, 52.4], [139, 50.6], [137, 48.6], [130, 49.2], [123, 49.2]] },
        { type: "area", name: "Pacific coast 1860", tier: "conquest", colour: RUS, labelAt: [133.0, 45.5],
          around: [[130, 43.0], [133, 45.0], [136, 48.2], [139, 49.0], [140, 46.0], [137, 43.0], [132, 42.0]] },
        { type: "area", name: "Manchuria", tier: "influence", colour: RUS, labelAt: [125.0, 45.5],
          around: [[118, 40], [123, 43], [130, 45.5], [131, 49], [125, 50], [119, 47], [116, 43]] },
        { type: "area", name: "Japan", tier: "core", colour: JAPAN, labelAt: [138.0, 37.2],
          around: [[130, 32], [134, 35], [138, 39], [142, 41], [145, 43], [143, 36], [139, 34], [134, 31]] },
        { type: "route", style: "road", colour: RAIL, name: "Trans-Siberian Railway", labelAt: [112.0, 54.2], path: [[37.62, 55.75], [60, 56], [80, 56], [104, 52], [122, 48], [131.9, 43.12]] },
        { type: "route", style: "dotted", colour: SEA, name: "Baltic Fleet", labelAt: [132.0, 32.5], path: [[30.31, 59.94], [18, 35], [31, 0], [80, 6], [103, 1], [121.25, 38.8], [129.5, 34.5]] },
        { type: "arrow", colour: JAPAN, name: "Japanese victory", labelAt: [129.8, 38.5], side: "l", path: [[139.7, 35.7], [134.5, 37.0], [129.5, 34.5]] },
        { type: "point", symbol: "treaty", name: "Aigun", year: "1858", at: [127.5, 49.9] },
        { type: "point", symbol: "treaty", name: "Peking", year: "1860", at: [116.4, 39.9], side: "l" },
        { type: "point", symbol: "port", name: "Vladivostok", year: "1860", at: [131.9, 43.12], colour: SEA },
        { type: "point", symbol: "battle", name: "Port Arthur", year: "1904", at: [121.25, 38.8], side: "l" },
        { type: "point", symbol: "battle", name: "Tsushima", year: "1905", at: [129.5, 34.5] },
        { type: "label", style: "water", text: "Sea of Japan", at: [135.5, 39.5] }
      ],
      terms: [
        { t: "Amur", wiki: "Amur" },
        { t: "China", wiki: "Qing dynasty" },
        { t: "Vladivostok", wiki: "Vladivostok" },
        { t: "Trans-Siberian Railway", wiki: "Trans-Siberian Railway", star: "How did a railway across Siberia change Russia's Pacific ambitions?" },
        { t: "Moscow", wiki: "Moscow" },
        { t: "Manchuria", wiki: "Manchuria" },
        { t: "Korea", wiki: "Korean Empire" },
        { t: "Japan", wiki: "Empire of Japan" },
        { t: "Tsushima", wiki: "Battle of Tsushima" }
      ]
    },

    "ch-war-and-revolution": {
      caption: "War breaks the Romanov state; the Bolsheviks leave the war. Borders are approximate.",
      layers: [
        { type: "area", name: "Russian Empire", tier: "core", colour: RUS, labelAt: [37, 56.2],
          around: [[20, 50], [25, 56], [34, 61], [50, 60], [58, 55], [55, 50], [44, 48], [30, 48]] },
        { type: "area", name: "Brest-Litovsk losses", tier: "conquest", colour: GER, labelAt: [27.0, 52.0],
          around: [[20, 49], [24, 54], [27, 57.5], [31, 56], [33, 52], [30, 49], [25, 48]] },
        { type: "arrow", colour: GER, name: "Central Powers", labelAt: [23.0, 53.8], path: [[13.4, 52.5], [18.5, 53.2], [20.15, 53.5]] },
        { type: "arrow", colour: RED, name: "Lenin returns", labelAt: [25.0, 58.8], path: [[8.55, 47.37], [18, 54], [30.36, 59.96]] },
        { type: "boundary", style: "dashed", colour: GER, path: [[23.7, 52.1], [26, 53.5], [29, 55], [31.5, 56.2]] },
        { type: "point", symbol: "battle", name: "Tannenberg", year: "1914", at: [20.15, 53.5], side: "l" },
        { type: "point", symbol: "capital", name: "Petrograd", year: "1917", at: [30.31, 59.94], people: ["February Revolution", "October Revolution"] },
        { type: "point", symbol: "city", name: "Pskov", year: "abdication", at: [28.33, 57.82], side: "l" },
        { type: "point", symbol: "treaty", name: "Brest-Litovsk", year: "1918", at: [23.7, 52.1], side: "l" },
        { type: "point", symbol: "city", name: "Yekaterinburg", year: "1918", at: [60.6, 56.84] },
        { type: "point", symbol: "battle", name: "Vimy Ridge", year: "1917", at: [2.77, 50.38], colour: CAN, maxK: 7, note: "Canada" },
        { type: "label", style: "region", text: "Ukraine, Baltics, Finland, Poland ceded", at: [30.4, 50.0] }
      ],
      terms: [
        { t: "First World War", wiki: "World War I" },
        { t: "Petrograd", wiki: "Saint Petersburg" },
        { t: "Nicholas II", wiki: "Nicholas II of Russia" },
        { t: "Lenin", wiki: "Vladimir Lenin" },
        { t: "Bolsheviks", wiki: "Bolsheviks" },
        { t: "Brest-Litovsk", wiki: "Treaty of Brest-Litovsk", star: "Why was Lenin willing to give up so much territory at Brest-Litovsk?" },
        { t: "Germany", wiki: "German Empire" },
        { t: "Yekaterinburg", wiki: "Execution of the Romanov family" }
      ]
    },

    "ch-canada-in-siberia": {
      caption: "Canadian troops in Russia, 1918–1919: Vladivostok in focus, North Russia in context. Borders are approximate.",
      bbox: [[110, 36], [143, 55]],
      layers: [
        { type: "area", name: "White-held Siberia", tier: "influence", colour: WHITE, labelAt: [124.0, 52.0],
          around: [[112, 49], [120, 53], [132, 54], [141, 50], [140, 44], [130, 42], [118, 44]] },
        { type: "area", name: "Japanese zone", tier: "influence", colour: JAPAN, labelAt: [136.0, 47.0],
          around: [[130, 42], [136, 44], [141, 47], [142, 51], [137, 52], [132, 49]] },
        { type: "route", style: "road", colour: RAIL, name: "Trans-Siberian Railway", labelAt: [125.5, 48.0], path: [[112, 52], [120, 50], [127, 47], [131.9, 43.12]] },
        { type: "route", style: "dotted", colour: CAN, name: "from Victoria by sea", labelAt: [137.0, 40.5], path: [[-123.36, 48.43], [-150, 50], [178, 50], [150, 46], [131.9, 43.12]] },
        { type: "point", symbol: "port", name: "Vladivostok", year: "1918–19", at: [131.9, 43.12], colour: CAN, people: ["Canadian Siberian Expeditionary Force"], side: "l", dy: 18 },
        { type: "point", symbol: "port", name: "Victoria", year: "1918", at: [-123.36, 48.43], colour: CAN, maxK: 3, side: "l" },
        { type: "point", symbol: "port", name: "Murmansk", year: "1918–19", at: [33.08, 68.97], colour: CAN, maxK: 3 },
        { type: "point", symbol: "port", name: "Arkhangelsk", year: "1918–19", at: [40.54, 64.54], colour: CAN, maxK: 3, side: "l" },
        { type: "point", symbol: "capital", name: "Ottawa", at: [-75.7, 45.42], colour: CAN, maxK: 3, note: "Borden's government" },
        { type: "point", symbol: "city", name: "Harbin", at: [126.64, 45.76], maxK: 10 },
        { type: "label", style: "region", text: "Allied supplies", at: [132.0, 45.0] },
        { type: "label", style: "water", text: "Sea of Japan", at: [137.6, 40.5] }
      ],
      terms: [
        { t: "Canadians", wiki: "Canadian Siberian Expeditionary Force" },
        { t: "Siberian Expeditionary Force", wiki: "Canadian Siberian Expeditionary Force", why: "About 4,200 Canadians were sent, but most stayed near Vladivostok.", star: "Why did Canada send troops to Siberia after the First World War was ending?" },
        { t: "Vladivostok", wiki: "Vladivostok" },
        { t: "Americans", wiki: "American Expeditionary Force, Siberia" },
        { t: "British", wiki: "Siberian intervention" },
        { t: "Japanese", wiki: "Japanese intervention in Siberia" },
        { t: "Whites", wiki: "White movement" },
        { t: "Arkhangelsk", wiki: "Arkhangelsk" },
        { t: "Murmansk", wiki: "Murmansk" }
      ]
    },

    "ch-civil-war": {
      caption: "The Bolsheviks hold the centre and railways while enemies press from every edge. Borders are approximate.",
      layers: [
        { type: "area", name: "Red centre", tier: "core", colour: RED, labelAt: [39.0, 55.5],
          around: [[28, 51], [32, 56], [38, 58], [48, 57], [54, 53], [50, 49], [40, 48], [32, 49]] },
        { type: "area", name: "White armies", tier: "influence", colour: WHITE, labelAt: [61.0, 48.0],
          around: [[20, 43], [35, 45], [50, 46], [72, 52], [96, 56], [106, 52], [100, 46], [75, 42], [44, 40], [25, 40]] },
        { type: "route", style: "road", colour: RAIL, name: "railways held by Reds", labelAt: [54.0, 55.0], path: [[30.31, 59.94], [37.62, 55.75], [44.0, 56.33], [56.84, 60.6], [73.37, 54.99], [82.92, 55.03]] },
        { type: "arrow", colour: WHITE, name: "Kolchak from Siberia", labelAt: [59.0, 55.0], side: "l", path: [[73.37, 54.99], [64, 55], [54, 55], [37.62, 55.75]] },
        { type: "arrow", colour: WHITE, name: "Denikin from the south", labelAt: [39.0, 49.0], path: [[39.7, 47.2], [38, 50], [37.62, 55.75]] },
        { type: "arrow", colour: WHITE, name: "Yudenich to Petrograd", labelAt: [28.8, 58.4], side: "l", path: [[24.75, 59.44], [27, 59.7], [30.31, 59.94]] },
        { type: "point", symbol: "capital", name: "Moscow", at: [37.62, 55.75], people: ["Bolshevik capital"] },
        { type: "point", symbol: "capital", name: "Petrograd", at: [30.31, 59.94], side: "l" },
        { type: "point", symbol: "city", name: "Omsk", year: "Kolchak", at: [73.37, 54.99] },
        { type: "point", symbol: "battle", name: "Warsaw", year: "1920", at: [21.0, 52.23], side: "l", maxK: 10 },
        { type: "point", symbol: "insurrection", name: "Kronstadt", year: "1921", at: [29.77, 59.99], dy: 22 },
        { type: "point", symbol: "port", name: "Vladivostok", year: "Allies", at: [131.9, 43.12], colour: CAN, maxK: 5 },
        { type: "point", symbol: "port", name: "Arkhangelsk", year: "Canadians", at: [40.54, 64.54], colour: CAN, maxK: 8 },
        { type: "label", style: "date", text: "USSR founded 1922", at: [45.0, 61.5] }
      ],
      terms: [
        { t: "Reds", wiki: "Red Army" },
        { t: "Whites", wiki: "White movement" },
        { t: "peasant armies", wiki: "Green armies" },
        { t: "nationalists", wiki: "Ukrainian War of Independence" },
        { t: "foreign interventions", wiki: "Allied intervention in the Russian Civil War", why: "Allied forces landed in the north, south and Far East; Canadians served in Siberia and North Russia." },
        { t: "Bolsheviks", wiki: "Bolsheviks" },
        { t: "railways", wiki: "Russian Civil War" },
        { t: "USSR", wiki: "Soviet Union", star: "How did holding the rail network help the Bolsheviks beat so many enemies?" }
      ]
    },

    "ch-stalin-s-revolution-from-above": {
      caption: "Industrialization, collectivization, famine and terror under Stalin. Borders are approximate.",
      layers: [
        { type: "area", name: "USSR", tier: "core", colour: RED, labelAt: [47.0, 58.0],
          around: [[21, 49], [28, 58], [42, 64], [62, 64], [84, 59], [90, 53], [79, 47], [58, 45], [38, 46]] },
        { type: "area", name: "collectivization belt", tier: "conquest", colour: UKR, labelAt: [38.0, 50.4],
          around: [[25, 46], [32, 50], [40, 52], [49, 52], [53, 49], [48, 46], [38, 44], [29, 44]] },
        { type: "area", name: "Gulag regions", tier: "influence", colour: GULAG, labelAt: [68.0, 61.0],
          around: [[44, 57], [56, 62], [75, 64], [88, 61], [86, 56], [68, 55], [51, 55]] },
        { type: "route", style: "road", colour: RAIL, name: "industrial rail spine", labelAt: [55.0, 56.5], path: [[37.62, 55.75], [49.1, 55.79], [59.0, 53.4], [60.6, 56.84], [73.37, 54.99]] },
        { type: "arrow", colour: RED, name: "grain requisition", labelAt: [34.0, 51.2], side: "l", path: [[31.0, 49.0], [35.0, 51.0], [37.62, 55.75]] },
        { type: "point", symbol: "capital", name: "Moscow", at: [37.62, 55.75], people: ["Stalin"] },
        { type: "point", symbol: "city", name: "Magnitogorsk", year: "1928", at: [59.0, 53.4] },
        { type: "point", symbol: "insurrection", name: "collective farms", year: "1929–33", at: [36.0, 50.0], dy: 28 },
        { type: "point", symbol: "find", name: "Holodomor", year: "1932–33", at: [31.0, 49.0], colour: UKR, side: "l", dy: 12, note: "recognized by Canada" },
        { type: "point", symbol: "insurrection", name: "Great Terror", year: "1936–38", at: [37.62, 55.75], dy: -22, side: "l" },
        { type: "point", symbol: "fortress", name: "Kolyma", at: [150.8, 62.7], maxK: 5, note: "Gulag" },
        { type: "label", style: "region", text: "Ukraine", at: [31.8, 48.0] }
      ],
      terms: [
        { t: "Stalin", wiki: "Joseph Stalin" },
        { t: "collective farms", wiki: "Collectivization in the Soviet Union" },
        { t: "five-year plans", wiki: "Five-year plans of the Soviet Union" },
        { t: "famine", wiki: "Soviet famine of 1930–1933" },
        { t: "Ukraine", wiki: "Ukrainian Soviet Socialist Republic" },
        { t: "Holodomor", wiki: "Holodomor", why: "The Ukrainian famine of 1932–33; Canada recognized it as genocide in 2008.", star: "What evidence do historians use when debating intent in the Holodomor?" },
        { t: "Canada", wiki: "Canada" },
        { t: "Great Terror", wiki: "Great Purge" },
        { t: "Gulag", wiki: "Gulag" }
      ]
    },

    "ch-pact-partition-and-invasion": {
      caption: "The Nazi-Soviet pact, Soviet partitions and Operation Barbarossa. Borders are approximate.",
      layers: [
        { type: "area", name: "USSR before pact", tier: "core", colour: RED, labelAt: [35.0, 57.4],
          around: [[27, 51], [31, 58], [39, 61], [48, 59], [46, 53], [38, 50], [30, 50]] },
        { type: "area", name: "Soviet gains 1939–40", tier: "conquest", colour: RED, labelAt: [25.0, 55.0],
          around: [[18, 49], [22, 54], [24, 59], [28, 60], [31, 56], [30, 51], [25, 49]] },
        { type: "area", name: "Nazi Germany", tier: "core", colour: GER, labelAt: [14.0, 52.2],
          around: [[6, 48], [10, 54], [15, 55], [20, 53], [21, 50], [16, 47], [10, 47]] },
        { type: "area", name: "Finland attacked", tier: "conquest", colour: FIN, labelAt: [27.5, 63.0],
          around: [[20, 60], [24, 64], [30, 66], [34, 63], [32, 60], [26, 59]] },
        { type: "boundary", style: "dashdot", colour: GER, path: [[21.0, 52.2], [23.7, 52.1], [25.5, 50.5], [27.0, 49.0]] },
        { type: "arrow", colour: GER, name: "Germany invades", labelAt: [25.0, 54.2], path: [[13.4, 52.5], [18.5, 52.8], [23.7, 52.1], [30.0, 54.0], [37.62, 55.75]] },
        { type: "arrow", colour: RED, name: "Soviets invade Poland", labelAt: [24.2, 51.2], side: "l", path: [[30.0, 53.0], [26.0, 52.5], [21.0, 52.23]] },
        { type: "arrow", colour: RED, name: "Winter War", labelAt: [29.0, 61.0], path: [[30.31, 59.94], [29.0, 61.5], [25.75, 61.5]] },
        { type: "point", symbol: "treaty", name: "Moscow pact", year: "1939", at: [37.62, 55.75], side: "l" },
        { type: "point", symbol: "capital", name: "Berlin", at: [13.4, 52.52] },
        { type: "point", symbol: "battle", name: "Poland", year: "1939", at: [21.0, 52.23], side: "l" },
        { type: "point", symbol: "battle", name: "Finland", year: "1939–40", at: [29.0, 61.5] },
        { type: "point", symbol: "city", name: "Baltic states", year: "1940", at: [24.8, 57.0], dy: -18 },
        { type: "point", symbol: "battle", name: "Moscow", year: "1941", at: [37.62, 55.75], dy: 24 },
        { type: "point", symbol: "capital", name: "Ottawa", year: "Canada declares war", at: [-75.7, 45.42], maxK: 4, colour: CAN },
        { type: "label", style: "date", text: "Aug 1939 – Dec 1941", at: [24.5, 45.8] }
      ],
      terms: [
        { t: "Stalin", wiki: "Joseph Stalin" },
        { t: "Hitler", wiki: "Adolf Hitler" },
        { t: "Eastern Europe", wiki: "Eastern Europe" },
        { t: "Poland", wiki: "Invasion of Poland" },
        { t: "Finland", wiki: "Winter War" },
        { t: "Baltic states", wiki: "Occupation of the Baltic states" },
        { t: "Hitler turns on Stalin", wiki: "Operation Barbarossa", why: "Operation Barbarossa opened the largest land war in history.", star: "Why did Stalin ignore so many warnings before Operation Barbarossa?" },
        { t: "Moscow", wiki: "Battle of Moscow" }
      ]
    }
  };
})();
