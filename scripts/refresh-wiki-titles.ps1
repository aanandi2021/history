# Refresh the offline Wikipedia title catalog from app content.
# Run from any directory: pwsh -File A:\coding\history-next\scripts\refresh-wiki-titles.ps1
# The MediaWiki API is used ONLY when generating this file, never at runtime.
# Each candidate is queried in batches with redirects=1 and prop=pageprops;
# only existing namespace-0 pages without the disambiguation page property survive.
param([switch]$AugmentTours, [switch]$AugmentPriority, [switch]$AugmentBooks)
$ErrorActionPreference = 'Stop'
if ($PSVersionTable.PSVersion.Major -lt 7) {
  $options = @()
  if ($AugmentTours) { $options += '-AugmentTours' }
  if ($AugmentPriority) { $options += '-AugmentPriority' }
  if ($AugmentBooks) { $options += '-AugmentBooks' }
  & pwsh -NoProfile -File $PSCommandPath @options
  exit $LASTEXITCODE
}
$OutputEncoding = [Console]::OutputEncoding = [System.Text.UTF8Encoding]::new($false)
Set-Location (Resolve-Path (Join-Path $PSScriptRoot '..'))
$env:HISTORY_CATALOG_AUGMENT_TOURS = if ($AugmentTours) { '1' } else { '0' }
$env:HISTORY_CATALOG_AUGMENT_PRIORITY = if ($AugmentPriority) { '1' } else { '0' }
$env:HISTORY_CATALOG_AUGMENT_BOOKS = if ($AugmentBooks) { '1' } else { '0' }
@'
import { loadDatasets } from "./tests/load.mjs";
import fs from "node:fs";
import vm from "node:vm";
import { createRequire } from "node:module";

const topics = new Map();
const bookAuthors = new Map();
const bookTitles = new Map();
const bareBookTitles = new Set();
function add(topic, source) {
  if (typeof topic !== "string" || !topic.trim()) return;
  topic = topic.trim();
  if (!topics.has(topic)) topics.set(topic, new Set());
  topics.get(topic).add(source);
}

const data = loadDatasets();
for (const ds of Object.values(data)) {
  add(ds.title, "dataset");
  for (const item of ds.events || []) {
    add(item.wiki, "explicit");
    add(item.title, "event");
  }
  for (const item of ds.leaders || []) {
    add(item.wiki, "explicit");
    add(item.name, "leader");
  }
  for (const item of ds.chapters || []) {
    add(item.wiki, "explicit");
    add(item.title, "chapter");
  }
  for (const item of ds.books || []) {
    add(item.wiki, "explicit");
    if (item.title && item.author) {
      const title = item.title.trim(), author = item.author.trim();
      const key = `book:${title} by ${author}`;
      add(key, "book");
      bookTitles.set(key, title);
      bareBookTitles.add(title);
      bookAuthors.set(key, new Set([author]));
    }
  }
}

const context = { window: { PLATES: {}, SCENES: {}, BOARDS: {}, TOURS: {} } };
vm.createContext(context);
for (const dir of ["atlas/plates", "app/scenes", "app/boards", "app/tours"]) {
  for (const file of fs.readdirSync(dir).filter(f => f.endsWith(".js")).sort()) {
    vm.runInContext(fs.readFileSync(`${dir}/${file}`, "utf8"), context, { filename: file });
  }
}

