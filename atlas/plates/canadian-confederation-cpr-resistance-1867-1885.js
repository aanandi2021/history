(function(){
 const CAN="#b22d2d", TREATY="#d8a84f", HBC="#9a855f", ROAD="#5b4a3f", WAR="#8c3b3b";
 const canadaClip=[[-141,49],[-123,49],[-115,54],[-103,54],[-96,50],[-83,48.8],[-76,48.3],[-70,50.2],[-60,50.8],[-52,53],[-52,42],[-141,42],[-141,49]];
 window.PLATES["canadian-confederation-cpr-resistance-1867-1885"]={id:"canadian-confederation-cpr-resistance-1867-1885",title:"Canadian Confederation, CPR and resistance, 1867-1885",head:"National states / Canada",folio:"Canadian synthesis",viewer:"national/1885/ch-canada-confederation-west",figures:[{caption:"Confederation goes west: provinces, treaties, railway and resistance",share:1,extent:[[-141,41],[-52,63]],projection:"conic",layers:[
  {id:"canada",type:"area",hist:{year:1878,names:["Canada"]},clipPolygon:canadaClip,colour:CAN,tier:"core",legend:"Dominion of Canada by the late 1870s"},
  {id:"ruperts",type:"area",hist:{year:1800,names:["Rupert's Land"]},colour:HBC,tier:"influence",legend:"Rupert's Land inheritance"},
  {id:"treaties",type:"area",polygon:[[-97,49],[-111,49],[-114,51.5],[-110,53.5],[-100,52],[-96,50],[-97,49]],clipToLand:true,colour:TREATY,tier:"conquest",legend:"Treaties 1-7 belt"},
  {id:"cpr",type:"route",style:"road",weight:2.8,colour:ROAD,legend:"Canadian Pacific Railway, completed 1885",path:[[-75.70,45.42],[-79.38,43.65],[-87,48],[-97.14,49.90],[-104.62,50.45],[-108.30,52.78],[-115.35,51.25],[-119.29,50.84],[-123.37,48.43]]},
  {id:"charlottetown",type:"point",symbol:"conference",at:[-63.13,46.24],name:"Charlottetown",labelPos:"e",tag:{text:"1864",colour:"#f1c75b"}},
  {id:"ottawa",type:"point",symbol:"capital",at:[-75.70,45.42],name:"Ottawa",labelPos:"s",tag:{text:"1867",colour:"#f1c75b"}},
  {id:"red-river",type:"point",symbol:"insurrection",at:[-97.14,49.90],name:"Red River / Manitoba",labelPos:"n",tag:{text:"1870",colour:"#e8806a"}},
  {id:"bc",type:"point",symbol:"port",at:[-123.37,48.43],name:"British Columbia",labelPos:"e",tag:{text:"1871",colour:"#f1c75b"}},
  {id:"batoche",type:"point",symbol:"battle",at:[-108.30,52.78],name:"Batoche",labelPos:"n",tag:{text:"1885",colour:"#e8806a"}},
  {id:"regina",type:"point",symbol:"capital",at:[-104.62,50.45],name:"Regina",labelPos:"s",tag:{text:"Riel",colour:"#e8806a"}},
  {id:"last",type:"point",symbol:"port",at:[-119.29,50.84],name:"Last Spike",labelPos:"n",tag:{text:"1885",colour:"#f1c75b"}}
 ],legend:{position:"bottom-left",columns:1}}],text:{intro:"The book skips Canada here, but a national-states round needs the Canadian case: Confederation, treaty-making, railway construction and prairie resistance.",sections:[{heading:"State-building",entries:[{date:"1864-1885",text:"Confederation begins in the east, absorbs the Hudson's Bay Company west, then ties the map together with treaties and the CPR.",refs:["canada","ruperts","treaties","cpr","charlottetown","ottawa","bc","last"]},{date:"1870-1885",text:"Red River and the North-West Resistance show that western expansion was contested by Metis and First Nations actors, not empty-space administration.",refs:["red-river","batoche","regina"]}]}]},sources:["Canadian synthesis added for Ford's Vol. 2 round 3 priorities"]};
})();
