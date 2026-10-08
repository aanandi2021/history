(function () {
  const S = {
    canada:"British North America: rebellion, union and responsible government",
    thought:"Political thought after 1815",
    britain:"Great Britain, reform and industry",
    europe:"Restoration Europe and the congress system",
    germany:"German Confederation and Zollverein",
    france:"France from restoration to republic",
    latin:"Latin American independence",
    islamic:"Greek independence and Mehmet Ali's Egypt",
    asia:"China, India and the Opium War",
    africa:"Abolition, Africa and Atlantic settlements",
    fortyeight:"The revolutions of 1848"
  };
  const L = { OTT:[-75.69,45.42], KING:[-76.49,44.23], TOR:[-79.38,43.65], MTL:[-73.56,45.50], QUE:[-71.21,46.81], HAL:[-63.58,44.65], GROSSE:[-70.67,47.02], VAN:[-123.12,49.28], LON:[-0.13,51.51], MAN:[-2.24,53.48], LIVER:[-2.99,53.41], DUB:[-6.26,53.35], PAR:[2.35,48.86], LYON:[4.84,45.76], BRU:[4.35,50.85], VIEN:[16.37,48.21], BER:[13.40,52.52], AACH:[6.08,50.78], CARL:[12.87,50.23], FRANK:[8.68,50.11], HAMB:[8.27,49.32], WART:[10.31,50.97], LEIP:[12.37,51.34], PRAG:[14.44,50.08], BUD:[19.04,47.50], MIL:[9.19,45.46], VEN:[12.33,45.44], ROM:[12.50,41.90], NAP:[14.27,40.85], MAD:[-3.70,40.42], CAD:[-6.29,36.53], LIS:[-9.14,38.72], ATH:[23.73,37.98], MISS:[21.43,38.37], NAV:[21.69,36.91], ALEX:[29.92,31.20], CAIRO:[31.24,30.04], IST:[28.98,41.01], BOG:[-74.08,4.71], CAR:[-66.90,10.48], QUITO:[-78.47,-0.18], LIMA:[-77.04,-12.05], GUAYA:[-79.90,-2.19], BUEN:[-58.38,-34.60], SANTI:[-70.67,-33.45], MAIPU:[-70.77,-33.51], MEX:[-99.13,19.43], RIO:[-43.17,-22.91], WASH:[-77.04,38.90], NEW:[-90.07,29.95], TAH:[-83.32,35.90], NANK:[118.80,32.06], CANT:[113.26,23.13], HONG:[114.17,22.32], CAPE:[18.42,-33.92], BLOEM:[26.22,-29.12], MON:[-10.80,6.31] };
  const E=(lane,date,title,at,extra)=>Object.assign({lane,date,title,at},extra||{});
  const B=(title,author,start,end,section,extra)=>Object.assign({title,author,start,end,section},extra||{});
  const events = [
    E("canada","1826","Rideau Canal construction begins",L.OTT,{section:S.canada,wiki:"Rideau Canal",text:"Britain builds the Rideau Canal as a military supply route between Montreal and Kingston after the War of 1812.",plate:"british-north-america-rebellions-responsible-government-1837-1848"}),
    E("canada","1832","Rideau Canal opens",L.KING,{section:S.canada,wiki:"Rideau Canal",text:"The canal links Bytown and Kingston, giving Upper Canada an inland route away from the American border."}),
    E("canada","1837-11","Lower Canada rebellion begins",L.MTL,{section:S.canada,wiki:"Lower Canada Rebellion",text:"Patriote resistance to the colonial executive becomes armed revolt in Lower Canada."}),
    E("canada","1837-12","Upper Canada rebellion at Toronto",L.TOR,{section:S.canada,wiki:"Upper Canada Rebellion",text:"Mackenzie's rising is defeated near Toronto, but the political crisis cannot be put back inside the old colonial frame."}),
    E("canada","1838","Rebellion raids and repression continue",[-74.0,45.0],{section:S.canada,wiki:"Rebellions of 1837–1838",text:"Border raids and reprisals keep the crisis alive after the first defeats."}),
    E("canada","1839","Durham Report recommends union and responsible government",L.QUE,{section:S.canada,wiki:"Report on the Affairs of British North America",text:"Durham diagnoses the political deadlock and recommends union and responsible government."}),
    E("canada","1840","Act of Union creates the Province of Canada",L.MTL,{section:S.canada,wiki:"Act of Union 1840",text:"Upper and Lower Canada are merged into the Province of Canada, with equal representation despite unequal populations."}),
    E("canada","1846-06-15","Oregon Treaty fixes the forty-ninth parallel",L.VAN,{section:S.canada,wiki:"Oregon Treaty",text:"Britain and the United States settle the Pacific Northwest boundary at the forty-ninth parallel, except Vancouver Island."}),
    E("canada","1847","Irish famine migration reaches Grosse Ile",L.GROSSE,{section:S.canada,wiki:"Grosse Isle",text:"Famine ships crowd the quarantine station at Grosse Ile; migration reshapes Canadian cities and labour."}),
    E("canada","1848-02","Nova Scotia gains responsible government",L.HAL,{section:S.canada,wiki:"Responsible government",text:"Joseph Howe's reformers form the first responsible government in British North America."}),
    E("canada","1848-03","LaFontaine-Baldwin ministry takes office",L.MTL,{section:S.canada,wiki:"Louis-Hippolyte Lafontaine",text:"The Province of Canada follows with a reform ministry responsible to the elected assembly."}),

    E("ideas","1816","Haller's Restoration of Statecraft gives the age a name",[7.45,46.95],{section:S.thought,wiki:"Karl Ludwig von Haller",text:"Reactionary political theory treats the state as an organic patrimony rather than a machine made by constitutions."}),
    E("ideas","1819","Hegel publishes Philosophy of Right",L.BER,{section:S.thought,wiki:"Elements of the Philosophy of Right",text:"Hegel gives constitutional monarchy and the rational state a powerful philosophical language."}),
    E("ideas","1834","Rotteck and Welcker's Staatslexikon begins",[7.85,47.99],{section:S.thought,wiki:"Staatslexikon",text:"South German liberalism turns rights, constitutions and parliamentary control into a political programme."}),
    E("ideas","1848","Communist Manifesto",L.LON,{section:S.thought,wiki:"The Communist Manifesto",text:"Marx and Engels publish a revolutionary socialist answer to industrial capitalism and bourgeois liberalism."}),

    E("britain","1815","Corn Laws protect landowners",L.LON,{section:S.britain,wiki:"Corn Laws",text:"Postwar distress and landowner power put tariffs around British grain."}),
    E("britain","1819-08-16","Peterloo massacre",L.MAN,{section:S.britain,wiki:"Peterloo Massacre",text:"Cavalry charge a reform meeting in Manchester, making repression visible at the centre of industrial Britain."}),
    E("britain","1829","Catholic emancipation",L.LON,{section:S.britain,wiki:"Roman Catholic Relief Act 1829",text:"O'Connell's campaign forces Westminster to remove most civil disabilities on Catholics."}),
    E("britain","1830","Liverpool-Manchester railway opens",L.LIVER,{section:S.britain,wiki:"Liverpool and Manchester Railway",text:"Steam rail links industrial Manchester to the port of Liverpool."}),
    E("britain","1832","Great Reform Act",L.LON,{section:S.britain,wiki:"Reform Act 1832",text:"Parliament redistributes seats and widens the electorate without making Britain democratic."}),
    E("britain","1833","Factory Act limits child labour",L.MAN,{section:S.britain,wiki:"Factory Acts",text:"The state begins to regulate factory labour, especially for children."}),
    E("britain","1838","People's Charter launched",L.LON,{section:S.britain,wiki:"Chartism",text:"Chartists demand universal male suffrage, secret ballots and annual parliaments."}),
    E("britain","1845","Irish potato blight begins",L.DUB,{section:S.britain,wiki:"Great Famine (Ireland)",text:"Blight, poverty and policy turn crop failure into famine and migration."}),
    E("britain","1846","Corn Laws repealed",L.LON,{section:S.britain,wiki:"Corn Laws",text:"Peel breaks the Conservative party and commits Britain more fully to free trade."}),

    E("europe","1818","Aix-la-Chapelle admits France to the concert",L.AACH,{section:S.europe,wiki:"Congress of Aix-la-Chapelle (1818)",text:"France re-enters the great-power concert after occupation ends.",plate:"europe-restoration-congress-system-1815-1830"}),
    E("europe","1819","Carlsbad Decrees censor German universities and press",L.CARL,{section:S.germany,wiki:"Carlsbad Decrees",text:"Metternich answers student nationalism with censorship, surveillance and bans."}),
    E("europe","1820","Revolutions in Spain, Portugal and Naples",L.CAD,{section:S.europe,wiki:"Revolutions during the 1820s",text:"Constitutional revolts test the congress system in southern Europe."}),
    E("europe","1821","Laibach authorizes Austrian intervention in Naples",[14.51,46.05],{section:S.europe,wiki:"Congress of Laibach",text:"Austria suppresses the Neapolitan revolution with conservative approval."}),
    E("europe","1823","French army restores Ferdinand VII in Spain",L.MAD,{section:S.europe,wiki:"Hundred Thousand Sons of Saint Louis",text:"French intervention ends the Spanish liberal experiment."}),

    E("islamic","1821","Greek War of Independence begins",L.ATH,{section:S.islamic,wiki:"Greek War of Independence",text:"Greek revolt makes nationalism, Philhellenism and the eastern question part of the Restoration crisis."}),
    E("islamic","1824","Mehmet Ali sends Egyptian forces into Greece",L.ALEX,{section:S.islamic,wiki:"Muhammad Ali of Egypt",text:"Egyptian intervention nearly breaks the Greek revolt and shows Mehmet Ali's new military power."}),
    E("islamic","1827","Navarino destroys the Ottoman-Egyptian fleet",L.NAV,{section:S.islamic,wiki:"Battle of Navarino",text:"Britain, France and Russia destroy the Ottoman-Egyptian fleet."}),
    E("islamic","1830","Greece is recognized as independent",L.ATH,{section:S.islamic,wiki:"London Protocol (1830)",text:"The settlement creates an independent Greek state while leaving most Greeks outside it."}),
    E("islamic","1831","Mehmet Ali's Syria campaign begins",L.CAIRO,{section:S.islamic,wiki:"Egyptian–Ottoman War (1831–1833)",text:"Egypt challenges Ottoman control in Syria and forces European diplomacy back to the eastern Mediterranean."}),

    E("germany","1815","German Confederation established",L.FRANK,{section:S.germany,wiki:"German Confederation",text:"Thirty-nine states replace the Holy Roman Empire with a loose confederation chaired by Austria.",plate:"germany-confederation-zollverein-frankfurt-1815-1848"}),
    E("germany","1817","Wartburg Festival",L.WART,{section:S.germany,wiki:"Wartburg Festival",text:"Students celebrate national unity and liberty in black-red-gold."}),
    E("germany","1832","Hambach Festival",L.HAMB,{section:S.germany,wiki:"Hambach Festival",text:"Liberals and nationalists rally for rights and German unity."}),
    E("germany","1834","Zollverein begins under Prussian leadership",L.BER,{section:S.germany,wiki:"Zollverein",text:"The customs union makes economic unity a practical Prussian-led project.",plate:"germany-confederation-zollverein-frankfurt-1815-1848"}),
    E("germany","1837","Gottingen Seven dismissed",[9.94,51.54],{section:S.germany,wiki:"Göttingen Seven",text:"Professors protest Hanover's revoked constitution and are dismissed."}),
    E("germany","1848-05-18","Frankfurt Parliament opens",L.FRANK,{section:S.germany,wiki:"Frankfurt Parliament",text:"Deputies meet at St Paul's Church to write a German constitution.",plate:"germany-confederation-zollverein-frankfurt-1815-1848"}),
    E("germany","1849-04","Frederick William IV refuses the imperial crown",L.BER,{section:S.germany,wiki:"Frankfurt Parliament",text:"The Prussian king refuses a crown from the people, breaking the Frankfurt project."}),

    E("france","1815","Bourbon Restoration resumes",L.PAR,{section:S.france,wiki:"Bourbon Restoration in France",text:"Louis XVIII returns under a charter that mixes monarchy with representative forms."}),
    E("france","1830-07-27","July Revolution begins",L.PAR,{section:S.france,wiki:"July Revolution",text:"Paris overthrows Charles X after the July Ordinances and puts Louis-Philippe on the throne.",plate:"revolutions-europe-1830-1848"}),
    E("france","1831","Lyon silk workers revolt",L.LYON,{section:S.france,wiki:"Canut revolts",text:"The canuts make industrial labour unrest visible inside the July Monarchy."}),
    E("france","1848-02-24","Second Republic proclaimed",L.PAR,{section:S.fortyeight,wiki:"French Revolution of 1848",text:"February revolution in Paris begins the European wave of 1848.",plate:"revolutions-europe-1830-1848"}),
    E("france","1848-06","June Days in Paris",L.PAR,{section:S.fortyeight,wiki:"June Days uprising",text:"The republic crushes Paris workers after closing the National Workshops."}),

    E("latin","1810","Spanish American juntas open the independence cycle",L.CAR,{section:S.latin,wiki:"Spanish American wars of independence",text:"Juntas in Caracas, Buenos Aires and elsewhere begin a long imperial breakup."}),
    E("latin","1816","Argentina declares independence",L.BUEN,{section:S.latin,wiki:"Argentine Declaration of Independence",text:"The Rio de la Plata provinces claim independence while San Martin prepares the Andean campaign."}),
    E("latin","1817","San Martin crosses the Andes",[-70.1,-32.8],{section:S.latin,wiki:"Crossing of the Andes",text:"San Martin carries the war from Argentina into Chile.",plate:"latin-american-independence-1804-1830"}),
    E("latin","1818","Maipu secures Chile",L.MAIPU,{section:S.latin,wiki:"Battle of Maipú",text:"San Martin and O'Higgins secure Chilean independence."}),
    E("latin","1819","Bolivar wins at Boyaca",[-73.02,5.45],{section:S.latin,wiki:"Battle of Boyacá",text:"Bolivar opens the way to Bogota and Gran Colombia."}),
    E("latin","1821","Mexico becomes independent",L.MEX,{section:S.latin,wiki:"Mexican War of Independence",text:"The Plan of Iguala and Army of the Three Guarantees bring Mexico out of Spanish rule."}),
    E("latin","1822","Brazil declares independence",L.RIO,{section:S.latin,wiki:"Independence of Brazil",text:"Pedro breaks with Portugal and Brazil becomes an empire."}),
    E("latin","1822","Bolivar and San Martin meet at Guayaquil",L.GUAYA,{section:S.latin,wiki:"Guayaquil Conference",text:"The two liberation projects meet; San Martin withdraws and Bolivar carries the war into Peru."}),
    E("latin","1824","Ayacucho ends Spanish power in South America",[-74.13,-13.16],{section:S.latin,wiki:"Battle of Ayacucho",text:"The last major Spanish royal army in South America surrenders."}),

    E("asia","1839","First Opium War begins",L.CANT,{section:S.asia,wiki:"First Opium War",text:"Qing suppression of opium collides with British commercial and naval power."}),
    E("asia","1842-08-29","Treaty of Nanking",L.NANK,{section:S.asia,wiki:"Treaty of Nanking",text:"China cedes Hong Kong and opens treaty ports after British victory."}),
    E("asia","1843","Hong Kong becomes a British colony",L.HONG,{section:S.asia,wiki:"Hong Kong",text:"The new colony anchors British power on the South China coast."}),

    E("africa","1822","Liberia settlement begins",L.MON,{section:S.africa,wiki:"History of Liberia",text:"The American Colonization Society settlement at Monrovia begins a new Atlantic colony."}),
    E("africa","1833","British Slavery Abolition Act",L.LON,{section:S.africa,wiki:"Slavery Abolition Act 1833",text:"Parliament abolishes slavery in most British colonies, with apprenticeship ending in 1838."}),
    E("africa","1835","Great Trek begins",L.CAPE,{section:S.africa,wiki:"Great Trek",text:"Boer voortrekkers move inland from the Cape, founding republics and fighting African polities."}),
    E("africa","1847","Liberia declares independence",L.MON,{section:S.africa,wiki:"Liberia",text:"Liberia becomes an independent republic on the West African coast."}),

    E("america","1830","Indian Removal Act",L.WASH,{section:S.latin,wiki:"Indian Removal Act",text:"The United States authorizes forced removal of Indigenous nations from the Southeast."}),
    E("america","1838","Trail of Tears",L.TAH,{section:S.latin,wiki:"Trail of Tears",text:"Cherokee removal shows the violence behind American continental expansion."}),

    E("europe","1830-08","Belgian Revolution",L.BRU,{section:S.fortyeight,wiki:"Belgian Revolution",text:"Belgium breaks from the United Kingdom of the Netherlands in the wake of Paris."}),
    E("europe","1830-11","Polish November Uprising",[21.01,52.23],{section:S.fortyeight,wiki:"November Uprising",text:"Poland rises against Russian rule and is defeated in 1831."}),
    E("europe","1848-03-13","Metternich falls in Vienna",L.VIEN,{section:S.fortyeight,wiki:"Revolutions of 1848 in the Austrian Empire",text:"Vienna forces Metternich out; the symbol of Restoration Europe flees."}),
    E("europe","1848-03-15","Hungarian revolution",L.BUD,{section:S.fortyeight,wiki:"Hungarian Revolution of 1848",text:"Hungarian liberals demand autonomy, civil rights and national government."}),
    E("europe","1848-03-18","Berlin March days",L.BER,{section:S.fortyeight,wiki:"Revolutions of 1848 in the German states",text:"Barricades in Berlin force the Prussian king to promise constitutional change."}),
    E("europe","1848-03-18","Milan Five Days",L.MIL,{section:S.fortyeight,wiki:"Five Days of Milan",text:"Milan drives out Austrian troops and opens the First Italian War of Independence."}),
    E("europe","1848-06","Prague uprising",L.PRAG,{section:S.fortyeight,wiki:"Prague uprising of 1848",text:"A Slavic congress and street fighting expose national conflicts inside the Habsburg monarchy."})
  ];
  const chapters = [
    {id:"part-canada-restoration",title:S.canada,start:"1815",end:"1848",region:"americas",focusPriority:10,text:"British North America moves from military canal building to rebellion, union and responsible government.",bbox:[[-84,42],[-61,49]]},
    {id:"ch-bna-rebellions-responsible",parent:"part-canada-restoration",title:"British North America, rebellion and responsible government",start:"1826",end:"1848",region:"americas",section:S.canada,focusPriority:14,text:"The Rideau Canal, the rebellions, Durham, Union and LaFontaine-Baldwin make Canada part of the age of reform.",bbox:[[-84,42],[-61,49]]},
    {id:"part-ideas-britain",title:"Ideas, industry and reform",start:"1815",end:"1848",region:"europe",focusPriority:5,text:"Conservative, liberal, democratic, nationalist and socialist languages form while Britain industrializes and reforms.",bbox:[[-8,49],[3,56]]},
    {id:"ch-political-thought-1815",parent:"part-ideas-britain",title:"Political thought after 1815",start:"1815",end:"1848",region:"europe",section:S.thought,text:"Restoration conservatism, liberal constitutionalism, nationalism and socialism define the century's arguments.",bbox:[[2,45],[20,53]]},
    {id:"ch-britain-reform-industry",parent:"part-ideas-britain",title:"Great Britain, reform and industry",start:"1815",end:"1848",region:"europe",section:S.britain,text:"Britain answers industrial society with repression, reform, railways, Chartism, free trade and Irish crisis.",bbox:[[-8,49],[3,56]]},
    {id:"part-restoration-europe",title:"Restoration Europe",start:"1815",end:"1833",region:"europe",focusPriority:7,text:"The congress system tries to defend Vienna, but southern Europe and Greece test the principle of intervention.",bbox:[[-10,35],[35,58]]},
    {id:"ch-congress-system-europe",parent:"part-restoration-europe",title:"Europe after Vienna and the congress system",start:"1815",end:"1830",region:"europe",section:S.europe,focusPriority:13,text:"Metternich and Alexander try to make a conservative great-power concert, while Britain drifts away from intervention.",bbox:[[-10,35],[35,58]]},
    {id:"ch-greek-egypt-eastern-question",parent:"part-restoration-europe",title:"Greek independence and Mehmet Ali's Egypt",start:"1821",end:"1833",region:"islamic",section:S.islamic,focusPriority:10,text:"Greek revolt, Egyptian intervention and Navarino turn Ottoman weakness into a European question.",bbox:[[18,29],[32,42]]},
    {id:"part-national-revolutions",title:"National revolutions outside Europe",start:"1810",end:"1848",region:"americas",focusPriority:6,text:"Latin American independence, U.S. removal policy, Qing defeat and African-Atlantic abolition all sit beside Europe's revolutions.",bbox:[[-120,-40],[-40,35]]},
    {id:"ch-latin-american-independence",parent:"part-national-revolutions",title:"Latin American independence",start:"1810",end:"1830",region:"americas",section:S.latin,focusPriority:8,text:"Bolivar, San Martin, Mexico and Brazil break Iberian empire into new states.",bbox:[[-82,-40],[-35,25]]},
    {id:"ch-asia-opium-war",parent:"part-national-revolutions",title:"China and the First Opium War",start:"1839",end:"1843",region:"asia",section:S.asia,focusPriority:9,text:"The First Opium War forces Qing China into the treaty-port order.",bbox:[[108,20],[123,35]]},
    {id:"ch-africa-abolition-great-trek",parent:"part-national-revolutions",title:"Abolition, Liberia and the Great Trek",start:"1822",end:"1848",region:"africa",section:S.africa,focusPriority:8,text:"British abolition, Liberia and settler expansion at the Cape show a different Atlantic and African geography.",bbox:[[-15,-35],[30,10]]},
    {id:"part-germany-france-1848",title:"Germany, France and 1848",start:"1815",end:"1849",region:"europe",focusPriority:8,text:"The German Confederation, the Zollverein, the July Monarchy and the revolutions of 1848 carry the Restoration order to crisis.",bbox:[[0,40],[22,55]]},
    {id:"ch-german-confederation-zollverein",parent:"part-germany-france-1848",title:"German Confederation and Zollverein",start:"1815",end:"1848",region:"europe",section:S.germany,focusPriority:11,text:"Confederation politics suppress nationalism while the Zollverein creates economic unity under Prussian leadership.",bbox:[[5,46],[19,55]]},
    {id:"ch-france-1815-1848",parent:"part-germany-france-1848",title:"France from restoration to republic",start:"1815",end:"1848",region:"europe",section:S.france,focusPriority:9,text:"France passes from Bourbon restoration to July monarchy and then to the Second Republic.",bbox:[[-2,42],[7,51]]},
    {id:"ch-revolutions-1830-1848",parent:"part-germany-france-1848",title:"The revolutions of 1830 and 1848",start:"1830",end:"1849",region:"europe",section:S.fortyeight,focusPriority:12,text:"Paris, Brussels, Warsaw, Vienna, Berlin, Prague, Milan and Frankfurt make 1848 a continental wave.",bbox:[[-1,41],[22,55]]}
  ];
  const books = [
    B("The Age of Revolution: 1789-1848","Eric Hobsbawm","1815","1848",S.thought),
    B("The Pursuit of Power: Europe 1815-1914","Richard J. Evans","1815","1848",S.europe),
    B("The Penguin History of Latin America","Edwin Williamson","1810","1830",S.latin),
    B("The Birth of the Modern World, 1780-1914","C. A. Bayly","1815","1848",S.britain),
    B("Citizens and Nation: An Essay on History, Communication, and Canada","Gerald Friesen","1837","1848",S.canada)
  ];
  window.DATASETS = window.DATASETS || {};
  window.DATASETS.restoration = {
    id:"restoration", title:"Restoration and revolution", subtitle:"1815-1850", range:["1810-01-01","1850-12-31"], gapAfter:"1850-1939 not yet built (Penguin Vol. 2)", startAt:"1830", precision:"year",
    note:"Amit's Notes of the History of the World/The age of restoration and revolution",
    mapNote:"The quiet underlay uses the nearest historical-basemaps state map, usually 1815. Story layers use historical-basemap polygons where they exist, and hand-traced fields only for intermediate revolutionary or colonial frontiers.",
    lanes:[{id:"canada",label:"Canada and British North America",colour:"#b22d2d",pinned:true},{id:"ideas",label:"Political thought",colour:"#6b6b6b"},{id:"britain",label:"Britain and industry",colour:"#2f5f93"},{id:"europe",label:"Restoration Europe",colour:"#7a5a8c"},{id:"germany",label:"Germany and Zollverein",colour:"#4f7f4f"},{id:"france",label:"France",colour:"#8c3b3b"},{id:"latin",label:"Latin America",colour:"#b36b2e"},{id:"islamic",label:"Islamic world",colour:"#9a6a32"},{id:"asia",label:"Asia",colour:"#387a5b"},{id:"africa",label:"Africa and abolition",colour:"#7a6b42"},{id:"america",label:"United States",colour:"#2f7f86"}],
    chapterRegions:{"part-canada-restoration":"americas","ch-bna-rebellions-responsible":"americas","part-ideas-britain":"europe","ch-political-thought-1815":"europe","ch-britain-reform-industry":"europe","part-restoration-europe":"europe","ch-congress-system-europe":"europe","ch-greek-egypt-eastern-question":"islamic","part-national-revolutions":"americas","ch-latin-american-independence":"americas","ch-asia-opium-war":"asia","ch-africa-abolition-great-trek":"africa","part-germany-france-1848":"europe","ch-german-confederation-zollverein":"europe","ch-france-1815-1848":"europe","ch-revolutions-1830-1848":"europe"},
    events, leaders:[], chapters, books,
    colours:{lanes:{canada:"#b22d2d",ideas:"#6b6b6b",britain:"#2f5f93",europe:"#7a5a8c",germany:"#4f7f4f",france:"#8c3b3b",latin:"#b36b2e",islamic:"#9a6a32",asia:"#387a5b",africa:"#7a6b42",america:"#2f7f86"},sides:{britain:"#2f5f93",france:"#8c3b3b",austria:"#d8a84f",prussia:"#4f7f4f",russia:"#6b8c3f",liberal:"#b36b2e"}},
    plates:[
      {id:"europe-restoration-congress-system-1815-1830",title:"Europe after Vienna and the congress system",start:"1815",end:"1830"},
      {id:"latin-american-independence-1804-1830",title:"Latin American independence",start:"1810",end:"1830"},
      {id:"revolutions-europe-1830-1848",title:"The revolutions of 1830 and 1848",start:"1830",end:"1849"},
      {id:"germany-confederation-zollverein-frankfurt-1815-1848",title:"Germany, Confederation and Zollverein",start:"1815",end:"1848"},
      {id:"british-north-america-rebellions-responsible-government-1837-1848",title:"British North America, rebellion and responsible government",start:"1826",end:"1848"}
    ],
    changelog:["Added in v1.3.0-dev for Penguin Atlas Vol. 2 round 2: Restoration Europe, Latin American independence, Britain, Canada, Greece, the Opium War, abolition and 1848."]
  };
})();

