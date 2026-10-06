// Poland, Hungary, Kievan Rus and the Mongol shock, round 8.
(function () {
  const POL="#8fb36a", HUN="#d8a84f", RUS="#9a6a38", MON="#6b6b6b", GER="#7b93a4", LINE="#5f4b8b";
  const KIEV=[30.52,50.45], NOV=[31.28,58.52], KRA=[19.94,50.06], GNI=[17.03,52.54], ESZ=[18.74,47.79], BUDA=[19.04,47.5], LEGN=[16.16,51.21], SAJO=[20.8,48.1], PRAG=[14.42,50.08], MOS=[37.62,55.75];
  window.PLATES["eastern-kingdoms-mongols"] = { id:"eastern-kingdoms-mongols", title:"Poland, Hungary, Rus and the Mongol shock", head:"High Middle Ages / Eastern Europe", folio:"22", viewer:"medieval/1241/ch-eastern-kingdoms", figures:[
    { caption:"New Christian kingdoms and Rus before 1200", share:0.5, extent:[[10,44],[42,60]], projection:"conic", layers:[
      {id:"poland",type:"area",clipToLand:true,tier:"core",colour:POL,legend:"Piast Poland",polygon:[[14,49],[17,54],[22,54],[24,50],[20,48]],smooth:"basis"},
      {id:"hungary",type:"area",clipToLand:true,tier:"core",colour:HUN,legend:"Arpad Hungary and Croatia",polygon:[[15,45],[19,49],[25,49],[27,46],[22,44],[17,44]],smooth:"basis"},
      {id:"kievan-rus",type:"area",clipToLand:true,tier:"core",colour:RUS,legend:"Kievan Rus principalities",polygon:[[25,49],[30,56],[38,56],[40,50],[34,47],[28,48]],smooth:"basis"},
      {id:"german-east",type:"arrow",colour:GER,width:2.8,legend:"German eastward settlement",path:[[10,51],[15,52],[20,53]],label:"eastward settlement"},
      {id:"kiev",type:"point",symbol:"capital",at:KIEV,name:"Kiev"}, {id:"novgorod",type:"point",symbol:"large-city",at:NOV,name:"Novgorod"}, {id:"krakow",type:"point",symbol:"capital",at:KRA,name:"Krakow"}, {id:"esztergom",type:"point",symbol:"capital",at:ESZ,name:"Esztergom"}, {id:"prague",type:"point",symbol:"capital",at:PRAG,name:"Prague"}
    ], legend:{position:"bottom-left",columns:1} },
    { caption:"The Mongol arrival, 1223-1241", share:0.5, extent:[[10,42],[55,58]], projection:"conic", layers:[
      {id:"golden-road",type:"route",style:"dotted",colour:LINE,legend:"Steppe and river routes",path:[[45,48],[37,50],[30.52,50.45],[24,50],[20,48]]},
      {id:"mongol-rus",type:"arrow",colour:MON,width:4,legend:"Mongol campaigns",path:[[50,48],[42,49],[37,50],[30.52,50.45]],label:"to Kiev"},
      {id:"mongol-poland",type:"arrow",colour:MON,width:3.5,path:[[37,50],[29,51],[22,51],LEGN],label:"to Legnica"},
      {id:"mongol-hungary",type:"arrow",colour:MON,width:3.5,path:[[37,50],[30,48],[25,47],SAJO],label:"to Sajo"},
      {id:"rus-fragment",type:"area",clipToLand:true,tier:"influence",colour:RUS,legend:"Fragmented Rus",polygon:[[28,49],[32,56],[40,55],[42,50],[36,47]],smooth:"basis"},
      {id:"kalka",type:"point",symbol:"battle",at:[38.5,47.1],name:"Kalka",tag:{text:"1223",colour:"#e8806a"}}, {id:"kiev-fall",type:"point",symbol:"destroyed",at:KIEV,name:"Kiev",tag:{text:"1240",colour:"#e8806a"}}, {id:"legnica",type:"point",symbol:"battle",at:LEGN,name:"Legnica",tag:{text:"1241",colour:"#e8806a"}}, {id:"sajo",type:"point",symbol:"battle",at:SAJO,name:"Sajo",tag:{text:"1241",colour:"#e8806a"}}, {id:"moscow",type:"point",symbol:"large-city",at:MOS,name:"Moscow",tag:{text:"future",colour:"#f1c75b"}}
    ], legend:{position:"bottom-left",columns:1} }
  ], text:{ intro:"Eastern Europe is not a blank edge of the medieval map: Poland, Hungary and Rus connect Latin, Orthodox and steppe worlds.", sections:[
    {heading:"Kingdoms", entries:[
      {date:"966-1001", text:"Poland and Hungary enter Latin Christianity with their own dynasties and church centres.", refs:["poland","hungary","krakow","esztergom","german-east"]},
      {date:"1000s-1100s", text:"Kievan Rus remains an Orthodox river-route world between Novgorod, Kiev and Byzantium, but the principalities are increasingly divided.", refs:["kievan-rus","kiev","novgorod"]}
    ]},
    {heading:"Mongol shock", entries:[
      {date:"1223-40", text:"The Mongols first appear at Kalka, then take Kiev. This is the hinge into the later Russia period and the Golden Horde story.", refs:["mongol-rus","kalka","kiev-fall","rus-fragment"]},
      {date:"1241", text:"Mongol armies hit Poland at Legnica and Hungary at the Sajo River, tying Central Europe to the same shock that reshaped Rus.", refs:["mongol-poland","mongol-hungary","legnica","sajo"]},
      {date:"after 1240", text:"Moscow is still small here, but Mongol tribute and princely politics become the background for Muscovy's later rise.", refs:["moscow","golden-road"]}
    ]}
  ]}, sources:["Penguin Atlas Vol. 1 pp. 166-170", "Approximate kingdom fields and campaign routes; coastlines and rivers: Natural Earth 1:50m"] };
})();