// A plate title is often an original caption, not a Wikipedia title.
// These deliberately chosen, thematically equivalent article candidates are
// separately checked against the API just like the data's explicit wiki fields.
const plateSubjects = {
  "abbasid-baghdad": "House of Wisdom",
  "abbasid-caliphate": "Abbasid Caliphate",
  "africa-before-partition-1870": "History of Africa",
  "american-civilizations-1500": "Pre-Columbian era",
  "american-revolution-loyalist-north-1763-1783": "American Revolution",
  "angevin-empire": "Angevin Empire",
  "atlantic-america-new-france-1607-1763": "New France",
  "augustus-principate": "Augustus",
  "austria-ottoman-danube-1663-1739": "Great Turkish War",
  "balkan-crises-1908-1913": "Balkan Wars",
  "balkans-san-stefano-berlin-1878": "Congress of Berlin",
  "baltic-orders-kalmar": "Kalmar Union",
  "baltic-russia-sweden-1632-1721": "Great Northern War",
  "barbarian-kingdoms": "Barbarian kingdoms",
  "british-commonwealth-autonomy-1919-1931": "Statute of Westminster 1931",
  "british-north-america-rebellions-responsible-government-1837-1848": "Rebellions of 1837–1838",
  "byzantium-basil-crisis": "Byzantine Empire under the Macedonian dynasty",
  "caesar": "Gallic Wars",
  "canadian-confederation-cpr-resistance-1867-1885": "Canadian Confederation",
  "capetian-france": "Capetian dynasty",
  "carolingian-partition": "Treaty of Verdun",
  "charles-v-habsburg-valois-1519-1556": "Charles V, Holy Roman Emperor",
  "china-india-manchu-mughal-1644-1765": "Qing dynasty",
  "china-japan-treaty-ports-meiji-1850-1890": "Unequal treaties",
  "china-japan-warlords-northern-expedition-1912-1931": "Warlord Era",
  "christianity-migrations": "Migration Period",
  "colonial-empires-world-1914": "New Imperialism",
  "confessional-europe-1560-1660": "European wars of religion",
  "congress-vienna-settlement-1815": "Congress of Vienna",
  "dutch-revolt-maritime-empires-1568-1648": "Dutch Revolt",
  "eastern-front-russia-1914-1918": "Eastern Front (World War I)",
  "eastern-kingdoms-mongols": "Mongol invasion of Europe",
  "europe-alliances-road-to-war-1933-1939": "Causes of World War II",
  "europe-restoration-congress-system-1815-1830": "Concert of Europe",
  "fascist-italy-ethiopia-1922-1939": "Second Italo-Ethiopian War",
  "first-crusades": "Crusades",
  "french-revolution-france-1789-1799": "French Revolution",
  "german-reformation-1521-1555": "Reformation",
  "german-unification-1866-1871": "Unification of Germany",
  "germany-confederation-zollverein-frankfurt-1815-1848": "German Confederation",
  "great-depression-worldwide-1929-1933": "Great Depression",
  "haiti-abolition-war-of-1812-atlantic-1791-1815": "Atlantic Revolutions",
  "hammurabi": "Hammurabi",
  "han-china": "Han dynasty",
  "hannibal": "Second Punic War",
  "hundred-years-war": "Hundred Years' War",
  "italian-unification-1850-1871": "Unification of Italy",
  "japan-expansion-1931-1939": "Japanese invasion of Manchuria",
  "justinian-reconquest": "Justinian I",
  "latin-american-independence-1804-1830": "Spanish American wars of independence",
  "league-loans-disarmament-1919-1929": "League of Nations",
  "louis-xiv-france-absolutism-1610-1697": "Louis XIV",
  "maritime-monsoon": "Indian Ocean trade",
  "medieval-trade-networks": "Hanseatic League",
  "middle-east-mandates-asia-1919-1929": "League of Nations mandate",
  "middle-east-secondary-theatres-1914-1918": "Middle Eastern theatre of World War I",
  "muscovy-lithuania-steppe": "Grand Duchy of Moscow",
  "napoleonic-europe-empire-1812": "First French Empire",
  "nazi-germany-expansion-1933-1939": "Territorial evolution of Germany",
  "ottoman-rise-1453": "Fall of Constantinople",
  "polish-soviet-war-borders-1920-1921": "Polish–Soviet War",
  "prussia-poland-enlightened-despotism-1713-1795": "Partitions of Poland",
  "revolutions-europe-1830-1848": "Revolutions of 1848",
  "roman-frontiers": "Roman Empire",
  "roman-republic-constitution": "Constitution of the Roman Republic",
  "rome-growth-small-multiples": "Ancient Rome",
  "rome-italy": "Roman conquest of Italy",
  "russia-japan-asia-expansion-1865-1910": "Russo-Japanese War",
  "russian-civil-war-allied-intervention-1918-1921": "Russian Civil War",
  "scramble-for-africa-1880-1914": "Scramble for Africa",
  "seven-years-war-global-1756-1763": "Seven Years' War",
  "south-africa-boer-war-union-1899-1913": "Second Boer War",
  "southeast-asia-pacific-imperialism-1880-1914": "New Imperialism",
  "spanish-civil-war-1936-1939": "Spanish Civil War",
  "stalin-ussr-1928-1939": "Joseph Stalin",
  "thirty-years-war-westphalia-1618-1648": "Thirty Years' War",
  "transition-economy-1500": "Economic history of the world",
  "turkey-sevres-lausanne-1920-1923": "Treaty of Lausanne",
  "united-states-overseas-west-1865-1914": "American imperialism",
  "us-civil-war-reconstruction-1854-1877": "Reconstruction era",
  "ussr-union-republics-1922-1924": "Soviet Union",
  "versailles-europe-1919-1920": "Treaty of Versailles",
  "voyages-discovery-1415-1522": "Age of Discovery",
  "western-front-1914-1918": "Western Front (World War I)",
  "world-at-war-1914-1918": "World War I",
  "ww1-europe-alliances-july-crisis-1914": "July Crisis",
  "ww2-axis-europe-holocaust-1942": "The Holocaust",
  "ww2-barbarossa-stalingrad-1941-1943": "Operation Barbarossa",
  "ww2-battle-atlantic-1939-1945": "Battle of the Atlantic",
  "ww2-blitzkrieg-1939-1940": "Blitzkrieg",
  "ww2-mediterranean-north-africa-1940-1943": "North African campaign",
  "ww2-northwest-europe-1944-1945": "Western Front (World War II)",
  "ww2-pacific-war-1941-1945": "Pacific War",
  "ww2-war-end-human-cost-1945": "End of World War II"
};
for (const plate of Object.values(context.window.PLATES)) {
  add(plate.title, "plate");
  for (const head of (plate.head || "").split("/")) add(head.trim(), "plate-head");
  for (const fig of plate.figures || []) add(fig.caption, "plate-figure");
}
for (const scene of Object.values(context.window.SCENES))
  for (const chapter of Object.values(scene))
    for (const term of chapter.terms || []) add(term.wiki || term.t, "scene-term");
