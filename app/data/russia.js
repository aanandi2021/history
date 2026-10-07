// Russia 1450–1946: Muscovy to Stalin. Hand-entered from the vault note
// "Amit's Notes of the History of the World/Russia — Muscovy to Stalin (1480–1941)".
// `section` values are the note's headings, so "Open note" lands in the right place.
// Dates are Gregorian (new style); where Russian sources give Julian dates they have been converted.
// Schema: specs/001-world-viewer/contracts/dataset.schema.json
(function () {
  const S = {
    pre: "Before 1500 — Kyiv, the Mongols, the rise of Moscow",
    ivan: "Ivan the Terrible (r. 1547–1584)",
    troubles: "Time of Troubles and the first Romanovs (1598–1682)",
    peter: "Peter the Great (r. 1682–1725)",
    cath: "Catherine the Great (r. 1762–1796)",
    nap: "Napoleon and Alexander I (r. 1801–1825)",
    nic1: "Nicholas I and the Crimean War (r. 1825–1855)",
    alex2: "Alexander II — the reforming tsar (r. 1855–1881)",
    alex3: "Alexander III and the late empire (r. 1881–1894)",
    nic2: "Nicholas II and 1905 (r. 1894–1917)",
    ww1: "The First World War and 1917",
    civil: "Civil War and the founding of the USSR (1918–1924)",
    stalin: "Stalin to 1941",
    personal: "Personal threads"
  };
  const MOS = [37.62, 55.75], SPB = [30.31, 59.94], OTT = [-75.7, 45.42], BER = [13.4, 52.52], WAR = [21.0, 52.23],
    PAR = [2.35, 48.86], VIE = [16.37, 48.2], BEI = [116.4, 39.9], VLA = [131.9, 43.12], SIT = [-135.33, 57.05];

  const E = (lane, date, title, at, extra) => Object.assign({ lane, date, title, at }, extra || {});

  const events = [
    // ---- Before 1500
    E("europe", "1453-05-29", "Constantinople falls to the Ottomans", [28.98, 41.01], { section: S.pre, wiki: "Fall of Constantinople", text: "The end of the Byzantine Empire. Moscow later styles itself the 'third Rome' and heir to Orthodox Christianity." }),
    E("russia", "1478", "Moscow absorbs Novgorod", [31.27, 58.52], { section: S.pre, wiki: "Novgorod Republic", text: "Ivan III takes the great merchant republic of the north, and its fur trade with it." }),
    E("russia", "1480-11", "Stand on the Ugra River", [35.9, 54.5], { section: S.pre, wiki: "Great Stand on the Ugra River", text: "Moscow's and the Horde's armies face each other across a river, and the Mongols withdraw. The usual end date for Mongol rule." }),
    E("canada", "1492-10-12", "Columbus reaches the Caribbean", [-74.5, 24.1], { wiki: "Voyages of Christopher Columbus" }),
    E("canada", "1497-06-24", "John Cabot reaches Newfoundland", [-55.5, 48.5], { approx: true, wiki: "John Cabot", text: "The landfall may have been Newfoundland or Cape Breton; nobody is sure." }),

    // ---- Ivan the Terrible
    E("europe", "1517-10-31", "Luther's 95 Theses", [12.65, 51.87], { wiki: "Ninety-five Theses", text: "The Reformation begins. Russia, being Orthodox, stays outside it." }),
    E("asia", "1526-04-21", "Babur founds the Mughal Empire", [76.97, 29.39], { wiki: "First Battle of Panipat" }),
    E("canada", "1534-07-24", "Cartier lands at Gaspé", [-64.48, 48.83], { section: S.ivan, wiki: "Jacques Cartier" }),
    E("russia", "1547-01-26", "Ivan IV crowned tsar", MOS, { section: S.ivan, wiki: "Ivan the Terrible", text: "The first ruler crowned 'tsar' (from Caesar)." }),
    E("russia", "1552-10-12", "Kazan conquered", [49.1, 55.79], { section: S.ivan, wiki: "Siege of Kazan (1552)", text: "St. Basil's Cathedral in Red Square was built to celebrate it." }),
    E("russia", "1556", "Astrakhan taken; the Volga is Russian", [48.03, 46.35], { section: S.ivan, wiki: "Astrakhan Khanate" }),
    E("europe", "1558-01-22", "Livonian War", [24.1, 57.0], { end: "1583-08-10", section: S.ivan, wiki: "Livonian War", text: "Ivan's 25-year attempt to reach the Baltic. It failed; Peter the Great finished the job 150 years later." }),
    E("russia", "1565-02", "The oprichnina begins", MOS, { section: S.ivan, wiki: "Oprichnina", end: "1572", text: "Ivan's private terror state within the state." }),
    E("russia", "1581-11-29", "Ivan kills his son", [38.84, 56.4], { section: S.ivan, wiki: "Ivan Ivanovich (son of Ivan IV)", text: "Struck in a rage at Alexandrov. Ivan's line ends with his remaining, frail son Feodor." }),
    E("russia", "1582", "Yermak crosses the Urals", [68.25, 58.2], { approx: true, section: S.ivan, wiki: "Yermak Timofeyevich", text: "A Cossack band paid by the Stroganov merchants takes the Khanate of Sibir. The conquest of Siberia begins." }),
    E("europe", "1588-08-08", "Spanish Armada defeated", [-1.0, 50.5], { wiki: "Spanish Armada" }),

    // ---- Time of Troubles and the first Romanovs
    E("russia", "1598-01-17", "Time of Troubles", MOS, { end: "1613-03-03", section: S.troubles, wiki: "Time of Troubles", text: "Famine, pretenders and foreign invasion after Ivan's line dies out." }),
    E("canada", "1608-07-03", "Champlain founds Quebec", [-71.21, 46.81], { section: S.troubles, wiki: "Samuel de Champlain" }),
    E("russia", "1610-10", "Poles occupy Moscow", MOS, { section: S.troubles, wiki: "Polish–Muscovite War (1605–1618)" }),
    E("russia", "1612-11-04", "Minin and Pozharsky retake Moscow", MOS, { section: S.troubles, wiki: "Kuzma Minin", text: "A people's army raised in Nizhny Novgorod. Russia celebrates 4 November as Unity Day." }),
    E("russia", "1613-03-03", "Michael Romanov chosen tsar", MOS, { section: S.troubles, wiki: "Michael I of Russia", text: "Sixteen years old, chosen by an assembly of the land. His family rules until 1917." }),
    E("europe", "1618-05-23", "Thirty Years' War", [13.0, 50.5], { end: "1648-10-24", section: S.troubles, wiki: "Thirty Years' War" }),
    E("russia", "1639", "Russians reach the Pacific", [143.2, 59.4], { approx: true, section: S.troubles, wiki: "Ivan Moskvitin", text: "Moskvitin's Cossacks reach the Sea of Okhotsk, chasing sable. The HBC is chartered 31 years later." }),
    E("asia", "1644-06-06", "The Qing take Beijing", BEI, { wiki: "Transition from Ming to Qing" }),
    E("russia", "1649-02", "Serfdom written into law", MOS, { section: S.troubles, wiki: "Sobornoye Ulozheniye", text: "The law code of 1649 binds peasants to the land permanently." }),
    E("russia", "1654-01-18", "Pereiaslav agreement with the Cossacks", [31.45, 50.07], { section: S.troubles, wiki: "Pereiaslav Agreement", text: "The Cossacks of eastern Ukraine accept the tsar's protection. What that meant is still argued over." }),
    E("russia", "1666", "Church schism: the Old Believers", MOS, { approx: true, section: S.troubles, wiki: "Raskol" }),
    E("canada", "1670-05-02", "Hudson's Bay Company chartered", [-92.4, 57.0], { wiki: "Hudson's Bay Company", text: "Beaver in the west, sable in the east: two fur empires growing at the same time." }),

    // ---- Peter the Great
    E("europe", "1683-09-12", "Ottomans turned back at Vienna", VIE, { wiki: "Battle of Vienna" }),
    E("asia", "1689-09-07", "Treaty of Nerchinsk with China", [116.6, 51.98], { section: S.peter, wiki: "Treaty of Nerchinsk", text: "Russia's first treaty with China fixes the border on the Amur watershed for 170 years." }),
    E("europe", "1697-03", "Peter's Grand Embassy", [4.83, 52.44], { end: "1698-08", section: S.peter, wiki: "Grand Embassy of Peter the Great", text: "Peter travels Europe under a false name and works in a shipyard at Zaandam." }),
    E("europe", "1700-02", "Great Northern War", [24.0, 59.0], { end: "1721-09-10", section: S.peter, wiki: "Great Northern War", text: "21 years against Sweden. Russia gains the Baltic coast." }),
    E("russia", "1703-05-27", "St. Petersburg founded", SPB, { section: S.peter, wiki: "Saint Petersburg", text: "Built on a swamp with forced labour; capital from 1712." }),
    E("russia", "1709-07-08", "Battle of Poltava", [34.55, 49.59], { id: "poltava-1709", section: S.peter, wiki: "Battle of Poltava", text: "Peter crushes Charles XII of Sweden in what is now Ukraine. Sweden stops being a great power." }),
    E("canada", "1713-04-11", "Treaty of Utrecht", [-65.5, 44.74], { wiki: "Peace of Utrecht", text: "France gives Britain Acadia, Newfoundland and Hudson Bay." }),
    E("russia", "1722-02-04", "Table of Ranks", SPB, { section: S.peter, wiki: "Table of Ranks", text: "Noble status tied to service in the army, navy or civil service. Lasted until 1917." }),

    // ---- Between Peter and Catherine
    E("canada", "1741-07-16", "Bering and Chirikov reach Alaska", [-140.9, 60.3], { wiki: "Vitus Bering", text: "A Danish captain in Russian service sights Mount St. Elias. Bering dies on the way home." }),
    E("europe", "1756-05-17", "Seven Years' War", [13.0, 51.0], { end: "1763-02-15", wiki: "Seven Years' War", text: "Russia nearly destroys Prussia, then changes sides when Peter III takes the throne." }),
    E("asia", "1757-06-23", "Plassey: British rule in Bengal begins", [88.25, 23.8], { wiki: "Battle of Plassey" }),
    E("canada", "1759-09-13", "Plains of Abraham", [-71.22, 46.8], { section: S.cath, wiki: "Battle of the Plains of Abraham" }),

    // ---- Catherine the Great
    E("russia", "1762-07-09", "Catherine seizes the throne", SPB, { section: S.cath, wiki: "Coup of 1762", text: "Her husband Peter III is deposed and dead within days." }),
    E("europe", "1772-08-05", "First Partition of Poland", WAR, { section: S.cath, wiki: "Partitions of Poland" }),
    E("russia", "1773-09", "Pugachev's revolt", [55.1, 51.77], { end: "1775-01", section: S.cath, wiki: "Pugachev's Rebellion", text: "A Cossack claiming to be Peter III leads the largest peasant revolt in Russian history." }),
    E("canada", "1774-07-18", "Spain sights Haida Gwaii", [-132.0, 54.0], { section: S.cath, wiki: "Juan José Pérez Hernández", text: "Juan Pérez is sent north partly to check on the Russians." }),
    E("canada", "1776-07-04", "American Declaration of Independence", [-75.15, 39.95], { section: S.cath, wiki: "United States Declaration of Independence" }),
    E("russia", "1783-04-19", "Crimea annexed", [34.1, 44.95], { section: S.cath, wiki: "Annexation of the Crimean Khanate by the Russian Empire" }),
    E("canada", "1784-08", "First Russian settlement in Alaska", [-153.5, 57.1], { section: S.cath, wiki: "Three Saints Bay", text: "Shelikhov's post on Kodiak Island." }),
    E("europe", "1789-07-14", "Storming of the Bastille", [2.37, 48.85], { section: S.cath, wiki: "Storming of the Bastille" }),
    E("europe", "1795-10-24", "Third Partition: Poland disappears", WAR, { section: S.cath, wiki: "Third Partition of Poland", text: "Poland vanishes from the map until 1918." }),
    E("canada", "1799", "Russian-American Company chartered", SIT, { approx: true, wiki: "Russian-American Company", text: "A state-backed fur monopoly, Russia's answer to the HBC. Sitka becomes its capital." }),

    // ---- Napoleon and Alexander I
    E("europe", "1805-12-02", "Austerlitz", [16.76, 49.13], { section: S.nap, wiki: "Battle of Austerlitz", text: "Napoleon beats the Russians and Austrians together." }),
    E("europe", "1807-07-07", "Treaties of Tilsit", [21.88, 55.08], { section: S.nap, wiki: "Treaties of Tilsit", text: "Napoleon and Alexander meet on a raft in the Niemen and divide Europe between them." }),
    E("canada", "1812-06-18", "War of 1812", [-79.04, 43.15], { end: "1815-02-17", section: S.nap, wiki: "War of 1812", text: "Six days before Napoleon crossed into Russia, the US declared war and invaded Upper Canada." }),
    E("russia", "1812-06-24", "Napoleon crosses the Niemen", [23.9, 54.9], { section: S.nap, wiki: "French invasion of Russia", text: "About 600,000 men." }),
    E("russia", "1812-09-07", "Borodino", [35.82, 55.52], { section: S.nap, wiki: "Battle of Borodino", text: "The bloodiest single day of the Napoleonic wars. A draw, and the Russians fall back." }),
    E("russia", "1812-09-14", "Moscow burns", MOS, { end: "1812-09-18", section: S.nap, wiki: "Fire of Moscow (1812)", text: "Napoleon enters an abandoned city. Fires, probably set by the Russians, destroy most of it." }),
    E("russia", "1812-10-19", "The retreat from Moscow", [28.5, 54.25], { end: "1812-12-14", section: S.nap, wiki: "Battle of Berezina", text: "Winter, hunger and Cossacks. Fewer than one in five of Napoleon's men get out." }),
    E("europe", "1814-03-31", "Russian troops enter Paris", PAR, { section: S.nap, wiki: "Battle of Paris (1814)" }),
    E("europe", "1814-11-01", "Congress of Vienna", VIE, { end: "1815-06-09", wiki: "Congress of Vienna" }),
    E("europe", "1815-06-18", "Waterloo", [4.41, 50.68], { wiki: "Battle of Waterloo" }),
    E("russia", "1825-12-26", "Decembrist revolt", [30.30, 59.93], { section: S.nap, wiki: "Decembrist revolt", text: "Officers who had seen Paris try to force a constitution. Crushed in an afternoon on Senate Square. (Yes, the band.)" }),

    // ---- Nicholas I
    E("asia", "1830", "The Great Game", [69.2, 34.5], { approx: true, end: "1907", wiki: "The Great Game", text: "Britain and Russia compete for Central Asia and Afghanistan, each afraid for its empire." }),
    E("canada", "1837-11-06", "Rebellions in Upper and Lower Canada", [-73.57, 45.5], { end: "1838-11-16", wiki: "Rebellions of 1837–1838" }),
    E("asia", "1839-09-04", "First Opium War", [113.26, 23.13], { end: "1842-08-29", wiki: "First Opium War" }),
    E("europe", "1848-02-22", "Revolutions of 1848", [19.04, 47.5], { end: "1849-08-13", section: S.nic1, wiki: "Revolutions of 1848", text: "Nicholas sends an army to crush the Hungarian revolt for Austria." }),
    E("russia", "1853-10-16", "Crimean War", [33.52, 44.6], { end: "1856-03-30", section: S.nic1, wiki: "Crimean War", text: "Britain, France and the Ottomans against Russia. The siege of Sevastopol lasts almost a year." }),
    E("canada", "1854-10-25", "A Torontonian in the Light Brigade", [33.67, 44.52], { section: S.nic1, wiki: "Alexander Roberts Dunn", text: "Alexander Dunn rides in the charge at Balaclava and becomes the first Canadian awarded the Victoria Cross." }),

    // ---- Alexander II
    E("asia", "1857-05-10", "Indian Rebellion", [77.7, 28.98], { end: "1858-07-08", wiki: "Indian Rebellion of 1857" }),
    E("asia", "1858-05-28", "Treaty of Aigun", [127.5, 49.9], { wiki: "Treaty of Aigun", text: "China cedes the north bank of the Amur." }),
    E("asia", "1860-11-14", "Treaty of Peking; Vladivostok founded", BEI, { section: S.personal, wiki: "Convention of Peking", text: "Count Nikolai Ignatiev, Michael Ignatieff's great-grandfather, wins Russia the Pacific coast. Vladivostok ('ruler of the East') is founded that summer." }),
    E("russia", "1861-03-03", "Serfs freed", SPB, { section: S.alex2, wiki: "Emancipation reform of 1861", text: "About 23 million people, two years before Lincoln's proclamation. They had to pay for the land over 49 years." }),
    E("canada", "1861-04-12", "American Civil War", [-77.0, 38.9], { end: "1865-04-09", wiki: "American Civil War" }),
    E("canada", "1867-03-30", "Alaska sold to the United States", SIT, { section: S.alex2, wiki: "Alaska Purchase", text: "US$7.2 million, about two cents an acre." }),
    E("canada", "1867-07-01", "Confederation", OTT, { section: S.alex2, wiki: "Canadian Confederation", text: "Three months after the Alaska sale." }),
    E("asia", "1868-01-03", "Meiji Restoration", [139.69, 35.69], { wiki: "Meiji Restoration", text: "Japan starts modernizing fast. Russia will meet the result in 1904." }),
    E("russia", "1869", "War and Peace published", [37.53, 54.07], { section: S.alex2, wiki: "War and Peace" }),
    E("europe", "1871-01-18", "German Empire proclaimed", [2.12, 48.8], { wiki: "Proclamation of the German Empire" }),
    E("canada", "1874", "Mennonites from Russia settle in Manitoba", [-96.68, 49.53], { approx: true, section: S.alex3, wiki: "Russian Mennonite" }),
    E("europe", "1877-04-24", "Russo-Turkish War", [25.5, 43.0], { end: "1878-03-03", wiki: "Russo-Turkish War (1877–1878)", text: "Bulgaria gets its independence with Russian help." }),
    E("russia", "1881-03-13", "Alexander II assassinated", [30.33, 59.94], { section: S.alex2, wiki: "Assassination of Alexander II of Russia", text: "A bomb thrown in St. Petersburg by the People's Will group." }),

    // ---- Alexander III
    E("russia", "1881-04", "Pogroms", [30.52, 50.45], { end: "1884", section: S.alex3, wiki: "1881–1884 pogroms in the Russian Empire", text: "One wave among several. Many of the Jewish families who left came to Montreal, Toronto and Winnipeg." }),
    E("canada", "1885-11-07", "CPR last spike", [-118.42, 50.97], { section: S.alex3, wiki: "Last Spike (Canadian Pacific Railway)" }),
    E("russia", "1891-05-31", "Trans-Siberian Railway begun", VLA, { section: S.alex3, wiki: "Trans-Siberian Railway", text: "Begun from Vladivostok six years after the CPR's last spike." }),
    E("russia", "1891", "Famine on the Volga", [45.0, 53.0], { end: "1892", section: S.alex3, wiki: "Russian famine of 1891–1892" }),
    E("canada", "1899-01", "Doukhobors arrive", [-102.08, 51.58], { section: S.alex3, wiki: "Doukhobors", text: "About 7,500 pacifist dissenters settle in Saskatchewan. Tolstoy gave the royalties of a novel to help pay their passage." }),

    // ---- Nicholas II
    E("asia", "1904-02-08", "Russo-Japanese War", [121.25, 38.8], { end: "1905-09-05", section: S.nic2, wiki: "Russo-Japanese War", text: "The first modern defeat of a European power by an Asian one." }),
    E("russia", "1905-01-22", "Bloody Sunday", SPB, { section: S.nic2, wiki: "Bloody Sunday (1905)", text: "Troops fire on peaceful marchers carrying icons and a petition to the tsar." }),
    E("asia", "1905-05-27", "Tsushima", [129.5, 34.5], { section: S.nic2, wiki: "Battle of Tsushima", text: "The Baltic Fleet sails halfway round the world and is destroyed in an afternoon." }),
    E("russia", "1905-06-27", "Mutiny on the Potemkin", [30.73, 46.48], { section: S.nic2, wiki: "Russian battleship Potemkin" }),
    E("russia", "1905-10-30", "October Manifesto: a Duma", SPB, { section: S.nic2, wiki: "October Manifesto" }),
    E("asia", "1911-10-10", "Revolution in China", [114.3, 30.6], { wiki: "1911 Revolution", text: "The Qing dynasty falls six years before the Romanovs." }),

    // ---- First World War and 1917
    E("europe", "1914-07-28", "First World War", [4.0, 50.5], { end: "1918-11-11", section: S.ww1, wiki: "World War I" }),
    E("russia", "1914-08-26", "Tannenberg", [20.15, 53.5], { end: "1914-08-30", section: S.ww1, wiki: "Battle of Tannenberg (1914)", text: "A Russian army destroyed in East Prussia in the first month." }),
    E("russia", "1915-09-05", "Nicholas takes command", [30.33, 53.9], { section: S.ww1, wiki: "Stavka", text: "He moves to headquarters at Mogilev and leaves Alexandra, and Rasputin, running the capital." }),
    E("russia", "1916-12-30", "Rasputin murdered", [30.30, 59.93], { section: S.nic2, wiki: "Grigori Rasputin" }),
    E("russia", "1917-03-08", "February Revolution", SPB, { end: "1917-03-16", section: S.ww1, wiki: "February Revolution", text: "Bread riots in Petrograd; the troops refuse to fire. ('February' in the old calendar.)" }),
    E("russia", "1917-03-15", "Nicholas II abdicates", [28.33, 57.82], { section: S.ww1, wiki: "Abdication of Nicholas II", text: "In a railway carriage at Pskov. Three centuries of Romanov rule end." }),
    E("canada", "1917-04-09", "Vimy Ridge", [2.77, 50.38], { end: "1917-04-12", section: S.ww1, wiki: "Battle of Vimy Ridge" }),
    E("russia", "1917-04-16", "Lenin arrives at the Finland Station", [30.36, 59.96], { section: S.ww1, wiki: "Sealed train", text: "Germany ships him home to take Russia out of the war." }),
    E("canada", "1917-10-26", "Passchendaele", [3.0, 50.9], { end: "1917-11-10", section: S.ww1, wiki: "Battle of Passchendaele" }),
    E("russia", "1917-11-07", "Bolsheviks seize power", SPB, { section: S.ww1, wiki: "October Revolution", text: "Nearly bloodless in the capital. 25 October in the old calendar, hence the name." }),
    E("canada", "1917-12-06", "Halifax Explosion", [-63.57, 44.67], { wiki: "Halifax Explosion" }),
    E("russia", "1918-03-03", "Treaty of Brest-Litovsk", [23.7, 52.1], { section: S.ww1, wiki: "Treaty of Brest-Litovsk", text: "Lenin gives up Ukraine, the Baltics, Finland and Poland to get out of the war." }),
    E("russia", "1918-07-17", "Royal family shot at Yekaterinburg", [60.6, 56.84], { section: S.ww1, wiki: "Execution of the Romanov family" }),

    // ---- Civil War
    E("russia", "1918-01", "Russian Civil War", [50.0, 55.0], { end: "1921-03", section: S.civil, wiki: "Russian Civil War", text: "Reds against Whites, with national movements and foreign troops in between. About 10 million dead." }),
    E("canada", "1918-08", "Canadians in North Russia", [40.54, 64.54], { end: "1919-06", section: S.civil, wiki: "North Russia intervention", text: "Several hundred Canadian gunners and others around Arkhangelsk and Murmansk." }),
    E("canada", "1918-10-11", "Canadian Siberian Expeditionary Force", VLA, { end: "1919-06-05", section: S.civil, wiki: "Canadian Siberian Expeditionary Force", text: "About 4,200 Canadians sail from Victoria to Vladivostok. Most never leave the city." }),
    E("europe", "1918-11-11", "Armistice in the West", [2.9, 49.43], { wiki: "Armistice of 11 November 1918" }),
    E("europe", "1919-02-14", "Polish–Soviet War", WAR, { end: "1921-03-18", section: S.civil, wiki: "Polish–Soviet War", text: "Poland stops the Red Army at the gates of Warsaw in 1920." }),
    E("canada", "1919-05-15", "Winnipeg General Strike", [-97.14, 49.9], { end: "1919-06-26", section: S.civil, wiki: "Winnipeg general strike", text: "Fear of Bolshevism shaped the harsh response." }),
    E("russia", "1921-03", "Kronstadt revolt; the New Economic Policy", [29.77, 59.99], { section: S.civil, wiki: "New Economic Policy", text: "Sailors who backed the revolution in 1917 rise against it. Lenin crushes them and allows small private trade again." }),
    E("russia", "1922-12-30", "USSR founded", MOS, { section: S.civil, wiki: "Treaty on the Creation of the USSR" }),
    E("russia", "1924-01-21", "Lenin dies", MOS, { section: S.civil, wiki: "Death and state funeral of Vladimir Lenin" }),

    // ---- Stalin
    E("russia", "1928-10-01", "First Five-Year Plan", [59.0, 53.4], { section: S.stalin, wiki: "First five-year plan", text: "Steel towns such as Magnitogorsk built from nothing." }),
    E("canada", "1929-10-29", "Wall Street crash", [-74.01, 40.71], { wiki: "Wall Street crash of 1929" }),
    E("russia", "1929-12", "Forced collectivization", [36.0, 50.0], { end: "1933", section: S.stalin, wiki: "Collectivization in the Soviet Union" }),
    E("russia", "1932", "Holodomor", [31.0, 49.0], { end: "1933", section: S.stalin, wiki: "Holodomor", text: "Millions starve in Ukraine. Canada recognized it as a genocide in 2008." }),
    E("europe", "1933-01-30", "Hitler becomes chancellor", BER, { wiki: "Adolf Hitler's rise to power" }),
    E("russia", "1936-08", "The Great Terror", MOS, { end: "1938-11", section: S.stalin, wiki: "Great Purge", text: "About 750,000 people shot, and many more sent to the Gulag." }),
    E("asia", "1937-07-07", "Japan invades China", [116.2, 39.85], { wiki: "Second Sino-Japanese War" }),
    E("russia", "1939-08-23", "Pact with Hitler", MOS, { section: S.stalin, wiki: "Molotov–Ribbentrop Pact", text: "A secret protocol divides Eastern Europe between them." }),
    E("canada", "1939-09-10", "Canada declares war", OTT, { wiki: "Canadian declaration of war on Germany" }),
    E("europe", "1939-09-17", "Soviets invade Poland", [24.0, 52.5], { section: S.stalin, wiki: "Soviet invasion of Poland" }),
    E("europe", "1939-11-30", "Winter War with Finland", [29.0, 61.5], { end: "1940-03-13", section: S.stalin, wiki: "Winter War" }),
    E("russia", "1941-06-22", "Germany invades the USSR", [23.7, 52.1], { section: S.stalin, wiki: "Operation Barbarossa" }),
    E("russia", "1942-08-23", "Stalingrad", [44.5, 48.7], { end: "1943-02-02", wiki: "Battle of Stalingrad" }),
    E("russia", "1945-05-09", "Victory Day", MOS, { wiki: "Victory Day (9 May)", text: "About 27 million Soviet dead in the war." }),
    E("canada", "1945-09-05", "Gouzenko defects in Ottawa", OTT, { section: S.stalin, wiki: "Igor Gouzenko", text: "A cipher clerk walks out of the Soviet embassy with proof of a spy ring. Often counted as the start of the Cold War." })
  ];

  const R = (name, born, died, start, end, section, extra) =>
    Object.assign({ name, country: "Russia", row: "Russia", side: "russia", born, died, start, end, wiki: name }, section ? { section } : {}, extra || {});

  const leaders = [
    R("Ivan III", "1440-01-22", "1505-11-06", "1462-03-27", "1505-11-06", S.pre, { wiki: "Ivan III of Russia" }),
    R("Vasili III", "1479-03-25", "1533-12-13", "1505-11-06", "1533-12-13", S.ivan),
    R("Ivan IV 'the Terrible'", "1530-08-25", "1584-03-28", "1533-12-13", "1584-03-28", S.ivan, { wiki: "Ivan the Terrible" }),
    R("Feodor I", "1557-05-31", "1598-01-17", "1584-03-28", "1598-01-17", S.troubles, { wiki: "Feodor I of Russia" }),
    R("Boris Godunov", "1552", "1605-04-23", "1598-02-21", "1605-04-23", S.troubles),
    R("Vasili Shuisky", "1552", "1612-09-22", "1606-05-29", "1610-07-27", S.troubles, { wiki: "Vasili IV of Russia" }),
    R("Michael I", "1596-07-22", "1645-07-23", "1613-03-03", "1645-07-23", S.troubles, { wiki: "Michael I of Russia" }),
    R("Alexis", "1629-03-29", "1676-02-08", "1645-07-23", "1676-02-08", S.troubles, { wiki: "Alexis of Russia" }),
    R("Feodor III", "1661-06-09", "1682-05-07", "1676-02-08", "1682-05-07", S.troubles, { wiki: "Feodor III of Russia" }),
    R("Peter I 'the Great'", "1672-06-09", "1725-02-08", "1682-05-07", "1725-02-08", S.peter, { wiki: "Peter the Great" }),
    R("Catherine I", "1684-04-15", "1727-05-17", "1725-02-08", "1727-05-17", null, { wiki: "Catherine I of Russia" }),
    R("Peter II", "1715-10-23", "1730-01-30", "1727-05-18", "1730-01-30", null, { wiki: "Peter II of Russia" }),
    R("Anna", "1693-02-07", "1740-10-28", "1730-02-26", "1740-10-28", null, { wiki: "Anna of Russia" }),
    R("Ivan VI", "1740-08-23", "1764-07-16", "1740-10-28", "1741-12-06", null, { wiki: "Ivan VI of Russia" }),
    R("Elizabeth", "1709-12-29", "1762-01-05", "1741-12-06", "1762-01-05", null, { wiki: "Elizabeth of Russia" }),
    R("Peter III", "1728-02-21", "1762-07-17", "1762-01-05", "1762-07-09", S.cath, { wiki: "Peter III of Russia" }),
    R("Catherine II 'the Great'", "1729-05-02", "1796-11-17", "1762-07-09", "1796-11-17", S.cath, { wiki: "Catherine the Great" }),
    R("Paul I", "1754-10-01", "1801-03-23", "1796-11-17", "1801-03-23", null, { wiki: "Paul I of Russia" }),
    R("Alexander I", "1777-12-23", "1825-12-01", "1801-03-24", "1825-12-01", S.nap, { wiki: "Alexander I of Russia" }),
    R("Nicholas I", "1796-07-06", "1855-03-02", "1825-12-01", "1855-03-02", S.nic1, { wiki: "Nicholas I of Russia" }),
    R("Alexander II", "1818-04-29", "1881-03-13", "1855-03-02", "1881-03-13", S.alex2, { wiki: "Alexander II of Russia" }),
    R("Alexander III", "1845-03-10", "1894-11-01", "1881-03-13", "1894-11-01", S.alex3, { wiki: "Alexander III of Russia" }),
    R("Nicholas II", "1868-05-18", "1918-07-17", "1894-11-01", "1917-03-15", S.nic2),
    R("Georgy Lvov", "1861-11-02", "1925-03-07", "1917-03-15", "1917-07-21", S.ww1, { country: "Provisional Government" }),
    R("Alexander Kerensky", "1881-05-04", "1970-06-11", "1917-07-21", "1917-11-07", S.ww1, { country: "Provisional Government" }),
    R("Vladimir Lenin", "1870-04-22", "1924-01-21", "1917-11-08", "1924-01-21", S.civil, { country: "Soviet Russia / USSR", side: "soviet" }),
    R("Joseph Stalin", "1878-12-18", "1953-03-05", "1924-01-21", "1953-03-05", S.stalin, { country: "USSR", side: "soviet" }),

    { name: "Mehmed II", country: "Ottoman Empire", side: "ottoman", born: "1432-03-30", died: "1481-05-03", terms: [["1444-08", "1446-09"], ["1451-02-03", "1481-05-03"]] },
    { name: "Suleiman the Magnificent", country: "Ottoman Empire", side: "ottoman", born: "1494-11-06", died: "1566-09-06", start: "1520-09-30", end: "1566-09-06" },
    { name: "Elizabeth I", country: "England", side: "britain", born: "1533-09-07", died: "1603-03-24", start: "1558-11-17", end: "1603-03-24", wiki: "Elizabeth I", text: "She corresponded with Ivan the Terrible, who at one point proposed marriage." },
    { name: "Louis XIV", country: "France", side: "france", born: "1638-09-05", died: "1715-09-01", start: "1643-05-14", end: "1715-09-01" },
    { name: "Kangxi Emperor", country: "China (Qing)", side: "china", born: "1654-05-04", died: "1722-12-20", start: "1661-02-05", end: "1722-12-20" },
    { name: "George III", country: "Britain", side: "britain", born: "1738-06-04", died: "1820-01-29", start: "1760-10-25", end: "1820-01-29" },
    { name: "Napoleon Bonaparte", country: "France", side: "france", born: "1769-08-15", died: "1821-05-05", terms: [["1799-11-10", "1814-04-06"], ["1815-03-20", "1815-06-22"]], wiki: "Napoleon" },
    { name: "Queen Victoria", country: "Britain", side: "britain", born: "1819-05-24", died: "1901-01-22", start: "1837-06-20", end: "1901-01-22" },
    { name: "Abraham Lincoln", country: "USA", side: "usa", born: "1809-02-12", died: "1865-04-15", start: "1861-03-04", end: "1865-04-15" },
    { name: "Otto von Bismarck", country: "Germany", side: "germany", born: "1815-04-01", died: "1898-07-30", start: "1871-03-21", end: "1890-03-20" },
    { name: "John A. Macdonald", country: "Canada", side: "canada", born: "1815-01-11", died: "1891-06-06", terms: [["1867-07-01", "1873-11-05"], ["1878-10-17", "1891-06-06"]] },
    { name: "Wilfrid Laurier", country: "Canada", side: "canada", born: "1841-11-20", died: "1919-02-17", start: "1896-07-11", end: "1911-10-06" },
    { name: "Robert Borden", country: "Canada", side: "canada", born: "1854-06-26", died: "1937-06-10", start: "1911-10-10", end: "1920-07-10", text: "Sent Canadian troops to Siberia in 1918." },
    { name: "W. L. Mackenzie King", country: "Canada", side: "canada", born: "1874-12-17", died: "1950-07-22", terms: [["1921-12-29", "1926-06-28"], ["1926-09-25", "1930-08-07"], ["1935-10-23", "1948-11-15"]] },
    { name: "Wilhelm II", country: "Germany", side: "germany", born: "1859-01-27", died: "1941-06-04", start: "1888-06-15", end: "1918-11-09", text: "First cousin of Nicholas II's wife, and of George V." },
    { name: "Adolf Hitler", country: "Germany", side: "germany", born: "1889-04-20", died: "1945-04-30", start: "1933-01-30", end: "1945-04-30" }
  ];

  const chapters = [
    { id: "ch-muscovy", title: "Muscovy gathers the Russian lands", start: "1462-03-27", end: "1613-03-03", bbox: [[18, 40], [72, 66]], text: "In 1462 Moscow is one principality among several, still paying tribute to the Tatar khans. Over the next 150 years its grand princes swallow their rivals, stop paying the Tatars, take the title of tsar and push down the Volga to the Caspian. Then the old line dies out and the state nearly falls apart in the Time of Troubles, until a Romanov is chosen tsar in 1613. In Canadian terms this runs from before Cabot to Champlain's first years at Quebec." },
    { id: "ch-romanov-empire", title: "The Romanovs build an empire", start: "1582", end: "1796-11-17", bbox: [[-2, 38], [170, 73]], text: "Cossacks and fur traders cross Siberia to the Pacific in about sixty years, much faster than the French and English cross North America. At home the Romanovs turn Muscovy into an empire on the European model. Peter the Great wins the Baltic and builds St. Petersburg, and Catherine the Great takes Crimea and much of Poland. Serfdom hardens the whole time. In Canadian terms this runs from the first fur trade on the St. Lawrence to just after the Conquest of 1759-60." },
    { id: "ch-great-power", title: "A great power with long frontiers", start: "1741-07-16", end: "1907", bbox: [[-172, 22], [150, 72]], text: "Russia is now one of the great powers of Europe, and its frontiers keep moving: across the Bering Sea to Alaska, into Central Asia, and down the Amur to the Pacific. It beats Napoleon in 1812 but loses the Crimean War in 1856, which shows how far it has fallen behind. Alexander II frees the serfs in 1861 and sells Alaska in 1867, the year of Canadian Confederation. Defeat by Japan in 1905 ends the run of expansion." },
    { id: "ch-revolution", title: "Revolution and the Soviet state", start: "1914-07-28", end: "1941-12-05", bbox: [[10, 36], [142, 68]], text: "The First World War breaks the old regime. In 1917 the tsar abdicates and the Bolsheviks take power, and a civil war follows with foreign troops, Canadians among them, on Russian soil. The Soviet Union comes out of it. Under Stalin it collectivises the farms, industrialises at a terrible cost and purges its own people, then divides Eastern Europe with Hitler in 1939, and is invaded by him in 1941." },
    { title: "Moscow rises", parent: "ch-muscovy", start: "1462-03-27", end: "1505-11-06", bbox: [[24, 48], [60, 63]], section: S.pre, text: "Ivan III gathers the Russian principalities around Moscow, swallowing Novgorod in 1478. In 1480 the Great Horde's army turns back at the Ugra River without a fight and the tribute to the Mongols ends. Ivan marries a Byzantine princess and starts calling himself tsar." },
    { title: "Ivan's conquests on the Volga", parent: "ch-muscovy", start: "1547-01-26", end: "1584-03-28", bbox: [[28, 42], [72, 62]], section: S.ivan, text: "Ivan IV, the Terrible, is crowned the first tsar in 1547. He takes the Tatar khanates of Kazan (1552) and Astrakhan (1556), so the whole Volga becomes Russian and the road east over the Urals opens. At home the second half of his reign is the oprichnina, a reign of terror against his own nobles." },
    { title: "Time of Troubles", parent: "ch-muscovy", start: "1598-01-17", end: "1613-03-03", bbox: [[18, 48], [46, 61]], section: S.troubles, text: "Ivan's line dies out in 1598 and Russia falls apart: famine, pretenders claiming to be his dead son, and Polish and Swedish armies in the country. A Polish garrison holds the Moscow Kremlin until 1612. A citizen army from Nizhny Novgorod drives it out, and in 1613 an assembly elects sixteen-year-old Michael Romanov tsar." },
    { title: "Crossing Siberia", parent: "ch-romanov-empire", start: "1582", end: "1689-09-07", bbox: [[55, 40], [170, 73]], section: S.troubles, text: "Yermak's Cossacks break the Khanate of Sibir in 1582, and fur traders and Cossacks follow the rivers east. They reach the Pacific at Okhotsk by 1639, about the time Champlain's successors are working the St. Lawrence fur trade. The Treaty of Nerchinsk with Qing China (1689) fixes the border on the Amur for the next 170 years." },
    { title: "Peter's window on the Baltic", parent: "ch-romanov-empire", start: "1697-03", end: "1725-02-08", bbox: [[-2, 45], [42, 65]], section: S.peter, text: "Peter the Great travels incognito through Holland and England in 1697–98 and comes home determined to modernize by force. He fights Sweden for twenty-one years, wins at Poltava in 1709, and gets the Baltic coast. He builds St. Petersburg on a swamp as the new capital, makes the nobles shave, and remakes the army and state on European lines." },
    { title: "Russian America", parent: "ch-great-power", start: "1741-07-16", end: "1867-03-30", bbox: [[-172, 48], [-120, 68]], text: "Bering's voyage of 1741 opens the North Pacific sea-otter trade. The Russian-American Company runs Alaska from Sitka and reaches as far south as Fort Ross in California. Overhunted and hard to defend after the Crimean War, Alaska is sold to the United States in 1867, the same year as Canadian Confederation." },
    { title: "Catherine's empire", parent: "ch-romanov-empire", start: "1762-07-09", end: "1796-11-17", bbox: [[12, 40], [60, 62]], section: S.cath, text: "Catherine II, a German princess, takes the throne in a coup against her husband in 1762. She corresponds with Voltaire and talks reform, but serfdom gets harsher and Pugachev's peasant revolt (1773–75) is crushed. Her armies take Crimea and the Black Sea coast from the Ottomans, and three partitions wipe Poland off the map." },
    { title: "1812", parent: "ch-great-power", start: "1812-06-24", end: "1814-03-31", bbox: [[0, 46], [42, 58]], section: S.nap, text: "Napoleon invades with about 600,000 men in June 1812. The Russians retreat, fight at Borodino, and abandon Moscow, which burns. With no peace offer and winter coming, the Grande Armée retreats and is destroyed. Russian troops reach Paris in 1814, while in Canada the War of 1812 is still being fought." },
    { title: "The Great Game", parent: "ch-great-power", start: "1830", end: "1907", bbox: [[45, 22], [85, 46]], text: "Russia pushes into Central Asia, taking Tashkent, Samarkand and the khanates one by one. Britain fears for India and answers with spies, surveyors and two Afghan wars. The rivalry ends with the Anglo-Russian Convention of 1907, which splits Persia into spheres of influence." },
    { title: "Crimean War", parent: "ch-great-power", start: "1853-10-16", end: "1856-03-30", bbox: [[26, 40], [42, 48]], section: S.nic1, text: "Nicholas I pushes on a weakening Ottoman Empire, and Britain and France go to war to stop him. The fighting centres on the year-long siege of Sevastopol, with Florence Nightingale's hospitals and the Charge of the Light Brigade. Russia's defeat shows how far behind it has fallen and pushes the next tsar to free the serfs in 1861." },
    { title: "Pacific frontier: Amur to Tsushima", parent: "ch-great-power", start: "1858-05-28", end: "1905-09-05", bbox: [[100, 28], [148, 58]], text: "Russia takes the Amur and the Pacific coast from a weakened China in 1858–60 and founds Vladivostok. The Trans-Siberian Railway (1891–1916) ties it to Moscow. Pushing into Manchuria and Korea leads to war with Japan, and the Baltic Fleet, sailed halfway around the world, is sunk at Tsushima in 1905." },
    { title: "War and revolution", parent: "ch-revolution", start: "1914-07-28", end: "1918-07-17", bbox: [[14, 44], [62, 62]], section: S.ww1, text: "Russia enters the First World War in 1914 and loses millions of men. Bread riots in Petrograd in February 1917 bring down Nicholas II. Lenin's Bolsheviks seize power in October, make a separate peace with Germany at Brest-Litovsk, and in July 1918 shoot the royal family at Yekaterinburg." },
    { title: "Canada in Siberia", parent: "ch-civil-war", start: "1918-10-11", end: "1919-06-05", bbox: [[112, 36], [142, 54]], section: S.civil, text: "About 4,200 Canadians of the Siberian Expeditionary Force go to Vladivostok in 1918–19, alongside Americans, British and Japanese troops, to support the Whites and guard Allied supplies. They see little fighting and come home by June 1919. Several hundred other Canadians serve in North Russia around Arkhangelsk and Murmansk." },
    { title: "Civil War", parent: "ch-revolution", start: "1918-01", end: "1921-03", bbox: [[18, 38], [110, 68]], section: S.civil, text: "Reds against Whites, plus peasant armies, nationalists, and foreign interventions, from 1918 to about 1921. The Bolsheviks hold the centre and the railways and win. Perhaps eight to ten million people die, mostly of famine and disease, and the USSR is founded in 1922." },
    { title: "Stalin's revolution from above", parent: "ch-revolution", start: "1928-10-01", end: "1938-11", bbox: [[20, 40], [90, 66]], section: S.stalin, text: "Stalin forces peasants into collective farms from 1929 and drives industry with five-year plans. The famine of 1932–33 kills millions, above all in Ukraine (the Holodomor, which Canada recognizes as a genocide). In the Great Terror of 1936–38 about 750,000 people are shot and many more sent to the Gulag." },
    { title: "Pact, partition and invasion", parent: "ch-revolution", start: "1939-08-23", end: "1941-12-05", bbox: [[10, 44], [45, 66]], section: S.stalin, text: "In August 1939 Stalin signs a pact with Hitler that secretly divides Eastern Europe. Both invade Poland in September, and the Soviets attack Finland in November and take the Baltic states in 1940. Hitler turns on Stalin in June 1941, and by December German troops are at the gates of Moscow." }
  ];

  const B = (title, author, start, end, section, extra) => Object.assign({ title, author, start, end, owned: false }, section ? { section } : {}, extra || {});
  const books = [
    B("The Story of Russia", "Orlando Figes", "1450", "1946", null),
    B("The Romanovs: 1613–1918", "Simon Sebag Montefiore", "1613", "1918", null),
    B("Natasha's Dance", "Orlando Figes", "1700", "1946", null),
    B("The Gates of Europe", "Serhii Plokhy", "1450", "1946", S.pre),
    B("Genghis Khan and the Making of the Modern World", "Jack Weatherford", "1450", "1505", S.pre),
    B("Medieval Russia, 980–1584", "Janet Martin", "1450", "1584", S.pre),
    B("Ivan the Terrible", "Isabel de Madariaga", "1530", "1584", S.ivan),
    B("Ivan the Terrible", "Henri Troyat", "1530", "1584", S.ivan),
    B("Ivan the Terrible", "Robert Payne and Nikita Romanoff", "1530", "1584", S.ivan),
    B("A Short History of Russia's First Civil War", "Chester Dunning", "1598", "1613", S.troubles),
    B("The Romanovs: Ruling Russia, 1613–1917", "Lindsey Hughes", "1613", "1682", S.troubles),
    B("Peter the Great: His Life and World", "Robert K. Massie", "1672", "1725", S.peter),
    B("Peter the Great: A Biography", "Lindsey Hughes", "1672", "1725", S.peter),
    B("Peter the Great", "Henri Troyat", "1672", "1725", S.peter),
    B("Catherine the Great: Portrait of a Woman", "Robert K. Massie", "1744", "1796", S.cath),
    B("Catherine the Great and Potemkin", "Simon Sebag Montefiore", "1762", "1796", S.cath),
    B("Catherine the Great: Love, Sex, and Power", "Virginia Rounding", "1744", "1796", S.cath),
    B("1812: Napoleon's Fatal March on Moscow", "Adam Zamoyski", "1812", "1813", S.nap),
    B("Russia Against Napoleon", "Dominic Lieven", "1807", "1814", S.nap),
    B("War and Peace", "Leo Tolstoy", "1805", "1820", S.nap, { fiction: true }),
    B("The Crimean War: A History", "Orlando Figes", "1853", "1856", S.nic1),
    B("Nicholas I: Emperor and Autocrat", "W. Bruce Lincoln", "1825", "1855", S.nic1),
    B("Russian Thinkers", "Isaiah Berlin", "1825", "1881", S.nic1),
    B("Alexander II: The Last Great Tsar", "Edvard Radzinsky", "1855", "1881", S.alex2),
    B("The Great Reforms", "W. Bruce Lincoln", "1855", "1881", S.alex2),
    B("The House of the Dead: Siberian Exile Under the Tsars", "Daniel Beer", "1801", "1917", S.alex2),
    B("Pogrom: Kishinev and the Tilt of History", "Steven J. Zipperstein", "1881", "1906", S.alex3),
    B("To the Edge of the World: The Trans-Siberian Railway", "Christian Wolmar", "1891", "1916", S.alex3),
    B("Nicholas and Alexandra", "Robert K. Massie", "1894", "1918", S.nic2),
    B("Nicholas II: Emperor of All the Russias", "Dominic Lieven", "1894", "1918", S.nic2),
    B("Rasputin: Faith, Power, and the Twilight of the Romanovs", "Douglas Smith", "1905", "1916", S.nic2),
    B("A People's Tragedy: The Russian Revolution 1891–1924", "Orlando Figes", "1891", "1924", S.ww1),
    B("The Russian Revolution: A New History", "Sean McMeekin", "1914", "1922", S.ww1),
    B("Ten Days That Shook the World", "John Reed", "1917-11", "1917-11", S.ww1),
    B("Russia: Revolution and Civil War, 1917–1921", "Antony Beevor", "1917", "1921", S.civil),
    B("The Russian Civil War", "Evan Mawdsley", "1918", "1921", S.civil),
    B("From Victoria to Vladivostok", "Benjamin Isitt", "1917", "1919", S.civil, { canadian: true }),
    B("Stalin: New Biography of a Dictator", "Oleg Khlevniuk", "1924", "1946", S.stalin),
    B("Stalin: The Court of the Red Tsar", "Simon Sebag Montefiore", "1929", "1946", S.stalin),
    B("Red Famine: Stalin's War on Ukraine", "Anne Applebaum", "1929", "1934", S.stalin),
    B("How the Cold War Began: The Igor Gouzenko Affair", "Amy Knight", "1945", "1946", S.stalin, { canadian: true }),
    B("The Russian Album", "Michael Ignatieff", "1859", "1928", S.personal, { canadian: true })
  ];

  window.DATASETS = window.DATASETS || {};
  window.DATASETS.russia = {
    id: "russia",
    kind: "thread",
    title: "Russia: Muscovy to Stalin",
    subtitle: "Thread · 1450–1946",
    range: ["1450-01-01", "1946-01-01"],
    startAt: "1480-11",
    note: "Amit's Notes of the History of the World/Russia — Muscovy to Stalin (1480–1941)",
    mapNote: "The muted backdrop is a period map at the nearest mapped date; its borders are approximate. Pins show where things happened and chapters zoom to the region.",
    lanes: [
      { id: "canada", label: "Canada & the Americas", pinned: true },
      { id: "russia", label: "Russia" },
      { id: "europe", label: "Europe" },
      { id: "asia", label: "Asia & the Middle East" }
    ],
    chapterRegions:{"ch-muscovy":"europe","ch-romanov-empire":"europe","ch-great-power":"europe","ch-revolution":"europe"},
    events, leaders, chapters, books,
    colours: {
      lanes: { canada: "#b22d2d", russia: "#b36b2e", europe: "#3f6e8c", asia: "#6b4f8c" },
      sides: { russia: "#b36b2e", soviet: "#8c3b3b", ottoman: "#6b8c3f", britain: "#3f6e8c", france: "#5d7fb0", china: "#a07a2e", usa: "#4f5f8c", germany: "#6b6b6b", canada: "#b22d2d" }
    },
    changelog: [{ date: "2026-10-04", text: "First version, from the vault note. Julian dates converted to Gregorian." }]
  };
})();
