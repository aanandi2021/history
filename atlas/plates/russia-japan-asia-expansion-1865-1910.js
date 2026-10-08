(function(){
 const RUS="#6b8c3f", JPN="#387a5b", CHI="#d8d0b0", ROAD="#5b4a3f", WAR="#8c3b3b";
 window.PLATES["russia-japan-asia-expansion-1865-1910"]={id:"russia-japan-asia-expansion-1865-1910",title:"Russia and Japan in Asia, 1865-1910",head:"Imperialism / Asia",folio:"111-117",viewer:"imperial/1905/ch-russia-japan-asia",figures:[{caption:"Rail, Central Asia and the Russo-Japanese War",share:0.76,extent:[[50,25],[150,58]],projection:"conic",layers:[
  {id:"russia",type:"area",hist:{year:1914,names:["Russian Empire"]},colour:RUS,tier:"core",legend:"Russian Empire"},
  {id:"japan",type:"area",hist:{year:1914,names:["Empire of Japan"]},colour:JPN,tier:"core",legend:"Japanese Empire after 1905"},
  {id:"qing",type:"area",hist:{year:1914,names:["Manchu Empire"]},colour:CHI,tier:"influence",legend:"Qing / Manchu Empire"},
  {id:"transsib",type:"route",style:"road",weight:2.5,colour:RUS,legend:"Trans-Siberian Railway to Vladivostok",path:[[37.62,55.75],[56.25,58.01],[73.37,54.98],[82.93,55.01],[104.28,52.28],[113.5,52.03],[131.89,43.12]]},
  {id:"central",type:"route",style:"dotted",weight:2.5,colour:RUS,legend:"Russian Central Asia: Tashkent-Samarkand-Merv",path:[[69.24,41.30],[66.96,39.65],[62.18,37.66]]},
  {id:"war-route",type:"route",style:"dashed",weight:2.5,colour:WAR,legend:"Russo-Japanese War theatre",path:[[121.25,38.80],[123.43,41.80],[129.5,34.5]]},
  {id:"taiwan",type:"point",symbol:"port",at:[121.0,23.7],name:"Taiwan",labelPos:"e",tag:{text:"1895",colour:"#f1c75b"}},
  {id:"korea",type:"point",symbol:"capital",at:[126.98,37.57],name:"Korea 1910",labelPos:"ne"},
  {id:"port-arthur",type:"point",symbol:"battle",at:[121.25,38.80],name:"Port Arthur",labelPos:"w",tag:{text:"1904",colour:"#e8806a"}},
  {id:"mukden",type:"point",symbol:"battle",at:[123.43,41.80],name:"Mukden",labelPos:"e",tag:{text:"1905",colour:"#e8806a"}},
  {id:"tsushima",type:"point",symbol:"battle",at:[129.5,34.5],name:"Tsushima",labelPos:"s"},
  {id:"merv",type:"point",symbol:"treaty",at:[62.18,37.66],name:"Merv",labelPos:"s",tag:{text:"1884",colour:"#f1c75b"}},
  {id:"samarkand",type:"point",symbol:"capital",at:[66.96,39.65],name:"Samarkand",labelPos:"w"},
  {id:"tashkent",type:"point",symbol:"capital",at:[69.24,41.30],name:"Tashkent",labelPos:"n",tag:{text:"1865",colour:"#f1c75b"}}
 ],legend:{position:"bottom-left",columns:1}},{caption:"Japan's turn",kind:"diagram",share:0.24,diagram:{height:0.58,nodes:[{id:"unequal",label:"unequal treaties and forced opening",x:0.28,y:0.10,w:0.35,h:0.13,colour:CHI},{id:"meiji",label:"Meiji state, army, industry",x:0.72,y:0.10,w:0.32,h:0.13,colour:JPN,strong:true},{id:"tai",label:"Taiwan 1895",x:0.32,y:0.43,w:0.25,h:0.13,colour:JPN},{id:"kor",label:"Korea 1910",x:0.68,y:0.43,w:0.25,h:0.13,colour:JPN},{id:"power",label:"great-power status after 1905",x:0.50,y:0.73,w:0.48,h:0.13,colour:WAR}],arrows:[{id:"a1",from:"unequal",to:"meiji"},{id:"a2",from:"meiji",to:"tai"},{id:"a3",from:"meiji",to:"kor"},{id:"a4",from:"tai",to:"power"},{id:"a5",from:"kor",to:"power"}]}} ],text:{intro:"Russia pushes across Central Asia and Siberia while Japan moves from forced opening to empire.",sections:[{heading:"Asia",entries:[{date:"1865-1884",text:"Russia takes Tashkent, Samarkand and Merv; the Trans-Siberian Railway ties European Russia to the Pacific.",refs:["russia","qing","central","transsib","tashkent","samarkand","merv"]},{date:"1895-1910",text:"Japan acquires Taiwan, defeats Russia at Port Arthur, Mukden and Tsushima, and annexes Korea.",refs:["japan","war-route","taiwan","korea","port-arthur","mukden","tsushima","unequal","meiji","tai","kor","power"]}]}]},sources:["Penguin Atlas Vol. 2 pp. 111-117; historical-basemaps world_1914"]};
})();