for (const board of Object.values(context.window.BOARDS)) {
  add(board.title, "board");
  for (const tile of board.tiles || []) {
    add(tile.wiki, "explicit");
    add(tile.title, "board-tile");
  }
}
for (const tour of Object.values(context.window.TOURS)) {
  add(tour.title, "tour");
  add(tour.wideWiki, "explicit");
  add(tour.wideWiki, "tour-article");
  for (const stop of tour.stops || []) {
    add(stop.wiki, "explicit");
    add(stop.wideWiki, "explicit");
    add(stop.wiki, "tour-article");
    add(stop.wideWiki, "tour-article");
    add(stop.title, "tour-stop");
  }
}
for (const title of [
  "Ancient history", "Middle Ages", "Age of Discovery", "Early modern period",
  "Age of Revolution", "19th century", "New Imperialism", "World War I",
  "Interwar period", "World War II", "History of Russia", "World history"
]) add(title, "broad");

// Hand-reviewed aliases for original app headings that do not match an article
// verbatim. The key remains the app's topic; the value must pass API verification.
const aliases = new Map();
for (const [key, title] of bookTitles) aliases.set(key, title);
for (const plate of Object.values(context.window.PLATES))
  if (plateSubjects[plate.id]) aliases.set(plate.title, plateSubjects[plate.id]);
