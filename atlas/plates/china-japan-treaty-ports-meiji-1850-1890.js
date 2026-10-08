(function(){
 const CHN="#d8a84f", JPN="#387a5b", BRIT="#2f5f93", WAR="#8c3b3b", IND="#b36b2e";
 window.PLATES["china-japan-treaty-ports-meiji-1850-1890"]={id:"china-japan-treaty-ports-meiji-1850-1890",title:"China and Japan: treaty ports, Taiping and Meiji, 1850-1890",head:"National states / Asia",folio:"88-93",viewer:"national/1868/ch-china-japan-crisis-modernization",figures:[{caption:"Crisis and reform in East and South Asia",share:1,extent:[[68,5],[145,45]],projection:"mercator",layers:[
  {id:"india",type:"area",hist:{year:1878,names:["British Raj"]},colour:IND,tier:"core",legend:"British Raj after 1858"},
  {id:"japan",type:"area",hist:{year:1878,names:["Imperial Japan"]},colour:JPN,tier:"core",legend:"Meiji Japan"},
  {id:"china-field",type:"area",polygon:[[104,22],[113,20],[122,29],[119,35],[110,34],[104,29],[104,22]],clipToLand:true,colour:CHN,tier:"influence",legend:"Qing crisis zone"},
  {id:"taiping",type:"route",style:"road",weight:2.5,colour:WAR,legend:"Taiping Rebellion, 1850-64",path:[[109.6,23.1],[113.3,23.1],[118.8,32.1],[116.4,39.9]]},
  {id:"ports",type:"route",style:"dotted",weight:2.2,colour:BRIT,legend:"Treaty-port coast",path:[[114.17,22.32],[113.26,23.13],[118.8,32.1],[121.47,31.23],[120.16,30.25]]},
  {id:"meerut",type:"point",symbol:"insurrection",at:[77.70,28.98],name:"Meerut",labelPos:"n",tag:{text:"1857",colour:"#e8806a"}},
  {id:"delhi",type:"point",symbol:"battle",at:[77.21,28.61],name:"Delhi",labelPos:"s"},
  {id:"lucknow",type:"point",symbol:"battle",at:[80.95,26.85],name:"Lucknow"},
  {id:"nanking",type:"point",symbol:"treaty",at:[118.80,32.06],name:"Nanjing",tag:{text:"1842",colour:"#f1c75b"}},
  {id:"shanghai",type:"point",symbol:"port",at:[121.47,31.23],name:"Shanghai"},
  {id:"yokohama",type:"point",symbol:"port",at:[139.64,35.44],name:"Yokohama 1859",labelPos:"s"},
  {id:"tokyo",type:"point",symbol:"capital",at:[139.76,35.68],name:"Tokyo / Meiji 1868",labelPos:"e"}
 ],legend:{position:"bottom-left",columns:1}}],text:{intro:"The Asian pages compare three different imperial encounters: India after revolt, China under civil war and treaty-port pressure, and Japan's state-led Meiji transformation.",sections:[{heading:"Asia",entries:[{date:"1857-1858",text:"The Indian rebellion ends Company rule and begins Crown rule.",refs:["india","meerut","delhi","lucknow"]},{date:"1850-1864",text:"The Taiping Rebellion devastates Qing China while treaty ports embed foreign privilege on the coast.",refs:["china-field","taiping","ports","nanking","shanghai"]},{date:"1853-1890",text:"Japan's forced opening is followed by Meiji centralization and selective modernization.",refs:["japan","yokohama","tokyo"]}]}]},sources:["Penguin Atlas Vol. 2 pp. 88-93"]};
})();
