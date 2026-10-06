// Successor kingdoms around AD 500, based on the round 6 Penguin Atlas spreads.
(function () {
  const FR="#7a5a8c", G="#5b78a8", V="#2f7f86", B="#d66a4a", L="#79a85a";
  const ROME=[12.5,41.9], RAV=[12.2,44.42], CAR=[10.31,36.85], TOUL=[1.44,43.6], SOIS=[3.32,49.38], CON=[28.98,41.01];
  window.PLATES["barbarian-kingdoms"] = { id:"barbarian-kingdoms", title:"The barbarian kingdoms, c. A.D. 500", head:"Early Middle Ages / Successor kingdoms", folio:"12", viewer:"medieval/0507/ch-barbarian-kingdoms", figures:[
    { caption:"Western successor kingdoms after the Roman West", share:0.62, extent:[[-10,30],[35,57]], projection:"mercator", layers:[
      {id:"franks",type:"area",tier:"core",colour:FR,legend:"Franks",around:[[0,48],[4,51],[7,50],[6,47],[2,46]],labelAt:[4,49]},
      {id:"visigoths",type:"area",tier:"core",colour:G,legend:"Visigoths",around:[[-8,38],[-2,43],[4,43],[3,39],[-2,37]],labelAt:[-2,40]},
      {id:"ostrogoths",type:"area",tier:"core",colour:G,pattern:"hatch",legend:"Ostrogoths in Italy",around:[[8,45],[12,46],[16,43],[17,40],[15,37],[12,40],[10,43]],labelAt:[13,42]},
      {id:"vandals",type:"area",tier:"core",colour:V,legend:"Vandals",around:[[8,34],[12,37],[17,36],[15,32],[9,32]],labelAt:[12,35]},
      {id:"burgundians",type:"area",tier:"influence",colour:"#b07aa1",legend:"Burgundians",around:[[4,45],[6,47.3],[7.5,46],[6.2,44]],labelAt:[6,46]},
      {id:"eastern-empire",type:"area",tier:"influence",colour:B,legend:"Eastern Roman Empire",around:[[20,40],[28,44],[34,40],[32,34],[23,35]],labelAt:[29,38]},
      {id:"clovis-route",type:"arrow",colour:FR,width:5,legend:"Frankish advance",path:[[4,50],SOIS,TOUL],label:"Franks"},
      {id:"gothic-route",type:"route",style:"dashed",colour:G,legend:"Gothic movement",path:[[24,45],[18,44],RAV,[6,44],TOUL],head:true},
      {id:"soissons",type:"point",symbol:"battle",at:SOIS,name:"Soissons",tag:{text:"486",colour:"#e8806a"},legend:"Battle"},
      {id:"ravenna",type:"point",symbol:"capital",at:RAV,name:"Ravenna",labelPos:"e"}, {id:"carthage",type:"point",symbol:"capital",at:CAR,name:"Carthage",labelPos:"e"}, {id:"toulouse",type:"point",symbol:"capital",at:TOUL,name:"Toulouse",labelPos:"s"}, {id:"constantinople",type:"point",symbol:"capital",at:CON,name:"Constantinople",labelPos:"e"},
      {type:"label",style:"water",text:"Mediterranean",at:[13,33.5],size:9}
    ], legend:{position:"bottom-left",columns:2} },
    { caption:"What survived from Rome", share:0.38, extent:[[-6,35],[18,52]], projection:"mercator", layers:[
      {id:"roman-cities",type:"area",colour:"#e0a080",opacity:0.24,legend:"Roman city-and-bishop network",around:[[-3,43],[2,49],[8,50],[14,45],[13,40],[5,41]],labelAt:[6,45]},
      {id:"catholic-franks",type:"area",tier:"core",colour:FR,legend:"Catholic Frankish kingship",around:[[1,48],[5,50.5],[7,49],[5,46.5],[2,46.5]],labelAt:[4,48.5]},
      {id:"arian-kings",type:"area",colour:G,pattern:"hatch",legend:"Arian Gothic courts",around:[[-5,39],[2,43],[12,45],[16,41],[12,38],[2,38]],labelAt:[6,41]},
      {id:"bishops",type:"route",style:"dotted",colour:"#111111",legend:"Bishops and councils",path:[[2.35,48.86],[4.84,45.76],[5.37,43.3],[12.5,41.9],[12.2,44.42]]},
      {id:"paris",type:"point",symbol:"bishopric",at:[2.35,48.86],name:"Paris"}, {id:"lyon",type:"point",symbol:"bishopric",at:[4.84,45.76],name:"Lyon"}, {id:"rome",type:"point",symbol:"bishopric",at:ROME,name:"Rome"}, {id:"milan",type:"point",symbol:"bishopric",at:[9.19,45.46],name:"Milan"}
    ], legend:{position:"bottom-left",columns:1} }
  ], text:{ intro:"Around 500 the old western imperial map had become a set of kingdoms ruling Roman land, Roman people and Roman church networks.", sections:[
    {heading:"New kingdoms", entries:[
      {date:"486-507", text:"Clovis removes Syagrius at Soissons and then defeats the Visigoths at Vouille; Frankish power moves from the Rhine toward Gaul.", refs:["franks","clovis-route","soissons","visigoths"]},
      {date:"493-534", text:"Ostrogoths rule Italy from Ravenna while Vandals hold Carthage and North Africa.", refs:["ostrogoths","ravenna","vandals","carthage"]},
      {date:"c. 500", text:"Burgundians, Visigoths, Franks and Goths are kingdoms inside a still-Roman cultural field, not a clean break from Rome.", refs:["burgundians","eastern-empire","toulouse","constantinople"]}
    ]},
    {heading:"Roman habits", entries:[
      {date:"5th-6th c.", text:"Cities, bishops and councils keep Roman habits alive; kings need this network to govern.", refs:["roman-cities","bishops","paris","lyon","rome"]},
      {date:"496", text:"Clovis's Catholic baptism gives the Franks an advantage with Gallo-Roman bishops, while many Gothic courts remain Arian.", refs:["catholic-franks","arian-kings","milan"]}
    ]}
  ]}, sources:["Penguin Atlas Vol. 1 pp. 114-117, read for map grammar and chronology", "Approximate areas; coastlines and rivers: Natural Earth 1:50m"] };
})();
