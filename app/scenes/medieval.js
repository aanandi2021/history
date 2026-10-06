// Chapter scenes for the medieval period. Borders are approximate story fields, not surveyed lines.
window.SCENES = window.SCENES || {};
(function () {
  const FR="#7a5a8c", BYZ="#d66a4a", IS="#6b8c3f", STEP="#6b6b6b", RUS="#9a6a38", ENG="#8c3b3b", VAND="#2f7f86", GOTH="#5b78a8", NORM="#c58b32", ASIA="#b36b2e", ROAD="#7b6848";
  (window.SCENE_ACTORS = window.SCENE_ACTORS || {}).medieval = { [FR]:"Franks and Carolingians", [BYZ]:"Byzantium", [IS]:"Islamic caliphates", [STEP]:"Steppe peoples", [RUS]:"Kievan Rus", [ENG]:"England and Wessex", [VAND]:"Vandals", [GOTH]:"Goths and successor kingdoms", [NORM]:"Normans and Vikings", [ASIA]:"Sui, Tang and Japan", [ROAD]:"Trade and river routes" };
  window.SCENES.medieval = {
    "ch-western-europe": { caption:"Western Europe after Rome: successor kingdoms, Frankish expansion, Viking routes and England. Borders are approximate.", bbox:[[-10,35],[25,57]], layers:[
      {type:"area",name:"Frankish core",tier:"core",colour:FR,around:[[1,49],[4,50.5],[7,49],[7,46],[3,45],[-1,47]],labelAt:[4,48.5]},
      {type:"area",name:"Carolingian reach",tier:"conquest",from:"0751",colour:FR,around:[[-4,43],[2,50],[9,53],[15,49],[14,43],[8,41],[2,43]],labelAt:[7,47]},
      {type:"area",name:"Anglo-Saxon England",tier:"influence",colour:ENG,around:[[-5,50],[-1,55],[1,54],[0,51],[-3,50]],labelAt:[-2,52]},
      {type:"arrow",name:"Viking and Norman routes",colour:NORM,path:[[10,59],[2,52],[1.1,49.4],[-1.3,51.1],[0.49,50.9]],labelAt:[3,53]},
      {type:"point",symbol:"capital",name:"Paris",at:[2.35,48.86]}, {type:"point",symbol:"capital",name:"Rome",at:[12.5,41.9]}, {type:"point",symbol:"battle",name:"Hastings",year:"1066",at:[0.49,50.91]},
      {type:"label",style:"water",text:"North Sea",at:[3,55.5]}
    ], terms:[{t:"Rome",wiki:"Ancient Rome"},{t:"Franks",wiki:"Franks"},{t:"Charlemagne",wiki:"Charlemagne"},{t:"England",wiki:"England in the Middle Ages"},{t:"Norman",wiki:"Norman Conquest"}]},
    "ch-barbarian-kingdoms": { caption:"The western empire becomes successor kingdoms around AD 500. Borders are approximate.", bbox:[[-10,30],[35,57]], layers:[
      {type:"area",name:"Franks",tier:"core",colour:FR,around:[[0,48],[4,51],[7,50],[6,47],[2,46]],labelAt:[4,49]},
      {type:"area",name:"Visigoths",tier:"core",colour:GOTH,around:[[-8,38],[-2,43],[4,43],[3,39],[-2,37]],labelAt:[-2,40]},
      {type:"area",name:"Ostrogothic Italy",tier:"core",colour:GOTH,pattern:"hatch",around:[[8,45],[12,46],[16,43],[17,40],[15,37],[12,40],[10,43]],labelAt:[13,42]},
      {type:"area",name:"Vandals",tier:"core",colour:VAND,around:[[8,34],[12,37],[17,36],[15,32],[9,32]],labelAt:[12,35]},
      {type:"area",name:"Byzantium",tier:"influence",colour:BYZ,around:[[20,40],[28,44],[34,40],[32,34],[23,35]],labelAt:[29,38]},
      {type:"arrow",name:"Gothic route",colour:GOTH,path:[[24,45],[18,44],[13,42],[4,43],[-1,43]],labelAt:[12,45]},
      {type:"point",symbol:"battle",name:"Soissons",year:"486",at:[3.32,49.38]}, {type:"point",symbol:"capital",name:"Ravenna",at:[12.2,44.42]}, {type:"point",symbol:"capital",name:"Carthage",at:[10.31,36.85]}, {type:"point",symbol:"large-city",name:"Toulouse",at:[1.44,43.6]}
    ], terms:[{t:"successor kingdoms",wiki:"Barbarian kingdoms"},{t:"Franks",wiki:"Franks"},{t:"Visigoths",wiki:"Visigoths"},{t:"Ostrogoths",wiki:"Ostrogoths"},{t:"Vandals",wiki:"Vandals"},{t:"bishops",wiki:"Bishop"}]},
    "ch-franks-carolingians": { caption:"Frankish power grows, then Charlemagne's empire is partitioned. Verdun is drawn as a partition boundary, not a modern border.", bbox:[[-6,36],[18,55]], layers:[
      {type:"area",name:"Clovis's Franks",tier:"core",colour:FR,around:[[0,48],[4,51],[7,50],[5,46],[1,46]],labelAt:[4,48]},
      {type:"area",name:"Charlemagne's empire",tier:"conquest",from:"0774",colour:FR,around:[[-4,43],[2,50],[8,53],[15,50],[14,44],[9,41],[2,43]],labelAt:[6,47]},
      {type:"boundary",style:"partition",colour:"#5f4b8b",width:3,from:"0843",name:"Verdun western line",path:[[4.7,52],[4.8,49],[4.5,47],[4.9,45],[5.4,43]]},
      {type:"boundary",style:"partition",colour:"#5f4b8b",width:3,from:"0843",name:"Verdun eastern line",path:[[8.4,53],[8.0,50],[8.3,47],[9.2,44],[10.2,42]]},
      {type:"point",symbol:"capital",name:"Aachen",year:"Palace",at:[6.08,50.78]}, {type:"point",symbol:"battle",name:"Tours",year:"732",at:[0.68,47.39]}, {type:"point",symbol:"treaty",name:"Verdun",year:"843",at:[5.38,49.16]}, {type:"point",symbol:"capital",name:"Rome",at:[12.5,41.9]}
    ], terms:[{t:"Franks",wiki:"Franks"},{t:"Clovis",wiki:"Clovis I"},{t:"Carolingians",wiki:"Carolingian dynasty"},{t:"Charlemagne",wiki:"Charlemagne"},{t:"Treaty of Verdun",wiki:"Treaty of Verdun"}]},
    "ch-england-to-1066": { caption:"England moves from Anglo-Saxon kingdoms through Viking pressure to Norman conquest. Borders are approximate.", bbox:[[-8,49],[3,59]], layers:[
      {type:"area",name:"Wessex",tier:"core",colour:ENG,around:[[-3,50],[-1,51.5],[-1.4,52.3],[-3.5,51.8],[-4,50.6]],labelAt:[-2.5,51.2]},
      {type:"area",name:"Danelaw",tier:"influence",colour:NORM,around:[[-1,52],[1,54.5],[-1,55.5],[-3,54],[-2.5,52.5]],labelAt:[-1.2,54]},
      {type:"arrow",name:"Norman invasion",colour:NORM,path:[[1.1,49.4],[0.2,50.5],[0.49,50.91]],labelAt:[0.6,50.2]},
      {type:"point",symbol:"capital",name:"Winchester",at:[-1.32,51.06]}, {type:"point",symbol:"battle",name:"Stamford Bridge",year:"1066",at:[-0.92,53.99]}, {type:"point",symbol:"battle",name:"Hastings",year:"1066",at:[0.49,50.91]}
    ], terms:[{t:"Anglo-Saxon",wiki:"Anglo-Saxons"},{t:"Viking",wiki:"Viking Age"},{t:"Wessex",wiki:"Wessex"},{t:"Hastings",wiki:"Battle of Hastings"}]},
    "ch-normans-vikings": { caption:"Viking movement becomes settlement and state-building from the Atlantic to the Black Sea.", bbox:[[-25,35],[35,65]], layers:[
      {type:"arrow",name:"North Atlantic",colour:NORM,path:[[10,59],[-8,56],[-19,64],[-45,61]],labelAt:[-12,59]}, {type:"arrow",name:"Seine and Normandy",colour:NORM,path:[[10,59],[3,52],[1.1,49.44]],labelAt:[4,53]},
      {type:"arrow",name:"Volga-Dnieper routes",colour:NORM,path:[[18,59],[25,55],[30.52,50.45],[28.98,41.01]],labelAt:[25,53]},
      {type:"point",symbol:"port",name:"Novgorod",at:[31.28,58.52]}, {type:"point",symbol:"capital",name:"Kiev",at:[30.52,50.45]}, {type:"point",symbol:"capital",name:"Constantinople",at:[28.98,41.01]}, {type:"point",symbol:"large-city",name:"Rouen",at:[1.1,49.44]}
    ], terms:[{t:"Viking",wiki:"Viking Age"},{t:"Scandinavians",wiki:"Norsemen"},{t:"Normandy",wiki:"Normandy"},{t:"Volga",wiki:"Volga trade route"}]},
    "ch-byzantium": { caption:"Byzantium holds the eastern Roman centre while losing and recovering ground around the Mediterranean.", bbox:[[10,28],[45,47]], layers:[
      {type:"area",name:"Byzantine core",tier:"core",colour:BYZ,around:[[20,40],[26,44],[34,41],[34,36],[25,35]],labelAt:[29,39]},
      {type:"area",name:"Justinian's west",tier:"conquest",from:"0533",until:"0600",colour:BYZ,around:[[8,34],[13,44],[18,42],[17,36],[12,35]],labelAt:[13,39]},
      {type:"arrow",name:"Arab conquests",colour:IS,from:"0636",path:[[39,25],[36,33],[35.95,32.8],[31.23,30.04]],labelAt:[35,31]},
      {type:"point",symbol:"capital",name:"Constantinople",at:[28.98,41.01]}, {type:"point",symbol:"battle",name:"Yarmuk",year:"636",at:[35.95,32.8]}, {type:"point",symbol:"fortress",name:"Constantinople siege",year:"717",at:[28.98,41.01],dy:22}
    ], terms:[{t:"eastern empire",wiki:"Byzantine Empire"},{t:"Constantinople",wiki:"Constantinople"},{t:"Justinian",wiki:"Justinian I"},{t:"Kievan Rus",wiki:"Kievan Rus'"}]},
    "ch-justinian-reconquest": { caption:"Justinian's armies retake Africa and Italy, but the reconquest leaves a thin imperial map.", bbox:[[-8,28],[35,47]], layers:[
      {type:"area",name:"Eastern Roman Empire",tier:"core",colour:BYZ,around:[[20,40],[27,44],[35,39],[31,34],[23,35]],labelAt:[29,39]},
      {type:"area",name:"Africa restored",tier:"conquest",from:"0533",colour:BYZ,around:[[8,34],[13,37],[17,36],[15,32],[9,32]],labelAt:[12,35]},
      {type:"area",name:"Italy restored",tier:"conquest",from:"0540",colour:BYZ,around:[[10,45],[13,45],[16,42],[16,38],[13,40],[11,43]],labelAt:[13,42]},
      {type:"arrow",name:"Belisarius to Carthage",colour:BYZ,path:[[28.98,41.01],[20,37],[10.31,36.85]],labelAt:[19,38]}, {type:"arrow",name:"Gothic War",colour:BYZ,path:[[10.31,36.85],[15.08,37.51],[12.5,41.9],[12.2,44.42]],labelAt:[13,39]},
      {type:"point",symbol:"capital",name:"Constantinople",at:[28.98,41.01]}, {type:"point",symbol:"capital",name:"Carthage",year:"533",at:[10.31,36.85]}, {type:"point",symbol:"capital",name:"Ravenna",year:"540",at:[12.2,44.42]}, {type:"point",symbol:"battle",name:"Taginae",year:"552",at:[12.77,43.35]}
    ], terms:[{t:"Justinian",wiki:"Justinian I"},{t:"Belisarius",wiki:"Belisarius"},{t:"Vandal",wiki:"Vandalic War"},{t:"Ostrogothic",wiki:"Ostrogothic Kingdom"},{t:"Lombards",wiki:"Lombards"}]},
    "ch-early-islam": { caption:"The caliphate expands from Arabia to Syria, Egypt, Iran, North Africa and Spain.", bbox:[[-10,15],[75,45]], layers:[
      {type:"area",name:"Arabia",tier:"core",colour:IS,around:[[35,18],[45,30],[55,25],[50,16],[40,16]],labelAt:[45,23]},
      {type:"area",name:"Umayyad Caliphate",tier:"conquest",from:"0661",colour:IS,around:[[-8,31],[10,36],[31,30],[42,36],[58,35],[70,32],[64,24],[38,20],[20,27]],labelAt:[35,31]},
      {type:"arrow",name:"to Syria and Egypt",colour:IS,path:[[39.83,21.42],[35.95,32.8],[31.23,30.04]],labelAt:[35,29]}, {type:"arrow",name:"to Spain",colour:IS,path:[[31.23,30.04],[10,33],[-5.35,36.14],[-4.78,37.88]],labelAt:[11,34]},
      {type:"point",symbol:"large-city",name:"Mecca",at:[39.83,21.42]}, {type:"point",symbol:"capital",name:"Damascus",at:[36.31,33.51]}, {type:"point",symbol:"capital",name:"Baghdad",year:"762",at:[44.37,33.31]}, {type:"point",symbol:"capital",name:"Cordoba",at:[-4.78,37.88]}
    ], terms:[{t:"Islam",wiki:"Islam"},{t:"Arabia",wiki:"Arabian Peninsula"},{t:"Umayyads",wiki:"Umayyad Caliphate"},{t:"Abbasids",wiki:"Abbasid Caliphate"},{t:"Baghdad",wiki:"Baghdad"},{t:"Maritime Asia",wiki:"Maritime Silk Road"}]},
    "ch-steppe-rus": { caption:"Steppe powers press Europe and Byzantium while Rus grows along north-south river routes.", bbox:[[5,38],[65,58]], layers:[
      {type:"area",name:"Steppe zone",tier:"influence",colour:STEP,around:[[20,48],[35,51],[55,50],[60,45],[42,43],[26,44]],labelAt:[42,47]},
      {type:"route",style:"dotted",colour:ROAD,name:"Baltic-Black Sea route",path:[[31.3,58.5],[30.52,50.45],[32,46],[28.98,41.01]]},
      {type:"arrow",name:"Magyars",colour:STEP,path:[[45,47],[30,47],[19,47]],labelAt:[31,48]},
      {type:"point",symbol:"capital",name:"Kiev",at:[30.52,50.45]}, {type:"point",symbol:"capital",name:"Constantinople",at:[28.98,41.01]}, {type:"point",symbol:"large-city",name:"Novgorod",at:[31.28,58.52]}
    ], terms:[{t:"steppe",wiki:"Eurasian Steppe"},{t:"Huns",wiki:"Huns"},{t:"Khazars",wiki:"Khazars"},{t:"Kievan Rus",wiki:"Kievan Rus'"},{t:"Russia",wiki:"History of Russia"}]},
    "ch-kievan-rus": { caption:"Kievan Rus sits on the Dnieper route between Scandinavia and Byzantium.", bbox:[[20,43],[45,57]], layers:[
      {type:"area",name:"Kievan Rus",tier:"core",colour:RUS,around:[[25,51],[30,55],[36,54],[36,49],[31,48],[27,49]],labelAt:[31,51]},
      {type:"route",style:"dotted",colour:ROAD,name:"Dnieper route",path:[[31.28,58.52],[30.52,50.45],[32,46],[28.98,41.01]]},
      {type:"arrow",name:"Conversion from Byzantium",colour:BYZ,path:[[28.98,41.01],[31,46],[30.52,50.45]],labelAt:[31,46.5]},
      {type:"point",symbol:"capital",name:"Kiev",year:"882",at:[30.52,50.45]}, {type:"point",symbol:"large-city",name:"Novgorod",at:[31.28,58.52]}, {type:"point",symbol:"capital",name:"Constantinople",at:[28.98,41.01]}
    ], terms:[{t:"Kievan Rus",wiki:"Kievan Rus'"},{t:"Kiev",wiki:"Kyiv"},{t:"Dnieper",wiki:"Dnieper"},{t:"Byzantium",wiki:"Byzantine Empire"},{t:"Muscovy",wiki:"Grand Duchy of Moscow"}]},
    "ch-medieval-asia": { caption:"Sui-Tang China, Japan and Central Asia belong on the same medieval map as Europe and Islam.", bbox:[[65,5],[145,55]], layers:[
      {type:"area",name:"Tang China",tier:"core",colour:ASIA,around:[[95,25],[105,35],[116,40],[123,34],[118,25],[105,22]],labelAt:[111,32]},
      {type:"area",name:"Japan",tier:"influence",colour:ASIA,around:[[130,31],[139,39],[143,35],[136,31]],labelAt:[137,35]},
      {type:"route",style:"dotted",colour:ROAD,name:"Central Asian routes",path:[[108.94,34.26],[96,40],[82,42],[71.9,42.52],[44.37,33.31]]},
      {type:"point",symbol:"capital",name:"Chang'an",at:[108.94,34.26]}, {type:"point",symbol:"battle",name:"Talas",year:"751",at:[71.9,42.52]}, {type:"point",symbol:"capital",name:"Nara",at:[135.8,34.68]}, {type:"point",symbol:"capital",name:"Heian-kyo",at:[135.76,35.01]}
    ], terms:[{t:"China",wiki:"History of China"},{t:"Sui",wiki:"Sui dynasty"},{t:"Tang",wiki:"Tang dynasty"},{t:"Japan",wiki:"History of Japan"},{t:"Central Asia",wiki:"History of Central Asia"},{t:"Mongols",wiki:"Mongol Empire"}]},
    "ch-abbasid-caliphate": { caption:"The Abbasid turn shifts the Islamic centre from Syria toward Iraq, then regional dynasties grow around it.", bbox:[[-12,15],[82,46]], layers:[
      {type:"area",name:"Abbasid heartland",tier:"core",colour:IS,around:[[38,31],[44,34],[50,32],[47,27],[40,27]],labelAt:[44,31]},
      {type:"area",name:"al-Andalus",tier:"core",colour:IS,around:[[-8,37],[-4,42],[1,40],[-2,36]],labelAt:[-4,39]},
      {type:"area",name:"North African dynasties",tier:"conquest",colour:IS,around:[[3,31],[12,36],[22,33],[18,29]],labelAt:[12,32]},
      {type:"arrow",name:"Abbasid revolution",colour:IS,path:[[66.98,39.65],[50,36],[43.45,35.75],[44.37,33.31]],labelAt:[52,37]},
      {type:"point",symbol:"battle",name:"Great Zab",year:"750",at:[43.45,35.75]}, {type:"point",symbol:"capital",name:"Baghdad",year:"762",at:[44.37,33.31]}, {type:"point",symbol:"capital",name:"Cordoba",year:"756",at:[-4.78,37.88]}, {type:"point",symbol:"capital",name:"Cairo",year:"969",at:[31.23,30.04]}
    ], terms:[{t:"Abbasids",wiki:"Abbasid Caliphate"},{t:"Cordoba",wiki:"Caliphate of Cordoba"},{t:"Fatimids",wiki:"Fatimid Caliphate"},{t:"Baghdad",wiki:"Baghdad"}]},
    "ch-abbasid-baghdad": { caption:"Baghdad gathers court power, translation and long-distance knowledge routes.", bbox:[[25,20],[75,45]], layers:[
      {type:"route",style:"dotted",colour:ROAD,name:"Silk Road and paper route",path:[[108.94,34.26],[71.9,42.52],[66.98,39.65],[44.37,33.31]]},
      {type:"arrow",name:"Greek texts",colour:BYZ,path:[[28.98,41.01],[36,39],[44.37,33.31]],labelAt:[36,39]},
      {type:"arrow",name:"Indian numerals",colour:ASIA,path:[[75.78,23.18],[62,28],[44.37,33.31]],labelAt:[61,28]},
      {type:"arrow",name:"To al-Andalus and Toledo",colour:ROAD,path:[[44.37,33.31],[15,34],[-4.03,39.86]],labelAt:[13,35]},
      {type:"point",symbol:"capital",name:"Baghdad",year:"762",at:[44.37,33.31]}, {type:"point",symbol:"university",name:"House of Wisdom",year:"830",at:[44.37,33.31],dy:22}, {type:"point",symbol:"large-city",name:"Samarkand",year:"751",at:[66.98,39.65]}, {type:"point",symbol:"university",name:"Toledo",at:[-4.03,39.86]}
    ], terms:[{t:"House of Wisdom",wiki:"House of Wisdom"},{t:"Indian numerals",wiki:"Hindu-Arabic numeral system"},{t:"paper",wiki:"History of paper"},{t:"Toledo",wiki:"Toledo School of Translators"}]},
    "ch-ottonian-salian": { caption:"The eastern kingdom becomes an Ottonian-Salian imperial system tied to Rome, Italy and the church.", bbox:[[0,40],[20,55]], layers:[
      {type:"area",name:"Saxon royal base",tier:"core",colour:FR,around:[[8,51],[11,53],[13,51],[11,49]],labelAt:[11,51]},
      {type:"area",name:"German duchies",tier:"conquest",colour:FR,around:[[5,47],[9,52],[15,52],[16,48],[12,46],[7,46]],labelAt:[11,49]},
      {type:"arrow",name:"Italian coronation road",colour:FR,path:[[6.08,50.78],[9,47],[12.5,41.9]],labelAt:[10,46]},
      {type:"point",symbol:"battle",name:"Lechfeld",year:"955",at:[10.9,48.35]}, {type:"point",symbol:"capital",name:"Aachen",at:[6.08,50.78]}, {type:"point",symbol:"capital",name:"Rome",year:"962",at:[12.5,41.9]}, {type:"point",symbol:"large-city",name:"Gniezno",year:"1000",at:[17.03,52.54]}
    ], terms:[{t:"Otto I",wiki:"Otto I, Holy Roman Emperor"},{t:"Lechfeld",wiki:"Battle of Lechfeld"},{t:"Holy Roman Empire",wiki:"Holy Roman Empire"}]},
    "ch-church-reform": { caption:"Cluny, papal reform and the schism reshape western Christianity before the crusades.", bbox:[[-5,40],[20,55]], layers:[
      {type:"point",symbol:"monastery",name:"Cluny",year:"910",at:[4.66,46.43]}, {type:"point",symbol:"capital",name:"Rome",at:[12.5,41.9]}, {type:"point",symbol:"capital",name:"Constantinople",year:"1054",at:[28.98,41.01]},
      {type:"arrow",name:"Reform movement",colour:FR,path:[[4.66,46.43],[8,45],[12.5,41.9]],labelAt:[8,45]},
      {type:"boundary",style:"dashdot",colour:BYZ,name:"Latin-Greek church divide",path:[[16,45],[20,43],[24,41],[28.98,41.01]]}
    ], terms:[{t:"Cluny",wiki:"Cluny Abbey"},{t:"papacy",wiki:"History of the papacy"},{t:"schism",wiki:"East-West Schism"},{t:"Gregory VII",wiki:"Pope Gregory VII"}]},
    "ch-crusades": { caption:"The first crusades move through Byzantium, Anatolia and the Levant, then compress into coastal states.", bbox:[[-6,28],[42,50]], layers:[
      {type:"area",name:"Crusader states",tier:"core",colour:NORM,around:[[35.2,31.7],[35.9,33.8],[36.2,36.1],[38.8,37.2]],labelAt:[36,34]},
      {type:"area",name:"Seljuk and Ayyubid powers",tier:"conquest",colour:IS,around:[[30,33],[36,38],[41,36],[39,31],[34,30]],labelAt:[36,33]},
      {type:"arrow",name:"First Crusade route",colour:NORM,path:[[3.08,45.78],[18,43],[28.98,41.01],[29.72,40.43],[36.16,36.2],[35.21,31.77]],labelAt:[27,41]},
      {type:"arrow",name:"Third Crusade coast",colour:ROAD,path:[[32,36],[35.08,32.92],[34.75,32.05]],labelAt:[34,34]},
      {type:"point",symbol:"large-city",name:"Clermont",year:"1095",at:[3.08,45.78]}, {type:"point",symbol:"fortress",name:"Antioch",year:"1098",at:[36.16,36.2]}, {type:"point",symbol:"fortress",name:"Jerusalem",year:"1099",at:[35.21,31.77]}, {type:"point",symbol:"battle",name:"Hattin",year:"1187",at:[35.46,32.8]}, {type:"point",symbol:"fortress",name:"Acre",year:"1191",at:[35.08,32.92]}
    ], terms:[{t:"First Crusade",wiki:"First Crusade"},{t:"Saladin",wiki:"Saladin"},{t:"Hattin",wiki:"Battle of Hattin"},{t:"Acre",wiki:"Siege of Acre (1189-1191)"}]}
,
    "ch-capetian-france": { caption:"Capetian France grows from a Paris-Reims core into a kingdom that can absorb Normandy and press south.", bbox:[[-6,42],[9,52]], layers:[
      {type:"area",name:"Royal domain",tier:"core",colour:FR,around:[[2.3,48.9],[3.0,49.2],[2.7,48.2]],labelAt:[2.6,48.7]},
      {type:"area",name:"Northern gains",tier:"conquest",from:"1204",colour:FR,around:[[0,49],[1.1,49.4],[2.3,50.6],[3.8,48.8]],labelAt:[1.7,49.3]},
      {type:"area",name:"Languedoc",tier:"conquest",from:"1209",colour:NORM,around:[[1.4,43.6],[3.2,43.3],[2.3,44.0]],labelAt:[2.2,43.5]},
      {type:"point",symbol:"capital",name:"Paris",at:[2.35,48.86]}, {type:"point",symbol:"battle",name:"Bouvines",year:"1214",at:[2.34,50.58]}, {type:"point",symbol:"battle",name:"Muret",year:"1213",at:[1.33,43.46]}
    ], terms:[{t:"Capetian",wiki:"House of Capet"},{t:"Bouvines",wiki:"Battle of Bouvines"},{t:"Albigensian Crusade",wiki:"Albigensian Crusade"},{t:"Louis IX",wiki:"Louis IX of France"}]},
    "ch-angevin-england": { caption:"Angevin England is an island kingdom joined to French fiefs until John loses most of them.", bbox:[[-9,42],[5,57]], layers:[
      {type:"area",name:"England",tier:"core",colour:ENG,around:[[-3,52],[-1,54],[0,51]],labelAt:[-1.5,52.5]},
      {type:"area",name:"Angevin lands",tier:"conquest",colour:NORM,around:[[1.1,49.4],[-0.55,47.47],[0.34,46.58],[-0.58,44.84]],labelAt:[0,47]},
      {type:"arrow",name:"Norman invasion",colour:NORM,path:[[1.1,49.44],[0.49,50.91]],labelAt:[0.9,50.2]},
      {type:"boundary",style:"partition",colour:"#5f4b8b",name:"Losses to France",from:"1204",path:[[0,50],[0,48.5],[0.4,47]]},
      {type:"point",symbol:"battle",name:"Hastings",year:"1066",at:[0.49,50.91]}, {type:"point",symbol:"treaty",name:"Runnymede",year:"1215",at:[-0.57,51.44]}, {type:"point",symbol:"battle",name:"Bouvines",year:"1214",at:[2.34,50.58]}
    ], terms:[{t:"Norman",wiki:"Norman Conquest"},{t:"Angevin",wiki:"Angevin Empire"},{t:"Bouvines",wiki:"Battle of Bouvines"},{t:"Magna Carta",wiki:"Magna Carta"}]},
    "ch-hohenstaufen-empire": { caption:"The Hohenstaufen empire is strong, but its Italian cities and German dukes have bargaining power.", bbox:[[3,41],[18,55]], layers:[
      {type:"area",name:"German kingdom",tier:"core",colour:FR,around:[[7,49],[10,52],[14,50],[12,47]],labelAt:[10,50]},
      {type:"area",name:"Lombard cities",tier:"influence",colour:BYZ,around:[[8.9,45.6],[10,45.5],[11,45]],labelAt:[10,45.4]},
      {type:"arrow",name:"Italian campaigns",colour:FR,path:[[8.68,50.11],[8.9,45.6],[12.5,41.9]],labelAt:[9.2,46.5]},
      {type:"point",symbol:"battle",name:"Legnano",year:"1176",at:[8.92,45.60]}, {type:"point",symbol:"capital",name:"Rome",at:[12.5,41.9]}, {type:"point",symbol:"large-city",name:"Brunswick",at:[10.52,52.27]}
    ], terms:[{t:"Hohenstaufen",wiki:"Hohenstaufen"},{t:"Frederick Barbarossa",wiki:"Frederick Barbarossa"},{t:"Lombard League",wiki:"Lombard League"},{t:"Henry the Lion",wiki:"Henry the Lion"}]},
    "ch-reconquista": { caption:"Iberian Christian kingdoms push south as al-Andalus fragments and Almohad power breaks.", bbox:[[-10,35],[4,44]], layers:[
      {type:"area",name:"Christian kingdoms",tier:"conquest",colour:FR,around:[[-8,42],[-4,42.5],[-1,41.8]],labelAt:[-4,42]},
      {type:"area",name:"al-Andalus and Granada",tier:"core",colour:IS,around:[[-6,37],[-4,38],[-2.5,37]],labelAt:[-4,37.5]},
      {type:"arrow",name:"Castilian advance",colour:FR,path:[[-4,41],[-3.53,38.29],[-4.78,37.88],[-5.99,37.39]],labelAt:[-4.2,39]},
      {type:"point",symbol:"battle",name:"Las Navas",year:"1212",at:[-3.53,38.29]}, {type:"point",symbol:"large-city",name:"Cordoba",year:"1236",at:[-4.78,37.88]}, {type:"point",symbol:"large-city",name:"Seville",year:"1248",at:[-5.99,37.39]}
    ], terms:[{t:"Reconquista",wiki:"Reconquista"},{t:"Las Navas",wiki:"Battle of Las Navas de Tolosa"},{t:"Cordoba",wiki:"Cordoba, Spain"},{t:"Granada",wiki:"Emirate of Granada"}]},
    "ch-eastern-kingdoms": { caption:"Poland, Hungary and Rus are tied to Latin, Orthodox and steppe worlds before the Mongol shock.", bbox:[[10,42],[55,60]], layers:[
      {type:"area",name:"Poland",tier:"core",colour:ASIA,around:[[17,52],[20,51],[19,50]],labelAt:[19,51]},
      {type:"area",name:"Hungary",tier:"core",colour:NORM,around:[[18,47],[21,48],[23,46]],labelAt:[20,47]},
      {type:"area",name:"Rus principalities",tier:"influence",colour:RUS,around:[[30.52,50.45],[31.28,58.52],[37,55]],labelAt:[33,53]},
      {type:"arrow",name:"Mongol campaigns",colour:STEP,path:[[50,48],[38.5,47.1],[30.52,50.45],[20.8,48.1]],labelAt:[36,49]},
      {type:"point",symbol:"battle",name:"Kalka",year:"1223",at:[38.5,47.1]}, {type:"point",symbol:"capital",name:"Kiev",year:"1240",at:[30.52,50.45]}, {type:"point",symbol:"battle",name:"Legnica",year:"1241",at:[16.16,51.21]}, {type:"point",symbol:"battle",name:"Sajo",year:"1241",at:[20.8,48.1]}
    ], terms:[{t:"Kievan Rus",wiki:"Kievan Rus'"},{t:"Mongol",wiki:"Mongol invasion of Europe"},{t:"Golden Horde",wiki:"Golden Horde"},{t:"Russia",wiki:"History of Russia"}]},
    "ch-byzantium-basil-crisis": { caption:"Byzantium reaches a high point under Basil II, then loses Anatolia and survives as a smaller empire.", bbox:[[10,31],[46,49]], layers:[
      {type:"area",name:"Basil II's empire",tier:"core",colour:BYZ,around:[[21,40],[28.98,41.01],[36.16,36.2],[39,39],[24,37]],labelAt:[29,39]},
      {type:"area",name:"Turkish Anatolia",tier:"conquest",from:"1071",colour:IS,around:[[30,37],[36,39],[42,38],[39,35],[33,35]],labelAt:[36,37]},
      {type:"arrow",name:"Fourth Crusade",colour:NORM,from:"1204",path:[[12.33,45.44],[20,40],[28.98,41.01]],labelAt:[20,40]},
      {type:"point",symbol:"capital",name:"Constantinople",at:[28.98,41.01]}, {type:"point",symbol:"battle",name:"Manzikert",year:"1071",at:[42.53,39.15]}, {type:"point",symbol:"large-city",name:"Ohrid",year:"1018",at:[20.8,41.1]}
    ], terms:[{t:"Basil II",wiki:"Basil II"},{t:"Manzikert",wiki:"Battle of Manzikert"},{t:"Fourth Crusade",wiki:"Fourth Crusade"},{t:"Constantinople",wiki:"Constantinople"}]},
    "ch-medieval-trade-networks": { caption:"The Hansa, Venice and Genoa join northern towns, Rus, the Black Sea and the spice routes.", bbox:[[-6,29],[43,61]], layers:[
      {type:"route",style:"dotted",colour:ROAD,name:"Hanseatic route",path:[[31.28,58.52],[24.11,56.95],[10.69,53.87],[3.22,51.21],[-0.13,51.51]]},
      {type:"route",style:"dotted",colour:NORM,name:"Italian sea routes",path:[[12.33,45.44],[28.98,41.01],[34.1,45.03],[39.7,47.2]]},
      {type:"route",style:"dotted",colour:ASIA,name:"Spice route into Alexandria",path:[[35.5,33.89],[29.92,31.2],[12.33,45.44]]},
      {type:"point",symbol:"port",name:"Lubeck",at:[10.69,53.87]}, {type:"point",symbol:"large-city",name:"Novgorod",at:[31.28,58.52]}, {type:"point",symbol:"port",name:"Venice",at:[12.33,45.44]}, {type:"point",symbol:"port",name:"Genoa",at:[8.93,44.41]}, {type:"point",symbol:"port",name:"Alexandria",at:[29.92,31.2]}, {type:"point",symbol:"port",name:"Caffa",year:"1347",at:[34.1,45.03]}
    ], terms:[{t:"Hansa",wiki:"Hanseatic League"},{t:"Venice",wiki:"Republic of Venice"},{t:"Genoa",wiki:"Republic of Genoa"},{t:"Novgorod",wiki:"Novgorod Republic"},{t:"Black Death",wiki:"Black Death"}]},
    "ch-hundred-years-war": { caption:"English victories create a treaty map; Joan of Arc and French recovery reverse it.", bbox:[[-6,42],[8,52]], layers:[
      {type:"area",name:"English lands after Bretigny",tier:"conquest",colour:ENG,around:[[-1,45],[0.34,46.58],[-0.58,44.84]],labelAt:[-0.3,45.5]},
      {type:"area",name:"Burgundy",tier:"influence",colour:IS,around:[[3,47],[5,49],[6,48]],labelAt:[5,48]},
      {type:"arrow",name:"French recovery",colour:FR,path:[[1.91,47.9],[4.03,49.26],[1.1,49.44],[-0.04,44.85]],labelAt:[2,48]},
      {type:"point",symbol:"battle",name:"Crecy",year:"1346",at:[1.88,50.26]}, {type:"point",symbol:"battle",name:"Poitiers",year:"1356",at:[0.34,46.58]}, {type:"point",symbol:"fortress",name:"Orleans",year:"1429",at:[1.91,47.9]}, {type:"point",symbol:"battle",name:"Castillon",year:"1453",at:[-0.04,44.85]}
    ], terms:[{t:"Hundred Years War",wiki:"Hundred Years' War"},{t:"Crecy",wiki:"Battle of Crecy"},{t:"Joan of Arc",wiki:"Joan of Arc"},{t:"Castillon",wiki:"Battle of Castillon"}]}

  };
})();
