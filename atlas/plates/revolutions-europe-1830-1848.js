(function(){
 const JAN="#6b8c3f", FEB="#2f5f93", MAR="#b36b2e", MAY="#7a5a8c", JUN="#8c6d3f", JUL="#8c3b3b", AUG="#2f7f86", NOV="#4f7f4f", COUNTER="#5b4a3f", AUS="#d8a84f", PRUS="#4f7f4f", FRA="#8c3b3b", RUS="#6b8c3f", BEL="#2f7f86";
 const P={par:[2.35,48.86], bru:[4.35,50.85], war:[21.01,52.23], mod:[10.93,44.65], parma:[10.33,44.80], bol:[11.34,44.49], bruns:[10.52,52.27], dres:[13.74,51.05], kass:[9.49,51.31], pal:[13.36,38.12], vien:[16.37,48.21], mil:[9.19,45.46], ven:[12.33,45.44], ber:[13.40,52.52], pest:[19.04,47.50], prag:[14.44,50.08], frank:[8.68,50.11], rom:[12.50,41.90], baden:[8.24,48.76], cust:[10.80,45.38], nov:[8.62,45.45], deb:[21.63,47.53], lem:[24.03,49.84]};
 const base=(s)=>[
  {id:`france-${s}`,type:"area",regions:["FRA"],colour:FRA,tier:"influence",legend:"France"},
  {id:`austria-${s}`,type:"area",hist:{year:1815,names:["Austrian Empire","Lombardy","Venetia"]},colour:AUS,tier:"influence",legend:"Austrian Empire"},
  {id:`prussia-${s}`,type:"area",hist:{year:1815,names:["Prussia"]},colour:PRUS,tier:"influence",legend:"Prussia"},
  {id:`russia-${s}`,type:"area",hist:{year:1815,names:["Russian Empire"]},colour:RUS,tier:"influence",legend:"Russian Empire"}
 ];
 const pt=(id,at,name,date,colour,pos="e",sym="insurrection")=>({id,type:"point",symbol:sym,at,name,labelPos:pos,colour,tag:{text:date,colour},legend:"Month-coded uprising"});
 window.PLATES["revolutions-europe-1830-1848"]={id:"revolutions-europe-1830-1848",title:"The revolutions of 1830 and 1848",head:"Restoration / Europe II-III",folio:"50-59",viewer:"restoration/1848/ch-revolutions-1830-1848",figures:[
  {caption:"The 1830 wave: July monarchy, Belgium, Poland and German-Italian risings",share:0.46,extent:[[-2,40],[23,55]],projection:"conic",layers:[...base("1830"),
   {id:"belgium",type:"area",regions:["BEL"],colour:BEL,tier:"core",legend:"Belgian independence"},
   pt("par1830",P.par,"Paris","Jul 1830",JUL,"w"),pt("bru1830",P.bru,"Brussels","Aug 1830",AUG,"e"),pt("war1830",P.war,"Warsaw","Nov 1830",NOV,"w"),
   pt("modena1831",P.mod,"Modena","1831",MAR,"n"),pt("parma1831",P.parma,"Parma","1831",MAR,"w"),pt("papal1831",P.bol,"Papal States","1831",MAR,"e"),
   pt("brunswick1830",P.bruns,"Brunswick","1830",MAR,"nw"),pt("saxony1830",P.dres,"Saxony","1830",MAR,"e"),pt("hesse1831",P.kass,"Hesse-Kassel","1831",MAR,"w"),
   {id:"month-key-1830",type:"label",style:"note",at:[9.5,41.0],text:"Month key: Jul -> Aug -> Nov -> 1831",size:8,colour:"#3a3a3a"}
  ],legend:{position:"bottom-left",columns:1}},
  {caption:"The 1848-49 wave and the counter-revolution",share:0.54,extent:[[2,37.5],[25,55]],projection:"conic",layers:[...base("1848"),
   pt("palermo1848",P.pal,"Palermo","Jan",JAN,"e"),pt("par1848",P.par,"Paris","Feb",FEB,"w"),pt("vien1848",P.vien,"Vienna","13 Mar",MAR,"e"),pt("mil1848",P.mil,"Milan","18-22 Mar",MAR,"w"),pt("ven1848",P.ven,"Venice","22 Mar",MAR,"e"),pt("ber1848",P.ber,"Berlin","18 Mar",MAR,"e"),pt("pest1848",P.pest,"Pest","Mar",MAR,"se"),pt("prag1848",P.prag,"Prague / Slav Congress","Jun",JUN,"e"),pt("frank1848",P.frank,"Frankfurt Parliament","May",MAY,"s","parliament"),pt("rome1849",P.rom,"Roman Republic","Feb 1849",FEB,"e"),pt("baden1849",P.baden,"Baden","1849",JUN,"w"),
   {id:"radetzky",type:"arrow",path:[[12.33,45.44],P.cust,P.nov],colour:COUNTER,width:4,legend:"Austrian counter-moves"},
   {id:"custoza",type:"point",symbol:"battle",at:P.cust,name:"Custoza",labelPos:"s",tag:{text:"Jul 1848",colour:COUNTER},legend:"Counter-revolution battles"},
   {id:"novara",type:"point",symbol:"battle",at:[8.85,45.62],name:"Novara",labelPos:"e",tag:{text:"Mar 1849",colour:COUNTER},legend:"Counter-revolution battles"},
   {id:"windischgratz",type:"arrow",path:[[16.37,48.21],P.prag,[16.37,48.21]],colour:COUNTER,width:3.5,legend:"Austrian counter-moves"},
   {id:"russian-hungary",type:"arrow",path:[P.lem,[21.0,48.2],P.deb],colour:RUS,width:4,label:"Russia",date:"1849",legend:"Russian intervention in Hungary"},
   {id:"month-key-1848",type:"label",style:"note",at:[13.4,54.4],text:"Month key: Jan -> Feb -> Mar -> May -> Jun -> Jul -> Feb/Mar 1849",size:8,colour:"#3a3a3a"}
  ],legend:{position:"bottom-left",columns:1}}
 ],text:{intro:"The revolutions moved as dated waves, keyed by month-coloured points in the legend, then met coordinated counter-moves. The same language of constitution and nation meant different things in Paris, Milan, Vienna, Pest, Prague and Frankfurt.",sections:[{heading:"1830",entries:[{date:"1830-1831",text:"Paris in July is followed by Brussels in August, Warsaw in November, and constitutional risings in Modena, Parma, the Papal States and several German states.",refs:["par1830","bru1830","war1830","modena1831","parma1831","papal1831","brunswick1830","saxony1830","hesse1831","belgium"]}]},{heading:"1848-1849",entries:[{date:"1848",text:"Palermo, Paris and March risings in Vienna, Milan, Venice, Berlin and Pest turn revolution into a continental wave; Frankfurt tries to make a German constitution.",refs:["palermo1848","par1848","vien1848","mil1848","ven1848","ber1848","pest1848","frank1848"]},{date:"1848-1849",text:"Counter-revolution is military as well as political: Windischgratz retakes Prague and Vienna, Radetzky beats Piedmont at Custoza and Novara, and Russia marches into Hungary.",refs:["prag1848","rome1849","baden1849","radetzky","windischgratz","russian-hungary"]}]}]},sources:["Penguin Atlas Vol. 2 pp. 50-51 and 56-59"]};
})();

