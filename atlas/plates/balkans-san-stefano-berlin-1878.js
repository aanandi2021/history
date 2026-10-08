(function(){
 const OTT="#9a6a32", RUS="#6b8c3f", BUL="#3f8f5b", SER="#b36b2e", AUS="#d8a84f";
 const bigBul=[[22,41],[24,44],[27,44.5],[29,43.4],[28.5,41],[26,40.2],[23,40.6],[22,41]];
 window.PLATES["balkans-san-stefano-berlin-1878"]={id:"balkans-san-stefano-berlin-1878",title:"The Balkans: San Stefano and Berlin, 1878",head:"National states / Balkans",folio:"80-83",viewer:"national/1878/ch-austria-hungary-balkans",figures:[{caption:"San Stefano's large Bulgaria cut down by Berlin",share:1,extent:[[12,39],[31,49]],projection:"conic",layers:[
  {id:"ottoman",type:"area",hist:{year:1878,names:["Ottoman Empire"]},colour:OTT,tier:"influence",legend:"Ottoman Empire after Berlin"},
  {id:"austria",type:"area",hist:{year:1878,names:["Austria Hungary"]},colour:AUS,tier:"influence",legend:"Austria-Hungary; Bosnia occupied"},
  {id:"states",type:"area",hist:{year:1878,names:["Serbia","Romania","Bulgaria"]},colour:SER,tier:"core",legend:"Recognized or autonomous Balkan states"},
  {id:"big-bulgaria",type:"area",around:bigBul,clipToLand:true,pattern:"stripe",colour:BUL,tier:"conquest",legend:"San Stefano Bulgaria, March 1878"},
  {id:"russian",type:"route",style:"road",weight:2.5,colour:RUS,legend:"Russian advance, 1877-78",path:[[30.3,46.5],[26.0,43.2],[28.98,41.01]]},
  {id:"san",type:"point",symbol:"treaty",at:[28.98,41.01],name:"San Stefano",labelPos:"e",tag:{text:"Mar 1878",colour:"#f1c75b"}},
  {id:"berlin",type:"point",symbol:"treaty",at:[13.40,52.52],name:"Berlin",labelPos:"e",tag:{text:"Jul 1878",colour:"#f1c75b"}},
  {id:"sofia",type:"point",symbol:"capital",at:[23.32,42.70],name:"Sofia"},
  {id:"belgrade",type:"point",symbol:"capital",at:[20.46,44.82],name:"Serbia"},
  {id:"bucharest",type:"point",symbol:"capital",at:[26.10,44.43],name:"Romania"}
 ],legend:{position:"bottom-left",columns:1}}],text:{intro:"The book's Balkan maps are about scale: San Stefano creates a large Russian-backed Bulgaria; Berlin cuts it down and makes the settlement a European balance-of-power compromise.",sections:[{heading:"Settlement",entries:[{date:"1878",text:"Berlin recognizes Serbia, Romania and Montenegro, makes Bulgaria smaller and autonomous, and lets Austria-Hungary occupy Bosnia-Herzegovina.",refs:["big-bulgaria","states","austria","ottoman","russian","san","berlin"]}]}]},sources:["Penguin Atlas Vol. 2 pp. 80-83"]};
})();
