// Rome's growth as small multiples: one Mediterranean projection, four dated panels.
(function () {
  const HELD = "#e8b49c", NEW = "#c4503a", CLIENT = "#f0bd6b", RIVAL = "#4f7f9f";
  const EXT = [[-10.5, 28.0], [48.0, 56.0]];
  const ROME = [12.496, 41.902], CARTHAGE = [10.31, 36.85], ALEX = [29.92, 31.20];
  const city = (id, at, name, labelPos = "e") => ({ id, type: "point", symbol: id === "rome" ? "capital" : "large-city", at, name, labelPos });
  const A = (id, acquired, polygon, name) => ({ id, acquired, polygon, name });

  const regions = [
    A("italy", -264, [[9.8,43.7],[12.4,44.15],[14.6,42.9],[16.8,41.9],[18.9,40.6],[18.8,39.6],[17.2,38.6],[16.4,37.7],[15.65,37.9],[15.62,38.3],[14.8,39.2],[12.8,40.6],[11.0,41.8],[9.9,42.8]], "Italy south of the Arno-Rubicon"),
    A("sicily", -241, [[11.8,38.4],[13.5,38.5],[15.2,38.45],[15.62,38.27],[15.45,37.6],[15.35,36.4],[14.2,36.5],[12.2,37.1],[11.8,37.8]], "Sicily"),
    A("sardinia", -238, [[7.8,41.25],[10.0,41.25],[10.0,38.6],[7.8,38.6]], "Sardinia"),
    A("corsica", -238, [[8.2,43.2],[9.9,43.2],[9.9,41.4],[8.2,41.4]], "Corsica"),
    A("citerior", -197, [[-1.0,43.4],[3.4,42.5],[3.6,40.5],[1.5,39.0],[0.4,38.2],[-0.6,37.4],[-2.0,36.4],[-3.2,37.2],[-4.0,38.6],[-3.5,40.6],[-2.0,42.5]], "Hispania Citerior"),
    A("ulterior", -197, [[-9.8,36.8],[-8.6,38.6],[-6.5,38.9],[-4.0,38.6],[-3.2,37.2],[-2.0,36.4],[-4.5,36.15],[-5.6,35.98],[-7.0,36.5]], "Hispania Ulterior"),
    A("africa", -146, [[8.3,37.3],[11.3,37.4],[11.7,36.0],[11.3,34.6],[10.4,34.0],[8.3,34.6]], "Africa province"),
    A("cisalpine", -191, [[6.8,45.0],[7.6,45.9],[10.5,46.4],[13.8,45.9],[13.4,44.9],[12.4,44.15],[9.8,43.7],[7.6,43.7]], "Cisalpine Gaul"),
    A("macedonia-achaea", -146, [[19.3,42.0],[23.4,41.7],[24.8,41.1],[26.2,40.3],[24.8,36.2],[21.0,36.2],[19.0,39.5]], "Macedonia and Achaea"),
    A("asia", -133, [[26.2,40.0],[27.4,40.6],[29.0,40.4],[30.4,39.4],[29.8,36.5],[27.0,36.2],[25.6,38.5]], "Asia province"),
    A("narbonensis", -118, [[0.4,43.6],[1.8,44.8],[4.8,45.8],[6.5,46.3],[7.6,44.2],[7.2,42.9],[3.6,42.3],[1.5,42.6]], "Narbonensis"),
    A("gaul", -50, [[-5.8,48.4],[-1.6,50.1],[1.6,50.9],[2.6,51.6],[6.0,51.8],[8.3,49.2],[7.6,47.5],[6.5,46.3],[4.8,45.8],[1.8,44.8],[0.4,43.6],[-1.8,43.4],[-3.8,45.2]], "Gaul"),
    A("illyricum", -59, [[13.6,45.7],[16.5,46.0],[19.4,45.0],[20.5,43.0],[19.6,41.8],[17.5,42.0],[14.5,43.8]], "Illyricum"),
    A("bithynia", -74, [[29.0,40.4],[29.1,41.9],[33.5,42.3],[34.2,41.5],[32.5,40.0]], "Bithynia"),
    A("cilicia", -67, [[30.6,37.3],[34.8,37.4],[36.4,36.9],[36.3,35.9],[33.0,35.65],[30.6,36.0]], "Cilicia"),
    A("syria", -64, [[35.4,36.7],[36.4,36.9],[38.5,36.8],[39.6,35.0],[38.5,33.0],[36.6,31.8],[34.2,31.2],[34.6,33.6]], "Syria"),
    A("cyrenaica", -74, [[19.5,30.0],[19.6,31.6],[20.4,33.3],[23.2,33.3],[25.1,32.1],[25.0,29.8],[22.0,29.6]], "Cyrenaica"),
    A("egypt", -30, [[25.0,31.9],[32.4,31.9],[34.2,31.25],[32.7,29.4],[33.2,26.0],[33.0,23.8],[31.8,23.8],[30.6,27.5],[29.0,29.4],[25.0,29.8]], "Egypt"),
    A("mauretania", 40, [[-10.0,36.0],[-5.4,36.0],[-1.6,35.5],[2.5,36.8],[5.2,37.3],[5.2,34.4],[1.0,34.3],[-3.5,34.0],[-7.0,33.2],[-10.0,33.2]], "Mauretania"),
    A("africa-coast", 46, [[5.2,37.3],[8.3,37.3],[8.3,34.6],[10.4,34.0],[11.6,33.6],[15.3,32.6],[19.6,31.6],[19.5,30.0],[15.3,30.9],[11.0,31.5],[8.0,33.4],[5.2,34.4]], "Numidia and Tripolitania"),
    A("balkans-danube", 46, [[12.5,46.5],[12.5,47.8],[17.0,48.2],[19.0,47.7],[19.3,45.2],[22.5,44.6],[25.0,43.7],[28.0,44.0],[29.8,45.3],[30.6,44.0],[28.9,41.6],[26.2,40.3],[24.8,41.1],[23.4,41.7],[20.5,42.8],[19.4,45.0],[16.5,46.0],[13.8,45.9]], "Balkans and Danube provinces"),
    A("anatolia", 74, [[29.0,40.4],[32.5,40.0],[34.2,41.5],[34.0,42.3],[37.5,41.6],[41.6,41.7],[40.0,39.0],[38.5,37.8],[36.4,36.9],[34.8,37.4],[30.6,37.3],[29.8,36.5],[30.4,39.4]], "Anatolia"),
    A("judaea-arabia", 106, [[34.2,31.25],[36.6,31.8],[38.5,33.0],[38.2,30.4],[36.6,27.8],[34.9,27.8],[33.9,29.0],[32.7,29.4]], "Judaea and Arabia"),
    A("britain", 43, [[-6.2,49.8],[-1.0,50.4],[1.6,51.1],[2.1,53.0],[-1.4,55.3],[-3.5,55.3],[-5.0,54.6],[-5.0,53.4],[-4.8,51.6],[-6.2,51.0]], "Britain"),
    A("dacia", 106, [[21.4,44.7],[21.9,46.6],[23.5,47.9],[25.6,47.6],[26.6,46.0],[25.0,44.0],[22.5,44.6]], "Dacia"),
    A("mesopotamia", 116, [[38.5,37.8],[40.0,39.0],[41.6,41.7],[45.2,41.2],[46.6,39.0],[45.2,36.5],[47.6,31.5],[48.6,29.8],[46.2,29.8],[43.0,31.8],[40.6,34.4],[39.6,35.0],[38.5,36.8]], "Mesopotamia and Armenia")
  ];
  const punic = [
    { id: "punic-africa", polygon: [[-2.0,35.4],[2.5,36.8],[8.3,37.3],[11.3,37.4],[11.7,36.0],[11.3,34.6],[13.6,32.8],[13.6,31.8],[10.6,32.6],[8.0,34.2],[3.0,35.0],[-2.0,34.6]] },
    { id: "punic-sardinia", polygon: regions.find((r) => r.id === "sardinia").polygon },
    { id: "punic-corsica", polygon: regions.find((r) => r.id === "corsica").polygon },
    { id: "punic-sicily", polygon: [[11.8,38.4],[13.4,38.4],[13.3,36.9],[12.2,37.1],[11.8,37.8]] },
    { id: "punic-spain", polygon: [[-7.2,37.0],[-6.0,36.6],[-5.6,35.98],[-4.5,36.15],[-2.0,36.4],[-0.6,37.4],[-1.0,37.7],[-4.0,37.3],[-6.2,37.3]] }
  ];
  const panelLayer = (r, panelYear, previousYear) => ({ id: `${r.id}-${panelYear < 0 ? Math.abs(panelYear) + "bc" : panelYear}`, type: "area", polygon: r.polygon, colour: r.acquired > previousYear ? NEW : HELD, opacity: r.acquired > previousYear ? 0.85 : 0.8, clipToLand: true, smooth: false, legend: r.acquired > previousYear ? "Added since previous panel" : "Already Roman" });
  const layersFor = (panelYear, previousYear) => regions.filter((r) => r.acquired <= panelYear).map((r) => panelLayer(r, panelYear, previousYear));
  const rival = (r) => ({ id: `${r.id}-264bc`, type: "area", polygon: r.polygon, colour: RIVAL, pattern: "hatch", opacity: 0.60, clipToLand: true, smooth: false, legend: "Carthaginian power, 264 BC" });
  const clientEgypt = { id: "egypt-client-44bc", type: "area", polygon: regions.find((r) => r.id === "egypt").polygon, colour: CLIENT, pattern: "hatch", opacity: 0.78, clipToLand: true, smooth: false, legend: "Client or dependent realm" };

  window.PLATES["rome-growth-small-multiples"] = {
    id: "rome-growth-small-multiples",
    title: "Rome's growth from city-state to empire",
    head: "Antiquity / Rome across four maps",
    folio: "13",
    viewer: "ancient/-0050/ch-rome",
    figures: [
      { kind: "small-multiples", caption: "A Mediterranean empire, panel by panel", share: 1, extent: EXT, projection: "mercator", columns: 2, panelAspect: 0.62,
        legend: { columns: 2 }, layers: [city("rome", ROME, "Rome", "e")],
        panels: [
          { caption: "264 BC", layers: [panelLayer(regions[0], -264, -999), ...punic.map(rival), city("carthage-264", CARTHAGE, "Carthage", "w")] },
          { caption: "133 BC", layers: layersFor(-133, -264) },
          { caption: "44 BC", layers: [...layersFor(-44, -133).filter((L) => !L.id.startsWith("egypt-")), clientEgypt, city("alexandria-44", ALEX, "Alexandria", "w")] },
          { caption: "AD 117", layers: layersFor(117, 98) }
        ] }
    ],
    text: { intro: "Small multiples keep the coastline and scale steady, so the eye sees change rather than a new map each time. Pale red is what Rome already held; dark red is what is new since the previous panel.", sections: [
      { heading: "Four steps", entries: [
        { date: "264 BC", text: "Rome controls peninsular Italy south of the Arno-Rubicon line. Carthage is the rival sea power, with territory on the North African coast, western Sicily, Sardinia-Corsica and the southern Spanish coast.", refs: ["italy-264bc", "punic-africa-264bc", "punic-sardinia-264bc", "punic-corsica-264bc", "punic-sicily-264bc", "punic-spain-264bc", "rome", "carthage-264"] },
        { date: "133 BC", text: "After the Punic and Macedonian wars, Rome has Sicily, Sardinia-Corsica, Hispania Citerior and Ulterior, Africa, Cisalpine Gaul, Macedonia-Achaea and Asia from Pergamum.", refs: ["italy-133bc", "sicily-133bc", "sardinia-133bc", "corsica-133bc", "citerior-133bc", "ulterior-133bc", "africa-133bc", "cisalpine-133bc", "macedonia-achaea-133bc", "asia-133bc"] },
        { date: "44 BC", text: "By Caesar's death, older provinces surround the western and central Mediterranean. Newer republican gains add Narbonensis, all Gaul, Illyricum, Bithynia, Cilicia, Syria and Cyrenaica, while Egypt remains a dependent kingdom.", refs: ["italy-44bc", "sicily-44bc", "sardinia-44bc", "corsica-44bc", "citerior-44bc", "ulterior-44bc", "africa-44bc", "cisalpine-44bc", "macedonia-achaea-44bc", "asia-44bc", "narbonensis-44bc", "gaul-44bc", "illyricum-44bc", "bithynia-44bc", "cilicia-44bc", "syria-44bc", "cyrenaica-44bc", "egypt-client-44bc", "alexandria-44"] },
        { date: "AD 117", text: "At Trajan's peak, the empire rings the Mediterranean: Spain, Gaul, Italy, the islands, North Africa from Morocco to Egypt, Greece, the Balkans, Anatolia, Syria and Judaea. Britain, Dacia and Mesopotamia mark the outer push.", refs: ["all", "spain", "gaul", "italy", "africa", "balkans", "anatolia", "egypt", "britain", "dacia", "mesopotamia"].flatMap((x) => x === "all" ? [] : regions.filter((r) => r.id.includes(x) || (x === "spain" && ["citerior","ulterior"].includes(r.id)) || (x === "italy" && ["italy","sicily","sardinia","corsica"].includes(r.id)) || (x === "africa" && ["africa","mauretania","africa-coast"].includes(r.id))).map((r) => `${r.id}-117`)) }
      ] }
    ] },
    sources: ["Conventional Roman territorial chronology; shapes are atlas-style approximations", "Coastlines and rivers: Natural Earth 1:50m"]
  };
})();
