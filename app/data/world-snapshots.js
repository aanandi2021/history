// Approximate political snapshots for the muted viewer underlay. Region codes are Natural Earth admin-0/admin-1 blocks.
window.WORLD_SNAPSHOTS = [
  { year:-1499, polities:[
    {id:"egypt-new-kingdom",name:"New Kingdom Egypt",colour:"#c99a45",regions:["EGY"],label:[30,27],approx:true},
    {id:"hittite",name:"Hittite kingdom",colour:"#b06a4a",regions:["TUR"],label:[35,39],approx:true},
    {id:"shang",name:"Shang China",colour:"#9b6fae",polygon:[[110,31],[116,32],[119,36],[116,39],[111,38],[108,35]],label:[114,36],approx:true},
    {id:"olmec",name:"Olmec heartland",colour:"#5d9b70",polygon:[[-96,16],[-92,17],[-91,19],[-95,20],[-98,18]],label:[-94,18],approx:true}
  ]},
  { year:-499, polities:[
    {id:"persia",name:"Achaemenid Persia",colour:"#b06a4a",regions:["IRN","IRQ","SYR","TUR","EGY","ISR","JOR","LBN","AFG"],label:[50,32],approx:true},
    {id:"greek",name:"Greek city worlds",colour:"#6b83b6",regions:["GRC"],label:[22,38],approx:true},
    {id:"carthage",name:"Carthage",colour:"#7aa36b",regions:["TUN"],label:[10,34],approx:true},
    {id:"zhou",name:"Late Zhou China",colour:"#9b6fae",polygon:[[105,29],[119,30],[122,38],[116,42],[106,40]],label:[114,36],approx:true}
  ]},
  { year:1, polities:[
    {id:"rome",name:"Roman Empire",colour:"#b85c5c",regions:["ITA","ESP","PRT","FRA","BEL","NLD","CHE","AUT","HRV","BIH","SRB","GRC","TUR","SYR","LBN","ISR","JOR","EGY","TUN","DZA","MAR"],label:[14,42],approx:true},
    {id:"parthia",name:"Parthian Empire",colour:"#b06a4a",regions:["IRN","IRQ","TKM"],label:[52,34],approx:true},
    {id:"han",name:"Han China",colour:"#9b6fae",regions:["CN-SN","CN-SX","CN-HA","CN-HB","CN-SD","CN-JS","CN-AH","CN-ZJ","CN-JX","CN-HN","CN-SC","CN-GS"],label:[112,34],approx:true},
    {id:"kushan",name:"Kushan realm",colour:"#7aa36b",regions:["AFG","PAK"],label:[70,34],approx:true}
  ]},
  { year:400, polities:[
    {id:"west-rome",name:"Western Roman Empire",colour:"#b85c5c",regions:["ITA","ESP","PRT","FRA","BEL","NLD","CHE","AUT","HRV","BIH","SRB","TUN","DZA","MAR"],label:[7,43],approx:true},
    {id:"east-rome",name:"Eastern Roman Empire",colour:"#7a91c4",regions:["GRC","TUR","SYR","LBN","ISR","JOR","EGY"],label:[30,39],approx:true},
    {id:"sassanid",name:"Sasanian Persia",colour:"#b06a4a",regions:["IRN","IRQ","TKM","AFG"],label:[53,32],approx:true},
    {id:"gupta",name:"Gupta India",colour:"#d2a24c",regions:["IN-UP","IN-BR","IN-MP","IN-RJ","IN-GJ"],label:[78,24],approx:true}
  ]},
  { year:800, polities:[
    {id:"carolingian",name:"Carolingian Empire",colour:"#6b83b6",regions:["FRA","DEU","BEL","NLD","CHE","AUT","ITA"],label:[6,48],approx:true},
    {id:"byzantine",name:"Byzantium",colour:"#7a91c4",regions:["GRC","TUR","CYP"],label:[29,40],approx:true},
    {id:"abbasid",name:"Abbasid Caliphate",colour:"#5d9b70",regions:["IRQ","IRN","SYR","JOR","ISR","LBN","SAU","EGY","DZA","TUN","MAR","AFG"],label:[44,31],approx:true},
    {id:"tang",name:"Tang China",colour:"#9b6fae",regions:["CHN"],label:[110,35],approx:true},
    {id:"pala",name:"Pala Bengal",colour:"#d2a24c",regions:["IN-WB","IN-BR","BGD"],label:[88,24],approx:true}
  ]},
  { year:1000, polities:[
    {id:"hre",name:"Holy Roman Empire",colour:"#6b83b6",regions:["DEU","AUT","CHE","BEL","NLD","ITA"],label:[10,50],approx:true},
    {id:"byzantine",name:"Byzantium",colour:"#7a91c4",regions:["GRC","TUR"],label:[28,40],approx:true},
    {id:"fatimid",name:"Fatimid Caliphate",colour:"#5d9b70",regions:["EGY","LBY","TUN","DZA","SYR","LBN","ISR"],label:[31,27],approx:true},
    {id:"song",name:"Song China",colour:"#9b6fae",regions:["CN-HA","CN-HB","CN-HN","CN-AH","CN-JS","CN-ZJ","CN-JX","CN-FJ","CN-GD","CN-GX","CN-SC"],label:[113,31],approx:true},
    {id:"chola",name:"Chola realm",colour:"#d2a24c",regions:["IN-TN","LKA"],label:[79,10],approx:true}
  ]},
  { year:1200, polities:[
    {id:"france",name:"France",colour:"#6b83b6",regions:["FRA"],label:[2,47],approx:true},
    {id:"hre",name:"Holy Roman Empire",colour:"#8a8a66",regions:["DEU","AUT","CHE","ITA","BEL","NLD"],label:[10,49],approx:true},
    {id:"byzantine",name:"Byzantium",colour:"#7a91c4",regions:["GRC","TUR"],label:[29,39],approx:true},
    {id:"ayyubid",name:"Ayyubid lands",colour:"#5d9b70",regions:["EGY","SYR","JOR","ISR","LBN"],label:[33,29],approx:true},
    {id:"jin-song",name:"Jin / Song China",colour:"#9b6fae",regions:["CHN"],label:[110,34],approx:true},
    {id:"delhi",name:"Delhi Sultanate",colour:"#d2a24c",regions:["IN-DL","IN-HR","IN-UP","IN-RJ","IN-PB"],label:[77,28],approx:true}
  ]},
  { year:1300, polities:[
    {id:"mongol",name:"Mongol successor khanates",colour:"#9b6fae",regions:["MNG","CHN","KAZ","UZB","TKM","IRN","IRQ","AFG"],label:[82,43],approx:true},
    {id:"mamluk",name:"Mamluk Sultanate",colour:"#5d9b70",regions:["EGY","SYR","JOR","ISR","LBN"],label:[32,30],approx:true},
    {id:"france",name:"France",colour:"#6b83b6",regions:["FRA"],label:[2,47],approx:true},
    {id:"hre",name:"Holy Roman Empire",colour:"#8a8a66",regions:["DEU","AUT","CHE","ITA","BEL","NLD"],label:[10,49],approx:true},
    {id:"delhi",name:"Delhi Sultanate",colour:"#d2a24c",regions:["IND"],label:[77,24],approx:true}
  ]},
  { year:1450, polities:[
    {id:"ming",name:"Ming China",colour:"#9b6fae",regions:["CHN"],label:[111,35],approx:true},
    {id:"ottoman",name:"Ottoman state",colour:"#5d9b70",regions:["TUR","GRC","BGR"],label:[29,40],approx:true},
    {id:"mamluk",name:"Mamluk Sultanate",colour:"#74a36b",regions:["EGY","SYR","JOR","ISR","LBN"],label:[33,29],approx:true},
    {id:"france",name:"France",colour:"#6b83b6",regions:["FRA"],label:[2,47],approx:true},
    {id:"poland-lithuania",name:"Poland-Lithuania",colour:"#c48a4a",regions:["POL","LTU","BLR","UKR"],label:[24,52],approx:true},
    {id:"inca",name:"Inca",colour:"#b9905a",regions:["PER","BOL","ECU"],label:[-75,-12],approx:true}
  ]},
  { year:1550, polities:[
    {id:"spain",name:"Spanish monarchy",colour:"#c89b3c",regions:["ESP","MEX","PER","BOL","CUB","DOM"],label:[-3,40],approx:true},
    {id:"portugal",name:"Portugal",colour:"#6ba37a",regions:["PRT","BRA"],label:[-45,-13],approx:true},
    {id:"france",name:"France",colour:"#6b83b6",regions:["FRA"],label:[2,47],approx:true},
    {id:"ottoman",name:"Ottoman Empire",colour:"#5d9b70",regions:["TUR","GRC","BGR","SRB","BIH","SYR","IRQ","EGY","DZA","TUN"],label:[32,39],approx:true},
    {id:"safavid",name:"Safavid Persia",colour:"#b06a4a",regions:["IRN","AZE"],label:[52,32],approx:true},
    {id:"mughal",name:"Mughal India",colour:"#d2a24c",regions:["PAK","IN-UP","IN-DL","IN-HR","IN-PB"],label:[76,28],approx:true},
    {id:"ming",name:"Ming China",colour:"#9b6fae",regions:["CHN"],label:[111,35],approx:true}
  ]},
  { year:1650, polities:[
    {id:"spain",name:"Spain",colour:"#c89b3c",regions:["ESP","MEX","PER","BOL","CUB","DOM","CHL","ARG"],label:[-3,40],approx:true},
    {id:"france",name:"France",colour:"#6b83b6",regions:["FRA","CA-QC"],label:[2,47],approx:true},
    {id:"britain",name:"England / Britain",colour:"#bf6b5d",regions:["GBR","IRL","USA"],label:[-1,53],approx:true},
    {id:"dutch",name:"Dutch Republic",colour:"#d08a44",regions:["NLD"],label:[5,52],approx:true},
    {id:"ottoman",name:"Ottoman Empire",colour:"#5d9b70",regions:["TUR","GRC","BGR","SRB","BIH","SYR","IRQ","EGY","DZA","TUN"],label:[32,39],approx:true},
    {id:"mughal",name:"Mughal India",colour:"#d2a24c",regions:["IND","PAK","BGD"],label:[78,24],approx:true},
    {id:"qing",name:"Qing China",colour:"#9b6fae",regions:["CHN"],label:[111,35],approx:true}
  ]},
  { year:1715, polities:[
    {id:"france",name:"France",colour:"#6b83b6",regions:["FRA","CA-QC"],label:[2,47],approx:true},
    {id:"britain",name:"Britain",colour:"#bf6b5d",regions:["GBR","IRL","USA","CAN"],label:[-1,53],approx:true},
    {id:"spain",name:"Spain",colour:"#c89b3c",regions:["ESP","MEX","PER","BOL","CUB","DOM","CHL","ARG","COL","VEN"],label:[-3,40],approx:true},
    {id:"austria",name:"Habsburg Austria",colour:"#8a8a66",regions:["AUT","HUN","CZE","SVK","HRV"],label:[16,48],approx:true},
    {id:"ottoman",name:"Ottoman Empire",colour:"#5d9b70",regions:["TUR","GRC","BGR","SRB","BIH","SYR","IRQ","EGY","DZA","TUN"],label:[32,39],approx:true},
    {id:"russia",name:"Russia",colour:"#7aa0b8",regions:["RUS"],label:[45,58],approx:true},
    {id:"qing",name:"Qing China",colour:"#9b6fae",regions:["CHN","MNG"],label:[111,38],approx:true}
  ]},
  { year:1789, polities:[
    {id:"france",name:"France",colour:"#6b83b6",regions:["FRA"],label:[2,47],approx:true},
    {id:"britain",name:"Britain",colour:"#bf6b5d",regions:["GBR","IRL","CAN","IND"],label:[-1,53],approx:true},
    {id:"spain",name:"Spain",colour:"#c89b3c",regions:["ESP","MEX","PER","BOL","CUB","DOM","CHL","ARG","COL","VEN"],label:[-3,40],approx:true},
    {id:"usa",name:"United States",colour:"#7ba0c4",regions:["USA"],label:[-77,39],approx:true},
    {id:"austria",name:"Habsburg Austria",colour:"#8a8a66",regions:["AUT","HUN","CZE","SVK","HRV"],label:[16,48],approx:true},
    {id:"russia",name:"Russia",colour:"#7aa0b8",regions:["RUS"],label:[45,58],approx:true},
    {id:"ottoman",name:"Ottoman Empire",colour:"#5d9b70",regions:["TUR","GRC","BGR","SRB","BIH","SYR","IRQ","EGY","DZA","TUN"],label:[32,39],approx:true},
    {id:"qing",name:"Qing China",colour:"#9b6fae",regions:["CHN","MNG"],label:[111,38],approx:true}
  ]},
  { year:1914, polities:[
    {id:"britain",name:"British Empire",colour:"#bf6b5d",regions:["GBR","IRL","CAN","IND","PAK","BGD","EGY"],label:[-1,53],approx:true},
    {id:"france",name:"France and empire",colour:"#6b83b6",regions:["FRA","DZA","MAR","TUN"],label:[2,47],approx:true},
    {id:"germany",name:"German Empire",colour:"#8a8a66",regions:["DEU"],label:[10,51],approx:true},
    {id:"austria",name:"Austria-Hungary",colour:"#c48a4a",regions:["AUT","HUN","CZE","SVK","HRV","BIH"],label:[17,48],approx:true},
    {id:"russia",name:"Russian Empire",colour:"#7aa0b8",regions:["RUS","POL","UKR","BLR","LTU","LVA","EST","FIN"],label:[45,58],approx:true},
    {id:"ottoman",name:"Ottoman Empire",colour:"#5d9b70",regions:["TUR","SYR","IRQ","JOR","ISR","LBN","SAU"],label:[35,38],approx:true},
    {id:"usa",name:"United States",colour:"#7ba0c4",regions:["USA"],label:[-97,39],approx:true},
    {id:"qing-republic",name:"Republic of China",colour:"#9b6fae",regions:["CHN"],label:[111,35],approx:true}
  ]},
  { year:1939, polities:[
    {id:"britain",name:"British Empire",colour:"#bf6b5d",regions:["GBR","IRL","CAN","IND","PAK","BGD","EGY"],label:[-1,53],approx:true},
    {id:"france",name:"France and empire",colour:"#6b83b6",regions:["FRA","DZA","MAR","TUN"],label:[2,47],approx:true},
    {id:"germany",name:"Germany",colour:"#8a8a66",regions:["DEU","AUT","CZE"],label:[11,51],approx:true},
    {id:"italy",name:"Italy",colour:"#b9905a",regions:["ITA","LBY"],label:[12,43],approx:true},
    {id:"ussr",name:"Soviet Union",colour:"#7aa0b8",regions:["RUS","UKR","BLR"],label:[45,58],approx:true},
    {id:"usa",name:"United States",colour:"#7ba0c4",regions:["USA"],label:[-97,39],approx:true},
    {id:"china",name:"China",colour:"#9b6fae",regions:["CHN"],label:[111,35],approx:true},
    {id:"japan",name:"Japan",colour:"#c97b68",polygon:[[128,30],[146,30],[146,46],[128,46]],label:[138,38],approx:true}
  ]}
];
