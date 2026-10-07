// Congress of Vienna settlement, Vol. 2 round 1.
(function () {
  const BRIT="#2f5f93", RUS="#6b8c3f", AUS="#d8a84f", PRUS="#4f7f4f", FRA="#8c3b3b", MID="#b36b2e", ROAD="#5b4a3f";
  const VIEN=[16.37,48.21], PAR=[2.35,48.86], WATER=[4.40,50.68], BER=[13.40,52.52], WAR=[21.01,52.23];
  window.PLATES["congress-vienna-settlement-1815"] = { id:"congress-vienna-settlement-1815", title:"The Congress of Vienna settlement, 1815", head:"Napoleonic Age / Europe IV", folio:"38-39", viewer:"revolution/1815/ch-wars-liberation-vienna", figures:[
    {caption:"The reorganization of Europe through the Congress of Vienna, 1815", share:0.70, extent:[[-12,36],[36,61]], projection:"conic", layers:[
      {id:"france-1792",type:"area",tier:"core",colour:FRA,legend:"France checked at the 1792 frontier",regions:["FRA"]},
      {id:"medium-ring",type:"area",pattern:"hatch",colour:MID,legend:"Medium states around France",regions:["NLD","BEL","CHE","ITA","NOR","SWE"]},
      {id:"britain-gains",type:"area",tier:"core",colour:BRIT,legend:"British maritime gains",regions:["GBR","IRL","MLT"]},
      {id:"russia-poland",type:"area",tier:"core",colour:RUS,legend:"Russia: Congress Poland and Finland",regions:["POL","FIN","RUS"]},
      {id:"austria-italy",type:"area",tier:"core",colour:AUS,legend:"Austria: Upper Italy and Dalmatia",regions:["AUT","HUN","CZE","SVK","SVN","HRV","IT-VE","IT-MI"]},
      {id:"prussia-rhine",type:"area",tier:"core",colour:PRUS,legend:"Prussia: Rhine, Westphalia and Saxony share",regions:["DE-NW","DE-RP","DE-SL","DE-BB","DE-BE","DE-ST","DE-SN","PL-PM","PL-WN"]},
      {id:"german-confed",type:"boundary",style:"dashed",colour:ROAD,width:2,legend:"German Confederation",path:[[5,47],[7,54],[13,55],[19,53],[18,48],[12,47],[5,47]]},
      {id:"vienna",type:"point",symbol:"treaty",at:VIEN,name:"Vienna",labelPos:"e",tag:{text:"1815",colour:"#f1c75b"}}, {id:"paris",type:"point",symbol:"capital",at:PAR,name:"Paris",labelPos:"w"}, {id:"waterloo",type:"point",symbol:"battle",at:WATER,name:"Waterloo",labelPos:"n"}, {id:"berlin",type:"point",symbol:"capital",at:BER,name:"Berlin",labelPos:"n"}, {id:"warsaw",type:"point",symbol:"capital",at:WAR,name:"Congress Poland",labelPos:"e"}
    ], legend:{position:"bottom-left",columns:1}},
    {caption:"Principles of the settlement", kind:"diagram", share:0.30, diagram:{height:0.52, compartments:[{id:"balance",label:"Balance of power",x:0.05,y:0.05,w:0.90,h:0.28,colour:ROAD,fill:"#eee8d5"},{id:"order",label:"Restoration and solidarity",x:0.05,y:0.44,w:0.90,h:0.34,colour:FRA,fill:"#f3e4be"}], nodes:[{id:"five",label:"five great powers",x:0.50,y:0.20,w:0.26,h:0.12,colour:ROAD,strong:true},{id:"legitimacy",label:"legitimacy",x:0.25,y:0.61,w:0.20,h:0.12,colour:FRA},{id:"holy",label:"Holy Alliance",x:0.55,y:0.61,w:0.22,h:0.12,colour:AUS},{id:"germany",label:"German Confederation",x:0.82,y:0.61,w:0.22,h:0.12,colour:PRUS}], arrows:[{id:"ring",from:"five",to:"legitimacy"},{id:"solidarity",from:"five",to:"holy"},{id:"confed",from:"five",to:"germany"}]}}
  ], text:{intro:"Vienna does not simply put Europe back as it was. It restores dynasties where possible, but it also accepts Napoleon's consolidation of many small states and builds a new balance around five great powers.", sections:[
    {heading:"Map", entries:[{date:"1815",text:"France keeps the 1792 frontier but is checked by the Netherlands, Switzerland and Sardinia-Piedmont; Britain, Russia, Austria and Prussia all receive strategic compensation.",refs:["france-1792","medium-ring","britain-gains","russia-poland","austria-italy","prussia-rhine","vienna","paris","waterloo","berlin","warsaw"]},{date:"1815",text:"The German Confederation replaces both the Holy Roman Empire and Napoleon's Rhine Confederation, with Austria presiding and Prussia strengthened on the Rhine.",refs:["german-confed"]}]},
    {heading:"Principles", entries:[{date:"1815",text:"Restoration, legitimacy and solidarity are balanced against the practical need to keep the five great powers from another general war.",refs:["balance","order","five","legitimacy","holy","germany","ring","solidarity","confed"]}]}
  ]}, sources:["Penguin Atlas Vol. 2 pp. 38-39"] };
})();
