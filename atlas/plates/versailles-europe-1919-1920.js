(function(){
 const GER="#8c3b3b", FIN="#7aa6c2", BAL="#8cae7a", POL="#d8a84f", CZE="#b99bd8", AUS="#c9a24f", HUN="#b36b2e", YUG="#7a5a8c", ROM="#4c78a8", LOSS="#6b5b95", RHINE="#4c78a8", OTT="#b36b2e", BRIT="#2f5f93", FRA="#4c78a8";
 const alsace=[[6.8,49.1],[8.2,49.0],[8.3,47.6],[7.2,47.4],[6.8,49.1]];
 const corridor=[[17.0,53.0],[19.3,53.0],[19.3,54.6],[17.5,54.6],[17.0,53.0]];
 const rhine=[[5.8,51.3],[7.2,51.1],[7.5,48.8],[6.0,48.7],[5.8,51.3]];
 const saar=[[6.45,49.65],[7.2,49.6],[7.25,49.05],[6.55,49.05],[6.45,49.65]];
 const memel=[[21.0,55.2],[22.2,55.2],[22.2,55.85],[21.0,55.85],[21.0,55.2]];
 window.PLATES["versailles-europe-1919-1920"]={id:"versailles-europe-1919-1920",title:"Europe after Versailles, 1919-1920",head:"First World War / Peace treaties",folio:"132-133",viewer:"ww1/1919/ch-peace-treaties",figures:[{caption:"Europe after the treaties, 1919-1920",share:0.68,extent:[[-6,40],[33,62]],projection:"conic",layers:[
  {id:"germany",type:"area",hist:{year:1920,names:["Germany","East Prussia"]},colour:GER,tier:"core",legend:"Germany after Versailles, incl. Bavaria and East Prussia"},
  {id:"finland",type:"area",hist:{year:1920,names:["Finland"]},colour:FIN,tier:"core",legend:"Finland"},
  {id:"baltics",type:"area",hist:{year:1920,names:["Estonia","Latvia","Lithuania"]},colour:BAL,tier:"core",legend:"Estonia, Latvia, Lithuania"},
  {id:"poland",type:"area",hist:{year:1920,names:["Poland"]},colour:POL,tier:"core",legend:"Poland"},
  {id:"czechoslovakia",type:"area",hist:{year:1920,names:["Czechoslovakia"]},colour:CZE,tier:"core",legend:"Czechoslovakia"},
  {id:"austria",type:"area",hist:{year:1920,names:["Austria"]},colour:AUS,tier:"core",legend:"Austria, rump successor"},
  {id:"hungary",type:"area",hist:{year:1920,names:["Hungary"]},colour:HUN,tier:"core",legend:"Hungary, rump successor"},
  {id:"yugoslavia",type:"area",hist:{year:1920,names:["Yugoslavia"]},colour:YUG,tier:"core",legend:"Yugoslavia"},
  {id:"romania",type:"area",hist:{year:1920,names:["Romania"]},colour:ROM,tier:"core",legend:"Romania enlarged"},
  {id:"alsace",type:"area",polygon:alsace,smooth:false,clipToLand:true,pattern:"hatch",colour:LOSS,legend:"Alsace-Lorraine returned to France"},
  {id:"corridor",type:"area",polygon:corridor,smooth:false,clipToLand:true,pattern:"hatch-back",colour:LOSS,legend:"Polish Corridor / Danzig question"},
  {id:"rhineland",type:"area",polygon:rhine,smooth:false,clipToLand:true,pattern:"dots",colour:RHINE,legend:"Rhineland demilitarized / occupied zones"},
  {id:"saar",type:"area",polygon:saar,smooth:false,clipToLand:true,pattern:"crosshatch",colour:LOSS,legend:"Saar under League administration"},
  {id:"memel",type:"area",polygon:memel,smooth:false,clipToLand:true,pattern:"crosshatch",colour:LOSS,legend:"Memel district detached"},
  {id:"plebiscites",type:"point",symbol:"conference",at:[18.7,50.2],name:"Upper Silesia",labelPos:"e",tag:{text:"pleb.",colour:"#f1c75b"}},
  {id:"schleswig",type:"point",symbol:"conference",at:[9.3,54.8],name:"Schleswig",labelPos:"w",tag:{text:"pleb.",colour:"#f1c75b"}},
  {id:"versailles",type:"point",symbol:"treaty",at:[2.12,48.80],name:"Versailles",labelPos:"s",tag:{text:"28 Jun 1919",colour:"#f1c75b"}},
  {id:"helsinki",type:"point",symbol:"capital",at:[24.94,60.17],name:"Finland",labelPos:"e"},
  {id:"tallinn",type:"point",symbol:"capital",at:[24.75,59.44],name:"Estonia",labelPos:"e"},
  {id:"riga",type:"point",symbol:"capital",at:[24.11,56.95],name:"Latvia",labelPos:"e"},
  {id:"kaunas",type:"point",symbol:"capital",at:[23.90,54.90],name:"Lithuania",labelPos:"e"},
  {id:"warsaw",type:"point",symbol:"capital",at:[21.0,52.23],name:"Poland",labelPos:"e"},
  {id:"prague",type:"point",symbol:"capital",at:[14.42,50.08],name:"Czechoslovakia",labelPos:"s"},
  {id:"vienna",type:"point",symbol:"capital",at:[16.37,48.21],name:"Austria",labelPos:"w"},
  {id:"budapest",type:"point",symbol:"capital",at:[19.04,47.50],name:"Hungary",labelPos:"e"},
  {id:"belgrade",type:"point",symbol:"capital",at:[20.46,44.82],name:"Yugoslavia",labelPos:"e"},
  {id:"bucharest",type:"point",symbol:"capital",at:[26.10,44.43],name:"Romania",labelPos:"e"}
 ],legend:{position:"bottom-left",columns:1}},{caption:"Mandates instead of German and Ottoman colonies",share:0.32,extent:[[28,28],[48,41]],projection:"conic",layers:[
  {id:"ottoman-1920",type:"area",hist:{year:1920,names:["Ottoman Sultanate"]},colour:OTT,tier:"core",legend:"Ottoman Turkish remnant, 1920"},
  {id:"syria",type:"area",hist:{year:1920,names:["Syria (France)"]},colour:FRA,tier:"core",legend:"French mandate: Syria / Lebanon"},
  {id:"iraq-pal",type:"area",hist:{year:1920,names:["Mesopotamia (GB)","Mandatory Palestine (GB)"]},colour:BRIT,tier:"core",legend:"British mandates: Iraq and Palestine"},
  {id:"sevres",type:"point",symbol:"treaty",at:[29.0,40.0],name:"Sèvres",labelPos:"w",tag:{text:"1920",colour:"#f1c75b"}},
  {id:"damascus",type:"point",symbol:"capital",at:[36.29,33.51],name:"Damascus",labelPos:"w"},
  {id:"baghdad",type:"point",symbol:"capital",at:[44.37,33.32],name:"Baghdad",labelPos:"e"},
  {id:"jerusalem",type:"point",symbol:"capital",at:[35.21,31.77],name:"Jerusalem",labelPos:"s"}
 ],legend:{position:"bottom-left",columns:1}}],text:{intro:"The peace treaties made new European borders and mandates, but the Wilsonian promise was filtered through victors' war aims and imperial control.",sections:[{heading:"Europe",entries:[{date:"1919-1920",text:"Germany is shown from the 1920 historical layer with Bavaria included; Finland, Estonia, Latvia, Lithuania, Poland, Czechoslovakia, Austria, Hungary, Yugoslavia and enlarged Romania are separate labelled states.",refs:["germany","finland","baltics","poland","czechoslovakia","austria","hungary","yugoslavia","romania","helsinki","tallinn","riga","kaunas","warsaw","prague","vienna","budapest","belgrade","bucharest"]},{date:"1919-1920",text:"Alsace-Lorraine, the Polish Corridor, the Rhineland, the Saar, Memel and plebiscite areas show the treaty's problem zones around Germany.",refs:["alsace","corridor","rhineland","saar","memel","plebiscites","schleswig","versailles"]}]},{heading:"Mandates",entries:[{date:"1920",text:"The Ottoman settlement turns Syria and Lebanon toward France, Iraq and Palestine toward Britain, and leaves Anatolia under the contested Treaty of Sèvres.",refs:["ottoman-1920","syria","iraq-pal","sevres","damascus","baghdad","jerusalem"]}]}]},sources:["Penguin Atlas Vol. 2 pp. 132-133; historical-basemaps world_1920"]};
})();