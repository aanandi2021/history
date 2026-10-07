// Chapter scenes for the Age of Revolution and Napoleonic Age.
window.SCENES = window.SCENES || {};
(function () {
  const CAN="#b22d2d", USA="#2f7f86", FRA="#8c3b3b", NAP="#7a5a8c", BRIT="#2f5f93", IND="#8c6d3f", HAITI="#b36b2e", AUS="#d8a84f", RUS="#6b8c3f", PRUS="#4f7f4f", OTT="#9a6a32", ASIA="#387a5b", AFR="#7a6b42", ROAD="#5b4a3f";
  (window.SCENE_ACTORS = window.SCENE_ACTORS || {})["revolution"] = { [CAN]:"Canada and British North America", [USA]:"United States", [FRA]:"Revolutionary France", [NAP]:"Napoleonic France", [BRIT]:"Britain and empire", [IND]:"Indigenous nations", [HAITI]:"Haiti and abolition", [AUS]:"Austria", [RUS]:"Russia", [PRUS]:"Prussia", [OTT]:"Ottoman world and Egypt", [ASIA]:"India and Qing China", [AFR]:"Africa and Atlantic bases" };
  window.SCENES["revolution"] = {
    "part-atlantic-revolutions": { caption:"Atlantic revolution runs through Boston, Quebec, Paris and Saint-Domingue.", bbox:[[-85,14],[-55,52]], layers:[
      {type:"area",name:"British North America",tier:"core",colour:CAN,around:[[-66,43],[-72,47],[-79,45],[-82,43],[-75,42],[-70,44]]},
      {type:"area",name:"United States",tier:"core",colour:USA,around:[[-80,31],[-74,36],[-70,43],[-76,44],[-83,39],[-84,34]]},
      {type:"area",name:"Saint-Domingue",tier:"core",colour:HAITI,around:[[-74,18],[-72,20],[-70,19],[-71,18],[-73,18]]},
      {type:"route",style:"dashed",colour:USA,name:"invasion of Quebec",path:[[-73.6,45.5],[-71.21,46.81]]},
      {type:"route",style:"dotted",colour:CAN,name:"Loyalist migration",path:[[-74,41],[-66.6,45.9],[-63.6,44.7],[-79.4,43.7]]},
      {type:"point",symbol:"capital",name:"Philadelphia",at:[-75.16,39.95]}, {type:"point",symbol:"battle",name:"Quebec",at:[-71.21,46.81]}, {type:"point",symbol:"insurrection",name:"Saint-Domingue",at:[-72.2,19.76]}
    ], terms:[{t:"American Revolution",wiki:"American Revolution"},{t:"Quebec Act",wiki:"Quebec Act",star:"How did a law meant to stabilize Quebec become an American grievance?"},{t:"Haitian Revolution",wiki:"Haitian Revolution"},{t:"Loyalist",wiki:"United Empire Loyalist"}]},
    "ch-theory-revolution": { caption:"Ideas move from books into constitutions and revolutionary assemblies.", bbox:[[-5,43],[8,56]], layers:[
      {type:"route",style:"dotted",colour:ROAD,name:"print and debate",path:[[-3.19,55.95],[-0.13,51.51],[2.35,48.86],[6.14,46.2]]},
      {type:"point",symbol:"university",name:"Montesquieu",at:[2.35,48.86]}, {type:"point",symbol:"university",name:"Rousseau",at:[6.14,46.2]}, {type:"point",symbol:"university",name:"Adam Smith",at:[-3.19,55.95]}
    ], terms:[{t:"Montesquieu",wiki:"Montesquieu"},{t:"Rousseau",wiki:"Jean-Jacques Rousseau"},{t:"Adam Smith",wiki:"Adam Smith"}]},
    "ch-american-revolution-loyalist-north": { caption:"The American war has a northern theatre: Quebec, Indigenous country and Loyalist resettlement.", bbox:[[-84,36],[-60,50]], layers:[
      {type:"area",name:"Quebec / Canada",tier:"core",colour:CAN,around:[[-73,45],[-71,48],[-67,47],[-66,44],[-72,44]]},
      {type:"area",name:"Thirteen Colonies",tier:"core",colour:USA,around:[[-81,32],[-74,39],[-70,43],[-76,44],[-82,37]]},
      {type:"area",name:"Indigenous interior",tier:"influence",colour:IND,around:[[-84,39],[-80,43],[-76,42],[-77,38],[-82,36]]},
      {type:"route",style:"dashed",colour:USA,name:"Arnold and Montgomery",path:[[-73.6,45.5],[-71.21,46.81]]},
      {type:"route",style:"dotted",colour:CAN,name:"Loyalists north",path:[[-74.0,40.7],[-63.58,44.65],[-66.64,45.96],[-79.38,43.65]]},
      {type:"point",symbol:"battle",name:"Quebec",at:[-71.21,46.81]}, {type:"point",symbol:"treaty",name:"Paris",at:[2.35,48.86],maxK:2}, {type:"point",symbol:"port",name:"Halifax",at:[-63.58,44.65]}, {type:"point",symbol:"capital",name:"Philadelphia",at:[-75.16,39.95]}
    ], terms:[{t:"Quebec Act",wiki:"Quebec Act"},{t:"American invasion of Quebec",wiki:"Invasion of Quebec (1775)",star:"What would have changed if Quebec had fallen in 1775?"},{t:"Indigenous alliances",wiki:"Native Americans in the American Revolution"},{t:"Loyalist migration",wiki:"United Empire Loyalist"}]},
    "ch-united-states-constitution-west": { caption:"The new republic builds a federal centre while settlement pushes into Indigenous lands.", bbox:[[-100,25],[-70,48]], layers:[
      {type:"area",name:"Original states",tier:"core",colour:USA,around:[[-82,31],[-75,36],[-70,43],[-76,44],[-83,38]]},
      {type:"area",name:"Louisiana Purchase",tier:"conquest",colour:USA,around:[[-94,29],[-90,42],[-96,48],[-100,37]]},
      {type:"area",name:"Old Northwest",tier:"influence",colour:IND,around:[[-90,40],[-84,45],[-80,43],[-82,39]]},
      {type:"route",style:"dotted",colour:ROAD,name:"settler trails",path:[[-77,39],[-82,40],[-86,39],[-90,38]]},
      {type:"point",symbol:"capital",name:"Washington",at:[-77.04,38.90]}, {type:"point",symbol:"treaty",name:"Philadelphia",at:[-75.16,39.95]}, {type:"point",symbol:"battle",name:"Tippecanoe",at:[-86.84,40.51]}
    ], terms:[{t:"federal constitution",wiki:"Constitution of the United States"},{t:"Louisiana",wiki:"Louisiana Purchase"},{t:"Indigenous nations",wiki:"Native American tribes in the United States"}]},
    "ch-haiti-abolition-atlantic": { caption:"Haiti, abolition and the War of 1812 share one Atlantic frame.", bbox:[[-85,14],[-55,50]], layers:[
      {type:"area",name:"Haiti",tier:"core",colour:HAITI,around:[[-74,18],[-72,20],[-70,19],[-71,18],[-73,18]]},
      {type:"area",name:"British North America",tier:"core",colour:CAN,around:[[-83,42],[-79,45],[-73,47],[-66,45],[-70,43]]},
      {type:"area",name:"United States",tier:"core",colour:USA,around:[[-82,31],[-75,38],[-70,43],[-76,44],[-84,36]]},
      {type:"route",style:"dashed",colour:BRIT,name:"British attacks",path:[[-79.06,43.15],[-79.38,43.65],[-77.04,38.90],[-90.07,29.95]]},
      {type:"route",style:"dashed",colour:USA,name:"US attacks on Canada",path:[[-83.05,42.33],[-79.06,43.15],[-73.75,45.13]]},
      {type:"point",symbol:"insurrection",name:"Saint-Domingue",at:[-72.2,19.76],tag:{text:"1791",colour:"#f1c75b"}}, {type:"point",symbol:"capital",name:"Port-au-Prince",at:[-72.34,18.54],tag:{text:"1804",colour:"#f1c75b"}}, {type:"point",symbol:"battle",name:"Queenston Heights",at:[-79.05,43.16]}, {type:"point",symbol:"battle",name:"Chateauguay",at:[-73.75,45.13]}, {type:"point",symbol:"treaty",name:"Ghent",at:[3.72,51.05],maxK:2}
    ], terms:[{t:"Haitian Revolution",wiki:"Haitian Revolution",star:"Why does Haiti change the meaning of universal rights in this period?"},{t:"Toussaint Louverture",wiki:"Toussaint Louverture"},{t:"abolition",wiki:"Slave Trade Act 1807"},{t:"Tecumseh",wiki:"Tecumseh"},{t:"War of 1812",wiki:"War of 1812"}]},
    "part-french-revolution": { caption:"The French Revolution moves from fiscal crisis to republic, terror and military expansion.", bbox:[[-6,42],[16,52]], layers:[
      {type:"area",name:"France",tier:"core",colour:FRA,around:[[-5,43],[-2,49],[3,51],[7,49],[5,44],[0,42]]},
      {type:"area",name:"counter-revolution",tier:"influence",colour:AUS,around:[[-2,46],[-1,48],[-3,48],[-4,46]],from:"1793",until:"1796"},
      {type:"route",style:"dashed",colour:FRA,name:"revolutionary armies",path:[[2.35,48.86],[4.77,49.08],[6.96,50.85],[9.19,45.46]]},
      {type:"point",symbol:"capital",name:"Paris",at:[2.35,48.86]}, {type:"point",symbol:"battle",name:"Valmy",at:[4.77,49.08]}, {type:"point",symbol:"insurrection",name:"Vendee",at:[-1.30,46.67]}
    ], terms:[{t:"fiscal crisis",wiki:"Causes of the French Revolution"},{t:"Estates General",wiki:"Estates General of 1789"},{t:"Terror",wiki:"Reign of Terror"},{t:"Directory",wiki:"French Directory"}]},
    "ch-france-before-1789": { caption:"Privilege, debt and public opinion make reform impossible to contain.", bbox:[[-5,42],[8,51]], layers:[
      {type:"area",name:"pays d'etats and privilege",tier:"influence",colour:AUS,around:[[-4,43],[-1,48],[2,50],[5,48],[3,44]]},
      {type:"point",symbol:"capital",name:"Versailles",at:[2.12,48.80]}, {type:"point",symbol:"large-city",name:"Paris",at:[2.35,48.86]}, {type:"point",symbol:"university",name:"salons and clubs",at:[2.35,48.86]}
    ], terms:[{t:"Louis XVI",wiki:"Louis XVI"},{t:"Third Estate",wiki:"Estates of the realm"},{t:"cahiers",wiki:"Cahiers de doléances"}]},
    "ch-french-revolution-1789-1799": { caption:"Paris, provincial revolt and coalition war drive the Revolution's phases.", bbox:[[-5,42],[8,51]], layers:[
      {type:"area",name:"Revolutionary France",tier:"core",colour:FRA,around:[[-5,43],[-2,49],[3,51],[7,49],[5,44],[0,42]]},
      {type:"area",name:"Vendee and federal revolt",tier:"influence",colour:AUS,around:[[-2,46],[-1,47],[-1.5,48],[-3,47.5],[-3.5,46]]},
      {type:"route",style:"dashed",colour:FRA,name:"frontiers of war",path:[[2.35,48.86],[4.77,49.08],[6.96,50.85],[9.19,45.46]]},
      {type:"point",symbol:"insurrection",name:"Bastille",at:[2.37,48.85],tag:{text:"1789",colour:"#f1c75b"}}, {type:"point",symbol:"treaty",name:"Versailles",at:[2.12,48.80]}, {type:"point",symbol:"battle",name:"Valmy",at:[4.77,49.08],tag:{text:"1792",colour:"#f1c75b"}}, {type:"point",symbol:"insurrection",name:"Lyon",at:[4.84,45.76]}, {type:"point",symbol:"fortress",name:"Toulon",at:[5.93,43.13]}
    ], terms:[{t:"Bastille",wiki:"Storming of the Bastille"},{t:"Rights of Man",wiki:"Declaration of the Rights of Man and of the Citizen"},{t:"Terror",wiki:"Reign of Terror",star:"When does emergency government stop defending rights and start replacing them?"},{t:"Thermidor",wiki:"Thermidorian Reaction"}]},
    "ch-europe-1792-1799": { caption:"The first coalition war reaches the Rhine, Italy and Egypt.", bbox:[[-10,30],[35,56]], layers:[
      {type:"area",name:"French and daughter republics",tier:"core",colour:FRA,around:[[-2,43],[2,50],[8,51],[9,45],[5,43]]},
      {type:"route",style:"dashed",colour:FRA,name:"Italian campaign",path:[[5.93,43.13],[7.68,45.07],[9.19,45.46],[12.33,45.44],[16.37,48.21]]},
      {type:"route",style:"dashed",colour:FRA,name:"Egypt campaign",path:[[5.37,43.30],[14.51,35.90],[29.92,31.20],[31.24,30.04],[35.08,32.92]]},
      {type:"point",symbol:"battle",name:"Marengo",at:[8.68,44.89]}, {type:"point",symbol:"battle",name:"Aboukir",at:[30.10,31.33]}, {type:"point",symbol:"capital",name:"Cairo",at:[31.24,30.04]}
    ], terms:[{t:"Valmy",wiki:"Battle of Valmy"},{t:"Italian campaign",wiki:"Italian campaigns of the French Revolutionary Wars"},{t:"Egyptian expedition",wiki:"French campaign in Egypt and Syria"}]},
    "part-napoleonic-system": { caption:"Napoleon's system links annexed France, satellites, allies and enemies.", bbox:[[-10,35],[38,57]], layers:[
      {type:"area",name:"French Empire",tier:"core",colour:NAP,around:[[-5,43],[-1,51],[8,52],[13,45],[5,42]]},
      {type:"area",name:"dependent states",tier:"conquest",colour:NAP,around:[[4,42],[12,52],[22,52],[20,43],[10,40]]},
      {type:"route",style:"dashed",colour:NAP,name:"Russia 1812",path:[[23.9,54.9],[25.28,54.69],[32.05,54.78],[37.62,55.75]]},
      {type:"point",symbol:"capital",name:"Paris",at:[2.35,48.86]}, {type:"point",symbol:"battle",name:"Austerlitz",at:[16.76,49.13]}, {type:"point",symbol:"battle",name:"Leipzig",at:[12.37,51.34]}
    ], terms:[{t:"Napoleonic system",wiki:"First French Empire"},{t:"Continental System",wiki:"Continental System"},{t:"Spain",wiki:"Peninsular War"},{t:"Russia",wiki:"French invasion of Russia"}]},
    "ch-napoleonic-france-1799-1812": { caption:"The Consulate and Empire centralize France while keeping selected revolutionary gains.", bbox:[[-5,42],[8,51]], layers:[
      {type:"area",name:"France",tier:"core",colour:NAP,around:[[-5,43],[-2,49],[3,51],[7,49],[5,44],[0,42]]},
      {type:"point",symbol:"capital",name:"Paris",at:[2.35,48.86]}, {type:"point",symbol:"university",name:"Bank of France",at:[2.34,48.86]}, {type:"point",symbol:"treaty",name:"Code Napoleon",at:[2.36,48.85]}
    ], terms:[{t:"Code Napoleon",wiki:"Napoleonic Code"},{t:"Consulate",wiki:"French Consulate"},{t:"Empire",wiki:"First French Empire"}]},
    "ch-napoleonic-europe-1812": { caption:"At its height, the empire is large enough to make every frontier a problem.", bbox:[[-10,35],[38,57]], layers:[
      {type:"area",name:"French Empire",tier:"core",colour:NAP,around:[[-5,43],[-1,51],[8,52],[13,45],[5,42]]},
      {type:"area",name:"dependent kingdoms",tier:"conquest",colour:NAP,around:[[4,40],[13,52],[22,52],[21,43],[12,39]]},
      {type:"area",name:"allies under pressure",tier:"influence",colour:NAP,around:[[12,47],[25,55],[31,51],[25,45]]},
      {type:"itinerary",name:"Russian campaign",colour:NAP,stops:[{name:"Niemen",date:"1812-06-24",at:[23.9,54.9]},{name:"Smolensk",date:"1812-08-17",at:[32.05,54.78]},{name:"Borodino",date:"1812-09-07",at:[35.82,55.53]},{name:"Moscow",date:"1812-09-14",at:[37.62,55.75]},{name:"Berezina",date:"1812-11-29",at:[28.33,54.33]}]},
      {type:"point",symbol:"battle",name:"Borodino",at:[35.82,55.53]}, {type:"point",symbol:"capital",name:"Moscow",at:[37.62,55.75]}, {type:"point",symbol:"battle",name:"Berezina",at:[28.33,54.33]}
    ], terms:[{t:"Napoleonic Europe",wiki:"First French Empire"},{t:"Continental System",wiki:"Continental System"},{t:"Russian campaign",wiki:"French invasion of Russia",star:"Was 1812 a military failure first, or a political failure of the Continental System?"}]},
    "ch-britain-war-empire": { caption:"Britain fights with money, navy, colonies and industry.", bbox:[[-15,35],[90,60]], layers:[
      {type:"route",style:"dotted",colour:BRIT,name:"sea route to India",path:[[-0.13,51.51],[-6.25,36.18],[31.24,30.04],[77.21,28.61],[88.36,22.57]]},
      {type:"point",symbol:"battle",name:"Trafalgar",at:[-6.25,36.18]}, {type:"point",symbol:"port",name:"London",at:[-0.13,51.51]}, {type:"point",symbol:"port",name:"Calcutta",at:[88.36,22.57]}, {type:"point",symbol:"insurrection",name:"Luddites",at:[-1.15,52.95]}
    ], terms:[{t:"Britain",wiki:"United Kingdom of Great Britain and Ireland"},{t:"India",wiki:"Company rule in India"},{t:"abolishes the slave trade",wiki:"Slave Trade Act 1807"}]},
    "ch-germany-reform-national": { caption:"Defeat, reorganization and reform change the German political map.", bbox:[[5,47],[25,56]], layers:[
      {type:"area",name:"Confederation of the Rhine",tier:"core",colour:NAP,around:[[6,48],[10,52],[15,51],[14,48],[9,47]]},
      {type:"area",name:"Prussia after Tilsit",tier:"core",colour:PRUS,around:[[12,51],[15,53],[21,54],[22,52],[17,51]]},
      {type:"route",style:"dashed",colour:NAP,name:"Jena-Auerstedt campaign",path:[[11.58,50.93],[13.40,52.52],[21.88,55.08]]},
      {type:"point",symbol:"battle",name:"Jena",at:[11.58,50.93]}, {type:"point",symbol:"capital",name:"Berlin",at:[13.40,52.52]}, {type:"point",symbol:"university",name:"Berlin University",at:[13.39,52.52]}
    ], terms:[{t:"Holy Roman Empire",wiki:"Holy Roman Empire"},{t:"Prussia",wiki:"Prussian Reform Movement"},{t:"German national consciousness",wiki:"German nationalism"}]},
    "ch-wars-liberation-vienna": { caption:"The coalition defeats Napoleon, then turns victory into a settlement.", bbox:[[-5,42],[35,58]], layers:[
      {type:"route",style:"dashed",colour:RUS,name:"Russia and Prussia",path:[[37.62,55.75],[21.01,52.23],[13.40,52.52],[12.37,51.34]]},
      {type:"route",style:"dashed",colour:AUS,name:"Austria joins",path:[[16.37,48.21],[12.37,51.34],[2.35,48.86]]},
      {type:"route",style:"dashed",colour:BRIT,name:"Waterloo campaign",path:[[-0.13,51.51],[4.35,50.85],[4.40,50.68],[2.35,48.86]]},
      {type:"point",symbol:"battle",name:"Leipzig",at:[12.37,51.34],tag:{text:"1813",colour:"#f1c75b"}}, {type:"point",symbol:"capital",name:"Paris",at:[2.35,48.86]}, {type:"point",symbol:"battle",name:"Waterloo",at:[4.40,50.68]}, {type:"point",symbol:"treaty",name:"Vienna",at:[16.37,48.21],tag:{text:"1815",colour:"#f1c75b"}}
    ], terms:[{t:"Wars of Liberation",wiki:"German campaign of 1813"},{t:"Waterloo",wiki:"Battle of Waterloo"},{t:"Congress of Vienna",wiki:"Congress of Vienna",star:"Why did the settlement restore dynasties but not restore the old map?"},{t:"balance of power",wiki:"Balance of power (international relations)"}]},
    "ch-islamic-ottoman-egypt": { caption:"Egypt, Syria, Istanbul and Serbia put the Ottoman world inside the revolutionary age.", bbox:[[18,28],[36,46]], layers:[
      {type:"area",name:"Ottoman world",tier:"core",colour:OTT,around:[[20,38],[28,42],[35,40],[34,32],[30,29],[24,33]]},
      {type:"route",style:"dashed",colour:NAP,name:"French expedition",path:[[5.37,43.30],[29.92,31.20],[31.24,30.04],[35.08,32.92]]},
      {type:"point",symbol:"battle",name:"Pyramids",at:[31.13,29.98],tag:{text:"1798",colour:"#f1c75b"}}, {type:"point",symbol:"battle",name:"The Nile",at:[30.10,31.33]}, {type:"point",symbol:"find",name:"Rosetta Stone",at:[30.63,31.40]}, {type:"point",symbol:"fortress",name:"Acre",at:[35.08,32.92]}, {type:"point",symbol:"capital",name:"Istanbul",at:[28.98,41.01]}, {type:"point",symbol:"insurrection",name:"Serbian rising",at:[20.56,44.23]}
    ], terms:[{t:"Bonaparte in Egypt and Syria",wiki:"French campaign in Egypt and Syria"},{t:"the Nile",wiki:"Battle of the Nile"},{t:"Rosetta Stone",wiki:"Rosetta Stone"},{t:"Selim III",wiki:"Selim III"},{t:"Serbian rising",wiki:"First Serbian Uprising"}]},
    "ch-asia-india-qing": { caption:"Qing China and British India face the same age of pressure from European trade and war.", bbox:[[70,10],[125,45]], layers:[
      {type:"area",name:"British India",tier:"core",colour:BRIT,around:[[73,8],[78,28],[89,26],[92,20],[82,12]]},
      {type:"area",name:"Qing China",tier:"influence",colour:ASIA,around:[[95,22],[105,38],[122,42],[123,27],[110,20]]},
      {type:"route",style:"dashed",colour:BRIT,name:"Company campaigns",path:[[88.36,22.57],[77.21,28.61],[75.89,20.25],[76.68,12.42]]},
      {type:"point",symbol:"treaty",name:"Macartney embassy",at:[116.40,39.90],tag:{text:"1793",colour:"#f1c75b"}}, {type:"point",symbol:"battle",name:"Seringapatam",at:[76.68,12.42],tag:{text:"1799",colour:"#e8806a"}}, {type:"point",symbol:"battle",name:"Assaye",at:[75.89,20.25]}, {type:"point",symbol:"capital",name:"Delhi",at:[77.21,28.61]}, {type:"point",symbol:"port",name:"Calcutta",at:[88.36,22.57]}
    ], terms:[{t:"Macartney embassy",wiki:"Macartney Embassy"},{t:"Tipu Sultan",wiki:"Tipu Sultan"},{t:"Wellesley",wiki:"Richard Wellesley, 1st Marquess Wellesley"},{t:"Maratha wars",wiki:"Second Anglo-Maratha War"}]},
    "ch-africa-atlantic-bases": { caption:"Sierra Leone and the Cape connect abolition to Atlantic and Indian Ocean strategy.", bbox:[[-18,-36],[30,12]], layers:[
      {type:"area",name:"Cape Colony",tier:"core",colour:BRIT,around:[[16,-35],[20,-34],[20,-32],[17,-31],[15,-33]]},
      {type:"area",name:"Sierra Leone",tier:"core",colour:AFR,around:[[-14,7],[-12,7],[-12,9],[-14,9]]},
      {type:"route",style:"dotted",colour:BRIT,name:"route to India",path:[[-0.13,51.51],[-13.23,8.49],[18.42,-33.93],[77.21,28.61]]},
      {type:"point",symbol:"port",name:"Freetown",at:[-13.23,8.49],tag:{text:"1787 / 1808",colour:"#f1c75b"}}, {type:"point",symbol:"port",name:"Cape Town",at:[18.42,-33.93],tag:{text:"1795 / 1806",colour:"#f1c75b"}}
    ], terms:[{t:"Sierra Leone",wiki:"Sierra Leone Colony and Protectorate"},{t:"Cape Colony",wiki:"Cape Colony"},{t:"abolition",wiki:"Abolitionism"},{t:"route to India",wiki:"Cape of Good Hope"}]}
  };
})();

