// Sweden, Russia and the Baltic, round 13.
(function () {
  const SWE="#7a5a8c", RUS="#6b8c3f", POL="#d8a84f", DEN="#b36b2e", BRAN="#2f7f86", WAR="#8c3b3b", STEP="#9c8bb8";
  const STOCK=[18.07,59.33], COP=[12.57,55.68], RIGA=[24.11,56.95], REV=[24.75,59.44], STET=[14.55,53.43], NAR=[28.19,59.38], PET=[30.31,59.94], POLT=[34.55,49.59], MOS=[37.62,55.75], KIEV=[30.52,50.45], WARSAW=[21.01,52.23], CRAC=[19.94,50.06], BENDER=[29.48,46.83], OSLO=[10.75,59.91];
  const swedenCore=[[10.5,55.0],[12.6,56.4],[14.0,58.0],[16.2,60.5],[18.0,63.5],[22.0,66.0],[26.5,66.0],[29.5,64.0],[30.0,61.0],[27.0,58.0],[23.0,57.0],[20.0,58.0],[17.2,57.5],[15.0,56.0],[13.0,55.0]];
  const swedishBaltic=[[20.3,56.0],[21.8,58.0],[24.0,59.6],[27.8,59.8],[28.5,58.2],[27.0,56.0],[24.0,55.4],[21.5,55.2]];
  const pomerania=[[11.0,53.4],[12.5,54.5],[14.5,54.8],[15.8,54.3],[15.2,53.4],[13.0,53.0]];
  const denmarkNorway=[[7.5,54.2],[8.5,57.5],[10.8,59.5],[12.0,61.5],[10.5,63.5],[6.5,62.8],[4.5,60.0],[5.8,57.0],[7.0,55.0]];
  const polandLith=[[14.5,49.0],[16.0,53.5],[20.0,56.5],[25.0,56.5],[29.5,55.0],[31.5,52.5],[30.0,49.0],[25.0,48.0],[20.0,48.3],[17.0,49.0]];
  const russianWest=[[28.0,55.0],[30.0,57.0],[32.0,59.0],[36.0,60.5],[41.0,60.0],[42.5,56.0],[39.0,53.0],[35.0,51.0],[31.0,51.5],[29.0,53.0]];
  const russianGains=[[24.0,56.0],[25.8,58.6],[28.5,60.0],[31.0,60.2],[31.2,58.5],[29.0,56.2],[26.0,55.2]];
  const siberiaRoute=[MOS,[48,56],[60,57],[72,58],[84,58],[96,58],[110,56],[124,54],[136,52],[143,50]];
  window.PLATES["baltic-russia-sweden-1632-1721"] = { id:"baltic-russia-sweden-1632-1721", title:"Sweden, Russia and the Baltic, 1632-1721", head:"Age of Reason / Northern Europe", folio:"38", viewer:"early-modern/1700/ch-baltic-russia-sweden", figures:[
    {caption:"Sweden's Baltic empire after Westphalia and Roskilde, 1648-1660", share:0.50, extent:[[5,48],[34,66]], projection:"conic", layers:[
      {id:"sweden-core",type:"area",tier:"core",colour:SWE,legend:"Sweden and Finland",regions:["SWE","FIN"]},
      {id:"swedish-baltic",type:"area",tier:"core",colour:SWE,legend:"Swedish Baltic provinces",regions:["EST","LV-RIX","LV-054","LV-101","LV-007","LV-009","LV-094","LV-017","LV-019","LV-045","LV-076","LV-075","LV-070","LV-048","LV-059","LV-033","LV-039"]},
      {id:"swedish-pomerania",type:"area",tier:"core",colour:SWE,legend:"Swedish Pomerania",regions:["DE-MV"]},
      {id:"denmark-norway",type:"area",tier:"influence",colour:DEN,legend:"Denmark-Norway after Roskilde",regions:["DNK","NOR"]},
      {id:"poland-lithuania",type:"area",tier:"influence",colour:POL,legend:"Poland-Lithuania",regions:["POL","LTU","BLR","UA-07","UA-56","UA-18","UA-32","UA-46","UA-61","UA-68","UA-05","UA-71","UA-53","UA-74","UA-59","UA-30"]},
      {id:"brandenburg-prussia",type:"area",pattern:"hatch",colour:BRAN,legend:"Brandenburg-Prussia corridor",regions:["DE-BB","DE-BE","DE-ST","DE-MV","DE-NI","PL-WN"]},
      {id:"swedish-polish-war",type:"route",style:"road",weight:2.6,colour:WAR,legend:"Charles X Gustav's Polish war",path:[STOCK,RIGA,WARSAW,CRAC]},
      {id:"roskilde-front",type:"boundary",style:"partition",colour:DEN,width:2,legend:"Roskilde border, 1658",path:[[12.0,55.3],[13.0,56.0],[14.0,56.2]]},
      {id:"stockholm",type:"point",symbol:"capital",at:STOCK,name:"Stockholm"}, {id:"copenhagen",type:"point",symbol:"capital",at:COP,name:"Copenhagen",labelPos:"w",tag:{text:"Roskilde 1658",colour:"#f1c75b"}}, {id:"riga",type:"point",symbol:"port",at:RIGA,name:"Riga"}, {id:"reval",type:"point",symbol:"port",at:REV,name:"Reval",labelPos:"ne"}, {id:"warsaw",type:"point",symbol:"battle",at:WARSAW,name:"Warsaw",tag:{text:"1656",colour:"#f1c75b"}}, {id:"oliva",type:"point",symbol:"treaty",at:[18.64,54.41],name:"Oliva",tag:{text:"1660",colour:"#f1c75b"}}
    ], legend:{position:"bottom-left",columns:1}},
    {caption:"The Great Northern War and Russia's Baltic opening, 1700-1721", share:0.50, extent:[[18,46],[45,62]], projection:"conic", layers:[
      {id:"swedish-empire-1700",type:"area",tier:"core",colour:SWE,legend:"Swedish empire before 1700",regions:["EST","LV-RIX","LV-054","LV-101","LV-007","LV-009","LV-094","LV-017","LV-019","LV-045","LV-076","LV-075","LV-070","LV-048","LV-059","LV-033","LV-039","DE-MV"]},
      {id:"russia-before",type:"area",tier:"influence",colour:RUS,legend:"Russia before Peter's Baltic gains",regions:["RUS"],minus:["RU-LEN","RU-SPE"]},
      {id:"russian-baltic-gains",type:"area",tier:"core",colour:RUS,legend:"Russian Baltic gains by Nystad",regions:["EST","LV-RIX","LV-054","LV-101","LV-007","LV-009","LV-094","LV-017","LV-019","LV-045","LV-076","LV-075","LV-070","LV-048","LV-059","LV-033","LV-039","RU-LEN","RU-SPE"]},
      {id:"poland-saxony",type:"area",tier:"influence",colour:POL,legend:"Saxony-Poland theatre",regions:["POL","LTU","BLR","UA-07","UA-56","UA-18","UA-32","UA-46","UA-61","UA-68","UA-05","UA-71","UA-53","UA-74","UA-59","UA-30","DE-SN"]},
      {id:"charles-campaign",type:"route",style:"road",weight:2.8,colour:WAR,legend:"Charles XII: Narva to Poltava",path:[NAR,[22.0,54.0],WARSAW,[23.0,51.0],KIEV,POLT,BENDER]},
      {id:"peter-counter",type:"route",style:"dashed",weight:2.5,colour:RUS,legend:"Peter I counterstroke",path:[MOS,NAR,PET,RIGA]},
      {id:"nystad-frontier",type:"boundary",style:"partition",colour:RUS,width:2,legend:"Treaty of Nystad: Baltic provinces to Russia",path:[[23.0,56.0],[25.0,58.0],NAR,[30.0,60.0]]},
      {id:"narva",type:"point",symbol:"battle",at:NAR,name:"Narva",labelPos:"ne",tag:{text:"1700/1704",colour:"#f1c75b"}}, {id:"st-petersburg",type:"point",symbol:"capital",at:PET,name:"St Petersburg",labelPos:"e",tag:{text:"1703",colour:"#f1c75b"}}, {id:"poltava",type:"point",symbol:"battle",at:POLT,name:"Poltava",labelPos:"e",tag:{text:"1709",colour:"#e8806a"}}, {id:"bender",type:"point",symbol:"fortress",at:BENDER,name:"Bender",labelPos:"s"}, {id:"nystad",type:"point",symbol:"treaty",at:[23.42,60.80],name:"Nystad",labelPos:"nw",tag:{text:"1721",colour:"#f1c75b"}}
    ], legend:{position:"bottom-left",columns:1}}
  ], text:{intro:"The Baltic story turns upside down: Sweden becomes the Baltic great power after Westphalia and Roskilde, then Peter's Russia breaks through to the sea in the Great Northern War.", sections:[
    {heading:"Swedish great power", entries:[{date:"1648-1660",text:"Sweden holds Finland, Baltic provinces, Pomerania, Bremen-Verden and southern Swedish gains from Denmark, but Poland-Lithuania, Denmark and Brandenburg-Prussia remain natural opponents.",refs:["sweden-core","swedish-baltic","swedish-pomerania","denmark-norway","poland-lithuania","brandenburg-prussia","copenhagen","oliva"]},{date:"1654-1660",text:"Charles X Gustav's Polish war reaches Warsaw and Cracow before the maritime powers force a balance at Oliva.",refs:["swedish-polish-war","warsaw","riga"]}]},
    {heading:"Russia breaks the Baltic lock", entries:[{date:"1700-1709",text:"Charles XII wins at Narva and turns into Poland, but Peter I rebuilds, founds St Petersburg and defeats Sweden at Poltava after the Ukrainian campaign.",refs:["charles-campaign","peter-counter","narva","st-petersburg","poltava","bender"]},{date:"1721",text:"Nystad transfers the Baltic provinces to Russia. Sweden remains a state, but Russia replaces it as the major Baltic power.",refs:["swedish-empire-1700","russia-before","russian-baltic-gains","nystad-frontier","nystad"]}]}
  ]}, sources:["Penguin Atlas Vol. 1 pp. 270-273", "Approximate Swedish, Polish-Lithuanian and Russian fields after the Penguin maps; coastlines and rivers: Natural Earth 1:50m"] };
})();
