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
    {id:"ch-western-europe",title:"Western Europe after Rome",start:"0500",end:"1500",bbox:[[-10,35],[25,57]],section:S.west,text:"Western Europe did not restart from zero after Rome. Roman law, bishops, roads and tax habits survived unevenly inside new kingdoms. The Franks became the strongest western power, Charlemagne briefly rebuilt an imperial frame, and England moved from Anglo-Saxon kingdoms through Viking war to Norman conquest."},
    {id:"ch-barbarian-kingdoms",title:"Successor kingdoms around 500",start:"0500",end:"0568",parent:"ch-western-europe",plate:"barbarian-kingdoms",bbox:[[-10,30],[35,57]],section:S.kingdoms,text:"Around 500 the western empire was a map of successor kingdoms: Franks in northern Gaul, Visigoths in Spain, Ostrogoths in Italy, Vandals in North Africa, Burgundians in the Rhone valley and Anglo-Saxons in Britain. They were not outside Roman history. They ruled Roman land, used Roman taxes where they could, and bargained with bishops and emperors."},
    {id:"ch-franks-carolingians",title:"Franks and Carolingians",start:"0500",end:"0880",parent:"ch-western-europe",plate:"carolingian-partition",bbox:[[-6,36],[18,55]],section:S.franks,text:"The Franks grew from a Rhine frontier people into the strongest western kingdom. Clovis joined Frankish force to Catholic legitimacy. The Carolingians then took royal title, allied with the papacy, conquered Saxony and Lombard Italy, and made Charlemagne emperor. The Treaty of Verdun divided that empire among his grandsons, leaving a western kingdom, an eastern kingdom and a fragile middle."},
    {id:"ch-england-to-1066",title:"England to 1066",start:"0500",end:"1066",parent:"ch-western-europe",bbox:[[-8,49],[3,59]],section:S.england,text:"Britain moved from Roman provinces to Anglo-Saxon kingdoms. Viking armies then forced consolidation around Wessex, where Alfred fought back and his successors built a more unified England. In 1066 Harold Godwinson beat a Norwegian invasion at Stamford Bridge and then lost to William of Normandy at Hastings."},
    {id:"ch-normans-vikings",title:"Normans and Vikings",start:"0790",end:"1130",parent:"ch-western-europe",bbox:[[-25,35],[35,65]],section:S.normans,text:"Viking movement was trade, raiding, settlement and state-building. Scandinavians reached Britain, Ireland, Iceland, Greenland, the Seine, the Volga and the Black Sea. In Normandy, a Viking settlement became a French-speaking duchy; in 1066 that duchy conquered England."},
    {id:"ch-byzantium",title:"Byzantium and the eastern Roman world",start:"0500",end:"1453",bbox:[[10,28],[45,47]],section:S.byz,text:"The eastern empire stayed Roman in law and imperial language, centred on Constantinople. It survived Justinian's expensive reconquest, Persian war, Arab conquest and repeated sieges. It also connected the Mediterranean to the steppe and to Kievan Rus."},
    {id:"ch-justinian-reconquest",title:"Justinian's reconquest",start:"0527",end:"0565",parent:"ch-byzantium",plate:"justinian-reconquest",bbox:[[-8,28],[35,47]],section:S.justinian,text:"Justinian tried to restore Roman rule around the Mediterranean. Belisarius took Vandal North Africa, then Sicily and Italy. Narses finished the Ostrogothic war. The reconquest made the Roman claim visible again, but Italy was devastated and the Lombards soon took much of the north."},
    {id:"ch-early-islam",title:"Early Islam and the caliphates",start:"0610",end:"1055",bbox:[[-10,15],[75,45]],section:S.islam,text:"Islam began in Arabia and quickly became an empire. Arab armies defeated Byzantium and Persia, took Syria and Egypt, crossed North Africa and entered Spain. The Umayyads ruled from Damascus; the Abbasids moved the centre to Iraq and made Baghdad a world city, linking this story to Maritime Asia."},
    {id:"ch-steppe-rus",title:"Steppe peoples and Kievan Rus",start:"0500",end:"1300",bbox:[[5,38],[65,58]],section:S.steppe,text:"The steppe was not empty space around Europe. Huns, Avars, Bulgars, Khazars, Magyars and Pechenegs shaped the borders of Byzantium, the Franks and Rus. The Kievan Rus grew along river routes from the Baltic to the Black Sea, a root of the later Russia period."},
    {id:"ch-kievan-rus",title:"Kievan Rus and the routes north",start:"0860",end:"1054",parent:"ch-steppe-rus",bbox:[[20,43],[45,57]],section:S.kievan,text:"Kievan Rus was a river-route power between Scandinavia and Byzantium. Kiev controlled the Dnieper road to the Black Sea. Vladimir's conversion tied Rus to Orthodox Christianity, which matters later for Muscovy and Russia."},
    {id:"ch-medieval-asia",title:"Asia in the early medieval world",start:"0589",end:"1206",bbox:[[65,5],[145,55]],section:S.asia,text:"While western Europe rebuilt, China reunified under Sui and Tang rule, Japan borrowed and adapted Chinese court models, and Central Asia linked Tang, Turkic and Islamic worlds. Later rounds will carry this lane into the Mongols and the wider Asian medieval world."}
  ];

  Object.assign(S, {
    abbasid: "Abbasids and the Islamic world after 750",
    baghdad: "Baghdad and the House of Wisdom",
    ottonian: "Ottonian and Salian Germany",
    church: "Monastic reform, papacy and Latin church",
    crusades: "The Crusades and the eastern Mediterranean"
  });
  events.push(
    E("islam","0750","Abbasids win at the Great Zab",[43.45,35.75],{section:S.abbasid,wiki:"Abbasid Revolution",text:"The Abbasids destroyed Umayyad rule in the east and moved the centre of the caliphate toward Iraq and Iran."}),
    E("islam","0751","Talas links Abbasid and Tang worlds",[71.9,42.52],{section:S.abbasid,wiki:"Battle of Talas",text:"Abbasid and Tang armies met in Central Asia. The battle matters here because paper-making and Central Asian skills moved west through Samarkand toward Baghdad."}),
    E("islam","0756","Umayyad emirate founded in Cordoba",[-4.78,37.88],{section:S.abbasid,wiki:"Emirate of Cordoba",text:"An Umayyad survivor built a western Islamic state in Iberia after the Abbasid victory in the east."}),
    E("islam","0762","Al-Mansur founds Baghdad",[44.37,33.31],{section:S.baghdad,wiki:"Round city of Baghdad",text:"The Abbasids built a new round capital on the Tigris. Baghdad sat where Persian, Greek, Indian and Central Asian learning could be gathered and translated.", aha:[{book:"golden-road",heading:"Indian numerals reaching Baghdad"}]}),
    E("islam","0786","Harun al-Rashid rules from Baghdad",[44.37,33.31],{end:"0809",section:S.baghdad,wiki:"Harun al-Rashid",text:"Harun's court became the later symbol of Abbasid wealth and scholarship, even as governors at the edges of the empire grew more independent."}),
    E("islam","0801","Aghlabids rule Ifriqiya from Kairouan",[10.10,35.68],{section:S.abbasid,wiki:"Aghlabids",text:"North Africa was still connected to the Abbasid world, but local dynasties increasingly governed on their own."}),
    E("islam","0813","Al-Ma'mun takes Baghdad after civil war",[44.37,33.31],{section:S.baghdad,wiki:"Fourth Fitna",text:"The civil war between al-Amin and al-Ma'mun showed that Abbasid politics could be fought over the city itself."}),
    E("islam","0830","House of Wisdom flourishes",[44.37,33.31],{approx:true,section:S.baghdad,wiki:"House of Wisdom",text:"Translators and scholars in Baghdad worked with Greek philosophy, Persian court learning, Indian mathematics and astronomy, and paper technology from Central Asia.", aha:[{book:"golden-road",heading:"Indian numerals reaching Baghdad"}]}),
    E("islam","0868","Tulunids take power in Egypt",[31.23,30.04],{section:S.abbasid,wiki:"Tulunids",text:"Egypt became one of the first large provinces to slip from direct Abbasid control while still belonging to the Islamic political world."}),
    E("islam","0909","Fatimids rise in North Africa",[10.10,35.68],{section:S.abbasid,wiki:"Fatimid Caliphate",text:"The Fatimids claimed descent from Fatima and challenged Abbasid religious authority as well as their politics."}),
    E("islam","0969","Fatimids found Cairo",[31.23,30.04],{section:S.abbasid,wiki:"Cairo",text:"Cairo became the capital of a rival Shi'a caliphate and a new centre of power in the eastern Mediterranean."}),
    E("islam","1055","Seljuks enter Baghdad",[44.37,33.31],{section:S.abbasid,wiki:"Seljuk Empire",text:"Turkic military power took over the protection of the Abbasid caliph, leaving the caliph spiritually important but politically dependent."}),

    E("west","0911","Conrad I chosen in East Francia",[10.0,49.7],{section:S.ottonian,wiki:"Conrad I of Germany",text:"When the eastern Carolingian line ended, the leading nobles chose Conrad. The eastern kingdom was becoming a German political world."}),
    E("west","0919","Henry the Fowler becomes king",[11.0,51.8],{section:S.ottonian,wiki:"Henry the Fowler",text:"Henry worked with the great duchies and prepared a stronger Saxon monarchy."}),
    E("west","0933","Henry defeats Magyars at Riade",[11.7,51.2],{section:S.ottonian,wiki:"Battle of Riade",text:"Henry bought time, built fortified places and cavalry forces, then checked Magyar raiding."}),
    E("west","0955","Otto I defeats the Magyars at Lechfeld",[10.9,48.35],{section:S.ottonian,wiki:"Battle of Lechfeld",text:"Lechfeld ended the worst Magyar pressure on Germany and helped Otto claim the role of defender of Latin Christendom."}),
    E("west","0962","Otto I crowned emperor in Rome",[12.5,41.9],{section:S.ottonian,wiki:"Otto I, Holy Roman Emperor",text:"Otto joined the German kingship to imperial coronation in Rome, creating the Ottonian empire's western claim."}),
    E("west","1000","Otto III visits Gniezno",[17.03,52.54],{section:S.ottonian,wiki:"Congress of Gniezno",text:"Otto recognized a Polish church centre at Gniezno, showing that empire, mission and new Christian kingdoms were connected."}),
    E("west","1024","Conrad II begins the Salian dynasty",[8.36,49.63],{section:S.ottonian,wiki:"Conrad II, Holy Roman Emperor",text:"The Salian kings inherited the eastern empire and tightened its hold on Burgundy, Italy and the German duchies."}),
    E("west","1033","Burgundy joins the empire",[6.63,46.52],{section:S.ottonian,wiki:"Kingdom of Arles",text:"Burgundy gave the empire a bridge between Germany and Italy, including important Alpine routes."}),
    E("west","1046","Synod of Sutri",[12.74,42.25],{section:S.church,wiki:"Synod of Sutri",text:"Henry III removed rival popes and tried to clean up papal politics, but reform soon made the papacy more independent of emperors."}),
    E("west","1054","Latin and Greek churches split",[28.98,41.01],{section:S.church,wiki:"East-West Schism",text:"The breach between Rome and Constantinople hardened the divide between Latin Catholic and Greek Orthodox worlds."}),
    E("west","1059","Papal election decree",[12.5,41.9],{section:S.church,wiki:"Papal election decree of 1059",text:"Cardinals were given the central role in choosing popes, reducing the influence of Roman aristocrats and German emperors."}),
    E("west","1075","Dictatus Papae and investiture crisis",[12.5,41.9],{section:S.church,wiki:"Dictatus papae",text:"Gregory VII claimed a stronger papal authority over bishops and rulers, setting up the clash with Henry IV."}),

    E("byz","1071","Manzikert opens Anatolia to Seljuks",[42.54,38.74],{section:S.crusades,wiki:"Battle of Manzikert",text:"The Byzantine defeat made Asia Minor harder to hold and helped create the crisis behind the First Crusade."}),
    E("west","1095-11-26","Urban II calls the First Crusade at Clermont",[3.08,45.78],{section:S.crusades,wiki:"Council of Clermont",text:"Urban called western knights to armed pilgrimage and aid for eastern Christians. Jerusalem became the emotional centre of the appeal."}),
    E("west","1097","Crusaders take Nicaea",[29.72,40.43],{section:S.crusades,wiki:"Siege of Nicaea",text:"The crusader armies crossed through Byzantine territory and took Nicaea before moving across Anatolia."}),
    E("west","1098","Antioch falls after a long siege",[36.16,36.20],{section:S.crusades,wiki:"Siege of Antioch",text:"Antioch gave the crusaders a northern anchor but also showed how fragile the expedition was."}),
    E("west","1099-07-15","First Crusade captures Jerusalem",[35.21,31.77],{section:S.crusades,wiki:"Siege of Jerusalem (1099)",text:"The crusaders stormed Jerusalem and created Latin states along the Levantine coast."}),
    E("west","1144","Edessa falls to Zengi",[38.79,37.16],{section:S.crusades,wiki:"Siege of Edessa",text:"The fall of the first crusader state shocked western Europe and triggered the Second Crusade."}),
    E("west","1147","Second Crusade begins",[2.35,48.86],{section:S.crusades,wiki:"Second Crusade",text:"Conrad III and Louis VII led royal armies east, but cooperation failed and Damascus was not taken."}),
    E("west","1187","Saladin wins at Hattin and takes Jerusalem",[35.46,32.8],{section:S.crusades,wiki:"Battle of Hattin",text:"Hattin broke the kingdom of Jerusalem. Saladin then recovered the city, leaving the crusaders mainly on the coast."}),
    E("west","1191","Third Crusade takes Acre",[35.08,32.92],{section:S.crusades,wiki:"Siege of Acre (1189-1191)",text:"Richard I and Philip II helped retake Acre. The result was a coastal foothold, not the recovery of Jerusalem."})
  );
  leaders.push(
    R("Al-Mansur","Abbasid Caliphate","islam","0754","0775",S.abbasid,{wiki:"Al-Mansur"}),
    R("Al-Ma'mun","Abbasid Caliphate","islam","0813","0833",S.baghdad,{wiki:"Al-Ma'mun"}),
    R("Abd al-Rahman III","Cordoba","islam","0912","0961",S.abbasid,{wiki:"Abd al-Rahman III"}),
    R("Henry the Fowler","East Francia","franks","0919","0936",S.ottonian,{wiki:"Henry the Fowler"}),
    R("Conrad II","Holy Roman Empire","franks","1024","1039",S.ottonian,{wiki:"Conrad II, Holy Roman Emperor"}),
    R("Henry III","Holy Roman Empire","franks","1039","1056",S.ottonian,{wiki:"Henry III, Holy Roman Emperor"}),
    R("Gregory VII","Papacy","franks","1073","1085",S.church,{wiki:"Pope Gregory VII"}),
    R("Urban II","Papacy","franks","1088","1099",S.crusades,{wiki:"Pope Urban II"}),
    R("Saladin","Ayyubid Sultanate","islam","1174","1193",S.crusades,{wiki:"Saladin"}),
    R("Richard I","England","england","1189","1199",S.crusades,{wiki:"Richard I of England"})
  );
  chapters.push(
    {id:"ch-abbasid-caliphate",title:"Abbasids and the Islamic world after 750",start:"0750",end:"1055",parent:"ch-early-islam",plate:"abbasid-caliphate",bbox:[[-12,15],[82,46]],section:S.abbasid,text:"The Abbasids overthrew the Umayyads and moved the caliphate's centre east to Iraq. Baghdad made the Islamic world look toward Persian administration, Central Asian routes and Indian Ocean knowledge as much as toward Syria and Arabia. Over time, Cordoba, the Fatimids in North Africa and Egypt, and eastern dynasties ruled themselves while still sharing Islamic language, law and scholarly networks."},
    {id:"ch-abbasid-baghdad",title:"Baghdad and the House of Wisdom",start:"0762",end:"0900",parent:"ch-abbasid-caliphate",plate:"abbasid-baghdad",bbox:[[35,25],[75,43]],section:S.baghdad,text:"Baghdad was built as a round Abbasid capital on the Tigris, then grew beyond the circle into markets, canals and suburbs. The House of Wisdom funded translation and science. Greek texts, Persian court learning, Indian numerals and astronomy, and paper from China through Central Asia all met there before some of that knowledge moved west to al-Andalus, Toledo and Europe."},
    {id:"ch-ottonian-salian",title:"Ottonian and Salian Germany",start:"0911",end:"1075",parent:"ch-western-europe",bbox:[[0,40],[20,55]],section:S.ottonian,text:"After the eastern Carolingians ended, the German duchies chose kings who had to bargain with dukes, bishops and Italy. Henry the Fowler and Otto I built Saxon power, defeated Magyar raiders at Lechfeld and revived imperial coronation in Rome, the core of the later Holy Roman Empire. The Salian rulers inherited that system and then ran into a stronger reform papacy."},
    {id:"ch-church-reform",title:"Monastic reform, papacy and the Latin church",start:"0910",end:"1215",parent:"ch-western-europe",bbox:[[-5,40],[20,55]],section:S.church,text:"Cluny and later reformers tried to free church life from local lay control, simony and clerical marriage. The movement strengthened the papacy under figures such as Gregory VII, sharpened the schism with Constantinople and helped create the religious energy behind crusading and new orders."},
    {id:"ch-crusades",title:"The Crusades and their consequences",start:"1071",end:"1291",parent:"ch-western-europe",plate:"first-crusades",bbox:[[-6,28],[42,50]],section:S.crusades,text:"The crusades joined pilgrimage, holy war, papal reform and Byzantine crisis. The First Crusade took Jerusalem and made Latin states on the Levantine coast. Edessa's fall brought a failed Second Crusade. Saladin's victory at Hattin brought the Third Crusade, which recovered Acre and coastal access but not Jerusalem."}
  );


  Object.assign(S, {
    capetian: "Capetian France and royal power",
    angevin: "England, Normandy and the Angevin empire",
    hohenstaufen: "Hohenstaufen empire and Italian cities",
    reconquista: "Reconquista Spain and Portugal",
    eastern: "Poland, Hungary, Rus and the Mongol shock"
  });
  events.push(
    E("west","0987","Hugh Capet crowned at Reims",[4.03,49.26],{section:S.capetian,wiki:"Hugh Capet",text:"The Capetians begin with a small royal domain around Paris, but the title of king gives them a claim above the great French fiefs."}),
    E("west","1066-10-14","William wins at Hastings",[0.49,50.91],{section:S.angevin,wiki:"Battle of Hastings",text:"The Norman duke becomes king of England, tying England to the French feudal map as well as to its own island politics."}),
    E("west","1086","Domesday Book completed",[-1.32,51.06],{section:S.angevin,wiki:"Domesday Book",text:"William's survey makes conquest administrative: land, dues and lordship are recorded for royal use."}),
    E("west","1106","Tinchebray reunites England and Normandy",[-0.73,48.76],{section:S.angevin,wiki:"Battle of Tinchebray",text:"Henry I defeats his brother Robert and brings Normandy back under the English crown."}),
    E("west","1108","Louis VI begins strengthening the French crown",[2.35,48.86],{section:S.capetian,wiki:"Louis VI of France",text:"Louis VI disciplines local lords and makes Capetian rule more practical around the royal domain."}),
    E("west","1122","Concordat of Worms settles investiture",[8.36,49.63],{section:S.church,wiki:"Concordat of Worms",text:"Emperor and pope compromise over bishops. The settlement does not end the empire-papacy struggle, but it changes the rules."}),
    E("west","1137","Eleanor of Aquitaine marries Louis VII",[0.34,46.58],{section:S.capetian,wiki:"Eleanor of Aquitaine",text:"Aquitaine briefly joins the French crown by marriage, then becomes the hinge of the Angevin empire after Eleanor's divorce."}),
    E("west","1147","Wendish Crusade",[12.5,53.5],{section:S.hohenstaufen,wiki:"Wendish Crusade",text:"Crusading language is used not only in the Levant and Spain, but also on the Baltic frontier."}),
    E("west","1152","Frederick Barbarossa elected king",[8.68,50.11],{section:S.hohenstaufen,wiki:"Frederick Barbarossa",text:"Barbarossa tries to restore imperial rights in Germany and Italy while balancing papal and city power."}),
    E("west","1154","Henry II begins Plantagenet rule",[-0.13,51.51],{section:S.angevin,wiki:"Henry II of England",text:"Henry II rules England and a huge set of French fiefs: Normandy, Anjou and Aquitaine."}),
    E("west","1164","Constitutions of Clarendon",[-1.25,51.06],{section:S.angevin,wiki:"Constitutions of Clarendon",text:"Henry II tries to limit church courts, bringing him into conflict with Thomas Becket."}),
    E("west","1170","Thomas Becket murdered",[1.08,51.28],{section:S.angevin,wiki:"Thomas Becket",text:"The murder in Canterbury turns a legal dispute into a moral and political crisis for Henry II."}),
    E("west","1176","Lombard League defeats Barbarossa at Legnano",[8.92,45.60],{section:S.hohenstaufen,wiki:"Battle of Legnano",text:"Northern Italian cities show that imperial claims in Italy depend on bargaining as much as conquest."}),
    E("west","1180","Henry the Lion loses Saxony and Bavaria",[10.52,52.27],{section:S.hohenstaufen,wiki:"Henry the Lion",text:"Barbarossa breaks the greatest German duke, redistributing power inside the empire."}),
    E("west","1204","Rouen falls to Philip II",[1.1,49.44],{section:S.capetian,wiki:"Siege of Chateau Gaillard",text:"John loses Normandy and the Capetian monarchy takes the north French lands that had anchored English power across the Channel."}),
    E("west","1209","Albigensian Crusade begins",[3.22,43.34],{section:S.capetian,wiki:"Albigensian Crusade",text:"A crusade against heresy in Languedoc also lets northern French power enter the south."}),
    E("west","1212","Las Navas de Tolosa",[-3.53,38.29],{section:S.reconquista,wiki:"Battle of Las Navas de Tolosa",text:"Christian kingdoms defeat the Almohads, a major turning point in the Reconquista."}),
    E("west","1214","Bouvines",[2.34,50.58],{section:S.capetian,wiki:"Battle of Bouvines",text:"Philip II defeats John's coalition. The French crown gains confidence; John's authority in England collapses."}),
    E("west","1215-06-15","Magna Carta at Runnymede",[-0.57,51.44],{section:S.angevin,wiki:"Magna Carta",text:"English barons force John to accept limits framed as old law and feudal rights."}),
    E("west","1229","Treaty of Paris ends the Albigensian war",[2.35,48.86],{section:S.capetian,wiki:"Treaty of Paris (1229)",text:"Toulouse gives up lands and heirs, pulling Languedoc toward the French crown."}),
    E("west","1236","Cordoba falls to Castile",[-4.78,37.88],{section:S.reconquista,wiki:"Siege of Cordoba (1236)",text:"Castile takes the old Umayyad capital, showing how far Islamic power in Iberia has retreated."}),
    E("west","1248","Seville falls to Castile",[-5.99,37.39],{section:S.reconquista,wiki:"Siege of Seville",text:"Seville's fall leaves Granada as the main Muslim polity in Iberia."}),
    E("west","1259","Peace of Paris between Henry III and Louis IX",[2.35,48.86],{section:S.capetian,wiki:"Treaty of Paris (1259)",text:"Henry III abandons claims to Normandy, Anjou and Poitou, keeping Guyenne as a French vassal."}),
    E("west","1270","Louis IX dies on crusade at Tunis",[10.18,36.80],{section:S.crusades,wiki:"Eighth Crusade",text:"The crusading ideal persists, but the political map of France is now the stronger story."}),
    E("steppe","0966","Mieszko I accepts Christianity",[17.03,52.54],{section:S.eastern,wiki:"Mieszko I",text:"Poland enters Latin Christianity and the western diplomatic world."}),
    E("steppe","1001","Stephen crowned king of Hungary",[18.74,47.79],{section:S.eastern,wiki:"Stephen I of Hungary",text:"Hungary becomes a Christian kingdom with counties, bishops and a royal centre."}),
    E("steppe","1222","Golden Bull of Hungary",[19.04,47.5],{section:S.eastern,wiki:"Golden Bull of 1222",text:"Hungarian nobles force written privileges from Andrew II, a parallel to Magna Carta in the same generation."}),
    E("steppe","1223","Mongols defeat Rus princes at Kalka",[38.5,47.1],{section:S.eastern,wiki:"Battle of the Kalka River",text:"The Mongols appear on the Rus frontier. This is the first warning of the Golden Horde world that shapes later Russia."}),
    E("steppe","1240","Mongols sack Kiev",[30.52,50.45],{section:S.eastern,wiki:"Siege of Kiev (1240)",text:"Kiev is devastated, and Rus politics shifts toward tribute, princely brokerage and eventually Moscow. This ties directly to the Russia period and the Mongols to Mughals board."}),
    E("steppe","1241","Legnica and the Sajo River",[20.8,48.1],{section:S.eastern,wiki:"First Mongol invasion of Poland",text:"Mongol armies strike Poland and Hungary in the same campaign season, showing that the steppe shock reaches Central Europe too."})
  );
  leaders.push(
    R("Hugh Capet","France","franks","0987","0996",S.capetian,{wiki:"Hugh Capet"}),
    R("Philip II Augustus","France","franks","1180","1223",S.capetian,{wiki:"Philip II of France"}),
    R("Louis IX","France","franks","1226","1270",S.capetian,{wiki:"Louis IX of France"}),
    R("Henry II","England","england","1154","1189",S.angevin,{wiki:"Henry II of England"}),
    R("John","England","england","1199","1216",S.angevin,{wiki:"John, King of England"}),
    R("Frederick Barbarossa","Holy Roman Empire","franks","1152","1190",S.hohenstaufen,{wiki:"Frederick Barbarossa"}),
    R("Mieszko I","Poland","rus","0960","0992",S.eastern,{wiki:"Mieszko I"}),
    R("Stephen I","Hungary","franks","1000","1038",S.eastern,{wiki:"Stephen I of Hungary"}),
    R("Batu Khan","Golden Horde","rus","1236","1255",S.eastern,{wiki:"Batu Khan"})
  );
  chapters.push(
    {id:"ch-capetian-france",title:"Capetian France and royal power",start:"0987",end:"1270",parent:"ch-western-europe",plate:"capetian-france",bbox:[[-6,42],[9,52]],section:S.capetian,text:"Capetian France begins with a small royal domain around Paris and Reims. Louis VI makes kingship practical; Philip II takes Normandy and wins at Bouvines; the Albigensian Crusade and Louis IX pull the south and Guyenne question into a stronger French monarchy."},
    {id:"ch-angevin-england",title:"England, Normandy and the Angevin empire",start:"1066",end:"1272",parent:"ch-western-europe",plate:"angevin-empire",bbox:[[-9,42],[5,57]],section:S.angevin,text:"Norman England is a conquered kingdom with a powerful royal administration, but its rulers are also French lords. Henry II's Angevin empire joins England, Normandy, Anjou and Aquitaine. John loses much of that continental world, loses at Bouvines and faces Magna Carta at Runnymede."},
    {id:"ch-hohenstaufen-empire",title:"Hohenstaufen empire and Italian cities",start:"1122",end:"1190",parent:"ch-western-europe",bbox:[[3,41],[18,55]],section:S.hohenstaufen,text:"After the investiture settlement, the Hohenstaufen German empire remains strong but negotiated. Frederick Barbarossa tries to restore imperial rights, fights the Lombard League, loses at Legnano, makes peace with the pope and cities, and breaks Henry the Lion inside Germany."},
    {id:"ch-reconquista",title:"Reconquista Spain and Portugal",start:"1085",end:"1250",parent:"ch-western-europe",bbox:[[-10,35],[4,44]],section:S.reconquista,text:"The Reconquista is the long push by Iberian Christian kingdoms south while Islamic Spain fragments and then receives Almoravid and Almohad help. Las Navas de Tolosa, Cordoba and Seville mark the shift that leaves Granada as the main Muslim survivor."},
    {id:"ch-eastern-kingdoms",title:"Poland, Hungary, Rus and the Mongol shock",start:"0966",end:"1241",parent:"ch-steppe-rus",plate:"eastern-kingdoms-mongols",bbox:[[10,42],[55,60]],section:S.eastern,text:"Poland and Hungary enter Latin Christianity while Kievan Rus remains an Orthodox river-route world. The Mongol arrival at Kalka, Kiev, Legnica and the Sajo River is the hinge into the Russia period: Golden Horde tribute, princely brokerage and eventually Moscow. It also belongs on the Mongols to Mughals cause-and-effect board."}
  );

  Object.assign(S, {
    byzLate:"Byzantium under Basil II and after Manzikert",
    trade:"Hanseatic, Venetian and Genoese trade networks",
    hyw:"France, England and the Hundred Years War"
  });
  events.push(
    E("byz","0976","Basil II becomes Byzantine emperor",[28.98,41.01],{section:S.byzLate,wiki:"Basil II",text:"Basil II inherits a rich but pressured empire. His long reign becomes the high point of middle Byzantine power."}),
    E("byz","1018","Bulgaria absorbed into Byzantium",[20.8,41.1],{section:S.byzLate,wiki:"Byzantine conquest of Bulgaria",text:"After decades of war, Basil II absorbs Bulgaria. Byzantium again controls most of the Balkans."}),
    E("byz","1025","Byzantium reaches its middle-medieval high point",[28.98,41.01],{section:S.byzLate,wiki:"Byzantine Empire under the Macedonian dynasty",text:"At Basil II's death, the empire holds the Balkans, Greece, western Anatolia and key eastern frontier cities."}),
    E("byz","1054","East-West schism",[28.98,41.01],{section:S.byzLate,wiki:"East-West Schism",text:"The break between Rome and Constantinople hardens a religious divide that matters later in the crusades."}),
    E("byz","1071","Manzikert",[42.53,39.15],{section:S.byzLate,wiki:"Battle of Manzikert",text:"The Seljuk victory opens Anatolia to Turkish power. The empire survives, but it loses the tax and soldier base behind Constantinople."}),
    E("byz","1081","Alexios I Komnenos begins recovery",[28.98,41.01],{section:S.byzLate,wiki:"Alexios I Komnenos",text:"Alexios stabilizes Byzantium through alliances, taxes, diplomacy and appeals to western military help."}),
    E("byz","1204","Fourth Crusade takes Constantinople",[28.98,41.01],{section:S.byzLate,wiki:"Sack of Constantinople",text:"Crusaders and Venice take Constantinople. Greek successor states at Nicaea and Trebizond keep imperial claims alive."}),
    E("byz","1261","Constantinople recovered by Michael VIII",[28.98,41.01],{section:S.byzLate,wiki:"Michael VIII Palaiologos",text:"The empire returns to Constantinople, but it is smaller, poorer and surrounded by stronger rivals."}),
    E("byz","1453","Ottomans take Constantinople",[28.98,41.01],{section:S.byzLate,wiki:"Fall of Constantinople",text:"The Ottoman conquest ends the Byzantine empire and makes the city an Ottoman capital."}),

    E("west","1159","Lubeck refounded by Henry the Lion",[10.69,53.87],{section:S.trade,wiki:"Lubeck",text:"Lubeck becomes the hinge city between Germany and the Baltic trade world."}),
    E("west","1189","London privileges for Cologne merchants",[-0.13,51.51],{section:S.trade,wiki:"Hanseatic League",text:"German merchants in London gain privileges that later feed into the Hanseatic kontor system."}),
    E("west","1204","Venice gains from the Fourth Crusade",[12.33,45.44],{section:S.trade,wiki:"Republic of Venice",text:"Venice turns crusade logistics into ports, islands and commercial privileges in the eastern Mediterranean."}),
    E("west","1229","German merchants at Novgorod",[31.28,58.52],{section:S.trade,wiki:"Peterhof, Novgorod",text:"The Novgorod kontor connects Baltic merchants to furs, wax and forest goods from the Rus world."}),
    E("west","1252","Genoa and Venice mint gold coinage",[8.93,44.41],{section:S.trade,wiki:"Genoese lira",text:"Gold coinage signals the scale of Mediterranean trade and finance."}),
    E("west","1261","Genoa gains Black Sea access",[28.98,41.01],{section:S.trade,wiki:"Treaty of Nymphaeum",text:"Genoa backs the Byzantine recovery of Constantinople and wins trading privileges against Venice."}),
    E("west","1284","Genoa defeats Pisa at Meloria",[9.83,43.55],{section:S.trade,wiki:"Battle of Meloria",text:"Genoa becomes one of the main western Mediterranean sea powers."}),
    E("west","1291","Acre falls; trade routes shift",[35.08,32.92],{section:S.trade,wiki:"Siege of Acre (1291)",text:"The last major crusader port falls, but Italian merchants keep working through Cyprus, Egypt and the Black Sea."}),
    E("west","1356","Golden Bull and German urban politics",[11.58,48.14],{section:S.trade,wiki:"Golden Bull of 1356",text:"The empire remains a negotiated political space of princes, cities and privileges rather than a centralized kingdom."}),
    E("west","1358","Hanseatic League takes corporate form",[10.69,53.87],{section:S.trade,wiki:"Hanseatic League",text:"A meeting at Lubeck gives the Hansa a more collective political shape."}),
    E("west","1361","Hansa fights Denmark over Baltic access",[12.57,55.68],{section:S.trade,wiki:"Danish-Hanseatic War (1361-1370)",text:"The Hansa can act like a sea power when trade privileges and Baltic routes are threatened."}),
    E("west","1370","Treaty of Stralsund",[13.08,54.31],{section:S.trade,wiki:"Treaty of Stralsund",text:"Denmark recognizes Hanseatic privileges, showing how merchant cities could force royal concessions."}),
    E("west","1380","Venice defeats Genoa in the War of Chioggia",[12.28,45.22],{section:S.trade,wiki:"War of Chioggia",text:"Venice survives its hardest war with Genoa and keeps the stronger long-term position in Adriatic and eastern trade."}),

    E("west","1271","Marco Polo leaves Venice for Asia",[12.33,45.44],{section:S.trade,wiki:"Marco Polo",text:"His travels show how Mongol-era Eurasian routes linked Italian merchants to Central and East Asia."}),
    E("west","1291","Swiss confederation tradition begins",[8.6,46.9],{section:S.trade,wiki:"Old Swiss Confederacy",text:"Alpine communities begin a political story that later sits between France, Burgundy and the empire."}),
    E("west","1302","Flemish towns defeat France at Courtrai",[3.27,50.83],{section:S.trade,wiki:"Battle of the Golden Spurs",text:"Urban militias in Flanders show that cloth towns can matter militarily and politically."}),
    E("west","1315","Swiss defeat Habsburgs at Morgarten",[8.64,47.1],{section:S.trade,wiki:"Battle of Morgarten",text:"The early Swiss confederates defend Alpine autonomy against Habsburg pressure."}),
    E("west","1347","Black Death reaches Caffa",[34.1,45.03],{section:S.trade,wiki:"Black Death migration",text:"The plague moves through Black Sea trade routes into the Mediterranean, linking the Mongol world to Europe."}),
    E("west","1348","Black Death crosses western Europe",[2.35,48.86],{section:S.trade,wiki:"Black Death",text:"A pandemic kills a huge share of Europeans and also hits the Middle East and North Africa. The crisis is Eurasian, not only European."}),

    E("west","1328","Capetian direct line ends",[2.35,48.86],{section:S.hyw,wiki:"House of Capet",text:"The death of Charles IV without a son sets up the Valois succession and English dynastic claims."}),
    E("west","1337","Hundred Years War begins",[2.35,48.86],{section:S.hyw,wiki:"Hundred Years' War",text:"The war begins as a dynastic claim but becomes a long struggle over English lands in France and the French monarchy's survival."}),
    E("west","1346","Crecy",[1.88,50.26],{section:S.hyw,wiki:"Battle of Crecy",text:"English longbowmen and defensive tactics defeat a larger French force."}),
    E("west","1347","Calais falls to England",[1.85,50.95],{section:S.hyw,wiki:"Siege of Calais (1346-1347)",text:"Calais becomes England's bridgehead on the continent for two centuries."}),
    E("west","1356","Poitiers",[0.34,46.58],{section:S.hyw,wiki:"Battle of Poitiers",text:"The English capture the French king, forcing a political crisis and a treaty map."}),
    E("west","1360","Treaty of Bretigny",[1.55,48.45],{section:S.hyw,wiki:"Treaty of Bretigny",text:"France gives up a larger Aquitaine and pays ransom. The treaty is a map of English strength after Poitiers."}),
    E("west","1415","Agincourt",[2.14,50.46],{section:S.hyw,wiki:"Battle of Agincourt",text:"Henry V's victory reopens the English bid for France."}),
    E("west","1420","Treaty of Troyes",[4.07,48.30],{section:S.hyw,wiki:"Treaty of Troyes",text:"The treaty disinherits the dauphin and names Henry V heir to France, with Burgundy backing the English side."}),
    E("west","1429","Joan of Arc lifts Orleans",[1.91,47.90],{section:S.hyw,wiki:"Siege of Orleans",text:"Joan's intervention restores momentum to Charles VII and changes the political meaning of the war."}),
    E("west","1429","Charles VII crowned at Reims",[4.03,49.26],{section:S.hyw,wiki:"Charles VII of France",text:"The coronation gives the Valois king the legitimacy that the Treaty of Troyes tried to deny."}),
    E("west","1431","Joan of Arc executed at Rouen",[1.1,49.44],{section:S.hyw,wiki:"Joan of Arc",text:"The English and Burgundian side kills Joan, but her political work has already helped revive the French monarchy."}),
    E("west","1453","Castillon ends English Guyenne",[-0.04,44.85],{section:S.hyw,wiki:"Battle of Castillon",text:"French artillery helps win the last major battle. England loses Guyenne and keeps only Calais in France."}),
    E("west","1477","Burgundy collapses after Nancy",[6.18,48.69],{section:S.hyw,wiki:"Battle of Nancy",text:"Charles the Bold's death breaks the Burgundian state and reshapes the balance between France, the empire and the Low Countries."}),
    E("west","1491","Brittany tied to the French crown",[-1.68,48.11],{section:S.hyw,wiki:"Anne of Brittany",text:"Anne of Brittany's marriage to Charles VIII pulls the last great western principality toward France."})
  );
  leaders.push(
    R("Basil II","Byzantine Empire","byz","0976","1025",S.byzLate,{wiki:"Basil II"}),
    R("Alexios I Komnenos","Byzantine Empire","byz","1081","1118",S.byzLate,{wiki:"Alexios I Komnenos"}),
    R("Michael VIII Palaiologos","Byzantine Empire","byz","1259","1282",S.byzLate,{wiki:"Michael VIII Palaiologos"}),
    R("Edward III","England","england","1327","1377",S.hyw,{wiki:"Edward III of England"}),
    R("Henry V","England","england","1413","1422",S.hyw,{wiki:"Henry V of England"}),
    R("Charles VII","France","franks","1422","1461",S.hyw,{wiki:"Charles VII of France"})
  );
  chapters.push(
    {id:"ch-byzantium-basil-crisis",title:"Byzantium from Basil II to 1453",start:"0976",end:"1453",parent:"ch-byzantium",plate:"byzantium-basil-crisis",bbox:[[10,31],[46,49]],section:S.byzLate,text:"Byzantium reaches a high point under Basil II, then loses Anatolia after Manzikert, survives through Komnenian recovery, loses Constantinople to the Fourth Crusade, returns in 1261 and finally falls to the Ottomans in 1453."},
    {id:"ch-medieval-trade-networks",title:"Hanseatic, Venetian and Genoese trade networks",start:"1159",end:"1400",parent:"ch-western-europe",plate:"medieval-trade-networks",bbox:[[-6,29],[43,61]],section:S.trade,text:"Late medieval trade joins Baltic towns, Novgorod, Bruges, London, Venice, Genoa, Constantinople, Caffa and Alexandria. The Hansa organizes northern privileges while Italian sea republics compete for Black Sea, Levant and spice routes. The same routes also help carry the Black Death."},
    {id:"ch-hundred-years-war",title:"France, England and the Hundred Years War",start:"1328",end:"1498",parent:"ch-western-europe",plate:"hundred-years-war",bbox:[[-6,42],[8,52]],section:S.hyw,text:"The Hundred Years War starts with disputed succession and English lands in France. Crecy, Poitiers and Bretigny show English strength; Agincourt and Burgundy nearly break France; Joan of Arc, Reims, Castillon and the collapse of Burgundy show the French monarchy recovering and becoming harder to dismember."}
  );

  const B=(title,author,start,end,section,extra)=>Object.assign({title,author,start,end,owned:false},section?{section}:{},extra||{});
  const books=[
    B("The Inheritance of Rome","Chris Wickham","0400","1000",S.west), B("The Formation of Christendom","Judith Herrin","0500","1000",S.byz),
    B("Charlemagne","Johannes Fried","0742","0814",S.franks), B("The Carolingian World","Marios Costambeys, Matthew Innes and Simon MacLean","0750","0900",S.franks),
    B("Justinian's Flea","William Rosen","0527","0565",S.justinian), B("The New Cambridge Medieval History, Volume II","Rosamond McKitterick","0700","0900",S.west),
    B("Muhammad and the Believers","Fred M. Donner","0610","0661",S.islam), B("The Great Arab Conquests","Hugh Kennedy","0630","0750",S.islam),
    B("The Vikings","Else Roesdahl","0790","1066",S.normans), B("The Anglo-Saxons","Marc Morris","0400","1066",S.england),
    B("The Making of Europe","Robert Bartlett","0950","1350",S.west), B("Russia in the Early Middle Ages","Janet Martin","0860","1240",S.kievan),
    B("1491","Charles C. Mann","0500","1500",S.canada), B("Canada's First Nations","Olive Dickason","0500","1500",S.canada,{canadian:true}),
    B("When Baghdad Ruled the Muslim World","Hugh Kennedy","0750","0950",S.abbasid), B("The House of Wisdom","Jim Al-Khalili","0762","1000",S.baghdad),
    B("The Holy Roman Empire","Peter H. Wilson","0911","1806",S.ottonian), B("The First Crusade","Thomas Asbridge","1095","1099",S.crusades),
    B("The Capetians","Jim Bradbury","0987","1328",S.capetian), B("The Plantagenets","Dan Jones","1154","1399",S.angevin),
    B("Barbarossa","John Freed","1152","1190",S.hohenstaufen), B("The Mongols and the West","Peter Jackson","1220","1300",S.eastern)
  ];
  window.DATASETS = window.DATASETS || {};
  window.DATASETS.medieval = {
    id:"medieval", title:"The Middle Ages", subtitle:"AD 500-1500", range:["0500-01-01","1501-01-01"], startAt:"0800", precision:"year",
    mapNote:"No historical borders. Areas show influence, settlement or claims at the scale of the story. This period deliberately overlaps late antiquity from AD 500 to 700.",
    lanes:[{id:"canada",label:"Canada & the Americas",pinned:true},{id:"west",label:"Western Europe"},{id:"byz",label:"Byzantium"},{id:"islam",label:"Islamic world"},{id:"steppe",label:"Steppe & Rus"},{id:"asia",label:"Asia"}],
    events, leaders, chapters, books,
    plates:[{id:"barbarian-kingdoms",title:"The barbarian kingdoms around 500",start:"0486",end:"0568"},{id:"justinian-reconquest",title:"Justinian's reconquest",start:"0527",end:"0565"},{id:"carolingian-partition",title:"Charlemagne and the Treaty of Verdun",start:"0751",end:"0880"},{id:"abbasid-caliphate",title:"From Umayyad empire to Abbasid world",start:"0750",end:"1055"},{id:"abbasid-baghdad",title:"Abbasid Baghdad and the House of Wisdom",start:"0762",end:"0900"},{id:"first-crusades",title:"The First, Second and Third Crusades",start:"1095",end:"1192"},{id:"capetian-france",title:"Capetian France",start:"0987",end:"1270"},{id:"angevin-empire",title:"England and the Angevin empire",start:"1066",end:"1215"},{id:"eastern-kingdoms-mongols",title:"Poland, Hungary, Rus and the Mongol shock",start:"0966",end:"1241"},{id:"byzantium-basil-crisis",title:"Byzantium: Basil II to the Fourth Crusade",start:"0976",end:"1261"},{id:"medieval-trade-networks",title:"Hanseatic and Italian trade networks",start:"1159",end:"1400"},{id:"hundred-years-war",title:"France and the Hundred Years War",start:"1328",end:"1453"}],
    colours:{lanes:{canada:"#b22d2d",west:"#7a5a8c",byz:"#d66a4a",islam:"#6b8c3f",steppe:"#6b6b6b",asia:"#b36b2e"},sides:{franks:"#7a5a8c",goths:"#5b78a8",vandals:"#2f7f86",byz:"#d66a4a",islam:"#6b8c3f",rus:"#9a6a38",normans:"#c58b32",england:"#8c3b3b"}},
    changelog:[{date:"2026-10-06",text:"Round 6: opened the medieval period with successor kingdoms, Justinian, Islam, Franks, Vikings and Kievan Rus roots."},{date:"2026-10-06",text:"Round 7: added Abbasid Baghdad, Ottonian-Salian Germany, church reform and the First through Third Crusades."},{date:"2026-10-06",text:"Round 8: added Capetian France, Angevin England, Hohenstaufen Germany, Reconquista context, and Poland-Hungary-Rus under the Mongol shock."},{date:"2026-10-06",text:"Round 9: added Byzantium under Basil II and after 1071, Hansa/Venice/Genoa trade networks, Black Death context, and the Hundred Years War."}]
  };
})();
