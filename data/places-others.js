/* places-others.js — India hub, remaining state hubs and places outside the four southern states */
TRIPS.places.push(
  /* ======================= INDIA (root of the domestic tree) ======================= */
  {
    id: 'india', name: 'India', kind: 'country', scope: 'domestic', country: 'India',
    lat: 22.5, lng: 79, emoji: '🪷', tagline: 'Home — a subcontinent of a thousand journeys',
    glance: { 'Capital': 'New Delhi', 'States / UTs': '28 states, 8 union territories', 'Languages': '22 scheduled, 100s more', 'Population': '~1.45 billion — the largest', 'Independence': '15 August 1947', 'UNESCO sites': '43' },
    history: ['Indus Valley cities 2600 BCE → Vedic age → Mauryas (Ashoka) → Guptas → Cholas, Delhi Sultanate, Vijayanagara, Mughals → British Raj → freedom in 1947.'],
    culture: ['Every state on this site has its own language, food and festivals — that is the point of travelling here.'],
    funFacts: ['India has the world’s largest rail network by passengers, the largest postal network, and the most films made each year.'],
    tips: ['Click a state below to see our stops there.']
  },

  /* ======================= MAHARASHTRA ======================= */
  {
    id: 'maharashtra', name: 'Maharashtra', kind: 'state', scope: 'domestic', country: 'India', state: 'Maharashtra', parent: 'india',
    lat: 19.75, lng: 75.71, emoji: '🏙️', tagline: 'Mumbai’s energy, cave temples and Shivaji’s forts',
    glance: { 'Capital': 'Mumbai', 'Language': 'Marathi', 'Formed': '1 May 1960', 'Districts': '36', 'UNESCO': 'Ajanta, Ellora, Elephanta, CST, Victorian & Art Deco Mumbai, Western Ghats, Maratha forts (2025)' },
    history: ['Satavahanas and Rashtrakutas carved the caves; **Shivaji** founded the Maratha Empire in 1674; the Bombay Presidency under the British; Samyukta Maharashtra movement won the state in 1960.'],
    food: ['**Vada pav, misal pav, puran poli, bhakri-pithla**, Kolhapuri mutton, Malvani fish'],
    culture: ['Ganesh Chaturthi is the festival; Lavani dance; Warkari pilgrimage to Pandharpur'],
    funFacts: ['Maharashtra has 350+ forts — more than any state.']
  },
  {
    id: 'mumbai', name: 'Mumbai', kind: 'place', scope: 'domestic', country: 'India', state: 'Maharashtra', parent: 'maharashtra',
    lat: 19.08, lng: 72.88, emoji: '🌆', tagline: 'Maximum City — Bollywood, sea-face and the Gateway', aka: ['Bombay'],
    glance: { 'Population': '~21 million (metro)', 'Famous for': 'Gateway of India, Marine Drive, Bollywood, local trains, Dabbawalas', 'Islands': 'Originally seven, joined by reclamation', 'Stock exchange': 'BSE — Asia’s oldest (1875)', 'Airport': 'Busiest single-runway airport in the world' },
    history: ['Seven islands given to the Portuguese in 1534 and to England in **1661** as Catherine of Braganza’s dowry; the East India Company leased them for £10 a year.', '**Hornby Vellard** (1784) and later reclamations joined the islands; cotton mills and the port made it India’s commercial capital.', 'The 1942 Quit India resolution was passed at Gowalia Tank; Bombay became Mumbai in 1995.'],
    mustSee: ['**Gateway of India** (1924) and the Taj Mahal Palace hotel; ferry to **Elephanta caves**', '**Marine Drive** — the Queen’s Necklace at night; Chowpatty', '**Chhatrapati Shivaji Terminus** (UNESCO), Kala Ghoda, Fort area’s Gothic buildings', '**Haji Ali dargah**, Siddhivinayak, Mahalaxmi', '**Dharavi** walking tour; Bandra’s Bandstand and the Sea Link; Juhu beach', 'Sanjay Gandhi National Park and Kanheri caves; a Bollywood studio tour'],
    food: ['**Vada pav**, **pav bhaji** at Chowpatty, **bhel puri**, Bombay sandwich', 'Irani cafés (Kyani, Britannia’s berry pulao), Parsi dhansak', 'Bademiya kebabs at Colaba; Mohammed Ali Road in Ramzan'],
    culture: ['The **Dabbawalas** deliver 200,000 lunches daily with near-zero errors', 'Local trains carry 7.5 million a day', 'Ganesh Chaturthi immersions at Girgaon Chowpatty; Bollywood — 1,000+ films a year'],
    funFacts: ['Mumbai is the wealthiest city in India and has the most billionaires in Asia.', 'The Dabbawalas were studied by Harvard for their six-sigma accuracy.', 'The city name comes from Mumba Devi, the Koli fishing community’s goddess.'],
    tips: ['Avoid local trains at rush hour (8–11 am, 5–9 pm) unless you enjoy being carried.', 'Monsoon (June–Sept) floods streets — but Marine Drive in rain is magic.']
  },
  {
    id: 'lonavala', name: 'Lonavala', kind: 'place', scope: 'domestic', country: 'India', state: 'Maharashtra', parent: 'maharashtra',
    lat: 18.75, lng: 73.41, emoji: '🍬', tagline: 'Chikki, mist and the Sahyadri monsoon',
    glance: { 'District': 'Pune', 'Altitude': '622 m', 'Between': 'Mumbai and Pune on the Expressway', 'Famous for': 'Chikki, Bhushi dam, Tiger’s Leap, Karla & Bhaja caves', 'Best time': 'Monsoon (Jul–Sept) for waterfalls' },
    history: ['**Karla and Bhaja** Buddhist caves (2nd century BCE) — Karla has the largest chaitya hall in India.', 'The British built the Bhor Ghat railway (1863) and the hill station; **Lohagad and Visapur** forts guarded the trade pass — Shivaji and the Marathas held them.', 'Maganlal Chikki has sold jaggery-peanut chikki here since 1888.'],
    mustSee: ['**Bhushi dam** overflow steps in monsoon; **Tiger’s Leap** and Lion’s Point', '**Karla caves** — the great chaitya with wooden ribs intact, and **Bhaja caves**', '**Lohagad fort** trek and the Scorpion’s Tail; Pawna lake camping', 'Rajmachi point; Della Adventure; **Khandala** viewpoints; Ryewood park'],
    food: ['**Chikki** (Maganlal, Cooper’s) and **fudge**', 'Vada pav and bhutta in the rain; Kinara dhaba'],
    culture: ['Weekend crowds from Mumbai and Pune; a monsoon ritual', 'The Ekvira temple at Karla is the Koli community’s goddess'],
    funFacts: ['Lonavala’s name may come from “lonavali” — a chain of caves.', 'The Mumbai–Pune Expressway (2002) was India’s first six-lane expressway.'],
    tips: ['Monsoon weekends are jammed — go on a weekday.', 'Lohagad’s steps are easy; combine with Bhaja caves at the base.']
  },
  {
    id: 'ellora', name: 'Ellora Caves', kind: 'place', scope: 'domestic', country: 'India', state: 'Maharashtra', parent: 'maharashtra',
    lat: 20.03, lng: 75.18, emoji: '⛏️', tagline: 'Kailasa — a mountain carved into a temple',
    glance: { 'Near': 'Aurangabad (30 km)', 'Caves': '34 — 12 Buddhist, 17 Hindu, 5 Jain', 'Era': '600–1000 CE', 'UNESCO': 'World Heritage 1983', 'Star': 'Cave 16 — Kailasa temple, Rashtrakuta, 8th century' },
    history: ['Carved top-down from a single basalt cliff over 400 years; three religions built side by side — a monument to coexistence.', '**Kailasa temple** was commissioned by Rashtrakuta king **Krishna I** (c. 760 CE); 200,000 tonnes of rock were removed to free it — twice the area of the Parthenon.', 'Aurangzeb is buried nearby at Khuldabad in a simple grave.'],
    mustSee: ['**Cave 16, Kailasa** — walk around it from above to grasp the scale', '**Cave 10** (Vishvakarma / Carpenter’s cave) — the Buddhist chaitya with a “wooden” stone ceiling', '**Cave 29** (Dhumar Lena) and Cave 21 (Ramesvara) — Shiva sculptures', '**Jain caves 30–34** — Indra Sabha’s carved ceilings', '**Grishneshwar** Jyotirlinga temple next door; **Daulatabad fort** on the way'],
    food: ['Aurangabad’s **naan qalia** and Marathwada thalis'],
    culture: ['Ellora Ajanta Festival of dance and music (Oct/Nov)', 'Grishneshwar is the 12th Jyotirlinga — pilgrims and tourists share the site'],
    funFacts: ['Kailasa is the largest monolithic structure in the world — carved from one rock, not built.', 'It took an estimated 100+ years and was cut from top to bottom so no scaffolding was needed.'],
    tips: ['Closed Tuesdays (Ajanta is closed Mondays).', 'Start with Kailasa early, then the others; carry water, it is hot and spread out.']
  },
  {
    id: 'ajanta', name: 'Ajanta Caves', kind: 'place', scope: 'domestic', country: 'India', state: 'Maharashtra', parent: 'maharashtra',
    lat: 20.55, lng: 75.70, emoji: '🖼️', tagline: 'Buddhist murals lost for a thousand years', aka: ['Ajantha'],
    glance: { 'Near': 'Aurangabad (100 km)', 'Caves': '30, in a horseshoe gorge of the Waghora river', 'Era': '2nd century BCE – 6th century CE', 'UNESCO': 'World Heritage 1983', 'Rediscovered': '1819 by John Smith, a British officer on a tiger hunt' },
    history: ['Carved in two phases: Satavahana (2nd–1st c. BCE) and Vakataka (5th c. CE, under Harishena); abandoned around 480 CE and forgotten.', 'In **1819** John Smith spotted a cave arch through the jungle while hunting; he scratched his name on a pillar of Cave 10 — still visible.', 'The paintings — of the Jataka tales and the famous **Padmapani and Vajrapani** in Cave 1 — are the finest surviving ancient Indian murals.'],
    mustSee: ['**Cave 1** — Bodhisattva Padmapani, the “Mona Lisa of India”', '**Cave 2** ceilings; **Cave 17** with the most paintings', '**Cave 26** — the reclining Buddha (Mahaparinirvana) and the Temptation of Mara', '**Caves 9 & 10** — the earliest chaityas', 'The **viewpoint** across the gorge where Smith first saw the caves'],
    food: ['Simple MTDC canteen; carry snacks — it is remote'],
    culture: ['The paintings were done with natural pigments on mud-plaster — tempera technique', 'Ajanta influenced Buddhist art all the way to China and Japan'],
    funFacts: ['Ajanta’s Buddhist monks lived here during the monsoon retreat (vassa).', 'Only about 6 of the 30 caves have well-preserved paintings — photography without flash only.'],
    tips: ['Closed Mondays. It is a full day from Aurangabad; go early, the shuttle from the parking is compulsory.', 'Torches help — the caves are kept dim to protect the pigments.']
  },
  {
    id: 'aurangabad', name: 'Aurangabad (Chhatrapati Sambhajinagar)', kind: 'place', scope: 'domestic', country: 'India', state: 'Maharashtra', parent: 'maharashtra',
    lat: 19.88, lng: 75.34, emoji: '🕌', tagline: 'City of gates and the “Taj of the Deccan”', aka: ['Chhatrapati Sambhajinagar', 'Sambhajinagar'],
    glance: { 'Renamed': 'Chhatrapati Sambhajinagar (2023)', 'Famous for': 'Bibi ka Maqbara, Daulatabad fort, Panchakki, 52 gates', 'Gateway to': 'Ajanta and Ellora', 'Textile': 'Paithani and Himroo weaves', 'Founded': '1610 by Malik Ambar as Khadki' },
    history: ['**Malik Ambar**, the Ethiopian-born Ahmadnagar general, founded it; **Aurangzeb** made it his Deccan capital and gave it his name.', '**Daulatabad (Devagiri)** — Yadava capital that Muhammad bin Tughlaq forced all of Delhi to move to in 1327, and back again.', '**Bibi ka Maqbara** (1660s) was built by Aurangzeb’s son Azam Shah for his mother Dilras Banu — a smaller Taj Mahal.'],
    mustSee: ['**Bibi ka Maqbara** — the “poor man’s Taj”', '**Daulatabad fort** — the moat, the dark spiral passage, Chand Minar', '**Panchakki** — 17th-century water mill', '**Aurangabad caves** (Buddhist, 6th–7th c.) above the city', 'The 52 gates (Bhadkal, Delhi, Makai); **Khuldabad** — Aurangzeb’s grave', 'Paithani sari weaving; Himroo showrooms'],
    food: ['**Naan qalia** — the mutton curry of the Mughal camp kitchens', 'Thalis at Bhoj; Marathwada’s spicy dishes; Tara pan'],
    culture: ['Mughal, Maratha and Nizam layers in one city', 'Paithani silk saris with peacock borders — from Paithan, 50 km away'],
    funFacts: ['Aurangabad is called the “City of Gates” — 52 originally, 13 survive.', 'The Ellora–Aurangabad–Ajanta triangle is one of India’s richest heritage circuits.'],
    tips: ['Do Ellora and Daulatabad on one day, Ajanta on another.']
  },
  {
    id: 'shirdi', name: 'Shirdi', kind: 'place', scope: 'domestic', country: 'India', state: 'Maharashtra', parent: 'maharashtra',
    lat: 19.77, lng: 74.48, emoji: '🙏', tagline: 'Sai Baba’s village — “Sabka Malik Ek”',
    glance: { 'District': 'Ahilyanagar (Ahmednagar)', 'Famous for': 'Sai Baba Samadhi Mandir', 'Sai Baba': 'c. 1838 – 15 Oct 1918', 'Daily pilgrims': '~60,000', 'Nearby': 'Shani Shingnapur (70 km), Nashik' },
    history: ['**Sai Baba** arrived in Shirdi as a young fakir around 1858 and lived in the Dwarkamai mosque, tending a sacred fire (dhuni) and healing people; Hindus and Muslims both claimed him.', 'He took Mahasamadhi on **Vijayadashami, 15 October 1918**; the Samadhi Mandir was built in what was to be a Krishna temple.', 'The Shri Saibaba Sansthan Trust now runs one of India’s richest shrines.'],
    mustSee: ['**Samadhi Mandir** — the marble idol and Baba’s tomb; the 4:30 am Kakad aarti', '**Dwarkamai** — the mosque where he lived, with the ever-burning dhuni', '**Chavadi** (his alternate-night sleeping place), **Gurusthan**, Lendi Baug and the neem tree', '**Shani Shingnapur** — the village with no doors', 'Sai Teerth theme park; Khandoba temple'],
    food: ['Free **Prasadalaya** meals (one of the largest in the world); udi (holy ash)', 'Maharashtrian thalis; Sai Baba’s beloved **khichdi** as prasad'],
    culture: ['Baba’s teachings: **Shraddha (faith) and Saburi (patience)**', 'Thursday is Baba’s day — the biggest crowds', 'Ram Navami, Guru Purnima and Vijayadashami are the three big festivals'],
    funFacts: ['The dhuni in Dwarkamai has burnt continuously for over 100 years.', 'Shirdi got its own airport in 2017 to handle pilgrims.'],
    tips: ['Book aarti and darshan slots online; avoid Thursdays and holidays if you want calm.']
  },

  /* ======================= MADHYA PRADESH ======================= */
  {
    id: 'madhyapradesh', name: 'Madhya Pradesh', kind: 'state', scope: 'domestic', country: 'India', state: 'Madhya Pradesh', parent: 'india',
    lat: 22.97, lng: 78.66, emoji: '🐅', tagline: 'The heart of India — tigers, stupas and rock art',
    glance: { 'Capital': 'Bhopal', 'Language': 'Hindi', 'Formed': '1956 (Chhattisgarh split 2000)', 'Tigers': 'Most tigers of any state (~785)', 'UNESCO': 'Khajuraho, Sanchi, Bhimbetka' },
    history: ['Ashoka’s Sanchi, the Guptas, Paramaras of Malwa, Gond kingdoms, Bundelas of Khajuraho, Marathas and the Begums of Bhopal.'],
    food: ['**Poha-jalebi** breakfast, Bhopali gosht korma, dal bafla, Indori namkeen'],
    culture: ['Tribal heartland — Gond, Bhil art; Tansen music festival at Gwalior'],
    funFacts: ['MP has more national parks (11) than any state — Kanha inspired The Jungle Book.']
  },
  {
    id: 'bhopal', name: 'Bhopal', kind: 'place', scope: 'domestic', country: 'India', state: 'Madhya Pradesh', parent: 'madhyapradesh',
    lat: 23.26, lng: 77.41, emoji: '🏞️', tagline: 'City of Lakes and the Begums',
    glance: { 'Famous for': 'Upper & Lower lakes, Taj-ul-Masajid, the Begums, Bharat Bhavan', 'Founded': 'Raja Bhoj (11th c.); modern city by Dost Mohammad Khan (1720s)', 'Ruled by': 'Four women — the Nawab Begums, 1819–1926', 'Lake': 'Upper Lake (Bhojtal) — 31 sq km', 'Nearby': 'Sanchi, Bhimbetka, Bhojpur' },
    history: ['**Raja Bhoj** of the Paramaras built the great lake in the 11th century (Bhojpal → Bhopal).', 'An Afghan soldier, **Dost Mohammad Khan**, founded the state in 1724; from 1819 four **Begums** ruled in succession — pioneering women rulers who built mosques, railways and hospitals.', 'The **1984 gas tragedy** at Union Carbide killed thousands — the world’s worst industrial disaster.'],
    mustSee: ['**Taj-ul-Masajid** — one of Asia’s largest mosques', '**Upper Lake** boat club and the Van Vihar walk', '**Bharat Bhavan** arts centre and the **Tribal Museum** (one of India’s best)', 'Gohar Mahal, Shaukat Mahal, Sadar Manzil in the old city', '**Bhojpur** — the giant unfinished Shiva temple with the 7.5 ft lingam', 'Sanchi and Bhimbetka day trips; Remember Bhopal museum'],
    food: ['**Bhopali gosht korma, rezala, sulaimani chai** in the old city (Chatori Gali)', '**Poha-jalebi** breakfast; Bhopali paan'],
    culture: ['Nawabi tehzeeb — Urdu culture, quilted and zardozi crafts', 'The Begums’ legacy is in every big institution of the old city'],
    funFacts: ['Bhopal is one of India’s greenest capitals — 22% is lake and forest.', 'The Begums of Bhopal ruled for over 100 years — unique in Islamic India.'],
    tips: ['Old city food walk at night; the Tribal Museum needs 2 hours.']
  },
  {
    id: 'bhimbetka', name: 'Bhimbetka', kind: 'place', scope: 'domestic', country: 'India', state: 'Madhya Pradesh', parent: 'madhyapradesh',
    lat: 22.94, lng: 77.61, emoji: '🎨', tagline: 'Where humans painted 30,000 years ago',
    glance: { 'Near': 'Bhopal (45 km)', 'Rock shelters': '750+, 15 open to visitors', 'Age': 'Paintings from ~30,000 years ago to medieval times', 'UNESCO': 'World Heritage 2003', 'Discovered': '1957 by V.S. Wakankar' },
    history: ['The shelters were used from the Palaeolithic; the oldest paintings are Upper Palaeolithic (green and dark red), with hunting scenes, dancers and animals in later layers.', 'Archaeologist **V.S. Wakankar** noticed the rocks from a train window in 1957 and walked in to find one of the world’s largest collections of prehistoric art.', 'The name means “Bhima’s sitting place” — the Pandava is said to have rested here.'],
    mustSee: ['**Zoo Rock** — dozens of animals in one panel', '**Auditorium cave** — the giant shelter; the boar-god painting', 'Handprints, dancing figures, horse-riders from the historical period', 'The Vindhyan sandstone landscape and Ratapani forest around it'],
    food: ['Nothing here — eat in Bhopal or at Obedullaganj on the highway'],
    culture: ['Adivasi villages around still paint similar motifs — a continuous tradition', 'One of the earliest traces of human life on the Indian subcontinent'],
    funFacts: ['Some Bhimbetka paintings are older than the famous Lascaux caves of France.', 'Wakankar was awarded the Padma Shri for the discovery.'],
    tips: ['Morning light is best; a guide will point out paintings you would walk past.']
  },
  {
    id: 'sanchi', name: 'Sanchi', kind: 'place', scope: 'domestic', country: 'India', state: 'Madhya Pradesh', parent: 'madhyapradesh',
    lat: 23.48, lng: 77.74, emoji: '☸️', tagline: 'Ashoka’s Great Stupa on a quiet hill',
    glance: { 'Near': 'Bhopal (46 km)', 'Great Stupa': '3rd century BCE, Emperor Ashoka', 'UNESCO': 'World Heritage 1989', 'Gateways': 'Four toranas, 1st century BCE', 'On the note': 'The ₹200 note shows Sanchi' },
    history: ['**Ashoka** built the original brick stupa over relics of the Buddha; his wife Devi was from nearby Vidisha. The Shunga kings enlarged it in stone and the Satavahanas added the carved gateways.', 'Abandoned after the 13th century; rediscovered in 1818 by General Taylor and restored by Sir John Marshall (1912–19).', 'Relics of the Buddha’s disciples Sariputta and Moggallana were found in Stupa 3 (now in a modern vihara).'],
    mustSee: ['**Great Stupa (No. 1)** and its four **toranas** carved with Jataka tales — note the absence of Buddha in human form', '**Ashoka pillar** with the lion capital (the base remains; the capital is in the museum)', 'Stupa 2 and 3, Temple 17 (Gupta) — one of the earliest structural temples', 'The **archaeological museum**; Udayagiri caves and **Heliodorus pillar** near Vidisha'],
    food: ['Simple Gateway Retreat / MP Tourism canteen'],
    culture: ['A working Buddhist site again — the Chetiyagiri Vihara festival each November', 'The toranas show the Buddha as a wheel, footprints, an empty throne — early aniconic art'],
    funFacts: ['Sanchi has no direct link to the Buddha’s life — it is purely Ashoka’s creation.', 'The stupa’s hemispherical dome is 16 m high and 36 m across.'],
    tips: ['Combine with Udayagiri caves (Varaha panel) and Vidisha — one easy day from Bhopal.']
  },

  /* ======================= RAJASTHAN ======================= */
  {
    id: 'rajasthan', name: 'Rajasthan', kind: 'state', scope: 'domestic', country: 'India', state: 'Rajasthan', parent: 'india',
    lat: 27.02, lng: 74.22, emoji: '🐪', tagline: 'Land of kings — forts, deserts and colour',
    glance: { 'Capital': 'Jaipur', 'Language': 'Hindi, Rajasthani (Marwari)', 'Formed': '1949 from 22 princely states', 'Largest state': 'By area — 342,000 sq km', 'Desert': 'Thar', 'UNESCO': 'Hill Forts of Rajasthan (6), Jantar Mantar, Jaipur city, Keoladeo' },
    history: ['The Rajput clans — Sisodias of Mewar, Kachwahas of Amber, Rathores of Marwar — fought the Delhi Sultans and Mughals; Maharana Pratap and Haldighati (1576) are its legends.'],
    food: ['**Dal baati churma, laal maas, ker sangri, ghewar, pyaaz kachori**'],
    culture: ['Ghoomar dance, puppetry, turbans of a hundred styles; Pushkar camel fair'],
    funFacts: ['Rajasthan has the Thar desert, the Aravallis (older than the Himalayas) and Kumbhalgarh’s 36-km wall.']
  },
  {
    id: 'jaipur', name: 'Jaipur', kind: 'place', scope: 'domestic', country: 'India', state: 'Rajasthan', parent: 'rajasthan',
    lat: 26.91, lng: 75.79, emoji: '🩷', tagline: 'The Pink City — planned by a maharaja astronomer',
    glance: { 'Founded': '1727 by Sawai Jai Singh II', 'Famous for': 'Hawa Mahal, Amber Fort, City Palace, Jantar Mantar', 'UNESCO': 'Jantar Mantar (2010), walled city (2019)', 'Pink since': '1876, for Prince Albert’s visit', 'Part of': 'The Golden Triangle with Delhi and Agra' },
    history: ['**Sawai Jai Singh II** moved his capital from Amber and laid out the grid city on Vastu principles with architect Vidyadhar Bhattacharya — one of India’s first planned cities.', 'The whole city was painted **terracotta pink** (the colour of hospitality) in 1876 for the Prince of Wales; the law still requires it.', 'The Kachwaha rulers were early Mughal allies — Jodha Bai (Jodhaa) came from here.'],
    mustSee: ['**Amber (Amer) Fort** — Sheesh Mahal mirror hall; the elephant ramp', '**Hawa Mahal** — 953 windows for the ladies to watch the street', '**City Palace** and the **Jantar Mantar** — the 27 m sundial accurate to 2 seconds', '**Nahargarh** at sunset; Jaigarh’s Jaivana cannon; Jal Mahal in the lake', '**Johari Bazaar** for jewellery, block prints at Bapu Bazaar; Albert Hall Museum', 'Patrika Gate; Galtaji monkey temple'],
    food: ['**Pyaaz kachori** at Rawat, **laal maas**, dal baati churma at Chokhi Dhani', '**Ghewar** and **LMB’s** sweets in Johari Bazaar; lassi at Lassiwala'],
    culture: ['Gems and jewellery capital — most of the world’s coloured stones are cut here', 'Blue pottery, block printing (Sanganer/Bagru), the Jaipur Literature Festival', 'Elephant Festival, Teej and Gangaur processions'],
    funFacts: ['Jantar Mantar’s Samrat Yantra is the world’s largest sundial.', 'Hawa Mahal has no foundation and no stairs — ramps let the ladies walk up in palanquins.', 'Jaipur was one of the first cities with formal drainage and street width rules (1727).'],
    tips: ['Amber Fort by 8 am beats the heat and the tour buses; skip the elephant ride.', 'A composite ticket covers Amber, Nahargarh, Jantar Mantar, Hawa Mahal and Albert Hall.']
  },
  {
    id: 'udaipur', name: 'Udaipur', kind: 'place', scope: 'domestic', country: 'India', state: 'Rajasthan', parent: 'rajasthan',
    lat: 24.58, lng: 73.71, emoji: '🏰', tagline: 'City of Lakes, the Venice of the East',
    glance: { 'Founded': '1559 by Maharana Udai Singh II', 'Famous for': 'Lake Pichola, City Palace, Lake Palace hotel', 'Lakes': 'Pichola, Fateh Sagar, Udai Sagar, Swaroop Sagar', 'Dynasty': 'Sisodia — Mewar, world’s oldest ruling family', 'Film': 'Octopussy (1983) was shot here' },
    history: ['**Udai Singh II** founded it as Mewar’s new capital after Akbar sacked Chittorgarh; his son **Maharana Pratap** fought Akbar at Haldighati (1576) and never surrendered.', 'The Mewar dynasty never accepted Mughal overlordship fully — a point of Rajput pride; the City Palace grew over 400 years.', 'The **Lake Palace** (Jag Niwas, 1746) became a hotel in 1963 and made Udaipur world-famous.'],
    mustSee: ['**City Palace** — the largest in Rajasthan; the Crystal Gallery', '**Lake Pichola** boat ride at sunset past the Lake Palace and Jag Mandir', '**Jagdish temple**; **Saheliyon ki Bari** fountains', '**Fateh Sagar** and the Monsoon Palace (Sajjangarh) sunset', 'Bagore ki Haveli evening dance show; **Ambrai ghat**', 'Kumbhalgarh, Ranakpur Jain temple (1,444 pillars), Eklingji, Haldighati day trips'],
    food: ['**Dal baati churma** and **gatte ki sabzi**; Ambrai for the lake view', 'Kachoris at Jagdish chowk; **Udaipur’s mawa kachori**'],
    culture: ['Mewar miniature painting; silver jewellery', 'Gangaur and Mewar festivals on the ghats', 'Wedding-destination capital of India'],
    funFacts: ['The Mewar dynasty has ruled since 734 CE — 76 generations.', 'Bond’s Octopussy still plays every night in some rooftop cafés here.'],
    tips: ['Stay on the Pichola side in the old city; rooftop dinners with the palace lit up.', 'Ranakpur + Kumbhalgarh is a long but perfect day trip.']
  },
  {
    id: 'kumbhalgarh', name: 'Kumbhalgarh Fort', kind: 'place', scope: 'domestic', country: 'India', state: 'Rajasthan', parent: 'rajasthan',
    lat: 25.15, lng: 73.58, emoji: '🧱', tagline: 'The Great Wall of India', aka: ['Kumbalgarh'],
    glance: { 'District': 'Rajsamand (85 km from Udaipur)', 'Built': '1443–58 by Rana Kumbha', 'Wall': '36 km long, up to 15 ft thick — 2nd longest in the world', 'UNESCO': 'Hill Forts of Rajasthan (2013)', 'Altitude': '1,100 m in the Aravallis' },
    history: ['Built by **Rana Kumbha** of Mewar with architect Mandan; legend says a human sacrifice was needed for the wall — a pilgrim volunteered, and the main gate marks his head, the temple his body.', '**Maharana Pratap** was born here in 1540; the fort sheltered the Mewar rulers whenever Chittorgarh fell.', 'Taken only once, by Akbar’s combined armies in 1576, and only because the water supply was poisoned.'],
    mustSee: ['**The wall** — walk a stretch; seven gates up to the palace', '**Badal Mahal** (Cloud Palace) at the top — the views over the Aravallis', '360 temples inside, including the **Neelkanth Mahadev**', 'Evening **light-and-sound show**', 'Kumbhalgarh Wildlife Sanctuary — wolves and leopards; Ranakpur Jain temple 35 km away'],
    food: ['Rajasthani thalis at the resorts; Ranakpur temple’s bhojanalaya'],
    culture: ['Kumbhalgarh Festival (Dec) with folk music and dance', 'The birthplace legend of Maharana Pratap is retold at every gate'],
    funFacts: ['The wall is wide enough for eight horses side by side.', 'Kumbhalgarh has more than 360 temples — 300 Jain, the rest Hindu.'],
    tips: ['Hire a guide; the climb to Badal Mahal takes 30–40 minutes.', 'Combine with Ranakpur; both close around sunset.']
  },

  /* ======================= ODISHA ======================= */
  {
    id: 'odisha', name: 'Odisha', kind: 'state', scope: 'domestic', country: 'India', state: 'Odisha', parent: 'india',
    lat: 20.95, lng: 85.10, emoji: '🌞', tagline: 'Temples of Kalinga and the Bay of Bengal',
    glance: { 'Capital': 'Bhubaneswar', 'Language': 'Odia (a classical language)', 'Formed': '1 April 1936 — first linguistic province', 'Districts': '30', 'UNESCO': 'Konark Sun Temple' },
    history: ['Ashoka’s bloody **Kalinga war** (261 BCE) here turned him to Buddhism; the Eastern Gangas built Puri and Konark; Odisha was the first province formed on language (1936).'],
    food: ['**Dalma, pakhala bhata, chhena poda, rasagola** (Odisha’s claim!), Puri’s mahaprasad'],
    culture: ['Odissi dance, Pattachitra painting, the Rath Yatra; sand art at Puri'],
    funFacts: ['Chilika is Asia’s largest brackish lagoon; Odisha claims the rasgulla was invented in Puri.']
  },
  {
    id: 'chilika', name: 'Chilika Lake', kind: 'place', scope: 'domestic', country: 'India', state: 'Odisha', parent: 'odisha',
    lat: 19.72, lng: 85.32, emoji: '🐬', tagline: 'Asia’s largest lagoon — dolphins and a million birds',
    glance: { 'Area': '~1,100 sq km (monsoon)', 'Type': 'Brackish lagoon opening to the Bay of Bengal', 'Famous for': 'Irrawaddy dolphins, migratory birds, Kalijai temple', 'Ramsar site': 'India’s first (1981)', 'Best time': 'Nov–Feb for birds' },
    history: ['Ships from Kalinga sailed to Java and Bali from these shores — the **Bali Jatra** festival in Cuttack remembers it.', 'Named a Ramsar wetland in 1981; restored in 2000 by opening a new sea mouth, which brought the dolphins and fish back.', 'The **Kalijai** island temple’s legend of a bride who drowned on her way to her wedding is sung in Odia folk songs.'],
    mustSee: ['**Irrawaddy dolphin** boat trip from Satapada', '**Nalabana bird sanctuary** — flamingos, pelicans, ducks from Siberia', '**Kalijai** temple island; Rambha and Barkul boat rides to Breakfast Island', 'Sea mouth (Rajhansa) beach; fishing-village life; Mangalajodi wetland for birds'],
    food: ['**Crab and prawn curries** at Satapada and Barkul', 'Odia pakhala and fish fry'],
    culture: ['150,000 fisherfolk depend on the lake', 'Mangalajodi’s poachers-turned-bird-guides are a conservation story'],
    funFacts: ['Chilika hosts the largest congregation of migratory birds in the Indian subcontinent — up to a million.', 'The Irrawaddy dolphin population here is the largest single lagoon population in the world.'],
    tips: ['Boats early morning (6–9 am) for dolphins; Mangalajodi at dawn for birds.']
  },
  {
    id: 'puri', name: 'Puri', kind: 'place', scope: 'domestic', country: 'India', state: 'Odisha', parent: 'odisha',
    lat: 19.81, lng: 85.83, emoji: '🛞', tagline: 'Jagannath’s abode and the Rath Yatra',
    glance: { 'Temple': 'Jagannath, 12th century (Anantavarman Chodaganga)', 'Char Dham': 'One of the four', 'Rath Yatra': 'June/July — three chariots to Gundicha temple', 'Beach': 'Golden Beach (Blue Flag)', 'Kitchen': 'World’s largest — 56 dishes, 100,000 fed daily' },
    history: ['The Jagannath temple (c. 1135) was built by the Eastern Ganga king; the wooden deities of **Jagannath, Balabhadra and Subhadra** are replaced every 12–19 years (Nabakalebara).', 'Guru Nanak, Chaitanya, Kabir and Adi Shankara all came here; the Govardhan Matha is one of Shankara’s four.', 'The English word **“juggernaut”** comes from the huge Rath Yatra chariots.'],
    mustSee: ['**Jagannath temple** — non-Hindus view from the Raghunandan library roof', '**Rath Yatra** — the deities ride 3 km to Gundicha temple; Bahuda return', '**Puri beach** — sunrise, the Sudarsan Pattnaik sand-art', '**Raghurajpur** artists’ village — Pattachitra and Gotipua dance', 'Chandrabhaga beach and Konark (35 km); Chilika’s Satapada (50 km)'],
    food: ['**Mahaprasad** in the Ananda Bazaar — cooked in earthen pots on wood fires', '**Khaja**, chhena poda and Puri’s famous **rasagola**'],
    culture: ['The flag on the temple flies against the wind; the chakra looks the same from every angle', 'Non-Hindus cannot enter — a 900-year-old rule', 'Jagannath’s big round eyes are Odisha’s symbol'],
    funFacts: ['The temple kitchen cooks in pots stacked on top of each other — and the top pot cooks first.', 'No bird or plane flies over the temple, locals say.'],
    tips: ['Rath Yatra crowds exceed a million — book a rooftop spot months ahead.', 'Swargadwar beach is for cremations; Golden Beach is for swimming.']
  },
  {
    id: 'konark', name: 'Konark Sun Temple', kind: 'place', scope: 'domestic', country: 'India', state: 'Odisha', parent: 'odisha',
    lat: 19.89, lng: 86.09, emoji: '☀️', tagline: 'A chariot of the Sun in stone',
    glance: { 'Built': '1250 CE by Narasimhadeva I', 'UNESCO': 'World Heritage 1984', 'Design': 'Surya’s chariot — 24 wheels, 7 horses', 'Known as': 'Black Pagoda (to sailors)', 'Note': 'On the ₹10 note' },
    history: ['Built by **Narasimhadeva I** of the Eastern Gangas, possibly to celebrate a victory over Muslim invaders; 1,200 artisans worked 12 years.', 'The main tower (70 m) collapsed — probably by the 17th century; the British filled the jagamohana with sand in 1903 to save it.', 'Rabindranath Tagore: “Here the language of stone surpasses the language of man.”'],
    mustSee: ['The 12 pairs of **carved wheels** — each is a sundial that tells the time', 'The **erotic and daily-life sculptures**, the musicians on the roof', 'The **Natya Mandapa** (dance hall) and the seven horses', 'Archaeological Museum; **Chandrabhaga beach** sunrise', 'Konark Dance Festival (Dec) with the temple lit behind'],
    food: ['Fresh seafood at Chandrabhaga; Odia thalis'],
    culture: ['The temple is a giant chariot — a masterpiece of Kalinga architecture', 'Magha Saptami sunrise bathing at Chandrabhaga'],
    funFacts: ['The wheels’ spokes tell the time to within a few minutes.', 'Legend says a lodestone at the top pulled ships’ compasses — sailors called it the Black Pagoda.', 'The 12-year-old son of the chief architect is said to have fixed the final capstone.'],
    tips: ['Go at sunrise or late afternoon; the light show at night is worth staying for.']
  },
  {
    id: 'bhubaneswar', name: 'Bhubaneswar', kind: 'place', scope: 'domestic', country: 'India', state: 'Odisha', parent: 'odisha',
    lat: 20.30, lng: 85.82, emoji: '🛕', tagline: 'Temple City of India', aka: ['Bhubhaneshwar'],
    glance: { 'Famous for': 'Lingaraj temple, Mukteshwar, Rajarani, Udayagiri-Khandagiri caves, Dhauli', 'Temples': 'Once 7,000; 500+ survive', 'Planned city': '1948, by Otto Königsberger', 'Meaning': '“Lord of the Universe” (Tribhuvaneswar)', 'Nearby': 'Puri and Konark — the Golden Triangle of Odisha' },
    history: ['**Dhauli** hill is where Ashoka fought the Kalinga war (261 BCE) and renounced violence — his rock edicts are still there.', 'The **Kalinga** temple style peaked here between the 7th and 13th centuries — Lingaraj (11th c.) is its masterpiece.', 'Became Odisha’s capital in 1948 — one of independent India’s first planned cities, like Chandigarh.'],
    mustSee: ['**Lingaraj temple** — 55 m tower (non-Hindus from the viewing platform)', '**Mukteshwar** — the “gem of Odisha architecture”, and **Rajarani** temple', '**Udayagiri & Khandagiri** Jain caves (2nd c. BCE, Kharavela)', '**Dhauli** — Ashoka’s edicts and the Shanti Stupa', 'Odisha State Museum; Nandankanan zoo (white tigers); Ekamra Kanan', 'Tribal Museum; Bindu Sagar tank'],
    food: ['**Dahibara aloodum** on the streets, chhena poda, **Pakhala** meals', 'Dalma with rice; Cuttack’s Thunka puri'],
    culture: ['Ekamra Walks heritage tour every Sunday', 'The Ashoka legend — from conqueror to Buddhist — is Odisha’s founding story'],
    funFacts: ['Bhubaneswar and Chandigarh were both designed by foreign architects in the same era.', 'The Lingaraj deity is worshipped as both Shiva and Vishnu (Harihara).'],
    tips: ['Old Town temples early morning; Dhauli at sunset.']
  },

  /* ======================= UTTAR PRADESH ======================= */
  {
    id: 'uttarpradesh', name: 'Uttar Pradesh', kind: 'state', scope: 'domestic', country: 'India', state: 'Uttar Pradesh', parent: 'india',
    lat: 26.85, lng: 80.95, emoji: '🕌', tagline: 'The Taj, the Ganga and the heartland',
    glance: { 'Capital': 'Lucknow', 'Language': 'Hindi, Urdu, Awadhi, Bhojpuri', 'Population': '~240 million — the most of any state', 'Districts': '75', 'UNESCO': 'Taj Mahal, Agra Fort, Fatehpur Sikri' },
    history: ['Mathura, Ayodhya and Varanasi are here; the Mughal capital of Agra; Awadh’s Nawabs; the 1857 uprising began at Meerut.'],
    food: ['**Awadhi biryani, galouti kebab, Agra petha, Banarasi paan, chaat**'],
    culture: ['Kumbh Mela at Prayagraj — the world’s largest gathering; Kathak dance'],
    funFacts: ['If UP were a country it would be the fifth most populous in the world.']
  },
  {
    id: 'agra', name: 'Agra', kind: 'place', scope: 'domestic', country: 'India', state: 'Uttar Pradesh', parent: 'uttarpradesh',
    lat: 27.18, lng: 78.02, emoji: '🕌', tagline: 'The Taj Mahal — a teardrop on the cheek of time',
    glance: { 'River': 'Yamuna', 'Famous for': 'Taj Mahal, Agra Fort, Fatehpur Sikri, petha', 'Taj built': '1632–53 by Shah Jahan for Mumtaz Mahal', 'UNESCO': 'Three sites', 'Mughal capital': '1526–1658' },
    history: ['Sikandar Lodi founded it in 1504; **Babur, Akbar, Jahangir and Shah Jahan** made Agra the Mughal capital — the fort, Fatehpur Sikri and the Taj all came from this century.', '**Shah Jahan** built the Taj Mahal (1632–53) with 20,000 workers and chief architect Ustad Ahmad Lahauri; he spent his last years imprisoned in Agra Fort by his son Aurangzeb, looking at it from a window.', 'Lord Curzon restored the Taj in the early 1900s; the marble is cleaned with mud packs.'],
    mustSee: ['**Taj Mahal** at sunrise; the view from **Mehtab Bagh** across the river at sunset', '**Agra Fort** — Musamman Burj, Diwan-i-Khas, Shah Jahan’s prison', '**Fatehpur Sikri** — Akbar’s abandoned red-sandstone capital, Buland Darwaza, Salim Chishti’s tomb', '**Itimad-ud-Daulah** — the “Baby Taj”, first all-marble Mughal tomb', 'Akbar’s tomb at Sikandra; Kinari Bazaar; marble inlay workshops'],
    food: ['**Petha** (ash-gourd sweet) and **dalmoth** — Panchhi Petha', 'Mughlai food; **bedai and jalebi** breakfast at Deviram; Pinch of Spice'],
    culture: ['Marble inlay (pietra dura) craft continues from the Taj’s makers’ descendants', 'Taj Mahotsav (Feb) crafts fair', 'The Taj is closed on Fridays for prayers'],
    funFacts: ['The Taj’s minarets lean slightly outward so they would fall away from the tomb in an earthquake.', 'The Taj changes colour — pink at dawn, white at noon, gold under the moon.', 'Calligraphy on the gateway grows larger with height so it appears the same size from below.'],
    tips: ['Enter from the East gate at 6 am; Friday closed; night viewing on full-moon nights (book at ASI).', 'Shoe covers are given — no tripods, no food inside.']
  },

  /* ======================= DELHI ======================= */
  {
    id: 'delhi-nct', name: 'Delhi (NCT)', kind: 'state', scope: 'domestic', country: 'India', state: 'Delhi', parent: 'india',
    lat: 28.61, lng: 77.21, emoji: '🏛️', tagline: 'The capital territory',
    glance: { 'Status': 'National Capital Territory', 'Capital of India since': '1911 (New Delhi inaugurated 1931)', 'Language': 'Hindi, Punjabi, Urdu, English' },
    history: ['Seven (or eight) cities of Delhi from the Tomars to Lutyens.'],
    funFacts: ['Delhi is the world’s second-largest urban area by population.']
  },
  {
    id: 'delhi', name: 'Delhi', kind: 'place', scope: 'domestic', country: 'India', state: 'Delhi', parent: 'delhi-nct',
    lat: 28.61, lng: 77.21, emoji: '🏛️', tagline: 'Seven cities, one capital — Dilli', aka: ['New Delhi', 'Dilli'],
    glance: { 'Famous for': 'Red Fort, Qutub Minar, India Gate, Humayun’s Tomb, chaat', 'UNESCO': 'Qutub Minar, Humayun’s Tomb, Red Fort', 'Population': '~33 million (urban area)', 'Metro': '390+ km — India’s largest', 'Capital': 'New Delhi (since 1931)' },
    history: ['**Indraprastha** of the Mahabharata; the Tomars’ Lal Kot; the **Delhi Sultanate** (1206–1526) built Qutub Minar and Tughlaqabad; the Mughals built Shahjahanabad (Old Delhi) in 1648.', 'The British moved the capital from Calcutta in 1911; **Lutyens** and Baker designed New Delhi (Rashtrapati Bhavan, India Gate).', 'Independence was declared from the Red Fort on 15 August 1947 — every PM speaks from its ramparts since.'],
    mustSee: ['**Red Fort** and **Jama Masjid**, then a rickshaw through **Chandni Chowk**', '**Qutub Minar** (73 m, 1193) and the rustless Iron Pillar', '**Humayun’s Tomb** — the model for the Taj; **Lodhi Gardens**', '**India Gate, Rajpath/Kartavya Path, Rashtrapati Bhavan**', '**Lotus Temple**, Akshardham, Gurudwara Bangla Sahib’s langar', 'Hauz Khas village; Raj Ghat; National Museum; Dilli Haat'],
    food: ['**Chandni Chowk**: Paranthe Wali Gali, Karim’s, jalebi at Old Famous, Natraj dahi bhalla', '**Chaat** — golgappe, aloo tikki; **butter chicken** at Moti Mahal (it was invented in Delhi)', 'Momos, chhole bhature (Sita Ram), Daulat ki chaat in winter'],
    culture: ['Republic Day parade (26 Jan) on Kartavya Path', 'Sufi qawwali at Nizamuddin dargah on Thursdays', 'Punjabi, Mughal and bureaucrat Delhi — three cities in one'],
    funFacts: ['The Iron Pillar at Qutub has not rusted in 1,600 years.', 'Delhi has 1,300+ heritage monuments — more than any city in India.', 'Butter chicken and dal makhani were invented at Moti Mahal in the 1950s.'],
    tips: ['Use the metro — traffic is brutal; Old Delhi by e-rickshaw.', 'Nov–Feb is pleasant but smoggy; April–June is 45°C.']
  },

  /* ======================= UTTARAKHAND ======================= */
  {
    id: 'uttarakhand', name: 'Uttarakhand', kind: 'state', scope: 'domestic', country: 'India', state: 'Uttarakhand', parent: 'india',
    lat: 30.07, lng: 79.09, emoji: '🏔️', tagline: 'Devbhoomi — land of the gods',
    glance: { 'Capital': 'Dehradun (winter), Gairsain (summer)', 'Formed': '9 Nov 2000 from UP', 'Language': 'Hindi, Garhwali, Kumaoni', 'Peaks': 'Nanda Devi 7,816 m', 'Rivers': 'Ganga and Yamuna are born here' },
    history: ['The Char Dham (Badrinath, Kedarnath, Gangotri, Yamunotri) have drawn pilgrims for millennia; the Chipko movement (1973) began here.'],
    food: ['**Kafuli, bhang ki chutney, bal mithai, aloo ke gutke**'],
    culture: ['Kumbh at Haridwar; Nanda Devi Raj Jat yatra every 12 years'],
    funFacts: ['Jim Corbett National Park (1936) is India’s oldest.']
  },
  {
    id: 'rishikesh', name: 'Rishikesh', kind: 'place', scope: 'domestic', country: 'India', state: 'Uttarakhand', parent: 'uttarakhand',
    lat: 30.09, lng: 78.27, emoji: '🧘', tagline: 'Yoga capital of the world, where the Ganga leaves the mountains',
    glance: { 'River': 'Ganga', 'Famous for': 'Yoga ashrams, Laxman Jhula, Ganga aarti, rafting, the Beatles Ashram', 'Altitude': '340 m', 'Gateway to': 'Char Dham', 'Note': 'Vegetarian and alcohol-free town' },
    history: ['Sages meditated here for millennia; **Raibhya Rishi** did penance and Vishnu appeared as “Hrishikesh” — lord of the senses.', 'The **Beatles** stayed at Maharishi Mahesh Yogi’s ashram in 1968 and wrote most of the White Album — the ashram is now an open ruin with graffiti art.', 'Rafting on the Ganga started in the 1980s and made it India’s adventure capital.'],
    mustSee: ['**Laxman Jhula & Ram Jhula** suspension bridges (Laxman Jhula now closed to walkers, a new glass bridge is coming)', '**Triveni Ghat** Ganga aarti at sunset; **Parmarth Niketan** aarti', '**Beatles Ashram** (Chaurasi Kutia)', '**Rafting** from Shivpuri — Grade III rapids; bungee at Mohan Chatti', 'Neelkanth Mahadev temple; **Vashishta cave**; Kunjapuri sunrise', 'Haridwar’s Har ki Pauri aarti (25 km)'],
    food: ['**Chotiwala** thalis since 1958; Little Buddha Café; Bistro Nirvana', 'Aloo puri at the ghats; no meat, no alcohol anywhere'],
    culture: ['International Yoga Festival every March at Parmarth Niketan', 'Sadhus, backpackers and rafters share the same ghats', 'Ganga is a goddess — the aarti is a daily thanksgiving'],
    funFacts: ['Rishikesh is officially vegetarian — meat and alcohol are banned by law.', 'The Beatles wrote 48 songs in Rishikesh in 7 weeks.'],
    tips: ['Stay in Tapovan/Laxman Jhula for cafés and yoga; rafting is best Sept–June.', 'Reach Triveni Ghat by 6 pm for a seat at the aarti.']
  },
  {
    id: 'mussoorie', name: 'Mussoorie', kind: 'place', scope: 'domestic', country: 'India', state: 'Uttarakhand', parent: 'uttarakhand',
    lat: 30.46, lng: 78.07, emoji: '🌥️', tagline: 'Queen of the Hills, home of Ruskin Bond', aka: ['Moosoorie', 'Mussourie'],
    glance: { 'Altitude': '2,005 m', 'From Dehradun': '35 km', 'Famous for': 'Mall Road, Kempty Falls, Gun Hill, Lal Tibba, Landour', 'Name from': '“Mansur” shrub', 'Best time': 'Mar–Jun, Sept–Nov; snow Dec–Jan' },
    history: ['Founded in **1823** by Captain Young and Mr Shore, who built a shooting lodge; the British hill station grew with churches, schools and the Savoy hotel (1902).', 'The **Great Trigonometrical Survey** worked from here — Sir George Everest’s house is at Park Estate.', 'The Dalai Lama first settled in Mussoorie in 1959 before Dharamshala; author **Ruskin Bond** has lived in Landour since 1963.'],
    mustSee: ['**Mall Road** stroll and the **Gun Hill** ropeway', '**Landour** — Lal Tibba (highest point), Char Dukan, the Landour Bakehouse, Sisters’ Bazaar', '**Kempty Falls**; **Company Garden**; Camel’s Back road walk', '**George Everest’s House** for Doon valley and Himalaya views', 'Mussoorie Lake; Jharipani, Bhatta falls; Cambridge Book Depot (Ruskin Bond signs on Saturdays)', 'Dhanaulti and Surkanda Devi (2 hours)'],
    food: ['**Landour Bakehouse** and Char Dukan’s pancakes and bun-omelette', 'Lovely Omelette Centre on Mall Road; Kalsang for momos; Prakash’s peanut butter (Landour)'],
    culture: ['Boarding-school town — Woodstock, Wynberg-Allen, Oak Grove', 'Ruskin Bond, Bill Aitken, Tom Alter — the Landour writers', 'Winterline — a rare atmospheric phenomenon seen at sunset in winter'],
    funFacts: ['Mussoorie’s Savoy hotel inspired Agatha Christie’s first novel (The Mysterious Affair at Styles).', 'The “winterline” glow at dusk is seen only here and in Switzerland.'],
    tips: ['Landour beats the crowded Mall; walk the Upper Chakkar loop.', 'Ruskin Bond meets readers at Cambridge Book Depot on Saturday afternoons.']
  },
  {
    id: 'dehradun', name: 'Dehradun', kind: 'place', scope: 'domestic', country: 'India', state: 'Uttarakhand', parent: 'uttarakhand',
    lat: 30.32, lng: 78.03, emoji: '🎒', tagline: 'Doon valley — schools, litchis and the Forest Research Institute',
    glance: { 'Status': 'Capital of Uttarakhand', 'Valley': 'Doon, between the Shivaliks and the Himalayas', 'Famous for': 'FRI, IMA, Doon School, Robber’s Cave, Sahastradhara', 'Rivers': 'Ganga (east) and Yamuna (west) bound the valley', 'Name from': 'Guru Ram Rai’s “dera” (camp)' },
    history: ['Guru **Ram Rai**, eldest son of the 7th Sikh Guru, set up camp here in 1676 — the Jhanda Mela still celebrates it.', 'The British made it the base of the **Survey of India** (1823), the **Forest Research Institute** (1906) and the **Indian Military Academy** (1932).', 'Became Uttarakhand’s capital in 2000.'],
    mustSee: ['**Forest Research Institute** — the vast colonial building (Bollywood’s favourite) and museums', '**Robber’s Cave (Guchhupani)** — wade through the stream in the gorge', '**Sahastradhara** sulphur springs; **Tapkeshwar** cave temple', 'Mindrolling Monastery — the Great Stupa in Clement Town', 'Paltan Bazaar; the **Doon School** and IMA gates; Malsi deer park', 'Rajaji National Park (elephants) 20 km away'],
    food: ['**Doon litchis** and basmati; **bal mithai** and **singori** from Kumaon shops', 'Ellora’s bakery rusks; Kumar sweets; Tibetan food in Clement Town'],
    culture: ['Boarding-school and army town — cadets, retired colonels, litchi orchards', 'Tibetan community at Clement Town'],
    funFacts: ['FRI’s main building is one of the largest brick structures in the world.', 'The Survey of India in Dehradun still prints the country’s official maps.'],
    tips: ['Dehradun is the base for Mussoorie and Rishikesh — see it in half a day.']
  },

  /* ======================= HIMACHAL PRADESH ======================= */
  {
    id: 'himachal', name: 'Himachal Pradesh', kind: 'state', scope: 'domestic', country: 'India', state: 'Himachal Pradesh', parent: 'india',
    lat: 31.10, lng: 77.17, emoji: '🍎', tagline: 'Apples, cedars and the high Himalaya',
    glance: { 'Capital': 'Shimla (winter capital Dharamshala)', 'Formed': 'Full state 1971', 'Language': 'Hindi, Pahari', 'Apples': '~25% of India’s apples', 'UNESCO': 'Kalka–Shimla railway, Great Himalayan National Park' },
    history: ['Hill principalities, the Gurkha wars (1815), Shimla as summer capital of British India; the Dalai Lama at Dharamshala since 1960.'],
    food: ['**Siddu, madra, dham (temple feast), babru, tudkiya bhath**'],
    culture: ['Kullu Dussehra; Kinnauri caps; wooden temples of Kullu'],
    funFacts: ['Himachal was the first state to ban plastic bags (2009).']
  },
  {
    id: 'shimla', name: 'Shimla', kind: 'place', scope: 'domestic', country: 'India', state: 'Himachal Pradesh', parent: 'himachal',
    lat: 31.10, lng: 77.17, emoji: '🚞', tagline: 'Summer capital of the Raj on a cedar ridge',
    glance: { 'Altitude': '2,200 m', 'Famous for': 'The Ridge, Mall Road, Christ Church, Viceregal Lodge, toy train', 'UNESCO': 'Kalka–Shimla railway (2008)', 'Named after': 'Goddess Shyamala (Kali)', 'Best time': 'Mar–Jun, Dec–Feb for snow' },
    history: ['A village until the British built the first house in 1822; from **1864** the **summer capital of British India** — the whole government moved up every year.', 'The **Viceregal Lodge** (1888) hosted the 1945 Shimla Conference; the **Shimla Agreement** between Indira Gandhi and Bhutto was signed in 1972.', 'The **Kalka–Shimla railway** (1903) passes through 102 tunnels and 800+ bridges.'],
    mustSee: ['**The Ridge** and **Christ Church** (1857) — the second-oldest in North India', '**Mall Road** and Scandal Point; **Lakkar Bazaar** for wooden toys', '**Viceregal Lodge (Rashtrapati Niwas)** — the Scottish-baronial pile, now IIAS', '**Jakhu temple** — the 33 m Hanuman statue and the monkeys', '**Toy train** from Kalka (5 hours) or at least Shimla–Shoghi', 'Kufri and Chail (cricket ground at 2,444 m) day trips; Annandale; Gaiety Theatre'],
    food: ['**Siddu** with ghee, madra, Himachali dham', 'Indian Coffee House on the Mall; Wake & Bake; Trishool bakers'],
    culture: ['Colonial ghost stories, the Gaiety Theatre’s amateur dramatics since 1887', 'Monkeys are the real rulers of Jakhu', 'Ice-skating rink (1920) — the oldest natural-ice rink in South Asia'],
    funFacts: ['Shimla was the capital of India for half the year for 75 years.', 'Cars are banned on the Mall Road — the only vehicles are the police and the ambulance.', 'The Kalka–Shimla railway’s Barog tunnel is 1.1 km long and said to be haunted by its engineer.'],
    tips: ['Park at the lift and walk; the town is vertical. Take the toy train at least one way.', 'Hold your glasses and phones tight at Jakhu — the monkeys snatch.']
  },
  {
    id: 'kufri', name: 'Kufri', kind: 'place', scope: 'domestic', country: 'India', state: 'Himachal Pradesh', parent: 'himachal',
    lat: 31.10, lng: 77.27, emoji: '⛷️', tagline: 'Shimla’s snow and yak-ride hill',
    glance: { 'Altitude': '2,720 m', 'From Shimla': '16 km', 'Famous for': 'Snow (Dec–Feb), Mahasu peak, yak and horse rides, Himalayan Nature Park', 'Meaning': '“Kufr” — lake', 'Best for': 'A half-day from Shimla' },
    history: ['Part of the Nepal-ruled hills until the British took them after the 1815 Gurkha war; developed as a ski slope for Shimla’s officers in the early 1900s.', 'The Himalayan Nature Park (1992) breeds the endangered Himalayan monal, Himachal’s state bird.'],
    mustSee: ['**Mahasu peak** — horse or yak ride up for the Badrinath–Kedarnath range view', '**Himalayan Nature Park** — snow leopard, brown bear, monal', 'Kufri Fun World and the go-karts; **Fagu** viewpoint 6 km on', 'Snow play in winter; apple orchards in autumn; Chail on the same road'],
    food: ['Maggi and chai stalls; siddu on the road; Kufri’s roadside dhabas'],
    culture: ['A snow-tourism village — pony-men, yak owners and ski hire'],
    funFacts: ['Kufri was Shimla’s original ski slope before Narkanda took over.', 'The Himalayan monal, India’s most colourful pheasant, breeds here.'],
    tips: ['Mahasu peak path gets very muddy — wear boots; bargain the horse rate.']
  },
  {
    id: 'manali', name: 'Manali', kind: 'place', scope: 'domestic', country: 'India', state: 'Himachal Pradesh', parent: 'himachal',
    lat: 32.24, lng: 77.19, emoji: '🏔️', tagline: 'Valley of the Gods — Rohtang, Solang and Old Manali',
    glance: { 'Altitude': '2,050 m', 'Valley': 'Kullu, on the Beas river', 'Famous for': 'Rohtang Pass, Solang valley, Hadimba temple, Atal Tunnel', 'Named after': 'Manu, the lawgiver — “Manu-alaya”', 'Gateway to': 'Lahaul, Spiti and Leh' },
    history: ['Named for the sage **Manu** who, legend says, stepped off his ark here after the great flood — the Manu temple is in Old Manali.', '**Hadimba Devi temple** (1553) honours Bhima’s wife, the rakshasi of the Mahabharata, in a pagoda of cedar wood.', 'Hippie trail stop in the 1970s; the **Atal Tunnel** (2020, 9 km) opened Lahaul year-round.'],
    mustSee: ['**Rohtang Pass** (3,978 m) — snow even in June; permits needed', '**Solang valley** — paragliding, zorbing, ropeway; skiing in winter', '**Hadimba temple** in the deodar forest; Manu temple in Old Manali', '**Atal Tunnel** and Sissu in Lahaul on the other side', '**Vashisht** hot springs; Jogini falls; Old Manali cafés', 'Naggar castle and Roerich gallery; Kullu rafting; Manikaran (Parvati valley)'],
    food: ['**Siddu**, trout from the Beas, **Tibetan thukpa and momos**', 'Old Manali’s Café 1947, Johnson’s Café; apple pie and Kullu apples'],
    culture: ['Kullu shawls and caps; the Kullu Dussehra brings 200 village gods to Dhalpur', 'Honeymoon capital of India; a base for trekkers to Hampta and Beas Kund'],
    funFacts: ['Rohtang means “pile of corpses” — the pass was deadly for traders in storms.', 'The Atal Tunnel is the world’s longest highway tunnel above 3,000 m.'],
    tips: ['Rohtang needs an online permit; only a limited number of cars daily.', 'Old Manali and Vashisht are quieter than the Mall; Sept–Oct has the best skies.']
  },

  /* ======================= CHANDIGARH ======================= */
  {
    id: 'chandigarh-ut', name: 'Chandigarh (UT)', kind: 'state', scope: 'domestic', country: 'India', state: 'Chandigarh (UT)', parent: 'india',
    lat: 30.73, lng: 76.78, emoji: '📐', tagline: 'Le Corbusier’s planned city',
    glance: { 'Status': 'Union Territory; capital of both Punjab and Haryana', 'Designed by': 'Le Corbusier, 1950s', 'UNESCO': 'Capitol Complex (2016)' },
    history: ['Built after Partition to replace Lahore as Punjab’s capital.'],
    funFacts: ['Chandigarh has one of the highest per-capita incomes in India.']
  },
  {
    id: 'chandigarh', name: 'Chandigarh', kind: 'place', scope: 'domestic', country: 'India', state: 'Chandigarh (UT)', parent: 'chandigarh-ut',
    lat: 30.73, lng: 76.78, emoji: '🌹', tagline: 'The City Beautiful — sectors, roundabouts and the Rock Garden',
    glance: { 'Designed by': 'Le Corbusier (with Pierre Jeanneret, Maxwell Fry, Jane Drew), 1951–', 'Famous for': 'Rock Garden, Sukhna Lake, Rose Garden, Capitol Complex', 'UNESCO': 'Capitol Complex (2016)', 'Named after': 'Chandi Mandir temple', 'Sectors': '60+, each a self-contained neighbourhood' },
    history: ['After Partition left Lahore in Pakistan, Nehru commissioned a new capital — “unfettered by the traditions of the past”; **Le Corbusier** designed it as a body: the Capitol as head, the city centre as heart, gardens as lungs.', '**Nek Chand**, a roads inspector, secretly built the **Rock Garden** from waste for 18 years before it was discovered in 1975 — and then celebrated.', 'Now a UT serving as capital of both Punjab and Haryana.'],
    mustSee: ['**Rock Garden** — 40 acres of sculptures from broken bangles, tiles and plugs', '**Sukhna Lake** — walk, boat, sunrise', '**Capitol Complex** — Assembly, High Court, Secretariat and the **Open Hand** monument (guided tours)', '**Rose Garden** (Zakir Hussain) — Asia’s largest, 1,600 varieties', 'Sector 17 plaza; Le Corbusier Centre; Government Museum (Gandhara sculptures)', 'Pinjore (Yadavindra) gardens; Chandi Mandir; Morni hills'],
    food: ['**Chhole bhature** and **amritsari kulcha** at Sector 8/9; Pal Dhaba; Sindhi Sweets', 'Gopal’s, Indian Coffee House; Punjabi lassi'],
    culture: ['Roundabouts, no honking zones and tree-lined avenues — a different India', 'The Open Hand: “open to give, open to receive”', 'Rose Festival in February'],
    funFacts: ['Chandigarh was the first planned city of independent India.', 'Nek Chand’s Rock Garden receives 5,000 visitors a day and is made entirely of waste.', 'Chandigarh’s sectors are numbered but there is no Sector 13 — superstition.'],
    tips: ['Capitol Complex visits need a guided tour (free, ID required, three slots a day).', 'The city is best by cycle — dedicated lanes everywhere.']
  }
);
