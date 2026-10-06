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
        height: 1.18,
        compartments: [
          { id: "people-frame", label: "The Roman people", x: 0.03, y: 0.02, w: 0.66, h: 0.23, colour: POP, fill: "#dbe7ef" },
          { id: "magistrate-frame", label: "Elected annual offices", x: 0.03, y: 0.34, w: 0.66, h: 0.23, colour: MAG, fill: "#e9dfef", labelX: 0.03, labelY: 0.31 },
          { id: "senate-frame", label: "Senate", x: 0.75, y: 0.12, w: 0.21, h: 0.43, colour: SEN, fill: "#f0dccb" },
          { id: "province-frame", label: " ", x: 0.32, y: 0.76, w: 0.38, h: 0.17, colour: ARMY, fill: "#e6e0d6" }
        ],
        nodes: [
          { id: "tribal", label: "Tribal\nassembly", x: 0.16, y: 0.15, w: 0.17, h: 0.10, colour: POP, note: "laws and offices" },
          { id: "plebeian", label: "Plebeian\ncouncil", x: 0.40, y: 0.15, w: 0.17, h: 0.10, colour: TR, note: "plebeians only" },
          { id: "centuriate", label: "Centuriate\nassembly", x: 0.61, y: 0.15, w: 0.17, h: 0.10, colour: POP, note: "elects consuls" },
          { id: "praetors", label: "Praetors", x: 0.16, y: 0.49, w: 0.15, h: 0.09, colour: MAG, note: "courts" },
          { id: "censors", label: "Censors", x: 0.30, y: 0.49, w: 0.14, h: 0.09, colour: MAG, note: "census" },
          { id: "tribunes", label: "Tribunes\nof the plebs", x: 0.45, y: 0.49, w: 0.17, h: 0.10, colour: TR, strong: true, note: "veto" },
          { id: "consuls", label: "Two\nconsuls", x: 0.62, y: 0.49, w: 0.16, h: 0.10, colour: MAG, strong: true, note: "annual command" },
          { id: "senate", label: "Senate", x: 0.855, y: 0.34, w: 0.15, h: 0.12, colour: SEN, strong: true, serif: true, note: "advice, money" },
          { id: "army", label: "Army and\nprovinces", x: 0.51, y: 0.86, w: 0.24, h: 0.10, colour: ARMY, strong: true, note: "the dangerous seam" }
        ],
        arrows: [
          { id: "elect-praetors", from: "tribal", to: "praetors", label: "elect", via: [[0.28,0.29],[0.28,0.42],[0.16,0.42]], labelAt: [0.28,0.37] },
          { id: "elect-tribunes", from: "plebeian", to: "tribunes", label: "elect", colour: TR, via: [[0.40,0.29],[0.45,0.42]], labelAt: [0.41,0.31] },
          { id: "elect-consuls", from: "centuriate", to: "consuls", label: "elect", via: [[0.69,0.29],[0.73,0.40],[0.68,0.42]], labelAt: [0.72,0.37] },
          { id: "senate-advises", from: "senate", to: "consuls", label: "advises", colour: SEN, labelAt: [0.74,0.41] },
          { id: "veto-consuls", from: "tribunes", to: "consuls", label: "veto", colour: TR, dashed: true, end: "bar", labelAt: [0.54,0.55] },
          { id: "veto-senate", from: "tribunes", to: "senate", label: "veto", colour: TR, dashed: true, end: "bar", via: [[0.55,0.63],[0.82,0.63]], labelAt: [0.68,0.63] },
          { id: "censors-senate", from: "censors", to: "senate", label: "enrol members", colour: MAG, via: [[0.30,0.67],[0.83,0.67]], labelAt: [0.56,0.67] },
          { id: "commands-army", from: "consuls", to: "army", label: "command", colour: ARMY, via: [[0.62,0.70],[0.51,0.70]], labelAt: [0.56,0.70] },
          { id: "money-war", from: "senate", to: "army", label: "assigns, funds", colour: SEN, via: [[0.855,0.69],[0.61,0.74]], labelAt: [0.76,0.70] }
        ]


      } }
    ],
    text: { intro: "The Republic did not have a written constitution in the modern Canadian sense. It was a machine of annual offices, assemblies, aristocratic advice, religious habit and veto points. The same balances that prevented kingship also made fast reform hard.", sections: [
      { heading: "Checks without a constitution", entries: [
        { date: "509-287 BC", text: "Roman memory made kingship poisonous. Power was split between annual magistrates, citizen assemblies and the Senate's accumulated authority.", refs: ["people-frame", "magistrate-frame", "senate-frame"] },
        { text: "Two consuls held command for one year. Each could block the other, and both depended on assemblies for election and the Senate for money, provinces and prestige.", refs: ["centuriate", "consuls", "elect-consuls", "senate-advises", "money-war"] },
        { text: "Tribunes protected plebeians and could veto magistrates or Senate business. That made them a safety valve, but also a tool for crisis politics.", refs: ["plebeian", "tribunes", "elect-tribunes", "veto-consuls", "veto-senate"] }
      ] },
      { heading: "Why it mattered by 133 BC", entries: [
        { date: "133 BC", text: "Tiberius Gracchus tried to use the people's assembly and a tribune's office against senatorial resistance. The machine could not absorb the shock peacefully.", refs: ["tribal", "elect-praetors", "tribunes", "senate"] },
        { text: "Long wars and provincial commands gave magistrates armies, money and clients far from Rome. The army-and-province box became the weak seam of the Republic.", refs: ["province-frame", "army", "commands-army", "censors-senate"] }
      ] }
    ] },
    sources: ["General Roman constitutional history", "Institution diagram based on the atlas's framed explanatory diagrams"]
  };
})();
