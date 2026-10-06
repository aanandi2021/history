// Ancient world 1800 BC-AD 500: Hammurabi, Han China and Rome.
// BC years use historical numbering with a minus sign and no year 0: "-0218" is 218 BC.
// Schema: specs/001-world-viewer/contracts/dataset.schema.json
(function () {
  const S = {
    canada: "Canada and the Americas before AD 500",
    hamm: "Mesopotamia in the age of Hammurabi",
    han: "Han China",
    rome: "Rome, from city to empire",
    italy: "Rome conquers Italy",
    punic: "The Punic Wars",
    hannibal: "Hannibal's war",
    republic: "The end of the republic",
    caesar: "Caesar in Gaul",
    pax: "The empire at its height",
    fall: "The fall of the West",
    aug: "Augustus and the Principate",
    high: "The high empire and its frontiers",
    late: "Late antiquity",
    church: "Christianity and the migrations",
    india: "India and Persia"
  };

  const E = (lane, date, title, at, extra) => Object.assign({ lane, date, title, at }, extra || {});
  const events = [
    E("canada", "-1800", "Dorset ancestors in the Arctic", [-75, 67], { approx: true, section: S.canada, wiki: "Pre-Dorset culture", text: "Early Arctic small-tool traditions spread across what is now northern Canada before the later Dorset culture." }),
    E("canada", "-1800", "Caral and Norte Chico cities", [-77.52, -10.89], { approx: true, section: S.canada, wiki: "Norte Chico civilization", text: "Large ceremonial centres on the Peruvian coast flourished while Old Babylonian kings ruled in Mesopotamia." }),
    E("canada", "-1700", "Head-Smashed-In in long use", [-113.65, 49.73], { approx: true, end: "0500", section: S.canada, wiki: "Head-Smashed-In Buffalo Jump", text: "Plains hunters used this bison jump for thousands of years, including the whole ancient period covered here." }),
    E("canada", "-1600", "Poverty Point earthworks begin", [-91.41, 32.64], { approx: true, section: S.canada, wiki: "Poverty Point", text: "A major earthwork and exchange centre took shape in the lower Mississippi valley." }),
    E("canada", "-1500", "Maritime Archaic burials in Labrador", [-55.6, 53.7], { approx: true, section: S.canada, wiki: "Maritime Archaic", text: "Communities on the Atlantic coast left rich burials and a long record of sea-oriented life." }),
    E("canada", "-1200", "Olmec centre at San Lorenzo", [-94.76, 17.65], { approx: true, section: S.canada, wiki: "San Lorenzo Tenochtitlan", text: "The Olmec heartland on the Gulf Coast raised colossal heads and large ceremonial platforms." }),
    E("canada", "-1000", "Dorset culture in the eastern Arctic", [-68.5, 63.75], { approx: true, end: "0500", section: S.canada, wiki: "Dorset culture", text: "Dorset people lived across the eastern Arctic before the later Thule Inuit expansion." }),
    E("canada", "-0900", "Adena mounds in the Ohio valley", [-82.98, 39.33], { approx: true, section: S.canada, wiki: "Adena culture", text: "Adena communities built burial mounds and exchange networks south of the Great Lakes." }),
    E("canada", "-0500", "Laurel and Point Peninsula worlds", [-89.25, 48.38], { approx: true, end: "0500", section: S.canada, wiki: "Laurel complex", text: "Woodland communities around the upper Great Lakes and Ontario used pottery, burial mounds and river routes." }),
    E("canada", "-0400", "Hopewell exchange network", [-83.0, 39.4], { approx: true, end: "0400", section: S.canada, wiki: "Hopewell tradition", text: "Copper, mica, shells and stone moved through a wide ceremonial network reaching toward the Great Lakes." }),
    E("canada", "0100", "Teotihuacan begins to dominate central Mexico", [-98.83, 19.69], { approx: true, end: "0500", section: S.canada, wiki: "Teotihuacan", text: "The great planned city near today's Mexico City became one of the largest cities in the world." }),
    E("canada", "0300", "Bow and pottery spread in parts of Canada", [-80.0, 44.0], { approx: true, section: S.canada, wiki: "Woodland period", text: "Woodland technologies and exchange patterns reached across the Great Lakes and St. Lawrence regions." }),

    E("neareast", "-1792", "Hammurabi becomes king of Babylon", [44.42, 32.54], { section: S.hamm, wiki: "Hammurabi", text: "He inherited a small kingdom and turned Babylon into the leading power in southern Mesopotamia." }),
    E("neareast", "-1761", "Hammurabi defeats Mari", [40.89, 34.55], { approx: true, section: S.hamm, wiki: "Mari, Syria", text: "Mari on the Euphrates was a rich palace city and a key rival before Babylon took it." }),
    E("neareast", "-1755", "Code of Hammurabi set up", [44.42, 32.54], { approx: true, section: S.hamm, wiki: "Code of Hammurabi", text: "The famous law stele presented the king as a just ruler under Shamash." }),
    E("neareast", "-1595", "Hittites sack Babylon", [44.42, 32.54], { approx: true, section: S.hamm, wiki: "Sack of Babylon", text: "The Old Babylonian dynasty ended after a long decline and a Hittite raid from Anatolia." }),
    E("neareast", "-0539", "Cyrus takes Babylon", [44.42, 32.54], { section: S.india, wiki: "Fall of Babylon", text: "Persia absorbed the great Mesopotamian city and its empire." }),
    E("neareast", "-0331", "Alexander wins at Gaugamela", [43.36, 36.36], { section: S.india, wiki: "Battle of Gaugamela", text: "The Macedonian victory broke the Achaemenid empire." }),
    E("neareast", "-0247", "Parthia emerges", [57.0, 37.0], { approx: true, section: S.india, wiki: "Parthian Empire", text: "Parthia became Rome's eastern rival after the Seleucid empire weakened." }),
    E("neareast", "0224", "Sasanian Persia replaces Parthia", [52.53, 29.62], { section: S.india, wiki: "Sasanian Empire", text: "The Sasanians made Persia a sharper, more centralized rival to Rome." }),

    E("india", "-0326", "Alexander reaches India", [72.14, 32.82], { section: S.india, wiki: "Battle of the Hydaspes", text: "Alexander defeated Porus at the Hydaspes, then his army refused to march farther east." }),
    E("india", "-0321", "Chandragupta founds the Mauryan empire", [85.14, 25.61], { approx: true, section: S.india, wiki: "Chandragupta Maurya", text: "The Mauryas built the first large empire across much of the subcontinent." }),
    E("india", "-0261", "Ashoka's Kalinga war", [85.82, 20.27], { approx: true, section: S.india, wiki: "Kalinga War", text: "Ashoka's remorse after Kalinga became part of his Buddhist imperial message." }),
    E("india", "-0250", "Ashoka's edicts", [77.58, 12.95], { approx: true, section: S.india, wiki: "Edicts of Ashoka",
      aha: [{ book: "golden-road", heading: "Ashoka's edicts" }],
      text: "Rock and pillar edicts carried royal orders and moral teaching across the Mauryan empire." }),

    E("china", "-0221", "Qin Shi Huang unifies China", [108.94, 34.26], { section: S.han, wiki: "Qin Shi Huang", text: "Qin rule was brief but left the model of empire the Han inherited." }),
    E("china", "-0206", "Liu Bang founds the Han", [108.94, 34.26], { section: S.han, wiki: "Emperor Gaozu of Han", text: "The Han dynasty began after the collapse of Qin and a civil war." }),
    E("china", "-0141", "Emperor Wu takes the throne", [108.94, 34.26], { section: S.han, wiki: "Emperor Wu of Han", text: "Wudi expanded Han power into the Hexi Corridor, Korea, Vietnam and Central Asia." }),
    E("china", "-0138", "Zhang Qian sent west", [108.94, 34.26], { section: S.han, wiki: "Zhang Qian",
      aha: [{ book: "golden-road", heading: "Buddhism along the Silk Road to China" }],
      text: "His missions opened Han knowledge of Central Asia and the routes later called the Silk Road." }),
    E("china", "-0119", "Han campaigns against the Xiongnu", [100.0, 40.0], { section: S.han, wiki: "Han-Xiongnu War", text: "Han armies pushed into the steppe and secured the Gansu corridor." }),
    E("china", "0009", "Wang Mang seizes power", [108.94, 34.26], { section: S.han, wiki: "Wang Mang", text: "His Xin dynasty interrupted Han rule." }),
    E("china", "0025", "Eastern Han restored at Luoyang", [112.45, 34.62], { section: S.han, wiki: "Eastern Han", text: "The restored dynasty ruled from Luoyang after the civil war." }),
    E("china", "0184", "Yellow Turban rebellion", [114.3, 35.0], { section: S.han, wiki: "Yellow Turban Rebellion", text: "A huge religious rebellion exposed the weakness of the late Han state." }),
    E("china", "0220", "Han dynasty ends", [112.45, 34.62], { section: S.han, wiki: "End of the Han dynasty", text: "The last emperor abdicated, and China entered the Three Kingdoms period." }),

    E("med", "-0509", "Roman Republic traditionally begins", [12.5, 41.9], { approx: true, section: S.italy, wiki: "Roman Republic", text: "Romans later remembered this as the expulsion of the kings and the beginning of consular government." }),
    E("med", "-0390", "Gauls sack Rome", [12.5, 41.9], { approx: true, section: S.italy, wiki: "Battle of the Allia", text: "The sack became one of Rome's lasting memories of danger from the north." }),
    E("med", "-0338", "Latin League settlement", [12.5, 41.9], { section: S.italy, wiki: "Latin War", text: "Rome dissolved the Latin League and bound nearby communities to itself in different legal statuses." }),
    E("med", "-0312", "Via Appia begun", [12.5, 41.9], { section: S.italy, wiki: "Appian Way", text: "The road ran south from Rome and supported war and settlement in Italy." }),
    E("med", "-0290", "Samnite wars end", [14.78, 41.13], { section: S.italy, wiki: "Samnite Wars", text: "Rome became the leading power in central Italy after decades of war." }),
    E("med", "-0272", "Tarentum falls to Rome", [17.24, 40.46], { section: S.italy, wiki: "Pyrrhic War", text: "After fighting Pyrrhus, Rome controlled southern Italy south of the Po." }),
    E("med", "-0264", "First Punic War begins", [14.0, 37.6], { section: S.punic, wiki: "First Punic War", text: "Rome crossed to Sicily and fought Carthage for control of the western Mediterranean." }),
    E("med", "-0241", "Rome wins Sicily", [14.0, 37.6], { section: S.punic, wiki: "Battle of the Aegates", text: "Carthage lost Sicily after defeat at sea." }),
    E("med", "-0218", "Hannibal leaves New Carthage", [-0.98, 37.6], { section: S.hannibal, wiki: "Hannibal", text: "Hannibal marched from Spain toward Italy at the start of the Second Punic War." }),
    E("med", "-0216-08-02", "Cannae", [16.15, 41.3], { section: S.hannibal, wiki: "Battle of Cannae", text: "Hannibal destroyed a much larger Roman army in southern Italy." }),
    E("med", "-0202-10", "Zama", [9.9, 36.2], { section: S.hannibal, wiki: "Battle of Zama", text: "Scipio Africanus defeated Hannibal in North Africa." }),
    E("med", "-0146", "Carthage and Corinth destroyed", [10.31, 36.85], { section: S.punic, wiki: "Third Punic War", text: "Rome destroyed Carthage and turned Africa and Greece into provinces." }),
    E("med", "-0133", "Tiberius Gracchus killed", [12.5, 41.9], { section: S.republic, wiki: "Tiberius Gracchus", text: "Political violence entered Roman public life over land reform." }),
    E("med", "-0058", "Caesar begins the Gallic War", [4.84, 46.8], { section: S.caesar, wiki: "Gallic Wars", text: "Caesar used a provincial command to conquer Gaul and build an army loyal to him." }),
    E("med", "-0052-09", "Alesia", [4.5, 47.54], { section: S.caesar, wiki: "Battle of Alesia", text: "Vercingetorix surrendered after Caesar's siege works held off both the town and a relief army." }),
    E("med", "-0049-01-10", "Caesar crosses the Rubicon", [12.35, 44.06], { section: S.republic, wiki: "Crossing the Rubicon", text: "The crossing began the civil war against Pompey and the Senate." }),
    E("med", "-0044-03-15", "Ides of March", [12.48, 41.89], { section: S.republic, wiki: "Assassination of Julius Caesar", text: "Senators killed Caesar in Rome, hoping to save the republic." }),
    E("med", "-0031-09-02", "Actium", [20.72, 38.95], { section: S.republic, wiki: "Battle of Actium", text: "Octavian defeated Antony and Cleopatra and became Rome's sole master." }),
    E("med", "-0027", "Augustus begins the principate", [12.5, 41.9], { section: S.aug, wiki: "Augustus", text: "The republic's forms remained, but real power rested with Augustus." }),
    E("med", "0009", "Teutoburg Forest", [8.9, 52.1], { section: S.aug, wiki: "Battle of the Teutoburg Forest", text: "Arminius destroyed three Roman legions and fixed the Rhine as Rome's practical northern frontier." }),
    E("med", "0043", "Claudius conquers southern Britain", [-0.1, 51.5], { section: S.high, wiki: "Roman conquest of Britain", text: "Britain became an imperial province after Claudius' invasion." }),
    E("med", "0070", "Jerusalem captured", [35.23, 31.78], { section: S.high, wiki: "Siege of Jerusalem (70 CE)", text: "Titus took Jerusalem during the Jewish revolt." }),
    E("med", "0117", "Roman empire reaches its widest extent", [35.0, 37.0], { section: S.high, wiki: "Trajan", text: "Trajan's conquests briefly carried Roman rule into Dacia, Armenia and Mesopotamia." }),
    E("med", "0122", "Hadrian's Wall begun", [-2.3, 55.0], { section: S.high, wiki: "Hadrian's Wall", text: "Hadrian marked the northern edge of Roman Britain with a permanent frontier work." }),
    E("med", "0180", "Marcus Aurelius dies", [14.5, 45.3], { section: S.high, wiki: "Marcus Aurelius", text: "His death is a conventional end point for the high empire." }),
    E("med", "0212", "Caracalla extends citizenship", [12.5, 41.9], { section: S.high, wiki: "Constitutio Antoniniana", text: "Free inhabitants of the empire received Roman citizenship." }),
    E("med", "0235", "The soldier-emperor crisis begins", [11.1, 49.9], { section: S.late, wiki: "Crisis of the Third Century", text: "Armies, frontier wars and short-lived emperors pulled the old imperial order apart." }),
    E("med", "0284", "Diocletian takes power", [29.0, 40.8], { section: S.late, wiki: "Diocletian", text: "Diocletian rebuilt the empire as a more openly absolute and administrative monarchy." }),
    E("med", "0313", "Edict of Milan", [9.19, 45.46], { section: S.church, wiki: "Edict of Milan", text: "Constantine and Licinius granted Christianity legal toleration." }),
    E("med", "0325", "Council of Nicaea", [29.72, 40.43], { section: S.church, wiki: "First Council of Nicaea", text: "The first ecumenical council formulated a creed against Arian teaching." }),
    E("med", "0330", "Constantinople dedicated", [28.98, 41.01], { section: S.late, wiki: "Constantinople", text: "Constantine's new capital made the eastern empire visible as a second Roman centre." }),
    E("med", "0376", "Goths cross the Danube", [27.8, 43.8], { section: S.fall, wiki: "Gothic War (376-382)", text: "Gothic refugees entered the empire under pressure from the Huns." }),
    E("med", "0378-08-09", "Adrianople", [26.56, 41.68], { section: S.fall, wiki: "Battle of Adrianople", text: "A Gothic army killed Emperor Valens and much of the eastern field army." }),
    E("med", "0410-08-24", "Alaric sacks Rome", [12.5, 41.9], { section: S.fall, wiki: "Sack of Rome (410)", text: "Rome was sacked for the first time in almost eight centuries." }),
    E("med", "0451", "Catalaunian Plains", [4.1, 48.3], { section: S.fall, wiki: "Battle of the Catalaunian Plains", text: "Aetius and his Gothic allies checked Attila in Gaul." }),
    E("med", "0455", "Vandals sack Rome", [12.5, 41.9], { section: S.fall, wiki: "Sack of Rome (455)", text: "The Vandals came from North Africa by sea." }),
    E("med", "0476-09-04", "Romulus Augustulus deposed", [11.34, 44.5], { section: S.fall, wiki: "Romulus Augustulus", text: "Odoacer deposed the young western emperor and ruled Italy in his own name." }),
    E("med", "0568", "Lombards enter Italy", [13.0, 45.0], { section: S.church, wiki: "Lombards", text: "Lombard movement into Italy showed how far the western Roman map had become a set of successor kingdoms." }),
    E("med", "0600", "Slavic settlement across the Balkans", [21.0, 44.0], { approx: true, section: S.church, wiki: "Early Slavs", text: "Slavic-speaking groups settled widely in eastern Europe and the Balkans." })
  ];

  const R = (name, country, side, start, end, section, extra) => Object.assign({ name, country, side, start, end, wiki: name, lifeUnknown: true }, section ? { section } : {}, extra || {});
  const leaders = [
    R("Hammurabi", "Babylon", "babylon", "-1792", "-1750", S.hamm),
    R("Shamshi-Adad I", "Upper Mesopotamia", "assyria", "-1808", "-1776", S.hamm),
    R("Zimri-Lim", "Mari", "mari", "-1775", "-1761", S.hamm),
    R("Rim-Sin I", "Larsa", "elam", "-1822", "-1763", S.hamm),
    R("Ashoka", "Mauryan Empire", "maurya", "-0268", "-0232", S.india, { wiki: "Ashoka" }),
    R("Qin Shi Huang", "Qin China", "qin", "-0221", "-0210", S.han),
    R("Emperor Gaozu", "Han China", "han", "-0202", "-0195", S.han, { wiki: "Emperor Gaozu of Han" }),
    R("Emperor Wu", "Han China", "han", "-0141", "-0087", S.han, { wiki: "Emperor Wu of Han" }),
    R("Emperor Guangwu", "Han China", "han", "0025", "0057", S.han, { wiki: "Emperor Guangwu of Han" }),
    R("Wang Mang", "Xin dynasty", "han", "0009", "0023", S.han),
    R("Hannibal", "Carthage", "carthage", "-0221", "-0202", S.hannibal, { wiki: "Hannibal" }),
    R("Scipio Africanus", "Rome", "rome", "-0210", "-0183", S.hannibal, { wiki: "Scipio Africanus" }),
    R("Julius Caesar", "Rome", "rome", "-0059", "-0044", S.republic, { wiki: "Julius Caesar" }),
    R("Augustus", "Roman Empire", "rome", "-0027", "0014", S.aug, { wiki: "Augustus" }),
    R("Trajan", "Roman Empire", "rome", "0098", "0117", S.high, { wiki: "Trajan" }),
    R("Hadrian", "Roman Empire", "rome", "0117", "0138", S.high, { wiki: "Hadrian" }),
    R("Marcus Aurelius", "Roman Empire", "rome", "0161", "0180", S.high, { wiki: "Marcus Aurelius" }),
    R("Septimius Severus", "Roman Empire", "rome", "0193", "0211", S.high, { wiki: "Septimius Severus" }),
    R("Diocletian", "Roman Empire", "rome", "0284", "0305", S.late, { wiki: "Diocletian" }),
    R("Constantine", "Roman Empire", "rome", "0306", "0337", S.late, { wiki: "Constantine the Great" }),
    R("Theodosius I", "Roman Empire", "rome", "0379", "0395", S.late, { wiki: "Theodosius I" }),
    R("Alaric", "Visigoths", "goths", "0395", "0410", S.fall, { wiki: "Alaric I" }),
    R("Attila", "Huns", "huns", "0434", "0453", S.fall, { wiki: "Attila" }),
    R("Romulus Augustulus", "Western Roman Empire", "rome", "0475", "0476", S.fall, { wiki: "Romulus Augustulus" })
  ];

  const chapters = [
    { id: "ch-hammurabi", title: "Mesopotamia in the age of Hammurabi", start: "-1800", end: "-1595", plate: "hammurabi", bbox: [[35, 28], [50, 38]], section: S.hamm, text: "Hammurabi ruled Babylon when Mesopotamia was a land of rival river kingdoms. Babylon, Mari, Larsa, Elam and Assyria fought and bargained along the Euphrates and Tigris. The Code of Hammurabi presented the king as a just ruler, even though it also records a hard social order. After Hammurabi, Babylon's power faded before the Hittite sack in 1595 BC." },
    { id: "ch-han-china", title: "Han China", start: "-0206", end: "0220", plate: "han-china", bbox: [[72, 18], [125, 45]], section: S.han, text: "Han China turned the short Qin empire into a durable imperial order. Emperor Wu fought the Xiongnu, opened the Hexi Corridor and sent Zhang Qian west toward the Silk Road. Later the capital moved to Luoyang, and the Eastern Han held together for almost two centuries. The Yellow Turban rebellion showed how weak the dynasty had become before it ended in 220." },
    { id: "ch-rome", title: "Rome, from city to empire", start: "-0509", end: "0700", bbox: [[-10, 30], [45, 56]], section: S.rome, text: "Rome began this story as a city on the Tiber and ended it as the memory of an empire. The Republic conquered Italy, fought Carthage, broke the Hellenistic kingdoms and absorbed the Mediterranean. Civil war then made room for Augustus and the Roman Empire. In the west, pressure from Goths, Vandals and Huns helped turn imperial rule into successor kingdoms while the eastern empire continued around Constantinople." },
    { id: "ch-rome-conquers-italy", title: "Rome conquers Italy", start: "-0509", end: "-0264", parent: "ch-rome", plate: "rome-italy", bbox: [[6, 36], [19, 46.5]], section: S.italy, text: "Rome spent the early Republic turning neighbours into allies, subjects and colonies. The Latin League settlement tied Latium to Rome, and the Samnite Wars opened the central mountains. The Via Appia carried soldiers and settlers south. By the time Tarentum fell, Rome controlled Italy south of the Po." },
    { id: "ch-punic-wars", title: "The Punic Wars", start: "-0264", end: "-0146", parent: "ch-rome", bbox: [[-8, 30], [22, 45]], section: S.punic, text: "The Punic Wars were Rome's long struggle with Carthage for the western Mediterranean. Sicily was the prize of the First Punic War, and Sardinia, Corsica and Spain followed. Carthage remained dangerous because of Hannibal and because its sea power linked Africa, Spain and the islands. In 146 BC Rome destroyed Carthage and made Africa a province." },
    { id: "ch-hannibals-war", title: "Hannibal's war", start: "-0218", end: "-0201", parent: "ch-punic-wars", plate: "hannibal", bbox: [[-6, 35], [18, 46]], section: S.hannibal, text: "Hannibal opened the Second Punic War by marching from New Carthage across the Ebro, the Rhone and the Alps. He beat Roman armies at Trebia, Trasimene and Cannae, then spent years in southern Italy. Rome survived by avoiding another Cannae and by sending Scipio to Spain and Africa. At Zama, Scipio defeated Hannibal and ended Carthage's chance to win." },
    { id: "ch-end-of-the-republic", title: "The end of the republic", start: "-0133", end: "-0027", parent: "ch-rome", bbox: [[-10, 30], [35, 48]], section: S.republic, text: "The late Republic was strained by land hunger, armies loyal to commanders, and repeated civil war. The Gracchi made reform violent, and Sulla showed that a Roman army could take Rome. Caesar crossed the Rubicon, defeated Pompey and became dictator. The Ides of March did not restore the Republic; Actium left Octavian in control." },
    { id: "ch-caesar-in-gaul", title: "Caesar in Gaul", start: "-0058", end: "-0050", parent: "ch-end-of-the-republic", plate: "caesar", bbox: [[-6, 42], [10, 53]], section: S.caesar, text: "Caesar in Gaul began with the Helvetii at Bibracte and became a conquest of almost the whole region. He beat the Belgae on the Sabis, bridged the Rhine and crossed to Britain twice. The hardest year came in 52 BC, when Vercingetorix won at Gergovia and then lost at Alesia. Gaul gave Caesar money, soldiers and a reputation large enough to threaten Rome." },
    { id: "ch-pax-romana", title: "The imperial system", start: "-0027", end: "0235", parent: "ch-rome", bbox: [[-10, 24], [45, 56]], section: S.pax, text: "The imperial system was held by roads, legions, taxes, provincial cities and the staged modesty of the princeps. Augustus made monarchy look like restored order. Later emperors governed through provinces and frontier armies, while Trajan, Hadrian and Marcus Aurelius showed the system at its widest and most strained." },
    { id: "ch-augustus-principate", title: "Augustus and the Principate", start: "-0027", end: "0014", parent: "ch-pax-romana", plate: "augustus-principate", bbox: [[-10, 26], [43, 52]], section: S.aug, text: "Augustus ended the civil wars by making monarchy look like a rescue of the Republic. The Principate gave him real command while preserving old forms. Imperial provinces, legions, grain supply and patronage belonged to the princeps, while the Senate kept older honours and pacified provinces. The frontier moved on the Danube and in Germany, but Teutoburg fixed the Rhine as a practical limit." },
    { id: "ch-high-empire-frontiers", title: "The high empire and its frontiers", start: "0014", end: "0235", parent: "ch-pax-romana", plate: "roman-frontiers", bbox: [[-12, 24], [47, 56]], section: S.high, text: "The high empire was a frontier system as much as a Mediterranean state. Trajan carried Roman power to its widest extent, Hadrian marked limits with walls, and the Rhine, Danube, Euphrates and Britain became zones of forts, roads and negotiated pressure. By the Severan age, citizenship had widened while the army and the frontiers consumed more of the state's energy." },
    { id: "ch-late-antiquity", title: "Late antiquity", start: "0235", end: "0700", parent: "ch-rome", bbox: [[-12, 27], [43, 57]], section: S.late, text: "Late antiquity rebuilt the Roman world under pressure. Soldier emperors, Persian wars and frontier breaks forced a more military and bureaucratic state. Diocletian and Constantine divided command, multiplied provinces and made new capitals. Christianity then spread through the imperial network while frontier peoples settled inside and beyond the old borders." },
    { id: "ch-christianity-migrations", title: "Christianity and the migrations", start: "0300", end: "0700", parent: "ch-late-antiquity", plate: "christianity-migrations", bbox: [[-10, 27], [43, 57]], section: S.church, text: "Christianity first spread along the cities and roads of the Roman world, then became legal and imperial under Constantine. Councils, bishops and missionary centres formed a second network over the same map as the provinces. At the same time Goths, Vandals, Huns, Franks, Lombards and Slavic-speaking peoples turned Roman frontiers into routes and settlement zones." },
    { id: "ch-fall-of-the-west", title: "The fall of the West", start: "0376", end: "0476", parent: "ch-late-antiquity", bbox: [[-10, 32], [32, 56]], section: S.fall, text: "The fall of the West began with Gothic refugees crossing the Danube in 376. Adrianople killed an emperor and showed that the Roman army could fail badly inside imperial territory. Rome was sacked by Alaric in 410 and by Vandals in 455, while Attila and the Huns shook both halves of the empire. In 476 Odoacer deposed Romulus Augustulus, and western imperial rule gave way to kingdoms while the eastern empire continued around Constantinople." }
  ];

  const B = (title, author, start, end, section, extra) => Object.assign({ title, author, start, end, owned: false }, section ? { section } : {}, extra || {});
  const books = [
    B("SPQR", "Mary Beard", "-0753", "0212", S.rome),
    B("Rubicon", "Tom Holland", "-0133", "-0027", S.republic),
    B("The Fall of Carthage", "Adrian Goldsworthy", "-0264", "-0146", S.punic),
    B("Caesar", "Adrian Goldsworthy", "-0100", "-0044", S.caesar),
    B("How Rome Fell", "Adrian Goldsworthy", "0180", "0476", S.fall),
    B("The Roman Empire at Bay", "David S. Potter", "0180", "0395", S.late),
    B("The Inheritance of Rome", "Chris Wickham", "0400", "0700", S.church),
    B("The Rise of Western Christendom", "Peter Brown", "0200", "0700", S.church),
    B("The Fall of the Roman Empire", "Peter Heather", "0376", "0476", S.fall),
    B("The Fate of Rome", "Kyle Harper", "0165", "0700", S.fall),
    B("The Roman Revolution", "Ronald Syme", "-0060", "0014", S.republic),
    B("The Histories", "Polybius", "-0264", "-0146", S.punic),
    B("The Gallic War", "Julius Caesar", "-0058", "-0050", S.caesar),
    B("The Early Chinese Empires: Qin and Han", "Mark Edward Lewis", "-0221", "0220", S.han),
    B("The Government of the Qin and Han Empires", "Michael Loewe", "-0221", "0220", S.han),
    B("A History of the Ancient Near East", "Marc Van De Mieroop", "-3000", "-0330", S.hamm),
    B("King Hammurabi of Babylon", "Marc Van De Mieroop", "-1792", "-1750", S.hamm),
    B("Babylon", "Paul Kriwaczek", "-3000", "0100", S.hamm),
    B("Ashoka and the Decline of the Mauryas", "Romila Thapar", "-0321", "-0185", S.india),
    B("The Greeks and the Irrational", "E. R. Dodds", "-0800", "0100", S.rome),
    B("The Persian Empire", "Lindsay Allen", "-0550", "-0330", S.india),
    B("1491", "Charles C. Mann", "-1800", "0500", S.canada),
    B("Canada's First Nations", "Olive Dickason", "-1800", "0500", S.canada, { canadian: true }),
    B("I Have Lived Here Since the World Began", "Arthur J. Ray", "-1800", "0500", S.canada, { canadian: true })
  ];

  window.DATASETS = window.DATASETS || {};
  window.DATASETS.ancient = {
    id: "ancient",
    title: "The ancient and late-antique world",
    subtitle: "1800 BC - AD 700",
    range: ["-1800-01-01", "0701-01-01"],
    startAt: "-0218",
    precision: "year",
    mapNote: "No historical borders. Today's countries are a backdrop. Dates before about 500 BC are often approximate; Hammurabi follows the middle chronology.",
    lanes: [
      { id: "canada", label: "Canada & the Americas", pinned: true },
      { id: "neareast", label: "Mesopotamia & the Near East" },
      { id: "med", label: "Rome & the Mediterranean" },
      { id: "india", label: "India & Persia" },
      { id: "china", label: "China" }
    ],
    events, leaders, chapters, books,
    plates: [
      { id: "hammurabi", title: "Mesopotamia in the age of Hammurabi", start: "-1792", end: "-1750" },
      { id: "han-china", title: "China under the Han", start: "-0206", end: "0220" },
      { id: "rome-italy", title: "Rome conquers Italy", start: "-0390", end: "-0264" },
      { id: "hannibal", title: "Hannibal's war", start: "-0218", end: "-0201" },
      { id: "caesar", title: "Caesar in Gaul and the civil war", start: "-0058", end: "-0044" },
      { id: "augustus-principate", title: "Augustus and the Principate", start: "-0027", end: "0014" },
      { id: "roman-frontiers", title: "The Roman empire and its frontiers", start: "0096", end: "0235" },
      { id: "christianity-migrations", title: "Christianity and the migrations", start: "0300", end: "0700" }
    ],
    colours: {
      lanes: { canada: "#b22d2d", neareast: "#9a6a38", med: "#8c3b3b", india: "#6b8c3f", china: "#b36b2e" },
      sides: { rome: "#8c3b3b", carthage: "#3f6e8c", han: "#b36b2e", xiongnu: "#7a5a8c", babylon: "#9a6a38", assyria: "#6d5a45", mari: "#2f7f8c", elam: "#8a7a5a", maurya: "#6b8c3f", qin: "#5d6f9c", goths: "#6b6b6b", huns: "#4b4642" }
    },
    changelog: [{ date: "2026-10-05", text: "Round 5: extended to AD 700 with Augustus, the high empire, Christianity and the migrations." }]
  };
})();