// Where a chapter deliberately accompanies a plate on the SAME historical
// subject, use that plate's vetted article; override misaligned/shared plates.
const chapterOverrides = {
  "The end of the republic": "Crisis of the Roman Republic",
  "Road to war": "Causes of World War II",
  "Canada in the Depression": "Great Depression in Canada",
  "Mandates and the Islamic world": "League of Nations mandate",
  "Mandates and Asian nationalism": "League of Nations mandate",
  "Franks and Carolingians": "Carolingian Empire",
  "Early Canada in the Atlantic age": "History of Canada",
  "Baroque, science and the Enlightenment": "Age of Enlightenment",
  "German princes after 1648": "Holy Roman Empire",
  "Stuart Britain, revolution and maritime power": "Stuart period",
  "Spanish succession and balance of power": "War of the Spanish Succession",
  "Britain, India and empire": "British Raj",
  "European powers and colonial comparison": "New Imperialism",
  "Japan: unequal treaties to empire": "Empire of Japan",
  "The United States and prosperity": "Roaring Twenties",
  "Western Europe after Rome": "Early Middle Ages",
  "Charlemagne's Europe": "Carolingian Empire",
  "Abbasid Baghdad": "House of Wisdom",
  "The monsoon road": "Indian Ocean trade",
  "Pala Bengal and Nalanda": "Pala Empire",
  "Building Borobudur": "Borobudur",
  "The Crusades and their consequences": "Crusades",
  "The fall of the West": "Fall of the Western Roman Empire",
  "The imperial system": "Roman Empire",
  "From Mongols to Mughals": "Mughal Empire",
  "The road to 1914": "Causes of World War I",
  "Canada in the British Empire": "History of Canada",
  "Italy, Adwa and Libya": "Italian colonial empire",
  "Raiders from Java": "Sailendra dynasty",
  "England to 1066": "Anglo-Saxon England",
  "Normans and Vikings": "Normans",
  "Byzantium and the eastern Roman world": "Byzantine Empire",
  "Early Islam and the caliphates": "Early Muslim conquests",
  "Steppe peoples and Rus": "Kievan Rus'",
  "Kievan Rus and the routes north": "Kievan Rus'",
  "Asia in the medieval world": "History of Asia",
  "Ottonian and Salian Germany": "Holy Roman Empire",
  "Monastic reform, papacy and the Latin church": "Gregorian Reform",
  "Hohenstaufen empire and Italian cities": "Hohenstaufen",
  "Reconquista Spain and Portugal": "Reconquista",
  "Russia: reform and emancipation": "Emancipation reform of 1861",
  "Europe's national states": "Nationalism",
  "Ottoman decline and the Middle East": "Decline and modernization of the Ottoman Empire",
  "India 1857 and Crown rule": "Indian Rebellion of 1857",
  "China and Japan: Taiping, treaty ports and Meiji": "Unequal treaties",
  "Latin America after independence": "History of Latin America",
  "Ideas, industry and reform": "Industrial Revolution",
  "Political thought after 1815": "Liberalism",
  "Great Britain, reform and industry": "Victorian era",
  "Europe after Vienna and the congress system": "Concert of Europe",
  "Greek independence and Mehmet Ali's Egypt": "Greek War of Independence",
  "American revolutions and removals outside Europe": "History of the United States (1789–1849)",
  "Latin American independence": "Spanish American wars of independence",
  "China and the First Opium War": "First Opium War",
  "Germany, France and 1848": "Revolutions of 1848",
  "German Confederation and Zollverein": "German Confederation",
  "France from restoration to republic": "French Revolution of 1848",
  "Ideas before revolution": "Age of Enlightenment",
  "United States, constitution and westward expansion": "History of the United States (1789–1849)",
  "France and revolutionary war": "French Revolutionary Wars",
  "France before 1789": "Ancien Régime",
  "Europe and Egypt, 1792-1799": "French Revolutionary Wars",
  "The Napoleonic system": "Napoleonic Wars",
  "Britain, war and world power": "British Empire",
  "Germany, reform and national consciousness": "German nationalism",
  "Ottoman reform, Egypt and Syria": "Muhammad Ali of Egypt",
  "Muscovy gathers the Russian lands": "Grand Duchy of Moscow",
  "The Romanovs build an empire": "House of Romanov",
  "A great power with long frontiers": "Russian Empire",
  "Revolution and the Soviet state": "Russian Revolution",
  "Moscow rises": "Grand Duchy of Moscow",
  "Ivan's conquests on the Volga": "Siege of Kazan",
  "Crossing Siberia": "Russian conquest of Siberia",
  "Peter's window on the Baltic": "Great Northern War",
  "Catherine's empire": "Catherine the Great",
  "Pacific frontier: Amur to Tsushima": "Russo-Japanese War",
  "Canada in Siberia": "Canadian Siberian Expeditionary Force",
  "War and revolution": "Russian Revolution",
  "Civil War": "Russian Civil War",
  "Stalin's revolution from above": "Five-year plans of the Soviet Union",
  "Pact, partition and invasion": "Molotov–Ribbentrop Pact",
  "Renaissance and humanism": "Renaissance humanism",
  "Reformation and religious war": "Reformation",
  "The Ottoman empire after 1453": "Ottoman Empire",
  "Asia and the Indian Ocean": "Indian Ocean trade",
  "Russia and the steppe frontier": "Russian conquest of Siberia",
  "Turtle Island and early Canada": "Indigenous peoples in Canada",
  "France and England in the religious wars": "French Wars of Religion",
  "Poland, Sweden and the Baltic": "Polish–Swedish wars",
  "The Thirty Years' War opens": "Thirty Years' War",
  "Canada and the First World War": "Canada in World War I",
  "The Russian Revolution, 1917": "Russian Revolution",
  "Wilsonian promise and colonial disappointment": "Self-determination",
  "War in China": "Second Sino-Japanese War",
  "Battle of Britain and the Blitz": "Battle of Britain"
};
for (const ds of Object.values(data))
  for (const chapter of ds.chapters || []) {
    const plateId = [].concat(chapter.plate || [])[0];
    if (chapterOverrides[chapter.title]) aliases.set(chapter.title, chapterOverrides[chapter.title]);
    else if (plateSubjects[plateId] && chapter.title !== "India, China and Japan" &&
             chapter.title !== "China and India in the eighteenth century")
      aliases.set(chapter.title, plateSubjects[plateId]);
  }
