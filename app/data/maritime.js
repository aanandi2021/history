// Maritime Asia 745–865: Bengal, Srivijaya, Java and Tang China — the world of Amit's novel "The Unseen Tomorrow".
// Hand-entered from the vault note
// "Amit's Notes of the History of the World/Maritime Asia — Bengal, Srivijaya and Java (750–850)".
// Almost every date before 900 is approximate; year-only dates are drawn as "c.".
// The "unseen" lane is FICTION: the protagonist's life from the novel's master reference, not history.
// Schema: specs/001-world-viewer/contracts/dataset.schema.json
(function () {
  const S = {
    before: "Before 750 — the sea road opens",
    pala: "Bengal and the Palas (750–850)",
    sri: "Srivijaya and the Strait of Malacca",
    java: "Java, the Sailendras and Borobudur",
    tang: "Tang China and the An Lushan rebellion",
    west: "Baghdad, Charlemagne and the far ends of the route",
    turtle: "Turtle Island in the same century",
    ships: "Ships and the monsoon",
    fic: "Amit's Fiction — The Unseen Tomorrow",
    acc: "Accuracy notes for the novel"
  };
  // Headings in the novel's research notes (Writing/The Unseen Tomorrow/)
  const NOVEL = "Writing/The Unseen Tomorrow/";
  const MR = {
    concept: "1. CORE CONCEPT & THEMES",
    timeline: "2. HISTORICAL TIMELINE (755-825 CE)",
    figures: "3. MAJOR HISTORICAL FIGURES",
    trade: "8. TRADE ROUTES & ECONOMICS",
    spirit: "9. SPIRITUAL FRAMEWORK (Buddhism)",
    love: "10. THE LOVE STORY ARC"
  };
  const LOC = (heading) => ({ note: NOVEL + "unseen_tomorrow_locations 1", heading });
  const SHIP = (heading) => ({ note: NOVEL + "unseen_tomorrow_maritime_technology", heading });

  const TAM = [87.92, 22.3], NAL = [85.44, 25.13], PAL = [104.75, -2.99], BOR = [110.2, -7.61], CAN = [113.26, 23.13],
    CHA = [108.94, 34.26], BAG = [44.36, 33.31], AAC = [6.08, 50.78], BEN = [88.6, 24.4];

  const E = (lane, date, title, at, extra) => Object.assign({ lane, date, title, at }, extra || {});

  const events = [
    // ---- Canada & the Americas (archaeology; every date approximate)
    E("canada", "0745", "Bison jumps at Head-Smashed-In", [-113.65, 49.73], { end: "0865", section: S.turtle, wiki: "Head-Smashed-In Buffalo Jump", text: "In use for thousands of years before and after this period. Hunters drove bison over the sandstone cliff west of today's Fort Macleod." }),
    E("canada", "0745", "Avonlea bow hunters on the northern Plains", [-104.6, 50.4], { end: "0865", section: S.turtle, wiki: "Avonlea culture", text: "Among the first people on the Plains to use the bow and arrow. Named for a site near Avonlea, Saskatchewan." }),
    E("canada", "0745", "Keatley Creek pithouse village", [-121.9, 50.8], { end: "0865", section: S.turtle, wiki: "Keatley Creek Archaeological Site", text: "A large winter village of pithouses near Lillooet, BC, supported by the Fraser River salmon runs." }),
    E("canada", "0750", "Maize grown in southern Ontario", [-79.9, 43.27], { end: "0850", section: S.turtle, wiki: "Princess Point complex", text: "The Princess Point people, near today's Hamilton, were among the first farmers in what is now Canada." }),
    E("canada", "0750", "Late Dorset people in the eastern Arctic", [-68.5, 63.75], { end: "0865", section: S.turtle, wiki: "Dorset culture", text: "The Thule, ancestors of the Inuit, would not arrive from Alaska for another three or four centuries." }),
    E("canada", "0799", "Palenque's last dated inscription", [-92.05, 17.48], { section: S.turtle, wiki: "Palenque", text: "One of the great Classic Maya cities falls silent. The collapse spreads across the southern lowlands over the next century." }),
    E("canada", "0790", "Bonampak murals painted", [-91.07, 16.7], { section: S.turtle, wiki: "Bonampak", text: "The best-preserved Maya murals: a battle, its captives, and a court celebration." }),
    E("canada", "0822", "Copán's last dated monument", [-89.14, 14.84], { section: S.turtle, wiki: "Copán", text: "An unfinished altar is the last record of the Maya kings of Copán." }),
    E("canada", "0847", "White River Ash eruption", [-141.1, 61.6], { section: S.turtle, wiki: "White River Ash", text: "A huge eruption near the Alaska–Yukon border blankets the southern Yukon and the Northwest Territories in ash. Usually dated around 833–850. Some archaeologists link it to the Dene (Athapaskan) movement south, ancestors of the Navajo and Apache." }),
    E("canada", "0850", "First great houses at Chaco Canyon", [-107.96, 36.06], { section: S.turtle, wiki: "Pueblo Bonito", text: "Building begins at Pueblo Bonito in today's New Mexico." }),

    // ---- Bengal & India
    E("india", "0750", "Gopala chosen king of Bengal", BEN, { section: S.pala, wiki: "Gopala", text: "Local chiefs pick him to end a long stretch of disorder, the 'law of the fish'. The start of the Pala dynasty." }),
    E("india", "0756", "Kailasa temple at Ellora begun", [75.18, 20.02], { section: S.pala, wiki: "Kailasa temple, Ellora", text: "The Rashtrakutas carve a whole temple down into the rock, from the top. The Palas' great rivals in the Deccan." }),
    E("india", "0750", "Nalanda at its height", NAL, { end: "0865", section: S.pala, wiki: "Nalanda mahavihara", fic: LOC("2. NALANDA (Bihar, Northeast India)"),
      aha: [{ book: "golden-road", heading: "Nalanda" }],
      text: "The great Buddhist university, with thousands of monks and students from China, Tibet, Korea and Southeast Asia." }),
    E("india", "0750", "Tamralipta, the old port of Bengal", TAM, { end: "0865", section: S.pala, wiki: "Tamralipta", fic: LOC("1. TAMRALIPTA (Modern Tamluk, West Bengal)"), text: "The protagonist's home port. Its river channels were silting up, and its trade was slowly moving elsewhere." }),
    E("india", "0783", "Dharmapala founds Vikramashila", [87.28, 25.32], { approx: true, section: S.pala, wiki: "Vikramashila", text: "A second great Buddhist university on the Ganges. Dated anywhere from the 780s to about 810." }),
    E("india", "0790", "Somapura Mahavihara built", [88.98, 25.03], { section: S.pala, wiki: "Somapura Mahavihara", text: "Dharmapala's vast monastery at Paharpur, now in Bangladesh. Its stepped plan may have influenced Javanese temples." }),
    E("india", "0800", "Dharmapala installs his man at Kannauj", [79.92, 27.05], { section: S.pala, wiki: "Kannauj triangle", text: "The three-way war for Kannauj, the prize city of the north, between the Palas, Pratiharas and Rashtrakutas." }),
    E("india", "0860", "Balaputra's monastery at Nalanda", NAL, { section: S.pala, wiki: "Nalanda copper plate of Devapala", fic: MR.figures, text: "A Sailendra prince ruling Srivijaya pays for a monastery at Nalanda, and the Pala king grants villages to support it. The hard evidence for the Bengal–Java link." }),

    // ---- Java, Srivijaya & mainland Southeast Asia
    E("sea", "0745", "Srivijaya controls the straits", PAL, { end: "0865", section: S.sri, wiki: "Srivijaya", text: "From Palembang, Srivijaya taxes every ship between India and China." }),
    E("sea", "0767", "Raiders from 'Java' attack Tonkin", [105.85, 21.03], { section: S.java, wiki: "Sailendra dynasty", text: "Chinese records describe raiders from the islands attacking Tang-ruled northern Vietnam." }),
    E("sea", "0774", "Javanese raid on Champa (Nha Trang)", [109.2, 12.27], { section: S.java, wiki: "Po Nagar", text: "Raiders burn the temple of Po Nagar. A Cham inscription calls them dark, thin men who came by ship." }),
    E("sea", "0775", "Ligor inscription", [99.96, 8.43], { section: S.sri, wiki: "Ligor inscription", text: "A Srivijayan king records building Buddhist shrines on the Malay Peninsula." }),
    E("sea", "0778", "Kalasan temple granted to Tara", [110.47, -7.77], { section: S.java, wiki: "Kalasan", text: "Panangkaran's inscription, in Sanskrit with an early Javanese script. The earliest dated Sailendra building." }),
    E("sea", "0780", "Borobudur rises", BOR, { end: "0833", section: S.java, wiki: "Borobudur", fic: LOC("4. CENTRAL JAVA - BOROBUDUR REGION"), text: "About fifty years of building. A stone mountain of terraces, 2,672 relief panels and 504 Buddhas. Exact dates unknown." }),
    E("sea", "0787", "Javanese raid on Champa (Phan Rang)", [108.99, 11.56], { section: S.java, wiki: "Champa" }),
    E("sea", "0792", "Candi Sewu (Manjusrigrha) completed", [110.49, -7.74], { section: S.java, wiki: "Sewu", text: "The second-largest Buddhist temple complex in Java, near Prambanan." }),
    E("sea", "0802", "Jayavarman II declares Cambodia free of 'Java'", [104.1, 13.56], { section: S.java, wiki: "Jayavarman II",
      aha: [{ book: "golden-road", heading: "Indianised kingdoms of Southeast Asia and Angkor" }],
      text: "On Phnom Kulen he is consecrated universal king. The traditional start of the Angkor empire." }),
    E("sea", "0824", "Karangtengah inscription", [110.25, -7.45], { section: S.java, wiki: "Samaratungga", fic: MR.figures, text: "Samaratungga's daughter Pramodhawardhani dedicates a Buddhist sanctuary." }),
    E("sea", "0830", "The Belitung wreck", [107.6, -2.6], { section: S.ships, wiki: "Belitung shipwreck", fic: SHIP("THE BOROBUDUR CARVING - WHAT IT SHOWS"), text: "An Arab-style sewn ship sinks off Belitung carrying about 60,000 pieces of Chinese pottery, plus gold and silver. Found in 1998." }),
    E("sea", "0856", "Prambanan dedicated", [110.49, -7.75], { section: S.java, wiki: "Prambanan", text: "The Shivagrha inscription marks the great Hindu temple near Borobudur, and the Sanjaya line's ascendancy in Central Java." }),

    // ---- Tang China & East Asia
    E("china", "0751-07", "Battle of Talas", [72.3, 42.5], { section: S.before, wiki: "Battle of Talas", text: "An Abbasid army defeats the Tang in Central Asia. The story that Chinese prisoners taught papermaking to the Arabs comes from here." }),
    E("china", "0755-12-16", "An Lushan rebels", [116.4, 39.9], { end: "0763-02-17", section: S.tang, wiki: "An Lushan rebellion", text: "A frontier general marches on the capital. Eight years of war. The Tang survive but never fully recover." }),
    E("china", "0756-07-15", "Yang Guifei killed at Mawei", [108.3, 34.3], { section: S.tang, wiki: "Yang Guifei", text: "Fleeing the capital, the emperor's soldiers make him order the death of his beloved consort. One of the great stories of Chinese poetry." }),
    E("china", "0758", "Canton sacked by Arab and Persian merchants", CAN, { section: S.tang, wiki: "Guangzhou", fic: LOC("5. CANTON/GUANGZHOU (Tang Dynasty China)"), text: "Foreign traders loot and burn the city and leave by sea. Trade returned within years." }),
    E("china", "0762", "Li Bai dies", [118.0, 31.3], { section: S.tang, wiki: "Li Bai" }),
    E("china", "0763-11", "Tibetans occupy Chang'an", CHA, { section: S.tang, wiki: "Tibetan Empire", text: "For about two weeks. Tibet is at the height of its power." }),
    E("china", "0770", "Du Fu dies", [112.9, 28.2], { section: S.tang, wiki: "Du Fu" }),
    E("china", "0779", "Samye, Tibet's first monastery", [91.5, 29.33], { section: S.acc, wiki: "Samye", text: "Founded by Trisong Detsen with the Indian teachers Shantarakshita and Padmasambhava, about 775–779." }),
    E("china", "0794", "Heian-kyō (Kyoto) founded", [135.77, 35.01], { section: S.java, wiki: "Heian-kyō" }),
    E("china", "0804", "Kūkai sails to Tang China", CHA, { section: S.tang, wiki: "Kūkai", text: "The Japanese monk studies esoteric Buddhism in Chang'an, the same school then flourishing in Bengal and Java." }),
    E("china", "0822", "Tang–Tibet peace treaty", [91.13, 29.65], { section: S.tang, wiki: "Sino-Tibetan treaty of 821–822", text: "Recorded on a stone pillar still standing in Lhasa." }),
    E("china", "0845", "Huichang persecution of Buddhism", CHA, { section: S.tang, wiki: "Great Anti-Buddhist Persecution", text: "Thousands of monasteries are closed and their bronze melted down. Foreign religions are suppressed." }),

    // ---- Islamic world & Europe
    E("west", "0750-01-25", "Abbasids overthrow the Umayyads", [43.4, 36.0], { section: S.west, wiki: "Battle of the Zab" }),
    E("west", "0751", "Pepin crowned king of the Franks", [2.43, 49.38], { section: S.west, wiki: "Pepin the Short" }),
    E("west", "0756", "Umayyad emirate of Córdoba", [-4.78, 37.88], { section: S.west, wiki: "Emirate of Córdoba", text: "A surviving Umayyad prince founds a separate state in Spain." }),
    E("west", "0762-07-30", "Baghdad founded", BAG, { section: S.west, wiki: "Baghdad", text: "Al-Mansur's round city on the Tigris." }),
    E("west", "0750", "Siraf and Basra ships sail to Canton", [52.3, 27.67], { end: "0865", section: S.ships, wiki: "Siraf", fic: MR.trade, text: "The Persian Gulf ports where the novel's dhows come from." }),
    E("west", "0793-06-08", "Vikings raid Lindisfarne", [-1.8, 55.67], { section: S.west, wiki: "Lindisfarne" }),
    E("west", "0800-12-25", "Charlemagne crowned emperor", [12.45, 41.9], { section: S.west, wiki: "Charlemagne" }),
    E("west", "0802", "Harun's elephant reaches Aachen", AAC, { section: S.west, wiki: "Abul-Abbas", text: "Abul-Abbas, a gift from Harun al-Rashid to Charlemagne." }),
    E("west", "0820", "Al-Khwarizmi writes on algebra", BAG, { section: S.west, wiki: "Muhammad ibn Musa al-Khwarizmi",
      aha: [{ book: "golden-road", heading: "Indian numerals reaching Baghdad" }],
      text: "In Baghdad. His book on Indian numerals carried them to the West. 'Algorithm' comes from his name." }),
    E("west", "0843-08", "Treaty of Verdun", [5.38, 49.16], { section: S.west, wiki: "Treaty of Verdun", text: "Charlemagne's grandsons split his empire, roughly into France and Germany." }),

    // ---- The Unseen Tomorrow (FICTION — Amit's novel, from the master reference timeline)
    E("unseen", "0755", "The protagonist is born in Tamralipta", TAM, { id: "ut-birth", section: S.fic, fic: MR.timeline }),
    E("unseen", "0765", "First meeting with Dyah Ayu", null, { id: "ut-ayu-1", section: S.fic, fic: MR.love, text: "Childhood friendship with the Javanese princess. He is ten." }),
    E("unseen", "0773", "Joins a Chinese captain's ship", TAM, { id: "ut-ship", section: S.fic, fic: SHIP("PROTAGONIST'S SHIPYARD (Eventually)"), text: "Age 18. The start of his sailing life." }),
    E("unseen", "0775", "Studies briefly at Nalanda", NAL, { id: "ut-nalanda", section: S.acc, fic: MR.timeline, text: "Age 20. In the notes he meets Shantarakshita here, who was probably in Tibet by then. See the accuracy notes." }),
    E("unseen", "0778", "Hears of Borobudur; first donation", BOR, { id: "ut-first-gift", section: S.fic, fic: MR.timeline }),
    E("unseen", "0780", "Trading licence from Dharmapala", BEN, { id: "ut-licence", section: S.fic, fic: MR.figures, text: "Official merchant status under the Palas." }),
    E("unseen", "0785", "Meets the young Samaratungga", BOR, { id: "ut-samaratungga", section: S.fic, fic: MR.figures }),
    E("unseen", "0790", "Prime trading years", PAL, { id: "ut-prime", end: "0810", section: S.fic, fic: MR.trade, text: "Peak wealth, and the major Borobudur donations." }),
    E("unseen", "0790", "Home rich; Dyah Ayu is married", TAM, { id: "ut-ayu-2", section: S.fic, fic: MR.love, text: "The heartbreak reunion." }),
    E("unseen", "0805", "Last meeting with Dyah Ayu", BOR, { id: "ut-ayu-3", section: S.fic, fic: MR.love, text: "Both older, both alone. Acceptance." }),
    E("unseen", "0815", "Final funding push for Borobudur", BOR, { id: "ut-final-push", section: S.fic, fic: MR.timeline }),
    E("unseen", "0825", "Last pilgrimage to Borobudur", BOR, { id: "ut-pilgrimage", section: S.fic, fic: MR.spirit, text: "Age 70. He sees his ship carved in stone." })
  ];

  const R = (name, country, side, start, end, section, extra) =>
    Object.assign({ name, country, side, start, end, wiki: name, lifeUnknown: true }, section ? { section } : {}, extra || {});
  const T = (name, born, died, start, end, extra) =>
    Object.assign({ name, country: "Tang China", side: "tang", born, died, start, end, section: S.tang, wiki: name }, extra || {});
  const A = (name, born, died, start, end, extra) =>
    Object.assign({ name, country: "Abbasid Caliphate", side: "abbasid", born, died, start, end, section: S.west, wiki: name }, extra || {});

  const leaders = [
    R("Gopala", "Pala Bengal", "pala", "0750", "0770", S.pala, { wiki: "Gopala (Pala dynasty)" }),
    R("Dharmapala", "Pala Bengal", "pala", "0770", "0810", S.pala, { wiki: "Dharmapala (emperor)", fic: MR.figures }),
    R("Devapala", "Pala Bengal", "pala", "0810", "0850", S.pala, { wiki: "Devapala (Pala dynasty)" }),
    R("Panangkaran", "Sailendra Java", "sailendra", "0760", "0780", S.java, { wiki: "Panangkaran", fic: MR.figures }),
    R("Samaratungga", "Sailendra Java", "sailendra", "0792", "0835", S.java, { fic: MR.figures, text: "Reign dates are uncertain. The novel's notes use 790–838." }),
    { name: "Trisong Detsen", country: "Tibetan Empire", side: "tibet", born: "0742", died: "0800", start: "0755", end: "0797", section: S.acc, wiki: "Trisong Detsen" },
    T("Xuanzong", "0685", "0762", "0712", "0756", { wiki: "Emperor Xuanzong of Tang" }),
    T("Suzong", "0711", "0762", "0756", "0762", { wiki: "Emperor Suzong of Tang" }),
    T("Daizong", "0726", "0779", "0762", "0779", { wiki: "Emperor Daizong of Tang" }),
    T("Dezong", "0742", "0805", "0779", "0805", { wiki: "Emperor Dezong of Tang" }),
    T("Xianzong", "0778", "0820", "0805", "0820", { wiki: "Emperor Xianzong of Tang" }),
    T("Muzong", "0795", "0824", "0820", "0824", { wiki: "Emperor Muzong of Tang" }),
    T("Wenzong", "0809", "0840", "0827", "0840", { wiki: "Emperor Wenzong of Tang" }),
    T("Wuzong", "0814", "0846", "0840", "0846", { wiki: "Emperor Wuzong of Tang" }),
    T("Xuānzong", "0810", "0859", "0846", "0859", { wiki: "Emperor Xuānzong of Tang" }),
    A("al-Saffah", "0721", "0754", "0750", "0754"),
    A("al-Mansur", "0714", "0775", "0754", "0775"),
    A("al-Mahdi", "0744", "0785", "0775", "0785"),
    A("Harun al-Rashid", "0766", "0809", "0786", "0809"),
    A("al-Ma'mun", "0786", "0833", "0813", "0833"),
    A("al-Mutawakkil", "0822", "0861", "0847", "0861"),
    { name: "Charlemagne", country: "Franks", side: "franks", born: "0748", died: "0814-01-28", start: "0768-10-09", end: "0814-01-28", section: S.west, wiki: "Charlemagne" },
    { name: "Louis the Pious", country: "Franks", side: "franks", born: "0778", died: "0840-06-20", start: "0814-01-28", end: "0840-06-20", section: S.west, wiki: "Louis the Pious" }
  ];

  const chapters = [
    { title: "The monsoon road", start: "0745", end: "0865", bbox: [[40, -12], [125, 35]], section: S.ships, fic: MR.trade,
      aha: [{ book: "golden-road", heading: "Indian Ocean monsoon trade and Muziris" }],
      text: "Ships sail from the Persian Gulf to Canton and back, riding the southwest monsoon out in summer and the northeast monsoon home in winter. A round trip takes about two years, with long waits in port for the wind to turn. Arab, Persian, Indian, Malay and Chinese merchants all share the route." },
    { title: "The An Lushan rebellion", parent: "ch-the-monsoon-road", start: "0755-12-16", end: "0763-02-17", bbox: [[100, 28], [122, 42]], section: S.tang, text: "In 755 the general An Lushan rebels against the Tang emperor and takes both capitals. The war lasts until 763 and may kill millions. The Tang survive, but they are weaker, the Tibetans briefly take Chang'an, and the court comes to depend more on southern ports and sea trade." },
    { title: "Pala Bengal and Nalanda", parent: "ch-the-monsoon-road", start: "0750", end: "0850", bbox: [[78, 19], [93, 28.5]], section: S.pala, fic: LOC("2. NALANDA (Bihar, Northeast India)"), text: "Around 750 the nobles of Bengal choose Gopala as king, ending decades of chaos, and his Pala dynasty rules for four centuries. The Palas are Buddhist patrons: Nalanda is at its height and Dharmapala founds Vikramashila. Monks and pilgrims travel from Bengal to Java, Tibet and China." },
    { title: "The Strait of Malacca", parent: "ch-the-monsoon-road", start: "0745", end: "0865", bbox: [[94, -7], [110, 9]], section: S.sri, text: "Srivijaya, based at Palembang on Sumatra, controls the Strait of Malacca and the Sunda Strait. Every ship between India and China passes its ports and pays. It is a sea empire of harbours and alliances more than of land." },
    { title: "Raiders from Java", parent: "ch-the-strait-of-malacca", start: "0767", end: "0802", bbox: [[98, -9], [112, 23]], section: S.java, text: "Fleets from Java raid the coasts of Vietnam and Champa in 767, 774 and 787, burning temples. The raids show how far the Sailendra kings of Java can reach by sea." },
    { title: "Building Borobudur", parent: "ch-the-strait-of-malacca", start: "0780", end: "0833", bbox: [[105.5, -9], [115, -5]], section: S.java, fic: LOC("4. CENTRAL JAVA - BOROBUDUR REGION"), text: "The Sailendras build Borobudur in central Java from about 780 to 833. It is a stepped Buddhist monument carved with more than 2,600 relief panels, including ships of the kind that sailed the monsoon road. The Hindu temples of Prambanan rise nearby a few decades later." },
    { title: "Abbasid Baghdad", parent: "ch-the-monsoon-road", start: "0762", end: "0833", bbox: [[30, 22], [60, 40]], section: S.west, text: "The Abbasid caliph al-Mansur founds Baghdad in 762 as a round city on the Tigris. Under Harun al-Rashid and al-Ma'mun it becomes perhaps the largest city in the world, with a House of Wisdom for translation. Ships from Basra and Siraf carry its trade to India and China." },
    { title: "Charlemagne's Europe", start: "0768", end: "0843", bbox: [[-10, 38], [20, 57]], section: S.west, text: "Charlemagne becomes king of the Franks in 768 and emperor in 800. His empire covers most of western Europe, and his court sends embassies to Harun al-Rashid, who sends back an elephant. His grandsons divide the empire at Verdun in 843, while Vikings begin raiding the coasts." },
    { title: "Turtle Island", start: "0745", end: "0865", bbox: [[-170, 10], [-50, 72]], section: S.turtle, text: "In what is now Canada, bison hunters drive herds over the cliffs at Head-Smashed-In, and people on the northern Plains take up the bow and arrow. Maize is being grown in southern Ontario, and Late Dorset people live in the eastern Arctic. Far to the south the Classic Maya cities are near their end." },
    { title: "The Unseen Tomorrow: the protagonist's sea", parent: "ch-the-monsoon-road", start: "0755", end: "0825", bbox: [[78, -10], [116, 27]], section: S.fic, fic: MR.concept, text: "Amit's novel. The protagonist's sea runs from Tamralipta in Bengal to Palembang, Borobudur and on to Canton. The fiction lane on the timeline marks where the story sits, and it isn't history." }
  ];

  const B = (title, author, start, end, section, extra) => Object.assign({ title, author, start, end, owned: false }, section ? { section } : {}, extra || {});
  const books = [
    B("The Golden Road: How Ancient India Transformed the World", "William Dalrymple", "0745", "0865", null, { owned: true, calibreId: 193 }),
    B("Empire of the Winds", "Philip Bowring", "0745", "0865", null),
    B("The Year 1000", "Valerie Hansen", "0800", "0865", null),
    B("A History of Ancient and Early Medieval India", "Upinder Singh", "0745", "0865", S.pala),
    B("India, China, and the World: A Connected History", "Tansen Sen", "0745", "0865", S.pala),
    B("What the Buddha Taught", "Walpola Rahula", "0745", "0865", S.pala),
    B("A History of Early Southeast Asia", "Kenneth R. Hall", "0745", "0865", S.sri),
    B("Early Indonesian Commerce", "O. W. Wolters", "0745", "0865", S.sri),
    B("Buddhism, Diplomacy, and Trade", "Tansen Sen", "0745", "0865", S.sri),
    B("Borobudur: Golden Tales of the Buddhas", "John Miksic", "0780", "0833", S.java),
    B("Borobudur", "Jean-Louis Nou and Louis Frédéric", "0780", "0833", S.java),
    B("China's Cosmopolitan Empire: The Tang Dynasty", "Mark Edward Lewis", "0745", "0865", S.tang),
    B("China's Golden Age: Everyday Life in the Tang Dynasty", "Charles Benn", "0745", "0865", S.tang),
    B("The Golden Peaches of Samarkand", "Edward H. Schafer", "0745", "0865", S.tang),
    B("When Baghdad Ruled the Muslim World", "Hugh Kennedy", "0750", "0865", S.west),
    B("The House of Wisdom", "Jim al-Khalili", "0762", "0865", S.west),
    B("Charlemagne", "Johannes Fried", "0748", "0814", S.west),
    B("Canada's First Nations", "Olive Dickason", "0745", "0865", S.turtle, { canadian: true }),
    B("1491", "Charles C. Mann", "0745", "0865", S.turtle),
    B("I Have Lived Here Since the World Began", "Arthur J. Ray", "0745", "0865", S.turtle, { canadian: true }),
    B("Trade and Civilisation in the Indian Ocean", "K. N. Chaudhuri", "0750", "0865", S.ships, { owned: true, calibreId: 229 }),
    B("Shipwrecked: Tang Treasures and Monsoon Winds", "Regina Krahl and others", "0826", "0834", S.ships),
    B("The Sea and Civilization", "Lincoln Paine", "0745", "0865", S.ships),
    // Amit's own writing. Not a published book: links go to the vault, not Calibre or the library.
    B("The Unseen Tomorrow", "Amit Nandi", "0755", "0832", S.fic, {
      id: "amits-unseen-tomorrow", amits: true, fiction: true,
      note: NOVEL + "the_unseen_tomorrow_MASTER_REFERENCE", heading: MR.concept,
      text: "Amit's novel in progress. A boy from Tamralipta becomes a shipbuilder and merchant and helps pay for Borobudur. Research notes are in Writing/The Unseen Tomorrow."
    })
  ];

  window.DATASETS = window.DATASETS || {};
  window.DATASETS.maritime = {
    id: "maritime",
    kind: "thread",
    title: "Maritime Asia: Bengal, Srivijaya and Java",
    subtitle: "Thread · 745–865 · The Unseen Tomorrow",
    range: ["0745-01-01", "0865-01-01"],
    startAt: "0755",
    precision: "year",
    note: "Amit's Notes of the History of the World/Maritime Asia — Bengal, Srivijaya and Java (750–850)",
    mapNote: "No historical borders. Today's countries are a backdrop. Most dates before 900 are approximate, and the green lane is Amit's fiction, not history.",
    lanes: [
      { id: "canada", label: "Canada & the Americas", pinned: true },
      { id: "india", label: "Bengal & India" },
      { id: "sea", label: "Java, Srivijaya & SE Asia" },
      { id: "china", label: "Tang China & East Asia" },
      { id: "west", label: "Baghdad & Europe" },
      { id: "unseen", label: "The Unseen Tomorrow (Amit's fiction)", fiction: true }
    ],
    events, leaders, chapters, books,
    plates: [{ id: "maritime-monsoon", title: "The monsoon road", start: "0750", end: "0850" }],
    colours: {
      lanes: { canada: "#b22d2d", india: "#c07a2a", sea: "#2f7f8c", china: "#a0452e", west: "#5d6f9c", unseen: "#2e7d6b" },
      sides: { pala: "#c07a2a", sailendra: "#2f7f8c", tang: "#a0452e", abbasid: "#3f7a4a", franks: "#5d6f9c", tibet: "#8c5d9c" }
    },
    changelog: [{ date: "2026-10-04", text: "First version, from the vault note and the Unseen Tomorrow master reference. Fiction lane added." }]
  };
})();
