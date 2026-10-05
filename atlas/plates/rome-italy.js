// Rome's conquest of Italy, written from general historical knowledge for the atlas renderer.
(function () {
  const R = "#d66a4a", RD = "#a8422a", S = "#6f9b55", G = "#b65b86", GK = "#88a9d6";
  const ROME = [12.496, 41.902], VEII = [12.40, 42.02], OSTIA = [12.29, 41.75], CAPUA = [14.21, 41.08], NEAP = [14.27, 40.85],
    FREG = [13.43, 41.55], LUC = [15.34, 41.51], VEN = [15.81, 40.96], TAR = [17.24, 40.47], BENE = [14.78, 41.13],
    HER = [16.68, 40.23], ASC = [15.56, 41.21], SENT = [12.95, 43.35], CAUD = [14.55, 41.08], ARIM = [12.57, 44.06];
  const EXT = [[7.0, 36.1], [19.2, 45.6]];
  const water = [
    { type: "label", style: "water", text: "Tyrrhenian Sea", at: [10.6, 39.1], size: 8.5 },
    { type: "label", style: "water", text: "Adriatic Sea", at: [16.1, 42.5], size: 8.5 },
    { type: "label", style: "water", text: "Ionian Sea", at: [16.8, 37.7], size: 8.5 }
  ];
  const rivals = [
    { id: "etruscans", type: "area", colour: "#9b6b45", pattern: "hatch", pad: 0.7, legend: "Etruscan cities", around: [[10.2, 43.4], [11.1, 42.9], [12.1, 42.5], [12.6, 43.0], [11.6, 43.7]] },
    { id: "gauls", type: "area", colour: G, pattern: "stripe", pad: 0.8, legend: "Gauls", around: [[9.2, 45.0], [10.7, 44.8], [12.2, 44.5], [13.0, 44.7], [12.4, 45.3]] },
    { id: "samnites", type: "area", colour: S, opacity: 0.44, pad: 0.55, legend: "Samnites and related peoples", around: [[13.8, 41.5], [14.6, 41.1], [14.8, 40.4], [15.5, 41.0], [15.1, 41.6]] },
    { id: "greeks", type: "area", colour: GK, opacity: 0.36, pad: 0.55, legend: "Greek cities", around: [[14.8, 40.7], [15.8, 40.3], [16.6, 39.0], [17.2, 40.5], [15.6, 37.4]] }
  ];
  const appia = { id: "via-appia", type: "route", style: "road", colour: "#a8642c", legend: "Via Appia, begun 312 B.C.", path: [ROME, [13.1, 41.4], CAPUA, BENE, [15.6, 40.8], TAR] };
  const p = (id, at, name, labelPos, tag, symbol = "city", extra = {}) => Object.assign({ id, type: "point", symbol, at, name, labelPos, tag: tag ? { text: tag, colour: "#f1c75b" } : undefined }, extra);
  const b = (id, at, name, tag, labelPos = "e") => p(id, at, name, labelPos, tag, "battle", { legend: "Battle" });
  const labels = [
    { type: "label", style: "people", colour: S, text: "Samnites", at: [15.2, 41.45], size: 8 },
    { type: "label", style: "people", colour: G, text: "Gauls", at: [10.7, 45.05], size: 8 },
    { type: "label", style: "people", colour: "#79512f", text: "Etruscans", at: [11.1, 43.1], size: 8 },
    { type: "label", style: "people", colour: GK, text: "Greek cities", at: [16.35, 39.15], size: 8 }
  ];

  window.PLATES["rome-italy"] = {
    id: "rome-italy",
    title: "Rome conquers Italy, 509-264 B.C.",
    head: "Antiquity / Rome and Italy",
    folio: "4",
    viewer: "ancient/-0300/ch-rome-conquers-italy",
    figures: [
      {
        caption: "Rome, Latium and the Gallic shock, c. 390 B.C.",
        share: 0.25, extent: EXT, projection: "mercator",
        layers: [
          ...rivals.map((x) => Object.assign({}, x, { id: `${x.id}-338` })),
          { id: "rome-390", type: "area", colour: R, pattern: "hatch", pad: 0.35, legend: "Roman citizen territory, c. 390", around: [ROME, OSTIA, VEII, [12.8, 41.8], [12.2, 41.55]] },
          { id: "latin-league-390", type: "area", colour: R, tier: "influence", pad: 0.65, legend: "Latin League and allies", around: [ROME, [12.85, 41.47], [13.05, 41.67], [12.7, 41.2], OSTIA] },
          { id: "gaul-raid-390", type: "arrow", colour: G, width: 10, legend: "Gallic raid, 390", path: [[11.6, 44.8], [11.9, 43.8], [12.58, 42.05], ROME] },
          p("rome-390-pt", ROME, null, "e", null, "capital"), p("veii-390", VEII, "Veii", "nw", "396"), b("allia-390", [12.58, 42.05], "Allia", "390")
        ],
        legend: { position: "bottom-left", columns: 2 }
      },
      {
        caption: "After the Latin War, 338 B.C.",
        share: 0.25, extent: EXT, projection: "mercator",
        layers: [
          ...rivals,
          { id: "roman-citizen-338", type: "area", tier: "core", colour: R, pad: 0.5, legend: "Roman citizen territory, 338", around: [ROME, OSTIA, VEII, [13.1, 41.9], [12.8, 41.25], [13.15, 41.55]] },
          { id: "latin-colonies-338", type: "area", colour: R, pattern: "hatch", pad: 0.75, legend: "Latin colonies and allies", around: [[12.3, 41.9], [12.9, 41.7], [13.3, 41.2], CAPUA, [13.3, 40.8], [12.0, 41.3]] },
          { id: "campanian-allies-338", type: "area", colour: R, pattern: "dots", pad: 0.45, legend: "Allied communities", around: [CAPUA, NEAP, [14.6, 40.7]] },
          { id: "latin-war", type: "arrow", colour: RD, width: 8, legend: "Latin War, 340-338", path: [[12.35, 41.9], [12.8, 41.5], [13.3, 41.25], CAPUA] },
          p("rome-338", ROME, null, "e", null, "capital"), p("antium-338", [12.63, 41.45], "Antium", "s", "338"), p("cales-338", [14.13, 41.20], null, "e", "334"), p("capua-338", CAPUA, "Capua", "e", "343"), p("neapolis-338", NEAP, "Neapolis", "s", "326")
        ],
        legend: { position: "bottom-left", columns: 2 }
      },
      {
        caption: "The Samnite Wars and the road south, 290 B.C.",
        share: 0.25, extent: EXT, projection: "mercator",
        layers: [
          { id: "samnite-league-290", type: "area", colour: S, pattern: "hatch", pad: 0.55, legend: "Samnite League", around: [[14.0, 41.7], [14.7, 41.2], [15.2, 40.8], [15.6, 41.3], [15.0, 41.8]] },
          { id: "gauls-290", type: "area", colour: G, pattern: "stripe", pad: 0.8, legend: "Gauls", around: [[9.0, 44.7], [10.7, 44.9], [12.8, 44.3], [13.3, 44.7]] },
          { id: "roman-allies-290", type: "area", colour: R, tier: "conquest", pad: 0.85, legend: "Rome, Latins and allies to 290", around: [ROME, VEII, CAPUA, FREG, LUC, VEN, [13.7, 42.4], [14.9, 40.2], [12.0, 42.7]] },
          { id: "roman-core-290", type: "area", tier: "core", colour: R, pad: 0.55, legend: "Citizen territory", around: [ROME, OSTIA, VEII, [13.2, 41.6], [13.3, 40.95], [12.3, 41.3]] },
          Object.assign({}, appia, { id: "via-appia-264" }),
          { id: "samnite-campaigns", type: "arrow", colour: RD, width: 8, legend: "Roman campaigns, 326-290", path: [ROME, FREG, CAPUA, CAUD, BENE, VEN] },
          { id: "coalition-295", type: "arrow", colour: S, width: 7, legend: "Samnite coalition, 295", path: [[15.2, 41.3], [14.5, 42.0], SENT] },
          p("rome-290", ROME, null, "e", null, "capital"), p("fregellae-290", FREG, "Fregellae", "nw", "328", "fortress"), p("luceria-290", LUC, null, "e", "314", "fortress"), p("venusia-290", VEN, "Venusia", "e", "291", "fortress"), p("interamna-290", [13.57, 41.50], null, "s", "312"),
          b("sentinum-290", SENT, "Sentinum", "295", "w"), b("caudine-290", CAUD, null, "321", "s"), b("vadimo-290", [12.25, 42.32], null, "310", "w")
        ],
        legend: { position: "bottom-left", columns: 2 }
      },
      {
        caption: "Italy south of the Po under Rome and its allies, 264 B.C.",
        share: 0.25, extent: EXT, projection: "mercator",
        layers: [
          { id: "roman-allies-264", type: "area", colour: R, pattern: "hatch", pad: 1.05, legend: "Allied Italian communities", around: [ROME, VEII, CAPUA, BENE, VEN, TAR, ARIM, [12.5, 43.8], [15.2, 38.0], [13.3, 42.9]] },
          { id: "roman-core-264", type: "area", tier: "core", colour: R, pad: 0.75, legend: "Roman citizen territory", around: [ROME, OSTIA, VEII, CAPUA, FREG, [13.4, 42.0], [12.0, 42.5]] },
          { id: "greek-allies-264", type: "area", colour: GK, pattern: "dots", pad: 0.45, legend: "Greek cities now allied to Rome", around: [TAR, HER, [15.00, 40.42], NEAP, [16.1, 39.0]] },
          { id: "gauls-264", type: "area", colour: G, pattern: "stripe", pad: 0.75, legend: "Gauls north of the Roman system", around: [[8.9, 44.8], [10.8, 44.9], [12.8, 44.45], [13.6, 44.8]] },
          appia,
          { id: "pyrrhus-route", type: "route", style: "dashed", colour: "#6f5b9f", legend: "Pyrrhus in Italy, 280-275", path: [[20.9, 39.6], TAR, HER, ASC, BENE], head: true },
          { id: "rome-south-264", type: "arrow", colour: RD, width: 9, legend: "Rome reaches Tarentum, 272", path: [ROME, CAPUA, BENE, VEN, TAR] },
          p("rome-264", ROME, null, "e", null, "capital"), p("ariminum-264", ARIM, "Ariminum", "n", "268", "fortress"), p("tarentum-264", TAR, "Tarentum", "e", "272", "large-city"), p("beneventum-264", BENE, null, "n", "268"),
          b("heraclea-264", HER, "Heraclea", "280", "s"), b("asculum-264", ASC, null, "279", "e"), b("bene-battle-264", BENE, "Beneventum", "275", "w")
        ],
        legend: { position: "bottom-left", columns: 2 }
      }
    ],
    text: {
      intro: "Rome did not annex Italy in one act. It built a ladder of citizen land, Latin colonies and allied communities, then used roads and colonies to hold the Apennine spine.",
      sections: [
        { heading: "Latium and the north", entries: [
          { date: "509-493", text: "The republic begins as one Latin city among others. Rome and the Latins make common cause against neighbouring hill peoples.", refs: ["latin-league-390", "rome-390-pt"] },
          { date: "396", text: "Veii falls after a long siege. Rome crosses the Tiber and becomes the strongest city in southern Etruria.", refs: ["veii-390", "etruscans"] },
          { date: "390", text: "A Gallic army defeats the Romans at the Allia and sacks Rome. The memory of the shock stays inside Roman policy for centuries.", refs: ["gaul-raid-390", "allia-390", "gauls"] },
          { date: "340-338", text: "The Latin War ends with the Latin League dissolved. Some communities receive citizenship; others become allies or colonies.", refs: ["latin-war", "roman-citizen-338", "latin-colonies-338", "campanian-allies-338"] }
        ] },
        { heading: "The Samnite struggle", entries: [
          { date: "326-304", text: "The Second Samnite War turns on Campania, the Liris valley and the roads into the mountains.", refs: ["samnite-league-290", "samnite-campaigns", "caudine-290"] },
          { date: "312", text: "The Via Appia starts as a military road from Rome towards Capua. It later reaches Tarentum and becomes the spine of the south.", refs: ["via-appia"] },
          { date: "328-291", text: "Fregellae, Luceria and Venusia are founded or refounded as Roman colonies, pinning Samnium from three sides.", refs: ["fregellae-290", "luceria-290", "venusia-290", "roman-allies-290"] },
          { date: "295", text: "At Sentinum Rome defeats a coalition of Samnites, Etruscans, Umbrians and Gauls.", refs: ["sentinum-290", "coalition-295"] },
          { date: "290", text: "The Samnites submit, but keep local identities inside Rome's alliance system.", refs: ["samnites", "roman-allies-290"] }
        ] },
        { heading: "To the southern sea", entries: [
          { date: "282-272", text: "Tarentum calls in Pyrrhus of Epirus. His victories at Heraclea and Asculum are costly; Beneventum turns the war.", refs: ["pyrrhus-route", "tarentum-264", "heraclea-264", "asculum-264", "bene-battle-264"] },
          { date: "272", text: "Tarentum surrenders. The Greek cities of Lower Italy become Roman allies rather than ordinary Roman land.", refs: ["greek-allies-264", "rome-south-264"] },
          { date: "268-264", text: "Ariminum in the north and Beneventum in the south show the finished pattern: citizen land, allied peoples and dated colonies tied by roads.", refs: ["ariminum-264", "beneventum-264", "roman-core-264", "roman-allies-264"] }
        ] }
      ]
    },
    sources: ["Conventional republican chronology", "Approximate soft areas; coastlines and rivers: Natural Earth 1:50m"]
  };
})();
