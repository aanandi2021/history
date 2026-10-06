// Prussia, Poland and enlightened despotism, round 14.
(function () {
  const PRUS="#2f7f86", AUS="#d8a84f", RUS="#6b8c3f", POL="#c58b32", FRA="#8c3b3b", IDEA="#6b6b6b", WAR="#5b4a3f";
  const BER=[13.40,52.52], KON=[20.51,54.71], WARSAW=[21.01,52.23], DRE=[13.74,51.05], VIEN=[16.37,48.21], BRES=[17.04,51.11], POS=[16.93,52.41], DAN=[18.65,54.35], VIL=[25.28,54.69], KIEV=[30.52,50.45], CRAC=[19.94,50.06], GROD=[23.83,53.67], TARG=[29.15,48.55];
  window.PLATES["prussia-poland-enlightened-despotism-1713-1795"] = { id:"prussia-poland-enlightened-despotism-1713-1795", title:"Prussia, Poland and enlightened despotism, 1713-1795", head:"Age of Reason / Central and eastern Europe", folio:"42", viewer:"early-modern/1772/ch-prussia-poland-enlightened", figures:[
    {caption:"Cabinet politics, Prussia's rise and the Silesian wars, 1713-1748", share:0.35, extent:[[-6,40],[25,56]], projection:"conic", layers:[
      {id:"france-ancien",type:"area",tier:"influence",colour:FRA,legend:"France under the Ancien Regime",regions:["FRA"]},
      {id:"austria-1740",type:"area",tier:"core",colour:AUS,legend:"Habsburg lands",regions:["AUT","CZE","SVK","HUN","HRV","SVN","BEL","LUX"]},
      {id:"prussia-1740",type:"area",tier:"core",colour:PRUS,legend:"Prussia before Silesia",regions:["DE-BB","DE-BE","DE-ST","PL-WN","PL-PM"]},
      {id:"silesia-gain",type:"area",pattern:"hatch",colour:PRUS,legend:"Silesia taken by Prussia",regions:["PL-DS","PL-OP","PL-SL"]},
      {id:"italian-exchanges",type:"area",pattern:"hatch",colour:AUS,legend:"Italian exchanges after 1738/1748",regions:["IT-TP","IT-ME","IT-PA","IT-AG","IT-CL","IT-RG","IT-SR","IT-CT","IT-EN","IT-SS","IT-NU","IT-OT","IT-OR","IT-VS","IT-CA","IT-OG","IT-CI","IT-NA","IT-CE","IT-SA","IT-BN","IT-AV","IT-FG","IT-BA","IT-BT","IT-BR","IT-LE","IT-TA","IT-MT","IT-PZ","IT-CS","IT-KR","IT-CZ","IT-RC","IT-VV","IT-CB","IT-IS","IT-AQ","IT-TE","IT-PE","IT-CH","IT-FI","IT-AR","IT-SI","IT-GR","IT-LI","IT-PI","IT-LU","IT-MS","IT-PT","IT-PO","IT-PC","IT-PR"]},
      {id:"silesian-war",type:"route",style:"road",weight:2.5,colour:WAR,legend:"Frederick's Silesian campaigns",path:[BER,BRES,[16.0,50.5],[16.18,49.18],DRE]},
      {id:"lorraine",type:"boundary",style:"dashdot",colour:FRA,width:2,legend:"Lorraine to France after 1766",path:[[5.4,49.2],[6.2,48.8],[6.8,48.3],[6.2,47.9]]},
      {id:"berlin",type:"point",symbol:"capital",at:BER,name:"Berlin"}, {id:"konigsberg",type:"point",symbol:"capital",at:KON,name:"Konigsberg",labelPos:"ne"}, {id:"breslau",type:"point",symbol:"battle",at:BRES,name:"Breslau",tag:{text:"1742",colour:"#f1c75b"}}, {id:"dresden",type:"point",symbol:"treaty",at:DRE,name:"Dresden",tag:{text:"1745",colour:"#f1c75b"}}, {id:"vienna",type:"point",symbol:"capital",at:VIEN,name:"Vienna"}
    ], legend:{position:"bottom-left",columns:1}},
    {caption:"The partitions of Poland, 1772-1795", share:0.37, extent:[[12,47],[33,57]], projection:"conic", layers:[
      {id:"poland-1760",type:"area",tier:"influence",colour:POL,legend:"Poland-Lithuania before partition",regions:["POL","LTU","BLR","UA-07","UA-56","UA-18","UA-32","UA-46","UA-61","UA-68","UA-05","UA-71","UA-53","UA-74"]},
      {id:"prussian-partitions",type:"area",pattern:"hatch",colour:PRUS,legend:"Prussian gains: Royal Prussia, Posen, Warsaw",regions:["PL-PM","PL-WP","PL-KP","PL-LD","PL-MZ"]},
      {id:"russian-partitions",type:"area",pattern:"hatch",colour:RUS,legend:"Russian gains: Lithuania, Belarus, Right-Bank Ukraine",regions:["LTU","BLR","UA-07","UA-56","UA-18","UA-32","UA-46","UA-61","UA-68","UA-05","UA-71","UA-53","UA-74"]},
      {id:"austrian-partitions",type:"area",pattern:"hatch",colour:AUS,legend:"Austrian gains: Galicia",regions:["PL-PK","PL-LU","PL-MA","UA-46","UA-21","UA-26"]},
      {id:"kosciuszko",type:"route",style:"dashed",weight:2.4,colour:WAR,legend:"Kosciuszko rising, 1794",path:[CRAC,WARSAW,GROD]},
      {id:"bar-targowice",type:"route",style:"dotted",weight:2,colour:WAR,legend:"Bar to Targowice confederations",path:[[27.68,49.08],TARG]},
      {id:"warsaw",type:"point",symbol:"capital",at:WARSAW,name:"Warsaw",tag:{text:"1794",colour:"#e8806a"}}, {id:"cracow",type:"point",symbol:"battle",at:CRAC,name:"Cracow",labelPos:"sw"}, {id:"grodno",type:"point",symbol:"treaty",at:GROD,name:"Grodno",labelPos:"e",tag:{text:"1793",colour:"#f1c75b"}}, {id:"vilna",type:"point",symbol:"large-city",at:VIL,name:"Vilna",labelPos:"ne"}, {id:"danzig",type:"point",symbol:"port",at:DAN,name:"Danzig",labelPos:"n"}, {id:"posen",type:"point",symbol:"large-city",at:POS,name:"Posen",labelPos:"s"}
    ], legend:{x:760,y:8,columns:1}},
    {caption:"Enlightened despotism: reform from above", kind:"diagram", share:0.28, diagram:{height:0.58, compartments:[
      {id:"state",label:"Reason of state",x:0.04,y:0.05,w:0.92,h:0.38,colour:IDEA,fill:"#eee8d5"},
      {id:"limits",label:"Limits",x:0.04,y:0.52,w:0.92,h:0.36,colour:WAR,fill:"#f3e4be"}
    ], nodes:[
      {id:"frederick",label:"Frederick II\nPrussia",x:0.18,y:0.20,w:0.20,h:0.12,colour:PRUS,strong:true},
      {id:"maria",label:"Maria Theresa\nAustria",x:0.50,y:0.20,w:0.20,h:0.12,colour:AUS,strong:true},
      {id:"catherine",label:"Catherine II\nRussia",x:0.82,y:0.20,w:0.20,h:0.12,colour:RUS,strong:true},
      {id:"law",label:"law, schools\nand officials",x:0.18,y:0.70,w:0.20,h:0.12,colour:IDEA},
      {id:"serfdom",label:"serfdom\nand estates",x:0.50,y:0.70,w:0.20,h:0.12,colour:WAR},
      {id:"poland",label:"Poland\npartitioned",x:0.82,y:0.70,w:0.20,h:0.12,colour:POL}
    ], arrows:[
      {id:"prus-law",from:"frederick",to:"law"},
      {id:"aus-law",from:"maria",to:"law"},
      {id:"rus-serf",from:"catherine",to:"serfdom",label:"noble power"},
      {id:"serf-pol",from:"serfdom",to:"poland",label:"army + empire"},
      {id:"three",from:"catherine",to:"poland",label:"1772 / 1793 / 1795"}
    ]}},
  ], text:{intro:"The last European pages show the eighteenth-century state becoming more rational, more militarized and more dangerous: Prussia rises, Poland is partitioned, and enlightened reform rarely means popular rule.", sections:[
    {heading:"Prussia and cabinet politics", entries:[{date:"1713-1748",text:"Frederick William I builds the military-bureaucratic Prussian state; Frederick II then takes Silesia and forces Austria to accept Prussia as a great power.",refs:["prussia-1740","silesia-gain","silesian-war","berlin","breslau","dresden"]},{date:"1713-1748",text:"Cabinet politics after Utrecht rearrange Sardinia, Sicily, Naples, Tuscany, Parma, Lorraine and the Austrian Netherlands by dynastic exchange as much as battle.",refs:["france-ancien","austria-1740","italian-exchanges","lorraine","vienna"]}]},
    {heading:"Poland and enlightened absolutism", entries:[{date:"1772-1795",text:"Russia, Prussia and Austria use confederations, reform panic and military occupation to erase Poland-Lithuania in three partitions.",refs:["poland-1760","prussian-partitions","russian-partitions","austrian-partitions","bar-targowice","kosciuszko","warsaw","grodno"]},{date:"1740-1796",text:"Frederick, Maria Theresa, Joseph II and Catherine all speak the language of reason, law and useful subjects, but estates, serfdom and empire set the hard limits.",refs:["frederick","maria","catherine","law","serfdom","poland"]}]}
  ]}, sources:["Penguin Atlas Vol. 1 pp. 281-288", "Natural Earth admin-1 regions approximate Silesia, Galicia, Lithuania and partition zones"] };
})();