for (const [topic, title] of Object.entries(chapterOverrides))
  if (topics.has(topic)) aliases.set(topic, title);
for (const [topic, title] of Object.entries({
  "Kannauj triangle": "Tripartite Struggle",
  "Gopala (Pala dynasty)": "Gopala I",
  "Rus' attack on Constantinople (860)": "Siege of Constantinople (860)",
  "Papal election decree of 1059": "In nomine Domini",
  "Siege of Edessa": "Siege of Edessa (1144)",
  "Treaty of Nymphaeum": "Treaty of Nymphaeum (1261)",
  "Treaty of Stralsund": "Treaty of Stralsund (1370)",
  "Siege of Orleans": "Siege of Orléans (1428–1429)",
  "Peter, Metropolitan of Kiev and all Rus'": "Peter of Moscow",
  "1881–1884 pogroms in the Russian Empire": "Pogroms in the Russian Empire",
  "First five-year plan": "First five-year plan (Soviet Union)",
  "Wendat Confederacy": "Wendat people",
  "Hochelaga": "Hochelaga (village)",
  "Italian entry into World War II": "Military history of Italy during World War II",
  "Blank cheque (World War I)": "July Crisis",
  "Russian mobilization (1914)": "July Crisis",
  "NEP": "New Economic Policy",
  "Reconstruction": "Reconstruction era",
  "Native American tribes in the United States": "Native Americans in the United States",
  "New Russia (historical region)": "Novorossiya",
  "Nalanda copper plate of Devapala": "Nalanda inscription of Devapaladeva",
  "Sino-Tibetan treaty of 821–822": "Changqing Treaty",
  "Peterhof, Novgorod": "Peterhof (Novgorod)",
  // No standalone English page for the work; Rotteck's biography names and
  // discusses the Staatslexikon that he edited with Welcker.
  "Staatslexikon": "Karl von Rotteck",
  "Ivan Ivanovich (son of Ivan IV)": "Tsarevich Ivan Ivanovich of Russia",
  "Coup of 1762": "Peter III of Russia",
  // No standalone article on Indigenous alliances during this war.
  "Native Americans in the American Revolution": "American Revolutionary War"
})) if (topics.has(topic)) aliases.set(topic, title);

const augmentTours = process.env.HISTORY_CATALOG_AUGMENT_TOURS === "1";
const augmentPriority = process.env.HISTORY_CATALOG_AUGMENT_PRIORITY === "1";
const augmentBooks = process.env.HISTORY_CATALOG_AUGMENT_BOOKS === "1";
const prior = augmentTours || augmentPriority || augmentBooks
  ? { ...createRequire(import.meta.url)("./app/data/wiki-titles.js") } : {};
// Old catalogs included a few book articles under bare titles. Remove those
// now that book articles use the explicit title+author key.
for (const title of bareBookTitles)
  if (!topics.has(title)) delete prior[title];
if (augmentTours || augmentPriority || augmentBooks)
  for (const title of ["The Gallic War", "The Coming of the Third Reich", "The Third Reich in Power"])
    if (!topics.has(title)) delete prior[title];
const selected = [...topics].filter(([topic, sources]) =>
  (!augmentTours && !augmentPriority && !augmentBooks) ||
  ((!prior[topic] || (aliases.has(topic) && aliases.get(topic) !== prior[topic])) &&
    (augmentTours && [...sources].some(source => source === "tour" ||
      source === "tour-stop" || source === "tour-article") ||
     augmentPriority && [...sources].some(source => source === "explicit" ||
       source === "scene-term" || source === "chapter" ||
       source === "plate" || source === "board") ||
     augmentBooks && sources.has("book"))))
  .map(([topic]) => topic);
