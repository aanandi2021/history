// Byzantium's end and Ottoman expansion to 1453, round 10.
(function () {
  const BYZ="#d66a4a", LAT="#c9bd42", OTT="#b36b2e", SER="#6b8c3f", VEN="#5b78a8", LINE="#5f4b8b";
  const CON=[28.98,41.01], NIC=[29.72,40.43], TRE=[39.72,41.0], ADR=[26.55,41.68], GALL=[26.67,40.42], VAR=[27.91,43.21], KOS=[20.93,42.57], NICO=[24.0,43.7], BUR=[29.06,40.19];
  window.PLATES["ottoman-rise-1453"] = { id:"ottoman-rise-1453", title:"Byzantium's end and the Ottoman rise", head:"Late Middle Ages / 1453", folio:"28", viewer:"medieval/1453/ch-ottoman-rise-1453", figures:[
    {caption:"After the Fourth Crusade: fragments, 1204-1261", share:0.5, extent:[[16,34],[43,46]], projection:"conic", layers:[
      {id:"latin",type:"area",tier:"core",colour:LAT,legend:"Latin states",polygon:[[22.0,37.0],[24.5,39.0],[26.4,41.0],[29.2,41.3],[29.3,40.3],[25.0,38.0]],smooth:false},
      {id:"nicaea",type:"area",tier:"core",colour:BYZ,legend:"Greek successor states",polygon:[[27.0,37.5],[30.0,40.6],[33.5,41.0],[34.0,38.5],[31.0,37.0]],smooth:false},
      {id:"trebizond",type:"area",tier:"core",colour:BYZ,polygon:[[36.0,40.5],[40.4,41.5],[42.4,41.2],[40.8,40.2]],smooth:false},
      {id:"epirus",type:"area",tier:"core",colour:BYZ,polygon:[[20.0,38.5],[22.2,40.8],[24.0,40.0],[22.4,38.0]],smooth:false},
      {id:"venetian",type:"area",tier:"influence",colour:VEN,legend:"Venetian sea possessions",polygon:[[19.5,35.0],[23.5,36.2],[25.5,37.6],[24.0,39.0],[20.0,38.0]],smooth:false,clipToLand:false},
      {id:"recovery",type:"arrow",colour:BYZ,width:3.2,legend:"Nicaean recovery in 1261",path:[NIC,[28.6,40.8],CON]},
      {id:"constantinople",type:"point",symbol:"capital",at:CON,name:"Constantinople",labelPos:"nw",tag:{text:"1204",colour:"#e8806a"}}, {id:"nicaea-pt",type:"point",symbol:"capital",at:NIC,name:"Nicaea",labelPos:"se"}, {id:"trebizond-pt",type:"point",symbol:"capital",at:TRE,name:"Trebizond"}
    ], legend:{position:"bottom-left",columns:1}},
    {caption:"Ottoman expansion to Constantinople, 1300-1453", share:0.5, extent:[[16,34],[43,46]], projection:"conic", layers:[
      {id:"ottoman-1326",type:"area",tier:"core",colour:OTT,legend:"Ottoman core by 1326",polygon:[[28.2,39.6],[30.0,40.7],[31.5,40.3],[30.8,39.0]],smooth:false,phaseLabel:"1326",phaseAt:[30.6,39.55]},
      {id:"ottoman-1362",type:"area",tier:"conquest",colour:OTT,legend:"Expansion to 1362",polygon:[[25.8,40.0],[28.0,41.4],[31.0,41.2],[31.8,39.4],[29.5,38.3],[26.6,38.8]],smooth:false,phaseLabel:"1362",phaseAt:[26.8,39.55]},
      {id:"ottoman-1451",type:"area",tier:"core",opacity:0.42,colour:OTT,legend:"Ottoman realm by 1451",polygon:[[19.5,39.5],[23.0,43.0],[27.5,43.6],[30.5,42.0],[35.5,41.2],[37.0,39.0],[33.0,37.0],[27.0,36.8],[22.0,38.0]],smooth:false,phaseLabel:"1451",phaseAt:[23.5,41.5]},
      {id:"byz-1453",type:"area",tier:"core",colour:BYZ,legend:"Byzantium by 1453",polygon:[[28.6,40.8],[29.15,41.1],[29.3,40.8],[28.9,40.6]],smooth:false},
      {id:"serbia",type:"area",tier:"influence",colour:SER,legend:"Balkan states under pressure",polygon:[[18.5,41.0],[21.2,43.0],[24.0,42.4],[23.0,40.0],[20.0,39.2]],smooth:false},
      {id:"advance",type:"arrow",colour:LINE,width:3.2,legend:"Ottoman advances, 1354-1444",path:[BUR,GALL,ADR,NICO,VAR]},
      {id:"siege",type:"arrow",colour:LINE,width:3.8,legend:"Siege and conquest of Constantinople",path:[[29.8,41.4],CON],label:"1453"},
      {id:"kosovo",type:"point",symbol:"battle",at:KOS,name:"Kosovo",tag:{text:"1389",colour:"#e8806a"}}, {id:"nicopolis",type:"point",symbol:"battle",at:NICO,name:"Nicopolis",tag:{text:"1396",colour:"#e8806a"}}, {id:"varna",type:"point",symbol:"battle",at:VAR,name:"Varna",tag:{text:"1444",colour:"#e8806a"}}, {id:"constantinople2",type:"point",symbol:"siege",at:CON,name:"Constantinople",labelPos:"se",tag:{text:"1453",colour:"#e8806a"}}, {id:"edirne",type:"point",symbol:"capital",at:ADR,name:"Edirne",labelPos:"nw"}
    ], legend:{position:"bottom-left",columns:1}}
  ], text:{intro:"The medieval eastern Roman story ends with a smaller Byzantium surrounded by Ottoman power. 1453 closes one world and opens another.", sections:[
    {heading:"After 1204", entries:[{date:"1204-1261", text:"The Fourth Crusade breaks Constantinople into Latin and Greek successor states. Nicaea recovers the city, but not the old strength.", refs:["latin","nicaea","trebizond","epirus","recovery","constantinople"]}]},
    {heading:"Ottoman rise", entries:[{date:"1326-1451", text:"Ottoman power grows from Bithynia into the Balkans and western Anatolia, with Edirne as a European capital before Constantinople falls.", refs:["ottoman-1326","ottoman-1362","ottoman-1451","advance","edirne"]},{date:"1453", text:"Mehmed II takes Constantinople. The city becomes Istanbul, an Ottoman capital and a bridge between Mediterranean, Black Sea and Asian routes.", refs:["byz-1453","siege","constantinople2"]}]}
  ]}, sources:["Penguin Atlas Vol. 1 pp. 204-209", "Approximate Byzantine, Latin and Ottoman fields; coastlines and rivers: Natural Earth 1:50m"] };
})();
