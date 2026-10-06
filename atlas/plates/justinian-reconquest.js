// Justinian's reconquest, based on the round 6 Penguin Atlas spreads.
(function () {
  const BYZ="#d66a4a", V="#2f7f86", G="#5b78a8", L="#79a85a";
  const CON=[28.98,41.01], CAR=[10.31,36.85], SIC=[14.25,37.6], ROME=[12.5,41.9], RAV=[12.2,44.42], TAG=[12.77,43.35];
  window.PLATES["justinian-reconquest"] = { id:"justinian-reconquest", title:"Justinian's reconquest, A.D. 527-565", head:"Early Middle Ages / Byzantium", folio:"13", viewer:"medieval/0540/ch-justinian-reconquest", figures:[
    { caption:"The Mediterranean restoration attempted by Justinian", share:0.66, extent:[[-8,28],[36,47]], projection:"mercator", layers:[
      {id:"byzantine-core",type:"area",tier:"core",colour:BYZ,legend:"Eastern Roman core",around:[[20,40],[27,44],[35,39],[31,34],[23,35]],labelAt:[29,39]},
      {id:"africa",type:"area",tier:"conquest",colour:BYZ,legend:"Reconquered from Vandals, 533-34",around:[[8,34],[13,37],[17,36],[15,32],[9,32]],labelAt:[12,35]},
      {id:"italy",type:"area",tier:"conquest",colour:BYZ,legend:"Reconquered Italy, 535-54",around:[[10,45],[13,45],[16,42],[16,38],[13,40],[11,43]],labelAt:[13,42]},
      {id:"vandal",type:"area",colour:V,pattern:"hatch",legend:"Vandal kingdom before 533",around:[[8,34],[13,37],[17,36],[15,32],[9,32]],labelAt:[10,34]},
      {id:"ostrogoth",type:"area",colour:G,pattern:"hatch-back",legend:"Ostrogothic kingdom before 535",around:[[8,45],[12,46],[16,43],[17,40],[15,37],[12,40],[10,43]],labelAt:[15,43]},
      {id:"belisarius-africa",type:"arrow",colour:BYZ,width:6,label:"Belisarius",legend:"Belisarius to Africa",path:[CON,[20,37],CAR]},
      {id:"italy-campaign",type:"arrow",colour:BYZ,width:5,legend:"War in Sicily and Italy",path:[CAR,SIC,ROME,RAV,TAG]},
      {id:"lombards",type:"arrow",colour:L,width:5,label:"Lombards",date:"568",legend:"Lombards arrive after the war",path:[[14,47],[13,45],[10.5,44.5]]},
      {id:"constantinople",type:"point",symbol:"capital",at:CON,name:"Constantinople",labelPos:"e"}, {id:"carthage",type:"point",symbol:"capital",at:CAR,name:"Carthage",tag:{text:"533",colour:"#f1c75b"}}, {id:"rome",type:"point",symbol:"capital",at:ROME,name:"Rome"}, {id:"ravenna",type:"point",symbol:"capital",at:RAV,name:"Ravenna",tag:{text:"540",colour:"#f1c75b"}}, {id:"taginae",type:"point",symbol:"battle",at:TAG,name:"Taginae",tag:{text:"552",colour:"#e8806a"},legend:"Battle"}
    ], legend:{position:"bottom-left",columns:2} },
    { caption:"Cost of the restoration", share:0.34, extent:[[6,36],[18,46]], projection:"mercator", layers:[
      {id:"italy-war-zone",type:"area",colour:"#e0a080",opacity:0.35,legend:"Italy devastated by long war",around:[[9,45],[12,46],[16,43],[16,39],[13,38],[10,42]],labelAt:[13,42]},
      {id:"imperial-corridors",type:"route",style:"road",colour:"#7b6848",legend:"Thin imperial corridors",path:[[12.2,44.42],[12.5,41.9],[14.25,37.6]]},
      {id:"exarchate",type:"area",tier:"core",colour:BYZ,legend:"Ravenna and imperial footholds",around:[[11.5,44.0],[12.5,44.8],[13.2,44.0],[12.5,43.5]],labelAt:[12.4,44.2]},
      {id:"lombard-north",type:"area",tier:"influence",colour:L,legend:"Lombard pressure after 568",around:[[8,45],[11,46],[14,45],[13,44],[10,44]],labelAt:[11,45]},
      {id:"ravenna2",type:"point",symbol:"capital",at:RAV,name:"Ravenna"}, {id:"rome2",type:"point",symbol:"bishopric",at:ROME,name:"Rome"}, {id:"sicily2",type:"point",symbol:"port",at:SIC,name:"Sicily"}
    ], legend:{position:"bottom-left",columns:1} }
  ], text:{ intro:"Justinian's western wars briefly made the Roman claim visible again, but the map was expensive and thin.", sections:[
    {heading:"Reconquest", entries:[
      {date:"533-34", text:"Belisarius crosses from Constantinople's world to Africa and destroys the Vandal kingdom at Carthage.", refs:["byzantine-core","africa","vandal","belisarius-africa","constantinople","carthage"]},
      {date:"535-54", text:"The war moves through Sicily and Italy. Ravenna falls, but fighting continues until Taginae and the final collapse of Ostrogothic power.", refs:["italy","ostrogoth","italy-campaign","ravenna","taginae","rome"]}
    ]},
    {heading:"Aftermath", entries:[
      {date:"568", text:"The Lombards enter a battered Italy, turning the reconquest from a restored Roman west into a patchwork of corridors and footholds.", refs:["lombards","italy-war-zone","imperial-corridors","exarchate","lombard-north","ravenna2","rome2","sicily2"]}
    ]}
  ]}, sources:["Penguin Atlas Vol. 1 pp. 116-119", "Approximate campaign arrows and areas; coastlines and rivers: Natural Earth 1:50m"] };
})();
