// Abbasid caliphate and its autonomous successor states, round 7.
(function () {
  const IS="#6b8c3f", UM="#b8c86a", ABB="#d8a84f", FAT="#8c5fb3", TURK="#9a6a38", LINE="#5f4b8b";
  const BAG=[44.37,33.31], DAM=[36.31,33.51], CORD=[-4.78,37.88], KAI=[10.10,35.68], CAI=[31.23,30.04], SAM=[66.98,39.65], TAL=[71.9,42.52], ZAB=[43.45,35.75], JER=[35.21,31.77];
  window.PLATES["abbasid-caliphate"] = { id:"abbasid-caliphate", title:"From Umayyad empire to Abbasid world", head:"Early Middle Ages / Islam", folio:"17", viewer:"medieval/0750/ch-abbasid-caliphate", figures:[
    { caption:"The caliphate at the Abbasid revolution", share:0.5, extent:[[-12,15],[82,46]], projection:"conic", layers:[
      {id:"umayyad-reach",type:"area",clipToLand:true,tier:"conquest",colour:UM,legend:"Umayyad reach by 750",polygon:[[-10,35],[-3,39],[9,37],[25,34],[36,36],[47,37],[62,38],[75,34],[73,27],[57,25],[44,24],[30,28],[15,31],[2,33]],smooth:false},
      {id:"abbasid-core",type:"area",clipToLand:true,tier:"core",colour:ABB,legend:"Abbasid power base",polygon:[[35,31],[42,37],[51,36],[54,31],[47,27],[38,27]],smooth:false},
      {id:"revolution",type:"arrow",colour:ABB,width:4,legend:"Abbasid revolution",path:[[58,36],SAM,[50,36],ZAB,BAG],label:"Abbasids"},
      {id:"talas",type:"point",symbol:"battle",at:TAL,name:"Talas",tag:{text:"751",colour:"#f1c75b"}},
      {id:"zab",type:"point",symbol:"battle",at:ZAB,name:"Great Zab",labelPos:"n",tag:{text:"750",colour:"#e8806a"}},
      {id:"baghdad",type:"point",symbol:"capital",at:BAG,name:"Baghdad",tag:{text:"762",colour:"#f1c75b"}}, {id:"damascus",type:"point",symbol:"capital",at:DAM,name:"Damascus",labelPos:"s"}, {id:"cordoba",type:"point",symbol:"capital",at:CORD,name:"Cordoba",tag:{text:"756",colour:"#f1c75b"}}
    ], legend:{position:"bottom-left",columns:2} },
    { caption:"Autonomous Islamic states after the 9th century", share:0.5, extent:[[-12,15],[82,46]], projection:"conic", layers:[
      {id:"abbasid-iraq",type:"area",clipToLand:true,tier:"core",colour:ABB,legend:"Abbasid Iraq",polygon:[[38,29],[43,35],[50,34],[50,28],[43,26]],smooth:false},
      {id:"cordoba-state",type:"area",clipToLand:true,tier:"core",colour:UM,legend:"Cordoba and al-Andalus",polygon:[[-9,36],[-4,43],[1,41],[-1,37],[-6,36]],smooth:false},
      {id:"north-africa",type:"area",clipToLand:true,tier:"conquest",colour:FAT,legend:"Aghlabid-Fatimid North Africa",polygon:[[2,31],[11,37],[22,34],[20,29],[9,30]],smooth:false},
      {id:"egypt",type:"area",clipToLand:true,tier:"core",colour:FAT,legend:"Fatimid Egypt",polygon:[[25,31],[31,32],[35,29],[33,25],[28,25]],smooth:false},
      {id:"eastern-dynasties",type:"area",clipToLand:true,tier:"influence",colour:TURK,legend:"Persian and Turkic dynasties",polygon:[[49,31],[58,39],[72,39],[78,32],[70,26],[55,27]],smooth:false},
      {id:"caliph-title",type:"boundary",style:"partition",colour:LINE,width:2.5,legend:"Caliphal title contested",path:[[CORD[0],CORD[1]],[-2,35],[12,33],[CAI[0],CAI[1]],[BAG[0],BAG[1]]]},
      {id:"cordoba2",type:"point",symbol:"capital",at:CORD,name:"Cordoba",tag:{text:"929",colour:"#f1c75b"}}, {id:"kairouan",type:"point",symbol:"large-city",at:KAI,name:"Kairouan"}, {id:"cairo",type:"point",symbol:"capital",at:CAI,name:"Cairo",tag:{text:"969",colour:"#f1c75b"}}, {id:"baghdad2",type:"point",symbol:"capital",at:BAG,name:"Baghdad"}, {id:"jerusalem",type:"point",symbol:"large-city",at:JER,name:"Jerusalem"}
    ], legend:{position:"bottom-left",columns:1} }
  ], text:{ intro:"After 750 the Islamic world is still connected by religion, Arabic and trade, but political control breaks into regional dynasties.", sections:[
    {heading:"Abbasid turn", entries:[
      {date:"750", text:"The Abbasids overthrow the Umayyads at the Great Zab and shift the caliphate's centre from Syria toward Iraq and Iran.", refs:["umayyad-reach","abbasid-core","revolution","zab","damascus"]},
      {date:"751-762", text:"Talas marks contact with Tang Central Asia; Baghdad then becomes the Abbasid capital, better placed for Persian, Iraqi and Silk Road networks.", refs:["talas","baghdad"]}
    ]},
    {heading:"Several centres", entries:[
      {date:"756-929", text:"An Umayyad survivor builds Cordoba into a western Islamic centre and later claims caliphal rank.", refs:["cordoba-state","cordoba2","caliph-title"]},
      {date:"800s-1000s", text:"North Africa, Egypt and the eastern provinces form their own dynasties. Baghdad remains symbolically central, but power is regional.", refs:["north-africa","egypt","eastern-dynasties","baghdad2","cairo","kairouan"]}
    ]}
  ]}, sources:["Penguin Atlas Vol. 1 pp. 136-139", "Approximate political fields; coastlines and rivers: Natural Earth 1:50m"] };
})();
