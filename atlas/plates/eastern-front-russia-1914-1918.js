(function(){
 const RUS="#6b8c3f", GER="#8c3b3b", AUS="#d8a84f", PEACE="#7a5a8c", ROAD="#5b4a3f";
 const frontier1914=[[20.0,54.6],[21.6,53.8],[22.8,52.8],[23.7,51.4],[22.7,49.2],[25.4,48.3]];
 const front1915=[[24.11,56.95],[25.3,55.2],[25.6,53.7],[26.1,52.12],[26.1,50.5],[25.94,48.29]];
 window.PLATES["eastern-front-russia-1914-1918"]={id:"eastern-front-russia-1914-1918",title:"The Eastern Front and Russia, 1914-1918",head:"First World War / Eastern theatre",folio:"124-129",viewer:"ww1/1917/ch-eastern-front-russia",figures:[{caption:"Eastern Front: Tannenberg, retreat, Brusilov and Brest-Litovsk",share:0.74,extent:[[12,42],[43,61]],projection:"conic",layers:[
  {id:"russia-1914",type:"area",hist:{year:1914,names:["Russian Empire"]},colour:RUS,tier:"influence",legend:"Russian Empire, 1914"},
  {id:"germany-1914",type:"area",hist:{year:1914,names:["German Empire"]},colour:GER,tier:"core",legend:"German Empire"},
  {id:"austria-1914",type:"area",hist:{year:1914,names:["Austro-Hungarian Empire"]},colour:AUS,tier:"core",legend:"Austria-Hungary"},
  {id:"brest-lands",type:"area",hist:{year:1920,names:["Finland","Estonia","Latvia","Lithuania","Poland","Ukraine"]},pattern:"hatch",colour:PEACE,legend:"Brest-Litovsk losses, shown with 1920 successor shapes"},
  {id:"frontier-1914",type:"boundary",style:"dashed",colour:ROAD,path:frontier1914,legend:"1914 frontier"},
  {id:"front-1915",type:"boundary",style:"solid",colour:GER,path:front1915,legend:"Summer 1915 front: Riga-Pinsk-Czernowitz"},
  {id:"tannenberg",type:"point",symbol:"battle",at:[20.13,53.49],name:"Tannenberg",labelPos:"s",tag:{text:"1914",colour:"#f1c75b"}},
  {id:"masurian",type:"point",symbol:"battle",at:[21.9,54.25],name:"Masurian Lakes",labelPos:"e"},
  {id:"gorlice",type:"point",symbol:"battle",at:[21.16,49.66],name:"Gorlice-Tarnów",labelPos:"w",tag:{text:"1915",colour:"#f1c75b"}},
  {id:"warsaw",type:"point",symbol:"city",at:[21.0,52.23],name:"Warsaw",labelPos:"w"},
  {id:"pinsk",type:"point",symbol:"city",at:[26.10,52.12],name:"Pinsk",labelPos:"ne"},
  {id:"czernowitz",type:"point",symbol:"city",at:[25.94,48.29],name:"Czernowitz",labelPos:"e"},
  {id:"riga",type:"point",symbol:"port",at:[24.11,56.95],name:"Riga",labelPos:"n",tag:{text:"1917",colour:"#e8806a"}},
  {id:"brusilov",type:"arrow",colour:RUS,width:9,path:[[25.33,50.75],[24.71,51.22],[24.03,49.84]],label:"Brusilov",legend:"Brusilov offensive west from Lutsk toward Kovel and Lemberg"},
  {id:"lutsk",type:"point",symbol:"battle",at:[25.33,50.75],name:"Lutsk",labelPos:"e"},
  {id:"kovel",type:"point",symbol:"city",at:[24.71,51.22],name:"Kovel",labelPos:"w"},
  {id:"lemberg",type:"point",symbol:"city",at:[24.03,49.84],name:"Lemberg",labelPos:"s"},
  {id:"petrograd",type:"point",symbol:"insurrection",at:[30.34,59.93],name:"Petrograd",labelPos:"w",tag:{text:"1917",colour:"#f1c75b"}},
  {id:"brest",type:"point",symbol:"treaty",at:[23.69,52.10],name:"Brest-Litovsk",labelPos:"e",tag:{text:"Mar 1918",colour:"#f1c75b"}}
 ],legend:{position:"bottom-left",columns:1}},{caption:"Revolution and exit from the war",kind:"diagram",share:0.26,diagram:{height:0.58,nodes:[{id:"feb",label:"Feb./Mar. 1917\ntsar abdicates",x:0.18,y:0.22,w:0.25,h:0.15,colour:RUS,strong:true},{id:"prov",label:"Provisional Government\ncontinues war",x:0.50,y:0.22,w:0.28,h:0.15,colour:AUS},{id:"oct",label:"Oct./Nov. 1917\nBolsheviks",x:0.80,y:0.22,w:0.24,h:0.15,colour:GER,strong:true},{id:"bl",label:"Brest-Litovsk\n3 Mar. 1918",x:0.50,y:0.62,w:0.28,h:0.15,colour:PEACE,strong:true}],arrows:[{id:"r1",from:"feb",to:"prov"},{id:"r2",from:"prov",to:"oct"},{id:"r3",from:"oct",to:"bl"}]}}],text:{intro:"Russia is Ford's gap in this round: the eastern military story and the 1917 political revolution are the same crisis seen from two angles.",sections:[{heading:"Eastern Front",entries:[{date:"1914-1915",text:"Tannenberg and Masurian Lakes stop the Russian invasion of East Prussia. The 1914 frontier is drawn separately from the summer 1915 front, which runs Riga-Pinsk-Czernowitz after Gorlice-Tarnów and the Great Retreat.",refs:["russia-1914","germany-1914","austria-1914","frontier-1914","front-1915","tannenberg","masurian","gorlice","warsaw","pinsk","czernowitz","riga"]},{date:"1916-1918",text:"Brusilov drives west from Lutsk toward Kovel and Lemberg; casualties and supply failure feed revolution, and Brest-Litovsk removes Poland, the Baltic lands, Finland and Ukraine from Russia's war.",refs:["brusilov","lutsk","kovel","lemberg","petrograd","brest","brest-lands"]}]},{heading:"Revolution",entries:[{date:"1917-1918",text:"February, the Provisional Government, October and Brest-Litovsk form the political exit sequence.",refs:["feb","prov","oct","bl","r1","r2","r3"]}]}]},sources:["Penguin Atlas Vol. 2 pp. 124-129; historical-basemaps world_1914 and world_1920"]};
})();