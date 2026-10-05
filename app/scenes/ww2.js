// Chapter scenes for "The Second World War". These add fronts, routes, occupations and battles that modern-country
// colouring cannot show. Borders and arrows are approximate; they are a reading map, not an operational map.
window.SCENES = window.SCENES || {};
(function () {
  const AXIS = "#8c3b3b", ALLIED = "#3f6e8c", SOVIET = "#b36b2e", CANADA = "#b22d2d", JAPAN = "#6b4f8c", SEA = "#2e5f8a", FRONT = "#4d463b", NEUTRAL = "#8a7a5a";

  // Who each colour stands for, for the map's colour key. Same colours as the country shading and the timeline lanes.
  (window.SCENE_ACTORS = window.SCENE_ACTORS || {}).ww2 = {
    [AXIS]: "Germany and its allies", [ALLIED]: "Western Allies", [SOVIET]: "Soviet Union", [CANADA]: "Canada", [JAPAN]: "Japan",
    [SEA]: "Sea lanes and convoys", [FRONT]: "Front lines", [NEUTRAL]: "Neutral or other"
  };

  window.SCENES.ww2 = {
    "ch-war-in-the-west": {
      caption: "War in the West, from Hitler's first annexations to the Allied return to Germany. Lines are approximate.",
      bbox: [[-75, 30], [30, 64]],
      key: [
        { colour: AXIS, label: "Axis high-water mark and attacks", marks: ["conquest", "arrow"], group: "who" },
        { colour: ALLIED, label: "Western Allied return", marks: ["arrow"], group: "who" },
        { colour: CANADA, label: "Canada", marks: ["arrow"], group: "who" },
        { colour: SEA, label: "Atlantic lifeline", marks: ["route"], group: "movement" }
      ],
      layers: [
        { type: "area", name: "Axis high-water mark in western Europe", tier: "conquest", colour: AXIS, labelAt: [7.5, 47.8],
          around: [[-1.8, 43.5], [1.5, 43.1], [5.5, 43.2], [7.8, 44.5], [8.5, 47.8], [7.8, 50.0], [6.0, 52.0], [4.5, 53.3], [7.5, 56.5], [10.8, 60.0], [13.5, 60.2], [12.0, 55.0], [10.0, 52.5], [13.6, 52.4], [21.0, 52.2], [22.8, 51.0], [17.0, 48.6], [14.1, 47.7], [9.5, 46.4]] },
        { type: "arrow", colour: AXIS, name: "1940 into France", labelAt: [3.5, 50.4],
          path: [[7.1, 50.8], [5.4, 50.0], [3.2, 50.1], [1.8, 50.6]] },
        { type: "route", style: "dotted", colour: SEA, name: "Atlantic lifeline", labelAt: [-38, 48], minK: 2,
          path: [[-63.57, 44.65], [-50, 46], [-35, 50], [-18, 52], [-3, 53.4]] },
        { type: "arrow", colour: ALLIED, name: "D-Day to Germany", labelAt: [1.8, 49.6],
          path: [[-0.45, 49.34], [2.35, 48.86], [4.4, 50.85], [6.6, 50.9]] },
        { type: "arrow", colour: CANADA, name: "Canadians: Juno, Scheldt, Netherlands", labelAt: [2.5, 51.6], minK: 2,
          path: [[-0.45, 49.34], [3.8, 51.4], [5.66, 51.97]] },
        { type: "point", symbol: "battle", name: "Dunkirk", year: "1940", at: [2.38, 51.03] },
        { type: "point", symbol: "capital", name: "London", year: "Blitz 1940–41", at: [-0.13, 51.5], side: "l" },
        { type: "point", symbol: "port", name: "Halifax", year: "convoys", at: [-63.57, 44.65], colour: CANADA, minK: 2 },
        { type: "point", symbol: "battle", name: "Juno Beach", year: "1944", at: [-0.45, 49.34], colour: CANADA },
        { type: "point", symbol: "battle", name: "Scheldt", year: "1944", at: [3.8, 51.4], colour: CANADA, minK: 2 },
        { type: "label", style: "medallion", text: "G", at: [14.0, 54.7], colour: AXIS },
        { type: "label", style: "medallion", text: "B", at: [-8.0, 55.0], colour: ALLIED },
        { type: "label", style: "medallion", text: "C", at: [-57.0, 49.5], colour: CANADA },
        { type: "label", style: "water", text: "North Atlantic", at: [-36, 41], minK: 2 }
      ],
      terms: [
        { t: "Hitler", wiki: "Adolf Hitler", why: "The western war begins with Hitler's annexations and invasions." },
        { t: "Poland", wiki: "Invasion of Poland", why: "The invasion brought Britain and France into the war." },
        { t: "Blitz", wiki: "The Blitz", why: "Britain held out through the air battle and bombing campaign." },
        { t: "Atlantic", wiki: "Battle of the Atlantic", why: "The convoy war kept Britain supplied." },
        { t: "Juno Beach", wiki: "Juno Beach", why: "The Canadian landing beach marks Canada's role in the Allied return." },
        { t: "Canada", wiki: "Military history of Canada during World War II", why: "Canada entered by its own decision and fought at sea and in northwest Europe.",
          star: "How did Canada move from a supporting Dominion role to a major combatant in the Atlantic and northwest Europe?" }
      ]
    },

    "ch-mediterranean": {
      caption: "The Mediterranean war from Egypt and North Africa to Sicily and Italy. Lines are approximate.",
      bbox: [[-10, 28], [36, 47]],
      key: [
        { colour: AXIS, label: "Axis advance and defensive lines", marks: ["conquest", "arrow"], group: "who" },
        { colour: ALLIED, label: "Allied return", marks: ["arrow"], group: "who" },
        { colour: CANADA, label: "Canadians in Italy", marks: ["arrow"], group: "who" },
        { colour: FRONT, label: "German defensive lines", marks: ["route"], group: "movement" }
      ],
      layers: [
        { type: "area", name: "Axis high-water mark in North Africa", tier: "conquest", colour: AXIS, labelAt: [19.5, 31.2],
          around: [[10.2, 36.8], [13.2, 32.9], [17.0, 31.5], [21.8, 31.4], [25.9, 31.0], [28.95, 30.83], [30.2, 31.2], [28.0, 32.0], [23.0, 32.2], [17.0, 32.5], [12.0, 34.0]] },
        { type: "area", name: "Italy campaign", tier: "influence", colour: ALLIED, labelAt: [13.2, 41.8],
          around: [[12.4, 37.0], [15.2, 37.4], [16.2, 40.0], [14.4, 42.35], [13.4, 44.2], [11.9, 44.4], [10.4, 43.4], [12.2, 41.0]] },
        { type: "arrow", colour: AXIS, name: "toward Egypt", labelAt: [24.0, 31.7],
          path: [[13.2, 32.9], [18.0, 31.9], [24.1, 31.7], [28.95, 30.83]] },
        { type: "arrow", colour: ALLIED, name: "El Alamein to Tunisia", labelAt: [21.0, 33.1],
          path: [[28.95, 30.83], [23.0, 31.0], [17.0, 31.6], [13.2, 32.9], [10.2, 36.8]] },
        { type: "arrow", colour: ALLIED, name: "Torch landings", labelAt: [-1.5, 35.6],
          path: [[-7.6, 33.57], [-2.9, 35.4], [3.0, 36.7], [10.2, 36.8]] },
        { type: "arrow", colour: CANADA, name: "Canadians up Italy", labelAt: [14.7, 40.5],
          path: [[14.5, 37.5], [15.8, 40.6], [14.4, 42.35], [11.9, 44.4]] },
        { type: "boundary", style: "wall", colour: FRONT, path: [[13.8, 41.3], [14.1, 41.8], [14.0, 42.3], [14.4, 42.6]], minK: 2 },
        { type: "point", symbol: "battle", name: "El Alamein", year: "1942", at: [28.95, 30.83] },
        { type: "point", symbol: "battle", name: "Tunis", year: "1943", at: [10.18, 36.8] },
        { type: "point", symbol: "battle", name: "Sicily", year: "1943", at: [14.5, 37.5], colour: CANADA },
        { type: "point", symbol: "battle", name: "Ortona", year: "1943", at: [14.4, 42.35], colour: CANADA },
        { type: "point", symbol: "capital", name: "Rome", year: "1944", at: [12.6, 41.95], minK: 2 },
        { type: "label", style: "medallion", text: "I", at: [17.0, 45.4], colour: AXIS },
        { type: "label", style: "medallion", text: "B", at: [32.0, 34.8], colour: ALLIED }
      ],
      terms: [
        { t: "Mussolini", wiki: "Benito Mussolini", why: "Italy's invasion of Egypt widened the war in the Mediterranean." },
        { t: "Egypt", wiki: "Western Desert campaign", why: "The Axis advance threatened Egypt and the Suez route." },
        { t: "El Alamein", wiki: "Second Battle of El Alamein", why: "El Alamein stopped the Axis drive and began the Allied pursuit." },
        { t: "Torch", wiki: "Operation Torch", why: "The Allied landings in North Africa trapped Axis forces in Tunisia." },
        { t: "Ortona", wiki: "Battle of Ortona", why: "Ortona anchors the Canadian experience in the Italian campaign." },
        { t: "peninsula", wiki: "Italian campaign (World War II)", why: "Italy became a long campaign up difficult terrain.",
          star: "Why did the Mediterranean remain strategically important after the Axis had already lost North Africa?" }
      ]
    },

    "ch-eastern-front": {
      caption: "The Eastern Front from Barbarossa's high-water line to the Red Army's return to Berlin. Lines are approximate.",
      bbox: [[10, 40], [60, 64]],
      key: [
        { colour: AXIS, label: "German advance and high-water mark", marks: ["conquest", "arrow"], group: "who" },
        { colour: SOVIET, label: "Red Army counteroffensive", marks: ["arrow"], group: "who" },
        { colour: FRONT, label: "Front line", marks: ["route"], group: "movement" }
      ],
      layers: [
        { type: "area", name: "Axis high-water mark", tier: "conquest", colour: AXIS, labelAt: [34.0, 51.8],
          around: [[22, 56], [27, 58.5], [31, 59.8], [36.2, 56.8], [37.6, 55.8], [39.2, 53.0], [42.6, 50.5], [44.5, 48.7], [43.0, 46.0], [38.5, 47.0], [34.0, 48.2], [30.2, 49.4], [26.0, 50.2], [22.8, 51.0]] },
        { type: "arrow", colour: AXIS, name: "Barbarossa, 1941", labelAt: [31.5, 54.4],
          path: [[23.7, 52.1], [28.7, 53.9], [33.0, 54.8], [37.62, 55.75]] },
        { type: "arrow", colour: AXIS, name: "toward Stalingrad", labelAt: [37.0, 49.8],
          path: [[23.7, 52.1], [30.5, 50.4], [36.2, 49.9], [44.5, 48.7]] },
        { type: "arrow", colour: SOVIET, name: "Red Army west, 1943–45", labelAt: [27.0, 53.0],
          path: [[36.2, 51.7], [30.5, 50.45], [27.6, 53.9], [21.0, 52.2], [13.4, 52.52]] },
        { type: "arrow", colour: SOVIET, name: "Uranus encirclement", labelAt: [43.0, 49.5], minK: 4,
          path: [[42.1, 50.4], [43.4, 49.4], [44.5, 48.7], [45.4, 47.8], [43.6, 48.4]] },
        { type: "boundary", style: "dashed", colour: FRONT, path: [[30.3, 59.94], [36.5, 56], [37.62, 55.75], [39.5, 53.5], [42, 51], [44.5, 48.7]], minK: 4 },
        { type: "point", symbol: "capital", name: "Moscow", year: "1941", at: [37.62, 55.75], side: "l" },
        { type: "point", symbol: "battle", name: "Stalingrad", year: "1942–43", at: [44.5, 48.7] },
        { type: "point", symbol: "battle", name: "Kursk", year: "1943", at: [36.2, 51.7] },
        { type: "point", symbol: "capital", name: "Warsaw", year: "1945", at: [21.01, 52.23], minK: 2 },
        { type: "point", symbol: "capital", name: "Berlin", year: "1945", at: [13.4, 52.52], side: "l" },
        { type: "label", style: "medallion", text: "G", at: [19.0, 57.8], colour: AXIS },
        { type: "label", style: "medallion", text: "S", at: [52.0, 56.0], colour: SOVIET }
      ],
      terms: [
        { t: "Germany", wiki: "Nazi Germany", why: "Germany launched the invasion and carried most of its losses on this front." },
        { t: "Soviet Union", wiki: "Soviet Union in World War II", why: "The Soviet Union absorbed the invasion and then pushed back to Berlin." },
        { t: "Moscow", wiki: "Battle of Moscow", why: "The German advance reached the edge of Moscow before being stopped." },
        { t: "Stalingrad", wiki: "Battle of Stalingrad", why: "Stalingrad destroyed the German offensive in the south." },
        { t: "Kursk", wiki: "Battle of Kursk", why: "Kursk marked the failure of Germany's last major eastern offensive." },
        { t: "Berlin", wiki: "Battle of Berlin", why: "The Red Army's capture of Berlin ended the European war.",
          star: "Why did the Eastern Front consume so much more of the German army than the western campaigns?" }
      ]
    },

    "ch-asia-pacific": {
      caption: "Asia and the Pacific, from Japan's war in China to the Allied island-by-island return. Lines are approximate.",
      bbox: [[90, -15], [180, 50]],
      key: [
        { colour: JAPAN, label: "Japanese expansion and perimeter", marks: ["conquest", "arrow"], group: "who" },
        { colour: ALLIED, label: "United States and Allied return", marks: ["arrow"], group: "who" },
        { colour: CANADA, label: "Canada at Hong Kong", marks: ["core"], group: "who" }
      ],
      layers: [
        { type: "area", name: "Japanese perimeter, 1942", tier: "conquest", colour: JAPAN, labelAt: [133, 12],
          around: [[100, 20], [104, 15], [103.8, 1.35], [110, -2], [124, -5], [141, -3], [160, -9.6], [166, -2], [160, 12], [142, 24], [132, 34], [126, 38], [121, 40.5], [116, 39], [112, 30], [114, 22]] },
        { type: "area", name: "War in China", tier: "influence", colour: JAPAN, labelAt: [116.5, 32.0],
          around: [[113.5, 40], [116.2, 39.8], [119.5, 39.5], [121.5, 36], [121, 31], [119, 28], [116, 24], [113.2, 23.1], [112.0, 27.5], [112.5, 34.5]] },
        { type: "arrow", colour: JAPAN, name: "1941–42 southward attacks", labelAt: [113, 9],
          path: [[139.75, 35.7], [126, 26], [114.17, 22.3], [103.82, 1.35]] },
        { type: "arrow", colour: JAPAN, name: "Pearl Harbor strike", labelAt: [164, 31], fade: true,
          path: [[139.75, 35.7], [155, 33], [170, 27], [179, 23]] },
        { type: "arrow", colour: ALLIED, name: "island by island", labelAt: [150, 8],
          path: [[160, -9.6], [152, 7], [145.7, 15.2], [141.32, 24.78], [127.8, 26.3], [139.75, 35.4]] },
        { type: "arrow", colour: ALLIED, name: "MacArthur returns", labelAt: [126, 10.7], minK: 2,
          path: [[147, -9.4], [137, -4], [130, 4], [125, 10.8]] },
        { type: "point", symbol: "battle", name: "Hong Kong", year: "1941", at: [114.17, 22.3], colour: CANADA, side: "l" },
        { type: "point", symbol: "battle", name: "Midway", year: "1942", at: [176, 28.2], side: "l" },
        { type: "point", symbol: "battle", name: "Guadalcanal", year: "1942–43", at: [160, -9.6] },
        { type: "point", symbol: "battle", name: "Okinawa", year: "1945", at: [127.8, 26.3], minK: 2 },
        { type: "point", symbol: "city", name: "Hiroshima", year: "1945", at: [132.46, 34.39] },
        { type: "point", symbol: "treaty", name: "Tokyo Bay", year: "surrender", at: [139.75, 35.4], minK: 2 },
        { type: "label", style: "medallion", text: "J", at: [146.0, 41.5], colour: JAPAN },
        { type: "label", style: "medallion", text: "U", at: [173.0, -6.0], colour: ALLIED },
        { type: "label", style: "medallion", text: "C", at: [107.0, 17.5], colour: CANADA }
      ],
      terms: [
        { t: "China", wiki: "Second Sino-Japanese War", why: "China's war began in 1937, before the European war." },
        { t: "Japan", wiki: "Empire of Japan", why: "Japan expanded from China across Southeast Asia and the Pacific." },
        { t: "Pearl Harbor", wiki: "Attack on Pearl Harbor", why: "The attack brought the United States into the war." },
        { t: "Hong Kong", wiki: "Battle of Hong Kong", why: "Canadian troops were killed or captured there in December 1941." },
        { t: "Midway", wiki: "Battle of Midway", why: "Midway checked Japanese carrier power in 1942." },
        { t: "atomic bombs", wiki: "Atomic bombings of Hiroshima and Nagasaki", why: "The atomic bombings preceded Japan's surrender.",
          star: "How did a war that began in China become a Pacific carrier and island campaign?" }
      ]
    },

    "ch-road-to-war": {
      caption: "German expansion and the 1939 partition of Poland. Lines are approximate.",
      bbox: [[5, 44], [33, 57]],
      layers: [
        { type: "area", name: "Anschluss", tier: "conquest", colour: AXIS, labelAt: [14.1, 47.7],
          around: [[9.5, 46.4], [10.5, 47.5], [12.7, 48.7], [15.4, 49], [17, 48.6], [16.8, 47.3], [14.8, 46.6], [12.2, 46.4]] },
        { type: "area", name: "Sudetenland", tier: "influence", colour: AXIS, labelAt: [14.4, 50.4],
          around: [[12.2, 49.4], [13.6, 50.5], [15.9, 50.8], [17.9, 49.8], [16.8, 48.8], [14.4, 48.9]] },
        { type: "area", name: "Bohemia-Moravia", tier: "conquest", colour: AXIS, labelAt: [15.2, 49.5],
          around: [[12.5, 48.6], [14.3, 49.2], [16.6, 48.8], [17.3, 49.5], [16.2, 50.2], [14, 50], [12.2, 49.4]] },
        { type: "boundary", style: "dashdot", colour: SOVIET, path: [[22.6, 54.4], [22.9, 53.2], [23.7, 52.2], [23.3, 51.2], [24.3, 50.4], [24.1, 49.2]] },
        { type: "arrow", colour: AXIS, name: "Germany invades Poland", labelAt: [18, 52.8],
          path: [[13.6, 52.4], [16.2, 52.3], [18.7, 52.2], [21.0, 52.2]] },
        { type: "arrow", colour: AXIS, name: "from East Prussia", labelAt: [20.5, 53.8],
          path: [[20.4, 54.7], [20.6, 53.9], [21.1, 53.1]] },
        { type: "arrow", colour: SOVIET, name: "USSR enters", side: "l", labelAt: [26.3, 52.7],
          path: [[28.2, 53.6], [26.1, 53.0], [24.0, 52.4]] },
        { type: "point", symbol: "treaty", name: "Munich", year: "30 Sep 1938", at: [11.58, 48.14], side: "l" },
        { type: "point", symbol: "city", name: "Prague", year: "Mar 1939", at: [14.42, 50.08] },
        { type: "point", symbol: "battle", name: "Westerplatte", year: "1 Sep 1939", at: [18.67, 54.4] },
        { type: "point", symbol: "capital", name: "Warsaw", year: "falls 27 Sep", at: [21.01, 52.23], side: "l" },
        { type: "label", style: "date", text: "Poland divided, Oct 1939", at: [24.6, 50.0] }
      ],
      terms: [
        { t: "Austria", wiki: "Anschluss", why: "Germany annexed Austria in March 1938 without a major European war." },
        { t: "Munich", wiki: "Munich Agreement", why: "Britain and France accepted German annexation of the Sudetenland." },
        { t: "Prague", wiki: "German occupation of Czechoslovakia", why: "The March 1939 occupation showed that Hitler was not only revising German borders." },
        { t: "Poland", wiki: "Invasion of Poland", why: "The invasion brought Britain and France into the war." },
        { t: "USSR", wiki: "Soviet invasion of Poland", why: "The Red Army entered eastern Poland under the Molotov-Ribbentrop Pact.",
          star: "How much did the secret protocol of the Molotov-Ribbentrop Pact shape the first two years of the war?" }
      ]
    },

    "ch-war-in-china": {
      caption: "Japan's occupied corridors in China, 1937–1945. The inland front is approximate.",
      layers: [
        { type: "area", name: "Japanese-held coast and rail corridors", tier: "influence", colour: JAPAN, labelAt: [119, 34],
          around: [[121.5, 40.8], [119.2, 39.2], [117.2, 39.1], [116.3, 39.9], [115.4, 38.5], [114.4, 37.2], [114.4, 35.5], [115.8, 34.4],
            [117.1, 32.7], [118.8, 31.4], [120.5, 30.2], [121.2, 28.4], [120.5, 27], [118.6, 26.1], [116.5, 24.1], [114.2, 22.4],
            [113.2, 23.1], [113.7, 25.0], [115.0, 28.1], [116.5, 30.2], [116.0, 32.2], [114.5, 34.1], [113.5, 36.2], [112.4, 38.1],
            [113.2, 40.1], [116.1, 41.0], [119.0, 41.2]] },
        { type: "area", name: "Manchukuo", tier: "conquest", colour: JAPAN, labelAt: [126, 45.2],
          around: [[120, 40.8], [123, 41.7], [126.8, 42.4], [130.6, 44.2], [134, 47.2], [132, 49], [127.5, 49.5], [124, 48.2], [121.5, 46], [119.5, 43.2]] },
        { type: "boundary", style: "dashed", colour: FRONT, path: [[111, 40], [111.5, 37.5], [112.2, 35], [111, 32], [112.5, 30], [111.2, 27.5], [110, 25]] },
        { type: "route", style: "road", colour: ALLIED, name: "Burma Road", labelAt: [99.5, 24.4],
          path: [[96.1, 16.9], [97.5, 20.0], [99.0, 23.2], [101.7, 25.0], [102.7, 25.0]] },
        { type: "arrow", colour: JAPAN, name: "toward Nanjing", labelAt: [119.6, 32.2],
          path: [[121.5, 31.2], [120.2, 31.6], [118.8, 32.06]] },
        { type: "arrow", colour: JAPAN, name: "Ichi-Go, 1944", labelAt: [113.5, 31.4],
          path: [[113.6, 34.8], [113.8, 31.0], [112.9, 28.2], [112.6, 26.4]] },
        { type: "point", symbol: "battle", name: "Marco Polo Bridge", year: "7 Jul 1937", at: [116.2, 39.85], side: "l" },
        { type: "point", symbol: "large-city", name: "Nanjing", year: "Dec 1937", at: [118.8, 32.06] },
        { type: "point", symbol: "capital", name: "Chongqing", at: [106.55, 29.56], side: "l", note: "wartime capital" },
        { type: "point", symbol: "port", name: "Shanghai", at: [121.47, 31.23] },
        { type: "point", symbol: "city", name: "Wuhan", year: "1938", at: [114.3, 30.6] },
        { type: "point", symbol: "city", name: "Kunming", at: [102.7, 25.0], side: "l" }
      ],
      terms: [
        { t: "Japan", wiki: "Second Sino-Japanese War", why: "Japan fought a long continental war before attacking the Western Allies." },
        { t: "China", wiki: "Second Sino-Japanese War", why: "China was one of the main Allied powers and absorbed years of occupation and bombing." },
        { t: "Europe", wiki: "European theatre of World War II", why: "The China war began before the European war and continued after VE Day.",
          star: "How does the Second World War look if China, not Poland, is treated as the starting point?" }
      ]
    },

    "ch-blitzkrieg-in-the-west": {
      caption: "The German campaign in the west, April to June 1940. Arrows and fronts are approximate.",
      layers: [
        { type: "area", name: "Vichy zone after the armistice", tier: "influence", colour: AXIS, labelAt: [3.2, 45.2],
          around: [[-1.8, 46.2], [0.6, 46.4], [2.4, 46.2], [4.3, 45.7], [6.4, 45.2], [7.4, 43.8], [5.5, 43.2], [3.2, 43.1], [0.2, 43.5], [-1.2, 44.4]] },
        { type: "boundary", style: "dashed", colour: AXIS, path: [[-1.2, 46.6], [1.2, 46.7], [2.8, 46.2], [4.7, 46.0], [6.0, 45.4], [7.2, 44.2]] },
        { type: "boundary", style: "wall", colour: ALLIED, path: [[5.9, 49.5], [6.7, 49.1], [7.4, 48.7], [7.8, 48.1]] },
        { type: "arrow", colour: AXIS, name: "Norway", labelAt: [8.2, 59.8],
          path: [[10.7, 54.9], [9.6, 57.7], [10.75, 59.91]] },
        { type: "arrow", colour: AXIS, name: "through the Ardennes", labelAt: [5.2, 49.6],
          path: [[7.1, 50.8], [5.4, 50.0], [4.8, 49.7], [3.9, 49.3]] },
        { type: "arrow", colour: AXIS, name: "to the Channel", labelAt: [2.6, 50.1],
          path: [[4.8, 49.7], [3.2, 50.1], [1.8, 50.6]] },
        { type: "arrow", colour: AXIS, name: "Fall Rot", labelAt: [2.1, 48.5],
          path: [[2.4, 49.2], [2.2, 48.2], [2.3, 47.0], [3.2, 45.8]] },
        { type: "route", style: "dotted", colour: SEA, name: "Dunkirk evacuation", labelAt: [1.1, 51.0],
          path: [[2.38, 51.03], [1.2, 51.0], [0.0, 51.1], [-1.1, 51.0]] },
        { type: "point", symbol: "battle", name: "Dunkirk", year: "26 May–4 Jun", at: [2.38, 51.03] },
        { type: "point", symbol: "battle", name: "Sedan", year: "13 May", at: [4.94, 49.7] },
        { type: "point", symbol: "capital", name: "Paris", year: "14 Jun", at: [2.35, 48.86], side: "l" },
        { type: "point", symbol: "treaty", name: "Compiègne", year: "22 Jun", at: [2.83, 49.42] },
        { type: "label", style: "region", text: "occupied France", at: [1.5, 48.4] }
      ],
      terms: [
        { t: "Norway", wiki: "Operation Weserübung", why: "Germany secured the Norwegian coast and Swedish iron-ore route." },
        { t: "Low Countries", wiki: "German invasion of the Netherlands", why: "The northern attack helped draw Allied armies away from the Ardennes." },
        { t: "France", wiki: "Battle of France", why: "France fell in six weeks, leaving Britain alone in western Europe.",
          star: "Why did the Allied front collapse so quickly in 1940 despite having large armies?" }
      ]
    },

    "ch-battle-of-britain-and-the-blitz": {
      caption: "Air attack on Britain, July 1940 to May 1941. Routes show the direction of raids.",
      bbox: [[-8, 49], [4, 57]],
      layers: [
        { type: "boundary", style: "dashed", colour: ALLIED, path: [[-5, 50.2], [-2, 50.5], [0.5, 51.0], [2.2, 52.0]] },
        { type: "arrow", colour: AXIS, name: "raids from Pas-de-Calais", labelAt: [1.0, 51.4],
          path: [[1.7, 50.95], [0.8, 51.1], [-0.13, 51.5]] },
        { type: "arrow", colour: AXIS, name: "night bombing", labelAt: [-1.2, 53.5],
          path: [[3.0, 51.6], [1.0, 52.4], [-1.9, 52.5], [-2.24, 53.48]] },
        { type: "arrow", colour: AXIS, name: "Clydebank raids", labelAt: [-2.5, 55.3],
          path: [[3.4, 53.1], [0.2, 54.1], [-2.7, 55.9], [-4.4, 55.9]] },
        { type: "route", style: "dotted", colour: ALLIED, name: "Fighter Command sectors", labelAt: [-1.2, 51.0], minK: 20,
          path: [[-4.0, 50.5], [-2.0, 51.1], [0.0, 51.3], [1.4, 52.0]] },
        { type: "point", symbol: "capital", name: "London", year: "Blitz starts 7 Sep", at: [-0.13, 51.5] },
        { type: "point", symbol: "city", name: "Coventry", year: "14 Nov 1940", at: [-1.51, 52.41], side: "l" },
        { type: "point", symbol: "port", name: "Liverpool", at: [-2.99, 53.41], side: "l" },
        { type: "point", symbol: "port", name: "Bristol", at: [-2.59, 51.45], side: "l" },
        { type: "point", symbol: "port", name: "Glasgow", at: [-4.25, 55.86], side: "l" },
        { type: "point", symbol: "fortress", name: "RAF Biggin Hill", at: [0.03, 51.33], note: "fighter station", minK: 20 },
        { type: "label", style: "water", text: "English Channel", at: [-1.4, 50.3] }
      ],
      terms: [
        { t: "Britain", wiki: "Battle of Britain", why: "The RAF prevented Germany from gaining air superiority for invasion." },
        { t: "air", wiki: "Battle of Britain", why: "The decisive phase was fought by radar-directed fighter defence and bomber raids." },
        { t: "night bombing", wiki: "The Blitz", why: "After daylight losses, the Luftwaffe shifted to bombing cities at night.",
          star: "How did radar, observers and sector control make Fighter Command more than just a collection of squadrons?" }
      ]
    },

    "ch-desert-war": {
      caption: "The desert war moved along the coast road from Libya to Egypt, then back to Tunisia.",
      layers: [
        { type: "route", style: "road", colour: NEUTRAL, name: "coast road", labelAt: [20.5, 31.6],
          path: [[13.2, 32.9], [15.4, 32.4], [18.0, 31.9], [21.8, 32.1], [24.1, 31.7], [25.9, 31.3], [28.95, 30.83]] },
        { type: "arrow", colour: AXIS, name: "Afrika Korps advance", labelAt: [24.0, 31.7],
          path: [[13.2, 32.9], [17.0, 32.2], [21.9, 31.9], [25.7, 31.4], [28.95, 30.83]] },
        { type: "arrow", colour: ALLIED, name: "Eighth Army pursuit", labelAt: [23.4, 29.8], side: "l",
          path: [[28.95, 30.83], [25.0, 30.4], [21.5, 30.8], [17.0, 31.4], [13.2, 32.9], [10.2, 36.8]] },
        { type: "arrow", colour: ALLIED, name: "Operation Torch", labelAt: [-2.7, 35.4],
          path: [[-7.6, 33.57], [-2.9, 35.4], [3.0, 36.7], [7.8, 36.9], [10.2, 36.8]] },
        { type: "boundary", style: "solid", colour: FRONT, path: [[28.7, 30.5], [29.2, 30.9], [29.4, 31.3]] },
        { type: "boundary", style: "dashed", colour: FRONT, path: [[9.3, 36.5], [10.2, 36.8], [11.4, 36.7]] },
        { type: "point", symbol: "port", name: "Tripoli", year: "Rommel arrives Feb 1941", at: [13.18, 32.9] },
        { type: "point", symbol: "fortress", name: "Tobruk", at: [23.96, 32.08], side: "l" },
        { type: "point", symbol: "battle", name: "El Alamein", year: "Oct–Nov 1942", at: [28.95, 30.83] },
        { type: "point", symbol: "port", name: "Alexandria", at: [29.92, 31.2] },
        { type: "point", symbol: "port", name: "Casablanca", year: "Torch", at: [-7.6, 33.57], side: "l" },
        { type: "point", symbol: "port", name: "Algiers", year: "Torch", at: [3.06, 36.75] },
        { type: "point", symbol: "battle", name: "Tunis", year: "May 1943", at: [10.18, 36.8] },
        { type: "label", style: "water", text: "Mediterranean Sea", at: [13, 38.4] }
      ],
      terms: [
        { t: "Libya", wiki: "Western Desert campaign", why: "Most of the campaign followed Libya's coastal road." },
        { t: "Egypt", wiki: "Second Battle of El Alamein", why: "El Alamein blocked the Axis route toward Alexandria and the Suez Canal." },
        { t: "Tunisia", wiki: "Tunisian campaign", why: "Axis forces were trapped between Torch landings and the Eighth Army.",
          star: "Why was North Africa worth fighting over before the Allies were ready to invade France?" }
      ]
    },

    "ch-barbarossa-to-stalingrad": {
      caption: "German advance, June 1941 to November 1942. Lines are approximate.",
      bbox: [[18, 43], [55, 62]],
      layers: [
        { type: "area", name: "Axis high-water mark", tier: "influence", colour: AXIS, labelAt: [33.5, 51.4],
          around: [[22, 56], [27, 58.5], [31, 59.8], [36.2, 56.8], [37.6, 55.8], [39.2, 53.0], [42.6, 50.5], [44.5, 48.7],
            [43.0, 46.0], [38.5, 47.0], [34.0, 48.2], [30.2, 49.4], [26.0, 50.2], [22.8, 51.0]] },
        { type: "arrow", colour: AXIS, name: "Army Group North", labelAt: [28.8, 57.8],
          path: [[23.7, 52.1], [27.0, 55.0], [30.3, 59.94]] },
        { type: "arrow", colour: AXIS, name: "Army Group Centre", labelAt: [31.5, 54.4],
          path: [[23.7, 52.1], [28.7, 53.9], [33.0, 54.8], [37.62, 55.75]] },
        { type: "arrow", colour: AXIS, name: "Army Group South", labelAt: [35.5, 49.5],
          path: [[23.7, 52.1], [30.5, 50.4], [36.2, 49.9], [44.5, 48.7]] },
        { type: "arrow", colour: SOVIET, name: "Moscow counter-attack", side: "l", labelAt: [36.0, 55.2],
          path: [[38.5, 55.7], [37.3, 55.7], [35.5, 55.6]] },
        { type: "arrow", colour: SOVIET, name: "Uranus encirclement", side: "l", labelAt: [42.5, 49.6],
          path: [[42.1, 50.4], [43.4, 49.4], [44.5, 48.7], [45.4, 47.8], [43.6, 48.4]] },
        { type: "boundary", style: "dashed", colour: FRONT, path: [[30.3, 59.94], [32, 57.5], [36.5, 56], [37.62, 55.75], [39.5, 53.5], [42, 51], [44.5, 48.7]] },
        { type: "point", symbol: "battle", name: "Leningrad", year: "siege starts Sep 1941", at: [30.3, 59.94] },
        { type: "point", symbol: "capital", name: "Moscow", year: "Dec 1941", at: [37.62, 55.75], side: "l" },
        { type: "point", symbol: "battle", name: "Stalingrad", year: "Aug 1942–Feb 1943", at: [44.5, 48.7] },
        { type: "point", symbol: "large-city", name: "Kyiv", year: "Sep 1941", at: [30.52, 50.45], side: "l" },
        { type: "point", symbol: "battle", name: "Smolensk", at: [32.05, 54.78] },
        { type: "label", style: "region", text: "Caucasus oil beyond the map", at: [46.8, 44.7] }
      ],
      terms: [
        { t: "largest invasion", wiki: "Operation Barbarossa", why: "Operation Barbarossa involved about 3.8 million Axis troops." },
        { t: "Moscow", wiki: "Battle of Moscow", why: "The German advance was stopped outside the Soviet capital in December 1941." },
        { t: "Stalingrad", wiki: "Battle of Stalingrad", why: "The encirclement and surrender of Sixth Army broke the German offensive.",
          star: "Was Stalingrad the turning point itself, or the visible result of a larger German overreach?" }
      ]
    },

    "ch-pacific-war": {
      caption: "Japanese expansion and the Allied return across the Pacific. Pearl Harbor and Midway are east of this view.",
      bbox: [[95, -12], [180, 45]],
      layers: [
        { type: "area", name: "Japanese perimeter, 1942", tier: "influence", colour: JAPAN, labelAt: [133, 12],
          around: [[100, 20], [104, 15], [103.8, 1.35], [110, -2], [124, -5], [141, -3], [160, -9.6], [166, -2], [160, 12],
            [142, 24], [132, 34], [126, 38], [121, 40.5], [116, 39], [112, 30], [114, 22]] },
        { type: "area", name: "Japanese-held China", tier: "influence", colour: JAPAN, labelAt: [117, 32],
          around: [[113.5, 40], [116.2, 39.8], [119.5, 39.5], [121.5, 36], [121, 31], [119, 28], [116, 24], [113.2, 23.1], [112.0, 27.5], [112.5, 34.5]] },
        { type: "arrow", colour: JAPAN, name: "Pearl Harbor", labelAt: [171, 28], fade: true,
          path: [[139.75, 35.7], [155, 33], [170, 27], [179, 23]] },
        { type: "arrow", colour: JAPAN, name: "southward attacks", labelAt: [113, 9],
          path: [[139.75, 35.7], [126, 26], [114.17, 22.3], [103.82, 1.35]] },
        { type: "arrow", colour: ALLIED, name: "island-hopping", labelAt: [150, 8],
          path: [[160, -9.6], [152, 7], [145.7, 15.2], [141.32, 24.78], [127.8, 26.3], [139.75, 35.4]] },
        { type: "arrow", colour: ALLIED, name: "MacArthur returns", labelAt: [126, 10.7],
          path: [[147, -9.4], [137, -4], [130, 4], [125, 10.8]] },
        { type: "point", symbol: "battle", name: "Hong Kong", year: "Dec 1941", at: [114.17, 22.3], colour: CANADA,
          people: ["Winnipeg Grenadiers", "Royal Rifles of Canada"], side: "l" },
        { type: "point", symbol: "battle", name: "Singapore", year: "15 Feb 1942", at: [103.82, 1.35] },
        { type: "point", symbol: "battle", name: "Midway", year: "4–7 Jun 1942", at: [179, 28.2], note: "off-map east", maxK: 12 },
        { type: "point", symbol: "battle", name: "Guadalcanal", year: "1942–43", at: [160, -9.6] },
        { type: "point", symbol: "battle", name: "Leyte Gulf", year: "Oct 1944", at: [125, 10.8], side: "l" },
        { type: "point", symbol: "battle", name: "Iwo Jima", year: "Feb 1945", at: [141.32, 24.78] },
        { type: "point", symbol: "battle", name: "Okinawa", year: "Apr 1945", at: [127.8, 26.3], side: "l" },
        { type: "point", symbol: "city", name: "Hiroshima", year: "6 Aug", at: [132.46, 34.39] },
        { type: "point", symbol: "city", name: "Nagasaki", year: "9 Aug", at: [129.87, 32.75], side: "l" },
        { type: "point", symbol: "treaty", name: "Tokyo Bay", year: "2 Sep 1945", at: [139.75, 35.4] }
      ],
      terms: [
        { t: "Pearl Harbor", wiki: "Attack on Pearl Harbor", why: "The attack brought the United States into the war." },
        { t: "Singapore", wiki: "Fall of Singapore", why: "Britain's major Asian base surrendered in February 1942." },
        { t: "surrender", wiki: "Surrender of Japan", why: "Japan signed the surrender aboard USS Missouri in Tokyo Bay." },
        { t: "Tokyo Bay", wiki: "Surrender of Japan", why: "The formal surrender ceremony ended the war." },
        { t: "Midway", wiki: "Battle of Midway", why: "Midway checked Japanese carrier power in June 1942.",
          star: "Why did Japan's rapid 1941–42 expansion make its perimeter harder, not easier, to defend?" }
      ]
    },

    "ch-italy": {
      caption: "The Allied campaign in Italy, 1943–1945. Defensive lines are approximate.",
      bbox: [[6, 36], [19, 47.5]],
      layers: [
        { type: "arrow", colour: ALLIED, name: "Operation Husky", labelAt: [14.0, 37.2],
          path: [[12.3, 35.7], [13.2, 36.5], [14.5, 37.5]] },
        { type: "arrow", colour: CANADA, name: "Canadian advance", labelAt: [14.0, 41.0],
          path: [[14.5, 37.5], [15.1, 38.5], [15.8, 40.6], [14.4, 42.35], [12.0, 44.4]] },
        { type: "arrow", colour: ALLIED, name: "Salerno to Rome", labelAt: [13.6, 41.0], side: "l",
          path: [[14.75, 40.68], [14.2, 41.3], [13.3, 41.9], [12.6, 41.95]] },
        { type: "boundary", style: "wall", colour: AXIS, path: [[13.8, 41.3], [14.1, 41.8], [14.0, 42.3], [14.4, 42.6]] },
        { type: "boundary", style: "wall", colour: AXIS, path: [[10.0, 43.8], [11.2, 44.0], [12.2, 44.1], [13.4, 44.2]] },
        { type: "boundary", style: "wall", colour: AXIS, path: [[11.6, 44.9], [12.4, 44.7], [13.4, 44.4], [14.0, 44.2]] },
        { type: "point", symbol: "battle", name: "Sicily", year: "10 Jul 1943", at: [14.5, 37.5], colour: CANADA },
        { type: "point", symbol: "port", name: "Salerno", year: "Sep 1943", at: [14.75, 40.68] },
        { type: "point", symbol: "battle", name: "Ortona", year: "Dec 1943", at: [14.4, 42.35], colour: CANADA },
        { type: "point", symbol: "battle", name: "Cassino", year: "1944", at: [13.83, 41.49], side: "l" },
        { type: "point", symbol: "capital", name: "Rome", year: "4 Jun 1944", at: [12.6, 41.95], side: "l" },
        { type: "point", symbol: "battle", name: "Senio", year: "Apr 1945", at: [11.9, 44.4], colour: CANADA },
        { type: "label", style: "region", text: "Gustav Line", at: [15.0, 41.7] },
        { type: "label", style: "region", text: "Gothic Line", at: [12.1, 44.5] }
      ],
      terms: [
        { t: "peninsula", wiki: "Italian campaign (World War II)", why: "The terrain made Italy a slow campaign of rivers, ridges and fortified lines." },
        { t: "Canadians", wiki: "Military history of Canada during World War II", why: "Canadian troops fought in Sicily, at Ortona and up to the Senio." },
        { t: "Sicily", wiki: "Allied invasion of Sicily", why: "Operation Husky opened the Italian campaign." },
        { t: "Senio", wiki: "Spring 1945 offensive in Italy", why: "The Canadians fought on the Senio before transfer to northwest Europe.",
          star: "Why did Canadian troops spend so much of the war in Italy before rejoining the main campaign in northwest Europe?" }
      ]
    },

    "ch-normandy-to-the-rhine": {
      caption: "From D-Day to the Netherlands, 1944–1945. Canadian actions are marked in red.",
      bbox: [[-5, 46], [15, 55]],
      layers: [
        { type: "area", name: "Normandy lodgement", tier: "conquest", colour: ALLIED, labelAt: [-0.8, 49.1],
          around: [[-1.6, 49.7], [-0.8, 49.9], [0.4, 49.6], [0.2, 48.9], [-1.3, 48.8], [-2.0, 49.2]] },
        { type: "arrow", colour: ALLIED, name: "D-Day landings", labelAt: [-0.8, 49.0],
          path: [[-1.8, 49.1], [-1.0, 49.3], [-0.45, 49.34], [0.4, 49.4]] },
        { type: "arrow", colour: CANADA, name: "Juno to Caen", labelAt: [-0.25, 49.2],
          path: [[-0.45, 49.34], [-0.3, 49.1], [-0.36, 49.18]] },
        { type: "arrow", colour: ALLIED, name: "breakout to Paris", labelAt: [0.4, 48.4],
          path: [[-1.1, 49.1], [-0.2, 48.6], [1.0, 48.5], [2.35, 48.86]] },
        { type: "arrow", colour: CANADA, name: "Scheldt", labelAt: [3.0, 51.0],
          path: [[4.4, 50.85], [4.1, 51.2], [3.8, 51.4], [3.3, 51.5]] },
        { type: "arrow", colour: CANADA, name: "Netherlands", labelAt: [5.1, 52.4],
          path: [[5.9, 50.9], [5.66, 51.97], [5.3, 52.8]] },
        { type: "boundary", style: "dashed", colour: AXIS, path: [[4.2, 49.8], [5.8, 50.1], [6.6, 50.3]] },
        { type: "boundary", style: "solid", colour: FRONT, path: [[6.0, 49.0], [7.0, 50.0], [7.5, 51.0], [6.8, 52.0]] },
        { type: "point", symbol: "battle", name: "Juno Beach", year: "6 Jun 1944", at: [-0.45, 49.34], colour: CANADA, dy: -9 },
        { type: "point", symbol: "battle", name: "Dieppe", year: "Aug 1942", at: [1.08, 49.92], colour: CANADA, side: "l" },
        { type: "point", symbol: "battle", name: "Falaise", year: "Aug 1944", at: [-0.2, 48.9], colour: CANADA, dy: 8 },
        { type: "point", symbol: "capital", name: "Paris", year: "25 Aug", at: [2.35, 48.86] },
        { type: "point", symbol: "port", name: "Antwerp", year: "opened Nov", at: [4.4, 51.22], side: "l" },
        { type: "point", symbol: "battle", name: "Scheldt", year: "Oct–Nov 1944", at: [3.8, 51.4], colour: CANADA },
        { type: "point", symbol: "battle", name: "Bulge", year: "Dec 1944", at: [5.8, 50.1] },
        { type: "point", symbol: "battle", name: "Netherlands liberated", year: "5 May 1945", at: [5.66, 51.97], colour: CANADA, side: "l" }
      ],
      terms: [
        { t: "D-Day", wiki: "Normandy landings", why: "The Allied return to western Europe began on 6 June 1944." },
        { t: "Paris", wiki: "Liberation of Paris", why: "Paris was liberated in August 1944 as the German front collapsed in France." },
        { t: "Scheldt", wiki: "Battle of the Scheldt", why: "The Scheldt fighting opened Antwerp, the port needed to supply the advance." },
        { t: "Bulge", wiki: "Battle of the Bulge", why: "Germany's last major western offensive hit the Ardennes in December 1944." },
        { t: "Netherlands", wiki: "Liberation of the Netherlands", why: "The First Canadian Army played a central role in the final liberation.",
          star: "Why did opening Antwerp through the Scheldt matter as much as taking ground after D-Day?" }
      ]
    },

    "ch-battle-of-the-atlantic": {
      caption: "Atlantic convoy routes, Canadian escorts and the mid-Atlantic gap. Routes are approximate.",
      bbox: [[-78, 28], [5, 66]],
      layers: [
        { type: "area", name: "Black Pit", tier: "influence", colour: AXIS, labelAt: [-34, 49],
          around: [[-48, 58], [-38, 60], [-28, 56], [-24, 49], [-30, 42], [-42, 42], [-51, 48]] },
        { type: "route", style: "dotted", colour: SEA, name: "Halifax convoy route", labelAt: [-38, 48],
          path: [[-63.57, 44.65], [-55, 45.8], [-45, 47.4], [-35, 50], [-25, 51.5], [-10, 52.5], [-3, 53.4]] },
        { type: "route", style: "dotted", colour: SEA, name: "St. John's route", labelAt: [-38, 53.2],
          path: [[-52.71, 47.56], [-46, 49.7], [-38, 52.0], [-28, 54.0], [-16, 55.1], [-5, 54.6]] },
        { type: "route", style: "dashed", colour: ALLIED, name: "air cover grows", labelAt: [-23, 56.4],
          path: [[-52.7, 47.6], [-41, 51], [-31, 54], [-20, 56], [-10, 56]] },
        { type: "arrow", colour: AXIS, name: "U-boat patrols", labelAt: [-24, 47.0], side: "l",
          path: [[-10, 50], [-20, 48], [-32, 46], [-45, 45]] },
        { type: "point", symbol: "port", name: "Halifax", at: [-63.57, 44.65], colour: CANADA, note: "RCN escort base" },
        { type: "point", symbol: "port", name: "St. John's", at: [-52.71, 47.56], colour: CANADA },
        { type: "point", symbol: "port", name: "Sydney", at: [-60.2, 46.14], colour: CANADA, side: "l" },
        { type: "point", symbol: "port", name: "Liverpool", at: [-3.0, 53.4], side: "l" },
        { type: "point", symbol: "port", name: "Londonderry", at: [-7.31, 55.0], side: "l" },
        { type: "point", symbol: "battle", name: "HX 229 / SC 122", year: "Mar 1943", at: [-32, 51] },
        { type: "point", symbol: "treaty", name: "Atlantic Charter", year: "Aug 1941", at: [-54, 47.3], side: "l" },
        { type: "label", style: "water", text: "North Atlantic", at: [-36, 41] }
      ],
      terms: [
        { t: "convoy", wiki: "Convoys in World War II", why: "Convoys concentrated merchant ships so escorts could protect them." },
        { t: "Britain", wiki: "Battle of the Atlantic", why: "Britain depended on Atlantic shipping for food, fuel and troops." },
        { t: "Canada", wiki: "Royal Canadian Navy", why: "Canada's navy grew from 13 ships into a major Atlantic escort force." },
        { t: "navy", wiki: "Royal Canadian Navy", why: "The RCN carried a large share of the escort war from Halifax and St. John's.",
          star: "How did the Royal Canadian Navy expand so quickly, and what did that speed cost in training and equipment?" }
      ]
    },

    "ch-eastern-front-the-long-road-back": {
      caption: "The Soviet advance from Kursk to Berlin, 1943–1945. Fronts are approximate.",
      bbox: [[10, 44], [45, 60]],
      layers: [
        { type: "arrow", colour: SOVIET, name: "from Kursk", labelAt: [33.5, 51.5],
          path: [[36.2, 51.7], [33.4, 51.2], [30.5, 50.45], [27.6, 53.9]] },
        { type: "arrow", colour: SOVIET, name: "Bagration", labelAt: [28.0, 54.2],
          path: [[27.6, 53.9], [25.9, 54.7], [23.7, 54.7], [21.0, 52.2]] },
        { type: "arrow", colour: SOVIET, name: "Vistula-Oder", labelAt: [19.0, 52.2],
          path: [[21.0, 52.2], [18.7, 52.3], [16.9, 52.4], [14.6, 52.6]] },
        { type: "arrow", colour: SOVIET, name: "to Berlin", labelAt: [14.4, 53.0],
          path: [[14.6, 52.6], [13.4, 52.52]] },
        { type: "boundary", style: "dashed", colour: FRONT, path: [[36.2, 51.7], [33.0, 50.8], [30.5, 50.45], [27.6, 53.9], [24, 54.5]] },
        { type: "boundary", style: "dashed", colour: FRONT, path: [[21.0, 52.2], [20.0, 50.5], [18.5, 49.2], [17.0, 48.2]] },
        { type: "boundary", style: "solid", colour: FRONT, path: [[14.6, 52.6], [15.0, 51.8], [15.3, 51.0]] },
        { type: "point", symbol: "battle", name: "Kursk", year: "Jul–Aug 1943", at: [36.2, 51.7] },
        { type: "point", symbol: "large-city", name: "Kyiv", year: "Nov 1943", at: [30.52, 50.45], side: "l" },
        { type: "point", symbol: "battle", name: "Minsk", year: "Jul 1944", at: [27.56, 53.9] },
        { type: "point", symbol: "capital", name: "Warsaw", year: "Jan 1945", at: [21.01, 52.23], side: "l" },
        { type: "point", symbol: "battle", name: "Seelow Heights", year: "Apr 1945", at: [14.38, 52.53] },
        { type: "point", symbol: "capital", name: "Berlin", year: "Apr–May 1945", at: [13.4, 52.52], side: "l" },
        { type: "label", style: "region", text: "Army Group Centre destroyed", at: [25.4, 55.1] }
      ],
      terms: [
        { t: "Kursk", wiki: "Battle of Kursk", why: "Germany's last major eastern offensive failed in July 1943." },
        { t: "Berlin", wiki: "Battle of Berlin", why: "The Soviet capture of Berlin ended Nazi Germany.",
          star: "How much of Germany's defeat was decided before the Red Army crossed its pre-war border?" }
      ]
    }
  };
})();
