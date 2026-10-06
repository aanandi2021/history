// The Middle Ages, AD 500-1500. Round 6 starts the period with pp. 114-133.
(function () {
  const S = {
    canada: "Canada and the Americas, AD 500-1500",
    west: "Western Europe after Rome",
    kingdoms: "Successor kingdoms around 500",
    franks: "Franks, Merovingians and Carolingians",
    england: "England to 1066",
    normans: "Normans and Vikings",
    byz: "Byzantium and the eastern Roman world",
    justinian: "Justinian's reconquest",
    islam: "Early Islam and the caliphates",
    steppe: "Steppe peoples and Rus",
    kievan: "Kievan Rus and the routes north",
    asia: "Asia in the medieval centuries"
  };
  const E = (lane, date, title, at, extra) => Object.assign({ lane, date, title, at }, extra || {});
  const events = [
    E("canada","0500","Late Dorset life in the Arctic",[-75,67],{approx:true,end:"1200",section:S.canada,wiki:"Dorset culture",text:"Dorset communities lived across the eastern Arctic before the Thule Inuit expansion. This keeps the Americas in view while Europe rebuilds after Rome."}),
    E("canada","0600","Hopewell exchange fades in the eastern woodlands",[-83,39],{approx:true,section:S.canada,wiki:"Hopewell tradition",text:"The older mound-and-exchange world south of the Great Lakes weakened, but later woodland communities kept long-distance ties alive."}),
    E("canada","0650","Maya city-states reach their Classic height",[-89.62,17.22],{approx:true,end:"0800",section:S.canada,wiki:"Classic Maya collapse",text:"Cities such as Tikal and Calakmul were large, literate and politically competitive while the Franks and Byzantines fought in the Mediterranean."}),
    E("canada","0700","Mississippian ancestors begin maize-centred villages",[-89.9,38.65],{approx:true,section:S.canada,wiki:"Mississippian culture",text:"Maize farming and platform-mound towns began to grow in the Mississippi valley."}),
    E("canada","0750","Ancestral Pueblo towns grow in the Southwest",[-107.96,37.18],{approx:true,end:"1150",section:S.canada,wiki:"Ancestral Puebloans",text:"Pueblo communities built planned settlements, roads and ritual spaces in the American Southwest."}),
    E("canada","0900","Cahokia begins to rise",[-90.06,38.66],{approx:true,end:"1250",section:S.canada,wiki:"Cahokia",text:"Cahokia near today's St. Louis became the largest city north of Mexico before European contact."}),
    E("canada","0985","Norse settle Greenland",[-45.42,61.14],{approx:true,section:S.canada,wiki:"Norse colonization of North America",text:"Norse farmers crossed from Iceland to Greenland, putting the North Atlantic into the same Viking world as Britain and Normandy."}),
    E("canada","1000","Norse reach L'Anse aux Meadows",[-55.53,51.59],{approx:true,section:S.canada,wiki:"L'Anse aux Meadows",text:"A short-lived Norse site in Newfoundland is the first known European settlement in the Americas."}),
    E("canada","1100","Thule Inuit expansion begins",[-95,70],{approx:true,end:"1300",section:S.canada,wiki:"Thule people",text:"Ancestors of the Inuit spread east across the Arctic with large open-water boats, dog sleds and bowhead-whale hunting."}),
    E("canada","1325","Tenochtitlan founded",[-99.13,19.43],{approx:true,section:S.canada,wiki:"Tenochtitlan",text:"The Mexica built an island capital that would become the centre of the Aztec empire."}),
    E("canada","1438","Inca expansion begins",[-71.98,-13.52],{section:S.canada,wiki:"Inca Empire",text:"From Cusco, the Inca built a highland empire of roads, storehouses and labour obligations."}),
    E("canada","1492","Columbus reaches the Caribbean",[-74.5,24.0],{section:S.canada,wiki:"Voyages of Christopher Columbus",text:"The Atlantic crossing opens the next period's violent connection between Afro-Eurasia and the Americas."}),

    E("west","0500","Clovis defeats Syagrius at Soissons",[3.32,49.38],{section:S.franks,wiki:"Battle of Soissons (486)",text:"Clovis removed the last Roman military pocket in northern Gaul and made the Franks the main power there."}),
    E("west","0500","Clovis is baptized",[4.03,49.26],{approx:true,section:S.franks,wiki:"Clovis I",text:"Clovis's Catholic baptism mattered because most other Germanic rulers were Arian Christians, putting the Franks closer to Gallo-Roman bishops."}),
    E("west","0507","Vouille: Franks beat the Visigoths",[0.17,46.64],{section:S.franks,wiki:"Battle of Vouille",text:"The victory pushed Visigothic power out of most of Gaul and opened Aquitaine to the Franks."}),
    E("west","0534","Franks absorb Burgundy",[5.04,47.32],{section:S.franks,wiki:"Kingdom of Burgundy",text:"Burgundy became part of the Frankish political world after years of Merovingian pressure."}),
    E("west","0568","Lombards enter Italy",[13.24,45.75],{section:S.kingdoms,wiki:"Lombards",text:"The Lombards took much of northern Italy after Justinian's reconquest, leaving Italy divided among Lombards, Byzantines and the papacy."}),
    E("west","0711","Muslim army crosses into Iberia",[-5.35,36.14],{section:S.islam,wiki:"Umayyad conquest of Hispania",text:"Tariq ibn Ziyad crossed from North Africa and began the conquest of Visigothic Spain."}),
    E("west","0732","Tours-Poitiers",[0.68,47.39],{section:S.franks,wiki:"Battle of Tours",text:"Charles Martel defeated a raiding army from al-Andalus; later writers made this a symbol of Frankish and Christian defence."}),
    E("west","0751","Pepin becomes king of the Franks",[2.25,48.9],{section:S.franks,wiki:"Pepin the Short",text:"Pepin replaced the last Merovingian king and gave the Carolingians royal title, with papal backing."}),
    E("west","0774","Charlemagne conquers the Lombards",[9.19,45.46],{section:S.franks,wiki:"Charlemagne",text:"Charlemagne took the Lombard crown and made northern Italy part of the Carolingian system."}),
    E("west","0778","Roncesvalles",[-1.3,43.01],{section:S.franks,wiki:"Battle of Roncevaux Pass",text:"A failed campaign in Spain became, in memory, the story of Roland and the rear guard."}),
    E("west","0800-12-25","Charlemagne crowned emperor",[12.5,41.9],{section:S.franks,wiki:"Coronation of Charlemagne",text:"The pope crowned Charlemagne in Rome, joining Frankish military power to an older Roman imperial language."}),
    E("west","0843","Treaty of Verdun",[5.38,49.16],{section:S.franks,wiki:"Treaty of Verdun",text:"Charlemagne's grandsons divided the empire into western, middle and eastern kingdoms. The map begins to suggest France, Germany and a contested middle."}),
    E("west","0871","Alfred becomes king of Wessex",[-1.32,51.06],{section:S.england,wiki:"Alfred the Great",text:"Alfred survived the Danish wars and helped make Wessex the core of a larger English kingdom."}),
    E("west","0911","Normandy granted to Rollo",[1.1,49.44],{section:S.normans,wiki:"Rollo",text:"A Viking leader received land at the Seine mouth; his followers became the Normans."}),
    E("west","1066-10-14","Hastings",[0.49,50.91],{section:S.england,wiki:"Battle of Hastings",text:"William of Normandy defeated Harold Godwinson. England was pulled sharply into the French and Norman political world."}),

    E("byz","0527","Justinian becomes emperor",[28.98,41.01],{section:S.justinian,wiki:"Justinian I",text:"Justinian tried to restore Roman rule in the west while also codifying Roman law and building in Constantinople."}),
    E("byz","0532","Nika revolt and Hagia Sophia",[28.98,41.01],{section:S.justinian,wiki:"Nika riots",text:"After a huge riot, Justinian rebuilt Hagia Sophia as a statement of imperial and Christian authority."}),
    E("byz","0533","Belisarius lands in North Africa",[10.31,36.85],{section:S.justinian,wiki:"Vandalic War",text:"Belisarius destroyed the Vandal kingdom and brought Carthage back under Roman rule."}),
    E("byz","0535","Gothic War begins in Italy",[15.08,37.51],{section:S.justinian,wiki:"Gothic War (535-554)",text:"Justinian's armies attacked Ostrogothic Italy from Sicily and the Adriatic."}),
    E("byz","0540","Ravenna taken",[12.2,44.42],{section:S.justinian,wiki:"Ravenna",text:"Belisarius entered Ravenna, the old western imperial capital, but the war in Italy continued for years."}),
    E("byz","0552","Taginae breaks Ostrogothic power",[12.77,43.35],{section:S.justinian,wiki:"Battle of Taginae",text:"Narses defeated Totila; the Ostrogothic kingdom collapsed soon after."}),
    E("byz","0626","Avars and Persians threaten Constantinople",[28.98,41.01],{section:S.byz,wiki:"Siege of Constantinople (626)",text:"The capital survived a coordinated crisis, showing the eastern empire's resilience before the Arab conquests."}),
    E("byz","0717","Constantinople withstands an Arab siege",[28.98,41.01],{section:S.byz,wiki:"Siege of Constantinople (717-718)",text:"Byzantine defence blocked an Umayyad attempt to take the capital and kept the empire alive."}),

    E("islam","0610","Muhammad's first revelations",[39.83,21.42],{approx:true,section:S.islam,wiki:"Muhammad",text:"Islam began in western Arabia and quickly became both a religion and a political community."}),
    E("islam","0622","Hijra to Medina",[39.61,24.47],{section:S.islam,wiki:"Hijrah",text:"The move from Mecca to Medina became year one of the Islamic calendar."}),
    E("islam","0636","Yarmuk",[35.95,32.8],{section:S.islam,wiki:"Battle of the Yarmuk",text:"Arab armies defeated Byzantium in Syria, opening the Levant to the caliphate."}),
    E("islam","0642","Egypt becomes part of the caliphate",[31.23,30.04],{section:S.islam,wiki:"Muslim conquest of Egypt",text:"Taking Egypt removed one of Byzantium's richest provinces and linked the caliphate to the grain and tax base of the Nile."}),
    E("islam","0661","Umayyad caliphate begins",[36.31,33.51],{section:S.islam,wiki:"Umayyad Caliphate",text:"The Umayyads ruled from Damascus and turned conquest into an empire from Spain to Central Asia."}),
    E("islam","0750","Abbasids overthrow the Umayyads",[42.1,36.34],{section:S.islam,wiki:"Abbasid Revolution",text:"The Abbasids shifted the centre of the caliphate eastward and soon built Baghdad."}),
    E("islam","0762","Baghdad founded",[44.37,33.31],{section:S.islam,wiki:"Baghdad",text:"Baghdad became the Abbasid capital and one of the great cities of the medieval world. This links forward to the Maritime Asia period."}),
    E("islam","0929","Caliphate of Cordoba proclaimed",[-4.78,37.88],{section:S.islam,wiki:"Caliphate of Cordoba",text:"Abd al-Rahman III claimed caliphal title in al-Andalus, making Iberia one centre of the wider Islamic world."}),

    E("steppe","0500","After Attila, Hun power has broken apart",[4.1,48.3],{section:S.steppe,wiki:"Huns",text:"Attila had been checked in Gaul in 451. By 500 his empire had broken apart, but steppe pressure still mattered."}),
    E("steppe","0552","Turkic Khaganate forms",[89,47],{approx:true,section:S.steppe,wiki:"First Turkic Khaganate",text:"Turkic power reshaped the steppe routes between China, Iran and Byzantium."}),
    E("steppe","0630","Khazars emerge north of the Caucasus",[47.5,44.5],{approx:true,section:S.steppe,wiki:"Khazars",text:"The Khazars controlled routes between the Black Sea, Caspian and Volga worlds."}),
    E("steppe","0860","Rus raid Constantinople",[28.98,41.01],{approx:true,section:S.kievan,wiki:"Rus' attack on Constantinople (860)",text:"The raid shows the river-and-sea route that connected Scandinavia, Kiev, Byzantium and the Black Sea."}),
    E("steppe","0882","Oleg takes Kiev",[30.52,50.45],{approx:true,section:S.kievan,wiki:"Oleg the Wise",text:"Kiev became the main centre of the Rus route system from the Baltic to Byzantium."}),
    E("steppe","0988","Vladimir accepts Byzantine Christianity",[30.52,50.45],{approx:true,section:S.kievan,wiki:"Christianization of Kievan Rus'",text:"Kievan Rus entered the Orthodox Christian world through Byzantium, a root of later Russian history."}),
    E("steppe","1019","Yaroslav the Wise rules Kiev",[30.52,50.45],{section:S.kievan,wiki:"Yaroslav the Wise",text:"Kiev was tied by marriage, trade and church links to both Byzantium and western Europe."}),

    E("asia","0589","Sui reunify China",[108.94,34.26],{section:S.asia,wiki:"Sui dynasty",text:"After centuries of division, China was reunited under the Sui, setting up the Tang world."}),
    E("asia","0618","Tang dynasty begins",[108.94,34.26],{section:S.asia,wiki:"Tang dynasty",text:"Tang China became a major Eurasian power whose capital, Chang'an, connected to Central Asian routes."}),
    E("asia","0645","Taika reforms in Japan",[135.76,35.01],{approx:true,section:S.asia,wiki:"Taika Reform",text:"Japan's court borrowed Chinese-style institutions while adapting them to local aristocratic politics."}),
    E("asia","0711","Nara capital founded",[135.8,34.68],{section:S.asia,wiki:"Nara period",text:"Nara was Japan's first permanent capital on a Chinese model."}),
    E("asia","0751","Talas",[71.9,42.52],{section:S.asia,wiki:"Battle of Talas",text:"Abbasid and Tang forces met in Central Asia, a reminder that the caliphate and China touched the same inner Asian routes."}),
    E("asia","0794","Heian-kyo founded",[135.76,35.01],{section:S.asia,wiki:"Heian-kyo",text:"The Heian court became the centre of classical Japanese aristocratic culture."}),
    E("asia","1206","Temujin becomes Chinggis Khan",[103.8,47.9],{section:S.asia,wiki:"Genghis Khan",text:"The Mongol empire belongs to a later medieval round, but this period is designed to carry the story through 1500."})
  ];
  const R = (name,country,side,start,end,section,extra)=>Object.assign({name,country,side,start,end,wiki:name,lifeUnknown:true},section?{section}:{},extra||{});
  const leaders = [
    R("Clovis I","Franks","franks","0481","0511",S.franks,{wiki:"Clovis I"}), R("Theodoric the Great","Ostrogoths","goths","0475","0526",S.kingdoms,{wiki:"Theodoric the Great"}),
    R("Justinian I","Byzantine Empire","byz","0527","0565",S.justinian,{wiki:"Justinian I"}), R("Belisarius","Byzantine Empire","byz","0527","0565",S.justinian,{wiki:"Belisarius"}),
    R("Muhammad","Medina","islam","0622","0632",S.islam,{wiki:"Muhammad"}), R("Mu'awiya I","Umayyad Caliphate","islam","0661","0680",S.islam,{wiki:"Mu'awiya I"}),
    R("Charles Martel","Franks","franks","0718","0741",S.franks,{wiki:"Charles Martel"}), R("Pepin the Short","Franks","franks","0751","0768",S.franks,{wiki:"Pepin the Short"}),
    R("Charlemagne","Carolingian Empire","franks","0768","0814",S.franks,{wiki:"Charlemagne"}), R("Harun al-Rashid","Abbasid Caliphate","islam","0786","0809",S.islam,{wiki:"Harun al-Rashid"}),
    R("Louis the Pious","Carolingian Empire","franks","0814","0840",S.franks,{wiki:"Louis the Pious"}), R("Alfred the Great","Wessex","england","0871","0899",S.england,{wiki:"Alfred the Great"}),
    R("Oleg","Kievan Rus","rus","0882","0912",S.kievan,{wiki:"Oleg the Wise"}), R("Otto I","East Francia","franks","0936","0973",S.franks,{wiki:"Otto I, Holy Roman Emperor"}),
    R("Vladimir the Great","Kievan Rus","rus","0980","1015",S.kievan,{wiki:"Vladimir the Great"}), R("Yaroslav the Wise","Kievan Rus","rus","1019","1054",S.kievan,{wiki:"Yaroslav the Wise"}),
    R("William the Conqueror","England and Normandy","normans","1035","1087",S.england,{wiki:"William the Conqueror"})
  ];
  const chapters = [
    {id:"ch-western-europe",title:"Western Europe after Rome",start:"0500",end:"1130",bbox:[[-10,35],[25,57]],section:S.west,text:"Western Europe did not restart from zero after Rome. Roman law, bishops, roads and tax habits survived unevenly inside new kingdoms. The Franks became the strongest western power, Charlemagne briefly rebuilt an imperial frame, and England moved from Anglo-Saxon kingdoms through Viking war to Norman conquest."},
    {id:"ch-barbarian-kingdoms",title:"Successor kingdoms around 500",start:"0500",end:"0568",parent:"ch-western-europe",plate:"barbarian-kingdoms",bbox:[[-10,30],[35,57]],section:S.kingdoms,text:"Around 500 the western empire was a map of successor kingdoms: Franks in northern Gaul, Visigoths in Spain, Ostrogoths in Italy, Vandals in North Africa, Burgundians in the Rhone valley and Anglo-Saxons in Britain. They were not outside Roman history. They ruled Roman land, used Roman taxes where they could, and bargained with bishops and emperors."},
    {id:"ch-franks-carolingians",title:"Franks and Carolingians",start:"0500",end:"0880",parent:"ch-western-europe",plate:"carolingian-partition",bbox:[[-6,36],[18,55]],section:S.franks,text:"The Franks grew from a Rhine frontier people into the strongest western kingdom. Clovis joined Frankish force to Catholic legitimacy. The Carolingians then took royal title, allied with the papacy, conquered Saxony and Lombard Italy, and made Charlemagne emperor. The Treaty of Verdun divided that empire among his grandsons, leaving a western kingdom, an eastern kingdom and a fragile middle."},
    {id:"ch-england-to-1066",title:"England to 1066",start:"0500",end:"1066",parent:"ch-western-europe",bbox:[[-8,49],[3,59]],section:S.england,text:"Britain moved from Roman provinces to Anglo-Saxon kingdoms. Viking armies then forced consolidation around Wessex, where Alfred fought back and his successors built a more unified England. In 1066 Harold Godwinson beat a Norwegian invasion at Stamford Bridge and then lost to William of Normandy at Hastings."},
    {id:"ch-normans-vikings",title:"Normans and Vikings",start:"0790",end:"1130",parent:"ch-western-europe",bbox:[[-25,35],[35,65]],section:S.normans,text:"Viking movement was trade, raiding, settlement and state-building. Scandinavians reached Britain, Ireland, Iceland, Greenland, the Seine, the Volga and the Black Sea. In Normandy, a Viking settlement became a French-speaking duchy; in 1066 that duchy conquered England."},
    {id:"ch-byzantium",title:"Byzantium and the eastern Roman world",start:"0500",end:"1204",bbox:[[10,28],[45,47]],section:S.byz,text:"The eastern empire stayed Roman in law and imperial language, centred on Constantinople. It survived Justinian's expensive reconquest, Persian war, Arab conquest and repeated sieges. It also connected the Mediterranean to the steppe and to Kievan Rus."},
    {id:"ch-justinian-reconquest",title:"Justinian's reconquest",start:"0527",end:"0565",parent:"ch-byzantium",plate:"justinian-reconquest",bbox:[[-8,28],[35,47]],section:S.justinian,text:"Justinian tried to restore Roman rule around the Mediterranean. Belisarius took Vandal North Africa, then Sicily and Italy. Narses finished the Ostrogothic war. The reconquest made the Roman claim visible again, but Italy was devastated and the Lombards soon took much of the north."},
    {id:"ch-early-islam",title:"Early Islam and the caliphates",start:"0610",end:"0929",bbox:[[-10,15],[75,45]],section:S.islam,text:"Islam began in Arabia and quickly became an empire. Arab armies defeated Byzantium and Persia, took Syria and Egypt, crossed North Africa and entered Spain. The Umayyads ruled from Damascus; the Abbasids moved the centre to Iraq and made Baghdad a world city, linking this story to Maritime Asia."},
    {id:"ch-steppe-rus",title:"Steppe peoples and Kievan Rus",start:"0500",end:"1100",bbox:[[5,38],[65,58]],section:S.steppe,text:"The steppe was not empty space around Europe. Huns, Avars, Bulgars, Khazars, Magyars and Pechenegs shaped the borders of Byzantium, the Franks and Rus. The Kievan Rus grew along river routes from the Baltic to the Black Sea, a root of the later Russia period."},
    {id:"ch-kievan-rus",title:"Kievan Rus and the routes north",start:"0860",end:"1054",parent:"ch-steppe-rus",bbox:[[20,43],[45,57]],section:S.kievan,text:"Kievan Rus was a river-route power between Scandinavia and Byzantium. Kiev controlled the Dnieper road to the Black Sea. Vladimir's conversion tied Rus to Orthodox Christianity, which matters later for Muscovy and Russia."},
    {id:"ch-medieval-asia",title:"Asia in the early medieval world",start:"0589",end:"1206",bbox:[[65,5],[145,55]],section:S.asia,text:"While western Europe rebuilt, China reunified under Sui and Tang rule, Japan borrowed and adapted Chinese court models, and Central Asia linked Tang, Turkic and Islamic worlds. Later rounds will carry this lane into the Mongols and the wider Asian medieval world."}
  ];
  const B=(title,author,start,end,section,extra)=>Object.assign({title,author,start,end,owned:false},section?{section}:{},extra||{});
  const books=[
    B("The Inheritance of Rome","Chris Wickham","0400","1000",S.west), B("The Formation of Christendom","Judith Herrin","0500","1000",S.byz),
    B("Charlemagne","Johannes Fried","0742","0814",S.franks), B("The Carolingian World","Marios Costambeys, Matthew Innes and Simon MacLean","0750","0900",S.franks),
    B("Justinian's Flea","William Rosen","0527","0565",S.justinian), B("The New Cambridge Medieval History, Volume II","Rosamond McKitterick","0700","0900",S.west),
    B("Muhammad and the Believers","Fred M. Donner","0610","0661",S.islam), B("The Great Arab Conquests","Hugh Kennedy","0630","0750",S.islam),
    B("The Vikings","Else Roesdahl","0790","1066",S.normans), B("The Anglo-Saxons","Marc Morris","0400","1066",S.england),
    B("The Making of Europe","Robert Bartlett","0950","1350",S.west), B("Russia in the Early Middle Ages","Janet Martin","0860","1240",S.kievan),
    B("1491","Charles C. Mann","0500","1500",S.canada), B("Canada's First Nations","Olive Dickason","0500","1500",S.canada,{canadian:true})
  ];
  window.DATASETS = window.DATASETS || {};
  window.DATASETS.medieval = {
    id:"medieval", title:"The Middle Ages", subtitle:"AD 500-1500", range:["0500-01-01","1501-01-01"], startAt:"0800", precision:"year",
    mapNote:"No historical borders. Areas show influence, settlement or claims at the scale of the story. This period deliberately overlaps late antiquity from AD 500 to 700.",
    lanes:[{id:"canada",label:"Canada & the Americas",pinned:true},{id:"west",label:"Western Europe"},{id:"byz",label:"Byzantium"},{id:"islam",label:"Islamic world"},{id:"steppe",label:"Steppe & Rus"},{id:"asia",label:"Asia"}],
    events, leaders, chapters, books,
    plates:[{id:"barbarian-kingdoms",title:"The barbarian kingdoms around 500",start:"0486",end:"0568"},{id:"justinian-reconquest",title:"Justinian's reconquest",start:"0527",end:"0565"},{id:"carolingian-partition",title:"Charlemagne and the Treaty of Verdun",start:"0751",end:"0880"}],
    colours:{lanes:{canada:"#b22d2d",west:"#7a5a8c",byz:"#d66a4a",islam:"#6b8c3f",steppe:"#6b6b6b",asia:"#b36b2e"},sides:{franks:"#7a5a8c",goths:"#5b78a8",vandals:"#2f7f86",byz:"#d66a4a",islam:"#6b8c3f",rus:"#9a6a38",normans:"#c58b32",england:"#8c3b3b"}},
    changelog:[{date:"2026-10-06",text:"Round 6: opened the medieval period with successor kingdoms, Justinian, Islam, Franks, Vikings and Kievan Rus roots."}]
  };
})();
