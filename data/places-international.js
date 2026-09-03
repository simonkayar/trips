/* ------------------------------------------------------------------
   places-international.js — countries (kind: 'country') and the cities /
   sites we visited in them (kind: 'place', parent: <country id>).

   Schema for a place:
   {
     id, name, kind: 'country' | 'state' | 'place', scope: 'international' | 'domestic',
     country, state, parent, lat, lng, emoji, tagline, visited, aka: [],
     glance: { label: value, ... },
     history: [], mustSee: [], food: [], culture: [], funFacts: [], tips: []
   }
   Use **bold** inside list strings for a lead-in word.
   ------------------------------------------------------------------ */
TRIPS.places.push(
  /* ======================= SINGAPORE ======================= */
  {
    id: 'singapore', name: 'Singapore', kind: 'place', scope: 'international', country: 'Singapore',
    lat: 1.29, lng: 103.85, emoji: '🦁', tagline: 'The Lion City — a garden city-state on the equator', visited: 'Dec 2024',
    glance: { 'Type': 'Island city-state', 'Language': 'English, Malay, Mandarin, Tamil', 'Currency': 'Singapore dollar (SGD)', 'Population': '~5.9 million', 'Time zone': 'UTC+8 (2½ hours ahead of India)' },
    history: [
      '**1819** — Sir Stamford Raffles set up a British trading post on the island; the name comes from the Sanskrit “Singapura”, Lion City.',
      '**1942–45** — Occupied by Japan during World War II; the fall of Singapore was one of Britain’s worst defeats.',
      '**1965** — Separated from Malaysia and became an independent republic under Lee Kuan Yew; grew from a port town into one of the world’s richest countries in one generation.'
    ],
    mustSee: [
      '**Gardens by the Bay** — the Supertree Grove light show every evening and the Cloud Forest dome',
      '**Marina Bay Sands** — the ship-on-three-towers skyline and the SkyPark view',
      '**Sentosa** — Universal Studios, S.E.A. Aquarium and the cable car',
      '**Chinatown, Little India & Kampong Glam** — the three historic ethnic quarters',
      '**Singapore Zoo & Night Safari** — open enclosures, no bars',
      '**Merlion Park** — the half-lion, half-fish statue spouting into Marina Bay'
    ],
    food: [
      '**Hawker centres** (Lau Pa Sat, Maxwell, Old Airport Road) — Michelin-recognised meals for a few dollars',
      '**Chilli crab** and **Hainanese chicken rice** — the two national dishes',
      '**Laksa, kaya toast, roti prata, satay** — breakfast to supper, Malay-Chinese-Indian all mixed'
    ],
    culture: [
      'Four official languages and a “Singlish” of its own — “can lah!”',
      'Famously strict: fines for littering, chewing gum imports banned since 1992',
      'Everything runs on time — the MRT is the easiest way around'
    ],
    funFacts: [
      'Singapore is one of only three city-states in the world (with Monaco and Vatican City).',
      'Changi Airport has a 40 m indoor waterfall — the Rain Vortex at Jewel.',
      'The island has grown by about 25% since independence through land reclamation.'
    ],
    tips: ['Use an EZ-Link / contactless card on the MRT and buses.', 'Carry a light rain jacket — showers arrive suddenly, all year.', 'Hawker centres: “chope” a seat with a tissue packet, then queue.']
  },

  /* ======================= THAILAND ======================= */
  {
    id: 'thailand', name: 'Thailand', kind: 'country', scope: 'international', country: 'Thailand',
    lat: 15.87, lng: 100.99, emoji: '🐘', tagline: 'Land of Smiles', visited: 'June 2024',
    glance: { 'Capital': 'Bangkok', 'Language': 'Thai', 'Currency': 'Thai baht (THB)', 'Population': '~72 million', 'Religion': '~93% Buddhist', 'Time zone': 'UTC+7 (1½ hours ahead of India)' },
    history: [
      'Known as **Siam** until 1939; the only South-East Asian country never colonised by a European power.',
      'Great kingdoms of **Sukhothai** (13th c.) and **Ayutthaya** (1351–1767) preceded the current Chakri dynasty, which founded Bangkok in 1782.',
      'A constitutional monarchy since 1932; King Bhumibol (Rama IX) reigned for 70 years until 2016.'
    ],
    mustSee: ['Bangkok’s Grand Palace and temples', 'Phuket and the Andaman islands', 'Chiang Mai and the northern hills (next time!)', 'Ayutthaya ruins near Bangkok'],
    food: ['**Pad Thai, green curry, tom yum goong, mango sticky rice** — the classics', 'Street food is the real cuisine — eat where the queue is'],
    culture: ['The **wai** (palms together) greeting; never touch someone’s head or point feet at a Buddha image', 'Dress modestly at temples: shoulders and knees covered', 'Deep respect for the monarchy — stand for the royal anthem in cinemas'],
    funFacts: ['Bangkok’s ceremonial name is the longest place name in the world (168 letters).', 'Thailand is the world’s largest exporter of rice in many years and home to over 40,000 Buddhist temples.', 'The Thai calendar year is 543 years ahead of ours (2024 = 2567 BE).'],
    tips: ['Tuk-tuks are fun but agree the fare first; Grab is cheaper.', 'Temples close by 5–6 pm; go early to beat the heat.']
  },
  {
    id: 'bangkok', name: 'Bangkok', kind: 'place', scope: 'international', country: 'Thailand', parent: 'thailand',
    lat: 13.75, lng: 100.50, emoji: '🛕', tagline: 'City of Angels on the Chao Phraya', visited: 'June 2024',
    glance: { 'Thai name': 'Krung Thep', 'River': 'Chao Phraya', 'Population': '~11 million (metro)', 'Founded': '1782 by Rama I', 'Known for': 'Temples, street food, markets, nightlife' },
    history: [
      'Became the capital in **1782** when King Rama I moved across the river from Thonburi after the fall of Ayutthaya.',
      'Its canals (khlongs) earned it the nickname **“Venice of the East”**; most were later paved into roads.',
      'Boomed from the 1980s into a mega-city of skyscrapers, malls and the Skytrain (BTS, 1999).'
    ],
    mustSee: [
      '**Grand Palace & Wat Phra Kaew** — the Emerald Buddha, carved from a single block of jade',
      '**Wat Pho** — the 46 m reclining Buddha and the birthplace of Thai massage',
      '**Wat Arun** — Temple of Dawn, best seen from a boat at sunset',
      '**Chatuchak Weekend Market** — 15,000 stalls',
      '**Khao San Road** and the **Chao Phraya river boats**',
      '**ICONSIAM** and the floating markets (Damnoen Saduak) for a day trip'
    ],
    food: ['**Boat noodles** at Victory Monument, **pad kra pao** (holy basil stir-fry) with a fried egg', 'Chinatown (**Yaowarat**) after dark for seafood and dim sum', '**Thai iced tea** and coconut ice cream in the heat'],
    culture: ['Shoes off, cover up and stay quiet inside temples', 'Bargaining is expected at markets, not at shops', 'The city is officially named “Krung Thep Maha Nakhon…” — 168 letters in full'],
    funFacts: ['Bangkok has been ranked the world’s most-visited city several times.', 'Wat Arun’s spires are decorated with millions of pieces of broken Chinese porcelain.', 'The Emerald Buddha’s golden robes are changed three times a year by the King, one for each season.'],
    tips: ['Wear proper clothes for the Grand Palace or you will have to rent a sarong at the gate.', 'The Chao Phraya Express boat is the fastest, cheapest way between the temples.']
  },
  {
    id: 'phuket', name: 'Phuket', kind: 'place', scope: 'international', country: 'Thailand', parent: 'thailand',
    lat: 7.88, lng: 98.39, emoji: '🏝️', tagline: 'Pearl of the Andaman', visited: 'June 2024',
    glance: { 'Type': 'Thailand’s largest island', 'Sea': 'Andaman Sea', 'Known for': 'Beaches, island trips, Old Town', 'Best season': 'Nov–Apr (dry)', 'Connected by': 'Sarasin Bridge to the mainland' },
    history: [
      'Grew rich on **tin mining** and rubber in the 19th century, bringing Chinese and Portuguese influences to Old Town’s Sino-Portuguese shophouses.',
      'In **1785** two sisters, Chan and Mook, led the defence against a Burmese invasion — the Heroines’ Monument honours them.',
      'Hit hard by the **2004 tsunami**; rebuilt into one of Asia’s top beach destinations.'
    ],
    mustSee: [
      '**Phi Phi Islands & Maya Bay** — the beach from the film “The Beach”',
      '**James Bond Island (Khao Phing Kan)** in Phang Nga Bay, with sea-cave kayaking',
      '**Big Buddha** — 45 m white marble statue on Nakkerd Hill',
      '**Old Phuket Town** — pastel Sino-Portuguese streets and Sunday night market',
      '**Patong, Kata and Karon** beaches; **Promthep Cape** for sunset',
      '**Wat Chalong** — the island’s most important temple'
    ],
    food: ['**Moo hong** (Phuket-style braised pork belly), **hokkien mee**, roti with curry in Old Town', 'Fresh seafood on Rawai beach — pick it, then have it cooked next door', '**O-tao** oyster omelette, a Phuket speciality'],
    culture: ['Strong Peranakan (Chinese-Malay) heritage in Old Town', 'The **Vegetarian Festival** in Oct with dramatic street processions', 'Sea gypsies (Moken/Urak Lawoi) villages at Rawai'],
    funFacts: ['Phuket is about the size of Singapore.', 'Maya Bay was closed 2018–2022 to let its coral recover.', 'Phuket’s name may come from the Malay “bukit”, meaning hill.'],
    tips: ['Book island tours a day ahead; speedboats leave early.', 'Watch for red flags on beaches in monsoon (May–Oct) — rip currents are real.']
  },

  /* ======================= INDONESIA ======================= */
  {
    id: 'indonesia', name: 'Indonesia', kind: 'country', scope: 'international', country: 'Indonesia',
    lat: -2.5, lng: 118, emoji: '🌋', tagline: 'Seventeen thousand islands', visited: 'June 2025',
    glance: { 'Capital': 'Jakarta (moving to Nusantara)', 'Language': 'Bahasa Indonesia', 'Currency': 'Rupiah (IDR)', 'Population': '~280 million — 4th largest', 'Islands': '~17,000', 'Time zones': '3 (Java UTC+7, Bali UTC+8)' },
    history: [
      'Great Hindu-Buddhist kingdoms — **Sailendra, Mataram, Majapahit** — built Borobudur and Prambanan between the 8th and 15th centuries.',
      'Islam spread through trade from the 13th century; the **Dutch East India Company** then ruled for ~350 years as the Dutch East Indies.',
      '**17 August 1945** — Sukarno proclaimed independence; the Dutch recognised it in 1949.'
    ],
    mustSee: ['Borobudur and Prambanan near Yogyakarta', 'Bali’s temples, rice terraces and beaches', 'Komodo dragons, Mount Bromo and Raja Ampat (for next time)'],
    food: ['**Nasi goreng, satay, rendang, gado-gado, tempeh** — and sambal with everything', 'Kopi (coffee) from Java and Sumatra — the word “java” for coffee comes from here'],
    culture: ['World’s largest Muslim-majority country, yet Bali is ~87% Hindu', 'National motto **“Bhinneka Tunggal Ika”** — Unity in Diversity — from an Old Javanese poem', 'Batik cloth (UNESCO heritage) is worn on Fridays in offices'],
    funFacts: ['Indonesia has more active volcanoes than any other country (~130).', 'Krakatoa’s 1883 eruption was heard 4,800 km away.', 'Over 700 languages are spoken across the archipelago.'],
    tips: ['Carry small rupiah notes; 100,000 IDR is roughly ₹500.', 'Sarongs are required at temples in Bali — usually provided at the entrance.']
  },
  {
    id: 'borobudur', name: 'Borobudur', kind: 'place', scope: 'international', country: 'Indonesia', parent: 'indonesia',
    lat: -7.608, lng: 110.204, emoji: '🛕', tagline: 'The largest Buddhist monument on Earth', visited: 'June 2025',
    glance: { 'Location': 'Magelang, Central Java (near Yogyakarta)', 'Built': 'c. 780–840 CE, Sailendra dynasty', 'UNESCO': 'World Heritage 1991', 'Stone blocks': '~2 million', 'Reliefs': '2,672 panels, 504 Buddha statues' },
    history: [
      'Built by the **Sailendra** kings as a giant three-dimensional mandala: a square base (the world of desire), circular terraces (world of forms) and the top stupa (formlessness).',
      'Abandoned around the 14th century as Java turned to Islam and volcanic ash and jungle buried it.',
      'Rediscovered in **1814** under Sir Thomas Stamford Raffles (the same Raffles who founded Singapore); fully restored by UNESCO 1975–82.'
    ],
    mustSee: ['**Sunrise** from the top terraces, with Mount Merapi smoking in the distance', 'The **72 bell-shaped stupas**, each with a Buddha inside', 'The **relief galleries** — walk clockwise, the story of the Buddha’s life unfolds', '**Mendut and Pawon** temples, on a straight line with Borobudur', 'Punthuk Setumbu hill for the classic misty-morning view'],
    food: ['**Gudeg** (young jackfruit stew), the pride of Yogyakarta', 'Bakpia pastries and **wedang ronde** ginger drink'],
    culture: ['Visitors now climb in small groups with special sandals to protect the stone', 'Still an active pilgrimage site — Vesak (Waisak) full moon draws thousands of monks', 'Yogyakarta nearby is still ruled by a Sultan and is the heart of Javanese arts'],
    funFacts: ['The monument was built without mortar — the volcanic stones interlock.', 'Some say touching the Buddha inside a stupa through the holes brings luck (now discouraged!).', 'It is one of the world’s largest Buddhist monuments, only rivalled by Angkor Wat in scale among South-East Asian temples.'],
    tips: ['Buy the sunrise ticket from the Manohara hotel side for early access.', 'Combine with Prambanan in one day — about 1½ hours apart.']
  },
  {
    id: 'prambanan', name: 'Prambanan', kind: 'place', scope: 'international', country: 'Indonesia', parent: 'indonesia',
    lat: -7.752, lng: 110.491, emoji: '🕉️', tagline: 'Indonesia’s grandest Hindu temple', visited: 'June 2025',
    glance: { 'Location': 'Yogyakarta / Central Java border', 'Built': 'c. 850 CE, Mataram kingdom', 'UNESCO': 'World Heritage 1991', 'Main shrine': 'Shiva temple, 47 m tall', 'Dedicated to': 'Trimurti — Brahma, Vishnu, Shiva' },
    history: [
      'Built by **Rakai Pikatan** of the Sanjaya line of the Mataram kingdom — possibly as a Hindu answer to Buddhist Borobudur, 17 km away.',
      'Collapsed in a 16th-century earthquake and lay in ruins until reconstruction began in 1918; the main Shiva temple was completed in 1953.',
      'Damaged again by the 2006 Yogyakarta earthquake and patiently repaired.'
    ],
    mustSee: ['The **Shiva, Brahma and Vishnu** temples with their Nandi, Hamsa and Garuda shrines opposite', 'The **Ramayana reliefs** running around the Shiva and Brahma temples', '**Ramayana Ballet** performed on an open-air stage with the temples floodlit behind', 'Nearby **Sewu** (Buddhist) and **Ratu Boko** palace ruins for sunset'],
    food: ['**Sate klathak** — goat satay on iron skewers, a Yogyakarta speciality', 'Es dawet (coconut-milk dessert drink) from carts outside'],
    culture: ['Locals call it **Roro Jonggrang** after a legend of a princess turned to stone as the 1,000th statue', 'Hindu-Buddhist temples stand side by side here — a symbol of tolerance', 'Hindu ceremonies from Bali are still occasionally held here'],
    funFacts: ['The complex originally had 240 temples; most of the small ones are still heaps of stone.', 'The Shiva temple houses a Durga statue believed to be the petrified princess Roro Jonggrang.', 'Prambanan is the largest Hindu temple site in Indonesia and one of the biggest in South-East Asia.'],
    tips: ['Go late afternoon for softer light and fewer crowds.', 'Book the Ramayana Ballet (Tue/Thu/Sat in dry season) — it runs 2 hours.']
  },
  {
    id: 'bali', name: 'Bali', kind: 'place', scope: 'international', country: 'Indonesia', parent: 'indonesia',
    lat: -8.51, lng: 115.26, emoji: '🌺', tagline: 'Island of the Gods', visited: 'June 2025',
    glance: { 'Capital': 'Denpasar', 'Religion': '~87% Balinese Hindu', 'Highest point': 'Mount Agung, 3,031 m', 'Known for': 'Temples, rice terraces, surf, Ubud arts', 'Time zone': 'UTC+8' },
    history: [
      'Hinduism arrived from Java; when Majapahit fell in the 15th century its priests and nobles fled to Bali, preserving Hindu culture on an island in a Muslim archipelago.',
      'The Dutch took full control only in **1906–08** after the tragic “puputan” mass ritual suicides of the Balinese royal courts.',
      'Tourism began in the 1930s with artists in Ubud; today it is Indonesia’s most-visited island.'
    ],
    mustSee: [
      '**Tanah Lot** — sea temple on a rock, best at sunset',
      '**Uluwatu** — cliff-top temple with the Kecak fire dance at dusk',
      '**Tegalalang rice terraces** and **Ubud** — Monkey Forest, palace, art market',
      '**Tirta Empul** — holy spring where locals bathe for purification',
      '**Mount Batur** sunrise trek; **Nusa Penida** for Kelingking beach',
      '**Besakih**, the mother temple on Mount Agung'
    ],
    food: ['**Babi guling** (suckling pig) and **bebek betutu** (slow-roasted duck)', '**Nasi campur** — rice with a little of everything', 'Luwak coffee tastings on the plantations around Ubud'],
    culture: ['Daily **canang sari** flower offerings on every doorstep', 'Balinese names follow birth order: Wayan, Made, Nyoman, Ketut — then repeat', '**Nyepi**, the Day of Silence — the whole island, even the airport, shuts down for 24 hours'],
    funFacts: ['Bali has over 20,000 temples — roughly one for every 200 people.', 'The **subak** irrigation system, run by temple priests since the 9th century, is a UNESCO heritage practice.', 'Bali is one of the few places where you can see the Kecak — a “monkey chant” performed by 100 men with no instruments.'],
    tips: ['Rent a car with driver for the day — roads are slow, distances deceptive.', 'Never step on a canang offering on the pavement.']
  },

  /* ======================= SWITZERLAND ======================= */
  {
    id: 'switzerland', name: 'Switzerland', kind: 'country', scope: 'international', country: 'Switzerland',
    lat: 46.82, lng: 8.23, emoji: '⛰️', tagline: 'Alps, lakes and clockwork trains', visited: 'June 2026',
    glance: { 'Capital': 'Bern (federal city)', 'Languages': 'German, French, Italian, Romansh', 'Currency': 'Swiss franc (CHF)', 'Population': '~9 million', 'Cantons': '26', 'Time zone': 'UTC+2 in summer (3½ hours behind India)' },
    history: [
      '**1291** — Three forest cantons swore the Rütli oath, the founding of the Swiss Confederation; William Tell’s legend belongs to this era.',
      'Neutral since **1815** (Congress of Vienna); stayed out of both World Wars.',
      'Home of the **Red Cross** (1863, Geneva) and, since 1848, a federal state with direct democracy — citizens vote on referendums several times a year.'
    ],
    mustSee: ['Zurich, Lucerne and Interlaken (our route)', 'Jungfraujoch — “Top of Europe” railway', 'Matterhorn at Zermatt, the Glacier Express, Lake Geneva'],
    food: ['**Cheese fondue and raclette**, **rösti**, and **Zürcher Geschnetzeltes** (veal in cream sauce)', 'Swiss chocolate — Lindt, Toblerone, Läderach', 'Birchermüesli was invented here (by Dr Bircher-Benner, Zurich)'],
    culture: ['Punctuality is a national value — the trains really do run to the minute', 'Four national languages; most people speak Swiss German dialects daily', 'Everyone recycles, everyone hikes, and shops shut on Sundays'],
    funFacts: ['Switzerland has no single head of state — a seven-member Federal Council rules together.', 'The country has enough bunker space to shelter its entire population.', 'The Swiss consume more chocolate per person than anyone else — about 10 kg a year.'],
    tips: ['A **Swiss Travel Pass** covers trains, boats, buses and many museums.', 'Tap water is excellent everywhere — fill bottles at the fountains.']
  },
  {
    id: 'zurich', name: 'Zurich', kind: 'place', scope: 'international', country: 'Switzerland', parent: 'switzerland',
    lat: 47.37, lng: 8.54, emoji: '🏦', tagline: 'Lakeside banking city with a medieval heart', visited: 'June 2026',
    glance: { 'Canton': 'Zurich', 'Lake': 'Lake Zurich, river Limmat', 'Language': 'German', 'Population': '~450,000 (city)', 'Known for': 'Banks, chocolate, Bahnhofstrasse, old town' },
    history: ['A Roman customs post called **Turicum**; became a free imperial city in 1218.', '**Huldrych Zwingli** launched the Swiss Reformation from the Grossmünster in 1519.', 'Dada art movement was born at **Cabaret Voltaire** in 1916; Einstein studied at ETH Zurich.'],
    mustSee: ['**Old Town (Altstadt)** and the twin towers of the **Grossmünster**', '**Fraumünster** — Chagall’s stained-glass windows', '**Bahnhofstrasse** — one of the world’s most expensive shopping streets', '**Lake Zurich** boat trip and **Uetliberg** hill for the city-and-Alps panorama', '**Lindt Home of Chocolate** in Kilchberg — the 9 m chocolate fountain', 'Swiss National Museum'],
    food: ['**Zürcher Geschnetzeltes** with rösti', 'Sprüngli’s **Luxemburgerli** macarons on Paradeplatz', 'Sausages (bratwurst) from Sternen Grill'],
    culture: ['Consistently ranked among the world’s most liveable — and most expensive — cities', 'Swimming in the river and lake “Badi” baths is a summer ritual', 'Very tidy and quiet; no noise after 10 pm'],
    funFacts: ['Zurich is Switzerland’s largest city but not its capital — that is Bern.', 'FIFA is headquartered here.', 'The Grossmünster towers appear on most postcards — legend says Charlemagne founded the church where the graves of the city’s patron saints were found.'],
    tips: ['The airport-to-city train takes 10 minutes.', 'Buy a Zürich Card for transport plus museums.']
  },
  {
    id: 'lucerne', name: 'Lucerne', kind: 'place', scope: 'international', country: 'Switzerland', parent: 'switzerland',
    lat: 47.05, lng: 8.31, emoji: '🌉', tagline: 'Chapel Bridge, lake and Mount Pilatus', visited: 'June 2026',
    glance: { 'Canton': 'Lucerne', 'Lake': 'Lake Lucerne (Vierwaldstättersee)', 'Language': 'German', 'Famous for': 'Kapellbrücke, Lion Monument, Pilatus & Rigi', 'Population': '~85,000' },
    history: ['Grew around a Benedictine monastery in the 8th century and prospered on the Gotthard pass trade route.', 'Joined the Confederation in **1332**, one of the earliest members.', 'The **Lion Monument** (1821) remembers Swiss Guards killed defending the French king in 1792 — Mark Twain called it “the saddest stone in the world”.'],
    mustSee: ['**Kapellbrücke (Chapel Bridge)** — 14th-century covered wooden bridge with painted panels and the Water Tower', '**Lion Monument** (Löwendenkmal)', '**Mount Pilatus** — the world’s steepest cogwheel railway (48%), cable car and boat “Golden Round Trip”', '**Mount Rigi** — “Queen of the Mountains”, reached by boat and Europe’s first mountain railway (1871)', '**Old Town** frescoed houses and the **Musegg Wall** towers', '**Swiss Museum of Transport**'],
    food: ['**Luzerner Chügelipastete** — puff-pastry pie with veal and mushrooms', 'Lake fish (Egli / perch fillets)', 'Bachmann bakery for Lebkuchen'],
    culture: ['**Fasnacht** carnival — the wildest in Switzerland, with brass bands and masks', 'Lucerne Festival is one of the world’s top classical music festivals', 'The lake steamers are part of the public transport network'],
    funFacts: ['The Kapellbrücke, built 1333, is the oldest covered wooden bridge in Europe; much of it burnt in 1993 and was rebuilt.', 'Legend says dragons live on Pilatus — and Pontius Pilate’s ghost.', 'Queen Victoria climbed Rigi on a mule in 1868.'],
    tips: ['Do the Golden Round Trip in one direction only if the weather is clear — check the Pilatus webcam first.', 'Rigi is included in the Swiss Travel Pass; Pilatus is 50% off.']
  },
  {
    id: 'interlaken', name: 'Interlaken', kind: 'place', scope: 'international', country: 'Switzerland', parent: 'switzerland',
    lat: 46.69, lng: 7.86, emoji: '🏔️', tagline: 'Between two lakes, below the Jungfrau', visited: 'June 2026',
    glance: { 'Canton': 'Bern', 'Between': 'Lake Thun and Lake Brienz', 'Altitude': '568 m', 'Gateway to': 'Jungfrau region — Grindelwald, Lauterbrunnen, Wengen, Mürren', 'Known for': 'Jungfraujoch, paragliding, Harder Kulm' },
    history: ['Named for its position “inter lacus” — between the lakes; grew from a 12th-century monastery.', 'Became a resort in the 1800s when British climbers and painters discovered the Alps; the Jungfrau railway opened in **1912** after 16 years of tunnelling.', 'Byron, Mendelssohn and Goethe all came for the views of the Jungfrau.'],
    mustSee: ['**Jungfraujoch – Top of Europe** (3,454 m) — Sphinx observatory, Ice Palace, Aletsch glacier', '**Lauterbrunnen** valley — 72 waterfalls including Staubbach and **Trümmelbach** inside the rock', '**Harder Kulm** funicular for the two-lakes viewpoint', '**Grindelwald First** cliff walk and **Schilthorn** (James Bond’s Piz Gloria)', 'Boat on **Lake Brienz** to the Giessbach falls', 'Paragliding over Höhematte meadow'],
    food: ['**Cheese fondue** on a cold evening', '**Meringues with cream** — invented in nearby Meiringen', 'Alpine macaroni (Älplermagronen) with apple sauce'],
    culture: ['The Jungfrau, Eiger and Mönch trio dominate every view — the Eiger north face is a climbing legend', 'Cow-bells, wooden chalets and geranium balconies are real, not a show', 'Very popular with Indian tourists thanks to Bollywood — Yash Chopra has a statue here'],
    funFacts: ['Jungfraujoch has the highest railway station in Europe and its own post office.', 'Lake Brienz is turquoise from glacier “rock flour”; Lake Thun is deep blue.', 'The Lauterbrunnen valley inspired Tolkien’s Rivendell.'],
    tips: ['Book Jungfraujoch for the first clear morning; clouds roll in after noon.', 'Interlaken Ost is the station for the mountain trains.']
  },

  /* ======================= FRANCE ======================= */
  {
    id: 'france', name: 'France', kind: 'country', scope: 'international', country: 'France',
    lat: 46.6, lng: 2.4, emoji: '🍷', tagline: 'Liberté, égalité, fraternité', visited: 'June 2026',
    glance: { 'Capital': 'Paris', 'Language': 'French', 'Currency': 'Euro (EUR)', 'Population': '~68 million', 'Most visited': 'The world’s most-visited country (~100 million tourists a year)', 'Time zone': 'UTC+2 in summer' },
    history: ['Roman **Gaul**, then the Frankish kingdom of Charlemagne (crowned 800 CE), which gave France its name.', 'The **1789 Revolution** ended the monarchy; Napoleon crowned himself Emperor in 1804.', 'Five Republics since; today a founding member of the EU and a permanent UN Security Council member.'],
    mustSee: ['Paris (our stop)', 'Versailles, Mont-Saint-Michel, the Loire châteaux, Provence, the Riviera'],
    food: ['Baguette, croissant, cheese (over 1,000 kinds), wine, crêpes, coq au vin, bouillabaisse', 'The French “gastronomic meal” is on UNESCO’s heritage list'],
    culture: ['Say **“Bonjour”** before anything else — it is expected in every shop', 'Long lunches, late dinners and August holidays', 'The metric system, the Tour de France and 35-hour work weeks are all French'],
    funFacts: ['France has 12 time zones because of its overseas territories — more than any country.', 'The Louvre is the world’s most-visited museum.', 'Camera, cinema, pasteurisation and the hot-air balloon were French inventions.'],
    tips: ['Museums are free on the first Sunday of the month (check which).', 'Validate train tickets; keep the metro ticket until you exit.']
  },
  {
    id: 'paris', name: 'Paris', kind: 'place', scope: 'international', country: 'France', parent: 'france',
    lat: 48.86, lng: 2.35, emoji: '🗼', tagline: 'The City of Light', visited: 'June 2026',
    glance: { 'River': 'Seine', 'Arrondissements': '20, spiralling out like a snail', 'Population': '~2.1 million (city), 12 million (metro)', 'Metro': '16 lines, 300+ stations', 'Known for': 'Eiffel Tower, Louvre, cafés, fashion' },
    history: ['A Celtic tribe, the **Parisii**, settled on the Île de la Cité; the Romans called it Lutetia.', 'Baron **Haussmann** rebuilt the city in the 1850s–70s with the wide boulevards and cream-stone buildings we see today.', 'The **Eiffel Tower** (1889) was meant to be temporary; Paris hosted the Olympics in 1900, 1924 and 2024.'],
    mustSee: [
      '**Eiffel Tower** — go up at dusk, sparkles every hour on the hour after dark',
      '**Louvre** — Mona Lisa, Venus de Milo, the glass pyramid',
      '**Notre-Dame** — reopened in Dec 2024 after the 2019 fire',
      '**Montmartre & Sacré-Cœur**, the artists’ square',
      '**Champs-Élysées & Arc de Triomphe**; **Seine river cruise** (Bateaux Mouches)',
      '**Versailles** palace and gardens — half a day by train',
      'Musée d’Orsay (Impressionists), Sainte-Chapelle’s stained glass, Luxembourg Gardens'
    ],
    food: ['**Croissant and café crème** at a corner café', '**Steak-frites**, **onion soup**, **crêpes** from a street stand', 'Macarons from Ladurée or Pierre Hermé; a picnic of baguette, cheese and grapes by the Seine'],
    culture: ['Cafés are for lingering — one coffee, two hours, no rush', 'Fashion capital — Chanel, Dior, Louis Vuitton started here', 'Parisians appreciate an attempt at French: bonjour, merci, s’il vous plaît'],
    funFacts: ['The Eiffel Tower grows about 15 cm taller in summer as the iron expands.', 'There is only one stop sign in the whole of Paris.', 'The Louvre would take about 100 days to see if you spent 30 seconds on each artwork.'],
    tips: ['Buy Eiffel Tower and Louvre tickets online weeks ahead.', 'Beware of pickpockets on the metro and at the big sights; the Navigo pass makes transport easy.']
  }
);
