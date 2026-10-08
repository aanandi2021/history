(function(){
 const NEW="#d8a84f", GER="#8c3b3b", LOSS="#7a5a8c", RHINE="#4c78a8", OTT="#b36b2e", BRIT="#2f5f93", FRA="#4c78a8";
 const alsace=[[6.8,49.1],[8.2,49.0],[8.3,47.6],[7.2,47.4],[6.8,49.1]];
 const corridor=[[17.0,53.0],[19.3,53.0],[19.3,54.6],[17.5,54.6],[17.0,53.0]];
 const rhine=[[5.8,51.3],[7.2,51.1],[7.5,48.8],[6.0,48.7],[5.8,51.3]];
 window.PLATES["versailles-europe-1919-1920"]={id:"versailles-europe-1919-1920",title:"Europe after Versailles, 1919-1920",head:"First World War / Peace treaties",folio:"132-133",viewer:"ww1/1919/ch-peace-treaties",figures:[{caption:"Europe after the treaties, 1919-1920",share:0.62,extent:[[-10,35],[45,58]],projection:"conic",layers:[
  {id:"germany",type:"area",hist:{year:1920,names:["Germany","East Prussia"]},colour:GER,tier:"core",legend:"Germany after Versailles"},
  {id:"new-states",type:"area",hist:{year:1920,names:["Poland","Czechoslovakia","Yugoslavia","Austria","Hungary","Finland","Estonia","Latvia","Lithuania"]},colour:NEW,tier:"core",legend:"New or remade states"},
  {id:"romania-greece",type:"area",hist:{year:1920,names:["Romania","Greece"]},colour:"#c9a24f",tier:"influence",legend:"Expanded allies"},
  {id:"alsace",type:"area",polygon:alsace,smooth:false,clipToLand:true,pattern:"hatch",colour:LOSS,legend:"Alsace-Lorraine returned to France"},
  {id:"corridor",type:"area",polygon:corridor,smooth:false,clipToLand:true,pattern:"hatch-back",colour:LOSS,legend:"Polish Corridor / Danzig question"},
  {id:"rhineland",type:"area",polygon:rhine,smooth:false,clipToLand:true,pattern:"dots",colour:RHINE,legend:"Rhineland demilitarized / occupied zones"},
  {id:"plebiscites",type:"point",symbol:"conference",at:[18.7,50.2],name:"Upper Silesia",labelPos:"e",tag:{text:"pleb.",colour:"#f1c75b"}},
  {id:"schleswig",type:"point",symbol:"conference",at:[9.3,54.8],name:"Schleswig",labelPos:"w",tag:{text:"pleb.",colour:"#f1c75b"}},
  {id:"versailles",type:"point",symbol:"treaty",at:[2.12,48.80],name:"Versailles",labelPos:"s",tag:{text:"28 Jun 1919",colour:"#f1c75b"}},
  {id:"warsaw",type:"point",symbol:"capital",at:[21.0,52.23],name:"Poland",labelPos:"e"},
  {id:"prague",type:"point",symbol:"capital",at:[14.42,50.08],name:"Czechoslovakia",labelPos:"s"},
  {id:"belgrade",type:"point",symbol:"capital",at:[20.46,44.82],name:"Yugoslavia",labelPos:"e"},
  {id:"helsinki",type:"point",symbol:"capital",at:[24.94,60.17],name:"Finland",labelPos:"s"}
 ],legend:{position:"bottom-left",columns:1}},{caption:"Mandates instead of German and Ottoman colonies",share:0.38,extent:[[28,28],[48,41]],projection:"conic",layers:[
  {id:"ottoman-1920",type:"area",hist:{year:1920,names:["Ottoman Sultanate"]},colour:OTT,tier:"core",legend:"Ottoman Turkish remnant, 1920"},
  {id:"syria",type:"area",hist:{year:1920,names:["Syria (France)"]},colour:FRA,tier:"core",legend:"French mandate: Syria / Lebanon"},
  {id:"iraq-pal",type:"area",hist:{year:1920,names:["Mesopotamia (GB)","Mandatory Palestine (GB)"]},colour:BRIT,tier:"core",legend:"British mandates: Iraq and Palestine"},
  {id:"sevres",type:"point",symbol:"treaty",at:[29.0,40.0],name:"Sèvres",labelPos:"w",tag:{text:"1920",colour:"#f1c75b"}},
  {id:"damascus",type:"point",symbol:"capital",at:[36.29,33.51],name:"Damascus",labelPos:"w"},
  {id:"baghdad",type:"point",symbol:"capital",at:[44.37,33.32],name:"Baghdad",labelPos:"e"},
  {id:"jerusalem",type:"point",symbol:"capital",at:[35.21,31.77],name:"Jerusalem",labelPos:"s"}
 ],legend:{position:"bottom-left",columns:1}}],text:{intro:"The peace treaties made new European borders and mandates, but the Wilsonian promise was filtered through victors' war aims and imperial control.",sections:[{heading:"Europe",entries:[{date:"1919-1920",text:"Germany is reduced; Poland, Czechoslovakia, Yugoslavia, Austria, Hungary, Finland and the Baltic states appear or are remade in the 1920 historical layer.",refs:["germany","new-states","romania-greece","warsaw","prague","belgrade","helsinki"]},{date:"1919-1920",text:"Alsace-Lorraine, the Polish Corridor, the Rhineland and plebiscite areas show the treaty's problem zones around Germany.",refs:["alsace","corridor","rhineland","plebiscites","schleswig","versailles"]}]},{heading:"Mandates",entries:[{date:"1920",text:"The Ottoman settlement turns Syria and Lebanon toward France, Iraq and Palestine toward Britain, and leaves Anatolia under the contested Treaty of Sèvres.",refs:["ottoman-1920","syria","iraq-pal","sevres","damascus","baghdad","jerusalem"]}]}]},sources:["Penguin Atlas Vol. 2 pp. 132-133; historical-basemaps world_1920"]};
})();