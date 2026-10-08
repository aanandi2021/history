(function(){
 const OTT="#b36b2e", BRIT="#4c78a8", FRA="#7a5a8c", ARM="#8c3b3b", ARAB="#d8a84f", ROAD="#5b4a3f";
 const zoneA=[[35.0,33.1],[38.0,34.0],[41.0,36.5],[40.0,38.0],[35.8,36.2],[35.0,33.1]];
 const zoneB=[[36.0,30.5],[39.5,31.5],[44.5,33.5],[43.8,36.2],[39.0,34.0],[36.0,30.5]];
 window.PLATES["middle-east-secondary-theatres-1914-1918"]={id:"middle-east-secondary-theatres-1914-1918",title:"Middle East and secondary theatres, 1914-1918",head:"First World War / Ottoman war",folio:"126-127",viewer:"ww1/1917/ch-middle-east-secondary",figures:[{caption:"Ottoman fronts: Gallipoli, Mesopotamia, Palestine and Arabia",share:0.72,extent:[[24,11],[52,43]],projection:"conic",layers:[
  {id:"ottoman",type:"area",hist:{year:1914,names:["Ottoman Empire"]},colour:OTT,tier:"core",legend:"Ottoman Empire, 1914"},
  {id:"egypt",type:"area",hist:{year:1914,names:["Egypt"]},colour:BRIT,tier:"influence",legend:"British Egypt and imperial approaches"},
  {id:"sykes-a",type:"area",polygon:zoneA,smooth:false,clipToLand:true,pattern:"hatch",colour:FRA,legend:"Sykes-Picot French zone A (schematic)"},
  {id:"sykes-b",type:"area",polygon:zoneB,smooth:false,clipToLand:true,pattern:"hatch-back",colour:BRIT,legend:"Sykes-Picot British zone B (schematic)"},
  {id:"gallipoli",type:"point",symbol:"battle",at:[26.35,40.15],name:"Gallipoli",labelPos:"e",tag:{text:"1915",colour:"#f1c75b"}},
  {id:"kut",type:"point",symbol:"siege",at:[45.82,32.51],name:"Kut",labelPos:"e",tag:{text:"1916",colour:"#e8806a"}},
  {id:"baghdad",type:"point",symbol:"capital",at:[44.37,33.32],name:"Baghdad",labelPos:"ne",tag:{text:"Mar 1917",colour:"#f1c75b"}},
  {id:"mesopotamia",type:"route",style:"dashed",colour:BRIT,weight:4.2,path:[[47.78,30.51],[45.82,32.51],[44.37,33.32]],legend:"British-Indian Mesopotamia campaign"},
  {id:"palestine",type:"route",style:"dashed",colour:BRIT,weight:2.4,path:[[32.55,30.0],[34.47,31.50],[35.21,31.77],[35.18,32.58]],legend:"Palestine campaign"},
  {id:"jerusalem",type:"point",symbol:"capital",at:[35.21,31.77],name:"Jerusalem",labelPos:"e",tag:{text:"Dec 1917",colour:"#f1c75b"}},
  {id:"megiddo",type:"point",symbol:"battle",at:[35.18,32.58],name:"Megiddo",labelPos:"w",tag:{text:"1918",colour:"#e8806a"}},
  {id:"arab",type:"route",style:"dotted",colour:ARAB,path:[[39.83,21.42],[35.00,29.53],[36.29,33.51]],legend:"Arab Revolt route"},
  {id:"mecca",type:"point",symbol:"city",at:[39.83,21.42],name:"Mecca",labelPos:"e"},
  {id:"aqaba",type:"point",symbol:"port",at:[35.00,29.53],name:"Aqaba",labelPos:"w",tag:{text:"1917",colour:"#f1c75b"}},
  {id:"damascus",type:"point",symbol:"capital",at:[36.29,33.51],name:"Damascus",labelPos:"e",tag:{text:"1918",colour:"#f1c75b"}},
  {id:"armenian-route",type:"route",style:"dashed",colour:ARM,path:[[43.38,38.50],[39.75,39.75],[37.16,36.20],[40.15,35.33]],legend:"Armenian deportation routes, 1915"},
  {id:"van",type:"point",symbol:"destroyed",at:[43.38,38.50],name:"Van",labelPos:"e",tag:{text:"1915",colour:"#e8806a"}},
  {id:"deir",type:"point",symbol:"destroyed",at:[40.15,35.33],name:"Deir ez-Zor",labelPos:"e"}
 ],legend:{position:"bottom-left",columns:1}},{caption:"Promises and violence, 1915-1917",kind:"diagram",share:0.28,diagram:{height:0.58,nodes:[{id:"armenian",label:"1915 Armenian genocide\ndeportation and killing",x:0.24,y:0.18,w:0.34,h:0.15,colour:ARM,strong:true},{id:"sp",label:"1916 Sykes-Picot\nBritish/French zones",x:0.70,y:0.18,w:0.34,h:0.15,colour:FRA,strong:true},{id:"balfour",label:"1917 Balfour Declaration\nJewish national home",x:0.24,y:0.60,w:0.34,h:0.15,colour:BRIT},{id:"arabp",label:"Arab Revolt promises\nindependence language",x:0.70,y:0.60,w:0.34,h:0.15,colour:ARAB}],arrows:[{id:"m1",from:"sp",to:"balfour"},{id:"m2",from:"arabp",to:"sp"}]}}],text:{intro:"The secondary theatres were not side stories for the people living in them: Ottoman fronts, British-Indian armies, Arab promises and Armenian deportations shaped the postwar Middle East.",sections:[{heading:"Fronts",entries:[{date:"1915-1918",text:"Gallipoli fails, Mesopotamia moves from Kut to Baghdad, Palestine from Gaza and Jerusalem to Megiddo, and the Arab Revolt runs Mecca-Aqaba-Damascus.",refs:["ottoman","egypt","gallipoli","kut","baghdad","mesopotamia","palestine","jerusalem","megiddo","arab","mecca","aqaba","damascus"]}]},{heading:"Promises",entries:[{date:"1915-1917",text:"The Armenian genocide is shown as deportation routes toward the Syrian desert. Sykes-Picot zones and the Balfour Declaration sit beside promises made to Arab allies.",refs:["armenian-route","van","deir","sykes-a","sykes-b","armenian","sp","balfour","arabp","m1","m2"]}]}]},sources:["Penguin Atlas Vol. 2 pp. 126-127; pp. 132-133 for the Ottoman settlement"]};
})();