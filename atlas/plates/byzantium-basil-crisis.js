// Byzantium under Basil II and after Manzikert, round 9.
(function () {
  const BYZ="#d66a4a", BUL="#7a5a8c", TUR="#6b8c3f", LAT="#c58b32", LINE="#5f4b8b";
  const CON=[28.98,41.01], OHR=[20.8,41.1], MAN=[42.53,39.15], NIC=[29.72,40.43], ATH=[23.73,37.98], ANT=[36.16,36.20], TRE=[39.72,41.0], VEN=[12.33,45.44];
  window.PLATES["byzantium-basil-crisis"] = { id:"byzantium-basil-crisis", title:"Byzantium: Basil II to the Fourth Crusade", head:"High Middle Ages / Byzantium", folio:"23", viewer:"medieval/1025/ch-byzantium-basil-crisis", figures:[
    { caption:"Byzantium under Basil II, c. 1025", share:0.5, extent:[[10,31],[46,49]], projection:"conic", layers:[
      {id:"byz-1025",type:"area",tier:"core",colour:BYZ,legend:"Byzantine Empire under Basil II",polygon:[[18.6,39.0],[20.2,42.2],[23.2,42.8],[27.5,42.2],[31.2,40.7],[36.0,39.8],[41.0,40.8],[44.0,38.0],[40.0,35.3],[34.0,35.0],[29.0,36.4],[24.0,37.0],[21.5,36.7]],smooth:false},
      {id:"bulgaria",type:"area",tier:"conquest",colour:BUL,legend:"Bulgaria absorbed after 1018",polygon:[[19.0,41.0],[21.5,44.0],[25.0,43.5],[26.5,41.5],[24.0,40.0],[21.0,40.0]],smooth:false},
      {id:"basil-campaign",type:"arrow",colour:BUL,width:3,legend:"Basil II's campaigns",path:[CON,[25,42.5],OHR],label:"Basil II"},
      {id:"constantinople",type:"point",symbol:"capital",at:CON,name:"Constantinople"},
      {id:"ohrid",type:"point",symbol:"large-city",at:OHR,name:"Ohrid",tag:{text:"1018",colour:"#f1c75b"}},
      {id:"athens",type:"point",symbol:"large-city",at:ATH,name:"Athens"},
      {id:"antioch",type:"point",symbol:"large-city",at:ANT,name:"Antioch"}
    ], legend:{position:"bottom-left",columns:1}},
    { caption:"Crisis after Manzikert and the Latin conquest", share:0.5, extent:[[18,31],[46,47]], projection:"conic", layers:[
      {id:"byz-1095",type:"area",tier:"core",colour:BYZ,legend:"Byzantine lands after 1071",polygon:[[20.0,39.0],[23.0,42.0],[28.8,41.6],[30.5,39.4],[27.0,37.6],[23.0,37.2]],smooth:false},
      {id:"turkish-anatolia",type:"area",tier:"conquest",colour:TUR,legend:"Turkish power in Anatolia",polygon:[[29.5,37.0],[32.0,40.2],[38.5,40.5],[42.5,38.8],[41.0,36.0],[35.0,35.0],[31.0,35.6]],smooth:false},
      {id:"latin-1204",type:"area",tier:"influence",colour:LAT,legend:"Latin and Venetian partition after 1204",polygon:[[22.5,37.2],[24.5,41.0],[29.0,41.4],[27.5,38.3]],smooth:false},
      {id:"manzikert",type:"point",symbol:"battle",at:MAN,name:"Manzikert",tag:{text:"1071",colour:"#e8806a"}},
      {id:"nicaea",type:"point",symbol:"capital",at:NIC,name:"Nicaea",tag:{text:"1204",colour:"#f1c75b"}},
      {id:"trebizond",type:"point",symbol:"capital",at:TRE,name:"Trebizond",tag:{text:"1204",colour:"#f1c75b"}},
      {id:"constantinople2",type:"point",symbol:"capital",at:CON,name:"Constantinople",tag:{text:"1204",colour:"#e8806a"}},
      {id:"venice",type:"arrow",colour:LINE,width:3,legend:"Venetian and crusader sea power",path:[[18.5,42.2],[22.5,40.2],CON],label:"1204"}
    ], legend:{position:"bottom-left",columns:1}}
  ], text:{intro:"Byzantium was strongest around 1025, then survived by retreat, diplomacy and recovery after losing Anatolia and Constantinople itself.", sections:[
    {heading:"Basil II's empire", entries:[
      {date:"976-1025", text:"Basil II defeats Bulgaria and leaves Byzantium with the Balkans, Greece, western Anatolia and key eastern cities. This is the high point before the later medieval crisis.", refs:["byz-1025","bulgaria","basil-campaign","ohrid","constantinople"]},
      {date:"1025", text:"Constantinople remains the great tax, court and church centre of the eastern Roman world.", refs:["constantinople","athens","antioch"]}
    ]},
    {heading:"Loss and survival", entries:[
      {date:"1071", text:"Manzikert does not destroy the empire at once, but it opens Anatolia to Turkish power and makes Alexios I ask the west for help.", refs:["manzikert","turkish-anatolia","byz-1095"]},
      {date:"1204-1261", text:"The Fourth Crusade takes Constantinople. Nicaea and Trebizond keep Greek imperial claims alive until Constantinople is recovered in 1261.", refs:["latin-1204","constantinople2","nicaea","trebizond","venice"]}
    ]}
  ]}, sources:["Penguin Atlas Vol. 1 pp. 174-176", "Approximate imperial fields; coastlines and rivers: Natural Earth 1:50m"] };
})();
