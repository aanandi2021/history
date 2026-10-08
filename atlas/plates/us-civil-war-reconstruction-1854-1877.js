(function(){
 const UNION="#2f7f86", CONF="#8c3b3b", BORDER="#d8a84f", ROAD="#5b4a3f";
 window.PLATES["us-civil-war-reconstruction-1854-1877"]={id:"us-civil-war-reconstruction-1854-1877",title:"United States: Civil War and Reconstruction, 1854-1877",head:"National states / USA",folio:"94-95",viewer:"national/1863/ch-us-civil-war-reconstruction",figures:[{caption:"Secession, campaigns and the contested peace",share:1,extent:[[-103,24],[-66,43]],projection:"conic",layers:[
  {id:"usa",type:"area",hist:{year:1878,names:["United States of America"]},colour:UNION,tier:"influence",legend:"United States after the war"},
  {id:"confed",type:"area",polygon:[[-94,36.5],[-89,36.5],[-82,35],[-75,36],[-76,34],[-80,25],[-86,30],[-94,29],[-94,36.5]],clipToLand:true,colour:CONF,tier:"core",legend:"Confederate states, 1861-65"},
  {id:"border",type:"area",polygon:[[-95,39.5],[-76,39.5],[-75,36],[-83,37.5],[-89,37],[-95,37],[-95,39.5]],clipToLand:true,colour:BORDER,tier:"conquest",legend:"Border-state hinge"},
  {id:"anaconda",type:"route",style:"dashed",geo:true,weight:2.6,colour:UNION,legend:"Union blockade / Anaconda",path:[[-74,40],[-78,36],[-80,32],[-82,29],[-89,29],[-91,30],[-90.88,32.35]]},
  {id:"east",type:"route",style:"road",weight:2.4,colour:CONF,legend:"Eastern theatre",path:[[-79.93,32.78],[-77.44,37.54],[-77.23,39.83],[-78.81,37.38]]},
  {id:"sherman",type:"route",style:"road",weight:2.4,colour:UNION,legend:"Western theatre and Sherman",path:[[-90.88,32.35],[-84.39,33.75],[-79.93,32.78]]},
  {id:"kansas",type:"point",symbol:"insurrection",at:[-95.24,38.97],name:"Kansas",labelPos:"w",tag:{text:"1854",colour:"#f1c75b"}},
  {id:"sumter",type:"point",symbol:"battle",at:[-79.93,32.78],name:"Fort Sumter",labelPos:"e",tag:{text:"1861",colour:"#e8806a"}},
  {id:"richmond",type:"point",symbol:"capital",at:[-77.44,37.54],name:"Richmond",labelPos:"s"},
  {id:"wash",type:"point",symbol:"capital",at:[-77.04,38.90],name:"Washington",labelPos:"e"},
  {id:"gettysburg",type:"point",symbol:"battle",at:[-77.23,39.83],name:"Gettysburg",labelPos:"n",tag:{text:"1863",colour:"#e8806a"}},
  {id:"vicksburg",type:"point",symbol:"battle",at:[-90.88,32.35],name:"Vicksburg",labelPos:"w",tag:{text:"1863",colour:"#e8806a"}},
  {id:"appomattox",type:"point",symbol:"treaty",at:[-78.81,37.38],name:"Appomattox",labelPos:"w",tag:{text:"1865",colour:"#f1c75b"}}
 ],legend:{position:"bottom-left",columns:1}}],text:{intro:"The U.S. national-state crisis is the slavery expansion question becoming secession and war, then Reconstruction and its retreat.",sections:[{heading:"War and aftermath",entries:[{date:"1854-1861",text:"Kansas-Nebraska and Dred Scott make slavery in the territories the central constitutional fight.",refs:["kansas","border"]},{date:"1861-1865",text:"The Confederacy fights from Richmond; the Union blockade, Mississippi campaign and eastern battles lead to Appomattox.",refs:["confed","anaconda","east","sherman","gettysburg","vicksburg","appomattox"]},{date:"1865-1877",text:"Emancipation and constitutional amendments remake citizenship, but the end of Reconstruction leaves Jim Crow politics to harden in the South.",refs:["usa","confed"]}]}]},sources:["Penguin Atlas Vol. 2 pp. 94-95"]};
})();
