// Thirty Years' War and Westphalia, round 13.
(function () {
  const SWE="#7a5a8c", HAB="#d8a84f", FRA="#8c3b3b", BRAN="#6b8c3f", BAV="#b36b2e", WAR="#5b4a3f", SAX="#c58b32";
  const PRG=[14.42,50.08], WM=[14.18,49.98], MAG=[11.63,52.13], BREIT=[12.45,51.45], LUT=[12.14,51.25], NORD=[10.49,48.85], BREIS=[7.58,48.03], MUN=[7.63,51.96], OSN=[8.05,52.28], STR=[7.75,48.58], RAI=[10.92,48.70], MAINZ=[8.27,49.99], USE=[13.92,54.05], WITT=[11.41,53.63], JANK=[15.00,49.65], WITTSTOCK=[12.49,53.16], EGER=[12.37,50.08], VIEN=[16.37,48.21], HEIL=[9.22,49.14], HEID=[8.67,49.40], REGEN=[12.10,49.02];
  const imperialSouth=[[5.0,47.2],[6.2,49.2],[7.2,50.0],[8.5,50.5],[9.7,50.1],[11.0,49.6],[12.6,49.2],[14.4,49.0],[16.0,48.7],[17.4,48.2],[18.0,47.0],[16.8,46.2],[14.2,46.0],[12.0,46.0],[10.0,46.4],[8.4,47.0],[6.5,46.8]];
  const bohemiaMoravia=[[12.0,48.4],[12.6,49.4],[13.8,50.2],[15.4,50.5],[16.8,50.1],[17.8,49.2],[17.6,48.4],[16.2,48.0],[14.6,47.8],[13.0,48.0]];
  const swedishField=[[8.0,49.2],[7.0,50.8],[7.8,52.3],[9.5,53.4],[11.5,54.0],[13.8,54.4],[15.8,54.3],[17.5,53.7],[17.2,52.6],[15.4,52.0],[13.5,51.7],[11.6,51.8],[10.0,51.3],[8.8,50.2]];
  const heilbronn=[[5.2,48.0],[6.2,49.2],[7.8,49.9],[9.6,50.2],[10.8,49.6],[10.4,48.5],[9.0,47.9],[7.0,47.6]];
  const france1635=[[-1.0,42.5],[-0.2,45.0],[0.8,47.0],[2.0,49.0],[4.0,50.5],[6.5,49.4],[7.6,47.6],[6.4,45.5],[3.0,43.2]];
  const frenchAlsace=[[6.9,47.4],[7.5,48.9],[8.2,49.2],[8.4,48.2],[7.8,47.4]];
  const swedishPomerania=[[11.0,53.4],[12.5,54.5],[14.4,54.8],[15.8,54.4],[15.4,53.6],[13.2,53.1]];
  const bremenVerden=[[7.2,52.4],[8.6,53.5],[10.1,53.3],[10.0,52.4],[8.5,52.0]];
  const brandenburgGains=[[9.2,51.7],[10.5,52.7],[12.0,53.3],[13.0,52.6],[12.0,51.6],[10.4,51.2]], upperPal=[[10.3,48.6],[11.0,49.5],[12.3,49.4],[12.8,48.6],[11.8,48.1]];
  window.PLATES["thirty-years-war-westphalia-1618-1648"] = { id:"thirty-years-war-westphalia-1618-1648", title:"The Thirty Years' War and Westphalia", head:"Age of Reason / German war and settlement", folio:"35", viewer:"early-modern/1618/ch-thirty-years-war-westphalia", figures:[
    {caption:"Bohemian, Danish, Swedish and Franco-Swedish phases, 1618-1648", share:0.58, extent:[[2.0,46.0],[20.5,55.0]], projection:"conic", layers:[
      {id:"imperial-catholic",type:"area",tier:"core",colour:HAB,legend:"Imperial and Catholic League base",regions:["AUT","CZE","DE-BY"]},
      {id:"bohemian-revolt",type:"area",pattern:"hatch",colour:SAX,legend:"Bohemian revolt and war zone",regions:["CZE"]},
      {id:"swedish-allied",type:"area",tier:"influence",colour:SWE,legend:"Swedish allies and quarters after 1631",regions:["DE-NI","DE-ST","DE-BB","DE-BE","DE-HH","DE-HB","DE-MV","DE-SN","DE-TH"]},
      {id:"league-heilbronn",type:"area",pattern:"hatch",colour:SWE,legend:"League of Heilbronn / south-western allies",regions:["DE-BW","DE-HE","DE-RP"]},
      {id:"france-entry",type:"area",tier:"influence",colour:FRA,legend:"French entry against Habsburgs",regions:["FRA"]},
      {id:"gustavus-route",type:"route",style:"road",weight:2.5,colour:SWE,legend:"Gustavus Adolphus campaign",path:[USE,MAG,BREIT,MAINZ,RAI,LUT]},
      {id:"wallenstein-route",type:"route",style:"dashed",weight:2.2,colour:WAR,legend:"Imperial counterstroke",path:[VIEN,PRG,EGER,LUT]},
      {id:"french-swedish-route",type:"route",style:"dashed",weight:2.4,colour:FRA,legend:"Franco-Swedish pressure",path:[[2.35,48.86],STR,BREIS,NORD,JANK]},
      {id:"prague",type:"point",symbol:"insurrection",at:PRG,name:"Prague",labelPos:"ne",tag:{text:"1618",colour:"#e8806a"}}, {id:"white-mountain",type:"point",symbol:"battle",at:WM,name:"White Mt.",labelPos:"s",tag:{text:"1620",colour:"#e8806a"}}, {id:"magdeburg",type:"point",symbol:"destroyed",at:MAG,name:"Magdeburg",labelPos:"w",tag:{text:"1631",colour:"#e8806a"}}, {id:"breitenfeld",type:"point",symbol:"battle",at:BREIT,name:"Breitenfeld",labelPos:"e",tag:{text:"1631",colour:"#f1c75b"}}, {id:"lutzen",type:"point",symbol:"battle",at:LUT,name:"Lutzen",labelPos:"sw",tag:{text:"1632",colour:"#f1c75b"}}, {id:"nordlingen",type:"point",symbol:"battle",at:NORD,name:"Nordlingen",labelPos:"s",tag:{text:"1634",colour:"#e8806a"}}, {id:"breisach",type:"point",symbol:"fortress",at:BREIS,name:"Breisach",labelPos:"w",tag:{text:"1638",colour:"#f1c75b"}}
    ], legend:{x:8,y:8,columns:1}},
    {caption:"The Peace of Westphalia and the Empire's losses, 1648", share:0.42, extent:[[1.5,46.8],[19.5,55.0]], projection:"conic", layers:[
      {id:"france-alsace",type:"area",tier:"core",colour:FRA,legend:"France: Alsace, Metz-Toul-Verdun sphere",regions:["FR-67","FR-68","FR-57","FR-54","FR-55"]},
      {id:"swedish-pomerania",type:"area",tier:"core",colour:SWE,legend:"Sweden: Hither Pomerania and Stettin",regions:["DE-MV"]},
      {id:"swedish-bremen-verden",type:"area",tier:"core",colour:SWE,legend:"Sweden: Bremen and Verden",regions:["DE-HB","DE-HH","DE-NI"]},
      {id:"brandenburg-gains",type:"area",tier:"core",colour:BRAN,legend:"Brandenburg: east-west gains",regions:["DE-BB","DE-BE","DE-ST"]},
      {id:"bavaria-upper-palatinate",type:"area",tier:"core",colour:BAV,legend:"Bavaria keeps Upper Palatinate",regions:["DE-BY"]},
      {id:"westphalia-talks",type:"route",style:"dotted",weight:2,colour:WAR,legend:"Muenster and Osnabrueck congress",path:[MUN,OSN]},
      {id:"rhine-frontier",type:"boundary",style:"dashdot",colour:FRA,width:2,legend:"French Rhine bridgeheads",path:[[6.1,49.0],[6.5,48.6],STR,BREIS]},
      {id:"munster",type:"point",symbol:"treaty",at:MUN,name:"Munster",labelPos:"w",tag:{text:"1648",colour:"#f1c75b"}}, {id:"osnabruck",type:"point",symbol:"treaty",at:OSN,name:"Osnabruck",labelPos:"ne",tag:{text:"1648",colour:"#f1c75b"}}, {id:"stettin",type:"point",symbol:"port",at:[14.55,53.43],name:"Stettin",labelPos:"e"}, {id:"bremen",type:"point",symbol:"port",at:[8.80,53.08],name:"Bremen",labelPos:"nw"}, {id:"halberstadt",type:"point",symbol:"bishopric",at:[11.05,51.90],name:"Halberstadt",labelPos:"s"}, {id:"regensburg",type:"point",symbol:"conference",at:REGEN,name:"Regensburg",labelPos:"e",tag:{text:"1663",colour:"#f1c75b"}}
    ], legend:{position:"bottom-left",columns:1}}
  ], text:{intro:"The Thirty Years' War starts as a Bohemian constitutional and confessional crisis, then becomes a European war over Habsburg power, Sweden's Baltic position and France's Rhine strategy.", sections:[
    {heading:"From Prague to Gustavus", entries:[{date:"1618-1623",text:"Prague and White Mountain turn the Bohemian revolt into imperial punishment; the Palatinate is overrun and Bavaria gains the electoral dignity.",refs:["bohemian-revolt","prague","white-mountain","imperial-catholic"]},{date:"1630-1634",text:"Gustavus Adolphus lands at Usedom, Magdeburg is destroyed, Breitenfeld opens Germany, and Lutzen kills the king before Nordlingen checks Sweden in the south.",refs:["swedish-allied","gustavus-route","magdeburg","breitenfeld","lutzen","nordlingen"]}]},
    {heading:"A European settlement", entries:[{date:"1635-1648",text:"France enters openly after Prague, joining Swedish and German allies to keep pressure on the Habsburgs from Alsace to Bohemia.",refs:["france-entry","french-swedish-route","league-heilbronn","breisach"]},{date:"1648",text:"Westphalia gives France Alsatian leverage, Sweden Pomeranian and north-German mouths, Brandenburg east-west gains, and Bavaria the Upper Palatinate, while the Imperial Diet becomes permanent at Regensburg.",refs:["france-alsace","swedish-pomerania","swedish-bremen-verden","brandenburg-gains","bavaria-upper-palatinate","munster","osnabruck","regensburg"]}]}
  ]}, sources:["Penguin Atlas Vol. 1 pp. 254-257", "Approximate war fields and settlement gains after the Penguin maps; coastlines and rivers: Natural Earth 1:50m"] };
})();
