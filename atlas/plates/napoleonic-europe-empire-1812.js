// Napoleonic Europe at its height, Vol. 2 round 1.
(function () {
  const FRA="#7a5a8c", DEP="#b99bd8", BRIT="#2f5f93", RUS="#6b8c3f", AUS="#d8a84f", PRUS="#4f7f4f", WAR="#8c3b3b", ROAD="#5b4a3f";
  const PAR=[2.35,48.86], MOS=[37.62,55.75], NIEM=[23.90,54.90], SMO=[32.05,54.78], BOR=[35.82,55.53], BERZ=[28.33,54.33], MAD=[-3.70,40.42], CAD=[-6.29,36.53], VIEN=[16.37,48.21], BER=[13.40,52.52];
  window.PLATES["napoleonic-europe-empire-1812"] = { id:"napoleonic-europe-empire-1812", title:"Napoleonic Europe at its height, 1812", head:"Napoleonic Age / Europe II", folio:"26-35", viewer:"revolution/1812/ch-napoleonic-europe-1812", figures:[
    {caption:"The Napoleonic system and the Continental blockade, 1812", share:0.58, extent:[[-12,35],[42,58]], projection:"conic", layers:[
      {id:"french-empire",type:"area",tier:"core",colour:FRA,legend:"French Empire and annexed departments",regions:["FRA","BEL","NLD","LUX","DE-NW","DE-RP","DE-SL","DE-HH","DE-HB","IT-TO","IT-GE","IT-MI","IT-VE","IT-BO","IT-FI","IT-RM"]},
      {id:"dependent",type:"area",tier:"conquest",colour:FRA,legend:"Dependent kingdoms and Confederation of the Rhine",regions:["ESP","DE-BY","DE-BW","DE-HE","DE-SN","DE-ST","POL","ITA"]},
      {id:"allies",type:"area",tier:"influence",colour:FRA,legend:"Allies under pressure",regions:["AUT","PRT","DNK","NOR","POL"]},
      {id:"britain",type:"area",tier:"core",colour:BRIT,legend:"Britain outside the blockade",regions:["GBR","IRL"]},
      {id:"russia",type:"area",tier:"core",colour:RUS,legend:"Russia leaves the system",regions:["RUS"]},
      {id:"blockade",type:"boundary",style:"dashdot",colour:ROAD,width:2,legend:"Continental System coast",path:[[-5,43],[-1,50],[4,52],[9,54],[13,55],[18,55],[23,54]]},
      {id:"spain-war",type:"route",style:"dashed",weight:2.2,colour:BRIT,legend:"Peninsular front",path:[[-9.14,38.72],MAD,CAD]},
      {id:"russia-1812",type:"route",style:"dashed",weight:2.5,colour:WAR,legend:"Russian campaign",path:[NIEM,[25.28,54.69],SMO,BOR,MOS,BERZ,NIEM]},
      {id:"paris",type:"point",symbol:"capital",at:PAR,name:"Paris",labelPos:"w"}, {id:"madrid",type:"point",symbol:"battle",at:MAD,name:"Madrid",labelPos:"s"}, {id:"berlin",type:"point",symbol:"capital",at:BER,name:"Berlin",labelPos:"n"}, {id:"vienna",type:"point",symbol:"capital",at:VIEN,name:"Vienna",labelPos:"s"}, {id:"moscow",type:"point",symbol:"capital",at:MOS,name:"Moscow",labelPos:"e",tag:{text:"1812",colour:"#e8806a"}}
    ], legend:{position:"bottom-left",columns:1}},
    {caption:"The Russian campaign, June-November 1812", share:0.42, extent:[[20,52],[40,57]], projection:"conic", layers:[
      {id:"russian-space",type:"area",tier:"influence",colour:RUS,legend:"Russian defence in depth",regions:["RUS","BLR","LTU"]},
      {id:"advance",type:"route",style:"road",weight:2.6,colour:WAR,legend:"Advance to Moscow",path:[NIEM,[25.28,54.69],SMO,BOR,MOS]},
      {id:"retreat",type:"route",style:"dashed",weight:2.6,colour:ROAD,legend:"Retreat and collapse",path:[MOS,[36.5,55.0],SMO,BERZ,NIEM]},
      {id:"niemen",type:"point",symbol:"battle",at:NIEM,name:"Niemen",labelPos:"s",tag:{text:"Jun",colour:"#f1c75b"}}, {id:"smolensk",type:"point",symbol:"battle",at:SMO,name:"Smolensk",labelPos:"s",tag:{text:"Aug",colour:"#f1c75b"}}, {id:"borodino",type:"point",symbol:"battle",at:BOR,name:"Borodino",labelPos:"s",tag:{text:"Sep",colour:"#f1c75b"}}, {id:"moscow2",type:"point",symbol:"destroyed",at:MOS,name:"Moscow",labelPos:"e",tag:{text:"14 Sep",colour:"#e8806a"}}, {id:"berezina",type:"point",symbol:"battle",at:BERZ,name:"Berezina",labelPos:"s",tag:{text:"Nov",colour:"#e8806a"}}
    ], legend:{position:"top-left",columns:1}}
  ], text:{intro:"Napoleon's Europe was a system as much as a map: annexed departments, dependent states, coerced allies, and a trade war against Britain. Russia shows the cost of enforcing it by distance and force.", sections:[
    {heading:"System", entries:[{date:"1806-1812",text:"The Continental System tries to close European coasts to Britain while France rules through annexations, family states and dependent allies.",refs:["french-empire","dependent","allies","britain","blockade","spain-war","paris","madrid"]},{date:"1810-1812",text:"Russia's withdrawal from the system and Napoleon's disregard for Russian interests turn alliance into invasion.",refs:["russia","russia-1812","berlin","vienna","moscow"]}]},
    {heading:"Russia", entries:[{date:"1812",text:"The Grande Armee advances from the Niemen through Smolensk and Borodino to Moscow, then retreats through hunger, pursuit and the Berezina catastrophe.",refs:["russian-space","advance","retreat","niemen","smolensk","borodino","moscow2","berezina"]}]}
  ]}, sources:["Penguin Atlas Vol. 2 pp. 24-37", "See also the Russia period scene ch-1812 for a dedicated campaign view"] };
})();
