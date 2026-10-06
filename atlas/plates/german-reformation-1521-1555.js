// The German Reformation, Peasant War and settlement, round 12.
(function () {
  const CATH="#d8a84f", LUTH="#7a5a8c", CALV="#4f8a74", RAD="#8c3b3b", IMP="#4b4642", LINE="#5f4b8b";
  const WIT=[12.65,51.87], WOR=[8.36,49.63], AUG=[10.90,48.37], SPE=[8.44,49.32], MUN=[7.63,51.96], ZUR=[8.54,47.37], STR=[7.75,48.58], NUR=[11.08,49.45], TORG=[12.99,51.56], MUHL=[13.21,51.24], MAG=[11.63,52.13], PRAG=[14.42,50.08];
  const saxony=[[10.7,50.5],[11.0,51.0],[11.4,51.5],[12.1,51.9],[12.7,52.2],[13.2,52.4],[13.8,52.2],[14.3,51.9],[14.6,51.4],[14.4,50.9],[13.8,50.6],[13.0,50.5],[12.1,50.4],[11.3,50.3]];
  const hesse=[[8.0,49.8],[8.4,50.5],[8.8,51.0],[9.3,51.4],[9.9,51.4],[10.2,51.0],[10.0,50.5],[9.4,50.1],[8.8,49.8]];
  const brandenburg=[[11.1,51.7],[11.6,52.4],[12.3,52.9],[13.3,53.3],[14.5,53.3],[15.2,52.9],[15.5,52.3],[15.3,51.8],[14.5,51.5],[13.3,51.5],[12.1,51.6]];
  const bavaria=[[9.9,47.3],[10.2,48.0],[10.8,48.6],[11.5,49.0],[12.3,49.2],[13.1,49.0],[13.6,48.5],[13.4,47.9],[12.8,47.4],[11.9,47.1],[10.9,47.1]];
  const austria=[[9.4,46.3],[10.2,47.0],[11.4,47.4],[12.6,47.6],[13.8,48.0],[15.2,48.2],[16.0,47.6],[15.6,46.7],[14.2,46.2],[12.5,46.1],[10.8,46.0]];
  const swiss=[[6.0,46.2],[6.6,47.1],[7.2,47.7],[8.1,47.8],[8.9,47.6],[9.5,47.1],[9.2,46.5],[8.1,46.1],[6.8,46.0]];
  const peasant=[[7.0,47.0],[7.5,47.8],[8.1,48.7],[8.8,49.5],[9.6,50.1],[10.4,50.7],[11.4,51.1],[12.3,50.9],[12.7,50.3],[12.2,49.6],[11.5,49.0],[10.7,48.4],[9.8,47.7],[8.7,47.0]];
  window.PLATES["german-reformation-1521-1555"] = { id:"german-reformation-1521-1555", title:"The German Reformation, 1521-1555", head:"Age of Religious Discord / German Empire I", folio:"31", viewer:"transition/1521/ch-german-reformation", figures:[
    {caption:"Centres and outbreaks to 1530", share:0.50, extent:[[5,46],[16,55]], projection:"conic", layers:[
      {id:"saxony-lutheran",type:"area",clipToLand:true,pattern:"stipple",colour:LUTH,legend:"Lutheran princely and city lands",polygon:saxony,smooth:false},
      {id:"hesse-lutheran",type:"area",clipToLand:true,pattern:"stipple",colour:LUTH,polygon:hesse,smooth:false},
      {id:"brandenburg-lutheran",type:"area",clipToLand:true,pattern:"stipple",colour:LUTH,polygon:brandenburg,smooth:false},
      {id:"bavaria-catholic",type:"area",clipToLand:true,tier:"core",colour:CATH,legend:"Catholic Bavaria and Austrian lands",polygon:bavaria,smooth:false},
      {id:"austria-catholic",type:"area",clipToLand:true,tier:"core",colour:CATH,polygon:austria,smooth:false},
      {id:"swiss-reform",type:"area",clipToLand:true,pattern:"hatch",colour:CALV,legend:"Reformed Swiss cantons",polygon:swiss,smooth:false},
      {id:"peasants-war",type:"area",clipToLand:true,pattern:"crosshatch",colour:RAD,legend:"Peasant War: Swabia, Franconia, Thuringia",polygon:peasant,smooth:false},
      {id:"worms",type:"point",symbol:"conference",at:WOR,name:"Worms",labelPos:"w",tag:{text:"1521",colour:"#f1c75b"}}, {id:"wittenberg",type:"point",symbol:"university",at:WIT,name:"Wittenberg",labelPos:"ne",tag:{text:"1517",colour:"#f1c75b"}}, {id:"speyer",type:"point",symbol:"conference",at:SPE,name:"Speyer",labelPos:"s",tag:{text:"1529",colour:"#f1c75b"}}, {id:"augsburg",type:"point",symbol:"conference",at:AUG,name:"Augsburg",labelPos:"se",tag:{text:"1530",colour:"#f1c75b"}}, {id:"zurich",type:"point",symbol:"university",at:ZUR,name:"Zurich",labelPos:"s"}, {id:"strasbourg",type:"point",symbol:"large-city",at:STR,name:"Strasbourg",labelPos:"w"}, {id:"munster",type:"point",symbol:"insurrection",at:MUN,name:"Munster — Anabaptists",labelPos:"e",tag:{text:"1534",colour:"#e8806a"}}, {id:"nuremberg",type:"point",symbol:"large-city",at:NUR,name:"Nuremberg",labelPos:"e"},
      {id:"edict-front",type:"boundary",style:"dashdot",colour:IMP,legend:"Imperial pressure after Worms",path:[[7.7,48.6],[8.6,49.4],[10.1,50.0],[11.4,50.8],[12.3,51.7],[12.6,52.5]]}
    ], legend:{position:"bottom-left",columns:1}},
    {caption:"The Reformation map at Augsburg, 1531-1555", share:0.50, extent:[[5,46],[16,55]], projection:"conic", layers:[
      {id:"lutheran-saxony",type:"area",clipToLand:true,tier:"core",colour:LUTH,legend:"Lutheran territories",polygon:saxony,smooth:false},
      {id:"lutheran-hesse",type:"area",clipToLand:true,tier:"core",colour:LUTH,polygon:hesse,smooth:false},
      {id:"lutheran-brandenburg",type:"area",clipToLand:true,tier:"core",colour:LUTH,polygon:brandenburg,smooth:false},
      {id:"catholic-bavaria",type:"area",clipToLand:true,tier:"core",colour:CATH,legend:"Catholic territories",polygon:bavaria,smooth:false},
      {id:"catholic-austria",type:"area",clipToLand:true,tier:"core",colour:CATH,polygon:austria,smooth:false},
      {id:"calvinist-rhine",type:"area",clipToLand:true,pattern:"hatch",colour:CALV,legend:"Reformed Rhine-Swiss zones",polygon:swiss,smooth:false},
      {id:"schmalkaldic-area",type:"area",clipToLand:true,pattern:"hatch",colour:LINE,legend:"Schmalkaldic League member belt",polygon:[[7.9,50.1],[8.5,51.2],[9.8,51.7],[11.1,52.0],[12.6,52.0],[13.3,51.7],[13.2,51.2],[12.0,50.9],[10.6,50.7],[9.1,50.3]],smooth:false},
      {id:"imperial-campaign",type:"arrow",colour:IMP,width:3.2,legend:"Imperial campaign, 1546-47",path:[[10.9,48.4],[11.4,49.5],[12.2,50.4],MUHL]},
      {id:"league",type:"point",symbol:"treaty",at:TORG,name:"Torgau",labelPos:"sw",tag:{text:"1531",colour:"#f1c75b"}}, {id:"muhlberg",type:"point",symbol:"battle",at:MUHL,name:"Muhlberg",labelPos:"se",tag:{text:"1547",colour:"#e8806a"}}, {id:"augsburg2",type:"point",symbol:"treaty",at:AUG,name:"Augsburg",labelPos:"se",tag:{text:"1555",colour:"#f1c75b"}}, {id:"wittenberg2",type:"point",symbol:"university",at:WIT,name:"Wittenberg",labelPos:"ne"}, {id:"magdeburg",type:"point",symbol:"large-city",at:MAG,name:"Magdeburg",labelPos:"nw"}, {id:"prague",type:"point",symbol:"capital",at:PRAG,name:"Prague",labelPos:"e"}
    ], legend:{position:"bottom-left",columns:1}}
  ], text:{intro:"The Reformation in the Empire was never only doctrine. It became a map of princes, free cities, peasant rising, radical reform and imperial compromise.", sections:[
    {heading:"Worms to Augsburg", entries:[{date:"1521-1530",text:"The Edict of Worms condemns Luther, but Saxony, Hesse, Brandenburg, Swiss cities and imperial cities keep the argument alive until the Augsburg Confession gives it a political form.",refs:["worms","wittenberg","saxony-lutheran","hesse-lutheran","brandenburg-lutheran","swiss-reform","zurich","speyer","augsburg","edict-front"]},{date:"1524-1535",text:"The Peasant War crosses Swabia, Franconia and Thuringia, while Munster's Anabaptist kingdom shows the radical edge feared by Catholic and Lutheran authorities alike.",refs:["peasants-war","munster"]}]},
    {heading:"Settlement", entries:[{date:"1531-1547",text:"The Schmalkaldic League is a belt of allied Lutheran princes and cities rather than an oval field; Charles V defeats it at Muhlberg but cannot restore religious unity.",refs:["schmalkaldic-area","league","imperial-campaign","muhlberg","lutheran-saxony","lutheran-hesse","lutheran-brandenburg"]},{date:"1555",text:"Augsburg accepts Catholic and Lutheran territorial churches. Bavaria and Austria remain Catholic, while Calvinists and radicals remain outside the settlement.",refs:["augsburg2","catholic-bavaria","catholic-austria","calvinist-rhine"]}]}
  ]}, sources:["Penguin Atlas Vol. 1 pp. 234-236", "Approximate confessional and revolt fields drawn from territorial cores, rivers and border towns; coastlines and rivers: Natural Earth 1:50m"] };
})();
