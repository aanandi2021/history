(function(){
 const AUS="#d8a84f", SER="#b36b2e", BUL="#3f8f5b", GRE="#4c78a8", OTT="#9a6a32", WAR="#8c3b3b", ROAD="#5b4a3f";
 const macedonia=[[20.7,42.4],[22.0,42.3],[23.4,42.0],[24.2,41.6],[23.8,40.8],[22.7,40.3],[21.5,40.5],[20.6,41.2],[20.7,42.4]];
 window.PLATES["balkan-crises-1908-1913"]={id:"balkan-crises-1908-1913",title:"The Balkan crises, 1908-1913",head:"Imperialism / Balkans",folio:"120-121",viewer:"imperial/1913/ch-balkan-crises",figures:[{caption:"1908: annexation crisis and Ottoman Europe",share:0.50,extent:[[12,35],[31,48]],projection:"conic",layers:[
  {id:"austria",type:"area",hist:{year:1914,names:["Austro-Hungarian Empire"]},colour:AUS,tier:"influence",legend:"Austria-Hungary"},
  {id:"ottoman-1908",type:"area",hist:{year:1914,names:["Ottoman Empire"]},colour:OTT,tier:"influence",legend:"Ottoman Empire"},
  {id:"serbia-1908",type:"area",hist:{year:1914,names:["Serbia","Montenegro","Romania"]},colour:SER,tier:"core",legend:"Serbia, Montenegro, Romania"},
  {id:"bulgaria-1908",type:"area",hist:{year:1914,names:["Bulgaria"]},colour:BUL,tier:"core",legend:"Bulgaria"},
  {id:"greece-1908",type:"area",hist:{year:1914,names:["Greece"]},colour:GRE,tier:"core",legend:"Greece"},
  {id:"bosnia",type:"point",symbol:"treaty",at:[18.41,43.86],name:"Bosnia annexed",labelPos:"n",tag:{text:"1908",colour:"#f1c75b"}},
  {id:"sarajevo",type:"point",symbol:"capital",at:[18.41,43.86],name:"Sarajevo",labelPos:"w"},
  {id:"belgrade",type:"point",symbol:"capital",at:[20.46,44.82],name:"Belgrade",labelPos:"e"},
  {id:"istanbul",type:"point",symbol:"capital",at:[28.98,41.01],name:"Constantinople",labelPos:"w"}
 ],legend:{position:"bottom-left",columns:1}},{caption:"1912-13: two Balkan Wars",share:0.50,extent:[[12,35],[31,48]],projection:"conic",layers:[
  {id:"ottoman",type:"area",hist:{year:1914,names:["Ottoman Empire"]},colour:OTT,tier:"influence",legend:"Ottoman remnant in Europe"},
  {id:"serbia",type:"area",hist:{year:1914,names:["Serbia","Montenegro"]},colour:SER,tier:"core",legend:"Serbia and Montenegro"},
  {id:"bulgaria",type:"area",hist:{year:1914,names:["Bulgaria"]},colour:BUL,tier:"core",legend:"Bulgaria"},
  {id:"greece",type:"area",hist:{year:1914,names:["Greece"]},colour:GRE,tier:"core",legend:"Greece"},
  {id:"macedonia",type:"area",polygon:macedonia,smooth:false,clipToLand:true,pattern:"hatch",colour:WAR,legend:"Macedonia contested by the victors"},
  {id:"league",type:"route",style:"road",weight:2.4,colour:ROAD,legend:"Balkan League advance, 1912",path:[[23.32,42.70],[24.75,42.13],[26.56,41.68],[28.98,41.01]]},
  {id:"second",type:"route",style:"dashed",weight:2.4,colour:WAR,legend:"Second Balkan War, 1913",path:[[23.32,42.70],[22.93,41.99],[20.46,44.82],[23.73,37.98]]},
  {id:"sofia",type:"point",symbol:"capital",at:[23.32,42.70],name:"Sofia",labelPos:"n"},
  {id:"adrianople",type:"point",symbol:"battle",at:[26.56,41.68],name:"Adrianople",labelPos:"e",tag:{text:"1913",colour:"#e8806a"}},
  {id:"skopje",type:"point",symbol:"battle",at:[21.43,41.99],name:"Skopje",labelPos:"w"},
  {id:"salonika",type:"point",symbol:"port",at:[22.94,40.64],name:"Salonika",labelPos:"e",tag:{text:"1912",colour:"#f1c75b"}}
 ],legend:{position:"bottom-left",columns:1}} ],text:{intro:"The Balkan crises begin with the Bosnian annexation and end with Ottoman Europe reduced and the Balkan victors fighting over Macedonia.",sections:[{heading:"Crises",entries:[{date:"1908",text:"Austria-Hungary annexes Bosnia-Herzegovina, angering Serbia and unsettling the post-Berlin order around Serbia, Bulgaria, Greece and the Ottoman Empire.",refs:["austria","ottoman-1908","serbia-1908","bulgaria-1908","greece-1908","bosnia","sarajevo","belgrade","istanbul"]},{date:"1912-1913",text:"The Balkan League defeats the Ottoman Empire; then Bulgaria, Serbia, Greece and Montenegro fight each other over Macedonia and the settlement.",refs:["ottoman","serbia","bulgaria","greece","league","second","macedonia","sofia","adrianople","skopje","salonika"]}]}]},sources:["Penguin Atlas Vol. 2 pp. 120-121; historical-basemaps world_1914"]};
})();
