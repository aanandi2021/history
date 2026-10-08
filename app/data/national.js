(function(){
  const S={
    canada:"Canada: Confederation, treaties and the transcontinental state",
    us:"United States: slavery, Civil War and Reconstruction",
    ideas:"Emancipation, science, socialism and labour",
    russia:"Russia: reform, empire and emancipation",
    europe:"Europe's national states",
    italy:"Italian unification",
    germany:"German unification and the Reich",
    balkans:"Austria-Hungary and the Balkans",
    ottoman:"Ottoman decline and the Middle East",
    india:"India: revolt and Crown rule",
    asia:"China and Japan: crisis and modernization",
    latin:"Latin America after independence",
    africa:"Africa before partition"
  };
  const L={OTT:[-75.70,45.42],QUE:[-71.21,46.81],CHA:[-63.13,46.24],WPG:[-97.14,49.90],VIC:[-123.37,48.43],LAST:[-119.29,50.84],BAT:[-108.30,52.78],REG:[-104.62,50.45],WASH:[-77.04,38.90],RICH:[-77.44,37.54],CHAR:[-79.93,32.78],GET:[-77.23,39.83],VICK:[-90.88,32.35],APP:[-78.81,37.38],ATL:[-84.39,33.75],LAW:[-95.24,38.97],PAR:[2.35,48.86],SED:[4.94,49.70],VERS:[2.12,48.80],TUR:[7.69,45.07],MIL:[9.19,45.46],PAL:[13.36,38.12],VEN:[12.33,45.44],ROM:[12.50,41.90],BER:[13.40,52.52],KON:[15.75,49.44],VIEN:[16.37,48.21],BUD:[19.04,47.50],SOF:[23.32,42.70],BEL:[20.46,44.82],BUCH:[26.10,44.43],IST:[28.98,41.01],CAI:[31.24,30.04],SUEZ:[32.55,29.97],MEER:[77.70,28.98],DELHI:[77.21,28.61],LUCK:[80.95,26.85],CAL:[88.36,22.57],NAN:[118.80,32.06],SHA:[121.47,31.23],TOK:[139.76,35.68],YOKO:[139.64,35.44],MEX:[-99.13,19.43],RIO:[-43.17,-22.91],BUEN:[-58.38,-34.60],SANTI:[-70.67,-33.45],LIMA:[-77.04,-12.05],BOG:[-74.08,4.71],KANO:[8.52,12.00],DAH:[1.78,7.18],KUM:[-1.62,6.67],ZAN:[39.19,-6.16],ADD:[38.76,9.03],ULUN:[31.45,-28.30],MON:[-10.80,6.31]};
  const E=(lane,date,title,at,extra)=>Object.assign({lane,date,title,at},extra||{});
  const B=(title,author,start,end,section)=>({title,author,start,end,section});
  const events=[
    E("canada","1864-09","Charlottetown Conference",L.CHA,{section:S.canada,text:"Colonial delegates begin turning political deadlock into a federal plan."}),
    E("canada","1864-10","Quebec Conference",L.QUE,{section:S.canada,text:"The Quebec resolutions define a federation with provincial powers and a strong centre."}),
    E("canada","1867-07-01","Dominion of Canada",L.OTT,{section:S.canada,plate:"canadian-confederation-cpr-resistance-1867-1885",text:"Ontario, Quebec, Nova Scotia and New Brunswick enter Confederation."}),
    E("canada","1870","Red River becomes Manitoba",L.WPG,{section:S.canada,plate:"canadian-confederation-cpr-resistance-1867-1885",text:"Red River resistance forces Ottawa to negotiate Manitoba."}),
    E("canada","1871","British Columbia joins Canada",L.VIC,{section:S.canada,text:"British Columbia joins after Ottawa promises a railway to the Pacific."}),
    E("canada","1871","Treaties 1 and 2",L.WPG,{section:S.canada,text:"Numbered Treaties begin around southern Manitoba; Ottawa and Indigenous nations do not read them in the same way."}),
    E("canada","1873","Prince Edward Island joins Canada",L.CHA,{section:S.canada,text:"Railway debt helps bring PEI into Confederation."}),
    E("canada","1877","Treaty 7 on the southern plains",[-115.35,51.25],{section:S.canada,text:"Treaties 1-7 frame prairie settlement, reserves, annuities and contested promises."}),
    E("canada","1881","Canadian Pacific Railway construction accelerates",[-106,51],{section:S.canada,text:"The CPR turns Confederation into a transcontinental state project."}),
    E("canada","1885-03","North-West Resistance begins",L.BAT,{section:S.canada,plate:"canadian-confederation-cpr-resistance-1867-1885",text:"Metis and First Nations grievances over land, hunger and administration break into armed resistance."}),
    E("canada","1885-11-07","Last Spike at Craigellachie",L.LAST,{section:S.canada,text:"The CPR is completed in British Columbia."}),
    E("us","1854","Kansas-Nebraska Act",L.LAW,{section:S.us,text:"Popular sovereignty reopens the slavery question in the territories."}),
    E("us","1857","Dred Scott decision",L.WASH,{section:S.us,text:"The Supreme Court denies Black citizenship and says Congress cannot bar slavery in the territories."}),
    E("us","1860","Lincoln elected",[-89.65,39.78],{section:S.us,text:"A Republican victory without southern electoral votes triggers secession."}),
    E("us","1861-04","Fort Sumter",L.CHAR,{section:S.us,plate:"us-civil-war-reconstruction-1854-1877",text:"Confederate fire on Fort Sumter starts the Civil War."}),
    E("us","1863-01-01","Emancipation Proclamation",L.WASH,{section:S.us,text:"The Union war aim now includes emancipation in rebelling states."}),
    E("us","1863-07","Gettysburg and Vicksburg",L.GET,{section:S.us,plate:"us-civil-war-reconstruction-1854-1877",text:"Union victories in Pennsylvania and Mississippi turn the military balance."}),
    E("us","1865-04","Appomattox",L.APP,{section:S.us,text:"Confederate surrender is followed by Lincoln's assassination and a contested peace."}),
    E("us","1868","Fourteenth Amendment",L.WASH,{section:S.us,text:"Birthright citizenship and equal protection enter the Constitution."}),
    E("us","1877","Reconstruction ends",L.WASH,{section:S.us,text:"Federal withdrawal from the South leaves white Democratic governments to build the Jim Crow order."}),
    E("ideas","1859","Darwin's Origin of Species",[0.12,52.20],{section:S.ideas,text:"Evolution by natural selection reshapes science and public argument."}),
    E("ideas","1864","First International founded",[-0.13,51.51],{section:S.ideas,text:"Labour organization becomes transnational even as politics is organized by national states."}),
    E("ideas","1871","Jewish emancipation in the German Empire",L.BER,{section:S.ideas,text:"Legal equality advances while modern political antisemitism also develops."}),
    E("russia","1861","Russian serfs emancipated",[37.62,55.75],{section:S.russia,text:"Emancipation ends legal serfdom but leaves land, redemption payments and village authority unresolved."}),
    E("france","1852","Second Empire proclaimed",L.PAR,{section:S.europe,text:"Louis-Napoleon turns presidency into empire."}),
    E("france","1870-09","Sedan and the Third Republic",L.SED,{section:S.europe,plate:"german-unification-1866-1871",text:"Napoleon III is captured and Paris proclaims a republic."}),
    E("italy","1859","War in Lombardy",L.MIL,{section:S.italy,plate:"italian-unification-1850-1871",text:"French and Piedmontese victories push Austria out of Lombardy."}),
    E("italy","1860","Garibaldi's Thousand",L.PAL,{section:S.italy,plate:"italian-unification-1850-1871",text:"The southern expedition brings Sicily and Naples into the national project."}),
    E("italy","1861","Kingdom of Italy proclaimed",L.TUR,{section:S.italy,text:"Victor Emmanuel II becomes king of Italy; Rome and Venetia remain outside."}),
    E("italy","1866","Venetia joins Italy",L.VEN,{section:S.italy,text:"Italy gains Venetia after Prussia defeats Austria."}),
    E("italy","1870","Rome annexed",L.ROM,{section:S.italy,text:"French protection ends during the Franco-Prussian War; Rome becomes the capital."}),
    E("germany","1862","Bismarck becomes Prussian minister-president",L.BER,{section:S.germany,text:"A conservative minister turns national unification into Prussian state policy."}),
    E("germany","1866","Prussia defeats Austria at Koniggratz",L.KON,{section:S.germany,plate:"german-unification-1866-1871",text:"Austria is excluded from German affairs; the North German Confederation follows."}),
    E("germany","1871-01-18","German Empire proclaimed at Versailles",L.VERS,{section:S.germany,plate:"german-unification-1866-1871",text:"War with France completes a Prussian-led German Empire."}),
    E("balkans","1867","Ausgleich creates Austria-Hungary",L.BUD,{section:S.balkans,text:"The Habsburg monarchy becomes a dual monarchy, solving one national problem while exposing others."}),
    E("balkans","1878-03","San Stefano",L.IST,{section:S.balkans,plate:"balkans-san-stefano-berlin-1878",text:"Russia imposes a large Bulgaria after victory over the Ottoman Empire."}),
    E("balkans","1878-07","Congress of Berlin",L.BER,{section:S.balkans,plate:"balkans-san-stefano-berlin-1878",text:"The great powers shrink Bulgaria and recognize Serbia, Romania and Montenegro."}),
    E("ottoman","1869","Suez Canal opens",L.SUEZ,{section:S.ottoman,text:"The canal makes Egypt and the eastern Mediterranean central to imperial communications."}),
    E("ottoman","1882","British occupation of Egypt",L.CAI,{section:S.ottoman,text:"Debt, revolt and strategic anxiety bring British control without formal annexation."}),
    E("india","1857","Indian Rebellion begins at Meerut",L.MEER,{section:S.india,plate:"china-japan-treaty-ports-meiji-1850-1890",text:"Sepoy revolt becomes a wider rebellion across north India."}),
    E("india","1858","Crown rule replaces Company rule",L.CAL,{section:S.india,text:"The British state takes direct responsibility for India after suppressing the rebellion."}),
    E("asia","1850","Taiping Rebellion begins",[109.6,23.1],{section:S.asia,plate:"china-japan-treaty-ports-meiji-1850-1890",text:"A massive civil war challenges the Qing and devastates southern and central China."}),
    E("asia","1853","Perry reaches Japan",L.YOKO,{section:S.asia,text:"American gunboats force Japan's ports into global diplomacy."}),
    E("asia","1868","Meiji Restoration",L.TOK,{section:S.asia,plate:"china-japan-treaty-ports-meiji-1850-1890",text:"Japan turns imperial restoration into centralized state-building and rapid modernization."}),
    E("latin","1864","War of the Triple Alliance begins",[-57.6,-25.3],{section:S.latin,text:"Paraguay fights Brazil, Argentina and Uruguay in a catastrophic regional war."}),
    E("latin","1879","War of the Pacific begins",[-70.4,-23.6],{section:S.latin,text:"Chile, Peru and Bolivia fight over nitrate lands and the Pacific coast."}),
    E("africa","1870","Africa before partition",L.KANO,{section:S.africa,plate:"africa-before-partition-1870",text:"African states such as Sokoto, Dahomey, Ethiopia and Zanzibar, plus coastal commerce and internal slave trades, all exist before European partition."}),
    E("africa","1879","Anglo-Zulu War",L.ULUN,{section:S.africa,text:"The Zulu kingdom defeats Britain at Isandlwana before being broken later in the campaign."})
  ];
  const chapters=[
    {id:"part-canada-national",title:"Canada 1850-1890",start:"1850",end:"1890",region:"americas",focusPriority:15,plate:"canadian-confederation-cpr-resistance-1867-1885",section:S.canada,text:"Canada's national state is built through Confederation, treaties, prairie resistance, railway debt and western incorporation.",bbox:[[-141,41],[-52,63]]},
    {id:"ch-canada-confederation-west",parent:"part-canada-national",title:"Confederation, treaties and the CPR, 1864-1885",start:"1864",end:"1885",region:"americas",focusPriority:18,plate:"canadian-confederation-cpr-resistance-1867-1885",section:S.canada,text:"Provinces join, Treaties 1-7 are signed, the CPR is built and the North-West Resistance is defeated.",bbox:[[-125,42],[-60,56]]},
    {id:"part-us-slavery-civil-war",title:"United States: slavery, Civil War and Reconstruction",start:"1820",end:"1877",region:"americas",focusPriority:14,plate:"us-civil-war-reconstruction-1854-1877",section:S.us,text:"Slavery expansion fights break the Union; war ends slavery; Reconstruction changes the Constitution and then is abandoned to Jim Crow.",bbox:[[-103,24],[-66,42]]},
    {id:"ch-us-civil-war-reconstruction",parent:"part-us-slavery-civil-war",title:"Civil War, emancipation and Reconstruction, 1861-1877",start:"1861",end:"1877",region:"americas",focusPriority:16,plate:"us-civil-war-reconstruction-1854-1877",section:S.us,text:"Secession, Union victory, emancipation and Reconstruction create the legal and political roots of the later racial order.",bbox:[[-96,28],[-72,41]]},
    {id:"part-ideas-labour-science",title:"Intellectual currents, emancipation and labour",start:"1850",end:"1890",region:"europe",section:S.ideas,text:"Science, socialism, labour organization and Jewish emancipation change the language of national citizenship.",bbox:[[-5,45],[20,55]]},
    {id:"ch-russia-reform-serfs",title:"Russia: reform and emancipation",start:"1855",end:"1874",region:"europe",section:S.russia,text:"Russia answers military weakness with emancipation and administrative reform, without becoming liberal.",bbox:[[20,45],[55,62]]},
    {id:"part-europe-national-unification",title:"Europe's national states",start:"1850",end:"1878",region:"europe",focusPriority:11,section:S.europe,text:"Italy and Germany become national states, France changes regimes, Austria-Hungary is reorganized and the Balkans are redrawn.",bbox:[[-6,36],[32,55]]},
    {id:"ch-italian-unification",parent:"part-europe-national-unification",title:"Italian unification, 1859-1871",start:"1859",end:"1871",region:"europe",plate:"italian-unification-1850-1871",section:S.italy,text:"Piedmont, French help, Garibaldi, Venetia and Rome make a kingdom from a peninsula of old states.",bbox:[[6,36],[19,47]]},
    {id:"ch-german-unification",parent:"part-europe-national-unification",title:"German unification, 1862-1871",start:"1862",end:"1871",region:"europe",plate:"german-unification-1866-1871",section:S.germany,text:"Bismarck's wars exclude Austria and create a Prussian-led Reich at Versailles.",bbox:[[4,46],[18,55]]},
    {id:"ch-austria-hungary-balkans",parent:"part-europe-national-unification",title:"Austria-Hungary and the Balkans, 1867-1878",start:"1867",end:"1878",region:"europe",plate:"balkans-san-stefano-berlin-1878",section:S.balkans,text:"The dual monarchy manages Germans and Magyars; Berlin manages the Ottoman retreat by great-power bargaining.",bbox:[[12,40],[31,49]]},
    {id:"part-ottoman-middle-east",title:"Ottoman decline and the Middle East",start:"1850",end:"1890",region:"islamic",section:S.ottoman,text:"Ottoman reform, Egyptian autonomy, Suez and European debt control turn the eastern question global.",bbox:[[20,25],[45,43]]},
    {id:"part-india-asia",title:"India, China and Japan",start:"1850",end:"1890",region:"asia",focusPriority:8,plate:"china-japan-treaty-ports-meiji-1850-1890",text:"India moves from Company to Crown rule; China faces civil war and treaty ports; Japan modernizes as a counter-example.",bbox:[[68,5],[145,45]]},
    {id:"ch-india-1857-crown",parent:"part-india-asia",title:"India 1857 and Crown rule",start:"1857",end:"1877",region:"asia",section:S.india,text:"The 1857 rebellion ends Company rule and hardens the Raj.",bbox:[[72,18],[90,31]]},
    {id:"ch-china-japan-crisis-modernization",parent:"part-india-asia",title:"China and Japan: Taiping, treaty ports and Meiji",start:"1850",end:"1890",region:"asia",section:S.asia,text:"China's crisis is civil war plus foreign pressure; Japan's Meiji state makes reform into national power.",bbox:[[105,20],[145,43]]},
    {id:"ch-latin-america-after-independence",title:"Latin America after independence",start:"1830",end:"1890",region:"americas",section:S.latin,text:"New republics and empires fight over borders, commodities and state authority after independence.",bbox:[[-82,-45],[-35,25]]},
    {id:"ch-africa-before-partition",title:"Africa before partition, c. 1870",start:"1850",end:"1890",region:"africa",plate:"africa-before-partition-1870",section:S.africa,text:"Africa before the scramble is not empty: it has empires, kingdoms, traders, raiders, religious reform and internal slave routes as well as European coastal pressure.",bbox:[[-18,-35],[45,20]]}
  ];
  const books=[
    B("The Pursuit of Power: Europe 1815-1914","Richard J. Evans","1850","1890",S.ideas),
    B("The Age of Capital: 1848-1875","Eric Hobsbawm","1850","1875",S.ideas),
    B("Battle Cry of Freedom","James M. McPherson","1854","1877",S.us),
    B("A Concise History of Canada","Margaret Conrad","1864","1885",S.canada),
    B("India: A History","John Keay","1857","1877",S.india),
    B("The Search for Modern China","Jonathan D. Spence","1850","1890",S.asia),
    B("A History of Africa","J. D. Fage","1850","1890",S.africa)
  ];
  window.DATASETS=window.DATASETS||{};
  window.DATASETS.national={
    id:"national",title:"The age of national states",subtitle:"1850-1890",range:["1850-01-01","1890-12-31"],startAt:"1871",precision:"year",
    note:"Amit's Notes of the History of the World/The age of national states",
    mapNote:"The underlay uses the nearest historical-basemaps state map (1815 before 1878, then 1878/1880). Story fields prefer those historical polygons; intermediate war fronts, treaty zones and railway/treaty corridors are labelled overlays rather than modern borders.",
    lanes:[{id:"canada",label:"Canada",colour:"#b22d2d",pinned:true},{id:"us",label:"United States",colour:"#2f7f86"},{id:"ideas",label:"Ideas, science and labour",colour:"#6b6b6b"},{id:"russia",label:"Russia",colour:"#6b8c3f"},{id:"france",label:"France",colour:"#8c3b3b"},{id:"italy",label:"Italy",colour:"#3f8f5b"},{id:"germany",label:"Germany",colour:"#4f7f4f"},{id:"balkans",label:"Austria-Hungary and Balkans",colour:"#d8a84f"},{id:"ottoman",label:"Ottoman / Middle East",colour:"#9a6a32"},{id:"india",label:"India",colour:"#b36b2e"},{id:"asia",label:"China and Japan",colour:"#387a5b"},{id:"latin",label:"Latin America",colour:"#c06b3e"},{id:"africa",label:"Africa",colour:"#7a6b42"}],
    chapterRegions:{"part-canada-national":"americas","ch-canada-confederation-west":"americas","part-us-slavery-civil-war":"americas","ch-us-civil-war-reconstruction":"americas","part-ideas-labour-science":"europe","ch-russia-reform-serfs":"europe","part-europe-national-unification":"europe","ch-italian-unification":"europe","ch-german-unification":"europe","ch-austria-hungary-balkans":"europe","part-ottoman-middle-east":"islamic","part-india-asia":"asia","ch-india-1857-crown":"asia","ch-china-japan-crisis-modernization":"asia","ch-latin-america-after-independence":"americas","ch-africa-before-partition":"africa"},
    events,leaders:[],chapters,books,
    colours:{lanes:{canada:"#b22d2d",us:"#2f7f86",ideas:"#6b6b6b",russia:"#6b8c3f",france:"#8c3b3b",italy:"#3f8f5b",germany:"#4f7f4f",balkans:"#d8a84f",ottoman:"#9a6a32",india:"#b36b2e",asia:"#387a5b",latin:"#c06b3e",africa:"#7a6b42"}},
    plates:[{id:"italian-unification-1850-1871",title:"Italian unification in stages",start:"1850",end:"1871"},{id:"german-unification-1866-1871",title:"German unification and the Reich",start:"1862",end:"1871"},{id:"balkans-san-stefano-berlin-1878",title:"The Balkans: San Stefano and Berlin",start:"1877",end:"1878"},{id:"us-civil-war-reconstruction-1854-1877",title:"United States: Civil War and Reconstruction",start:"1854",end:"1877"},{id:"canadian-confederation-cpr-resistance-1867-1885",title:"Canadian Confederation, CPR and resistance",start:"1864",end:"1885"},{id:"africa-before-partition-1870",title:"Africa before partition, c. 1870",start:"1850",end:"1885"},{id:"china-japan-treaty-ports-meiji-1850-1890",title:"China and Japan: treaty ports, Taiping and Meiji",start:"1850",end:"1890"}],
    changelog:["Added in v1.4.0-dev for Penguin Atlas Vol. 2 round 3: Canada, the United States, national unifications, Austria-Hungary, the Balkans, India, China, Japan, Latin America and Africa before partition."]
  };
})();
