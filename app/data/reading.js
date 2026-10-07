// Ford's reading shelves. Each shelf is a question or topic; books are real, published titles.
// `pair` marks a deliberate counterpoint, so a debate shows both sides. `find` marks a gap to fill.
window.READING = [
  { id: "lens", title: "Seeing past the Western lens", note: "Books that put the people at the edge of the European story back at the centre.", books: [
    { title: "Europe and the People Without History", author: "Eric R. Wolf", year: 1982, note: "The argument that Europe's history is usually told as if everyone else were scenery." },
    { title: "The Rediscovery of America", author: "Ned Blackhawk", year: 2023, note: "US history retold with Indigenous nations at the centre. Blackhawk is Western Shoshone." },
    { title: "The Inconvenient Indian", author: "Thomas King", year: 2012, note: "A wry, personal history of Indigenous peoples in Canada and the US. King is Cherokee." },
    { title: "Historical Atlas of Canada, Vol. 1: From the Beginning to 1800", author: "R. Cole Harris (ed.)", year: 1987, note: "Strong on Indigenous geography before and during contact." },
    { title: "Indigenous Peoples Atlas of Canada", author: "Canadian Geographic and Indigenous partners", year: 2018, note: "First Nations, Inuit and Métis maps made with the communities." },
    { title: "General History of Africa (8 vols)", author: "UNESCO", year: 1981, note: "Africa's history written largely by African historians. Free online." },
    { title: "The Penguin History of Early India", author: "Romila Thapar", year: 2002, note: "India from the origins to 1300, by its leading historian." },
    { title: "The Open Empire: A History of China", author: "Valerie Hansen", year: 2000, note: "China as an empire shaped by its neighbours and contacts." }
  ]},
  { id: "colonial-comparison", title: "Comparing colonial powers", note: "Not all empires were the same, and the benefits and harms both deserve a clear look.", books: [
    { title: "Inglorious Empire: What the British Did to India", author: "Shashi Tharoor", year: 2017, note: "The case against: famines, deindustrialisation, railways built for extraction." },
    { title: "Empire: How Britain Made the Modern World", author: "Niall Ferguson", year: 2003, note: "The case for a mixed legacy: law, trade, infrastructure. Read against Tharoor.", pair: "Inglorious Empire" },
    { title: "The Anarchy", author: "William Dalrymple", year: 2019, note: "How a trading company, the East India Company, conquered a subcontinent." },
    { title: "Revolusi: Indonesia and the Birth of the Modern World", author: "David Van Reybrouck", year: 2020, note: "Dutch rule and Indonesian independence, built on interviews with survivors." },
    { title: "Max Havelaar", author: "Multatuli", year: 1860, note: "A Dutch official's novel exposing the forced-cultivation system on Java." }
  ]},
  { id: "after-empire", title: "After the colonisers left", note: "What departing empires left behind.", books: [
    { title: "If You Leave Us Here, We Will Die: How Genocide Was Stopped in East Timor", author: "Geoffrey Robinson", year: 2010, note: "Portugal's exit in 1975, Indonesia's invasion and the 1999 vote." },
    { title: "A History of South Africa", author: "Leonard Thompson", year: 1990, note: "From the Cape Colony through segregation to apartheid and its end." },
    { title: "Born a Crime", author: "Trevor Noah", year: 2016, note: "Growing up under late apartheid, as the child of a mixed relationship that was illegal." },
    { title: "Mozambique's independence and civil war (1975–92)", author: "", find: true, note: "A good general history still to find." }
  ]},
  { id: "atlantic-slavery", title: "The Atlantic slave trade", note: "Including the hard question of how African rulers came to sell captives.", books: [
    { title: "A Fistful of Shells: West Africa from the Rise of the Slave Trade to the Age of Revolution", author: "Toby Green", year: 2019, note: "West African kingdoms as full actors: why rulers sold war captives and outsiders, and what the trade did to them." },
    { title: "Born in Blackness: Africa, Africans and the Making of the Modern World", author: "Howard W. French", year: 2021, note: "Puts Africa at the centre of the rise of the West." },
    { title: "The Slave Ship: A Human History", author: "Marcus Rediker", year: 2007, note: "The Middle Passage, seen from the ships." }
  ]},
  { id: "us-race", title: "From slavery to Obama, and the backlash", note: "How the defeated South shaped modern American politics.", books: [
    { title: "The Half Has Never Been Told: Slavery and the Making of American Capitalism", author: "Edward E. Baptist", year: 2014, note: "Cotton, slavery and the US economy." },
    { title: "Reconstruction: America's Unfinished Revolution, 1863–1877", author: "Eric Foner", year: 1988, note: "The standard history of what was tried after the Civil War, and why it was abandoned." },
    { title: "How the South Won the Civil War", author: "Heather Cox Richardson", year: 2020, note: "How the defeated South's politics spread west and came to the present day." },
    { title: "Caste: The Origins of Our Discontents", author: "Isabel Wilkerson", year: 2020, note: "Race in America as a caste system, compared with India and Nazi Germany." },
    { title: "We Were Eight Years in Power", author: "Ta-Nehisi Coates", year: 2017, note: "Essays from the Obama years and the backlash that followed." }
  ]},
  { id: "jewish-history", title: "Why and when were Jews persecuted?", tour: "jewish-history" },
  { id: "rome", title: "The rise and fall of Rome", tour: "rome-rise-fall" },
  { id: "silk-roads", title: "India and the wider world", books: [
    { title: "The Golden Road: How Ancient India Transformed the World", author: "William Dalrymple", year: 2024, note: "Currently reading. Aha notes live in the vault." }
  ]}
];
