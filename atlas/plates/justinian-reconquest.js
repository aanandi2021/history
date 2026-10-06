// Justinian's reconquest, based on the round 6 Penguin Atlas spreads.
(function () {
  const BYZ="#d66a4a", V="#2f7f86", G="#5b78a8", L="#79a85a";
  const CON=[28.98,41.01], CAR=[10.31,36.85], SIC=[14.25,37.6], ROME=[12.5,41.9], RAV=[12.2,44.42], TAG=[12.77,43.35], ALEX=[29.92,31.2];
  window.PLATES["justinian-reconquest"] = { id:"justinian-reconquest", title:"Justinian's reconquest, A.D. 527-565", head:"Early Middle Ages / Byzantium", folio:"13", viewer:"medieval/0540/ch-justinian-reconquest", figures:[
    { caption:"The Mediterranean restoration attempted by Justinian", share:0.66, extent:[[-7,25],[42,45.7]], projection:"mercator", layers:[
      {id:"byzantine-core",type:"area",clipToLand:true,tier:"core",colour:BYZ,legend:"Eastern Roman core: Balkans, Anatolia, Syria and Egypt",polygon:[[18,41.5],[22,44.5],[29,43.5],[36,40],[39,36],[36,32],[32,31],[30,27],[26,27],[25,31],[31,34],[34,36],[31,39],[25,40],[21,39]],smooth:false},
      {id:"africa",type:"area",clipToLand:true,tier:"conquest",colour:BYZ,legend:"Reconquered from Vandals, 533-34",polygon:[[8.0,33.6],[9.8,36.7],[13.2,37.3],[16.8,35.8],[17.4,33.6],[13.0,32.5]],smooth:false},
      {id:"italy",type:"area",clipToLand:true,tier:"conquest",colour:BYZ,legend:"Reconquered Italy, 535-54",polygon:[[9.0,45.0],[12.0,45.8],[15.5,43.5],[16.1,40.3],[14.6,37.7],[12.5,40.2],[10.6,43.2]],smooth:false},
      {id:"spania",type:"area",clipToLand:true,tier:"conquest",colour:BYZ,pattern:"stripe",legend:"Spania: southeast Iberian foothold, 552",polygon:[[-2.2,37.9],[0.7,38.5],[1.6,37.2],[-1.5,36.4]],smooth:false},
      {id:"vandal",type:"area",clipToLand:true,colour:V,pattern:"hatch",legend:"Vandal kingdom before 533: coast and islands",polygon:[[7.2,33.6],[9.8,36.8],[13.0,37.1],[17.2,35.8],[18.0,33.7],[13.5,32.8]],smooth:false},
      {id:"vandal-sardinia",type:"area",clipToLand:true,colour:V,pattern:"hatch",polygon:[[8.0,38.8],[9.6,41.2],[10.0,40.0],[9.0,38.8]],smooth:false},
      {id:"vandal-corsica",type:"area",clipToLand:true,colour:V,pattern:"hatch",polygon:[[8.5,41.2],[9.6,43.2],[10.2,42.5],[9.4,41.2]],smooth:false},
      {id:"vandal-balearics",type:"area",clipToLand:true,colour:V,pattern:"hatch",polygon:[[1.0,38.4],[3.9,40.0],[4.2,38.2],[1.5,37.7]],smooth:false},
      {id:"ostrogoth",type:"area",clipToLand:true,colour:G,pattern:"hatch-back",legend:"Ostrogothic kingdom before 535",polygon:[[8.6,45.6],[12.4,46.1],[16.2,43.5],[16.3,39.4],[14.8,37.8],[12.6,40.0],[10.5,43.2]],smooth:false},
      {id:"belisarius-africa",type:"arrow",colour:BYZ,width:6,label:"Belisarius",legend:"Belisarius to Africa",path:[CON,[20,37.5],CAR]},
      {id:"italy-campaign",type:"arrow",colour:BYZ,width:5,legend:"War in Sicily and Italy",path:[CAR,SIC,ROME,RAV,TAG]},
      {id:"spania-campaign",type:"arrow",colour:BYZ,width:4,legend:"Byzantine foothold in Spain, 552",path:[CAR,[3.0,37.0],[-0.8,37.2]]},
      {id:"lombards",type:"arrow",colour:L,width:5,date:"568",legend:"Lombards arrive after the war",path:[[14.4,46.7],[13.4,45.7],[10.5,44.9]]},
      {id:"constantinople",type:"point",symbol:"capital",at:CON,name:"Constantinople",labelPos:"e"}, {id:"alexandria",type:"point",symbol:"large-city",at:ALEX,name:"Alexandria",labelPos:"e"}, {id:"antioch",type:"point",symbol:"large-city",at:[36.2,36.2],name:"Antioch",labelPos:"e"},
      {id:"carthage",type:"point",symbol:"capital",at:CAR,name:"Carthage",tag:{text:"533",colour:"#f1c75b"}}, {id:"rome",type:"point",symbol:"capital",at:ROME,name:"Rome"}, {id:"ravenna",type:"point",symbol:"capital",at:RAV,name:"Ravenna",tag:{text:"540",colour:"#f1c75b"}}, {id:"taginae",type:"point",symbol:"battle",at:TAG,name:"Taginae",tag:{text:"552",colour:"#e8806a"},legend:"Battle"}, {id:"spain-pt",type:"point",symbol:"fortress",at:[-0.8,37.2],name:"Spania",tag:{text:"552",colour:"#f1c75b"}}
    ], legend:{position:"bottom-left",columns:2} },
    { caption:"Cost of the restoration", share:0.34, extent:[[6,36],[18,46]], projection:"mercator", layers:[
      {id:"italy-war-zone",type:"area",clipToLand:true,colour:"#e0a080",opacity:0.35,legend:"Italy devastated by long war",polygon:[[9,45],[12,46],[16,43],[16,39],[13,38],[10,42]],smooth:false},
      {id:"imperial-corridors",type:"route",style:"road",colour:"#7b6848",legend:"Thin imperial corridors",path:[[12.2,44.42],[12.5,41.9],[14.25,37.6]]},
      {id:"exarchate",type:"area",clipToLand:true,tier:"core",colour:BYZ,legend:"Ravenna and imperial footholds",polygon:[[11.5,44.0],[12.5,44.8],[13.2,44.0],[12.5,43.5]],smooth:false},
      {id:"lombard-north",type:"area",clipToLand:true,tier:"influence",colour:L,legend:"Lombard pressure after 568",polygon:[[8,45],[11,46],[14,45],[13,44],[10,44]],smooth:false},
      {id:"ravenna2",type:"point",symbol:"capital",at:RAV,name:"Ravenna"}, {id:"rome2",type:"point",symbol:"bishopric",at:ROME,name:"Rome"}, {id:"sicily2",type:"point",symbol:"port",at:SIC,name:"Sicily"}
    ], legend:{position:"bottom-left",columns:1} }
  ], text:{ intro:"Justinian's western wars briefly made the Roman claim visible again, but the map was expensive and thin.", sections:[
    {heading:"Reconquest", entries:[
      {date:"533-34", text:"Belisarius crosses from Constantinople's world to Africa and destroys the Vandal kingdom at Carthage. The eastern core still includes Egypt, Syria, Palestine and Anatolia, not just the Aegean.", refs:["byzantine-core","africa","vandal","vandal-sardinia","belisarius-africa","constantinople","carthage","alexandria","antioch"]},
      {date:"535-54", text:"The war moves through Sicily and Italy. Ravenna falls, but fighting continues until Taginae and the final collapse of Ostrogothic power.", refs:["italy","ostrogoth","italy-campaign","ravenna","taginae","rome"]},
      {date:"552", text:"Justinian's Spain is only a coastal foothold in the southeast, not a full reconquest of Iberia.", refs:["spania","spania-campaign","spain-pt"]}
    ]},
    {heading:"Aftermath", entries:[
      {date:"568", text:"The Lombards enter a battered Italy, turning the reconquest from a restored Roman west into a patchwork of corridors and footholds.", refs:["lombards","italy-war-zone","imperial-corridors","exarchate","lombard-north","ravenna2","rome2","sicily2"]}
    ]}
  ]}, sources:["Penguin Atlas Vol. 1 pp. 116-119", "Approximate campaign arrows and areas; coastlines and rivers: Natural Earth 1:50m"] };
})();
