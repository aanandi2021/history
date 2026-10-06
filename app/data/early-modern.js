// Early Modern / Age of Reason, 1600-1789: war, absolutism, balance of power, science and empires.
(function () {
  const S = {
    canada:"Early Canada and Atlantic empires",
    war:"Thirty Years' War and Westphalia",
    ideas:"Baroque, science and Enlightenment",
    france:"French absolutism and Louis XIV",
    empire:"German princes and imperial estates",
    danube:"Austria and the Ottoman frontier",
    britain:"Britain, parliament and maritime power",
    north:"Sweden, Russia and the Baltic"
  };
  const L = { QUE:[-71.21,46.81], MTL:[-73.56,45.50], TROIS:[-72.54,46.34], PORT:[-65.52,44.71], YORK:[-92.46,57.00], PRG:[14.42,50.08], WEST:[7.63,51.96], PAR:[2.35,48.86], VIE:[16.37,48.21], LON:[-0.13,51.51], STOCK:[18.07,59.33], MOS:[37.62,55.75], PET:[30.31,59.94] };
  const E=(lane,date,title,at,extra)=>Object.assign({lane,date,title,at},extra||{});
  const R=(name,country,side,born,died,start,end,section,extra)=>Object.assign({name,country,side,born,died,start,end,section},extra||{});
  const events = [
    E("canada","1604","Port-Royal begins Acadian settlement",L.PORT,{section:S.canada,wiki:"Port-Royal (Acadia)",text:"French settlers build at Port-Royal in Mi'kma'ki, creating an Acadian foothold in an already inhabited region."}),
    E("canada","1608-07-03","Quebec founded",L.QUE,{section:S.canada,wiki:"Quebec City",text:"Champlain's Quebec becomes a French settlement and alliance hub on the St Lawrence."}),
    E("canada","1615","Champlain reaches Wendat country",[-79.8,44.6],{section:S.canada,wiki:"Samuel de Champlain",approx:true,text:"French alliance-making pushes inland through Wendat and Algonquin networks rather than across empty space."}),
    E("canada","1627","Company of One Hundred Associates chartered",L.QUE,{section:S.canada,wiki:"Company of One Hundred Associates",text:"Richelieu's charter ties colonization, fur trade and Catholic mission to French state policy."}),
    E("canada","1629","Kirke brothers capture Quebec",L.QUE,{section:S.canada,wiki:"David Kirke",text:"An English wartime occupation shows that New France is already part of Atlantic war, then returns to France in 1632."}),
    E("canada","1634","Trois-Rivieres founded",L.TROIS,{section:S.canada,wiki:"Trois-Rivières",text:"A second St Lawrence post anchors trade and mission routes between Quebec and the interior."}),
    E("canada","1642","Montreal founded",L.MTL,{section:S.canada,wiki:"Montreal",text:"Ville-Marie begins as a mission settlement at a strategic island above the St Lawrence rapids."}),
    E("canada","1663","New France becomes a royal province",L.QUE,{section:S.canada,wiki:"New France",text:"The crown takes New France under direct royal government, parallel to the absolutist state built in France."}),
    E("canada","1670-05-02","Hudson's Bay Company chartered",L.YORK,{section:S.canada,wiki:"Hudson's Bay Company",text:"An English charter turns the northern bay and its Indigenous trade relationships into an imperial corporation."}),
    E("canada","1682","La Salle claims the Mississippi basin",[-89.25,29.15],{section:S.canada,wiki:"René-Robert Cavelier, Sieur de La Salle",text:"A French claim at the Mississippi mouth links Canada, the Great Lakes and Louisiana on imperial maps."}),
    E("canada","1701-08-04","Great Peace of Montreal",L.MTL,{section:S.canada,wiki:"Great Peace of Montreal",text:"Haudenosaunee, French and many allied nations negotiate a broad peace in Montreal."}),
    E("canada","1713","Utrecht reshapes Acadia, Newfoundland and Hudson Bay",[-63.0,45.0],{section:S.canada,wiki:"Treaty of Utrecht",text:"Britain gains Hudson Bay territories, Newfoundland and Acadia, while French and Indigenous realities remain more complex on the ground."}),
    E("europe","1618-05-23","Defenestration of Prague",L.PRG,{section:S.war,wiki:"Defenestrations of Prague",text:"Bohemian estates throw imperial deputies from Prague Castle, opening the Thirty Years' War.",plate:"thirty-years-war-westphalia-1618-1648"}),
    E("europe","1620-11-08","White Mountain defeats the Bohemian revolt",[14.32,50.08],{section:S.war,wiki:"Battle of White Mountain",text:"Habsburg victory begins forced recatholicization and confiscation in Bohemia."}),
    E("europe","1631-09-17","Gustavus Adolphus wins Breitenfeld",[12.45,51.45],{section:S.war,wiki:"Battle of Breitenfeld (1631)",text:"The Swedish victory saves north German Protestantism and opens the war to wider European power politics."}),
    E("europe","1648-10-24","Peace of Westphalia",L.WEST,{section:S.war,wiki:"Peace of Westphalia",text:"Munster and Osnabruck settle religion, imperial liberties and gains for France, Sweden, Brandenburg and Bavaria.",plate:"thirty-years-war-westphalia-1618-1648"}),
    E("ideas","1632","Galileo's Dialogue published",[11.25,43.77],{section:S.ideas,wiki:"Dialogue Concerning the Two Chief World Systems",text:"Galileo's mathematical physics belongs to the same century as confessional war and absolutist state-building."}),
    E("ideas","1687","Newton's Principia",[0.12,52.20],{section:S.ideas,wiki:"Philosophiæ Naturalis Principia Mathematica",text:"Newton's mechanics turns the scientific revolution into a new language of universal law."}),
    E("ideas","1717","Grand Lodge of London founded",L.LON,{section:S.ideas,wiki:"Freemasonry",text:"Enlightenment sociability moves through lodges, academies, salons and print."}),
    E("ideas","1751","Encyclopedie begins publication",L.PAR,{section:S.ideas,wiki:"Encyclopédie",text:"Diderot and d'Alembert turn useful knowledge into a public project of Enlightenment criticism."}),
    E("france","1628","Richelieu takes La Rochelle",[-1.15,46.16],{section:S.france,wiki:"Siege of La Rochelle",text:"The crown breaks Huguenot political power without simply abolishing Protestant worship.",plate:"louis-xiv-france-absolutism-1610-1697"}),
    E("france","1648","The Fronde begins",L.PAR,{section:S.france,wiki:"Fronde",text:"Noble and parliamentary revolt teaches the young Louis XIV the danger of aristocratic politics."}),
    E("france","1661","Louis XIV begins personal rule",[2.12,48.80],{section:S.france,wiki:"Louis XIV",text:"Versailles, ministers, intendants, army and court ritual become the working image of absolutism.",plate:"louis-xiv-france-absolutism-1610-1697"}),
    E("france","1685","Revocation of the Edict of Nantes",[2.12,48.80],{section:S.france,wiki:"Edict of Fontainebleau",text:"Huguenot flight damages France and sends skills, capital and anti-absolutist criticism abroad."}),
    E("france","1697","Peace of Rijswijk",[4.33,52.04],{section:S.france,wiki:"Treaty of Ryswick",text:"The League of Augsburg checks Louis XIV while leaving Strasbourg and Alsatian Reunions to France."}),
    E("empire","1663","Permanent Imperial Diet at Regensburg",[12.10,49.02],{section:S.empire,wiki:"Perpetual Diet of Regensburg",text:"After Westphalia the Empire works as a congress of estates more than a centralized monarchy."}),
    E("empire","1675","Brandenburg wins at Fehrbellin",[12.77,52.81],{section:S.empire,wiki:"Battle of Fehrbellin",text:"The Great Elector's victory over Sweden begins Brandenburg-Prussia's military reputation."}),
    E("empire","1701","Frederick crowns himself king in Prussia",[20.51,54.71],{section:S.empire,wiki:"Kingdom of Prussia",text:"Prussia's royal title signals a new power inside and beside the Empire."}),
    E("ottoman","1683-09-12","Vienna relieved at Kahlenberg",L.VIE,{section:S.danube,wiki:"Battle of Vienna",text:"The defeat of Kara Mustafa's siege marks the end of Ottoman pressure on central Europe.",plate:"austria-ottoman-danube-1663-1739"}),
    E("ottoman","1699","Peace of Karlowitz",[18.93,45.49],{section:S.danube,wiki:"Treaty of Karlowitz",text:"Austria gains most of Hungary and becomes a Danube major power.",plate:"austria-ottoman-danube-1663-1739"}),
    E("ottoman","1718","Peace of Passarowitz",[21.08,44.93],{section:S.danube,wiki:"Treaty of Passarowitz",text:"Prince Eugene's victories bring Austria to its greatest Danube extension."}),
    E("britain","1649-01-30","Charles I executed",L.LON,{section:S.britain,wiki:"Execution of Charles I",text:"Civil war and Puritan military power abolish monarchy for a decade."}),
    E("britain","1688","Glorious Revolution",L.LON,{section:S.britain,wiki:"Glorious Revolution",text:"William of Orange replaces James II and constitutional monarchy counters absolutism."}),
    E("britain","1707","Union creates Great Britain",[-3.2,55.9],{section:S.britain,wiki:"Acts of Union 1707",text:"England and Scotland form Great Britain during the War of the Spanish Succession."}),
    E("britain","1713","Peace of Utrecht",[5.12,52.09],{section:S.britain,wiki:"Treaty of Utrecht",text:"Britain gains Gibraltar, Minorca, Newfoundland, Hudson Bay territory and the asiento."}),
    E("north","1648","Sweden becomes a Baltic great power",L.STOCK,{section:S.north,wiki:"Swedish Empire",text:"Westphalia gives Sweden Pomerania, Wismar, Bremen and Verden.",plate:"baltic-russia-sweden-1632-1721"}),
    E("north","1700","Battle of Narva",[28.19,59.38],{section:S.north,wiki:"Battle of Narva (1700)",text:"Charles XII defeats Peter I but turns away from Russia toward Poland."}),
    E("north","1703","St Petersburg founded",L.PET,{section:S.north,wiki:"Saint Petersburg",text:"Peter founds a Baltic capital in the Neva marshes while the war is still undecided.",plate:"baltic-russia-sweden-1632-1721"}),
    E("north","1709","Poltava breaks Swedish power",[34.55,49.59],{section:S.north,wiki:"Battle of Poltava",text:"Poltava turns the Great Northern War and opens Russia's rise as a Baltic power."}),
    E("north","1721","Treaty of Nystad",[23.42,60.80],{section:S.north,wiki:"Treaty of Nystad",text:"Russia takes the Baltic provinces and supplants Sweden in northern Europe."})
  ];
  const leaders = [
    R("Ferdinand II","Holy Roman Empire","habsburg","1578","1637","1619","1637",S.war,{wiki:"Ferdinand II, Holy Roman Emperor"}),
    R("Gustavus Adolphus","Sweden","sweden","1594","1632","1611","1632",S.war,{wiki:"Gustavus Adolphus"}),
    R("Louis XIV","France","france","1638","1715","1643","1715",S.france,{wiki:"Louis XIV"}),
    R("Leopold I","Habsburg monarchy","habsburg","1640","1705","1658","1705",S.danube,{wiki:"Leopold I, Holy Roman Emperor"}),
    R("Peter I","Russia","russia","1672","1725","1682","1725",S.north,{wiki:"Peter the Great"}),
    R("Charles XII","Sweden","sweden","1682","1718","1697","1718",S.north,{wiki:"Charles XII of Sweden"}),
    R("William III","Britain and Dutch Republic","britain","1650","1702","1689","1702",S.britain,{wiki:"William III of England"})
  ];
  const chapters = [
    {id:"ch-early-canada-atlantic",title:"Early Canada in the Atlantic age",start:"1604",end:"1713",bbox:[[-96,29],[-52,58]],section:S.canada,text:"Early Canada belongs inside the same Atlantic age as absolutism and balance-of-power war: Port-Royal, Quebec, Trois-Rivieres, Montreal, Hudson Bay and the Great Peace of Montreal grow from Indigenous diplomacy, French royal policy and English corporate expansion."},
    {id:"ch-thirty-years-war-westphalia",title:"The Thirty Years' War and Westphalia",start:"1618",end:"1648",plate:"thirty-years-war-westphalia-1618-1648",bbox:[[2,46],[21,55]],section:S.war,text:"The Defenestration of Prague, White Mountain, Magdeburg, Breitenfeld, Lutzen and the Peace of Westphalia turn a Bohemian revolt into a European struggle over religion, Habsburg power, Sweden and France."},
    {id:"ch-baroque-enlightenment",title:"Baroque, science and the Enlightenment",start:"1600",end:"1751",bbox:[[-5,40],[16,53]],section:S.ideas,text:"The Baroque style, Galileo, Newton, Locke, Bayle, Voltaire, Rousseau and the Encyclopedie make the Age of Reason more than a diplomatic period: courts, churches, academies and print reshape how Europeans explain power, nature and toleration."},
    {id:"ch-louis-xiv-france",title:"Louis XIV and French absolutism",start:"1610",end:"1697",plate:"louis-xiv-france-absolutism-1610-1697",bbox:[[-5.5,41.5],[9.2,52.6]],section:S.france,text:"Richelieu, Mazarin and Louis XIV build French absolutism through La Rochelle, the Fronde, Versailles, Colbert, Louvois, Vauban, the revocation of Nantes, Strasbourg, Luxembourg and the wars ending at Rijswijk."},
    {id:"ch-german-princes-after-westphalia",title:"German princes after 1648",start:"1648",end:"1740",bbox:[[5,47],[23,55]],section:S.empire,text:"After Westphalia the Empire is a loose field of sovereign estates: the Permanent Diet at Regensburg, Bavaria, Saxony, Hanover and Brandenburg-Prussia show recovery, Frenchification, standing armies and princely absolutism."},
    {id:"ch-austria-ottoman-danube",title:"Austria and the Ottoman Danube frontier",start:"1663",end:"1739",plate:"austria-ottoman-danube-1663-1739",bbox:[[12,36],[31,50]],section:S.danube,text:"Vienna, Buda, Karlowitz, Prince Eugene, Passarowitz and Belgrade mark Austria's rise from threatened Habsburg lands to a Danube major power facing an Ottoman frontier that still shifts after 1739."},
    {id:"ch-stuart-britain-revolution",title:"Stuart Britain, revolution and maritime power",start:"1603",end:"1714",bbox:[[-11,49],[4,59]],section:S.britain,text:"James I, Charles I, Parliament, Cromwell, the Navigation Act, the Restoration, Habeas Corpus, the Glorious Revolution, Bank of England, Union and Utrecht turn Britain toward parliamentary government and maritime finance."},
    {id:"ch-spanish-succession-balance",title:"Spanish succession and balance of power",start:"1688",end:"1714",bbox:[[-10,36],[18,54]],section:S.britain,text:"The War of the Spanish Succession links William III's balance-of-power policy, Marlborough, Prince Eugene, Blenheim, Gibraltar and Utrecht; Spain and colonies go Bourbon, while Austria, Britain and Savoy divide the European inheritance."},
    {id:"ch-baltic-russia-sweden",title:"Sweden, Russia and the Baltic",start:"1632",end:"1721",plate:"baltic-russia-sweden-1632-1721",bbox:[[5,46],[45,66]],section:S.north,text:"Sweden's Baltic empire after Westphalia and Roskilde faces Denmark, Poland-Lithuania, Brandenburg-Prussia and Peter the Great's Russia; Narva, St Petersburg, Poltava and Nystad shift northern power to Russia."}
  ];
  const books = [];
  window.DATASETS = window.DATASETS || {};
  window.DATASETS["early-modern"] = {
    id:"early-modern", title:"Age of Reason", subtitle:"1600-1789", range:["1600-01-01","1790-01-01"], startAt:"1648", precision:"year",
    mapNote:"The map layers are schematic story fields. They keep Canada first while showing Europe, the Ottoman-Danube frontier, Britain, Sweden and Russia as overlapping early-modern systems.",
    lanes:[{id:"canada",label:"Canada & Atlantic North America",colour:"#b22d2d",pinned:true},{id:"europe",label:"Central Europe",colour:"#7a5a8c"},{id:"ideas",label:"Ideas, science and culture",colour:"#6b6b6b"},{id:"france",label:"France",colour:"#d8a84f"},{id:"empire",label:"German Empire and princes",colour:"#6b8c3f"},{id:"ottoman",label:"Austria and Ottomans",colour:"#8c6d3f"},{id:"britain",label:"Britain and balance of power",colour:"#2f7f86"},{id:"north",label:"Sweden, Russia and Baltic",colour:"#b36b2e"}],
    events, leaders, chapters, books,
    colours:{lanes:{canada:"#b22d2d",europe:"#7a5a8c",ideas:"#6b6b6b",france:"#d8a84f",empire:"#6b8c3f",ottoman:"#8c6d3f",britain:"#2f7f86",north:"#b36b2e"},sides:{habsburg:"#d8a84f",sweden:"#7a5a8c",france:"#8c3b3b",russia:"#6b8c3f",britain:"#2f7f86",ottoman:"#8c6d3f",brandenburg:"#6b8c3f"}},
    plates:[{id:"thirty-years-war-westphalia-1618-1648",title:"The Thirty Years' War and Westphalia",start:"1618",end:"1648"},{id:"louis-xiv-france-absolutism-1610-1697",title:"Louis XIV, absolutism and France's eastern frontier",start:"1610",end:"1697"},{id:"austria-ottoman-danube-1663-1739",title:"Austria and the Ottoman Danube frontier",start:"1663",end:"1739"},{id:"baltic-russia-sweden-1632-1721",title:"Sweden, Russia and the Baltic",start:"1632",end:"1721"}],
    changelog:["Added in v0.9.0-dev for atlas round 13: Thirty Years' War, Louis XIV, Austria-Ottoman Danube wars, Sweden/Russia/Baltic, and early-modern Canada context."]
  };
})();
