/* places-kerala-ap-ts.js — Kerala, Andhra Pradesh and Telangana hubs + places */
TRIPS.places.push(
  /* ======================= KERALA ======================= */
  {
    id: 'kerala', name: 'Kerala', kind: 'state', scope: 'domestic', country: 'India', state: 'Kerala', parent: 'india',
    lat: 10.85, lng: 76.27, emoji: '🌴', tagline: 'God’s Own Country — backwaters, hills and spice',
    glance: { 'Capital': 'Thiruvananthapuram', 'Language': 'Malayalam', 'Formed': '1 Nov 1956', 'Literacy': 'Highest in India (~96%)', 'Coastline': '590 km', 'Backwaters': '900 km of canals and lakes' },
    history: ['Spice trade with Rome, Arabia and China for 3,000 years; **Vasco da Gama** landed at Kappad near Kozhikode in 1498.', 'The **Chera** kingdom, then Zamorins of Calicut, Travancore and Cochin princely states; Portuguese, Dutch and British forts along the coast.', 'In 1957 Kerala elected the world’s first democratically-elected Communist government.'],
    food: ['**Sadya** on banana leaf (Onam), **appam with stew**, puttu-kadala, Malabar parotta, **karimeen pollichathu**', 'Coconut in everything; toddy shops with fish curry'],
    culture: ['**Kathakali, Theyyam, Mohiniyattam**, Kalaripayattu martial art', '**Onam** (Aug/Sept) with pookalam flower carpets and snake-boat races', 'Ancient Jewish, Syrian Christian and Muslim communities — Cheraman mosque (629 CE) is among the oldest'],
    funFacts: ['Kerala’s name likely comes from “kera” — coconut.', 'Ayurveda tourism, houseboats and a matrilineal past make it unique.', 'Highest Human Development Index of any Indian state.']
  },
  {
    id: 'kochi', name: 'Kochi (Cochin)', kind: 'place', scope: 'domestic', country: 'India', state: 'Kerala', parent: 'kerala',
    lat: 9.93, lng: 76.27, emoji: '🎣', tagline: 'Queen of the Arabian Sea — spice port of five empires', aka: ['Cochin', 'Ernakulam', 'Fort Kochi'],
    glance: { 'District': 'Ernakulam', 'Famous for': 'Fort Kochi, Chinese fishing nets, Jew Town, Kochi-Muziris Biennale', 'Port': 'Natural harbour formed in 1341 flood', 'Metro': 'Kerala’s only metro (2017)', 'Best time': 'Oct–Mar' },
    history: ['A 1341 flood silted the ancient port of **Muziris** and opened Kochi’s harbour; the Portuguese built **Fort Manuel** in 1503 — the first European fort in India.', 'Dutch (1663) then British (1795) rule; the **Mattancherry palace** was a Portuguese gift to the Raja, redone by the Dutch.', 'Cochin Jews arrived possibly 2,000 years ago; the Paradesi synagogue dates from 1568.'],
    mustSee: ['**Chinese fishing nets** at Fort Kochi beach, sunset', '**St Francis Church** — Vasco da Gama was buried here (1524)', '**Mattancherry Palace** murals and **Jew Town** — Paradesi Synagogue, spice warehouses', '**Santa Cruz Basilica**; Kathakali at the Cochin Cultural Centre', 'Marine Drive; **Cherai beach**; **Kochi-Muziris Biennale** (Dec–Mar, even years)', 'Hill Palace museum, Tripunithura'],
    food: ['**Karimeen pollichathu**, prawn mango curry, appam-stew', 'Kayees biryani; Kashi Art Café; fish from the nets cooked at the stalls', 'Pazhampori and chai at a thattukada'],
    culture: ['Kochi’s Christmas and New Year “Cochin Carnival” with the Papanji burning', 'A cosmopolitan port for 700 years — Portuguese, Dutch, Jewish, Konkani, Gujarati quarters', 'Kerala’s commercial capital'],
    funFacts: ['The Chinese fishing nets (cheena vala) came via Kublai Khan’s traders in the 14th century.', 'Kochi hosted India’s first international art biennale.'],
    tips: ['Stay in Fort Kochi, not Ernakulam, for the atmosphere; ferries link the two.', 'Sunset Kathakali shows start with the make-up demo at 5 pm — arrive early.']
  },
  {
    id: 'alleppey', name: 'Alappuzha (Alleppey)', kind: 'place', scope: 'domestic', country: 'India', state: 'Kerala', parent: 'kerala',
    lat: 9.49, lng: 76.33, emoji: '🛶', tagline: 'Venice of the East — houseboats on the backwaters', aka: ['Alleppey', 'Allepey', 'Alappuzha'],
    glance: { 'Famous for': 'Houseboats, Vembanad lake, Nehru Trophy snake-boat race', 'Lake': 'Vembanad — India’s longest', 'Kuttanad': 'Rice farming below sea level', 'Best time': 'Nov–Feb', 'Snake boat race': '2nd Saturday of August' },
    history: ['Built as a planned port by **Raja Kesavadas**, Diwan of Travancore, in 1762, with canals for coir and spice; Lord Curzon called it the Venice of the East.', 'The **Nehru Trophy** began in 1952 when Nehru jumped into a chundan vallam (snake boat) after a race.', 'Kuttanad’s below-sea-level paddy farming (“rice bowl of Kerala”) is a UN-recognised heritage farming system.'],
    mustSee: ['**Houseboat** overnight on the backwaters — Kuttanad, Kumarakom', '**Alappuzha beach** and the 1862 pier; the lighthouse', '**Nehru Trophy Boat Race** — 100-oar snake boats', 'Shikara canoe rides through the narrow village canals', 'Marari beach; **Ambalapuzha** Krishna temple (palpayasam)', 'Coir factory visit; Pathiramanal island'],
    food: ['**Karimeen** (pearl spot) and **kappa-meen** (tapioca and fish curry)', 'Toddy-shop food; Ambalapuzha palpayasam; **kallappam**'],
    culture: ['Coir capital of India — coconut fibre mats and ropes', 'Village life along the canals — schools, churches, shops by boat', 'Vallam kali (boat races) all monsoon season'],
    funFacts: ['Kuttanad is one of the few places in the world where farming is done 1–3 m below sea level.', 'A chundan vallam is over 30 m long and carries 100+ rowers.'],
    tips: ['Boats leave at noon and return at 9 am; choose a smaller boat and quieter route (Kainakary).', 'Monsoon is beautiful and cheap, but boats may stay docked in storms.']
  },
  {
    id: 'munnar', name: 'Munnar', kind: 'place', scope: 'domestic', country: 'India', state: 'Kerala', parent: 'kerala',
    lat: 10.09, lng: 77.06, emoji: '🍃', tagline: 'Tea gardens rolling to the sky',
    glance: { 'District': 'Idukki', 'Altitude': '1,600 m', 'Meaning': '“Three rivers” — Muthirapuzha, Nallathanni, Kundala', 'Famous for': 'Tea, Eravikulam NP, Anamudi, Neelakurinji', 'Anamudi': '2,695 m — highest peak south of the Himalayas' },
    history: ['Tea planted from the 1880s by the **Kannan Devan Hills** company; Tata Tea, then the worker-owned KDHP (2005) run the estates.', 'Summer resort of the Madras government; the 1924 great flood wiped out the mono-rail and ropeway.', 'The Muthuvan tribe lived here long before tea.'],
    mustSee: ['**Tea Museum** (KDHP) and estate walks; **Kolukkumalai** — the world’s highest tea estate (2,170 m)', '**Eravikulam National Park** — Nilgiri tahr, and Neelakurinji blooms (2018, next 2030)', '**Top Station** viewpoint, **Mattupetty dam** and Echo Point', '**Anamudi** view; **Chinnar** and Marayoor sandalwood forest', 'Attukad and Lakkam waterfalls; Pothamedu viewpoint'],
    food: ['Kerala tea and homemade chocolate; **Kanthari chilli** dishes', 'Idiyappam with egg curry at the estate canteens'],
    culture: ['Tamil tea-plantation workers — a bilingual town', 'Christmas in the hills; Tata’s planter-club era'],
    funFacts: ['Eravikulam has nearly half the world’s Nilgiri tahr.', 'The Neelakurinji turns whole hillsides blue once in 12 years.'],
    tips: ['Eravikulam closes Feb–Mar for the tahr calving season.', 'Go before 9 am to Top Station for mist-free views.']
  },
  {
    id: 'wayanad', name: 'Wayanad', kind: 'place', scope: 'domestic', country: 'India', state: 'Kerala', parent: 'kerala',
    lat: 11.61, lng: 76.08, emoji: '🌲', tagline: 'Green plateau of spice, caves and tribal heritage',
    glance: { 'District HQ': 'Kalpetta', 'Altitude': '700–2,100 m', 'Famous for': 'Edakkal caves, Chembra peak, Banasura Sagar, Pookode lake', 'Tribes': 'Paniya, Kurichiya, Adiya — highest tribal population in Kerala', 'Best time': 'Oct–May' },
    history: ['The **Edakkal cave** petroglyphs date to 6000 BCE — some of the oldest in South India.', '**Pazhassi Raja**, the “Lion of Kerala”, fought guerrilla wars against the British from these forests (1793–1805).', 'Coffee, tea and spice estates opened after the British built the Thamarassery ghat road.'],
    mustSee: ['**Edakkal caves** — climb to see 8,000-year-old carvings', '**Chembra peak** trek and the heart-shaped lake', '**Banasura Sagar dam** — India’s largest earthen dam, boating', '**Pookode lake**, **Soochipara** and Meenmutty falls', 'Thirunelli temple; **Muthanga / Tholpetty** wildlife sanctuaries (elephants)', 'Kuruva island; Wayanad Heritage Museum'],
    food: ['Bamboo rice payasam, **Wayanad pepper**, tribal-style meals', 'Kalpetta’s Malabar biryani and pathiri'],
    culture: ['Tribal crafts and the Kurichiya archery tradition', 'The 2024 Mundakkai-Chooralmala landslide reminded everyone how fragile these hills are'],
    funFacts: ['Wayanad grows most of Kerala’s coffee and is famous for Robusta.', 'Its name may mean “vayal nadu” — land of paddy fields.'],
    tips: ['The Thamarassery churam has 9 hairpins and traffic — start early from Kozhikode.', 'Edakkal caves close at 4 pm and on Mondays.']
  },

  /* ======================= ANDHRA PRADESH ======================= */
  {
    id: 'andhrapradesh', name: 'Andhra Pradesh', kind: 'state', scope: 'domestic', country: 'India', state: 'Andhra Pradesh', parent: 'india',
    lat: 15.91, lng: 79.74, emoji: '🌶️', tagline: 'Temples, spice and the longest coastline of the east',
    glance: { 'Capital': 'Amaravati (Visakhapatnam and Kurnool also proposed)', 'Language': 'Telugu', 'Formed': '1953 (first state formed on language), bifurcated 2014', 'Districts': '26', 'Coastline': '974 km' },
    history: ['Satavahanas, Ikshvakus (Nagarjunakonda), Kakatiyas and Vijayanagara; the Qutb Shahis and Nizams ruled the north.', 'Potti Sriramulu’s 1952 fast led to the first linguistic state; Telangana separated in 2014.'],
    food: ['**Gongura pachadi, Andhra meals with fiery pickles**, pulihora, Tirupati laddu', 'Guntur chilli — the hottest in India'],
    culture: ['Kuchipudi dance; Telugu cinema; Ugadi with the six-taste pachadi'],
    funFacts: ['Tirumala is the most-visited place of worship in the world.']
  },
  {
    id: 'lepakshi', name: 'Lepakshi', kind: 'place', scope: 'domestic', country: 'India', state: 'Andhra Pradesh', parent: 'andhrapradesh',
    lat: 13.81, lng: 77.61, emoji: '🐂', tagline: 'The hanging pillar and the giant Nandi',
    glance: { 'District': 'Sri Sathya Sai (Anantapur), 120 km from Bengaluru', 'Temple': 'Veerabhadra, 1530s', 'Built by': 'Virupanna, Vijayanagara treasurer', 'Famous for': 'Hanging pillar, monolithic Nandi, Vijayanagara murals', 'Meaning': '“Le pakshi” — “Rise, bird” (Rama to Jatayu)' },
    history: ['Rama is said to have found the wounded eagle **Jatayu** here and said “Le, pakshi” — rise, bird; a Jatayu statue marks the spot.', 'Built around **1530** by brothers Virupanna and Viranna under Achyutadevaraya; legend says Virupanna blinded himself when accused of misusing treasury funds — the two red marks on the wall are his eyes.', 'The unfinished **Kalyana Mandapa** was abandoned mid-construction.'],
    mustSee: ['**Hanging pillar** — one of 70, not touching the floor; slide a cloth beneath', '**Monolithic Nandi** (4.5 m × 8 m) — one of the largest in India', '**Ceiling murals** of Vijayanagara, including the 7 × 4 m Veerabhadra', '**Naga-lingam** — seven-hooded cobra carved from one boulder', 'The giant footprint (Sita’s / Hanuman’s); the unfinished wedding hall'],
    food: ['Andhra meals in Hindupur; roadside Bengaluru–Hyderabad highway dhabas'],
    culture: ['Lepakshi handicrafts brand (AP) takes its name from here', 'Lepakshi sari border design is a classic motif'],
    funFacts: ['A British engineer tried to find the pillar’s secret and dislodged it slightly — it now touches at one corner.', 'It is one of the finest surviving examples of Vijayanagara mural painting.'],
    tips: ['Half-day trip from Bengaluru; combine with Nandi Hills or Puttaparthi.']
  },
  {
    id: 'anantapur', name: 'Anantapur', kind: 'place', scope: 'domestic', country: 'India', state: 'Andhra Pradesh', parent: 'andhrapradesh',
    lat: 14.68, lng: 77.60, emoji: '🌵', tagline: 'Rayalaseema’s dry heartland — Puttaparthi, Penukonda and the big banyan', aka: ['Anantpur', 'Ananthapuramu'],
    glance: { 'Region': 'Rayalaseema', 'Famous for': 'Puttaparthi (Sai Baba), Penukonda fort, Gooty fort, Thimmamma Marrimanu banyan', 'Rainfall': 'Second-driest district in India', 'Language': 'Telugu', 'Also': 'ISRO’s Sriharikota is not here — that is Nellore!' },
    history: ['Named after a tank “Anantasagaram” built by Vijayanagara minister Chikkavodeya in the 1360s; the Vijayanagara capital moved to **Penukonda** after Hampi fell (1565).', '**Gooty fort** was a Maratha stronghold under Murari Rao; Thomas Munro, the Collector, died at Gooty in 1827.', '**Sathya Sai Baba** (1926–2011) made Puttaparthi a global ashram town.'],
    mustSee: ['**Puttaparthi** — Prasanthi Nilayam ashram and the Chaitanya Jyoti museum', '**Penukonda fort** and Gagan Mahal; **Gooty** hill fort', '**Thimmamma Marrimanu** — a banyan spread over 5 acres (Guinness record)', 'Lepakshi (see own page); Belum caves (Kurnool) nearby', 'ISKCON and the Anantasagaram tank'],
    food: ['Rayalaseema **ragi sangati** with natu kodi (country chicken) curry', 'Groundnuts — Anantapur is India’s groundnut capital'],
    culture: ['Sai Baba’s ashram draws devotees from 100+ countries', 'Dry, tough Rayalaseema — famous for its factional politics and hardy people'],
    funFacts: ['Thimmamma Marrimanu is listed as the world’s largest banyan tree by canopy.', 'Anantapur grows some of India’s best mangoes and grapes despite the desert-like rains.'],
    tips: ['Puttaparthi ashram has dress codes (white preferred) and silent zones.']
  },
  {
    id: 'tirupati', name: 'Tirupati', kind: 'place', scope: 'domestic', country: 'India', state: 'Andhra Pradesh', parent: 'andhrapradesh',
    lat: 13.63, lng: 79.42, emoji: '🙏', tagline: 'Venkateswara’s seven hills — the richest temple on Earth', aka: ['Tirumala'],
    glance: { 'Temple': 'Sri Venkateswara Swamy, Tirumala (on the hill)', 'Hills': 'Seven — Seshachalam range', 'Daily pilgrims': '50,000–100,000', 'Famous prasadam': 'Tirupati laddu (GI tag)', 'Hair offering': '~1 crore heads tonsured a year' },
    history: ['The temple is 1,000+ years old — Pallava, Chola, Pandya and **Vijayanagara** kings all donated; **Krishnadevaraya** visited seven times and gilded the vimana.', 'Legend: Venkateswara (Vishnu) borrowed from Kubera to marry Padmavathi and is still repaying the loan through devotees’ offerings.', 'Tirumala Tirupati Devasthanams (TTD) was formed in 1932 to run the temple.'],
    mustSee: ['**Tirumala temple** darshan — the Ananda Nilayam golden vimana', '**Sri Padmavathi temple**, Tiruchanur (visit after Tirumala)', '**Kapila Theertham** waterfall temple; Akasa Ganga and Papavinasanam on the hill', '**Silathoranam** — natural rock arch, 1.5 billion years old', 'Sri Kalahasti (Vayu lingam, Rahu-Ketu pooja) 36 km away; Chandragiri fort', 'Walking up the 3,550 Alipiri steps'],
    food: ['**Tirupati laddu** — 3 lakh made daily', 'Free annadanam meals; Andhra pesarattu and upma in town'],
    culture: ['Tonsuring as a vow — the hair is auctioned and exported', 'Brahmotsavam (Sept/Oct) with the Garuda Seva drawing lakhs', 'The Govinda chant echoes in the queue lines for hours'],
    funFacts: ['The temple’s annual income is around ₹4,000+ crore — the richest in the world.', 'The laddu is protected by a GI tag; only TTD can call it Tirupati laddu.', 'The main idol is believed to sweat — it is kept cool with camphor.'],
    tips: ['Book Rs 300 special darshan online months ahead; the free queue can take 8–24 hours.', 'Dress code: dhoti/sari or formal traditional wear for special entry.']
  },

  /* ======================= TELANGANA ======================= */
  {
    id: 'telangana', name: 'Telangana', kind: 'state', scope: 'domestic', country: 'India', state: 'Telangana', parent: 'india',
    lat: 18.11, lng: 79.02, emoji: '🍚', tagline: 'India’s youngest state, home of the Nizams',
    glance: { 'Capital': 'Hyderabad', 'Language': 'Telugu, Urdu', 'Formed': '2 June 2014 — 29th state', 'Districts': '33', 'Rivers': 'Godavari, Krishna' },
    history: ['**Kakatiya** kingdom (Warangal, Rudrama Devi), then the Bahmanis, Qutb Shahis and the Nizams of Hyderabad until 1948 (Operation Polo).', 'Merged into Andhra Pradesh in 1956; a 60-year movement led to statehood in 2014.'],
    food: ['**Hyderabadi biryani, haleem, Irani chai, Osmania biscuits**; jonna rotte and sarva pindi'],
    culture: ['Bathukamma flower festival and Bonalu; Perini dance; Urdu-Telugu Deccani culture'],
    funFacts: ['Ramappa temple (Warangal) became a UNESCO site in 2021.']
  },
  {
    id: 'hyderabad', name: 'Hyderabad', kind: 'place', scope: 'domestic', country: 'India', state: 'Telangana', parent: 'telangana',
    lat: 17.39, lng: 78.49, emoji: '🕌', tagline: 'City of pearls, biryani and the Charminar',
    glance: { 'Founded': '1591 by Muhammad Quli Qutb Shah', 'Famous for': 'Charminar, Golconda, biryani, pearls, HITEC City', 'Lake': 'Hussain Sagar with the Buddha statue', 'Nicknames': 'City of Pearls, Cyberabad', 'Population': '~10 million' },
    history: ['**Golconda** was the Kakatiya then Qutb Shahi fort; diamonds like the **Koh-i-Noor** and Hope came from its mines.', 'Quli Qutb Shah built the **Charminar** in 1591 to mark the end of a plague and the founding of the city.', 'The **Nizams** (1724–1948) made Hyderabad the largest princely state; the 7th Nizam was once the world’s richest man. Joined India in Sept 1948.'],
    mustSee: ['**Charminar** and the **Laad Bazaar** bangle lanes; Mecca Masjid', '**Golconda Fort** — the clapping-echo at the gate, sound-and-light show; **Qutb Shahi tombs**', '**Salar Jung Museum** — the Veiled Rebecca and the musical clock', '**Chowmahalla Palace**; Falaknuma Palace high tea', '**Hussain Sagar** Buddha, Necklace Road; Birla Mandir', '**Ramoji Film City**; HITEC City and the Durgam Cheruvu cable bridge'],
    food: ['**Hyderabadi dum biryani** (Paradise, Bawarchi, Shah Ghouse), **haleem** in Ramzan', '**Irani chai with Osmania biscuits** at Nimrah Café by the Charminar', 'Double-ka-meetha, qubani-ka-meetha, mirchi ka salan; Pista House'],
    culture: ['Deccani Urdu and Telugu side by side; “Hyderabadi tehzeeb” courtesy', 'Pearl trade (Chandi ki Basti) though no pearls are found here — a Nizam legacy', 'Bonalu and Bathukamma; Ganesh immersion at Hussain Sagar'],
    funFacts: ['Hyderabadi haleem got a GI tag in 2010 — the first meat dish in India with one.', 'The Nizam used the Jacob Diamond (184 carats) as a paperweight.', 'Telangana and Andhra Pradesh shared Hyderabad as capital until 2024.'],
    tips: ['Old City by early morning for the Charminar without crowds; Laad Bazaar opens by 11.', 'Golconda light show is in English on select days — check the schedule.']
  }
);
