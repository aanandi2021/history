// Chapter scenes for the Age of Transition. Areas are story fields, not surveyed borders.
window.SCENES = window.SCENES || {};
(function () {
  const EUR="#7a5a8c", OTT="#6b8c3f", ATL="#2f7f86", ASIA="#b36b2e", RUS="#6b6b6b", AM="#b22d2d", ROAD="#7b6848";
  (window.SCENE_ACTORS = window.SCENE_ACTORS || {}).transition = { [EUR]:"European powers", [OTT]:"Ottoman Empire", [ATL]:"Atlantic routes", [ASIA]:"Asian empires and ports", [RUS]:"Russia", [AM]:"American civilizations and Canada", [ROAD]:"Trade routes" };
  window.SCENES.transition = {
    "ch-transition-economy": { caption:"Around 1500, bankers, mines, ports and princes form a tighter European money web.", bbox:[[-12,33],[32,56]], layers:[
      {type:"area",name:"Habsburg-Burgundian money zone",tier:"influence",colour:EUR,around:[[2,50],[6,52],[11,50],[12,47],[7,46],[3,48]],labelAt:[7,49]},
      {type:"route",style:"dotted",colour:ROAD,name:"cloth, silver and credit routes",path:[[-9.14,38.72],[-5.99,37.39],[4.40,51.22],[10.90,48.37],[12.33,45.44]]},
      {type:"point",symbol:"port",name:"Lisbon",at:[-9.14,38.72]},{type:"point",symbol:"port",name:"Antwerp",at:[4.40,51.22]},{type:"point",symbol:"large-city",name:"Augsburg",at:[10.90,48.37]},{type:"point",symbol:"large-city",name:"Venice",at:[12.33,45.44]},{type:"point",symbol:"large-city",name:"Florence",at:[11.25,43.77]}
    ], terms:[{t:"Fuggers",wiki:"Fugger family"},{t:"Medici",wiki:"House of Medici"},{t:"Venice",wiki:"Republic of Venice"},{t:"Antwerp",wiki:"Antwerp"},{t:"Lisbon",wiki:"Lisbon"}]},
    "ch-voyages-discovery": { caption:"Portuguese and Spanish voyages make oceans into claimed imperial routes.", bbox:[[-95,-38],[125,55]], layers:[
      {type:"route",style:"dashed",colour:ATL,name:"Portuguese pilots",path:[[-9.14,38.72],[-23.6,15.1],[-1.35,5.08],[18.47,-34.36],[39.67,-4.05],[75.78,11.26]]},
      {type:"route",style:"dashed",colour:EUR,name:"Spanish expeditions",path:[[-5.99,37.39],[-74.47,24.05],[-99.13,19.43],[-79.9,-2.2],[-110,-15]]},
      {type:"boundary",style:"meridian",colour:"#5f4b8b",name:"Treaty of Tordesillas meridian",path:[[-46.6,-35],[-46.6,45]]},
      {type:"point",symbol:"port",name:"Lisbon",at:[-9.14,38.72]},{type:"point",symbol:"port",name:"Calicut",at:[75.78,11.26]},{type:"point",symbol:"treaty",name:"Tordesillas",at:[-5.0,41.5]},{type:"point",symbol:"large-city",name:"Tenochtitlan",at:[-99.13,19.43]},{type:"point",symbol:"port",name:"Quebec",at:[-71.21,46.81]}
    ], terms:[{t:"Portuguese",wiki:"Portuguese discoveries"},{t:"Spanish",wiki:"Spanish colonization of the Americas"},{t:"Treaty of Tordesillas",wiki:"Treaty of Tordesillas"},{t:"meridian",wiki:"Meridian (geography)"},{t:"local peoples",wiki:"Indigenous peoples of the Americas"}]},
    "ch-american-civilizations": { caption:"American civilizations before conquest: tribute, roads, city traditions and northern contact zones.", bbox:[[-118,-25],[-55,25]], layers:[
      {type:"area",name:"Aztec",tier:"core",colour:AM,around:[[-103,16],[-99,21],[-96,20],[-97,17],[-101,15]],labelAt:[-99,18.5]},
      {type:"area",name:"Maya",tier:"influence",colour:ASIA,around:[[-92,14],[-88,21],[-84,20],[-86,15]],labelAt:[-88,18]},
      {type:"area",name:"Inca",tier:"core",colour:EUR,around:[[-80,-4],[-76,1],[-72,-8],[-70,-18],[-73,-23],[-77,-14]],labelAt:[-74,-12]},
      {type:"area",name:"Chibcha",tier:"influence",colour:OTT,around:[[-75,4],[-73,7],[-71,5],[-73,3]],labelAt:[-73.5,5]},
      {type:"point",symbol:"capital",name:"Tenochtitlan",at:[-99.13,19.43]},{type:"point",symbol:"capital",name:"Cusco",at:[-71.97,-13.53]},{type:"point",symbol:"large-city",name:"Mayapan",at:[-89.46,20.63]},{type:"point",symbol:"large-city",name:"Bacata",at:[-74.08,4.71]}
    ], terms:[{t:"Aztec",wiki:"Aztec Empire"},{t:"Maya",wiki:"Maya civilization"},{t:"Chibcha",wiki:"Muisca Confederation"},{t:"Inca",wiki:"Inca Empire"}]},
    "ch-canada-contact": { caption:"Early Canada is a contact zone layered onto existing towns, fisheries and alliances.", bbox:[[-95,42],[-50,58]], layers:[
      {type:"area",name:"Wendat and Haudenosaunee country",tier:"influence",colour:AM,around:[[-80,43],[-77,45],[-75,44],[-76,42.5],[-79,42.7]],labelAt:[-77.5,44]},
      {type:"route",style:"dotted",colour:ROAD,name:"St Lawrence route",path:[[-64.48,48.83],[-71.21,46.81],[-73.56,45.50]]},
      {type:"point",symbol:"port",name:"Red Bay",at:[-56.43,51.73]},{type:"point",symbol:"large-city",name:"Stadacona",at:[-71.21,46.81]},{type:"point",symbol:"large-city",name:"Hochelaga",at:[-73.56,45.50]},{type:"point",symbol:"port",name:"Quebec",at:[-71.21,46.81]}
    ], terms:[{t:"Cabot",wiki:"John Cabot"},{t:"Cartier",wiki:"Jacques Cartier"},{t:"Basque whalers",wiki:"History of Basque whaling"},{t:"Champlain",wiki:"Samuel de Champlain"},{t:"Stadacona",wiki:"Stadacona"},{t:"Hochelaga",wiki:"Hochelaga"},{t:"Wendat",wiki:"Huron-Wendat Nation"},{t:"Haudenosaunee",wiki:"Iroquois"}]}
    ,"ch-german-reformation": { caption:"The German Reformation turns imperial cities, princes and peasant rising into a confessional map.", bbox:[[5.5,46],[21,55]], layers:[
      {type:"area",name:"Lutheran north and centre",tier:"core",colour:EUR,around:[[8.5,50.5],[11,53],[14,53.6],[17,52],[14,50.4]],labelAt:[12.8,52.1]},
      {type:"area",name:"Catholic south",tier:"influence",colour:ROAD,around:[[8,47],[11,49],[15,49],[17,47]],labelAt:[13,48]},
      {type:"route",style:"dashed",colour:ROAD,name:"imperial campaign",path:[[10.9,48.4],[11.3,49.8],[13.21,51.24]]},
      {type:"point",symbol:"university",name:"Wittenberg",at:[12.65,51.87]},{type:"point",symbol:"treaty",name:"Worms",at:[8.36,49.63]},{type:"point",symbol:"treaty",name:"Augsburg",at:[10.90,48.37]},{type:"point",symbol:"battle",name:"Muhlberg",at:[13.21,51.24]}
    ], terms:[{t:"Luther",wiki:"Martin Luther"},{t:"Worms",wiki:"Diet of Worms"},{t:"Peasant War",wiki:"German Peasants' War"},{t:"Schmalkaldic League",wiki:"Schmalkaldic League"},{t:"Peace of Augsburg",wiki:"Peace of Augsburg"}]},
    "ch-charles-v-habsburg-valois": { caption:"Charles V's inheritances surround France and join Spain, Italy, the Low Countries and Austria.", bbox:[[-11,34],[31,56]], layers:[
      {type:"area",name:"Spanish Habsburg lands",tier:"core",colour:ATL,around:[[-7,39],[-2,42],[3,41],[12,39],[15,40]],labelAt:[-2,39.5]},
      {type:"area",name:"Austrian Habsburg lands",tier:"core",colour:OTT,around:[[10,46],[14,49],[18,49],[16,46]],labelAt:[15,48]},
      {type:"area",name:"France",tier:"influence",colour:EUR,around:[[-3,44],[1,50],[6,48],[4,43]],labelAt:[2,47]},
      {type:"route",style:"dashed",colour:ROAD,name:"Habsburg strategic ring",path:[[3.72,51.05],[6.08,50.78],[16.37,48.21],[12.50,41.90],[-3.70,40.42],[3.72,51.05]]},
      {type:"point",symbol:"capital",name:"Ghent",at:[3.72,51.05]},{type:"point",symbol:"battle",name:"Pavia",at:[9.16,45.19]},{type:"point",symbol:"battle",name:"Rome",at:[12.50,41.90]},{type:"point",symbol:"battle",name:"Vienna",at:[16.37,48.21]}
    ], terms:[{t:"Charles V",wiki:"Charles V, Holy Roman Emperor"},{t:"Habsburg",wiki:"House of Habsburg"},{t:"Valois",wiki:"House of Valois"},{t:"Council of Trent",wiki:"Council of Trent"},{t:"Jesuits",wiki:"Society of Jesus"}]},
    "ch-confessional-europe": { caption:"Confessional Europe hardens from a divided religious map into war, settlements and exile routes.", bbox:[[-11,36],[32,61]], layers:[
      {type:"area",name:"Catholic belt",tier:"core",colour:ROAD,around:[[-8,40],[2,47],[12,46],[20,45],[17,40]],labelAt:[7,43]},
      {type:"area",name:"Lutheran north",tier:"core",colour:EUR,around:[[7,53],[14,58],[23,58],[22,54],[14,52]],labelAt:[15,55]},
      {type:"area",name:"Reformed zones",tier:"influence",colour:ATL,around:[[3,46],[6,48],[7,46],[4,44]],labelAt:[5,46]},
      {type:"route",style:"dashed",colour:ROAD,name:"Thirty Years' War corridor",path:[[14.42,50.08],[12,49.8],[8.4,50],[6.2,49.8]]},
      {type:"point",symbol:"treaty",name:"Trent",at:[11.12,46.07]},{type:"point",symbol:"treaty",name:"Nantes",at:[-1.55,47.22]},{type:"point",symbol:"treaty",name:"Westphalia",at:[7.63,51.96]},{type:"point",symbol:"insurrection",name:"Prague",at:[14.42,50.08]}
    ], terms:[{t:"Calvinism",wiki:"Calvinism"},{t:"Anglicanism",wiki:"Church of England"},{t:"Huguenots",wiki:"Huguenots"},{t:"Thirty Years' War",wiki:"Thirty Years' War"},{t:"Peace of Westphalia",wiki:"Peace of Westphalia"}]},
    "ch-dutch-revolt-maritime-empires": { caption:"The Dutch revolt links Low Countries siege warfare to Iberian, Dutch and English oceanic competition.", bbox:[[-95,-35],[140,53]], layers:[
      {type:"area",name:"Dutch rebel core",tier:"core",colour:ATL,around:[[3.5,51.2],[4.5,53.0],[6.5,52.8],[6.0,51.2]],labelAt:[5,52]},
      {type:"route",style:"dashed",colour:ROAD,name:"Portuguese-Iberian routes",path:[[-9.14,38.72],[-1.35,5.08],[18.47,-34.36],[73.83,15.50],[102.25,2.19],[113.54,22.20]]},
      {type:"route",style:"dashed",colour:ATL,name:"Dutch VOC route",path:[[4.90,52.37],[-25,10],[-10,-35],[73.83,15.50],[102.25,2.19],[106.82,-6.13]]},
      {type:"point",symbol:"port",name:"Amsterdam",at:[4.90,52.37]},{type:"point",symbol:"battle",name:"Antwerp",at:[4.40,51.22]},{type:"point",symbol:"port",name:"Batavia",at:[106.82,-6.13]},{type:"point",symbol:"find",name:"Moluccas",at:[127.4,0.7]}
    ], terms:[{t:"Dutch Revolt",wiki:"Dutch Revolt"},{t:"Union of Utrecht",wiki:"Union of Utrecht"},{t:"Spanish Netherlands",wiki:"Spanish Netherlands"},{t:"VOC",wiki:"Dutch East India Company"},{t:"Batavia",wiki:"Batavia, Dutch East Indies"}]},
    "ch-france-england-religious-wars": { caption:"French civil war and England's settlement connect confessional identity to dynastic and Atlantic rivalry.", bbox:[[-6,42],[8,53]], layers:[
      {type:"area",name:"Huguenot strongholds",tier:"influence",colour:ATL,around:[[-1,44],[1,46],[4,45],[5,43]],labelAt:[2,44.8]},
      {type:"point",symbol:"capital",name:"Paris",at:[2.35,48.86]},{type:"point",symbol:"treaty",name:"Nantes",at:[-1.55,47.22]},{type:"point",symbol:"capital",name:"London",at:[-0.13,51.51]}
    ], terms:[{t:"Huguenots",wiki:"Huguenots"},{t:"Elizabeth I",wiki:"Elizabeth I"},{t:"Spanish Armada",wiki:"Spanish Armada"}]},
    "ch-baltic-transition": { caption:"Poland-Lithuania, Sweden, Denmark and Russia pull Livonia and the Baltic into early-modern rivalry.", bbox:[[10,53],[35,61]], layers:[
      {type:"area",name:"Poland-Lithuania",tier:"core",colour:EUR,around:[[19,52],[25,55],[31,56],[31,51],[24,50]],labelAt:[25,53]},
      {type:"area",name:"Sweden",tier:"core",colour:ROAD,around:[[13,58],[17,61],[23,61],[24,58]],labelAt:[18,59]},
      {type:"route",style:"dashed",colour:ROAD,name:"Livonian struggle",path:[[24.75,59.44],[26,58],[24,56],[21,56]]},
      {type:"point",symbol:"port",name:"Reval",at:[24.75,59.44]},{type:"point",symbol:"port",name:"Riga",at:[24.11,56.95]}
    ], terms:[{t:"Livonia",wiki:"Livonia"},{t:"Polish-Lithuanian Commonwealth",wiki:"Polish–Lithuanian Commonwealth"},{t:"Swedish Empire",wiki:"Swedish Empire"}]},
    "ch-thirty-years-war-opening": { caption:"Bohemia and Denmark pull the Empire into the first phases of the Thirty Years' War.", bbox:[[4,46],[24,55]], layers:[
      {type:"area",name:"Bohemian revolt",tier:"core",colour:ROAD,around:[[12,48],[15,50],[18,50],[17,48]],labelAt:[15,49]},
      {type:"route",style:"dashed",colour:ROAD,name:"Danish phase",path:[[10,56],[10,53],[12,51],[14,50]]},
      {type:"point",symbol:"insurrection",name:"Prague",at:[14.42,50.08]},{type:"point",symbol:"battle",name:"White Mountain",at:[14.32,50.08]}
    ], terms:[{t:"Defenestration of Prague",wiki:"Defenestrations of Prague"},{t:"Thirty Years' War",wiki:"Thirty Years' War"},{t:"Christian IV",wiki:"Christian IV of Denmark"}]}

  };
})();
