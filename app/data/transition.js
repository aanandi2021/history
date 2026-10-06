// Age of Transition, 1450-1650: Renaissance, oceanic empires, Reformation and connected worlds.
(function () {
  const S = {
    economy:"Economic life around 1500",
    renaissance:"Renaissance and humanism",
    voyages:"Atlantic voyages and first oceanic empires",
    americas:"American civilizations and conquest",
    reformation:"Reformation and religious war",
    ottoman:"Ottoman empire after 1453",
    asia:"Asia and the Indian Ocean",
    russia:"Russia and the steppe frontier",
    canada:"Turtle Island and early Canada"
  };
  const L = { LIS:[-9.14,38.72], SEV:[-5.99,37.39], FLO:[11.25,43.77], AUG:[10.90,48.37], ANT:[4.40,51.22], WIT:[12.65,51.87], VIE:[16.37,48.21], IST:[28.98,41.01], MOS:[37.62,55.75], QUE:[-71.21,46.81] };
  const E=(lane,date,title,at,extra)=>Object.assign({lane,date,title,at},extra||{});
  const R=(name,country,side,born,died,start,end,section,extra)=>Object.assign({name,country,side,born,died,start,end,section},extra||{});
  const events = [
    E("europe","1450","Renaissance courts compete in Italy",L.FLO,{section:S.renaissance,wiki:"Italian Renaissance",text:"City states such as Florence, Milan and Venice spend money on art, learning, diplomacy and war."}),
    E("ottoman","1453-05-29","Constantinople falls to Mehmed II",L.IST,{section:S.ottoman,wiki:"Fall of Constantinople",text:"The Ottomans take the old Byzantine capital and become the bridge power between the Black Sea and the Mediterranean."}),
    E("europe","1455","Gutenberg Bible printed",[8.27,50.00],{section:S.renaissance,wiki:"Gutenberg Bible",text:"Movable type makes books cheaper and faster to copy. Humanist scholarship and later Protestant pamphlets spread through the same technology."}),
    E("atlantic","1460","Portuguese Atlantic school at Sagres",[-8.94,37.01],{section:S.voyages,wiki:"Prince Henry the Navigator",text:"Portugal builds a habit of Atlantic sailing: charts, pilots, caravels, forts and royal backing."}),
    E("atlantic","1462","Portuguese settle Cape Verde",[-23.60,15.11],{section:S.voyages,wiki:"Cape Verde",text:"The islands become a staging point for Atlantic sailing and, grimly, for plantation slavery."}),
    E("europe","1464","Cosimo de' Medici dies",L.FLO,{section:S.economy,wiki:"Cosimo de' Medici",text:"Banking wealth buys political influence and cultural patronage in Florence."}),
    E("europe","1477-01-05","Charles the Bold dies; Burgundy is divided",[6.18,47.62],{section:S.economy,wiki:"Charles the Bold",text:"Burgundy's breakup feeds Habsburg power in the Low Countries, one of Europe's richest commercial regions."}),
    E("russia","1478","Moscow absorbs Novgorod",[31.28,58.52],{section:S.russia,wiki:"Novgorod Republic",text:"Ivan III takes the northern republic and its fur routes."}),
    E("atlantic","1482","Elmina Castle anchors Portuguese gold trade",[-1.35,5.08],{section:S.voyages,wiki:"Elmina Castle",text:"A fortified factory on the West African coast ties European demand to African trade networks."}),
    E("atlantic","1483","Kongo makes formal contact with Portugal",[14.57,-6.27],{section:S.voyages,wiki:"Kingdom of Kongo",text:"Kongo's rulers use Christianity and Portuguese ties for diplomacy, trade and internal power."}),
    E("atlantic","1488","Bartolomeu Dias rounds the Cape",[18.47,-34.36],{section:S.voyages,wiki:"Bartolomeu Dias",text:"Dias proves the Atlantic and Indian Ocean are connected around Africa."}),
    E("russia","1480-11","Moscow faces down the Horde at the Ugra",[35.00,54.80],{section:S.russia,wiki:"Great Stand on the Ugra River",text:"This is the remembered end of Mongol tribute, overlapping the closing medieval story and the start of the Russia period."}),
    E("atlantic","1492-10-12","Columbus reaches the Caribbean",[-74.47,24.05],{section:S.voyages,wiki:"Christopher Columbus",text:"A Spanish-backed Atlantic crossing connects the Americas, Europe and Africa in a new and violent way."}),
    E("atlantic","1494","Treaty of Tordesillas draws a meridian",[-46.6,0],{section:S.voyages,wiki:"Treaty of Tordesillas",text:"Spain and Portugal divide claims outside Europe along a line in the Atlantic."}),
    E("europe","1494","French invasion begins the Italian Wars",[9.19,45.46],{section:S.renaissance,wiki:"Italian Wars",end:"1559",text:"Italy's wealth attracts France, Spain and the Habsburgs. The Renaissance is happening inside a war zone."}),
    E("canada","1497-06-24","John Cabot reaches the northwest Atlantic",[-55.50,48.50],{section:S.canada,wiki:"John Cabot",approx:true,text:"Cabot's landfall was likely Newfoundland or Cape Breton. This is England's first durable claim line into Canada."}),
    E("atlantic","1498-05-20","Vasco da Gama reaches Calicut",[75.78,11.26],{section:S.voyages,wiki:"Vasco da Gama",text:"Portugal opens a sea route from Europe to the Indian Ocean spice trade."}),
    E("atlantic","1500-04-22","Cabral reaches Brazil",[-39.00,-16.00],{section:S.voyages,wiki:"Pedro Álvares Cabral",text:"Portugal's Atlantic claim becomes Brazil, the future sugar and slave plantation giant."}),
    E("europe","1500","Augsburg, Antwerp, Venice and Lisbon form a money web",L.AUG,{section:S.economy,wiki:"Fugger family",text:"Mining, bills of exchange, tax farming, shipping and royal debt bind bankers to princes."}),
    E("canada","1500","Beothuk and other peoples live around Newfoundland",[-55.70,49.00],{section:S.canada,wiki:"Beothuk",approx:true,end:"1600",text:"European maps later make Newfoundland look like a discovery. It was already a lived coast with its own peoples."}),
    E("canada","1500","Wendat and Haudenosaunee towns farm and trade",[-79.80,44.60],{section:S.canada,wiki:"Wendat Confederacy",approx:true,end:"1650",text:"Around the lower Great Lakes, agricultural towns, diplomacy and rivalry matter long before French maps explain the region."}),
    E("canada","1500","Mi'kmaq fisheries and diplomacy shape the Gulf",[-63.00,46.50],{section:S.canada,wiki:"Mi'kmaq",approx:true,end:"1650",text:"The Gulf of St. Lawrence is a human world before Cartier raises a cross at Gaspe."}),
    E("canada","1500","St. Lawrence Iroquoian towns stand on the river",[-72.50,46.20],{section:S.canada,wiki:"St. Lawrence Iroquoians",approx:true,end:"1580",text:"Stadacona and Hochelaga belong to this world; they are not French places waiting for names."}),
    E("canada","1500","Inuit and Innu worlds frame the Labrador coast",[-60.00,54.50],{section:S.canada,wiki:"Inuit",approx:true,end:"1650",text:"Red Bay later appears in European whaling records, but Labrador already has northern routes, camps and knowledge."}),
    E("canada","1502","Moctezuma II rules the Aztec Empire",[-99.13,19.43],{section:S.americas,wiki:"Moctezuma II",text:"Tenochtitlan is a huge imperial city supplied by tribute, markets and chinampa agriculture."}),
    E("asia","1510","Portugal takes Goa",[73.83,15.50],{section:S.asia,wiki:"Portuguese conquest of Goa",text:"Goa becomes Portugal's Indian Ocean capital."}),
    E("asia","1511","Portugal takes Malacca",[102.25,2.19],{section:S.asia,wiki:"Capture of Malacca (1511)",text:"Malacca is a hinge port between the Indian Ocean and the South China Sea."}),
    E("europe","1517-10-31","Luther's Ninety-five Theses",L.WIT,{section:S.reformation,wiki:"Ninety-five Theses",text:"A dispute over indulgences becomes a religious and political rupture because print, princes and church grievances line up."}),
    E("canada","1519-11-08","Cortes enters Tenochtitlan",[-99.13,19.43],{section:S.americas,wiki:"Spanish conquest of the Aztec Empire",text:"A small Spanish force survives by making alliances with Indigenous enemies of the Mexica Empire."}),
    E("canada","1521-08-13","Tenochtitlan falls",[-99.13,19.43],{section:S.americas,wiki:"Fall of Tenochtitlan",text:"Disease, siege, Indigenous allies and Spanish steel bring down the Aztec capital."}),
    E("atlantic","1522-09-06","Magellan-Elcano circumnavigation returns",L.SEV,{section:S.voyages,wiki:"Magellan expedition",text:"Only one ship returns, but the voyage proves the scale of the planet and the possibility of a global sea circuit."}),
    E("asia","1526-04-21","Babur wins Panipat and founds Mughal rule",[76.97,29.39],{section:S.asia,wiki:"First Battle of Panipat",text:"The Mongol-to-Mughal board reaches India here: a Timurid prince creates a durable Indo-Persian empire."}),
    E("ottoman","1526-08-29","Suleiman wins at Mohacs",[18.64,45.99],{section:S.ottoman,wiki:"Battle of Mohács",text:"Hungary collapses, and Habsburg-Ottoman rivalry becomes a central European fact."}),
    E("ottoman","1529-09-27","First Ottoman siege of Vienna",L.VIE,{section:S.ottoman,wiki:"Siege of Vienna (1529)",text:"Suleiman reaches the Habsburg capital but cannot take it."}),
    E("canada","1534-07-24","Cartier raises a cross at Gaspe",[-64.48,48.83],{section:S.canada,wiki:"Jacques Cartier",text:"Cartier claims land for France at Gaspe after meeting Mi'kmaq people. The claim is European; the place is not empty."}),
    E("canada","1535-09-07","Cartier reaches Stadacona",[-71.21,46.81],{section:S.canada,wiki:"Stadacona",text:"Stadacona, near today's Quebec City, is a St. Lawrence Iroquoian town, not a French settlement."}),
    E("canada","1535-10-03","Cartier reaches Hochelaga",[-73.56,45.50],{section:S.canada,wiki:"Hochelaga",text:"Cartier visits the St. Lawrence Iroquoian town at today's Montreal."}),
    E("canada","1532-11-16","Pizarro captures Atahualpa at Cajamarca",[-78.52,-7.16],{section:S.americas,wiki:"Battle of Cajamarca",text:"The Inca civil war and epidemic disease meet a Spanish ambush. Atahualpa is seized in the plaza."}),
    E("canada","1533-11-15","Spanish enter Cusco",[-71.97,-13.53],{section:S.americas,wiki:"Cusco",text:"Cusco is the Inca imperial centre. The conquest continues through resistance, not a clean handover."}),
    E("canada","1541","Cartier and Roberval try Charlesbourg-Royal",[-71.37,46.77],{section:S.canada,wiki:"Charlesbourg-Royal",end:"1543",text:"France's first colonizing attempt near Quebec fails through winter, conflict and bad planning."}),
    E("europe","1543","Copernicus publishes On the Revolutions",[19.46,51.77],{section:S.renaissance,wiki:"De revolutionibus orbium coelestium",text:"The mathematical model of a sun-centred cosmos becomes part of the scientific turn."}),
    E("europe","1545","Council of Trent opens",[11.12,46.07],{section:S.reformation,wiki:"Council of Trent",end:"1563",text:"The Catholic reform response clarifies doctrine, discipline and education."}),
    E("canada","1545","Potosi silver mountain begins to be mined",[-65.75,-19.59],{section:S.americas,wiki:"Potosí",text:"American silver pays soldiers, creditors and merchants across the Atlantic and Pacific worlds."}),
    E("russia","1547-01-26","Ivan IV crowned tsar",L.MOS,{section:S.russia,wiki:"Ivan the Terrible",text:"Moscow uses the title tsar and claims a wider imperial role."}),
    E("canada","1550","Basque whalers work Red Bay",[-56.43,51.73],{section:S.canada,wiki:"Red Bay, Newfoundland and Labrador",approx:true,end:"1600",text:"Seasonal Basque crews hunt whales on the Labrador coast before permanent French or English colonies."}),
    E("russia","1552-10-12","Moscow conquers Kazan",[49.12,55.79],{section:S.russia,wiki:"Siege of Kazan (1552)",text:"The Volga opens to Russian expansion and Muslim Tatar power is pushed back."}),
    E("europe","1555-09-25","Peace of Augsburg",L.AUG,{section:S.reformation,wiki:"Peace of Augsburg",text:"The empire accepts Lutheran and Catholic territories, but not Calvinists or religious freedom in a modern sense."}),
    E("asia","1557","Portuguese settle at Macao",[113.54,22.20],{section:S.asia,wiki:"Macau",text:"Macao becomes a Portuguese base for China-Japan trade under Ming permission."}),
    E("europe","1558-11-17","Elizabeth I becomes queen",[-0.13,51.51],{section:S.reformation,wiki:"Elizabeth I",text:"England's religious settlement and Atlantic rivalry with Spain grow from this reign."}),
    E("asia","1571","Manila links American silver to China",[120.98,14.60],{section:S.asia,wiki:"Manila galleon",text:"Manila galleons move silver from Mexico to Asian markets and silk back across the Pacific."}),
    E("ottoman","1571-10-07","Lepanto checks Ottoman naval power",[21.50,38.25],{section:S.ottoman,wiki:"Battle of Lepanto",text:"A Christian league wins a huge galley battle, though Ottoman power in the eastern Mediterranean remains real."}),
    E("russia","1582","Yermak crosses the Urals toward Sibir",[68.25,58.20],{section:S.russia,wiki:"Yermak Timofeyevich",approx:true,text:"Cossack violence and fur tribute open the Siberian expansion story."}),
    E("europe","1588-08-08","Spanish Armada defeated",[-1.00,50.50],{section:S.voyages,wiki:"Spanish Armada",text:"England survives invasion, and Atlantic rivalry stays open."}),
    E("canada","1608-07-03","Champlain founds Quebec",L.QUE,{section:S.canada,wiki:"Samuel de Champlain",text:"Quebec becomes a durable French settlement and an alliance hub on the St. Lawrence."}),
    E("russia","1613-03-03","Michael Romanov chosen tsar",L.MOS,{section:S.russia,wiki:"Michael I of Russia",text:"After the Time of Troubles, the Romanov dynasty begins."}),
    E("europe","1618-05-23","Thirty Years' War begins",[14.42,50.08],{section:S.reformation,wiki:"Thirty Years' War",end:"1648-10-24",text:"Religious conflict, Habsburg power and state rivalry devastate central Europe."}),
    E("russia","1639","Russians reach the Pacific",[143.20,59.40],{section:S.russia,wiki:"Ivan Moskvitin",approx:true,text:"Cossacks cross Siberia for fur, reaching the Sea of Okhotsk three decades before the Hudson's Bay Company charter."}),
    E("europe","1648-10-24","Peace of Westphalia",[7.63,51.96],{section:S.reformation,wiki:"Peace of Westphalia",text:"The settlement ends the Thirty Years' War and confirms a more plural imperial map."})
  ];
  const leaders = [
    R("Mehmed II","Ottoman Empire","ottoman","1432","1481","1451","1481",S.ottoman,{wiki:"Mehmed II"}),
    R("Suleiman I","Ottoman Empire","ottoman","1494","1566","1520","1566",S.ottoman,{wiki:"Suleiman the Magnificent"}),
    R("Charles V","Habsburg realms","habsburg","1500","1558","1519","1556",S.reformation,{wiki:"Charles V, Holy Roman Emperor"}),
    R("Elizabeth I","England","england","1533","1603","1558","1603",S.reformation,{wiki:"Elizabeth I"}),
    R("Ivan III","Moscow","russia","1440","1505","1462","1505",S.russia,{wiki:"Ivan III of Russia"}),
    R("Ivan IV","Russia","russia","1530","1584","1547","1584",S.russia,{wiki:"Ivan the Terrible"}),
    R("Akbar","Mughal Empire","mughal","1542","1605","1556","1605",S.asia,{wiki:"Akbar"}),
    R("Moctezuma II","Aztec Empire","america","1466","1520","1502","1520",S.americas,{wiki:"Moctezuma II"}),
    R("Atahualpa","Inca Empire","america","1502","1533","1532","1533",S.americas,{wiki:"Atahualpa"})
  ];
  const chapters = [
    {id:"ch-transition-economy",title:"Economic life around 1500",start:"1450",end:"1550",plate:"transition-economy-1500",bbox:[[-12,33],[32,56]],section:S.economy,text:"Around 1500, European money, mining, cloth, shipping and state debt tighten into a new economic system. The Fuggers, Medici, Venice, Antwerp and Lisbon show why bankers, princes and merchants now belong on the same map."},
    {id:"ch-renaissance-humanism",title:"Renaissance and humanism",start:"1450",end:"1550",bbox:[[6,39],[16,47]],section:S.renaissance,text:"Renaissance humanism begins in Italian city politics and book culture, then spreads north through print, schools and courts. It matters because old texts, new patrons and movable type change what educated Europeans can argue about."},
    {id:"ch-voyages-discovery",title:"Voyages of discovery and oceanic claims",start:"1415",end:"1522",plate:"voyages-discovery-1415-1522",bbox:[[-95,-38],[125,55]],section:S.voyages,text:"Portuguese pilots work down Africa and into the Indian Ocean while Spanish expeditions cross the Atlantic and Pacific. The Treaty of Tordesillas turns a meridian into an imperial claim, even though local peoples and rival Europeans keep changing the facts."},
    {id:"ch-american-civilizations",title:"Aztec, Inca, Maya and Chibcha worlds",start:"1450",end:"1533",plate:"american-civilizations-1500",bbox:[[-118,-25],[-55,25]],section:S.americas,text:"The Americas have large, different civilizations before conquest: Aztec tribute and markets in central Mexico, Maya city traditions in Yucatan, Chibcha chiefdoms in Colombia and the Inca road empire in the Andes."},
    {id:"ch-reformation",title:"Reformation and religious war",start:"1517",end:"1648",bbox:[[-5,44],[25,56]],section:S.reformation,text:"The Reformation starts with Luther, but it becomes a political map: imperial princes, Swiss reformers, Catholic reform, Dutch revolt and the Thirty Years' War."},
    {id:"ch-ottoman-after-1453",title:"The Ottoman empire after 1453",start:"1453",end:"1571",bbox:[[15,30],[45,49]],section:S.ottoman,text:"After Constantinople, Ottoman power grows through the Balkans, Hungary, the eastern Mediterranean and the Red Sea. Vienna, Mohacs and Lepanto show both reach and limits."},
    {id:"ch-indian-ocean-asia",title:"Asia and the Indian Ocean",start:"1450",end:"1650",bbox:[[65,-10],[125,35]],section:S.asia,text:"The Indian Ocean is not discovered by Europe; Portugal enters an old system with forts at Goa, Malacca and Hormuz, while Ming China, Mughal India, Macao and Manila shape the Asian side of the story."},
    {id:"ch-russia-steppe-transition",title:"Russia and the steppe frontier",start:"1478",end:"1649",bbox:[[25,43],[145,62]],section:S.russia,text:"Russia overlaps the Age of Transition: Moscow ends Horde tribute, takes Novgorod and Kazan, survives the Time of Troubles, then pushes across Siberia for fur."},
    {id:"ch-canada-contact",title:"Turtle Island and early Canada",start:"1497",end:"1650",bbox:[[-95,42],[-50,58]],section:S.canada,text:"Cabot, Cartier, Basque whalers and Champlain enter worlds that already have names, farms, alliances and rivalries. Stadacona, Hochelaga, Wendat and Haudenosaunee history keep Canada from reading as empty shoreline."}
  ];
  const B=(title,author,start,end,section,extra)=>Object.assign({title,author,start,end,owned:false},section?{section}:{},extra||{});
  const books = [
    B("The Renaissance","Paul Johnson","1450","1550",S.renaissance),
    B("The Reformation","Diarmaid MacCulloch","1517","1648",S.reformation),
    B("Empires of the Atlantic World","J. H. Elliott","1492","1830",S.voyages),
    B("1491","Charles C. Mann","1450","1533",S.americas),
    B("A Concise History of Canada's First Nations","Olive Dickason","1450","1650",S.canada,{canadian:true}),
    B("Osman's Dream","Caroline Finkel","1453","1600",S.ottoman),
    B("Russia in the Age of Ivan the Terrible","Maureen Perrie","1478","1584",S.russia)
  ];
  window.DATASETS = window.DATASETS || {};
  window.DATASETS.transition = {
    id:"transition", title:"The age of transition", subtitle:"1450-1650", range:["1450-01-01","1651-01-01"], startAt:"1500", precision:"year",
    mapNote:"No historical borders. Areas show story fields, claims or zones of influence. This period deliberately overlaps medieval, maritime and Russia because the handoffs are the point.",
    lanes:[{id:"canada",label:"Canada & the Americas",pinned:true},{id:"europe",label:"Europe"},{id:"ottoman",label:"Ottomans & Islam"},{id:"atlantic",label:"Africa & the Atlantic"},{id:"asia",label:"Asia & the Indian Ocean"},{id:"russia",label:"Russia"}],
    events, leaders, chapters, books,
    plates:[{id:"transition-economy-1500",title:"Economic life around 1500",start:"1450",end:"1550"},{id:"voyages-discovery-1415-1522",title:"Voyages of discovery and oceanic claims",start:"1415",end:"1522"},{id:"american-civilizations-1500",title:"American civilizations on the eve of conquest",start:"1450",end:"1533"}],
    colours:{lanes:{canada:"#b22d2d",europe:"#7a5a8c",ottoman:"#6b8c3f",atlantic:"#2f7f86",asia:"#b36b2e",russia:"#6b6b6b"},sides:{ottoman:"#6b8c3f",habsburg:"#d8a84f",england:"#8c3b3b",russia:"#6b6b6b",mughal:"#b36b2e",america:"#7a5a8c"}},
    changelog:[{date:"2026-10-06",text:"Round 11: opened the Age of Transition with economy, voyages, American civilizations, Reformation, Ottoman, Indian Ocean, Russia and early Canada coverage."}]
  };
})();
