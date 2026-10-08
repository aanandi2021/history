(function(){
 const UNION="#2f7f86", CONF="#8c3b3b", BORDER="#d8a84f", KS="#b36b2e", ROAD="#5b4a3f";
 window.PLATES["us-civil-war-reconstruction-1854-1877"]={id:"us-civil-war-reconstruction-1854-1877",title:"United States: Civil War and Reconstruction, 1854-1877",head:"National states / USA",folio:"94-95",viewer:"national/1863/ch-us-civil-war-reconstruction",figures:[{caption:"Secession, campaigns and the contested peace",share:0.72,extent:[[-105,24],[-66,46]],projection:"conic",layers:[
  {id:"union",type:"area",hist:{year:1880,names:["United States of America"]},colour:UNION,tier:"influence",legend:"United States / Union"},
  {id:"confed",type:"area",regions:["US-SC","US-MS","US-FL","US-AL","US-GA","US-LA","US-TX","US-VA","US-AR","US-NC","US-TN"],colour:CONF,tier:"core",legend:"Confederate states, 1861-65"},
  {id:"border",type:"area",regions:["US-MO","US-KY","US-MD","US-DE","US-WV"],pattern:"hatch",colour:BORDER,legend:"Border slave states in the Union"},
  {id:"kansas",type:"area",regions:["US-KS"],pattern:"crosshatch",colour:KS,legend:"Kansas-Nebraska flashpoint, 1854"},
  {id:"blockade",type:"route",style:"dotted",geo:true,weight:2.4,colour:UNION,legend:"Anaconda blockade offshore",path:[[-74,40],[-76,36],[-80,31],[-84,28],[-90,28],[-95,29],[-97,28]]},
  {id:"grant",type:"route",style:"road",weight:2.5,colour:UNION,legend:"Grant on the Mississippi",path:[[-89.18,37.01],[-88.35,35.14],[-90.88,32.35]]},
  {id:"sherman",type:"route",style:"road",weight:2.5,colour:UNION,legend:"Sherman: Chattanooga-Atlanta-Savannah-Carolinas",path:[[-85.31,35.05],[-84.39,33.75],[-81.09,32.08],[-79.93,32.78],[-78.64,35.78]]},
  {id:"east",type:"route",style:"dashed",weight:2.4,colour:CONF,legend:"Eastern theatre",path:[[-77.04,38.90],[-76.97,39.47],[-77.23,39.83],[-77.44,37.54],[-78.81,37.38]]},
  {id:"wash",type:"point",symbol:"capital",at:[-77.04,38.90],name:"Washington",labelPos:"e"},
  {id:"richmond",type:"point",symbol:"capital",at:[-77.44,37.54],name:"Richmond",labelPos:"s"},
  {id:"antietam",type:"point",symbol:"battle",at:[-76.97,39.47],name:"Antietam",labelPos:"w",tag:{text:"1862",colour:"#e8806a"}},
  {id:"gettysburg",type:"point",symbol:"battle",at:[-77.23,39.83],name:"Gettysburg",labelPos:"n",tag:{text:"1863",colour:"#e8806a"}},
  {id:"vicksburg",type:"point",symbol:"battle",at:[-90.88,32.35],name:"Vicksburg",labelPos:"w",tag:{text:"1863",colour:"#e8806a"}},
  {id:"atlanta",type:"point",symbol:"battle",at:[-84.39,33.75],name:"Atlanta",labelPos:"e",tag:{text:"1864",colour:"#e8806a"}},
  {id:"appomattox",type:"point",symbol:"treaty",at:[-78.81,37.38],name:"Appomattox",labelPos:"w",tag:{text:"1865",colour:"#f1c75b"}}
 ],legend:{position:"bottom-left",columns:1}},{caption:"Reconstruction, 1865-1877",kind:"diagram",share:0.28,diagram:{height:0.58,nodes:[{id:"a13",label:"13th: slavery abolished, 1865",x:0.22,y:0.12,w:0.30,h:0.13,colour:UNION,strong:true},{id:"a14",label:"14th: citizenship, equal protection, 1868",x:0.31,y:0.36,w:0.38,h:0.13,colour:UNION,strong:true},{id:"a15",label:"15th: voting rights, 1870",x:0.60,y:0.12,w:0.28,h:0.13,colour:UNION,strong:true},{id:"end",label:"1877 compromise; federal retreat",x:0.32,y:0.64,w:0.36,h:0.13,colour:CONF}],arrows:[{id:"p1",from:"a13",to:"a14"},{id:"p2",from:"a14",to:"a15"},{id:"p3",from:"a15",to:"end",label:"Jim Crow hardens after retreat"}]}}],text:{intro:"The U.S. national-state crisis is the slavery expansion question becoming secession and war, then Reconstruction and its retreat.",sections:[{heading:"War",entries:[{date:"1854-1861",text:"Kansas-Nebraska and Dred Scott make slavery in the territories the central constitutional fight.",refs:["kansas","border"]},{date:"1861-1865",text:"The Confederacy includes the eleven seceded states. Union strategy combines blockade, Mississippi control, the western campaigns and the eastern contest around Washington and Richmond.",refs:["confed","blockade","grant","sherman","east","gettysburg","vicksburg","atlanta","appomattox"]}]},{heading:"Reconstruction",entries:[{date:"1865-1877",text:"The 13th, 14th and 15th Amendments remake citizenship and political rights. The 1877 compromise and federal retreat leave southern white Democratic governments to construct the Jim Crow order.",refs:["a13","a14","a15","end"]}]}]},sources:["Penguin Atlas Vol. 2 pp. 94-95"]};
})();