const candidates = [...new Set([...selected, ...selected.map(t => aliases.get(t)).filter(Boolean)])].sort();
const resolved = new Map();
const extracts = new Map();
const fragmented = new Set();
const endpoint = "https://en.wikipedia.org/w/api.php";
async function query(batch) {
  const params = new URLSearchParams({
    action: "query", format: "json", formatversion: "2", redirects: "1",
    prop: "pageprops|extracts", ppprop: "disambiguation", exintro: "1",
    explaintext: "1", exchars: "600", maxlag: "5", titles: batch.join("|")
  });
  for (let attempt = 0; attempt < 12; attempt++) {
    try {
      const response = await fetch(`${endpoint}?${params}`, {
        headers: { "User-Agent": "HistoryNextTitleCatalog/1.0 (personal offline atlas; Wikimedia API verification)" }
      });
      if (response.status === 429 || response.status === 503) {
        const wait = Math.max(5, Number(response.headers.get("retry-after")) || 5);
        await new Promise(resolve => setTimeout(resolve, wait * 1000 + 1000));
        continue;
      }
      if (!response.ok) throw Error(`HTTP ${response.status}`);
      const json = await response.json();
      if (json.error) throw Error(json.error.info || json.error.code);
      const pointers = new Map([
        ...(json.query.normalized || []).map(r => [r.from, r.to]),
        ...(json.query.redirects || []).map(r => [r.from, r.to])
      ]);
      for (const redirect of json.query.redirects || [])
        if (redirect.tofragment) fragmented.add(redirect.from);
      const pages = new Map((json.query.pages || []).map(p => [p.title, p]));
      for (const title of batch) {
        let dest = title;
        const seen = new Set();
        while (pointers.has(dest) && !seen.has(dest)) {
          seen.add(dest);
          dest = pointers.get(dest);
        }
        const page = pages.get(dest);
        if (page && !page.missing && !page.invalid && page.ns === 0 &&
            !Object.hasOwn(page.pageprops || {}, "disambiguation")) {
          resolved.set(title, page.title);
          if (page.extract) extracts.set(title, page.extract);
        }
      }
      return;
    } catch (error) {
      if (attempt === 11) throw Error(`Wikipedia query failed: ${error.message} [${batch[0]}]`);
      await new Promise(resolve => setTimeout(resolve, 1000 * 2 ** attempt));
    }
  }
  throw Error(`Wikipedia still rate-limiting [${batch[0]}]; retry the refresh later`);
}
for (let i = 0; i < candidates.length; i += 40) {
  await query(candidates.slice(i, i + 40));
  if ((i / 40) % 10 === 0) console.log(`Verified ${Math.min(i + 40, candidates.length)}/${candidates.length} candidates`);
  await new Promise(resolve => setTimeout(resolve, 5500));
}
const verified = { ...prior };
for (const topic of selected.sort()) {
  const candidate = aliases.get(topic) || topic;
  const title = resolved.get(candidate);
  if (bookAuthors.has(topic)) {
    const extract = extracts.get(candidate) || "";
    const matchingAuthor = [...bookAuthors.get(topic)].some(author =>
      extract.toLocaleLowerCase("en").includes(author.toLocaleLowerCase("en")));
    const aboutBook = /(?:\b(book|novel|memoir|biography|publication|literary work|scholarly study)\b|\b(?:a|an) (?:narrative |political |military |\d{4} )?history of\b)/i
      .test(extract.slice(0, 350));
    // A page sharing a book's name could instead describe a film, place or
    // different author's book; a redirect to a trilogy section is not a
    // dedicated book article. Never assign such a title to this key.
    if (!matchingAuthor || !aboutBook || fragmented.has(candidate)) continue;
  }
  if (title) verified[topic] = title;
}
const file = "app/data/wiki-titles.js";
const header = `// Verified English Wikipedia article titles. Regenerate with scripts/refresh-wiki-titles.ps1.\n` +
  `// The generator follows redirects and rejects missing/disambiguation/non-article pages.\n`;
fs.writeFileSync(file, header +
  "(function(root) {\n  const titles = " + JSON.stringify(verified, null, 2).replace(/\n/g, "\n  ") +
  ";\n  if (typeof module !== \"undefined\" && module.exports) module.exports = titles;\n" +
  "  else root.WIKI_TITLES = titles;\n" +
  "})(typeof self !== 'undefined' ? self : this);\n");
console.log(`Catalog: ${Object.keys(verified).length}/${topics.size} unique topics verified`);
for (const group of ["tour-article", "explicit", "chapter", "plate", "board", "scene-term", "tour-stop", "event", "leader", "book", "broad"]) {
  const matching = [...topics].filter(([, sources]) => sources.has(group));
  const missing = matching.filter(([topic]) => !verified[topic]).map(([topic]) => topic);
  console.log(`${group}: ${matching.length - missing.length}/${matching.length} resolved; unresolved (${missing.length}): ${missing.join(" | ")}`);
}
'@ | node --input-type=module -
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }
