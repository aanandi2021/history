(function(){
 const AUS="#d8a84f", PRUS="#4f7f4f", PALE="#e6c989", ZOLL="#b36b2e", NEW="#8c3b3b", ROAD="#5b4a3f", NEUT="#b8b1a1";
 const confed=[[7.2,53.3],[6.9,52.4],[6.0,50.8],[5.8,49.5],[6.4,49.2],[8.2,48.95],[7.6,47.6],[9.6,47.5],[10.4,46.6],[10.6,45.85],[11.7,45.9],[12.6,46.0],[13.6,45.6],[14.6,45.5],[15.7,46.0],[16.1,46.6],[16.6,47.5],[17.1,48.1],[17.6,48.85],[18.85,49.5],[18.6,50.0],[18.2,50.6],[17.6,51.4],[16.4,51.8],[15.6,52.5],[16.2,53.2],[17.0,53.7],[17.6,54.7],[13.4,54.6],[10.9,54.35],[9.6,54.3],[8.8,54.0],[7.2,53.3]];
 const austria=(s)=>({id:`austria-${s}`,type:"area",hist:{year:1815,names:["Austrian Empire"]},colour:AUS,tier:"influence",legend:"Austria (outside Zollverein)"});
 const conf=(s)=>({id:`confed-${s}`,type:"boundary",style:"dashed",colour:ROAD,width:2.2,legend:"German Confederation boundary",closed:true,path:confed});
 const histArea=(id,names,colour,tier,legend)=>({id,type:"area",hist:{year:1815,names},colour,tier,legend});
 const prussia=(id,colour,tier,legend)=>histArea(id,["Prussia"],colour,tier,legend);
 const bavaria=(id,colour,tier,legend)=>histArea(id,["Bavaria"],colour,tier,legend);
 const saxony=(id,colour,tier,legend)=>histArea(id,["Saxony"],colour,tier,legend);
 const wurttemberg=(id,colour,tier,legend)=>histArea(id,["Württemberg","Wurttemberg"],colour,tier,legend);
 const baden=(id,colour,tier,legend)=>histArea(id,["Baden"],colour,tier,legend);
 const hanover=(id,colour,tier,legend)=>histArea(id,["Hanover","Kingdom of Hanover"],colour,tier,legend);
 const hesse=(id,colour,tier,legend)=>({id,type:"area",regions:["DE-HE","DE-TH"],colour,tier,legend});
 const ctx=(s)=>[austria(s),conf(s)];
 const earlierPrussia=(id)=>prussia(id,PALE,"influence","Earlier members (pale)");
 const earlier1834=(s)=>[
   earlierPrussia(`z-${s}-prussia-old`),
   bavaria(`z-${s}-bavaria-old`,PALE,"influence","Earlier members (pale)"),
   saxony(`z-${s}-saxony-old`,PALE,"influence","Earlier members (pale)"),
   wurttemberg(`z-${s}-wuerttemberg-old`,PALE,"influence","Earlier members (pale)"),
   baden(`z-${s}-baden-old`,PALE,"influence","Earlier members (pale)"),
   hesse(`z-${s}-hesse-old`,PALE,"influence","Earlier members (pale)")
 ];
 const new1834=()=>[
   bavaria("z-1834-bavaria-new",NEW,"core","New in this panel (strong)"),
   saxony("z-1834-saxony-new",NEW,"core","New in this panel (strong)"),
   wurttemberg("z-1834-wuerttemberg-new",NEW,"core","New in this panel (strong)"),
   baden("z-1834-baden-new",NEW,"core","New in this panel (strong)"),
   hesse("z-1834-hesse-new",NEW,"core","New in this panel (strong)")
 ];
 window.PLATES["germany-confederation-zollverein-frankfurt-1815-1848"]={id:"germany-confederation-zollverein-frankfurt-1815-1848",title:"Germany: Confederation, Zollverein and Frankfurt, 1815-1848",head:"Restoration / Germany I-II",folio:"46-47, 58-61",viewer:"restoration/1834/ch-german-confederation-zollverein",figures:[{caption:"The German Confederation and the Zollverein",share:0.58,extent:[[4,45],[20,55]],projection:"conic",layers:[
 {id:"austria-main",type:"area",hist:{year:1815,names:["Austrian Empire"]},colour:AUS,tier:"influence",legend:"Austria (outside Zollverein)"},
 {id:"prussia",type:"area",hist:{year:1815,names:["Prussia"]},colour:PRUS,tier:"core",legend:"Prussia, split east and west"},
 {id:"low-countries",type:"area",regions:["BEL","NLD"],colour:NEUT,tier:"influence",legend:"Belgium and Netherlands outside"},
 {id:"zollverein",type:"area",pattern:"stripe",colour:ZOLL,legend:"Zollverein core by 1834",regions:["DE-BY","DE-BW","DE-SN","DE-TH","DE-HE","DE-RP","DE-NW","DE-ST"]}, conf("main"),
 {id:"frankfurt",type:"point",symbol:"parliament",at:[8.68,50.11],name:"Frankfurt",labelPos:"w",tag:{text:"1848",colour:"#f1c75b"}}, {id:"berlin",type:"point",symbol:"capital",at:[13.40,52.52],name:"Berlin",labelPos:"e"}, {id:"vienna",type:"point",symbol:"capital",at:[16.37,48.21],name:"Vienna",labelPos:"e"}, {id:"hambach",type:"point",symbol:"insurrection",at:[8.27,49.32],name:"Hambach",labelPos:"s",tag:{text:"1832",colour:"#f1c75b"}}, {id:"wartburg",type:"point",symbol:"university",at:[10.31,50.97],name:"Wartburg",labelPos:"n",tag:{text:"1817",colour:"#f1c75b"}}
],legend:{position:"bottom-left",columns:1}},{caption:"Zollverein growth: Austria stays outside the customs union",kind:"small-multiples",share:0.42,extent:[[5,45.7],[18.5,54.9]],projection:"conic",layers:[],panelAspect:0.88,panels:[
 {caption:"1828 Prussian union",layers:[...ctx("1828"),prussia("z-1828-new",NEW,"core","New in this panel (strong)")]},
 {caption:"1834 Zollverein",layers:[...ctx("1834"),earlierPrussia("z-1834-prussia-old"),...new1834()]},
 {caption:"1854 Hanover joins",layers:[...ctx("1854"),...earlier1834("1854"),hanover("z-1854-hanover-new",NEW,"core","New in this panel (strong)")]}],legend:{position:"bottom-left",columns:1}}],text:{intro:"Germany after 1815 had a political confederation and, increasingly, an economic union. That mismatch made Frankfurt possible and fragile.",sections:[{heading:"Confederation",entries:[{date:"1815-1848",text:"The German Confederation includes Austria proper, Bohemia, Moravia and Holstein, but not Hungary, Galicia, Schleswig, East Prussia or Posen.",refs:["austria-main","prussia","confed-main","low-countries","vienna","berlin"]},{date:"1817-1832",text:"Wartburg and Hambach show the liberal-national opposition that Metternich tries to police.",refs:["wartburg","hambach"]},{date:"1848",text:"The Frankfurt Parliament tries to turn national politics into a constitution.",refs:["frankfurt"]}]},{heading:"Zollverein",entries:[{date:"1828-1854",text:"Customs union grows from Prussian arrangements into a wider Zollverein; Austria remains outside, which is the political point.",refs:["zollverein","z-1828-new","z-1834-prussia-old","z-1834-bavaria-new","z-1834-saxony-new","z-1834-wuerttemberg-new","z-1834-baden-new","z-1834-hesse-new","z-1854-prussia-old","z-1854-bavaria-old","z-1854-saxony-old","z-1854-wuerttemberg-old","z-1854-baden-old","z-1854-hesse-old","z-1854-hanover-new"]}]}]},sources:["Penguin Atlas Vol. 2 pp. 46-47 and 58-61"]};
})();
