(function(){
 const QING="#d8a84f", JPN="#387a5b", BRIT="#2f5f93", WAR="#8c3b3b", IND="#b36b2e";
 const taiping=[[108,23],[113,24],[119,29],[121,32],[118,33],[112,31],[106,27],[108,23]];
 window.PLATES["china-japan-treaty-ports-meiji-1850-1890"]={id:"china-japan-treaty-ports-meiji-1850-1890",title:"China and Japan: treaty ports, Taiping and Meiji, 1850-1890",head:"National states / Asia",folio:"88-93",viewer:"national/1868/ch-china-japan-crisis-modernization",figures:[{caption:"Revolt, treaty ports and modernization in East and South Asia",share:1,extent:[[68,5],[145,45]],projection:"mercator",layers:[
  {id:"india",type:"area",hist:{year:1880,names:["British Raj"]},colour:IND,tier:"core",legend:"British Raj after 1858"},
  {id:"japan",type:"area",hist:{year:1880,names:["Imperial Japan"]},colour:JPN,tier:"core",legend:"Imperial Japan / Meiji state"},
  {id:"qing-core",type:"area",regions:["CHN"],colour:QING,tier:"influence",legend:"Qing China (modern outline used where hist layer has no Qing state)"},
  {id:"taiping",type:"area",around:taiping,clipToLand:true,pattern:"hatch",colour:WAR,legend:"Taiping zone around the Yangtze basin, 1850-64"},
  {id:"india-revolt",type:"route",style:"road",weight:2.3,colour:WAR,legend:"Indian Rebellion centres, 1857",path:[[77.70,28.98],[77.21,28.61],[80.95,26.85],[88.36,22.57]]},
  {id:"ports",type:"route",style:"dotted",weight:2.2,colour:BRIT,legend:"Treaty-port coast",path:[[113.26,23.13],[114.17,22.32],[118.80,32.06],[121.47,31.23],[121.55,29.87],[118.08,24.48],[119.30,26.08]]},
  {id:"meerut",type:"point",symbol:"insurrection",at:[77.70,28.98],name:"Meerut",labelPos:"n",tag:{text:"1857",colour:"#e8806a"}},
  {id:"delhi",type:"point",symbol:"battle",at:[77.21,28.61],name:"Delhi",labelPos:"s"},
  {id:"lucknow",type:"point",symbol:"battle",at:[80.95,26.85],name:"Lucknow",labelPos:"e"},
  {id:"nanjing",type:"point",symbol:"capital",at:[118.80,32.06],name:"Nanjing",tag:{text:"1853-64",colour:"#e8806a"}},
  {id:"canton",type:"point",symbol:"port",at:[113.26,23.13],name:"Canton",tag:{text:"1842",colour:"#f1c75b"}},
  {id:"hongkong",type:"point",symbol:"port",at:[114.17,22.32],name:"Hong Kong",labelPos:"s"},
  {id:"shanghai",type:"point",symbol:"port",at:[121.47,31.23],name:"Shanghai",tag:{text:"1843",colour:"#f1c75b"}},
  {id:"yokohama",type:"point",symbol:"port",at:[139.64,35.44],name:"Yokohama 1859",labelPos:"s"},
  {id:"tokyo",type:"point",symbol:"capital",at:[139.76,35.68],name:"Tokyo / Meiji 1868",labelPos:"e"}
 ],legend:{position:"bottom-left",columns:1}}],text:{intro:"The Asian pages compare three different imperial encounters: India after revolt, China under civil war and treaty-port pressure, and Japan's state-led Meiji transformation.",sections:[{heading:"Asia",entries:[{date:"1857-1858",text:"The Indian rebellion ends Company rule and begins Crown rule.",refs:["india","india-revolt","meerut","delhi","lucknow"]},{date:"1850-1864",text:"The Taiping Rebellion centres on Nanjing and the Yangtze basin while treaty ports embed foreign privilege on the coast.",refs:["qing-core","taiping","ports","nanjing","canton","hongkong","shanghai"]},{date:"1853-1890",text:"Japan's forced opening is followed by Meiji centralization and selective modernization.",refs:["japan","yokohama","tokyo"]}]}]},sources:["Penguin Atlas Vol. 2 pp. 88-93"]};
})();

