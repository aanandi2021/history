// Roman Republican constitution as an institution diagram in the atlas grammar.
(function () {
  const SEN = "#b8653a", POP = "#6b7f99", MAG = "#7a5a8c", TR = "#2f7d4a", ARMY = "#4b4642";
  window.PLATES["roman-republic-constitution"] = {
    id: "roman-republic-constitution",
    title: "The Roman Republic as a political machine",
    head: "Antiquity / Rome and republican government",
    folio: "12",
    viewer: "ancient/-0133/ch-end-of-the-republic",
    figures: [
      { kind: "diagram", caption: "Offices, assemblies and vetoes in the middle Republic", share: 1, diagram: {
        compartments: [
          { id: "people-frame", label: "The Roman people", x: 0.05, y: 0.08, w: 0.36, h: 0.42, colour: POP, fill: "#dbe7ef" },
          { id: "magistrate-frame", label: "Elected magistrates", x: 0.33, y: 0.38, w: 0.38, h: 0.50, colour: MAG, fill: "#e9dfef" },
          { id: "senate-frame", label: "Senate and aristocratic memory", x: 0.59, y: 0.08, w: 0.36, h: 0.42, colour: SEN, fill: "#f0dccb" }
        ],
        nodes: [
          { id: "centuriate", label: "Centuriate\nassembly", x: 0.18, y: 0.23, w: 0.20, h: 0.11, colour: POP, note: "elects consuls" },
          { id: "tribal", label: "Tribal\nassembly", x: 0.18, y: 0.39, w: 0.20, h: 0.11, colour: POP, note: "laws and offices" },
          { id: "plebeian", label: "Plebeian\ncouncil", x: 0.18, y: 0.63, w: 0.20, h: 0.11, colour: TR, note: "plebiscites" },
          { id: "consuls", label: "Two\nconsuls", x: 0.52, y: 0.20, w: 0.18, h: 0.11, colour: MAG, strong: true, note: "annual command" },
          { id: "praetors", label: "Praetors", x: 0.46, y: 0.48, w: 0.16, h: 0.09, colour: MAG, note: "courts" },
          { id: "censors", label: "Censors", x: 0.60, y: 0.55, w: 0.16, h: 0.09, colour: MAG, note: "census, morals" },
          { id: "tribunes", label: "Tribunes\nof the plebs", x: 0.43, y: 0.70, w: 0.20, h: 0.11, colour: TR, strong: true, note: "veto" },
          { id: "senate", label: "Senate", x: 0.77, y: 0.24, w: 0.20, h: 0.12, colour: SEN, strong: true, serif: true, note: "advice, money, war" },
          { id: "army", label: "Army and\nprovinces", x: 0.78, y: 0.70, w: 0.21, h: 0.11, colour: ARMY, note: "where strain grows" }
        ],
        arrows: [
          { id: "elect-consuls", from: "centuriate", to: "consuls", label: "elects" },
          { id: "elect-praetors", from: "tribal", to: "praetors", label: "elects" },
          { id: "elect-tribunes", from: "plebeian", to: "tribunes", label: "elects", colour: TR },
          { id: "senate-advises", from: "senate", to: "consuls", label: "advises", colour: SEN },
          { id: "money-war", from: "senate", to: "army", label: "funds and assigns", colour: SEN },
          { id: "commands-army", from: "consuls", to: "army", colour: ARMY },
          { id: "veto", from: "tribunes", to: "senate", label: "veto / protection", colour: TR, dashed: true },
          { id: "censors-senate", from: "censors", to: "senate", colour: MAG }
        ]
      } }
    ],
    text: { intro: "The Republic did not have a written constitution in the modern Canadian sense. It was a machine of annual offices, assemblies, aristocratic advice, religious habit and veto points. The same balances that prevented kingship also made fast reform hard.", sections: [
      { heading: "Checks without a constitution", entries: [
        { date: "509-287 BC", text: "Roman memory made kingship poisonous. Power was split between annual magistrates, citizen assemblies and the Senate's accumulated authority.", refs: ["people-frame", "magistrate-frame", "senate-frame"] },
        { text: "Two consuls held command for one year. Each could block the other, and both depended on assemblies for election and the Senate for money, provinces and prestige.", refs: ["centuriate", "consuls", "senate-advises", "money-war"] },
        { text: "Tribunes protected plebeians and could veto magistrates or Senate business. That made them a safety valve, but also a tool for crisis politics.", refs: ["plebeian", "tribunes", "veto"] }
      ] },
      { heading: "Why it mattered by 133 BC", entries: [
        { date: "133 BC", text: "Tiberius Gracchus tried to use the people's assembly and a tribune's office against senatorial resistance. The machine could not absorb the shock peacefully.", refs: ["tribal", "tribunes", "senate"] },
        { text: "Long wars and provincial commands gave magistrates armies, money and clients far from Rome. The army-and-province box became the weak seam of the Republic.", refs: ["army", "commands-army"] }
      ] }
    ] },
    sources: ["General Roman constitutional history", "Institution diagram based on the atlas's framed explanatory diagrams"]
  };
})();
