// Approximate political snapshots for the muted viewer underlay. Region codes are Natural Earth admin-0/admin-1 blocks.
// `minus` removes provinces from a whole country (e.g. regions:["TUR"], minus:["TR-06"]).
// Coverage gaps in the region file (sub-Saharan Africa, Japan, Korea, South-East Asia, Australia) mean those
// powers are omitted rather than guessed. Every shape is a school-atlas approximation.
(function () {
  const IT_NORTH = ["IT-TO","IT-VC","IT-NO","IT-CN","IT-AT","IT-AL","IT-BI","IT-VB","IT-AO","IT-VA","IT-CO","IT-SO","IT-MI","IT-BG","IT-BS","IT-PV","IT-CR","IT-MN","IT-LC","IT-LO","IT-MB","IT-IM","IT-SV","IT-GE","IT-SP","IT-TN","IT-BZ","IT-VR","IT-VI","IT-BL","IT-TV","IT-VE","IT-PD","IT-RO","IT-UD","IT-GO","IT-TS","IT-PN","IT-PC","IT-PR","IT-RE","IT-MO","IT-BO","IT-FE","IT-RA","IT-FC","IT-RN","IT-MS","IT-LU","IT-PT","IT-FI","IT-LI","IT-PI","IT-AR","IT-SI","IT-GR","IT-PO"];
  // Western and northern Anatolia: the Byzantine coastlands after the Komnenian recovery, and the early Ottoman core.
  const TR_WEST = ["TR-22","TR-39","TR-59","TR-34","TR-17","TR-10","TR-16","TR-41","TR-54","TR-11","TR-77","TR-81","TR-14","TR-67","TR-74","TR-35","TR-45","TR-09","TR-48","TR-20","TR-64","TR-43","TR-07"];
  const TR_OTTOMAN_1450 = ["TR-22","TR-39","TR-59","TR-34","TR-17","TR-10","TR-16","TR-41","TR-54","TR-11","TR-77","TR-81","TR-14","TR-67","TR-35","TR-45","TR-09","TR-48","TR-20","TR-64","TR-43","TR-03","TR-26","TR-06","TR-18","TR-19","TR-05","TR-60","TR-55"];
  const US_COLONIES_1650 = ["US-VA","US-MD","US-MA","US-CT","US-RI","US-NH","US-ME"];
  const US_COLONIES_1715 = ["US-VA","US-MD","US-MA","US-CT","US-RI","US-NH","US-ME","US-NY","US-NJ","US-PA","US-DE","US-NC","US-SC"];
  const US_1789 = ["US-ME","US-NH","US-VT","US-MA","US-RI","US-CT","US-NY","US-NJ","US-PA","US-DE","US-MD","US-DC","US-VA","US-WV","US-NC","US-SC","US-GA","US-KY","US-TN","US-OH","US-IN","US-IL","US-MI","US-WI","US-AL","US-MS"];
  const SPAIN_NA_1789 = ["US-LA","US-AR","US-MO","US-IA","US-NE","US-KS","US-OK","US-SD","US-ND","US-FL","US-TX","US-NM","US-AZ","US-CA","US-NV","US-UT","US-CO"];
  const SPAIN_LATAM = ["MEX","GTM","HND","NIC","CRI","PAN","CUB","DOM","PRI","COL","VEN","ECU","PER","BOL","CHL","ARG","PRY"];
  const RUS_SOUTH = ["RU-KDA","RU-AD","RU-KC","RU-KB","RU-SE","RU-IN","RU-CE","RU-DA","RU-STA"];
  const RUS_AMUR = ["RU-AMU","RU-YEV","RU-PRI","RU-SAK"];
  const IN_NORTHEAST = ["IN-AS","IN-NL","IN-MN","IN-MZ","IN-TR","IN-ML","IN-AR"];
  const SOVIET_ASIA = ["KAZ","UZB","TKM","KGZ","TJK","GEO","ARM","AZE"];

  window.WORLD_SNAPSHOTS = [
  { year:-1499, polities:[
    {id:"egypt-new-kingdom",name:"New Kingdom Egypt",colour:"#c99a45",regions:["EGY"],label:[30,27],approx:true},
    {id:"hittite",name:"Hittite kingdom",colour:"#b06a4a",regions:["TR-06","TR-18","TR-19","TR-66","TR-40","TR-50","TR-38","TR-42","TR-70","TR-51","TR-68","TR-05","TR-58"],label:[34,39.5],approx:true},
    {id:"shang",name:"Shang China",colour:"#9b6fae",polygon:[[110,31],[116,32],[119,36],[116,39],[111,38],[108,35]],label:[114,36],approx:true},
    {id:"olmec",name:"Olmec heartland",colour:"#5d9b70",polygon:[[-96,16],[-92,17],[-91,19],[-95,20],[-98,18]],label:[-94,18],approx:true}
  ]},
  { year:-499, polities:[
    {id:"persia",name:"Achaemenid Persia",colour:"#b06a4a",regions:["IRN","IRQ","SYR","TUR","EGY","ISR","PSX","JOR","LBN","AFG","TKM","UZB","PAK"],label:[50,32],approx:true},
    {id:"greek",name:"Greek city worlds",colour:"#6b83b6",regions:["GRC"],label:[22,38],approx:true},
    {id:"carthage",name:"Carthage",colour:"#7aa36b",regions:["TUN"],label:[10,34],approx:true},
    {id:"zhou",name:"Late Zhou China",colour:"#9b6fae",polygon:[[105,29],[119,30],[122,38],[116,42],[106,40]],label:[114,36],approx:true}
  ]},
  { year:1, polities:[
    {id:"rome",name:"Roman Empire",colour:"#b85c5c",regions:["ITA","ESP","PRT","FRA","BEL","LUX","CHE","AUT","SVN","HRV","BIH","SRB","MNE","ALB","MKD","GRC","TUR","CYP","SYR","LBN","ISR","PSX","JOR","EGY","LBY","TUN","DZA"],minus:["TR-25","TR-36","TR-75","TR-04","TR-65","TR-30","TR-49","TR-13","TR-12","TR-62","TR-24","TR-69","TR-08","TR-53","TR-61","TR-29","TR-76","TR-73","TR-56","TR-72","TR-21","TR-47","TR-63","TR-02","TR-44","TR-23"],label:[14,42],approx:true},
    {id:"parthia",name:"Parthian Empire",colour:"#b06a4a",regions:["IRN","IRQ","TKM"],label:[52,34],approx:true},
    {id:"han",name:"Han China",colour:"#9b6fae",regions:["CN-SN","CN-SX","CN-HA","CN-HB","CN-HE","CN-BJ","CN-TJ","CN-SD","CN-JS","CN-SH","CN-AH","CN-ZJ","CN-JX","CN-HN","CN-SC","CN-CQ","CN-GS","CN-GD","CN-GX","CN-FJ","CN-LN"],label:[112,34],approx:true},
    {id:"kushan",name:"Kushan realm",colour:"#7aa36b",regions:["AFG","PAK"],label:[70,34],approx:true}
  ]},
  { year:400, polities:[
    {id:"west-rome",name:"Western Roman Empire",colour:"#b85c5c",regions:["ITA","ESP","PRT","FRA","BEL","LUX","CHE","AUT","SVN","HRV","BIH","TUN","DZA"],label:[7,43],approx:true},
    {id:"east-rome",name:"Eastern Roman Empire",colour:"#7a91c4",regions:["GRC","ALB","MKD","SRB","MNE","BGR","TUR","CYP","SYR","LBN","ISR","PSX","JOR","EGY","LBY"],label:[30,39],approx:true},
    {id:"sassanid",name:"Sasanian Persia",colour:"#b06a4a",regions:["IRN","IRQ","TKM","AFG"],label:[53,32],approx:true},
    {id:"gupta",name:"Gupta India",colour:"#d2a24c",regions:["IN-UP","IN-BR","IN-MP","IN-RJ","IN-GJ"],label:[78,24],approx:true}
  ]},
  { year:800, polities:[
    {id:"carolingian",name:"Carolingian Empire",colour:"#6b83b6",regions:["FRA","DEU","BEL","LUX","NLD","CHE","AUT","SVN",...IT_NORTH],label:[6,48],approx:true},
    {id:"cordoba",name:"Emirate of Córdoba",colour:"#7aa36b",regions:["ESP","PRT"],label:[-4,39],approx:true},
    {id:"byzantine",name:"Byzantium",colour:"#7a91c4",regions:["GRC","TUR","CYP"],label:[29,40],approx:true},
    {id:"abbasid",name:"Abbasid Caliphate",colour:"#5d9b70",regions:["IRQ","IRN","SYR","JOR","ISR","PSX","LBN","SAU","EGY","LBY","TUN","AFG","TKM","UZB"],label:[44,31],approx:true},
    {id:"tang",name:"Tang China",colour:"#9b6fae",regions:["CHN"],minus:["CN-XJ","CN-XZ","CN-QH","CN-NM","CN-HL","CN-JL","CN-YN"],label:[110,33],approx:true},
    {id:"pala",name:"Pala Bengal",colour:"#d2a24c",regions:["IN-WB","IN-BR","BGD"],label:[88,24],approx:true}
  ]},
  { year:1000, polities:[
    {id:"hre",name:"Holy Roman Empire",colour:"#6b83b6",regions:["DEU","AUT","CHE","BEL","LUX","NLD","CZE","SVN",...IT_NORTH],label:[10,50],approx:true},
    {id:"byzantine",name:"Byzantium",colour:"#7a91c4",regions:["GRC","BGR","MKD","TUR"],label:[28,40],approx:true},
    {id:"fatimid",name:"Fatimid Caliphate",colour:"#5d9b70",regions:["EGY","LBY","TUN","SYR","LBN","ISR","PSX"],label:[31,27],approx:true},
    {id:"song",name:"Song China",colour:"#9b6fae",regions:["CN-HA","CN-HB","CN-HN","CN-AH","CN-JS","CN-SH","CN-ZJ","CN-JX","CN-FJ","CN-GD","CN-GX","CN-SC","CN-CQ","CN-SD","CN-SN"],label:[113,31],approx:true},
    {id:"chola",name:"Chola realm",colour:"#d2a24c",regions:["IN-TN","LKA"],label:[79,10],approx:true}
  ]},
  { year:1200, polities:[
    {id:"france",name:"France",colour:"#6b83b6",regions:["FRA"],label:[2,47],approx:true},
    {id:"hre",name:"Holy Roman Empire",colour:"#8a8a66",regions:["DEU","AUT","CHE","BEL","LUX","NLD","CZE","SVN",...IT_NORTH],label:[10,49],approx:true},
    {id:"byzantine",name:"Byzantium",colour:"#7a91c4",regions:["GRC",...TR_WEST],label:[26,39],approx:true},
    {id:"rum",name:"Seljuks of Rum",colour:"#a8865a",regions:["TUR"],minus:TR_WEST,label:[34,39],approx:true},
    {id:"ayyubid",name:"Ayyubid lands",colour:"#5d9b70",regions:["EGY","SYR","JOR","ISR","PSX","LBN"],label:[33,29],approx:true},
    {id:"jin-song",name:"Jin and Song China",colour:"#9b6fae",regions:["CHN"],minus:["CN-XJ","CN-XZ","CN-QH","CN-YN","CN-NX","CN-NM"],label:[112,33],approx:true},
    {id:"delhi",name:"Delhi Sultanate",colour:"#d2a24c",regions:["IN-DL","IN-HR","IN-UP","IN-RJ","IN-PB"],label:[77,28],approx:true}
  ]},
  { year:1300, polities:[
    {id:"mongol",name:"Mongol successor khanates",colour:"#9b6fae",regions:["MNG","CHN","KAZ","UZB","TKM","IRN","IRQ","AFG"],label:[82,43],approx:true},
    {id:"mamluk",name:"Mamluk Sultanate",colour:"#5d9b70",regions:["EGY","SYR","JOR","ISR","PSX","LBN"],label:[32,30],approx:true},
    {id:"france",name:"France",colour:"#6b83b6",regions:["FRA"],label:[2,47],approx:true},
    {id:"hre",name:"Holy Roman Empire",colour:"#8a8a66",regions:["DEU","AUT","CHE","BEL","LUX","NLD","CZE","SVN",...IT_NORTH],label:[10,49],approx:true},
    {id:"delhi",name:"Delhi Sultanate",colour:"#d2a24c",regions:["IN-DL","IN-HR","IN-UP","IN-RJ","IN-PB","IN-GJ","IN-MP"],label:[77,26],approx:true}
  ]},
  { year:1450, polities:[
    {id:"ming",name:"Ming China",colour:"#9b6fae",regions:["CHN"],minus:["CN-XJ","CN-XZ","CN-QH","CN-NM"],label:[111,33],approx:true},
    {id:"ottoman",name:"Ottoman state",colour:"#5d9b70",regions:["BGR","MKD","GRC",...TR_OTTOMAN_1450],label:[28,40],approx:true},
    {id:"mamluk",name:"Mamluk Sultanate",colour:"#74a36b",regions:["EGY","SYR","JOR","ISR","PSX","LBN"],label:[33,29],approx:true},
    {id:"france",name:"France",colour:"#6b83b6",regions:["FRA"],label:[2,47],approx:true},
    {id:"poland-lithuania",name:"Poland-Lithuania",colour:"#c48a4a",regions:["POL","LTU","BLR","UKR"],label:[24,52],approx:true},
    {id:"inca",name:"Inca",colour:"#b9905a",regions:["PER","BOL","ECU"],label:[-75,-12],approx:true}
  ]},
  { year:1550, polities:[
    {id:"spain",name:"Spanish monarchy",colour:"#c89b3c",regions:["ESP","MEX","GTM","HND","NIC","CRI","PAN","PER","BOL","ECU","COL","VEN","CUB","DOM","PRI"],label:[-3,40],approx:true},
    {id:"portugal",name:"Portugal",colour:"#6ba37a",regions:["PRT","BRA"],label:[-45,-13],approx:true},
    {id:"france",name:"France",colour:"#6b83b6",regions:["FRA"],label:[2,47],approx:true},
    {id:"ottoman",name:"Ottoman Empire",colour:"#5d9b70",regions:["TUR","GRC","BGR","MKD","ALB","SRB","BIH","HUN","SYR","IRQ","JOR","ISR","PSX","LBN","EGY","LBY","DZA"],label:[32,39],approx:true},
    {id:"safavid",name:"Safavid Persia",colour:"#b06a4a",regions:["IRN","AZE"],label:[52,32],approx:true},
    {id:"sur",name:"Sur Empire (Mughals in exile)",colour:"#d2a24c",regions:["PAK","IN-UP","IN-DL","IN-HR","IN-PB","IN-BR","IN-RJ","BGD","IN-WB"],label:[78,27],approx:true},
    {id:"ming",name:"Ming China",colour:"#9b6fae",regions:["CHN"],minus:["CN-XJ","CN-XZ","CN-QH","CN-NM"],label:[111,33],approx:true}
  ]},
  { year:1650, polities:[
    {id:"spain",name:"Spain",colour:"#c89b3c",regions:["ESP",...SPAIN_LATAM,"US-FL","US-NM"],label:[-3,40],approx:true},
    {id:"portugal",name:"Portugal",colour:"#6ba37a",regions:["PRT","BRA"],label:[-45,-13],approx:true},
    {id:"france",name:"France",colour:"#6b83b6",regions:["FRA","CA-QC"],label:[2,47],approx:true},
    {id:"britain",name:"England / Britain",colour:"#bf6b5d",regions:["GBR","IRL",...US_COLONIES_1650],label:[-1,53],approx:true},
    {id:"dutch",name:"Dutch Republic",colour:"#d08a44",regions:["NLD","US-NY","US-NJ"],label:[5,52],approx:true},
    {id:"sweden",name:"Swedish empire",colour:"#7a9ab0",regions:["SWE","FIN","EST"],label:[17,61],approx:true},
    {id:"russia",name:"Russia",colour:"#7aa0b8",regions:["RUS"],minus:[...RUS_SOUTH,...RUS_AMUR,"RU-ROS","RU-KGD","RU-LEN","RU-SPE","RU-SMO","RU-BRY","RU-KAM","RU-CHU","RU-MAG","RU-KHA"],label:[45,58],approx:true},
    {id:"ottoman",name:"Ottoman Empire",colour:"#5d9b70",regions:["TUR","GRC","BGR","MKD","ALB","SRB","BIH","HUN","SYR","IRQ","JOR","ISR","PSX","LBN","EGY","LBY","DZA","TUN"],label:[32,39],approx:true},
    {id:"mughal",name:"Mughal India",colour:"#d2a24c",regions:["IND","PAK","BGD"],minus:["IN-KA","IN-KL","IN-TN","IN-AP","IN-TG","IN-GA","IN-PY",...IN_NORTHEAST],label:[78,25],approx:true},
    {id:"qing",name:"Qing China (conquest under way)",colour:"#9b6fae",regions:["CHN"],minus:["CN-XJ","CN-XZ","CN-QH","CN-YN","CN-GZ","CN-GX","CN-GD","CN-FJ","CN-HI"],label:[113,37],approx:true}
  ]},
  { year:1715, polities:[
    {id:"france",name:"France",colour:"#6b83b6",regions:["FRA","CA-QC","US-LA"],label:[2,47],approx:true},
    {id:"britain",name:"Britain",colour:"#bf6b5d",regions:["GBR","IRL","JAM","CA-NL","CA-NS",...US_COLONIES_1715],label:[-1,53],approx:true},
    {id:"spain",name:"Spain",colour:"#c89b3c",regions:["ESP",...SPAIN_LATAM,"US-FL","US-NM"],label:[-3,40],approx:true},
    {id:"portugal",name:"Portugal",colour:"#6ba37a",regions:["PRT","BRA"],label:[-45,-13],approx:true},
    {id:"austria",name:"Habsburg Austria",colour:"#8a8a66",regions:["AUT","HUN","CZE","SVK","HRV","SVN","BEL"],label:[16,48],approx:true},
    {id:"sweden",name:"Sweden",colour:"#7a9ab0",regions:["SWE","FIN"],label:[17,61],approx:true},
    {id:"russia",name:"Russia",colour:"#7aa0b8",regions:["RUS"],minus:[...RUS_SOUTH,...RUS_AMUR,"RU-ROS","RU-KGD"],label:[45,58],approx:true},
    {id:"ottoman",name:"Ottoman Empire",colour:"#5d9b70",regions:["TUR","GRC","BGR","MKD","ALB","SRB","BIH","ROU","SYR","IRQ","JOR","ISR","PSX","LBN","EGY","LBY","DZA","TUN"],label:[32,39],approx:true},
    {id:"mughal",name:"Mughal India",colour:"#d2a24c",regions:["IND","PAK","BGD"],minus:["IN-KL",...IN_NORTHEAST],label:[78,22],approx:true},
    {id:"qing",name:"Qing China",colour:"#9b6fae",regions:["CHN","MNG"],minus:["CN-XJ","CN-XZ"],label:[111,36],approx:true}
  ]},
  { year:1789, polities:[
    {id:"france",name:"France",colour:"#6b83b6",regions:["FRA"],label:[2,47],approx:true},
    {id:"britain",name:"Britain",colour:"#bf6b5d",regions:["GBR","IRL","JAM","CAN","IN-WB","IN-BR","IN-JH","BGD"],minus:["CA-BC","CA-YT"],label:[-1,53],approx:true},
    {id:"spain",name:"Spain",colour:"#c89b3c",regions:["ESP",...SPAIN_LATAM,"URY",...SPAIN_NA_1789],label:[-3,40],approx:true},
    {id:"portugal",name:"Portugal",colour:"#6ba37a",regions:["PRT","BRA"],label:[-45,-13],approx:true},
    {id:"usa",name:"United States",colour:"#7ba0c4",regions:US_1789,label:[-80,38],approx:true},
    {id:"austria",name:"Habsburg Austria",colour:"#8a8a66",regions:["AUT","HUN","CZE","SVK","HRV","SVN","BEL"],label:[16,48],approx:true},
    {id:"russia",name:"Russia",colour:"#7aa0b8",regions:["RUS","US-AK"],minus:[...RUS_AMUR,"RU-KGD","RU-CE","RU-IN","RU-DA"],label:[45,58],approx:true},
    {id:"ottoman",name:"Ottoman Empire",colour:"#5d9b70",regions:["TUR","GRC","BGR","MKD","ALB","SRB","BIH","ROU","SYR","IRQ","JOR","ISR","PSX","LBN","EGY","LBY","DZA","TUN"],label:[32,39],approx:true},
    {id:"maratha",name:"Maratha Confederacy",colour:"#d2a24c",regions:["IN-MH","IN-MP","IN-GJ","IN-CT"],label:[76,21],approx:true},
    {id:"qing",name:"Qing China",colour:"#9b6fae",regions:["CHN","MNG"],label:[111,36],approx:true}
  ]},
  { year:1914, polities:[
    {id:"britain",name:"British Empire",colour:"#bf6b5d",regions:["GBR","IRL","CAN","IND","PAK","BGD","MMR","EGY","CYP","JAM"],label:[-1,53],approx:true},
    {id:"france",name:"France and empire",colour:"#6b83b6",regions:["FRA","DZA","MAR","TUN","MRT"],label:[2,47],approx:true},
    {id:"germany",name:"German Empire",colour:"#8a8a66",regions:["DEU"],label:[10,51],approx:true},
    {id:"austria",name:"Austria-Hungary",colour:"#c48a4a",regions:["AUT","HUN","CZE","SVK","SVN","HRV","BIH"],label:[17,48],approx:true},
    {id:"italy",name:"Italy",colour:"#b9905a",regions:["ITA","LBY"],label:[12,43],approx:true},
    {id:"russia",name:"Russian Empire",colour:"#7aa0b8",regions:["RUS","POL","UKR","BLR","LTU","LVA","EST","FIN","MDA",...SOVIET_ASIA],label:[45,58],approx:true},
    {id:"ottoman",name:"Ottoman Empire",colour:"#5d9b70",regions:["TUR","SYR","IRQ","JOR","ISR","PSX","LBN"],label:[35,38],approx:true},
    {id:"usa",name:"United States",colour:"#7ba0c4",regions:["USA"],label:[-97,39],approx:true},
    {id:"china",name:"Republic of China",colour:"#9b6fae",regions:["CHN"],minus:["CN-XZ"],label:[111,35],approx:true}
  ]},
  { year:1939, polities:[
    {id:"britain",name:"British Empire",colour:"#bf6b5d",regions:["GBR","CAN","IND","PAK","BGD","MMR","EGY","CYP","JAM"],label:[-1,53],approx:true},
    {id:"france",name:"France and empire",colour:"#6b83b6",regions:["FRA","DZA","MAR","TUN","MRT","SYR","LBN"],label:[2,47],approx:true},
    {id:"germany",name:"Germany",colour:"#8a8a66",regions:["DEU","AUT","CZE"],label:[11,51],approx:true},
    {id:"italy",name:"Italy",colour:"#b9905a",regions:["ITA","LBY","ALB"],label:[12,43],approx:true},
    {id:"ussr",name:"Soviet Union",colour:"#7aa0b8",regions:["RUS","UKR","BLR",...SOVIET_ASIA],label:[45,58],approx:true},
    {id:"usa",name:"United States",colour:"#7ba0c4",regions:["USA"],label:[-97,39],approx:true},
    {id:"china",name:"China",colour:"#9b6fae",regions:["CHN"],minus:["CN-HL","CN-JL","CN-LN","CN-XZ"],label:[111,33],approx:true},
    {id:"manchukuo",name:"Manchukuo (Japanese)",colour:"#c97b68",regions:["CN-HL","CN-JL","CN-LN"],label:[126,45],approx:true}
  ]}
  ];
})();