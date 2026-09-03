/* places-karnataka.js — Karnataka state hub + places (Lepakshi is in AP → see places-kerala-ap-ts.js) */
TRIPS.places.push(
  {
    id: 'karnataka', name: 'Karnataka', kind: 'state', scope: 'domestic', country: 'India', state: 'Karnataka', parent: 'india',
    lat: 15.32, lng: 75.71, emoji: '🌴', tagline: 'One state, many worlds — from Hampi’s boulders to the Malnad hills',
    glance: { 'Capital': 'Bengaluru', 'Language': 'Kannada', 'Formed': '1 Nov 1956 (Kannada Rajyotsava)', 'Districts': '31', 'Coastline': '320 km on the Arabian Sea', 'UNESCO sites': 'Hampi, Pattadakal, Western Ghats, Hoysala temples' },
    history: ['Ruled in turn by the **Kadambas, Chalukyas, Rashtrakutas, Hoysalas, Vijayanagara** and the **Wodeyars** of Mysore.', 'Tipu Sultan fought four wars with the British from Srirangapatna; after 1799 Mysore became a princely state under the Wodeyars.', 'Formed as Mysore State in 1956 from Kannada-speaking regions and renamed Karnataka in 1973.'],
    food: ['**Bisi bele bath, ragi mudde, Mysore pak, Dharwad peda**, Udupi masala dosa', 'Coastal: neer dosa, kori rotti, fish curry; Malnad: akki rotti and kadubu'],
    culture: ['Kannada literature has 8 Jnanpith awards — the most of any Indian language', 'Yakshagana dance-drama on the coast; Mysuru Dasara is the state festival', 'Home to Carnatic music’s Purandara Dasa, and to India’s IT capital'],
    funFacts: ['Karnataka grows ~70% of India’s coffee and most of its sandalwood and silk.', 'Jog Falls is one of India’s highest plunge waterfalls (253 m).', 'Bengaluru was founded in 1537 by Kempegowda.']
  },
  {
    id: 'hampi', name: 'Hampi', kind: 'place', scope: 'domestic', country: 'India', state: 'Karnataka', parent: 'karnataka',
    lat: 15.335, lng: 76.46, emoji: '🏛️', tagline: 'Ruins of the Vijayanagara Empire among giant boulders',
    glance: { 'District': 'Vijayanagara', 'River': 'Tungabhadra', 'UNESCO': 'World Heritage 1986', 'Era': '1336–1565 CE', 'Best time': 'Oct–Feb' },
    history: ['Capital of the **Vijayanagara Empire**, founded in 1336 by Harihara and Bukka; by 1500 it was the second-largest city in the world after Beijing.', 'Peaked under **Krishnadevaraya** (1509–29), whose court had Persian and Portuguese visitors describing streets of jewel merchants.', 'Destroyed after the **Battle of Talikota (1565)** — the city was looted and burnt for six months and never recovered.'],
    mustSee: ['**Virupaksha Temple** — still active, with the inverted-image pinhole chamber', '**Vittala Temple** — the Stone Chariot (on the ₹50 note) and musical pillars', '**Hampi Bazaar, Hemakuta hill** sunset, **Matanga hill** sunrise', '**Lotus Mahal, Elephant Stables, Queen’s Bath** in the royal enclosure', '**Coracle ride** on the Tungabhadra; **Anjanadri hill** (Hanuman’s birthplace) across the river', 'Sanapur lake and the boulder landscape'],
    food: ['Thalis at Mango Tree; **Hippie Island** cafés across the river', 'Local **jolada rotti** (jowar roti) meals in Hospet'],
    culture: ['Mythologically **Kishkindha**, the monkey kingdom of the Ramayana', 'The Hampi Utsav (Nov) fills the ruins with music and light', 'Bouldering capital of India — climbers come from around the world'],
    funFacts: ['The musical pillars of Vittala temple ring in different notes when tapped — now protected from tapping.', 'The Stone Chariot’s wheels once actually turned.', 'Hampi has 1,600+ surviving monuments spread over 26 sq km.'],
    tips: ['Rent a bicycle or moped; carry water — it gets very hot.', 'Base at Hospet (13 km) or Sanapur/Anegundi across the river for a quieter stay.']
  },
  {
    id: 'nandi-hills', name: 'Nandi Hills', kind: 'place', scope: 'domestic', country: 'India', state: 'Karnataka', parent: 'karnataka',
    lat: 13.37, lng: 77.68, emoji: '🌄', tagline: 'Bengaluru’s sunrise hill and Tipu’s summer retreat',
    glance: { 'District': 'Chikkaballapur', 'Height': '1,478 m', 'From Bengaluru': '~60 km', 'Old name': 'Nandidurga / Ananda Giri', 'Rivers born here': 'Arkavathi, Palar, Penna, Chitravati and Papagni' },
    history: ['Fortified by the **Chikkaballapur chieftains** and then Hyder Ali and **Tipu Sultan**, who built the summer palace; the British captured it in 1791.', 'A hill station for colonial Bengaluru — Mark Cubbon, the Commissioner, spent summers here.', 'Hosted the 1986 SAARC summit retreat with Rajiv Gandhi.'],
    mustSee: ['**Sunrise viewpoint** above a sea of clouds', '**Tipu’s Drop** — the 600 m cliff', '**Yoga Nandeeshwara temple** on top and **Tipu’s summer palace**', 'Paragliding and the **Bhoga Nandeeshwara temple** at the foot of the hill', 'Cycling up the 8 km ghat road'],
    food: ['Breakfast idli-vada at the Nandi Hills canteen or at the foothill stalls'],
    culture: ['Named for the Nandi (bull) — the hill resembles a sleeping bull', 'Weekend cyclists and biker groups from Bengaluru make it a ritual'],
    funFacts: ['Five rivers originate on this one hill.', 'The gates now close at 10 am on weekends because of the sunrise crowd.'],
    tips: ['Leave Bengaluru by 4:30 am to see the sunrise; entry is timed.', 'Carry a jacket — it is 8–10°C cooler than the city.']
  },
  {
    id: 'mangalore', name: 'Mangaluru (Mangalore)', kind: 'place', scope: 'domestic', country: 'India', state: 'Karnataka', parent: 'karnataka',
    lat: 12.91, lng: 74.86, emoji: '⛵', tagline: 'Coastal port city of temples, churches and seafood', aka: ['Mangalore', 'Kudla'],
    glance: { 'District': 'Dakshina Kannada', 'Languages': 'Tulu, Kannada, Konkani, Beary', 'Named after': 'Goddess Mangaladevi', 'Rivers': 'Netravati and Gurupura', 'Port': 'New Mangalore Port, India’s 7th largest' },
    history: ['A trading port known to **Ptolemy** and Arab merchants; the Portuguese, then Hyder Ali and Tipu, then the British held it.', 'Tipu’s 1784 **Treaty of Mangalore** with the British is the last time an Indian power dictated terms.', 'Banking hub — Canara, Corporation, Syndicate and Vijaya banks all began here.'],
    mustSee: ['**Kudroli Gokarnath temple** and the ancient **Mangaladevi temple**', '**St Aloysius Chapel** — frescoed ceiling painted by Antonio Moscheni (1899)', '**Panambur and Tannirbhavi beaches**; **Sultan Battery** watchtower', '**Kadri Manjunatha temple** (bronze Lokeshwara, 968 CE)', 'Pilikula Nisargadhama, and boat rides on the Netravati'],
    food: ['**Neer dosa, kori rotti** (chicken curry over crisp rice wafers), **Mangalore buns**', '**Fish curry, ghee roast, kane (ladyfish) fry** at Machali / Giri Manja’s', 'Ideal Ice Cream’s **Gadbad**'],
    culture: ['**Tulu Nadu** heartland — Bhuta Kola spirit worship and Kambala buffalo races', 'Mixed communities: Tuluvas, Konkani Catholics, Bearys, GSBs — and a huge diaspora in the Gulf', 'Mangaluru Dasara at Kudroli is a spectacle of tiger-dance (Pili Nalike)'],
    funFacts: ['Mangaluru has six names in six languages: Kudla (Tulu), Kodial (Konkani), Maikala (Beary), Mangalapuram (Malayalam)…', 'Kambala racers have clocked 100 m in under 10 seconds on the mud track.'],
    tips: ['Try seafood at lunch — dinner places fill up fast.', 'Udupi is only an hour away for a combined trip.']
  },
  {
    id: 'udupi', name: 'Udupi', kind: 'place', scope: 'domestic', country: 'India', state: 'Karnataka', parent: 'karnataka',
    lat: 13.34, lng: 74.75, emoji: '🥞', tagline: 'Krishna’s temple town that fed the world its masala dosa',
    glance: { 'District': 'Udupi', 'Famous for': 'Sri Krishna Matha, Udupi cuisine, Malpe beach', 'Founded by': 'Madhvacharya (13th century)', 'Language': 'Tulu, Kannada', 'Nearby': 'St Mary’s Island, Manipal' },
    history: ['**Madhvacharya**, founder of Dvaita philosophy, installed the Krishna idol in the 13th century; legend says it arrived in a ship’s ballast of gopichandana clay.', 'Eight monasteries (**Ashta Mathas**) take turns managing the temple in the two-year **Paryaya** cycle since 1522.', 'Devotee **Kanakadasa**, denied entry, prayed from outside — the idol turned to face him, giving us the Kanakana Kindi window.'],
    mustSee: ['**Sri Krishna Matha** — darshan through the nine-holed Kanakana Kindi window', '**Malpe beach** and the boat to **St Mary’s Island** — hexagonal basalt columns', '**Kaup lighthouse** beach', '**Manipal** — End Point and the Hasta Shilpa heritage village', 'Anantheshwara and Chandramouleshwara temples beside the Matha'],
    food: ['**Masala dosa was born here** — Udupi hotels spread it across India', 'Free temple **prasada** meals; **goli baje**, **saaru**, **holige**', 'Diana / Mitra Samaj for the original Udupi breakfast'],
    culture: ['Strict vegetarian, sattvic tradition of the mathas', '**Yakshagana** night performances in the surrounding villages', 'Paryaya festival every two years in January'],
    funFacts: ['Udupi restaurateurs took the name to Mumbai in the 1920s; “Udupi hotel” now means any South Indian eatery.', 'St Mary’s Island’s columns formed from volcanic lava 88 million years ago when Madagascar split from India.'],
    tips: ['Boats to St Mary’s run only in fair weather (Oct–May).', 'Temple darshan is quickest early morning.']
  },
  {
    id: 'gokarna', name: 'Gokarna', kind: 'place', scope: 'domestic', country: 'India', state: 'Karnataka', parent: 'karnataka',
    lat: 14.55, lng: 74.32, emoji: '🏖️', tagline: 'Temple town on one side, beach trail on the other',
    glance: { 'District': 'Uttara Kannada', 'Meaning': '“Cow’s ear” — shaped by the two rivers', 'Famous for': 'Mahabaleshwar temple, Om beach', 'Beaches': 'Kudle, Om, Half Moon, Paradise', 'Best time': 'Oct–Mar' },
    history: ['One of the seven **Mukti Sthalas** of Karnataka; the Mahabaleshwar temple holds the **Atmalinga**, which legend says Ravana was tricked into setting down here by Ganesha.', 'Mentioned in the Mahabharata and Kalidasa’s poetry; a pilgrimage site for 1,500+ years.', 'Backpackers discovered its beaches in the 1990s as a quieter Goa.'],
    mustSee: ['**Mahabaleshwar temple** and Ganapati temple', '**Om beach** — shaped like the sacred syllable', 'The **beach trek**: Kudle → Om → Half Moon → Paradise', '**Mirjan Fort** (laterite, 16th c.) nearby', 'Sunset from the cliff cafés; **Yana rocks** day trip'],
    food: ['Beach shacks — Namaste Café at Om beach', 'Temple-street thalis; **Kokum** juice'],
    culture: ['Shivaratri here is one of the biggest in Karnataka — the chariot festival', 'Half temple town, half hippie beach — both co-exist peacefully'],
    funFacts: ['The Atmalinga is said to be so firmly rooted that Ravana’s attempt to lift it deformed it into a cow’s-ear shape.', 'Paradise beach is reachable only on foot or by boat.'],
    tips: ['Walk the beach trail early morning before the heat.', 'Men enter the main temple bare-chested by tradition.']
  },
  {
    id: 'coorg', name: 'Coorg (Kodagu)', kind: 'place', scope: 'domestic', country: 'India', state: 'Karnataka', parent: 'karnataka',
    lat: 12.42, lng: 75.74, emoji: '☕', tagline: 'The Scotland of India — coffee, mist and Kodava warriors', aka: ['Kodagu', 'Madikeri'],
    glance: { 'District HQ': 'Madikeri', 'Altitude': '~1,150 m', 'Famous for': 'Coffee, Kaveri’s birthplace, Kodava culture', 'River': 'Kaveri rises at Talakaveri', 'Best time': 'Oct–Mar' },
    history: ['Ruled by the **Haleri Rajas** (1600–1834) until the British annexed it; Coorg was a separate state until it merged with Mysore in 1956.', 'Kodavas are exempt from the Arms Act — a legacy of their martial tradition; the district has produced Field Marshal **Cariappa** and General **Thimayya**.', 'Coffee planting spread here from the 1850s with British planters.'],
    mustSee: ['**Abbey Falls** and **Raja’s Seat** sunset garden', '**Talakaveri** — the source of the Kaveri, and **Bhagamandala** confluence', '**Dubare elephant camp** on the Kaveri', '**Namdroling (Golden Temple)** Tibetan monastery at Bylakuppe', 'Coffee-estate walks and homestays; **Mandalpatti** jeep ride', 'Madikeri fort and Omkareshwara temple'],
    food: ['**Pandi curry** (pork) with **kadambuttu** rice balls', 'Coorg **bamboo-shoot curry**, **akki otti**, honey and homemade wine', 'Fresh-roasted filter coffee on the estate'],
    culture: ['Kodavas wear the distinctive **kupya** coat and **peeche kathi** dagger; women drape the sari with pleats at the back', '**Kail Podh** (arms festival) and **Puthari** (harvest) are the big Kodava festivals', 'Hockey is a religion — the Kodava Hockey Festival is the world’s largest field-hockey tournament'],
    funFacts: ['Kodagu produces about a third of India’s coffee.', 'Bylakuppe is the second-largest Tibetan settlement outside Tibet.', 'The Kaveri “rises” at Talakaveri on a fixed day each October (Tula Sankramana) — a spring bubbles up in the tank.'],
    tips: ['Homestays on coffee estates beat hotels.', 'Roads are twisty — leave time, and carry motion-sickness tablets.']
  },
  {
    id: 'mysuru', name: 'Mysuru (Mysore)', kind: 'place', scope: 'domestic', country: 'India', state: 'Karnataka', parent: 'karnataka',
    lat: 12.30, lng: 76.65, emoji: '👑', tagline: 'City of Palaces and the grandest Dasara', aka: ['Mysore'],
    glance: { 'Famous for': 'Mysore Palace, Dasara, silk, sandalwood, Mysore pak', 'Royal family': 'Wodeyars (since 1399)', 'Hill': 'Chamundi Hills, 1,060 m', 'From Bengaluru': '145 km', 'Named after': 'Mahishasura, the buffalo demon' },
    history: ['The **Wodeyar** dynasty has ruled since 1399; Hyder Ali and Tipu Sultan took power in the 1700s before the British restored the Wodeyars in 1799.', 'The current palace was built in **1912** by British architect Henry Irwin after fire destroyed the wooden one.', 'Under Krishnaraja Wodeyar IV, Mysore became a “model state” — Asia’s first hydroelectric project (Shivanasamudra, 1902) lit its streets.'],
    mustSee: ['**Mysore Palace** — lit by 100,000 bulbs on Sunday evenings and during Dasara', '**Chamundi Hills** — Chamundeshwari temple and the giant Nandi', '**Brindavan Gardens** at KRS dam, musical fountain', '**Mysore Zoo**, one of India’s oldest (1892)', '**Devaraja Market**, St Philomena’s Cathedral, Jaganmohan Palace art gallery', 'Rail Museum; **Srirangapatna** and **Somanathapura** day trips'],
    food: ['**Mysore pak** (invented in the palace kitchen by Kakasura Madappa), **Mysore masala dosa**', 'Mylari dosa; **Mysore bonda**; sweet **churmuri**'],
    culture: ['**Dasara** — 10 days of festivities and the Jumbo Savari elephant procession with the 750 kg golden howdah', 'The **Mysore school** of painting, Mysore silk, sandalwood oil and agarbathi', 'Yoga capital — Ashtanga yoga was developed here by Pattabhi Jois'],
    funFacts: ['Mysore Palace is India’s second most-visited monument after the Taj Mahal.', 'The Dasara elephants walk from the forest to the palace weeks in advance to train.', 'Mysuru has repeatedly been ranked India’s cleanest city.'],
    tips: ['Palace illumination: Sundays and public holidays 7–7:45 pm.', 'Dasara (Sept/Oct) needs bookings months ahead.']
  },
  {
    id: 'dandeli', name: 'Dandeli', kind: 'place', scope: 'domestic', country: 'India', state: 'Karnataka', parent: 'karnataka',
    lat: 15.27, lng: 74.62, emoji: '🛶', tagline: 'White-water rafting on the Kali river',
    glance: { 'District': 'Uttara Kannada', 'River': 'Kali', 'Famous for': 'Rafting, kayaking, hornbills, Dandeli Wildlife Sanctuary', 'Forest': 'Western Ghats semi-evergreen', 'Best time': 'Oct–May' },
    history: ['Named after the local deity Dandelappa; the forest fed a paper mill from the 1950s.', 'Declared a wildlife sanctuary in 1956; along with Anshi it now forms the **Kali Tiger Reserve** (2015).'],
    mustSee: ['**Rafting** the 9 km Ganeshgudi stretch of the Kali', '**Syntheri Rocks** — a 300-ft granite monolith over the Kaneri river', '**Kavala caves** with a natural Shivalinga', 'Coracle rides, kayaking, zip-lines at the river camps', 'Hornbill and black-panther spotting; **Supa dam** backwaters'],
    food: ['Camp-cooked meals; Ganeshgudi tea and pakoras after rafting'],
    culture: ['Home to the **Siddi** community — descendants of Africans brought by the Portuguese', 'Old Kali temple festivals in the forest villages'],
    funFacts: ['Dandeli is one of the best places in India to see all four hornbill species of the Western Ghats.', 'The black panther of Kabini also lives here — melanistic leopards.'],
    tips: ['Rafting grade depends on dam release — check the day before.', 'Stay at a river-side camp for early-morning birding.']
  },
  {
    id: 'chitradurga', name: 'Chitradurga', kind: 'place', scope: 'domestic', country: 'India', state: 'Karnataka', parent: 'karnataka',
    lat: 14.23, lng: 76.40, emoji: '🏰', tagline: 'The seven-ringed stone fort of Onake Obavva',
    glance: { 'Famous for': 'Chitradurga Fort (Elusuttina Kote — 7 circles)', 'Built by': 'Chalukyas → Hoysalas → Nayakas (17th–18th c.)', 'On the highway': 'NH-48, Bengaluru–Pune', 'Hills': 'Chinmuladri range', 'Also': 'Vani Vilas Sagar, Chandravalli caves' },
    history: ['Fortified over centuries; the **Nayaka** palegars (1500–1779) made it a mighty stronghold with 19 gateways and seven walls.', 'In 1779 **Hyder Ali** captured it after a long siege; **Onake Obavva**, a guard’s wife, killed intruders one by one with a pestle (onake) at a hidden crevice.', 'Mythologically Hidimba’s home from the Mahabharata; giant boulders are called Bhima’s toys.'],
    mustSee: ['**Chitradurga Fort** — seven concentric walls, Onake Obavva Kindi, temples and oil pits', '**Chandravalli caves** — the underground Ankali Matha', '**Vani Vilas Sagar dam** (1907), one of Karnataka’s oldest', 'Jogimatti hill; the monkey-man **Jyothiraj** climbing the walls'],
    food: ['Typical Bayaluseeme (plains) fare — **ragi mudde**, jolada rotti, ennegai'],
    culture: ['Obavva is a folk heroine — her story is taught in every Karnataka school', 'Murugha Matha, an influential Lingayat monastery'],
    funFacts: ['The fort was never taken by force — Hyder Ali entered through the crevice Obavva guarded.', 'Chitradurga sits on some of the oldest rocks on Earth (~3 billion years).'],
    tips: ['Climb early — the stone gets very hot.', 'Guides are worth it: the fort’s water-harvesting system is clever.']
  },
  {
    id: 'bhoga-nandeeshwara', name: 'Bhoga Nandeeshwara Temple', kind: 'place', scope: 'domestic', country: 'India', state: 'Karnataka', parent: 'karnataka',
    lat: 13.39, lng: 77.69, emoji: '🛕', tagline: 'A thousand-year-old temple at the foot of Nandi Hills', aka: ['Bhoga Nandishwara', 'Nandi village temple'],
    glance: { 'Location': 'Nandi village, Chikkaballapur', 'Age': '9th century (Bana / Nolamba)', 'Dedicated to': 'Shiva as Nandeeshwara', 'Twin temple': 'Yoga Nandeeshwara on top of the hill', 'Protected by': 'ASI' },
    history: ['Founded around **806 CE** under the Bana queen Ratnavali; later dynasties — Cholas, Hoysalas, Vijayanagara — each added shrines and mandapas, making it a textbook of Dravidian styles.', 'The **Kalyani** (stepped tank) with its Vijayanagara pillars is the most photographed spot.', 'Three shrines: Arunachaleshwara (childhood), Bhoga Nandeeshwara (youth) and Uma Maheshwara (marriage) — Shiva’s stages of life.'],
    mustSee: ['The **stepped Kalyani** tank at dusk', 'Hoysala-style **Uma Maheshwara** shrine — a favourite for weddings', 'Chola-period carvings and the Vasantha mandapa'],
    food: ['Combine with breakfast in Chikkaballapur or on Nandi Hills'],
    culture: ['Newly-weds come here for blessings; shooting location for many Kannada films'],
    funFacts: ['Marriage ceremonies at Uma Maheshwara are considered auspicious because the shrine depicts Shiva’s wedding (Girija Kalyana).'],
    tips: ['Visit late afternoon, then climb Nandi Hills next morning.']
  },
  {
    id: 'shravanabelagola', name: 'Shravanabelagola', kind: 'place', scope: 'domestic', country: 'India', state: 'Karnataka', parent: 'karnataka',
    lat: 12.86, lng: 76.49, emoji: '🧘', tagline: 'The 57-foot Gommateshwara on Vindhyagiri hill', aka: ['Sharavanabelagola', 'Sravanabelagola'],
    glance: { 'District': 'Hassan', 'Statue': 'Bahubali (Gommateshwara), 17 m, 981 CE', 'Hills': 'Vindhyagiri (614 steps) and Chandragiri', 'Festival': 'Mahamastakabhisheka every 12 years (last 2018, next 2030)', 'Meaning': '“White pond of the Jain ascetic”' },
    history: ['Carved from a single granite rock in **981 CE** by Chavundaraya, minister of the Ganga king Rachamalla.', 'Emperor **Chandragupta Maurya** is said to have come here with his guru Bhadrabahu in the 3rd century BCE and died by ritual fasting (sallekhana) on Chandragiri.', 'One of the oldest and most important Jain pilgrimage centres in South India.'],
    mustSee: ['**Gommateshwara** statue — climb the 614 rock-cut steps barefoot', 'The **Mahamastakabhisheka** anointing with milk, saffron and gold flowers', '**Chandragiri** hill basadis and Bhadrabahu cave', 'Bhandari Basadi and the white pond (Kalyani) between the hills'],
    food: ['Jain satvik meals in the pilgrim dining halls — no onion, no garlic'],
    culture: ['A living centre of Digambara Jainism; Kannada inscriptions here span 1,000 years', 'Absolute calm on the hilltop — the statue’s serene face is the point'],
    funFacts: ['It is one of the largest free-standing monolithic statues in the world.', 'Vines carved climbing Bahubali’s legs show he stood meditating so long that creepers grew on him.'],
    tips: ['Climb before 8 am — the rock burns bare feet later; socks are allowed.', 'Combine with Belur and Halebidu in one day.']
  },
  {
    id: 'melukote', name: 'Melukote', kind: 'place', scope: 'domestic', country: 'India', state: 'Karnataka', parent: 'karnataka',
    lat: 12.66, lng: 76.65, emoji: '🛕', tagline: 'Cheluvanarayana’s hill town of Ramanuja and puliyogare',
    glance: { 'District': 'Mandya', 'Temples': 'Cheluvanarayana Swamy, Yoganarasimha (hilltop)', 'Associated with': 'Sri Ramanujacharya (12th c.)', 'Festival': 'Vairamudi Brahmotsava (Mar/Apr)', 'Known for': 'Puliyogare, Iyengar culture, Kalyani tank' },
    history: ['**Ramanuja**, the Vishishtadvaita philosopher, lived here 12 years after fleeing the Cholas, and revived the temple in the 1100s.', 'The Vairamudi diamond crown, gifted by Mysore’s Wodeyars, is kept in the state treasury and brought out once a year.', 'Home of the Sanskrit academy and the Academy of Sanskrit Research.'],
    mustSee: ['**Cheluvanarayana Swamy temple** and the Vairamudi festival', '**Yoganarasimha temple** — 300 steps up, sweeping views', '**Kalyani (Panchakalyani)** stepped tank — a film-shoot favourite', 'Raya Gopura — the unfinished tower on the ridge'],
    food: ['**Melukote puliyogare** — tamarind rice, sold in paper cones', 'Iyengar bakery-style snacks and sweet pongal prasada'],
    culture: ['A stronghold of the Sri Vaishnava Iyengar community and Sanskrit learning', 'Famous “Melukote” cotton saris are woven here'],
    funFacts: ['Legend says the temple idol was once worshipped by Rama and Krishna, and that Ramanuja recovered the utsava idol from a Delhi sultan’s daughter.'],
    tips: ['Weekends can be crowded with Bengaluru day-trippers; go on a weekday morning.']
  },
  {
    id: 'ramanagara', name: 'Ramanagara', kind: 'place', scope: 'domestic', country: 'India', state: 'Karnataka', parent: 'karnataka',
    lat: 12.72, lng: 77.28, emoji: '🪨', tagline: 'Silk city and the rocks of Sholay', aka: ['Ramnagara', 'Ramgarh'],
    glance: { 'Famous for': 'Rock climbing, Sholay’s “Ramgarh”, Asia’s largest silk cocoon market', 'From Bengaluru': '50 km', 'Rocks': 'Ramadevara Betta', 'Vulture sanctuary': 'India’s first (2012)', 'Also': 'Janapada Loka folk museum' },
    history: ['Known as Closepet under the British (after Sir Barry Close); renamed after the Ramadevara temple on the hill.', 'Silk reeling has been the trade since Tipu Sultan encouraged sericulture in the 1780s.', 'The 1975 film **Sholay** was shot on these rocks, and Passage to India (1984) too.'],
    mustSee: ['**Ramadevara Betta** — temple on top, long-billed vultures', '**Sholay rocks** and rock-climbing walls', '**Janapada Loka** — museum of Karnataka folk arts', 'Silk cocoon market at dawn; **Kanva reservoir**'],
    food: ['Roadside **Kamat Lokaruchi** style meals; famous “Ramanagara Idli” stalls on the highway'],
    culture: ['Silk economy — farmers bring cocoons daily to the auction', 'Rock climbing and cave exploration weekends'],
    funFacts: ['Ramanagara’s rocks are among the oldest granite formations on the planet.', 'Gabbar Singh’s hideout was built on Ramadevara Betta — locals still point out the spot.'],
    tips: ['Go early to the cocoon market (6–8 am) for the spectacle.', 'Vulture viewing is best in the morning from the hilltop.']
  },
  {
    id: 'srirangapatna', name: 'Srirangapatna', kind: 'place', scope: 'domestic', country: 'India', state: 'Karnataka', parent: 'karnataka',
    lat: 12.42, lng: 76.69, emoji: '⚔️', tagline: 'Tipu Sultan’s island capital on the Kaveri', aka: ['Srirangapatnam', 'Seringapatam'],
    glance: { 'District': 'Mandya', 'Type': 'River island in the Kaveri', 'Temple': 'Ranganathaswamy (Adi Ranga)', 'Famous for': 'Tipu’s fort, Daria Daulat Bagh, Gumbaz', 'Fell': '4 May 1799, Fourth Anglo-Mysore War' },
    history: ['Capital of Mysore under **Hyder Ali and Tipu Sultan** (1761–99) and earlier of the Wodeyars.', 'Stormed by the British under General Harris on **4 May 1799**; Tipu died fighting at the Water Gate; Arthur Wellesley (later Wellington) governed the town afterwards.', 'The Ranganatha temple (894 CE, Ganga period) predates all this and gives the island its name.'],
    mustSee: ['**Daria Daulat Bagh** — Tipu’s teak summer palace with battle murals', '**Gumbaz** — mausoleum of Tipu, Hyder Ali and Fatima Begum', 'The **fort walls, Water Gate** where Tipu fell, and the **dungeons**', '**Ranganathaswamy temple**', '**Ranganathittu bird sanctuary** — pelicans, painted storks, crocodiles', 'Sangam, Nimishamba temple, and Balmuri falls'],
    food: ['Mandya’s famous **jaggery** and sugarcane juice; Kamat Madhuvan on the highway'],
    culture: ['Tipu’s “Tiger of Mysore” legend — rockets, tiger stripes, the mechanical tiger now in London’s V&A', 'Adi Ranga is the first of the three Ranganatha temples on the Kaveri (with Shivanasamudra and Srirangam)'],
    funFacts: ['Tipu’s iron-cased **rockets** used here inspired the Congreve rockets and “the rockets’ red glare” in the US anthem.', 'The island is only 4 km long but was one of the strongest forts in India.'],
    tips: ['Visit Ranganathittu by boat in the morning (Dec–May for migrants).', 'Combine with Mysuru — it is only 16 km away.']
  },
  {
    id: 'shivanasamudra', name: 'Shivanasamudra Falls', kind: 'place', scope: 'domestic', country: 'India', state: 'Karnataka', parent: 'karnataka',
    lat: 12.29, lng: 77.17, emoji: '💦', tagline: 'Twin falls of the Kaveri — Gaganachukki and Barachukki', aka: ['Sivanasamudra', 'Sivanasamudara', 'Bluff'],
    glance: { 'District': 'Chamarajanagar / Mandya border', 'River': 'Kaveri splits around an island', 'Height': '~90 m', 'Falls': 'Gaganachukki (west) and Barachukki (east)', 'Best time': 'Jul–Oct after monsoon' },
    history: ['Site of **Asia’s first hydroelectric power station (1902)**, built for the Kolar Gold Fields; Bengaluru became the first Asian city with electric street lights from it.', 'The island holds the medieval Ranganatha temple — the “Madhya Ranga” of the Kaveri trinity.'],
    mustSee: ['**Gaganachukki** viewpoint — the roaring horse-tail falls', '**Barachukki** — 200 steps down, coracle rides at the base', 'Madhya Ranganatha temple', 'Talakadu (sand-buried temples) and Somanathapura Hoysala temple nearby'],
    food: ['Roadside meals in Malavalli; carry your own snacks'],
    culture: ['Locals still call the area “Bluff” from the British power-station days', 'The Kaveri is worshipped as a goddess — bathing ghats at the island'],
    funFacts: ['The falls were so big that early engineers called them the “Niagara of India”.', 'The transmission line to KGF (147 km) was the longest in the world in 1902.'],
    tips: ['Never swim near the falls — currents have claimed lives.', 'Monsoon is the most dramatic, but paths get slippery.']
  },
  {
    id: 'kukke-subramanya', name: 'Kukke Subramanya', kind: 'place', scope: 'domestic', country: 'India', state: 'Karnataka', parent: 'karnataka',
    lat: 12.66, lng: 75.61, emoji: '🐍', tagline: 'The serpent-god temple in the Western Ghats',
    glance: { 'District': 'Dakshina Kannada', 'Deity': 'Subramanya (Kartikeya) worshipped with Vasuki, the serpent king', 'River': 'Kumaradhara', 'Famous pooja': 'Sarpa Samskara / Ashlesha Bali for naga dosha', 'Backdrop': 'Kumara Parvatha peak (1,712 m)' },
    history: ['Legend: after killing Tarakasura, Kartikeya washed his weapon in the Kumaradhara; the serpent Vasuki took refuge here from Garuda and Subramanya became his protector.', 'Mentioned in the Skanda Purana as Kukke Pattana; Adi Shankara is said to have visited and composed the Subramanya Bhujangam here.'],
    mustSee: ['**Subramanya temple** — enter through the Garuda pillar (silver-coated) that protects from Vasuki’s venom breath', '**Kumaradhara bath** before darshan', '**Adi Subramanya** anthill shrine', '**Kumara Parvatha trek** — one of Karnataka’s toughest (2 days)', 'Bisle Ghat viewpoint on the drive'],
    food: ['Temple annadana meals; Malnad fare at the lodges'],
    culture: ['People from all over India come for naga-dosha remedies on Sashti days', 'Champa Shashti in Nov/Dec is the grand festival with the chariot'],
    funFacts: ['The temple sits where the Kumaradhara meets the forest — leopards are still seen on the trek trail.', 'Cricketers and film stars are frequent visitors for the Sarpa Samskara pooja.'],
    tips: ['Book Ashlesha Bali sevas online in advance.', 'Rains are extreme (June–Sept) — leeches on the trek.']
  },
  {
    id: 'belur', name: 'Belur', kind: 'place', scope: 'domestic', country: 'India', state: 'Karnataka', parent: 'karnataka',
    lat: 13.16, lng: 75.86, emoji: '🎨', tagline: 'Chennakeshava temple — the Hoysala masterpiece',
    glance: { 'District': 'Hassan', 'Temple': 'Chennakeshava, 1117 CE', 'Built by': 'King Vishnuvardhana', 'UNESCO': 'World Heritage 2023 (Sacred Ensembles of the Hoysalas)', 'Took': '103 years to complete' },
    history: ['Commissioned by **Vishnuvardhana** in 1117 to celebrate his victory over the Cholas at Talakad; the temple became the Hoysala capital’s jewel (the capital was Halebidu).', 'Carved in soft **soapstone**, which allowed the famously fine detail; chief sculptors like Dasoja and Chavana signed their work.', 'The Hoysalas ruled from the 10th to 14th centuries until Malik Kafur’s raids.'],
    mustSee: ['**Chennakeshava temple** — the 42 **Madanika** (celestial dancer) bracket figures, including Darpana Sundari (lady with mirror)', 'The **Narasimha pillar** that once rotated', 'Queen **Shantala**’s dancing figure; the Gravity Pillar standing without foundation', 'Kappe Chennigaraya and Veeranarayana shrines'],
    food: ['Hassan-style thalis; Malnad **akki rotti** on the way'],
    culture: ['Still a living temple with daily worship, unlike Halebidu', 'Hoysala emblem: young Sala fighting a tiger — “Hoy, Sala!”'],
    funFacts: ['One sculpture shows a lady with a drop of water carved so finely it seems to fall; another has a nail-sized fly on a fruit.', 'The Hoysalas built over 1,500 temples; about 100 survive.'],
    tips: ['Hire the ASI-licensed guide — the sculptures tell stories you would miss.', 'Belur + Halebidu + Shravanabelagola = one long day from Bengaluru or Chikkamagaluru.']
  },
  {
    id: 'halebidu', name: 'Halebidu', kind: 'place', scope: 'domestic', country: 'India', state: 'Karnataka', parent: 'karnataka',
    lat: 13.21, lng: 75.99, emoji: '🛕', tagline: 'Hoysaleswara — the “old city” of the Hoysalas', aka: ['Halebeedu', 'Halebid', 'Dwarasamudra'],
    glance: { 'District': 'Hassan', 'Temple': 'Hoysaleswara, 12th century', 'Old name': 'Dwarasamudra — the Hoysala capital', 'UNESCO': 'World Heritage 2023', 'Meaning': 'Halebidu = “ruined city”' },
    history: ['Capital of the Hoysalas as **Dwarasamudra**; the twin Shiva temple was begun around 1121 under Vishnuvardhana.', 'Sacked twice by the Delhi Sultanate armies (Malik Kafur 1311, Muhammad bin Tughlaq 1327) — hence the name “old/ruined city”.', 'Never fully completed; the tower was never built, but the walls hold the densest sculpture of any Hoysala temple.'],
    mustSee: ['**Hoysaleswara temple** — the outer wall frieze with 240+ images of the epics and 20,000+ carvings', 'The two monolithic **Nandi** bulls', '**Kedareshwara temple** and the **Jain basadis** (Parshvanatha)', 'ASI museum with loose sculptures', 'Dwarasamudra lake behind the temple'],
    food: ['Combine meals with Belur (16 km) or Chikkamagaluru'],
    culture: ['Shaivite twin temple — one for the king, one for the queen (Shantaleswara)', 'Hoysala sculptors carved their names beneath their work — early “artists’ signatures”'],
    funFacts: ['Percy Brown called Hoysaleswara the “supreme climax of Indian architecture”.', 'The soapstone is soft when quarried and hardens with air — which is why the lace-like carving was possible.'],
    tips: ['Morning light is best on the east-facing sculptures.', 'Wear socks — the stone floor gets hot.']
  },
  {
    id: 'chikkamagaluru', name: 'Chikkamagaluru', kind: 'place', scope: 'domestic', country: 'India', state: 'Karnataka', parent: 'karnataka',
    lat: 13.32, lng: 75.77, emoji: '🌿', tagline: 'Coffee land under Karnataka’s highest peak', aka: ['Chikmagalur'],
    glance: { 'Famous for': 'Coffee estates, Mullayanagiri, Baba Budangiri', 'Highest peak': 'Mullayanagiri, 1,930 m — Karnataka’s highest', 'Coffee': 'India’s first coffee planted here (1670s)', 'Meaning': '“Younger daughter’s town” (given as dowry)', 'Best time': 'Sept–Mar' },
    history: ['Sufi saint **Baba Budan** smuggled seven coffee beans from Yemen in the 1670s and planted them on the hills that now carry his name — the birth of Indian coffee.', 'British planters expanded estates in the 1800s; the town was Chikmagalur until renamed in 2014.', 'Part of the Hoysala heartland — Belur is 25 km away.'],
    mustSee: ['**Mullayanagiri** — Karnataka’s highest point, short climb from the road', '**Baba Budangiri** — the Dattatreya Peetha shrine and Manikyadhara falls', '**Hebbe falls** jeep ride and **Kemmangundi** hill station', 'Coffee estate stays; **Coffee Museum**', 'Bhadra Wildlife Sanctuary / river-tern lodge; **Kudremukh** trek', 'Hirekolale lake sunset'],
    food: ['Estate-fresh **filter coffee**', 'Malnad **kadubu**, **akki rotti**, jackfruit dishes', 'Town Canteen’s butter dosa; Kaapi Kottige'],
    culture: ['Coffee-planter lifestyle — bungalows, walks, campfires', 'Baba Budangiri is shared by Hindus and Muslims as a syncretic shrine'],
    funFacts: ['The Mullayanagiri–Baba Budangiri range is the highest between the Himalayas and the Nilgiris.', 'Chikkamagaluru grows both Arabica and Robusta; the Arabica here is prized worldwide.'],
    tips: ['Estate homestays book out at weekends; go mid-week.', 'Mullayanagiri gets very windy — carry a windcheater.']
  },
  {
    id: 'sringeri', name: 'Sringeri', kind: 'place', scope: 'domestic', country: 'India', state: 'Karnataka', parent: 'karnataka',
    lat: 13.42, lng: 75.25, emoji: '📿', tagline: 'Adi Shankara’s first matha, on the Tunga',
    glance: { 'District': 'Chikkamagaluru', 'Founded': '8th century by Adi Shankaracharya', 'Deity': 'Sharadamba (Saraswati)', 'River': 'Tunga', 'Matha': 'Dakshinamnaya Sri Sharada Peetham — the southern of Shankara’s four mathas' },
    history: ['**Adi Shankara** chose this spot after seeing a cobra shading a frog from the sun on the riverbank — a sign of harmony; the name comes from Rishyashringa, the sage who lived here.', 'The **Vijayanagara** founders Harihara and Bukka were guided by the pontiff **Vidyaranya**, and the matha received royal grants.', 'An unbroken line of 36 Jagadgurus continues to this day.'],
    mustSee: ['**Sharadamba temple** — golden idol of the goddess', '**Vidyashankara temple** (1338) — 12 zodiac pillars that catch the sun in the right month', 'Feeding the **fish** in the Tunga from the ghats', 'Kigga (Rishyashringa temple) and **Sirimane falls** nearby', 'Horanadu Annapoorneshwari temple (2 hours)'],
    food: ['Free matha **prasada** meals for all pilgrims', 'Malnad coffee and jackfruit chips'],
    culture: ['Navaratri celebrated on a grand scale for 10 days', 'Vedic school (pathashala) with students from across India'],
    funFacts: ['Sunlight falls on the correct zodiac pillar of the Vidyashankara temple according to the solar month — 14th-century astronomy in stone.', 'The fish in the Tunga are considered sacred — no one fishes here.'],
    tips: ['Dress traditionally for the temple (no shorts).', 'Monsoon here is spectacular but very wet — Sringeri gets over 3,000 mm of rain.']
  }
);
