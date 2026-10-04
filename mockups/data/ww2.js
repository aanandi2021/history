// WW2 proof-of-concept dataset. Hand-entered for the mockups; the real build
// will generate this from Obsidian note frontmatter (see scripts/build_data.py).
window.WW2 = {
  range: ["1937-01-01", "1946-01-01"],

  lanes: [
    { id: "canada", label: "Canada", pinned: true },
    { id: "west", label: "Western Europe & Atlantic" },
    { id: "east", label: "Eastern Front" },
    { id: "med", label: "Mediterranean & Africa" },
    { id: "pacific", label: "Asia & Pacific" }
  ],

  events: [
    // Canada
    { lane: "canada", date: "1939-09-10", title: "Canada declares war", text: "A week after Britain, by its own Parliament's vote — a deliberate signal of independence." },
    { lane: "canada", date: "1939-12-17", title: "Air Training Plan signed", text: "The British Commonwealth Air Training Plan trained about 131,000 aircrew in Canada." },
    { lane: "canada", date: "1939-09-03", end: "1945-05-08", title: "Battle of the Atlantic", text: "The RCN grew from 13 ships to one of the largest navies in the world escorting convoys." },
    { lane: "canada", date: "1941-12-08", end: "1941-12-25", title: "Hong Kong", text: "Winnipeg Grenadiers and Royal Rifles of Canada; the colony fell on Christmas Day." },
    { lane: "canada", date: "1942-02-24", title: "Japanese Canadian internment", text: "About 22,000 Japanese Canadians removed from the BC coast." },
    { lane: "canada", date: "1942-04-27", title: "Conscription plebiscite", text: "English Canada voted yes, Quebec voted no." },
    { lane: "canada", date: "1942-08-19", title: "Dieppe", text: "Of about 5,000 Canadians in the raid, 907 were killed and nearly 2,000 captured." },
    { lane: "canada", date: "1943-07-10", title: "Sicily", text: "1st Canadian Division lands in Operation Husky." },
    { lane: "canada", date: "1943-08-17", end: "1943-08-24", title: "Quebec Conference", text: "Churchill and Roosevelt plan the invasion of France at the Château Frontenac." },
    { lane: "canada", date: "1943-12-20", end: "1943-12-28", title: "Ortona", text: "A week of house-to-house fighting in Italy." },
    { lane: "canada", date: "1944-06-06", title: "Juno Beach", text: "3rd Canadian Division lands on D-Day." },
    { lane: "canada", date: "1944-10-02", end: "1944-11-08", title: "Battle of the Scheldt", text: "Opened the port of Antwerp; about 6,400 Canadian casualties." },
    { lane: "canada", date: "1944-11-22", title: "Conscription crisis", text: "King agrees to send conscripts overseas." },
    { lane: "canada", date: "1945-05-05", title: "Netherlands liberated", text: "German forces in the Netherlands surrender to the First Canadian Army." },
    { lane: "canada", date: "1945-09-05", title: "Gouzenko defects", text: "A Soviet cipher clerk in Ottawa walks out with evidence of a spy ring." },

    // Western Europe & Atlantic
    { lane: "west", date: "1938-03-12", title: "Anschluss", text: "Germany absorbs Austria." },
    { lane: "west", date: "1938-09-30", title: "Munich Agreement", text: "Britain and France let Germany take the Sudetenland from Czechoslovakia." },
    { lane: "west", date: "1938-11-09", title: "Kristallnacht", text: "A night of state-organised attacks on Jews across Germany and Austria." },
    { lane: "west", date: "1939-03-15", title: "Germany occupies Prague" },
    { lane: "west", date: "1939-09-01", title: "Germany invades Poland", text: "Britain and France declare war two days later." },
    { lane: "west", date: "1939-09-03", title: "Britain and France declare war" },
    { lane: "west", date: "1940-04-09", title: "Denmark and Norway invaded" },
    { lane: "west", date: "1940-05-10", title: "Invasion of France and the Low Countries", text: "Churchill becomes PM the same day." },
    { lane: "west", date: "1940-05-26", end: "1940-06-04", title: "Dunkirk", text: "About 338,000 Allied troops evacuated." },
    { lane: "west", date: "1940-06-22", title: "France signs armistice" },
    { lane: "west", date: "1940-07-10", end: "1940-10-31", title: "Battle of Britain" },
    { lane: "west", date: "1940-09-07", end: "1941-05-11", title: "The Blitz" },
    { lane: "west", date: "1941-08-14", title: "Atlantic Charter", text: "Churchill and Roosevelt meet in Placentia Bay, Newfoundland." },
    { lane: "west", date: "1944-06-06", title: "D-Day" },
    { lane: "west", date: "1944-08-25", title: "Paris liberated" },
    { lane: "west", date: "1944-12-16", end: "1945-01-25", title: "Battle of the Bulge" },
    { lane: "west", date: "1945-04-30", title: "Hitler's suicide" },
    { lane: "west", date: "1945-05-08", title: "VE Day" },

    // Eastern Front
    { lane: "east", date: "1939-08-23", title: "Molotov–Ribbentrop Pact", text: "Secretly divides Eastern Europe between Germany and the USSR." },
    { lane: "east", date: "1939-09-17", title: "USSR invades Poland" },
    { lane: "east", date: "1939-11-30", end: "1940-03-13", title: "Winter War", text: "Finland holds off the Red Army, then cedes territory." },
    { lane: "east", date: "1941-06-22", title: "Operation Barbarossa", text: "About 3.8 million Axis troops invade the USSR." },
    { lane: "east", date: "1941-09-08", end: "1944-01-27", title: "Siege of Leningrad", text: "Around 800,000 or more civilians died, mostly of starvation." },
    { lane: "east", date: "1941-12-05", title: "Soviet counter-attack at Moscow" },
    { lane: "east", date: "1942-08-23", end: "1943-02-02", title: "Stalingrad" },
    { lane: "east", date: "1943-07-05", end: "1943-08-23", title: "Kursk" },
    { lane: "east", date: "1944-06-22", end: "1944-08-19", title: "Operation Bagration", text: "Destroys German Army Group Centre." },
    { lane: "east", date: "1945-04-16", end: "1945-05-02", title: "Battle of Berlin" },

    // Mediterranean & Africa
    { lane: "med", date: "1940-06-10", title: "Italy enters the war" },
    { lane: "med", date: "1941-02-12", title: "Rommel arrives in Libya" },
    { lane: "med", date: "1941-04-06", title: "Yugoslavia and Greece invaded" },
    { lane: "med", date: "1942-10-23", end: "1942-11-11", title: "El Alamein" },
    { lane: "med", date: "1942-11-08", title: "Operation Torch", text: "US and British landings in Morocco and Algeria." },
    { lane: "med", date: "1943-05-13", title: "Axis surrender in Tunisia" },
    { lane: "med", date: "1943-07-10", title: "Sicily invaded" },
    { lane: "med", date: "1943-07-25", title: "Mussolini deposed" },
    { lane: "med", date: "1943-09-08", title: "Italy's armistice announced" },
    { lane: "med", date: "1944-06-04", title: "Rome liberated" },

    // Asia & Pacific
    { lane: "pacific", date: "1937-07-07", title: "Marco Polo Bridge", text: "Full-scale war between Japan and China begins." },
    { lane: "pacific", date: "1937-12-13", title: "Nanjing massacre begins" },
    { lane: "pacific", date: "1940-09-27", title: "Tripartite Pact", text: "Germany, Italy and Japan." },
    { lane: "pacific", date: "1941-12-07", title: "Pearl Harbor", text: "Plus near-simultaneous attacks on Malaya, Hong Kong and the Philippines." },
    { lane: "pacific", date: "1942-02-15", title: "Fall of Singapore" },
    { lane: "pacific", date: "1942-06-04", end: "1942-06-07", title: "Midway" },
    { lane: "pacific", date: "1942-08-07", end: "1943-02-09", title: "Guadalcanal" },
    { lane: "pacific", date: "1944-10-23", end: "1944-10-26", title: "Leyte Gulf" },
    { lane: "pacific", date: "1945-02-19", end: "1945-03-26", title: "Iwo Jima" },
    { lane: "pacific", date: "1945-04-01", end: "1945-06-22", title: "Okinawa" },
    { lane: "pacific", date: "1945-08-06", title: "Hiroshima" },
    { lane: "pacific", date: "1945-08-09", title: "Nagasaki; USSR invades Manchuria" },
    { lane: "pacific", date: "1945-09-02", title: "Japan signs surrender" }
  ],

  leaders: [
    { name: "W. L. Mackenzie King", country: "Canada", side: "allied", born: "1874-12-17", died: "1950-07-22", start: "1935-10-23", end: "1948-11-15" },
    { name: "Neville Chamberlain", country: "UK", side: "allied", born: "1869-03-18", died: "1940-11-09", start: "1937-05-28", end: "1940-05-10" },
    { name: "Winston Churchill", country: "UK", side: "allied", born: "1874-11-30", died: "1965-01-24", start: "1940-05-10", end: "1945-07-26" },
    { name: "Clement Attlee", country: "UK", side: "allied", born: "1883-01-03", died: "1967-10-08", start: "1945-07-26", end: "1951-10-26" },
    { name: "Franklin D. Roosevelt", country: "USA", side: "allied", born: "1882-01-30", died: "1945-04-12", start: "1933-03-04", end: "1945-04-12" },
    { name: "Harry S. Truman", country: "USA", side: "allied", born: "1884-05-08", died: "1972-12-26", start: "1945-04-12", end: "1953-01-20" },
    { name: "Joseph Stalin", country: "USSR", side: "soviet", born: "1878-12-18", died: "1953-03-05", start: "1922-04-03", end: "1953-03-05" },
    { name: "Charles de Gaulle", country: "Free France", side: "allied", born: "1890-11-22", died: "1970-11-09", start: "1940-06-18", end: "1946-01-20" },
    { name: "Philippe Pétain", country: "Vichy France", side: "axis", born: "1856-04-24", died: "1951-07-23", start: "1940-07-11", end: "1944-08-20" },
    { name: "Chiang Kai-shek", country: "China", side: "allied", born: "1887-10-31", died: "1975-04-05", start: "1928-10-10", end: "1949-01-21" },
    { name: "Adolf Hitler", country: "Germany", side: "axis", born: "1889-04-20", died: "1945-04-30", start: "1933-01-30", end: "1945-04-30" },
    { name: "Benito Mussolini", country: "Italy", side: "axis", born: "1883-07-29", died: "1945-04-28", start: "1922-10-31", end: "1943-07-25" },
    { name: "Hideki Tojo", country: "Japan", side: "axis", born: "1884-12-30", died: "1948-12-23", start: "1941-10-18", end: "1944-07-22" },
    { name: "Emperor Hirohito", country: "Japan", side: "axis", born: "1901-04-29", died: "1989-01-07", start: "1926-12-25", end: "1989-01-07" }
  ],

  books: [
    { title: "The Second World War", author: "Antony Beevor", start: "1939-09-01", end: "1945-09-02", owned: false },
    { title: "The Necessary War", author: "Tim Cook", start: "1939-09-01", end: "1943-12-31", owned: false, canadian: true },
    { title: "Fight to the Finish", author: "Tim Cook", start: "1944-01-01", end: "1945-09-02", owned: false, canadian: true },
    { title: "The Splendid and the Vile", author: "Erik Larson", start: "1940-05-10", end: "1941-05-11", owned: false },
    { title: "Stalingrad", author: "Antony Beevor", start: "1942-06-28", end: "1943-02-02", owned: false },
    { title: "An Army at Dawn", author: "Rick Atkinson", start: "1942-11-08", end: "1943-05-13", owned: false },
    { title: "The Day of Battle", author: "Rick Atkinson", start: "1943-07-10", end: "1944-06-04", owned: false },
    { title: "The Guns at Last Light", author: "Rick Atkinson", start: "1944-06-06", end: "1945-05-08", owned: false },
    { title: "Ortona", author: "Mark Zuehlke", start: "1943-12-20", end: "1943-12-28", owned: false, canadian: true },
    { title: "Forgotten Ally: China's WWII", author: "Rana Mitter", start: "1937-07-07", end: "1945-09-02", owned: false },
    { title: "Bloodlands", author: "Timothy Snyder", start: "1937-01-01", end: "1945-05-08", owned: false },
    { title: "All the Light We Cannot See (fiction)", author: "Anthony Doerr", start: "1937-01-01", end: "1944-09-01", owned: true }
  ],

  // Birth years are entered in the browser and kept in localStorage.
  family: [
    { id: "father", label: "Dr. B. N. Nandi (father)" },
    { id: "mother", label: "Mother" },
    { id: "self", label: "Amit" }
  ],

  // Map snapshots. Country ids are ISO 3166 numeric codes (modern borders —
  // a deliberate simplification for the mockup).
  // Statuses: axis · occupied (by the Axis) · allied · soviet · contested · neutral
  mapSnapshots: [
    { date: "1937-12-31", label: "End of 1937", status: {
        axis: [276, 40, 380, 392, 408, 410, 158],
        contested: [156],
        allied: [826, 250, 124, 36, 554, 710, 356, 586, 50],
        soviet: [643, 112, 804, 398, 860, 417, 762, 795, 31, 51, 268, 496] } },
    { date: "1939-10-06", label: "Poland divided, Oct 1939", status: {
        axis: [276, 40, 203, 703, 380, 8, 392, 408, 410, 158],
        occupied: [616],
        contested: [156],
        allied: [826, 250, 124, 36, 554, 710, 356, 586, 50],
        soviet: [643, 112, 804, 398, 860, 417, 762, 795, 31, 51, 268, 496] } },
    { date: "1940-11-30", label: "After the fall of France, Nov 1940", status: {
        axis: [276, 40, 203, 703, 380, 8, 392, 408, 410, 158, 348, 642],
        occupied: [616, 208, 578, 528, 56, 442, 250, 704, 418, 116],
        contested: [156],
        allied: [826, 124, 36, 554, 710, 356, 586, 50, 300],
        soviet: [643, 112, 804, 398, 860, 417, 762, 795, 31, 51, 268, 496, 233, 428, 440] } },
    { date: "1941-12-31", label: "After Barbarossa and Pearl Harbor, Dec 1941", status: {
        axis: [276, 40, 203, 703, 380, 8, 392, 408, 410, 158, 348, 642, 100, 246, 764, 191],
        occupied: [616, 208, 578, 528, 56, 442, 250, 704, 418, 116, 688, 70, 499, 705, 807, 300, 233, 428, 440, 112, 804],
        contested: [156, 643, 458],
        allied: [826, 124, 36, 554, 710, 356, 586, 50, 840, 608],
        soviet: [398, 860, 417, 762, 795, 31, 51, 268, 496] } },
    { date: "1942-11-30", label: "Axis high-water mark, Nov 1942", status: {
        axis: [276, 40, 203, 703, 380, 8, 392, 408, 410, 158, 348, 642, 100, 246, 764, 191],
        occupied: [616, 208, 578, 528, 56, 442, 250, 704, 418, 116, 688, 70, 499, 705, 807, 300, 233, 428, 440, 112, 804, 608, 360, 458, 104, 96, 626, 788],
        contested: [156, 643, 598, 434],
        allied: [826, 124, 36, 554, 710, 356, 586, 50, 840, 818, 484, 76],
        soviet: [398, 860, 417, 762, 795, 31, 51, 268, 496] } },
    { date: "1944-06-30", label: "D-Day and Bagration, June 1944", status: {
        axis: [276, 40, 203, 703, 392, 408, 410, 158, 348, 642, 100, 246, 764, 191],
        occupied: [616, 208, 578, 528, 56, 442, 704, 418, 116, 688, 70, 499, 705, 807, 300, 233, 428, 440, 112, 360, 458, 96, 626, 8],
        contested: [156, 250, 380, 104, 608, 598],
        allied: [826, 124, 36, 554, 710, 356, 586, 50, 840, 818, 484, 76, 434, 788],
        soviet: [643, 804, 398, 860, 417, 762, 795, 31, 51, 268, 496] } },
    { date: "1945-05-08", label: "VE Day, May 1945", status: {
        axis: [392, 408, 410, 158],
        occupied: [704, 418, 116, 360, 458, 96, 626],
        contested: [156, 104, 608],
        allied: [826, 124, 36, 554, 710, 356, 586, 50, 840, 818, 484, 76, 434, 788, 250, 528, 56, 442, 208, 578, 380, 300, 276, 40, 598],
        soviet: [643, 804, 112, 233, 428, 440, 616, 203, 703, 348, 642, 100, 688, 70, 499, 705, 807, 191, 398, 860, 417, 762, 795, 31, 51, 268, 496] } },
    { date: "1945-09-02", label: "Japan surrenders, Sept 1945", status: {
        occupied: [],
        allied: [826, 124, 36, 554, 710, 356, 586, 50, 840, 818, 484, 76, 434, 788, 250, 528, 56, 442, 208, 578, 380, 300, 276, 40, 598, 392, 704, 418, 116, 360, 458, 96, 626, 104, 608, 158, 156, 410],
        soviet: [643, 804, 112, 233, 428, 440, 616, 203, 703, 348, 642, 100, 688, 70, 499, 705, 807, 191, 398, 860, 417, 762, 795, 31, 51, 268, 496, 408] } }
  ],

  sideColours: {
    axis: "#8c3b3b", occupied: "#c98b84", allied: "#3f6e8c", soviet: "#b36b2e",
    contested: "#d9c27a", neutral: "#e6e2d8"
  },
  laneColours: {
    canada: "#b22d2d", west: "#3f6e8c", east: "#b36b2e", med: "#6b8c3f", pacific: "#6b4f8c"
  }
};
