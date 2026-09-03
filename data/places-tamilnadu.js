/* places-tamilnadu.js — Tamil Nadu hub + places, plus Puducherry (a Union Territory) */
TRIPS.places.push(
  {
    id: 'tamilnadu', name: 'Tamil Nadu', kind: 'state', scope: 'domestic', country: 'India', state: 'Tamil Nadu', parent: 'india',
    lat: 11.13, lng: 78.66, emoji: '🛕', tagline: 'Land of temples, hills and the Sangam tongue',
    glance: { 'Capital': 'Chennai', 'Language': 'Tamil — one of the world’s oldest living languages', 'Formed': '1956 (renamed from Madras State in 1969)', 'Districts': '38', 'Coastline': '1,076 km — India’s 2nd longest', 'UNESCO': 'Great Living Chola Temples, Mahabalipuram, Nilgiri Mountain Railway, Western Ghats' },
    history: ['Ancient **Chera, Chola and Pandya** kingdoms from the Sangam age (300 BCE–300 CE); the Cholas later ruled to Sri Lanka and South-East Asia.', '**Pallavas** built Mahabalipuram and Kanchipuram; **Nayaks** rebuilt Madurai; the British made Madras their first Indian presidency (1640).', 'The Dravidian movement shaped modern politics; Tamil cinema and the “anti-Hindi” agitations of 1965 defined the state’s identity.'],
    food: ['**Idli, dosa, sambar, pongal, filter coffee**; Chettinad pepper chicken; Madurai’s jigarthanda', 'Banana-leaf “meals” with kootu, poriyal, rasam and payasam'],
    culture: ['**Pongal** harvest festival in January; Jallikattu bull-taming', '**Bharatanatyam** dance and Carnatic music (Chennai’s December Margazhi season)', 'Kolam rice-flour patterns drawn at every doorstep at dawn'],
    funFacts: ['Tamil Nadu has 30,000+ temples — more than any state.', 'Chennai is the “Detroit of Asia”, making a third of India’s cars.', 'Tamil has a continuous literary tradition of over 2,000 years.']
  },
  {
    id: 'ooty', name: 'Ooty (Udhagamandalam)', kind: 'place', scope: 'domestic', country: 'India', state: 'Tamil Nadu', parent: 'tamilnadu',
    lat: 11.41, lng: 76.70, emoji: '🚂', tagline: 'Queen of hill stations in the Nilgiris', aka: ['Udhagamandalam', 'Ootacamund'],
    glance: { 'District': 'The Nilgiris', 'Altitude': '2,240 m', 'Famous for': 'Toy train, tea, botanical garden, Doddabetta', 'UNESCO': 'Nilgiri Mountain Railway (2005)', 'Best time': 'Apr–Jun, Sept–Nov' },
    history: ['Home of the **Toda** tribe for millennia; “discovered” by John Sullivan, Collector of Coimbatore, in **1819**, who built the first bungalow.', 'Summer capital of the Madras Presidency; the **Nilgiri Mountain Railway** (1908) climbs 2,000 m using a rack-and-pinion system.', 'Tea planting from the 1830s; the Ooty Club invented the game of **snooker** in 1875.'],
    mustSee: ['**Nilgiri Mountain Railway** — toy train from Mettupalayam via Coonoor', '**Doddabetta** peak (2,637 m), the highest in the Nilgiris', '**Botanical Garden** (1848) and the fossil tree; **Rose Garden**', '**Ooty Lake** boating; Pykara falls and **Avalanche lake**', 'Tea factory and museum; **Coonoor’s** Sim’s Park and Dolphin’s Nose', 'Toda hamlet (mund) visit'],
    food: ['Ooty **varkey** biscuits and homemade **chocolates**', 'Nilgiri tea; Toda-style honey; carrots and vegetables straight from the farms'],
    culture: ['Toda huts, embroidered shawls and sacred buffalo herds', 'May flower show in the Botanical Garden since 1896', 'Colonial cottages, churches and the boarding-school culture'],
    funFacts: ['Snooker was invented at the Ooty Club by British army officers.', 'The Nilgiri train is one of the slowest in India — 46 km in ~5 hours — and one of the most beautiful.', '“Ooty” is the shortened English form of Udhagamandalam, “village of huts”.'],
    tips: ['Book the toy train weeks ahead; the uphill morning run is the scenic one.', 'Nights are cold even in summer — pack wool.']
  },
  {
    id: 'kodaikanal', name: 'Kodaikanal', kind: 'place', scope: 'domestic', country: 'India', state: 'Tamil Nadu', parent: 'tamilnadu',
    lat: 10.24, lng: 77.49, emoji: '🌫️', tagline: 'Princess of hill stations, the gift of the forest',
    glance: { 'District': 'Dindigul', 'Altitude': '2,133 m', 'Hills': 'Palani Hills', 'Famous for': 'Star-shaped lake, Coaker’s Walk, Pillar Rocks', 'Meaning': '“Gift of the forest” in Tamil' },
    history: ['Settled by **American missionaries** in 1845 as a refuge from the plains’ heat and disease — unusual among Indian hill stations (most were British).', 'The **Kodaikanal Solar Observatory** (1899) recorded the Evershed effect in sunspots (1909).', 'The star-shaped lake was created in 1863 by Sir Vere Levinge, Collector of Madurai.'],
    mustSee: ['**Kodai Lake** — cycle the 5 km ring, boating', '**Coaker’s Walk** and **Bryant Park**', '**Pillar Rocks** (three 122 m granite pillars) and **Guna caves**', '**Dolphin’s Nose** and **Vattakanal** falls', 'Berijam lake (forest permit), Kurinji Andavar temple', 'Silver Cascade falls on the way up'],
    food: ['Homemade **chocolates** and **eucalyptus oil** from the market', 'Fresh plums, pears and avocado; hot bhutta by the lake'],
    culture: ['Kodaikanal International School (1901), one of India’s oldest international schools', 'The **Kurinji** flower blooms once in 12 years — last mass bloom 2018, next 2030'],
    funFacts: ['The Guna caves got their name from Kamal Haasan’s 1991 film Guna and are now fenced after tragedies.', 'Kodaikanal’s observatory has one of the longest continuous solar records in the world.'],
    tips: ['Mist rolls in by afternoon — do viewpoints before noon.', 'The Ghat road from Batlagundu is the easier drive; Palani route is prettier.']
  },
  {
    id: 'madurai', name: 'Madurai', kind: 'place', scope: 'domestic', country: 'India', state: 'Tamil Nadu', parent: 'tamilnadu',
    lat: 9.93, lng: 78.12, emoji: '🛕', tagline: 'The temple city that never sleeps — Thoonga Nagaram',
    glance: { 'River': 'Vaigai', 'Age': '2,500+ years — one of India’s oldest continuously inhabited cities', 'Temple': 'Meenakshi Amman, 14 gopurams', 'Known as': 'Athens of the East', 'Famous for': 'Meenakshi temple, jigarthanda, jasmine (Madurai malli)' },
    history: ['Capital of the **Pandya** kingdom and seat of the three **Tamil Sangams** (literary academies); traded with Rome — Roman coins are found here.', 'Megasthenes (3rd c. BCE) and Marco Polo wrote about it; Malik Kafur sacked the city in 1311.', 'The **Nayaks** (1529–1736), especially Thirumalai Nayak, built the current temple towers and palace.'],
    mustSee: ['**Meenakshi Amman Temple** — the 1,000-pillar hall, the Golden Lotus tank, the night “bedroom ceremony” at 9 pm', '**Thirumalai Nayakkar Mahal** — Indo-Saracenic palace with a sound-and-light show', '**Gandhi Memorial Museum** — holds the blood-stained dhoti', '**Alagar Kovil** and **Thiruparankundram** Murugan temple', 'Vandiyur Mariamman teppakulam (float festival)', 'Flower market at dawn; Pudhu Mandapam bazaar'],
    food: ['**Jigarthanda** — the milk, almond gum and ice-cream drink', '**Madurai kari dosai, paruthi paal** (cottonseed milk), kola urundai', 'Murugan Idli Shop; Amma Mess; **bun parotta** at midnight'],
    culture: ['**Chithirai festival** (Apr/May) — the celestial wedding of Meenakshi and Sundareswarar, a million people', 'Jasmine trade — Madurai malli has a GI tag', 'Shops and eateries open till late — the “sleepless city”'],
    funFacts: ['The temple has about 33,000 sculptures; the tallest gopuram is 52 m.', 'The city plan is a series of concentric squares around the temple, like a lotus.', 'The Greek ambassador Megasthenes called it “Methora”.'],
    tips: ['Cameras and phones are not allowed inside the temple; lockers at the gate.', 'Evening aarti and the 9 pm palanquin procession are the highlight.']
  },
  {
    id: 'kanyakumari', name: 'Kanyakumari', kind: 'place', scope: 'domestic', country: 'India', state: 'Tamil Nadu', parent: 'tamilnadu',
    lat: 8.08, lng: 77.55, emoji: '🌅', tagline: 'Land’s end, where three seas meet', aka: ['Cape Comorin'],
    glance: { 'Seas': 'Bay of Bengal, Indian Ocean, Arabian Sea', 'Famous for': 'Sunrise and sunset over the sea, Vivekananda Rock, Thiruvalluvar statue', 'Temple': 'Bhagavathi Amman (Kumari Amman)', 'Southernmost': 'Tip of mainland India', 'Best time': 'Oct–Mar' },
    history: ['Named for the virgin goddess **Kanya Kumari**, who waits here for Shiva; a pilgrimage site for over 2,000 years — mentioned by Ptolemy.', '**Swami Vivekananda** swam to the rock in December 1892 and meditated for three days before his journey to Chicago.', 'The **Thiruvalluvar** statue (133 ft, for the 133 chapters of the Thirukkural) was unveiled in 2000.'],
    mustSee: ['**Vivekananda Rock Memorial** and the **Thiruvalluvar statue** by ferry', '**Sunrise** from the beach and **sunset** from the same spot on full-moon days', '**Kumari Amman temple** — the diamond nose-ring said to be seen from the sea', 'Gandhi Mandapam (sunlight falls on the ashes spot on 2 Oct)', '**Padmanabhapuram Palace** (wooden Travancore palace, 35 km) and **Suchindram temple**', 'Vattakottai fort; the glass bridge (2024)'],
    food: ['Fresh seafood; **Nagercoil-style** meals with fish curry', 'Banana chips from Nagercoil'],
    culture: ['Pilgrims, tourists and fishermen share the tiny town; a Catholic church stands beside the temple', 'Multicoloured sand on the beach — legend says it is from the goddess’s wedding feast'],
    funFacts: ['On Chitra Pournami (April full moon) you can see the sunset and the moonrise at the same time.', 'It is one of the few places in the world to see sunrise and sunset over the ocean from the same spot.'],
    tips: ['Ferry queues get long — buy tickets early morning.', 'Padmanabhapuram Palace is a Kerala-owned palace inside Tamil Nadu — closed Mondays.']
  },
  {
    id: 'rameswaram', name: 'Rameswaram', kind: 'place', scope: 'domestic', country: 'India', state: 'Tamil Nadu', parent: 'tamilnadu',
    lat: 9.29, lng: 79.31, emoji: '🐚', tagline: 'Where Rama built the bridge to Lanka', aka: ['Rameshwaram'],
    glance: { 'Type': 'Pamban Island, joined by the Pamban bridge', 'Temple': 'Ramanathaswamy — longest temple corridor in the world', 'Char Dham': 'One of the four sacred dhams', 'Jyotirlinga': 'One of 12', 'Famous son': 'Dr A.P.J. Abdul Kalam' },
    history: ['Rama worshipped Shiva here to atone for killing Ravana; the lingam Sita made of sand is the main deity, with the one Hanuman brought from Kailash beside it.', 'The **Pamban rail bridge** (1914) was India’s first sea bridge; a new vertical-lift bridge opened in 2025.', 'Dr **Abdul Kalam** was born here in 1931 — his memorial is at Pei Karumbu.'],
    mustSee: ['**Ramanathaswamy temple** — 1,212-pillar corridor, 22 holy wells (theerthams)', '**Dhanushkodi** ghost town at the tip (see separate page)', '**Pamban bridge** — train or road, watch the lift span', '**Dr Abdul Kalam Memorial**', '**Agni theertham** sea bath; Gandhamadana Parvatham (Rama’s footprint)', 'Kothandaramaswamy temple where Vibhishana surrendered'],
    food: ['Fish curry and **karuvadu** (dried fish); temple prasadam', 'Simple veg meals in the pilgrim hotels'],
    culture: ['Pilgrims bathe in all 22 wells before darshan', 'Fishing community life on the island; the Pamban strait is dotted with boats'],
    funFacts: ['The 1,212-pillared third corridor is about 1.2 km long in total.', 'Rameswaram is only ~30 km from Sri Lanka across the Palk Strait.'],
    tips: ['Do the 22-well bath early morning, then darshan; keep a change of clothes.', 'Sunrise from Dhanushkodi is worth the 5 am start.']
  },
  {
    id: 'dhanushkodi', name: 'Dhanushkodi', kind: 'place', scope: 'domestic', country: 'India', state: 'Tamil Nadu', parent: 'tamilnadu',
    lat: 9.15, lng: 79.44, emoji: '🌊', tagline: 'The ghost town at the end of India',
    glance: { 'Location': 'Tip of Pamban Island, 20 km from Rameswaram', 'Destroyed': '1964 cyclone', 'To Sri Lanka': '~24 km (Talaimannar)', 'Meaning': '“End of the bow” — Rama’s bow marked the spot', 'Access': 'Road to Arichal Munai (land’s end)' },
    history: ['A busy port town with a railway station, post office and ferry to Ceylon — until the **22 December 1964** cyclone swept it away, along with a train of 100+ passengers.', 'Declared unfit for living; a few fishing families remain. The **Ram Setu (Adam’s Bridge)** shoals begin here.', 'Rama is said to have broken the bridge with the end of his bow after returning from Lanka.'],
    mustSee: ['**Arichal Munai** — the land’s end where Bay of Bengal meets the Indian Ocean', 'Ruins of the **church, railway station and water tank**', 'The road with sea on both sides; **Ram Setu viewpoint**', 'Kothandaramaswamy temple on the way'],
    food: ['Fried fish and tender coconut from the fisher stalls'],
    culture: ['Fishing families live without electricity by choice; the sea is calm on one side and rough on the other'],
    funFacts: ['The 1964 cyclone raised the sea by 7 m; the Pamban–Dhanushkodi train vanished with all aboard.', 'NASA satellite images show the Adam’s Bridge chain of shoals stretching to Sri Lanka.'],
    tips: ['Go early; the road closes by evening and there is no shade.', 'Watch the wind — sand-blasting is real.']
  },
  {
    id: 'palani', name: 'Palani', kind: 'place', scope: 'domestic', country: 'India', state: 'Tamil Nadu', parent: 'tamilnadu',
    lat: 10.45, lng: 77.52, emoji: '🪶', tagline: 'Third of Murugan’s six abodes, hilltop Dandayudhapani', aka: ['Pazhani'],
    glance: { 'District': 'Dindigul', 'Abode': '3rd Arupadai Veedu', 'Idol': 'Navapashanam — nine poisonous herbs, by Siddhar Bogar', 'Steps': '693 (or winch / rope car)', 'Prasadam': 'Panchamirtham (GI tag)' },
    history: ['Murugan, sulking after losing the fruit-of-knowledge contest to Ganesha, came here; Shiva consoled him — “**Pazham nee**” (you are the fruit) — giving the name.', 'The idol was made by the Siddhar **Bogar** from nine medicinal poisons; abhishekam liquids are believed to carry medicinal properties.', 'The temple was patronised by the Cheras and later the Nayaks; the hill winch was built in 1966.'],
    mustSee: ['**Dandayudhapani temple** on the hill — the boy ascetic with a staff', '**Thiru Avinankudi** temple at the foot (the original abode)', 'Bogar’s samadhi shrine inside the temple', 'The **rope car / winch** ride up; the Kavadi processions at Thaipusam'],
    food: ['**Panchamirtham** — banana, jaggery, honey, dates, ghee', 'Idiyappam and Vada-curry in the town'],
    culture: ['**Thaipusam** and **Panguni Uthiram** — thousands of kavadi bearers', 'Tonsuring and kavadi vows fulfilled by pilgrims from across Tamil Nadu'],
    funFacts: ['Palani Panchamirtham was the first temple prasadam in India to get a GI tag (2019).', 'The Navapashanam idol is said to be slowly eroding — abhishekam is now restricted.'],
    tips: ['Winch tickets sell out on festival days; the steps take 20–30 minutes.', 'Combine with Kodaikanal (65 km).']
  },
  {
    id: 'thiruparankundram', name: 'Thiruparankundram', kind: 'place', scope: 'domestic', country: 'India', state: 'Tamil Nadu', parent: 'tamilnadu',
    lat: 9.88, lng: 78.07, emoji: '🪶', tagline: 'First abode of Murugan — his wedding to Deivanai',
    glance: { 'Near': 'Madurai (8 km)', 'Abode': '1st Arupadai Veedu', 'Type': 'Rock-cut cave temple, Pandya 8th century', 'Event': 'Murugan married Deivanai (Indra’s daughter) here', 'Hill': 'Sacred to Hindus and Muslims (Sikandar dargah on top)' },
    history: ['Carved by the **Pandyas** in the 8th century; Sangam poetry (Paripadal) already praises the hill.', 'Here Murugan wed **Deivanai** after defeating Surapadman — hence the temple is the place for weddings and for the Skanda Sashti festival.'],
    mustSee: ['**Rock-cut sanctum** with Subramanya, Durga, Vinayaka, Shiva and Vishnu in one cave', 'The hilltop **Kasi Viswanathar** shrine and the dargah', 'Saravana Poigai tank'],
    food: ['Madurai’s food is 15 minutes away'],
    culture: ['Sangam Tamils believed Murugan lived on hills — this is the archetype', 'Communal harmony: Hindus and Muslims climb the same hill'],
    funFacts: ['The Nakkeerar of Sangam fame is said to have composed Thirumurugatrupadai here, listing the six abodes.'],
    tips: ['Visit early evening after Meenakshi temple; darshan is quick.']
  },
  {
    id: 'tiruchendur', name: 'Tiruchendur', kind: 'place', scope: 'domestic', country: 'India', state: 'Tamil Nadu', parent: 'tamilnadu',
    lat: 8.50, lng: 78.12, emoji: '🪶', tagline: 'Second abode of Murugan — the only one by the sea',
    glance: { 'District': 'Thoothukudi', 'Abode': '2nd Arupadai Veedu', 'Setting': 'On the shore of the Gulf of Mannar', 'Event': 'Murugan defeated the demon Surapadman here', 'Festival': 'Skanda Sashti — the Soorasamharam re-enactment' },
    history: ['Murugan camped here before the battle with **Surapadman**, whom he split into a peacock (his mount) and a rooster (his flag) — the Soorasamharam.', 'The Dutch occupied the temple in 1646 and tried to carry off the idol; the ship stalled and they threw it into the sea, where a devotee later recovered it.', 'The current structure is largely 17th century; the 157-ft gopuram was built by Desikamurthy Swamigal.'],
    mustSee: ['**Subramanya Swamy temple** — sea-bath at the Nazhi Kinaru sweet-water well on the beach', '**Soorasamharam** at Skanda Sashti (Oct/Nov)', 'Valli cave and the beach at sunrise'],
    food: ['Thoothukudi **macaroon** (cashew meringue) and fish'],
    culture: ['Pilgrims fast six days for Skanda Sashti and break it here', 'Fishing-coast Hinduism with Catholic Paravar villages nearby'],
    funFacts: ['The temple is the only one of the six abodes on the seashore; the sanctum is below sea level.', 'A well 100 m from the sea gives sweet water — Nazhi Kinaru.'],
    tips: ['Skanda Sashti crowds reach lakhs; other days are peaceful.']
  },
  {
    id: 'swamimalai', name: 'Swamimalai', kind: 'place', scope: 'domestic', country: 'India', state: 'Tamil Nadu', parent: 'tamilnadu',
    lat: 10.96, lng: 79.33, emoji: '🪶', tagline: 'Fourth abode — where the son taught the father',
    glance: { 'Near': 'Kumbakonam (6 km)', 'Abode': '4th Arupadai Veedu', 'Deity': 'Swaminathaswamy', 'Steps': '60, one for each Tamil year', 'Famous for': 'Bronze idol casting (lost-wax method)' },
    history: ['Young Murugan explained the meaning of the **Pranava (Om)** to Shiva here, becoming the guru of his own father — hence Swami-natha, “Lord of the Lord”.', 'Praised by Arunagirinathar in the Thiruppugazh; expanded under the Cholas and later the Thanjavur Marathas.', 'The village is the centre of **Chola-style bronze casting**, a craft carried on by the Sthapati families for 1,000 years.'],
    mustSee: ['**Swaminathaswamy temple** — Murugan as guru, Shiva as disciple', 'The **bronze workshops** — watch a Nataraja emerge by lost-wax casting', 'Kumbakonam’s temples and the Mahamaham tank nearby'],
    food: ['**Kumbakonam degree coffee** and filter coffee culture', 'Kumbakonam kadappa and Thanjavur-style meals'],
    culture: ['Bronze icons cast here go to temples worldwide', 'Kumbakonam is the “temple town” — 12 major temples in a few km'],
    funFacts: ['The hill is man-made — the temple stands on an artificial mound.', 'The 60 steps represent the 60-year Tamil calendar cycle.'],
    tips: ['Bronze workshops welcome visitors — ask before photographing.']
  },
  {
    id: 'thiruthani', name: 'Thiruthani', kind: 'place', scope: 'domestic', country: 'India', state: 'Tamil Nadu', parent: 'tamilnadu',
    lat: 13.18, lng: 79.61, emoji: '🪶', tagline: 'Fifth abode — where Murugan found peace after battle',
    glance: { 'District': 'Tiruvallur (near Chennai)', 'Abode': '5th Arupadai Veedu', 'Meaning': 'Thani = calm, peace', 'Steps': '365 — one for each day', 'Event': 'Murugan married Valli here' },
    history: ['After the Soorasamharam Murugan came here to calm his anger (thani) and married **Valli**, the tribal girl; the hill is the “Shanti Giri”.', 'The temple gained fame through the composer **Muthuswami Dikshitar**, one of the Carnatic Trinity, who received his initiation here.', 'Popular with Chennai pilgrims — 90 km from the city.'],
    mustSee: ['**Subramanya Swamy temple** on the hill — 365 steps or road', 'New Year’s Day step-climbing festival', 'Nearby Arakkonam and the Kanchipuram temples'],
    food: ['Chennai–Bengaluru highway eateries; the temple’s lemon-rice prasadam'],
    culture: ['On 1 January, lakhs climb the 365 steps to start the year with Murugan', 'Aadi Krithigai festival in July'],
    funFacts: ['Legend says Rama worshipped here after killing Ravana, and Indra gifted the Sapta Rishi tank.'],
    tips: ['Weekday mornings are calm; New Year’s Day is a sea of people.']
  },
  {
    id: 'pazhamudircholai', name: 'Pazhamudircholai', kind: 'place', scope: 'domestic', country: 'India', state: 'Tamil Nadu', parent: 'tamilnadu',
    lat: 10.07, lng: 78.21, emoji: '🪶', tagline: 'Sixth abode — the forest grove of fruit and the poet Avvaiyar',
    glance: { 'Near': 'Madurai (25 km), above Alagar Kovil', 'Abode': '6th Arupadai Veedu', 'Setting': 'Forested Alagar hills', 'Deity': 'Murugan with Valli and Deivanai', 'Meaning': '“Grove of ripe fruits”' },
    history: ['Here Murugan appeared as a boy to test the aged poet **Avvaiyar** — “Do you want hot fruits or cold fruits?” (sutta pazham, sudatha pazham) — a story every Tamil child knows.', 'Sangam-era Alagar Kovil at the foot was the Pandya kings’ Vishnu shrine; the hill temple is a small, green, peaceful place compared with the other abodes.'],
    mustSee: ['The hill temple amid trees; **Noopura Gangai** spring above it', '**Alagar Kovil** (Kallazhagar) Vishnu temple at the base', 'Monkeys and forest walks; Rakkayi Amman shrine'],
    food: ['Madurai food; jackfruit and mangoes in season from the hill'],
    culture: ['Kallazhagar’s descent into the Vaigai during Madurai’s Chithirai festival starts from here', 'The Avvaiyar story is a lesson in humility'],
    funFacts: ['This is the only one of the six abodes without a large gopuram — nature is the temple.'],
    tips: ['Combine with Thiruparankundram and Madurai in one day — two of the six abodes in one trip.']
  },
  {
    id: 'trichy', name: 'Tiruchirappalli (Trichy)', kind: 'place', scope: 'domestic', country: 'India', state: 'Tamil Nadu', parent: 'tamilnadu',
    lat: 10.79, lng: 78.70, emoji: '🪨', tagline: 'Rock Fort city on the Kaveri, gateway to Srirangam', aka: ['Trichy', 'Tiruchirappalli', 'Tiruchi'],
    glance: { 'River': 'Kaveri', 'Famous for': 'Rock Fort, Srirangam Ranganathaswamy, Jambukeswarar', 'Rock Fort': '83 m rock, 3.8 billion years old', 'Srirangam': 'Largest functioning temple in the world (156 acres)', 'Also': 'NIT Trichy, BHEL' },
    history: ['**Srirangam** is the first of the 108 Divya Desams; the Vijayanagara and Nayak kings built its seven walls and 21 gopurams — the 72 m Rajagopuram was completed in 1987.', 'Trichy was the Chola capital region and then the **Nayak** capital; the British fought the Carnatic Wars over it (1751 siege — Robert Clive).', 'The **Rock Fort** temples (Pallava cave and Ucchi Pillayar on top) date from the 7th century.'],
    mustSee: ['**Rock Fort** — 437 steps to Ucchi Pillayar, city and Kaveri view', '**Srirangam Ranganathaswamy temple** — Vaikunta Ekadasi’s Paramapada Vasal', '**Jambukeswarar temple**, Thiruvanaikaval — the water (Appu) lingam', 'Kallanai (Grand Anicut) dam, built by Karikala Chola ~2nd century CE — still in use', 'Our Lady of Lourdes Church; Mukkombu'],
    food: ['Trichy’s **Banana Leaf** restaurant meals; Srirangam’s **Iyengar puliyodharai**', 'Kaveri-belt filter coffee'],
    culture: ['Srirangam is where Ramanuja lived and taught — his preserved body is in the temple', 'Vaikunta Ekadasi (Dec/Jan) draws huge crowds through the “gate of heaven”'],
    funFacts: ['Kallanai is one of the oldest functioning dams in the world.', 'Srirangam’s island is formed by the Kaveri and Kollidam and the temple town lives inside its walls.'],
    tips: ['Rock Fort climb is best at sunset; Srirangam needs half a day.']
  },
  {
    id: 'thanjavur', name: 'Thanjavur', kind: 'place', scope: 'domestic', country: 'India', state: 'Tamil Nadu', parent: 'tamilnadu',
    lat: 10.79, lng: 79.14, emoji: '🎨', tagline: 'The Big Temple and the rice bowl of Tamil Nadu', aka: ['Tanjore'],
    glance: { 'Famous for': 'Brihadeeswara (Big) Temple, Tanjore paintings, Saraswathi Mahal library', 'Built by': 'Raja Raja Chola I, 1010 CE', 'UNESCO': 'Great Living Chola Temples (1987)', 'Vimana': '66 m — one of the tallest in India', 'Region': 'Kaveri delta — rice bowl' },
    history: ['**Raja Raja Chola I** built the Brihadeeswara temple in 1010 CE at the height of Chola power — an empire that reached Sri Lanka, the Maldives and Sumatra.', 'The **Nayaks** and then the **Marathas** (1674–1855, Serfoji II) ruled from the palace; Serfoji built the library and patronised science and art.', 'Thanjavur is the home of Carnatic music’s Trinity era and the Tanjore painting style.'],
    mustSee: ['**Brihadeeswara temple** — the 80-tonne capstone, the giant Nandi, Chola frescoes, the shadowless vimana legend', '**Thanjavur Palace, Saraswathi Mahal library** (palm-leaf manuscripts) and art gallery of Chola bronzes', '**Tanjore painting** studios and the **Thanjavur doll** (thalaiyatti bommai)', 'Gangaikonda Cholapuram and **Darasuram** — the other two Chola temples', 'Schwartz Church; Sivaganga park'],
    food: ['**Thanjavur meals** on banana leaf; **Thavala vadai**; Kumbakonam degree coffee', 'Ashoka halwa from Thiruvaiyaru'],
    culture: ['Thiruvaiyaru Thyagaraja Aradhana (Jan) — thousands of musicians sing the Pancharatna kritis', 'The **veena** of Thanjavur; the Bharatanatyam quartet; Tanjore’s gold-foil paintings'],
    funFacts: ['The vimana’s 80-tonne capstone was raised by a 6-km ramp, legend says — Chola engineering still puzzles people.', 'The temple’s inscriptions record every gift, dancer and musician on its payroll.'],
    tips: ['Evening at the Big Temple with the lamps is the best time.', 'Darasuram (Airavatesvara) is 40 km away and much quieter.']
  },
  {
    id: 'velankanni', name: 'Velankanni', kind: 'place', scope: 'domestic', country: 'India', state: 'Tamil Nadu', parent: 'tamilnadu',
    lat: 10.68, lng: 79.85, emoji: '⛪', tagline: 'The Lourdes of the East on the Coromandel coast', aka: ['Vailankanni'],
    glance: { 'District': 'Nagapattinam', 'Church': 'Basilica of Our Lady of Good Health', 'Status': 'Minor Basilica (1962)', 'Feast': '29 Aug – 8 Sept', 'Pilgrims': '~20 million a year' },
    history: ['Three 16th–17th century apparitions: to a shepherd boy, a lame buttermilk seller, and Portuguese sailors saved from a storm who built the first chapel.', 'Franciscan priests expanded it; Pope John XXIII raised it to a basilica in 1962.', 'The 2004 tsunami hit the town hard — the church became a shelter.'],
    mustSee: ['**Basilica** — the Gothic white-and-red church and the Our Lady of Health shrine', 'The **Museum of Offerings** — gold and silver replicas of healed limbs', 'The beach and the Morning Star church; Nagore Dargah (Muslim) 10 km away', 'Candle procession during the feast'],
    food: ['Nagapattinam seafood; simple pilgrim meals'],
    culture: ['Hindus, Muslims and Christians all pray here — devotees walk barefoot from far towns', 'Saffron-coloured saris of the Madonna — an Indianised Mary'],
    funFacts: ['The basilica is one of the most-visited Christian shrines in Asia.', 'Devotees offer candles shaped like the body part they want healed.'],
    tips: ['The September feast draws millions — book far ahead or avoid.']
  },
  {
    id: 'pondicherry', name: 'Pondicherry (Puducherry)', kind: 'place', scope: 'domestic', country: 'India', state: 'Puducherry (UT)', parent: 'puducherry',
    lat: 11.93, lng: 79.83, emoji: '🚲', tagline: 'A slice of France on the Coromandel coast', aka: ['Puducherry', 'Pondy'],
    glance: { 'Status': 'Union Territory (French until 1954)', 'Famous for': 'White Town, Promenade, Aurobindo Ashram, Auroville', 'Language': 'Tamil, French, English', 'Beaches': 'Promenade, Paradise, Serenity', 'Best time': 'Oct–Mar' },
    history: ['A **French colony from 1674** under François Martin; changed hands with the British several times before France kept it till **1954** (de jure transfer 1962).', '**Sri Aurobindo** settled here in 1910; the Ashram (1926) and **Auroville** (1968, by the Mother) followed.', 'The town keeps its French grid: the “White Town” by the sea and the Tamil “Black Town” across the canal.'],
    mustSee: ['**White Town** — mustard-yellow villas, bougainvillea, Rue Romain Rolland', '**Promenade (Rock beach)** — Gandhi statue, French war memorial, sunrise walk', '**Aurobindo Ashram** and the samadhi', '**Auroville** — the Matrimandir golden globe', 'Paradise beach by boat; **Sacred Heart Basilica**, Notre Dame des Anges', 'Ousteri lake, Manakula Vinayagar temple'],
    food: ['French-Tamil fusion — **crêpes, croissants and Creole curry**', 'Café des Arts, Baker Street; Kasha Ki Aasha', 'Cheaper beer (UT taxes!) and “Pondy” bakeries'],
    culture: ['Policemen wear French **képis**; street names are in French and Tamil', 'Auroville’s international community of 3,000 from 60 countries', 'Bastille Day is still celebrated on 14 July'],
    funFacts: ['Puducherry has four separate pieces: Pondicherry, Karaikal, Mahe (Kerala) and Yanam (AP).', 'Life of Pi (the book and film) begins in Pondicherry.', 'Matrimandir’s inner chamber holds the world’s largest optically-perfect glass globe.'],
    tips: ['Rent a cycle for White Town; the Promenade closes to traffic after 6 pm.', 'Matrimandir inner-chamber visits need booking a day ahead.']
  },
  {
    id: 'puducherry', name: 'Puducherry (UT)', kind: 'state', scope: 'domestic', country: 'India', state: 'Puducherry (UT)', parent: 'india',
    lat: 11.93, lng: 79.83, emoji: '🥐', tagline: 'India’s former French enclaves',
    glance: { 'Capital': 'Puducherry', 'Parts': 'Puducherry, Karaikal, Mahe, Yanam', 'French rule': '1674–1954', 'Languages': 'Tamil, French, Malayalam, Telugu' },
    history: ['The four enclaves were French trading posts merged into one Union Territory after the 1954 transfer.'],
    funFacts: ['Some residents still hold French citizenship and vote in French elections.']
  },
  {
    id: 'mahabalipuram', name: 'Mahabalipuram', kind: 'place', scope: 'domestic', country: 'India', state: 'Tamil Nadu', parent: 'tamilnadu',
    lat: 12.62, lng: 80.19, emoji: '🐘', tagline: 'Pallava sculpture by the sea', aka: ['Mamallapuram'],
    glance: { 'District': 'Chengalpattu (55 km from Chennai)', 'UNESCO': 'World Heritage 1984', 'Era': 'Pallava, 7th–8th century', 'Famous for': 'Shore Temple, Five Rathas, Arjuna’s Penance', 'Named after': 'Narasimhavarman I “Mamalla” (great wrestler)' },
    history: ['Port of the **Pallavas** — ships sailed from here to South-East Asia, carrying temple styles to Cambodia and Java.', 'The **monolithic rathas** are carved from single rocks; the **Shore Temple** (c. 700 CE) is one of the oldest structural stone temples in South India.', 'The 2004 tsunami briefly revealed submerged structures — the “Seven Pagodas” legend.'],
    mustSee: ['**Shore Temple** at sunrise', '**Arjuna’s Penance / Descent of the Ganga** — the largest bas-relief in the world (27 × 9 m)', '**Pancha Rathas** — five chariots in five styles, with the elephant', '**Krishna’s Butter Ball** — the balancing boulder', 'Tiger Cave; the lighthouse; the stone-carving workshops', 'Crocodile Bank and Dakshinachitra on the ECR'],
    food: ['Seafood shacks by the beach — Moonrakers', 'ECR drive dhabas; fresh crab'],
    culture: ['The town is still a village of stone sculptors — GI-tagged Mamallapuram stone carvings', 'Mamallapuram Dance Festival (Dec–Jan) against the Arjuna’s Penance backdrop', 'Xi Jinping and Modi met here in 2019'],
    funFacts: ['The Butter Ball has resisted being moved — the British tried with seven elephants.', 'Arjuna’s Penance includes a cat doing penance with mice around it — Pallava humour.'],
    tips: ['Go at opening time (6 am) for the Shore Temple; the light and the crowds are both better.', 'One ticket covers Shore Temple and Five Rathas.']
  },
  {
    id: 'vellore', name: 'Vellore', kind: 'place', scope: 'domestic', country: 'India', state: 'Tamil Nadu', parent: 'tamilnadu',
    lat: 12.92, lng: 79.13, emoji: '🏰', tagline: 'Fort city and the Golden Temple of Sripuram',
    glance: { 'Famous for': 'Vellore Fort, Jalakandeswarar temple, Sripuram Golden Temple, CMC hospital', 'Fort built': '1566, Vijayanagara', 'Golden Temple': '1,500 kg of gold (2007)', 'River': 'Palar', 'Also': 'VIT university, leather industry' },
    history: ['**Vellore Fort**, with its moat once stocked with crocodiles, was built by Vijayanagara chiefs; it passed to the Bijapur Sultans, Marathas, Carnatic Nawabs and British.', 'The **Vellore Mutiny of 10 July 1806** — Indian sepoys revolted against new headgear rules, 51 years before 1857; Tipu’s family, held in the fort, were blamed.', 'Christian Medical College (1900, Ida Scudder) made Vellore a medical capital.'],
    mustSee: ['**Vellore Fort** — moat, Jalakandeswarar temple with its carved kalyana mandapam, church, mosque and museum', '**Sripuram Golden Temple** (Sri Lakshmi Narayani) — walk the star-shaped path', 'Ratnagiri Murugan temple; **Amirthi forest**', 'Yelagiri hills nearby'],
    food: ['Vellore **biryani** (Ambur/Arcot style with seeraga samba rice)', 'CMC road bakeries'],
    culture: ['A medical town — patients from Bengal to Bangladesh', 'Leather and shoe industry in Ambur and Ranipet'],
    funFacts: ['The Vellore Mutiny was the first large-scale mutiny against the British East India Company.', 'The fort’s granite walls were built without mortar.'],
    tips: ['Golden Temple: no cameras or phones; dress modestly; evening lights are stunning.']
  },
  {
    id: 'kanchipuram', name: 'Kanchipuram', kind: 'place', scope: 'domestic', country: 'India', state: 'Tamil Nadu', parent: 'tamilnadu',
    lat: 12.83, lng: 79.70, emoji: '🥻', tagline: 'City of a thousand temples and silk saris',
    glance: { 'Famous for': 'Silk saris, Kamakshi Amman, Ekambareswarar, Kailasanathar, Varadaraja Perumal', 'Mukti Sthala': 'One of seven cities of liberation', 'Era': 'Pallava capital 4th–9th century', 'Silk': 'GI-tagged Kanchipuram silk', 'Peetham': 'Kanchi Kamakoti (Adi Shankara)' },
    history: ['Capital of the **Pallavas**; the Chinese pilgrim Xuanzang visited in 640 CE and found 100 monasteries. **Bodhidharma**, founder of Zen, was a Kanchi prince by legend.', 'The **Kailasanathar temple** (c. 700 CE) is the oldest structural temple in Tamil Nadu; the Cholas, Vijayanagara and Nayaks kept building.', 'Silk weavers migrated here under the Cholas; the Kanchi Kamakoti Peetham traces itself to Adi Shankara.'],
    mustSee: ['**Kamakshi Amman temple** — one of the Shakti Peethas', '**Ekambareswarar** — the 3,500-year-old mango tree, earth (Prithvi) lingam', '**Kailasanathar** — sandstone Pallava jewel', '**Varadaraja Perumal** — the 100-pillared hall, the golden lizard, Athi Varadar every 40 years', 'Silk weaving units; Kanchi Kudil heritage house', 'Vaikunta Perumal temple'],
    food: ['**Kanchipuram idli** — the spicy, pepper-cumin temple idli', 'Varadaraja temple’s prasadam'],
    culture: ['Every bride in Tamil Nadu wants a Kanchipuram silk — 5,000+ weaving families', 'Home of the Shankaracharya of Kanchi', 'One of the “Seven Sacred Cities” of India with Ayodhya, Mathura, Haridwar, Varanasi, Ujjain and Dwarka'],
    funFacts: ['The Ekambareswarar mango tree has four branches said to bear four different tastes of fruit.', 'Touching the golden lizard at Varadaraja temple is believed to remove sins.'],
    tips: ['Buy silk from co-op showrooms (Co-optex, Kamakshi) for authenticity — check the zari test.', 'Temples close 12:30–4 pm.']
  },
  {
    id: 'yelagiri', name: 'Yelagiri', kind: 'place', scope: 'domestic', country: 'India', state: 'Tamil Nadu', parent: 'tamilnadu',
    lat: 12.58, lng: 78.64, emoji: '🪂', tagline: 'The poor man’s Ooty — a quiet hill between Vellore and Bengaluru',
    glance: { 'District': 'Tirupattur', 'Altitude': '1,110 m', 'Hairpin bends': '14', 'Famous for': 'Punganoor lake, Swamimalai hills trek, paragliding', 'Best time': 'Nov–Feb' },
    history: ['The 14 hill villages were the estate of a zamindar family until the British took over; the zamindar’s descendants still live in Reddiyur.', 'Developed as a tourist spot in the 1990s–2000s as an easy weekend from Bengaluru (160 km) and Chennai.'],
    mustSee: ['**Punganoor lake** boating and park', '**Swamimalai hills** trek (3 hours, 1,338 m) for the best view', '**Jalagamparai falls** (monsoon); Velavan temple; Nature Park', 'Paragliding festival (Nov); the hairpin-bend viewpoints'],
    food: ['Hill jackfruit, honey and jaggery; simple hotel food'],
    culture: ['Tribal villages growing millets and fruit; a summer festival in May'],
    funFacts: ['Yelagiri is named after the Yelagiri zamindars; it has 14 hairpins vs Yercaud’s 20.'],
    tips: ['Weekends fill up; the hill is small — one night is enough.']
  },
  {
    id: 'yercaud', name: 'Yercaud', kind: 'place', scope: 'domestic', country: 'India', state: 'Tamil Nadu', parent: 'tamilnadu',
    lat: 11.78, lng: 78.21, emoji: '🍊', tagline: 'Jewel of the South in the Shevaroy hills',
    glance: { 'District': 'Salem', 'Altitude': '1,515 m', 'Hairpin bends': '20', 'Famous for': 'Coffee, oranges, the lake, Pagoda Point', 'Meaning': '“Lake forest” — yeri (lake) + kaadu (forest)' },
    history: ['British coffee planters, led by **M.D. Cockburn** (Collector of Salem) in the 1820s, made it a plantation hill; he is called the father of Yercaud.', 'Montfort School (1917) and the Sacred Heart convent brought the boarding-school era.', 'Shevaroy hills were the home of the Malayali tribe (not Kerala’s Malayalis — “hill people”).'],
    mustSee: ['**Yercaud lake** and Anna Park', '**Pagoda Point** and **Lady’s Seat / Gent’s Seat** viewpoints over Salem', '**Shevaroy temple** on the highest point (1,623 m); Kiliyur falls', 'Coffee and orange plantations; **Karadiyur** viewpoint', 'The 20-hairpin ghat road; Rose garden'],
    food: ['Yercaud **oranges** and jackfruit; homemade coffee', 'Salem-style meals below; Bhutta at the lake'],
    culture: ['May Summer Festival with flower show and boat race', 'Coffee estates of the Sanjay family and old British bungalows'],
    funFacts: ['Yercaud coffee was one of the earliest planted in South India after Baba Budangiri.', 'Pagoda Point is named for the four pyramidal stone piles built by the tribes.'],
    tips: ['Salem is only 30 km — an easy detour on the Bengaluru–Madurai road.']
  }
);
