/* places-more.js — places added Sept 2026 from the full trip log:
   USA, China, South Korea, and more Indian destinations (Goa, Sikkim, Darjeeling,
   Gandikota, Belum Caves, Hogenakkal, Chidambaram, Coimbatore, Pichavaram,
   Tharangambadi, Devarayanadurga, Murudeshwar, Somanathapura, Mekedatu, KGF,
   Mandaragiri, Hampta Pass). Same schema as the other places-*.js files. */
TRIPS.places.push(
  /* ======================= USA ======================= */
  {
    id: 'usa', name: 'United States', kind: 'country', scope: 'international', country: 'United States',
    lat: 39.8, lng: -98.6, emoji: '🗽', tagline: 'Canyons, cascades and skyscrapers — seen between work trips',
    glance: { 'Capital': 'Washington, D.C.', 'Language': 'English', 'Currency': 'US dollar (USD)', 'Population': '~340 million', 'States': '50', 'Our work bases': 'Andover (MA), Irvine & Santa Clara (CA), San Diego' },
    history: ['Thirteen British colonies declared independence on **4 July 1776**; the Constitution followed in 1787.', 'Westward expansion, the Civil War (1861–65) and two World Wars made it the world’s largest economy by the 20th century.', 'The 1969 Moon landing and Silicon Valley’s tech boom define its modern image.'],
    mustSee: ['Grand Canyon, Las Vegas, Niagara Falls, New York and San Diego (our stops)', 'Yosemite, Yellowstone, Washington D.C., Florida — for next time'],
    food: ['**Burgers, hot dogs, pizza slices, pancakes** — and every cuisine on earth in New York', 'Mexican food in California; clam chowder in New England'],
    culture: ['Tipping (15–20%) is expected everywhere', 'Distances are huge — a “short drive” is three hours', 'Sales tax is added at the till; prices on shelves exclude it'],
    funFacts: ['The USA has no official language at federal level.', 'Alaska is the largest state; Rhode Island the smallest — 425 Rhode Islands fit in Alaska.', 'The Grand Canyon, Niagara and Yellowstone were all protected before most countries had parks at all.'],
    tips: ['An International Driving Permit plus Indian licence works for car hire.', 'ESTA does not apply to Indians — a B1/B2 visa is needed.']
  },
  {
    id: 'grand-canyon', name: 'Grand Canyon', kind: 'place', scope: 'international', country: 'United States', parent: 'usa',
    lat: 36.10, lng: -112.11, emoji: '🏜️', tagline: 'A mile deep, two billion years of rock',
    glance: { 'State': 'Arizona', 'Length': '446 km', 'Depth': 'Up to 1,857 m', 'River': 'Colorado', 'UNESCO': 'World Heritage 1979', 'National park since': '1919' },
    history: ['The Colorado River has been cutting the canyon for about **5–6 million years**; the rocks at the bottom are nearly 2 billion years old.', 'Ancestral Puebloans lived in the canyon 12,000 years ago; the Havasupai still do.', 'Spanish explorers saw it in 1540; **John Wesley Powell** ran the river in 1869; Theodore Roosevelt made it a national monument in 1908.'],
    mustSee: ['**Mather Point and Yavapai Point** on the South Rim', '**Desert View Watchtower** and the drive along the rim', '**Bright Angel Trail** — even a mile down changes the view', 'Sunset from **Hopi Point**; the **Skywalk** at Grand Canyon West', 'Helicopter flight over the canyon from Las Vegas'],
    food: ['El Tovar hotel dining room (1905) on the rim', 'Navajo tacos (fry bread) from the roadside stands'],
    culture: ['Sacred to the Hopi, Navajo, Havasupai and Hualapai nations', 'Five million visitors a year — most only see the South Rim'],
    funFacts: ['The canyon is so big it has its own weather — the North Rim is 300 m higher and much colder.', 'Only about 1% of visitors go below the rim.', 'The rock layers read like a book: each colour band is a different age.'],
    tips: ['Go to the rim at dawn — the light is best and the crowds are asleep.', 'The Las Vegas–South Rim drive is 4½ hours; the West Rim (Skywalk) is closer but not in the national park.']
  },
  {
    id: 'las-vegas', name: 'Las Vegas', kind: 'place', scope: 'international', country: 'United States', parent: 'usa',
    lat: 36.17, lng: -115.14, emoji: '🎰', tagline: 'Neon in the Mojave desert',
    glance: { 'State': 'Nevada', 'The Strip': '6.8 km of Las Vegas Boulevard', 'Famous for': 'Casinos, shows, the fountains, themed hotels', 'Founded': '1905', 'Nickname': 'Sin City / Entertainment Capital of the World' },
    history: ['A railway watering stop (“las vegas” = the meadows) until Nevada legalised gambling in **1931**; the Hoover Dam workers were the first customers.', 'The Rat Pack era of the 1950s–60s and the mega-resorts of the 1990s (Bellagio, Venetian) made the Strip.', 'Today it is a convention and show city as much as a casino town.'],
    mustSee: ['**The Strip** at night — Bellagio fountains, the Venetian’s canals, Paris’s half-size Eiffel Tower', '**Fremont Street** — old downtown under a canopy of LEDs', '**Hoover Dam** (45 min) and **Red Rock Canyon**', 'A show — Cirque du Soleil; the **Sphere**', 'The High Roller wheel; the Welcome to Fabulous Las Vegas sign'],
    food: ['All-you-can-eat **buffets** — the Vegas institution', 'In-N-Out burger; celebrity-chef restaurants in every hotel'],
    culture: ['“What happens in Vegas stays in Vegas” — but it is also a family destination now', 'Hotels are cheap so you gamble; the walk between two “neighbouring” hotels can be 20 minutes'],
    funFacts: ['Las Vegas has more hotel rooms than any other city in the world — about 150,000.', 'The Luxor’s beam of light is the strongest in the world and visible from planes 400 km away.', 'The city has no clocks or windows in casinos — by design.'],
    tips: ['Stay on the Strip but walk indoors — hotels connect through malls and bridges.', 'Winter days are mild; summer is 45°C.']
  },
  {
    id: 'niagara-falls', name: 'Niagara Falls', kind: 'place', scope: 'international', country: 'United States', parent: 'usa',
    lat: 43.09, lng: -79.07, emoji: '🌊', tagline: 'Three waterfalls on the US–Canada border',
    glance: { 'Falls': 'Horseshoe (Canada), American, Bridal Veil', 'Height': '~57 m', 'Flow': '2,400 m³/s — most of the Great Lakes drain through', 'River': 'Niagara, Lake Erie → Lake Ontario', 'Age': '~12,000 years' },
    history: ['Formed as the glaciers retreated at the end of the Ice Age; the falls have eroded 11 km upstream since.', 'A honeymoon destination since the 1800s; daredevils have gone over in barrels since Annie Taylor in 1901.', 'The first large-scale AC hydroelectric plant (Tesla and Westinghouse, 1895) was here.'],
    mustSee: ['**Maid of the Mist** boat into the spray of the Horseshoe Falls', '**Cave of the Winds** — wooden walkways at the foot of Bridal Veil Falls', '**Goat Island** and Terrapin Point, the US-side viewpoint', 'Night illumination and summer fireworks', 'The Canadian side for the full panorama (needs a visa)'],
    food: ['Nothing to write home about — it is all about the view', 'Buffalo wings in Buffalo, 30 minutes away'],
    culture: ['Half the water is diverted for power at night — the falls are “turned down”', 'Two countries, two towns, one river'],
    funFacts: ['The falls move back about 30 cm a year; they were once at Lewiston, 11 km away.', 'The American Falls were stopped completely in 1969 to study the rock — for five months.', 'Niagara is not the tallest waterfall but one of the most powerful by volume.'],
    tips: ['The poncho they give on the Maid of the Mist is not optional — you will be soaked.', 'Summer is peak; the boats stop in winter when the river ices.']
  },
  {
    id: 'new-york', name: 'New York City', kind: 'place', scope: 'international', country: 'United States', parent: 'usa',
    lat: 40.71, lng: -74.01, emoji: '🗽', tagline: 'The city that never sleeps',
    glance: { 'Boroughs': 'Manhattan, Brooklyn, Queens, the Bronx, Staten Island', 'Population': '~8.3 million (city), 20 million (metro)', 'Famous for': 'Statue of Liberty, Times Square, Wall Street, Central Park', 'Subway': '472 stations, runs 24 hours', 'UNESCO': 'Statue of Liberty (1984)' },
    history: ['Dutch **New Amsterdam** (1624), bought from the Lenape for 60 guilders of goods; renamed New York by the English in 1664.', 'The **Statue of Liberty** (1886), a gift from France, greeted 12 million immigrants arriving at Ellis Island.', 'Wall Street’s stock exchange (1792), the skyscraper boom, 9/11 (2001) and the rebuilt One World Trade Center.'],
    mustSee: ['**Statue of Liberty & Ellis Island** by ferry from Battery Park', '**Wall Street** — the NYSE, the Charging Bull, Trinity Church', '**Times Square** at night; a Broadway show', '**Central Park**, the Met, the Empire State or Top of the Rock view', 'Brooklyn Bridge walk; the High Line; 9/11 Memorial'],
    food: ['**New York pizza slice**, bagels with lox, pastrami on rye at Katz’s', 'Hot dogs and pretzels from carts; halal-cart chicken over rice'],
    culture: ['800 languages spoken — the most linguistically diverse city on earth', 'Walk fast, talk fast; the subway is the great equaliser'],
    funFacts: ['Wall Street is named after an actual wall the Dutch built in 1653 against the English.', 'The Statue of Liberty’s copper skin is only 2.4 mm thick; her green colour is oxidation.', 'Times Square is named after The New York Times, which moved there in 1904.'],
    tips: ['Buy a 7-day unlimited MetroCard/OMNY; skip taxis.', 'The Staten Island ferry is free and passes the Statue of Liberty.']
  },
  {
    id: 'san-diego', name: 'San Diego', kind: 'place', scope: 'international', country: 'United States', parent: 'usa',
    lat: 32.72, lng: -117.16, emoji: '🌴', tagline: 'La Jolla, Point Loma and Sunset Cliffs', aka: ['La Jolla', 'Point Loma', 'Sunset Cliffs', 'Irvine', 'Oceanside'],
    glance: { 'State': 'California', 'Famous for': 'Beaches, the Zoo, Balboa Park, La Jolla seals, Point Loma', 'Climate': '“Perfect” — 20°C most of the year', 'Border': 'Tijuana, Mexico, 25 km south', 'Also': 'Irvine and Oceanside Pier up the coast' },
    history: ['**Cabrillo** landed at Point Loma in 1542 — the first European on the US west coast; the 1769 mission was California’s first.', 'A US Navy town since the 1900s — the Pacific Fleet and the Midway aircraft carrier museum.', 'La Jolla grew from an artists’ colony to a biotech and surfing hub.'],
    mustSee: ['**La Jolla Cove** — seals and sea lions on the rocks, the Children’s Pool', '**Sunset Cliffs** at sunset; **Point Loma** — Cabrillo monument, old lighthouse, tide pools', '**Balboa Park** and the **San Diego Zoo**', '**Coronado beach** and the Hotel del Coronado', '**Universal Studios Hollywood** (2 hours north) and **Oceanside Pier** on the way'],
    food: ['**Fish tacos** — invented here (Rubio’s)', 'California burritos with fries inside; In-N-Out'],
    culture: ['Surf, skate and craft beer capital', 'Half Mexican in flavour — Old Town is the birthplace of California'],
    funFacts: ['San Diego has the largest naval fleet in the world.', 'The Hotel del Coronado (1888) was the setting of “Some Like It Hot”.', 'La Jolla’s Torrey Pines reserve has the rarest pine in the US.'],
    tips: ['The trolley reaches Old Town and the border; a car is needed for La Jolla and Point Loma.', 'Sunset Cliffs — stay behind the fence, the edges crumble.']
  },

  /* ======================= CHINA ======================= */
  {
    id: 'china', name: 'China', kind: 'country', scope: 'international', country: 'China',
    lat: 35.9, lng: 104.2, emoji: '🐉', tagline: 'The Middle Kingdom',
    glance: { 'Capital': 'Beijing', 'Language': 'Mandarin', 'Currency': 'Renminbi / yuan (CNY)', 'Population': '~1.4 billion', 'Time zone': 'UTC+8 — one zone for the whole country' },
    history: ['Dynasties from the **Qin** (221 BCE, first emperor, Terracotta Army) through Han, Tang, Song, Yuan, **Ming** (who built most of today’s Great Wall) and Qing.', 'The republic of 1912, the People’s Republic of **1949**, and the reforms of 1978 that made China the world’s factory.', 'Beijing hosted the 2008 Summer and 2022 Winter Olympics.'],
    mustSee: ['Beijing and the Great Wall (our stop)', 'Xi’an’s Terracotta Army, Shanghai, Guilin — for next time'],
    food: ['**Peking duck, dumplings, hot pot, noodles**; tea instead of water', 'Regional cuisines are as different as European countries'],
    culture: ['Chopsticks, tea ceremony and the lunar New Year', 'Red is lucky, the number 4 is not; giving a clock as a gift is taboo'],
    funFacts: ['China spans five geographical time zones but uses only one clock.', 'Paper, printing, gunpowder and the compass — the Four Great Inventions — are Chinese.', 'Ice cream and pasta both have contested Chinese origins.'],
    tips: ['Google, WhatsApp and Gmail are blocked — set up a VPN or WeChat before landing.', 'Cash is rare now; everything runs on WeChat Pay / Alipay.']
  },
  {
    id: 'beijing', name: 'Beijing & the Great Wall', kind: 'place', scope: 'international', country: 'China', parent: 'china',
    lat: 39.90, lng: 116.40, emoji: '🏯', tagline: 'Badaling’s wall in winter and the Forbidden City', aka: ['Great Wall of China', 'Badaling', 'Peking'],
    glance: { 'Population': '~22 million', 'Great Wall': '21,000 km in total; Badaling section 70 km from the city', 'UNESCO': 'Great Wall, Forbidden City, Temple of Heaven, Summer Palace, Ming Tombs', 'Capital since': '1421 (Ming)', 'Altitude of Badaling': '~1,000 m' },
    history: ['Walls were built from the 7th century BCE; the first emperor Qin Shi Huang joined them (~220 BCE); the stone-and-brick wall we walk on is **Ming** (1368–1644).', 'The **Forbidden City** (1420) housed 24 emperors of the Ming and Qing dynasties; the last, Puyi, left in 1924.', 'Tiananmen Square is the world’s largest public square; Mao proclaimed the People’s Republic here in 1949.'],
    mustSee: ['**Great Wall at Badaling** — restored, steep and busy; Mutianyu is quieter', '**Forbidden City** and **Tiananmen Square**', '**Temple of Heaven** — locals doing tai chi at dawn', '**Summer Palace** and Kunming Lake; the hutong alleys by rickshaw', 'Peking duck at Quanjude; the Olympic Bird’s Nest'],
    food: ['**Peking duck** carved at the table with pancakes', 'Jianbing (breakfast crêpe), lamb skewers, hot pot in winter'],
    culture: ['Winter in Beijing is bitter (-10°C) but the wall is empty and the sky clear', 'Hutong courtyard homes are the old Beijing; most have been demolished for towers'],
    funFacts: ['The Great Wall cannot be seen from space with the naked eye — the myth predates spaceflight.', 'The Forbidden City has 9,999 rooms by tradition — one short of heaven’s 10,000.', 'Badaling was the first section opened to tourists (1957); Nixon walked it in 1972.'],
    tips: ['Take the Badaling cable car up and walk down; the steps are steep and icy in December.', 'Book the Forbidden City online with your passport — no tickets at the gate.']
  },

  /* ======================= SOUTH KOREA ======================= */
  {
    id: 'south-korea', name: 'South Korea', kind: 'country', scope: 'international', country: 'South Korea',
    lat: 36.5, lng: 127.8, emoji: '🇰🇷', tagline: 'Land of the Morning Calm',
    glance: { 'Capital': 'Seoul', 'Language': 'Korean (Hangul script)', 'Currency': 'Won (KRW)', 'Population': '~52 million', 'Time zone': 'UTC+9 (3½ hours ahead of India)' },
    history: ['Three Kingdoms, then **Silla** unified the peninsula in 668; the Joseon dynasty (1392–1897) created Hangul in 1443.', 'Japanese occupation 1910–45, the **Korean War** 1950–53 and the division at the 38th parallel.', 'From one of the poorest countries in 1960 to Samsung, Hyundai and K-pop — the “Miracle on the Han River”.'],
    mustSee: ['Gumi and Geumosan (our stop)', 'Seoul’s palaces, Busan, Jeju island, the DMZ — for next time'],
    food: ['**Kimchi** with everything, **bibimbap**, Korean barbecue, tteokbokki', 'Soju and makgeolli; the side dishes (banchan) are free and endless'],
    culture: ['Bow, use two hands to give and receive, take shoes off indoors', 'Age decides everything — even how you address a colleague'],
    funFacts: ['Koreans used to be “one year old” at birth — the age system changed in 2023.', 'Hangul is one of the few scripts invented deliberately, by a king, in a single project.', 'South Korea has the world’s fastest internet and highest cosmetic-surgery rate.'],
    tips: ['T-money card for buses and subways everywhere.', 'Tipping is not done and can offend.']
  },
  {
    id: 'gumi', name: 'Gumi', kind: 'place', scope: 'international', country: 'South Korea', parent: 'south-korea',
    lat: 36.12, lng: 128.34, emoji: '🥾', tagline: 'The electronics city below Geumosan', aka: ['Geumosan', 'Kumi'],
    glance: { 'Province': 'North Gyeongsang', 'Known for': 'Samsung / LG factories, Geumosan Provincial Park', 'Geumosan': '976 m, cable car + trail', 'River': 'Nakdong', 'From Seoul': '2 hours by KTX to Gimcheon–Gumi' },
    history: ['A quiet farming town until the **1970s** industrial complex made it Korea’s electronics export hub — Samsung, LG and hundreds of suppliers.', 'Birthplace of president Park Chung-hee, who drove the industrialisation.', '**Geumosan** (“golden crow mountain”) has been a Buddhist retreat since Silla times — Haeunsa temple and the 1,000-year-old Doseon cave.'],
    mustSee: ['**Geumosan trek** — cable car to Haeunsa temple, then the trail past the Daehye waterfall to the summit', '**Geumosan reservoir** walk with the autumn maples', 'Doseon cave and the Buddha carving on the cliff', 'Gumi’s Park Chung-hee birthplace; Nakdong riverside park'],
    food: ['**Samgyeopsal** (pork belly barbecue) after the hike; bibimbap and kimchi jjigae', 'Convenience-store kimbap for the trail'],
    culture: ['Koreans hike in full technical gear — a jeans-and-sneakers foreigner stands out', 'Mountain trails have exercise stations and drinking springs'],
    funFacts: ['Gumi produced most of the world’s CRT monitors in the 1990s.', 'Geumosan has been a provincial park since 1970 — Korea’s first.', 'Autumn foliage (October–November) is the reason half the country is on a mountain at weekends.'],
    tips: ['The full Geumosan loop is 4–5 hours; the cable car cuts the first hour.', 'Trail signs are in Korean and English; carry water — springs are seasonal.']
  },

  /* ======================= GOA ======================= */
  {
    id: 'goa-state', name: 'Goa', kind: 'state', scope: 'domestic', country: 'India', state: 'Goa', parent: 'india',
    lat: 15.30, lng: 74.08, emoji: '🏖️', tagline: 'India’s smallest state, Portuguese for 450 years',
    glance: { 'Capital': 'Panaji', 'Language': 'Konkani', 'Portuguese rule': '1510–1961', 'Area': '3,702 sq km — the smallest state', 'UNESCO': 'Churches and Convents of Goa' },
    history: ['Afonso de Albuquerque took Goa in 1510; it was the capital of Portuguese Asia. Liberated by India in **Operation Vijay, December 1961**.'],
    food: ['**Fish curry rice, vindaloo, xacuti, bebinca, feni**'],
    culture: ['Carnival, Shigmo, Christmas and Ganesh Chaturthi all celebrated big'],
    funFacts: ['Goa was the first place in Asia to have a printing press (1556).']
  },
  {
    id: 'goa', name: 'Goa — beaches & Old Goa', kind: 'place', scope: 'domestic', country: 'India', state: 'Goa', parent: 'goa-state',
    lat: 15.49, lng: 73.83, emoji: '🌴', tagline: 'Susegad — the art of taking it easy', aka: ['Panaji', 'Old Goa', 'Baga', 'Calangute', 'Palolem'],
    glance: { 'Beaches': 'Baga, Calangute, Anjuna (north); Colva, Palolem (south)', 'Old Goa': 'Basilica of Bom Jesus — St Francis Xavier’s body', 'Panaji': 'Fontainhas Latin quarter', 'Forts': 'Aguada, Chapora', 'Best time': 'Nov–Feb' },
    history: ['**Old Goa** was “Rome of the East” — a city of 200,000 in 1600 with more churches than Lisbon; plague emptied it and the capital moved to Panaji in 1843.', 'Hippies discovered Anjuna in the 1960s; charter tourism followed in the 1980s.', 'St Francis Xavier died in 1552; his body, said to be incorrupt, is displayed every ten years (last 2024).'],
    mustSee: ['**Basilica of Bom Jesus** and **Se Cathedral**, Old Goa', '**Fontainhas** — Panaji’s painted Portuguese lanes', '**Fort Aguada** and the Chapora “Dil Chahta Hai” fort', 'North beaches for the scene, **Palolem** in the south for calm', 'Dudhsagar falls; a river cruise on the Mandovi; Anjuna flea market (Wed)'],
    food: ['**Goan fish thali**, prawn balchão, pork vindaloo, chorizo pao', 'Bebinca and dodol; feni (cashew or coconut) sundowners'],
    culture: ['Susegad — contentment; siesta is real', 'Konkani-Portuguese Catholic and Hindu Goa side by side'],
    funFacts: ['Goa has the highest per-capita income of any Indian state.', 'The Bom Jesus basilica is the only church in Old Goa not plastered — the laterite is bare.', 'Goa’s Dudhsagar falls drop 310 m — the train passes over them.'],
    tips: ['Rent a scooter; taxis are expensive and there is little public transport.', 'Old Goa and Fontainhas are best on a weekday morning.']
  },

  /* ======================= SIKKIM & WEST BENGAL ======================= */
  {
    id: 'sikkim', name: 'Sikkim', kind: 'state', scope: 'domestic', country: 'India', state: 'Sikkim', parent: 'india',
    lat: 27.53, lng: 88.51, emoji: '🏔️', tagline: 'The Himalayan kingdom that joined India in 1975',
    glance: { 'Capital': 'Gangtok', 'Language': 'Nepali, Bhutia, Lepcha', 'Joined India': '1975 (formerly a Chogyal monarchy)', 'Peak': 'Kangchenjunga 8,586 m — 3rd highest in the world', 'Also': 'India’s first fully organic state (2016)' },
    history: ['Ruled by the **Chogyals** from 1642; a British protectorate, then an Indian protectorate; became the 22nd state after a 1975 referendum.'],
    food: ['**Momos, thukpa, gundruk, sel roti**; chhang millet beer'],
    culture: ['Buddhist monasteries — Rumtek, Pemayangtse; Lepcha and Bhutia traditions'],
    funFacts: ['Sikkim has no railway or airport of note — Pakyong (2018) is one of the highest airports in India.']
  },
  {
    id: 'gangtok', name: 'Gangtok', kind: 'place', scope: 'domestic', country: 'India', state: 'Sikkim', parent: 'sikkim',
    lat: 27.33, lng: 88.61, emoji: '🏔️', tagline: 'Ridge-top capital under Kangchenjunga', aka: ['Tsomgo Lake', 'Nathula', 'Rumtek'],
    glance: { 'Altitude': '1,650 m', 'Famous for': 'MG Marg, Rumtek monastery, Tsomgo (Changu) lake, Nathula pass', 'Kangchenjunga view': 'Tashi viewpoint at dawn', 'Nathula': '4,310 m, Indo-China border (permit)', 'Best time': 'Mar–May, Oct–Dec' },
    history: ['A small hamlet until the **Enchey monastery** (1840) and the Chogyal’s move here in 1894.', 'On the old trade route to Tibet over Nathula — closed in 1962, reopened for border trade in 2006.', 'Rumtek is the seat of the Karmapa lineage, rebuilt in the 1960s after the flight from Tibet.'],
    mustSee: ['**MG Marg** — the pedestrian, litter-free high street', '**Tsomgo Lake** and **Baba Harbhajan Singh temple**; **Nathula** pass (permit, closed Mon/Tue)', '**Rumtek** and **Enchey** monasteries', '**Tashi viewpoint** at sunrise for Kangchenjunga; the ropeway', 'Namgyal Institute of Tibetology; Banjhakri falls'],
    food: ['**Momos** and thukpa everywhere; phagshapa (pork with radish)', 'Temi tea; Sikkim’s organic vegetables'],
    culture: ['Sikkim banned plastic bags in 1998 — the cleanest state', 'Prayer flags on every ridge; Losar and Saga Dawa festivals'],
    funFacts: ['MG Marg was India’s first “spit-free, smoke-free, litter-free” street.', 'Tsomgo lake freezes in winter and is sacred to the Buddhists — its colour is said to predict the future.', 'Nathula was part of the Silk Route; you can see Chinese soldiers across the fence.'],
    tips: ['Permits for Tsomgo/Nathula are arranged by hotels a day ahead — carry photos and ID.', 'The road from Bagdogra/NJP takes 4–5 hours; landslides are common in monsoon.']
  },
  {
    id: 'westbengal', name: 'West Bengal', kind: 'state', scope: 'domestic', country: 'India', state: 'West Bengal', parent: 'india',
    lat: 22.99, lng: 87.85, emoji: '🐅', tagline: 'From the Sundarbans to the tea hills',
    glance: { 'Capital': 'Kolkata', 'Language': 'Bengali', 'Formed': '1947 (partition of Bengal)', 'UNESCO': 'Darjeeling Himalayan Railway, Sundarbans, Durga Puja' },
    history: ['Capital of British India until 1911; the Bengal Renaissance of Tagore, Vivekananda and Ray.'],
    food: ['**Rosogolla, mishti doi, fish curry, kathi rolls, Darjeeling tea**'],
    culture: ['Durga Puja — a UNESCO intangible heritage festival'],
    funFacts: ['West Bengal has both the Himalayas and the sea.']
  },
  {
    id: 'darjeeling', name: 'Darjeeling', kind: 'place', scope: 'domestic', country: 'India', state: 'West Bengal', parent: 'westbengal',
    lat: 27.04, lng: 88.26, emoji: '🍵', tagline: 'Queen of the Hills — tea, toy train and Tiger Hill',
    glance: { 'Altitude': '2,045 m', 'Famous for': 'Darjeeling tea, the toy train, Tiger Hill sunrise', 'UNESCO': 'Darjeeling Himalayan Railway (1999)', 'Tea gardens': '87 estates, GI-tagged', 'Kangchenjunga': '70 km away, fills the horizon' },
    history: ['Leased from the Chogyal of Sikkim by the British in **1835** as a sanatorium; tea planted from the 1840s.', 'The **Darjeeling Himalayan Railway** (1881) climbs from 100 m to 2,200 m with loops and zig-zags.', 'Home of the Gorkha community; the Gorkhaland movement shaped its recent politics.'],
    mustSee: ['**Tiger Hill** sunrise over Kangchenjunga (and Everest on a clear day)', '**Toy train** joy ride to Ghum, the highest station in India', '**Batasia Loop**, **Ghum monastery**, the **Peace Pagoda**', 'Tea estate tour and tasting — Happy Valley (1854)', 'Himalayan Mountaineering Institute and the zoo (red pandas, snow leopards); the Mall and Chowrasta'],
    food: ['**Darjeeling tea** — first flush is the champagne of teas', 'Momos and thukpa; Glenary’s bakery; Keventer’s breakfast'],
    culture: ['Tenzing Norgay lived and is buried here; the HMI was set up after Everest 1953', 'Boarding schools, colonial bungalows and a Gorkha-Nepali soul'],
    funFacts: ['Darjeeling tea was the first Indian product to get a GI tag (2004).', 'The toy train’s Batasia Loop lets the line gain height by spiralling over itself.', 'Ghum station at 2,258 m is the highest railway station in India.'],
    tips: ['Tiger Hill needs a 4 am start; book the toy train joy ride in advance.', 'October–November has the clearest skies for Kangchenjunga.']
  },

  /* ======================= ANDHRA PRADESH additions ======================= */
  {
    id: 'gandikota', name: 'Gandikota', kind: 'place', scope: 'domestic', country: 'India', state: 'Andhra Pradesh', parent: 'andhrapradesh',
    lat: 14.82, lng: 78.29, emoji: '🏜️', tagline: 'The Grand Canyon of India', aka: ['Gantikota'],
    glance: { 'District': 'Kadapa (YSR)', 'Gorge': 'Pennar river, red sandstone cliffs ~100 m', 'Fort': '13th century, Pemmasani Nayaks', 'From Bengaluru': '~280 km', 'Best time': 'Oct–Feb; sunrise and sunset' },
    history: ['The fort was founded in **1123** by Kaka Raja of the Kalyani Chalukyas; the **Pemmasani Nayaks** ruled for 300 years under Vijayanagara.', 'Taken by the Qutb Shahis (Golconda) in 1652 — Mir Jumla’s siege; the mosque and granary date from then.', 'The gorge stayed unknown to tourists until photos went viral around 2015.'],
    mustSee: ['**The gorge viewpoint** — the Pennar bending between red cliffs', '**Madhavaraya and Raghunatha temples**, the Jama Masjid, the granary and jail inside the fort', 'Sunrise on the cliff; camping by the Gandikota reservoir', 'Belum Caves (60 km) and Owk reservoir on the same trip'],
    food: ['Rayalaseema meals in Jammalamadugu; the APTDC Haritha hotel canteen'],
    culture: ['A living village inside a fort; the Nayak-era Telugu heroes are still sung about'],
    funFacts: ['The gorge is 300 m wide at its narrowest and the cliffs glow orange at sunset.', 'The fort’s “pigeon tower” and the granary are still intact after 400 years.'],
    tips: ['The last stretch of road is rough; stay overnight at the Haritha hotel for sunrise.', 'No railings at the viewpoint — mind children.']
  },
  {
    id: 'belum-caves', name: 'Belum Caves', kind: 'place', scope: 'domestic', country: 'India', state: 'Andhra Pradesh', parent: 'andhrapradesh',
    lat: 15.10, lng: 78.10, emoji: '🕳️', tagline: 'India’s longest cave system open to the public',
    glance: { 'District': 'Nandyal (Kurnool)', 'Length': '3,229 m mapped; 1.5 km open', 'Depth': '46 m at Patalaganga', 'Type': 'Limestone karst, black limestone', 'Also': 'A 40 ft Buddha statue outside' },
    history: ['Formed by underground rivers over **millions of years** in the limestone of the Kurnool plateau.', 'Known to locals forever; surveyed by British geologist Robert Bruce Foote (1884) and mapped by a German team in 1982–84.', 'Buddhist and Jain monks lived here around 4500 BCE; APTDC opened the caves in 2002.'],
    mustSee: ['**Kotilingalu chamber** — thousands of stalactites like lingams', '**Saptasvarala Guha** — the musical chamber where stalactites ring', '**Patalaganga** — the underground stream at the deepest point', 'The Meditation Hall and Simhadwaram (lion gate) formations'],
    food: ['APTDC canteen at the entrance; Nandyal and Tadipatri hotels'],
    culture: ['Belum is Sanskrit “bilum” — cave; second largest natural cave in the subcontinent after Meghalaya’s Krem'],
    funFacts: ['It is hot and humid inside (up to 35°C) — the opposite of most caves — because of the shallow depth.', 'The caves have 16 different pathways; only about a third is lit and open.'],
    tips: ['Go early — the caves close at 5 pm; wear shoes with grip.', 'Combine with Gandikota (60 km) and Yaganti temple.']
  },

  /* ======================= KARNATAKA additions ======================= */
  {
    id: 'devarayanadurga', name: 'Devarayanadurga', kind: 'place', scope: 'domestic', country: 'India', state: 'Karnataka', parent: 'karnataka',
    lat: 13.37, lng: 77.21, emoji: '⛰️', tagline: 'Rocky hill-fort temple near Tumakuru',
    glance: { 'District': 'Tumakuru', 'Altitude': '1,190 m', 'Temples': 'Yoganarasimha (top), Bhoganarasimha (base)', 'From Bengaluru': '~70 km', 'Namada Chilume': 'Spring said to be from Rama’s arrow' },
    history: ['Fortified by the Mysore Wodeyars; **Chikkadevaraja Wodeyar** captured it in 1696 and gave it the name “Devarayanadurga”.', 'The Narasimha temples are older — Hoysala/Vijayanagara style; the hill is one of the Nava Narasimha kshetras of the region.'],
    mustSee: ['**Yoganarasimha temple** on the summit — views over the plains', '**Namada Chilume** spring and deer park at the foot', 'The trek/road with hairpins; **Bhoganarasimha temple** in the village', 'Sunset from the rocks'],
    food: ['Tumakuru’s famous **tatte idli** on the highway'],
    culture: ['A popular Bengaluru day trip and trekking spot; Narasimha Jayanti draws pilgrims'],
    funFacts: ['Namada Chilume’s spring bubbles from a rock — legend says Rama shot an arrow to get water for his tilak (naama).', 'Tumakuru is “Kalpataru Nadu” — coconut country.'],
    tips: ['Go before 9 am; the temple road closes at dusk.']
  },
  {
    id: 'murudeshwar', name: 'Murudeshwar', kind: 'place', scope: 'domestic', country: 'India', state: 'Karnataka', parent: 'karnataka',
    lat: 14.09, lng: 74.49, emoji: '🔱', tagline: 'The giant Shiva by the Arabian Sea',
    glance: { 'District': 'Uttara Kannada', 'Shiva statue': '37 m — the second-tallest in the world', 'Gopura': '20 storeys, 72 m — lift to the top', 'Legend': 'A piece of the Gokarna Atmalinga', 'Also': 'Netrani island scuba diving' },
    history: ['Part of the **Gokarna legend** — Ravana, tricked out of the Atmalinga, flung its cloth cover here; it landed at Mrideshwara, now Murudeshwar.', 'The modern temple, statue (2006) and gopura were built by businessman R.N. Shetty on the ancient shrine site.'],
    mustSee: ['**The Shiva statue** on Kanduka hill, sea on three sides', '**Raja Gopura** lift — view over the coast', 'Beach and the cave museum telling the Atmalinga story', '**Netrani island** snorkelling / diving trip; Bhatkal’s old mosques'],
    food: ['Coastal fish thali; RNS Residency’s sea-view restaurant'],
    culture: ['Pilgrims and beach tourists in one spot; Shivaratri is huge'],
    funFacts: ['The statue was designed to have four arms but has two — the other two blew away in a storm during construction, and were never replaced.', 'The sun rises behind the statue and sets in front of it — photographers love the silhouette.'],
    tips: ['Weekdays are calmer; the gopura lift queue is short early morning.']
  },
  {
    id: 'somanathapura', name: 'Somanathapura', kind: 'place', scope: 'domestic', country: 'India', state: 'Karnataka', parent: 'karnataka',
    lat: 12.28, lng: 76.88, emoji: '🛕', tagline: 'The last, most complete Hoysala temple', aka: ['Somnathpur'],
    glance: { 'District': 'Mysuru', 'Temple': 'Chennakesava (Keshava), 1268 CE', 'Built by': 'Somanatha, a Hoysala commander', 'UNESCO': 'World Heritage 2023 (with Belur and Halebidu)', 'Plan': 'Three shrines (trikuta), star-shaped platform' },
    history: ['Built in **1268** under king Narasimha III — the final flowering of Hoysala art, 150 years after Belur.', 'Damaged by the Delhi Sultanate raids; the main idol is missing, so worship stopped — which is why it survived intact as a monument.'],
    mustSee: ['The **three vimanas** with the finest lathe-turned pillars and ceiling carvings', 'Walk the outer wall: Ramayana, Mahabharata and Bhagavata in friezes', 'The sculptors’ signatures (Mallitamma carved 40 pieces)', 'Combine with Talakadu and Shivanasamudra'],
    food: ['Mysuru is 35 km — eat there'],
    culture: ['A monument, not a living temple — no rituals, quiet lawns'],
    funFacts: ['The temple has 16 different ceiling designs, each a lotus variation.', 'It is the only Hoysala temple with all three towers still complete.'],
    tips: ['Morning light on the east; ASI ticket; a guide is worth it.']
  },
  {
    id: 'mekedatu', name: 'Mekedatu & Sangama', kind: 'place', scope: 'domestic', country: 'India', state: 'Karnataka', parent: 'karnataka',
    lat: 12.29, lng: 77.43, emoji: '🛶', tagline: 'Where the Kaveri squeezes through a goat’s leap', aka: ['Muthathi', 'Sangama'],
    glance: { 'District': 'Ramanagara', 'Meaning': 'Meke-datu = goat’s leap — the gorge is that narrow', 'Sangama': 'Confluence of Kaveri and Arkavathi', 'From Bengaluru': '~100 km', 'Muthathi': 'Riverside forest picnic spot, Anjaneya temple' },
    history: ['The gorge is carved through granite; legend says a goat (a form of Shiva) leapt across it while fleeing a tiger.', 'Muthathi is where Sita, in legend, lost her pearl (muthu) nose-ring in the river.', 'A proposed Mekedatu dam has been a Karnataka–Tamil Nadu dispute for decades.'],
    mustSee: ['**Sangama** — wade/coracle across the confluence, then the jeep to Mekedatu', '**The gorge** — the river roars through a 3 m gap', '**Muthathi** river bank and Anjaneya temple; the Kaveri Wildlife Sanctuary drive', 'Coracle rides; Chunchi falls nearby'],
    food: ['Bisi bele bath from the Sangama stalls; carry a picnic'],
    culture: ['A classic Bengaluru weekend outing — the Muthathi Anjaneya temple is 1,200 years old'],
    funFacts: ['The rocks at Mekedatu are polished into potholes by the whirlpools — hundreds of “goat leaps”.', 'Crocodiles and grizzled giant squirrels live in the Kaveri Wildlife Sanctuary here.'],
    tips: ['Never swim — the currents have taken lives; the jeep and coracle stop in monsoon spate.']
  },
  {
    id: 'kgf', name: 'Kolar Gold Fields (KGF)', kind: 'place', scope: 'domestic', country: 'India', state: 'Karnataka', parent: 'karnataka',
    lat: 12.96, lng: 78.27, emoji: '⛏️', tagline: 'A mining town 3 km deep', aka: ['Kolar Gold Fields'],
    glance: { 'District': 'Kolar', 'Mined': '1880–2001 by John Taylor & Co, then Bharat Gold Mines', 'Depth': 'Champion Reef shaft 3,200 m — one of the deepest in the world', 'Gold produced': '~800 tonnes over 120 years', 'Fame now': 'The KGF films' },
    history: ['Gold was dug here in Tipu’s time, but the modern mines began in **1880** under British firm John Taylor & Sons — “Little England” with clubs, golf and bungalows.', 'Asia’s first hydro-powered mine — electricity from Shivanasamudra (1902) via a 147 km line.', 'Nationalised in 1956; closed in **2001** as gold prices fell and depths rose; the 2018 KGF film made it famous again.'],
    mustSee: ['The **Champion Reef** headgear and the abandoned shafts (from outside)', '**Cyanide dumps** — the pale hills of tailings', 'The colonial **KGF Club**, St Michael’s church, the old cinema and bungalows', 'Kotilingeshwara temple (108 ft lingam) and Antara Gange caves nearby'],
    food: ['Kolar is known for its mangoes and tomatoes; Andhra-style meals on the highway'],
    culture: ['A Tamil-speaking town in Karnataka — the miners came from Tamil Nadu', 'Ghost-town atmosphere; the mines are still guarded'],
    funFacts: ['KGF miners worked at 55°C rock temperatures 3 km down.', 'The cyanide dumps show up as white patches on satellite images.', 'A physics lab in the mines detected cosmic-ray neutrinos in 1965 — a world first.'],
    tips: ['The mine area is restricted — see the headgear and dumps from the road; the club can be visited with permission.']
  },
  {
    id: 'mandaragiri', name: 'Mandaragiri Hill', kind: 'place', scope: 'domestic', country: 'India', state: 'Karnataka', parent: 'karnataka',
    lat: 13.14, lng: 77.05, emoji: '🪷', tagline: 'The peacock-feather Jain temple on a rock', aka: ['Basadi Betta', 'Mandaragiri Betta'],
    glance: { 'District': 'Tumakuru', 'Height': '~1,150 m, 435 steps', 'Temple': 'Guru Mandir (2015) — shaped like a pinchi (peacock-feather broom)', 'Basadis': '4 Jain temples, 12th–14th century, on top', 'From Bengaluru': '~60 km' },
    history: ['The hilltop basadis date from the **Hoysala** period; the Digambara monk Shanti Sagar Maharaj meditated here in the 20th century.', 'The 81 ft **Guru Mandir**, shaped like the peacock-feather pinchi Jain monks carry, was consecrated in 2015.'],
    mustSee: ['The **pinchi-shaped temple** at the foot, with a 21 ft Bahubali', 'The 435-step climb past the ancient **basadis** — Chandranatha, Parshwanatha', 'Views of the lake and the Tumakuru plains; a favourite sunrise trek'],
    food: ['Jain sattvic meals at the foot; tatte idli in Tumakuru'],
    culture: ['A quiet Jain pilgrimage that became a Bengaluru trekking spot'],
    funFacts: ['The pinchi temple is the only temple in the world shaped like a broom — and it is beautiful.', 'Mandaragiri is sometimes called Basadi Betta — hill of basadis.'],
    tips: ['Climb before 8 am; the rock heats fast. Shoes off at the top temples.']
  },

  /* ======================= TAMIL NADU additions ======================= */
  {
    id: 'hogenakkal', name: 'Hogenakkal Falls', kind: 'place', scope: 'domestic', country: 'India', state: 'Tamil Nadu', parent: 'tamilnadu',
    lat: 12.12, lng: 77.78, emoji: '💦', tagline: 'The Kaveri’s “smoking rocks” — coracles and fish fry',
    glance: { 'District': 'Dharmapuri', 'Meaning': 'Hoge (smoke) + kal (rock) in Kannada', 'River': 'Kaveri, entering Tamil Nadu', 'Famous for': 'Coracle rides, carbonatite rocks, fried fish', 'Best time': 'After monsoon (Jul–Oct) for water; Dec–Feb for rides' },
    history: ['The carbonatite rocks here are among the **oldest in the world** (~2.5 billion years).', 'A traditional place for post-monsoon bathing and “ilakalpani” (oil massage) for centuries.', 'The Hogenakkal drinking-water project (2013) now supplies Dharmapuri and Krishnagiri.'],
    mustSee: ['**Coracle ride** into the gorge and under the falls', 'The main falls from the bridge; the **Chinnaru** confluence', 'Fried Kaveri fish on the banks; the famous **oil massage** by the local masseurs', 'Mettur dam (50 km) downstream'],
    food: ['**Fresh fish fry** cooked in front of you on the rocks — the reason people come'],
    culture: ['Border town — Kannada and Tamil both spoken; the Karnataka bank is 200 m away'],
    funFacts: ['The spray from the falls looks like smoke — hence the name.', 'Hogenakkal is called the “Niagara of India”.'],
    tips: ['Coracles stop when the river is in spate; check before the 3-hour drive.']
  },
  {
    id: 'chidambaram', name: 'Chidambaram', kind: 'place', scope: 'domestic', country: 'India', state: 'Tamil Nadu', parent: 'tamilnadu',
    lat: 11.40, lng: 79.69, emoji: '🔱', icon: 'images/icon-nataraja.jpg', tagline: 'Nataraja’s cosmic dance and the secret of space',
    glance: { 'District': 'Cuddalore', 'Temple': 'Thillai Nataraja — Shiva as the dancer', 'Element': 'Akasha (space) of the Pancha Bhoota temples', 'Area': '40 acres, 4 gopurams with the 108 karanas of Bharatanatyam', 'Priests': 'The Dikshitars, a hereditary community' },
    history: ['One of the oldest Shiva temples, mentioned in Sangam-era Tamil; the **Cholas** were crowned here and gilded the roof.', 'The famous **Nataraja bronze** image originated here — the dance is the movement of the universe.', 'The Dikshitar priests won a 2014 Supreme Court case to keep managing the temple themselves.'],
    mustSee: ['**Chit Sabha** — the golden-roofed hall with the dancing Nataraja', 'The **Chidambara Rahasyam** — the curtain drawn to reveal empty space', 'The 108 **dance poses** carved on the east gopuram', 'Govindaraja Perumal shrine inside — Vishnu and Shiva under one roof', 'Pichavaram mangroves (15 km)'],
    food: ['Chidambaram’s temple prasadam; simple Cuddalore meals'],
    culture: ['Bharatanatyam dancers come to perform in the temple; Natyanjali festival in Feb/Mar', 'The Dikshitars, with their top-knots, are a 3,000-family community'],
    funFacts: ['The temple’s golden roof has 21,600 tiles — the number of breaths in a day — fixed with 72,000 nails, the number of nadis.', 'The Chidambaram secret is that god is formless space.'],
    tips: ['Evening pooja around 6 pm when the Chit Sabha curtain is drawn.']
  },
  {
    id: 'coimbatore', name: 'Coimbatore & Isha (Adiyogi)', kind: 'place', scope: 'domestic', country: 'India', state: 'Tamil Nadu', parent: 'tamilnadu',
    lat: 11.02, lng: 76.96, emoji: '🧘', tagline: 'Manchester of South India and the 112-ft Adiyogi', aka: ['Isha Yoga', 'Adiyogi', 'Kovai'],
    glance: { 'Famous for': 'Textiles, pumps, the Isha Yoga Centre and Adiyogi statue, Marudhamalai', 'Adiyogi': '112 ft steel bust, Guinness record (2017)', 'Isha': 'Velliangiri foothills, Dhyanalinga', 'Gateway to': 'Ooty, Valparai, Kodaikanal', 'Population': '~2.5 million' },
    history: ['A Kongu country town that boomed with **cotton mills** in the 1920s–30s — “Manchester of the South”.', 'The **Isha Foundation** (Sadhguru) built the Dhyanalinga (1999) and the Adiyogi statue (2017) at the foot of the Velliangiri hills.', 'Home of Siruthuli and the Kongu textile families; the pump industry supplies half of India.'],
    mustSee: ['**Adiyogi** — the 112 ft Shiva and the evening laser show', '**Dhyanalinga** and the Linga Bhairavi at Isha', '**Marudhamalai** Murugan hill temple', 'Perur Patteeswarar temple; the Gass Forest Museum', 'Siruvani falls and the sweetest water in India'],
    food: ['**Kongu meals** — arisi paruthi paal, kambu dosai, Annapoorna’s sambar', 'Coimbatore filter coffee; Sri Krishna Sweets’ Mysurpa'],
    culture: ['Kongu Tamil culture — entrepreneurial, understated', 'Isha draws visitors from 100 countries; Mahashivaratri here runs all night'],
    funFacts: ['The Adiyogi bust weighs 500 tonnes and represents the 112 ways to attain enlightenment.', 'Siruvani water is said to be the second sweetest in the world.'],
    tips: ['Isha: dress modestly, silence in the Dhyanalinga, the laser show is at 7 pm on weekends.']
  },
  {
    id: 'pichavaram', name: 'Pichavaram Mangroves', kind: 'place', scope: 'domestic', country: 'India', state: 'Tamil Nadu', parent: 'tamilnadu',
    lat: 11.43, lng: 79.79, emoji: '🌿', tagline: 'Rowing through the second-largest mangrove forest', aka: ['Kollidam'],
    glance: { 'District': 'Cuddalore', 'Area': '1,100 hectares, 4,400 canals', 'Species': 'Avicennia and Rhizophora mangroves; 200+ bird species', 'Between': 'Vellar and Kollidam (Coleroon) river mouths', 'Best time': 'Nov–Feb; morning rowboats' },
    history: ['The mangroves protected Pichavaram village in the **2004 tsunami** — the villages behind them survived while neighbours were flattened.', 'Kollidam is the Kaveri’s northern branch; the Grand Anicut splits it from the main river.', 'Tamil Nadu Forest dept has planted mangroves since the 1990s to restore the forest.'],
    mustSee: ['**Rowboat ride** through the narrow mangrove tunnels (motor boats only for the wide channels)', 'Bird-watching — pelicans, storks, herons, kingfishers', 'The Kollidam river mouth and the backwater village life', 'Chidambaram temple (15 km); Tharangambadi (50 km)'],
    food: ['Fresh prawns and crab from the estuary; Chidambaram hotels'],
    culture: ['Fishing villages — the Irula community; the “Kalki” film shot here'],
    funFacts: ['Pichavaram is one of the world’s largest mangrove forests after the Sundarbans.', 'The boatmen row through tunnels so narrow you must duck.'],
    tips: ['Take the rowboat, not the motor boat, and go at 7 am.']
  },
  {
    id: 'tharangambadi', name: 'Tharangambadi (Tranquebar)', kind: 'place', scope: 'domestic', country: 'India', state: 'Tamil Nadu', parent: 'tamilnadu',
    lat: 11.03, lng: 79.85, emoji: '🏰', tagline: 'The Danish fort on the “land of the singing waves”', aka: ['Tranquebar'],
    glance: { 'District': 'Mayiladuthurai', 'Danish colony': '1620–1845', 'Fort': 'Dansborg — the second-largest Danish fort in the world', 'Famous for': 'First Tamil printing press (1712), Ziegenbalg', 'Also': 'Ozone-rich beach, Masilamani Nathar temple (1306)' },
    history: ['**Denmark’s** trading post from 1620, bought from the Thanjavur Nayaks; sold to the British in 1845.', '**Bartholomäus Ziegenbalg**, a German missionary, printed the first Tamil New Testament here in 1715 — the first printing press in India for an Indian language.', 'The 2004 tsunami damaged the town; INTACH restored the Danish streets.'],
    mustSee: ['**Fort Dansborg** and its museum', 'The **Land Gate**, King’s Street and the restored Danish bungalows', 'Zion church (1701), New Jerusalem church, the Ziegenbalg museum', '**Masilamani Nathar** temple half-eaten by the sea; the beach with its “ozone” air'],
    food: ['The Bungalow on the Beach (Neemrana) for lunch; fish fry on the shore'],
    culture: ['A sleepy heritage town — Danish, Tamil and Lutheran layers'],
    funFacts: ['Tharangambadi means “place of the singing waves”.', 'The first Tamil dictionary and the first Tamil printed book came from here.'],
    tips: ['Dansborg museum closes on Fridays; the beach is best at sunrise.']
  },

  /* ======================= HIMACHAL addition ======================= */
  {
    id: 'hampta-pass', name: 'Hampta Pass', kind: 'place', scope: 'domestic', country: 'India', state: 'Himachal Pradesh', parent: 'himachal',
    lat: 32.26, lng: 77.37, emoji: '🏔️', tagline: 'Five days from Kullu’s green to Lahaul’s desert', aka: ['Chandratal'],
    glance: { 'Altitude': '4,270 m at the pass', 'Trek': '~26 km, 4–5 days from Jobra (Manali) to Chhatru', 'Grade': 'Moderate — the classic crossover trek', 'Ends at': 'Chandratal lake (4,300 m) by jeep', 'Season': 'Jun–Sep' },
    history: ['An ancient **shepherd route** — Gaddi shepherds still take flocks over the pass from Kullu into Lahaul each summer.', 'Named after Hampta village below Manali; became a popular trek in the 2010s.'],
    mustSee: ['**Jwara and Balu ka Ghera** campsites — meadows, wildflowers, the Hampta river', 'The **pass day** — snowfields, then the sudden brown of Lahaul’s Spiti side', '**Shea Goru** camp under the glacier; the river crossings', '**Chandratal** — the moon lake — on the last day', 'Rohtang and the Atal Tunnel on the drive back'],
    food: ['Trek food — dal, rice, Maggi, and the best chai at 4,000 m'],
    culture: ['Shared tents, camp fires and altitude headaches; leave-no-trace trekking'],
    funFacts: ['In one day you walk from lush pine forest to a landscape that looks like Ladakh.', 'Chandratal is a sacred lake in Buddhist legend — the place the Pandavas ascended to heaven, some say.'],
    tips: ['Acclimatise a day in Manali; book with a proper trek company (they arrange the Chhatru–Chandratal jeep).']
  },

  /* ======================= KARNATAKA additions (2) ======================= */
  {
    id: 'talakadu', name: 'Talakadu', kind: 'place', scope: 'domestic', country: 'India', state: 'Karnataka', parent: 'karnataka',
    lat: 12.19, lng: 77.03, emoji: '🏜️', tagline: 'Temples buried in sand on a bend of the Kaveri', aka: ['Talakad', 'Jaladhama'],
    glance: { 'District': 'Mysuru', 'River': 'Kaveri', 'Famous for': 'Sand-buried temples, the Panchalinga Darshana, the Alamelamma curse', 'Temples': 'Vaidyeshwara, Kirtinarayana and 30+ under the dunes', 'From Bengaluru': '~130 km; Jaladhama resort on the river' },
    history: ['Capital of the **Western Gangas** (4th–10th century), then held by Cholas, Hoysalas and Vijayanagara — once a city of 30 temples.', 'The **Alamelamma curse** (1610): the wife of the last Vijayanagara viceroy, hounded by the Mysore Wodeyars for her jewels, drowned herself in the Kaveri cursing “May Talakad turn to sand, Malangi become a whirlpool, and the Mysore kings never have heirs.”', 'Sand dunes did swallow the town from the 17th century; the ASI has been digging temples out since the 1990s.'],
    mustSee: ['**Vaidyeshwara temple** — Ganga-Chola, carved elephants and dwarapalas', '**Kirtinarayana temple**, excavated from the sand, and the dunes around it', 'The **Panchalinga Darshana** — five Shiva temples opened together once every few years (last 2019)', '**Jaladhama** river resort — coracles, bird-watching, New Year bonfires', 'Somanathapura (20 km) and Shivanasamudra (30 km)'],
    food: ['Riverside meals at the resort; Malavalli sugarcane juice and jaggery'],
    culture: ['The Mysore royal family still avoids Talakad; the curse is folk history in every Kannada home', 'Kaveri Sankramana bathing at the ghats'],
    funFacts: ['The sand hills stand up to 30 m high over what was a city.', 'Geologists blame a 14th-century dam at Madhavamantri for the sand, not the curse — the river dropped its silt here.', 'The Wodeyars adopted heirs for generations — the curse’s “proof”.'],
    tips: ['The temples are 1 km through soft sand — go early; the resort is on the Kaveri’s bank, 5 km away.']
  },
  {
    id: 'kabini', name: 'Kabini', kind: 'place', scope: 'domestic', country: 'India', state: 'Karnataka', parent: 'karnataka',
    lat: 11.97, lng: 76.34, emoji: '🐘', tagline: 'Elephants, leopards and the black panther of Nagarhole', aka: ['Nagarhole', 'Karapura'],
    glance: { 'District': 'Mysuru', 'Park': 'Nagarhole (Rajiv Gandhi) National Park, southern zone', 'Reservoir': 'Kabini backwaters (1974 dam)', 'Famous for': 'Asian elephant congregation, leopards, the black panther, boat safaris', 'Best time': 'Mar–Jun for the elephant gathering; Nov–Feb for weather' },
    history: ['**Nagarhole** was the Mysore Maharajas’ hunting forest; the Viceroy’s hunting lodge at Karapura is now the JLR resort.', 'The **Kabini dam** (1974) submerged villages and forest, but its receding backwater each summer creates grass banks where hundreds of elephants gather — the largest congregation of Asian elephants in the world.', 'Part of the Nilgiri Biosphere with Bandipur, Wayanad and Mudumalai — the tiger reserves all connect.'],
    mustSee: ['**Jeep safari** at dawn or dusk — tiger, leopard, dhole, gaur, sloth bear', '**Boat safari** on the backwaters — elephants bathing, crocodiles, ospreys', 'The **black panther** (a melanistic leopard) that made Kabini famous through Shaaz Jung’s photographs', 'Sunset over the reservoir; the Kaveri–Kabini confluence at T. Narasipura'],
    food: ['Resort buffets — JLR’s Kabini River Lodge, Evolve Back, Red Earth; wild-honey and ragi dishes'],
    culture: ['Jenu Kuruba (honey-gatherer) and Betta Kuruba tribes — the original forest people, now safari naturalists', 'The Kabini backwater villages were relocated in 1974; the old temple towers still poke out in summer'],
    funFacts: ['Nagarhole means “snake river” in Kannada, for the winding stream through the park.', 'The Kabini black panther, nicknamed Saya, has appeared on National Geographic and BBC.', 'Up to 400 elephants are seen on the Kabini banks in a single summer evening.'],
    tips: ['Safaris are run only by the Forest Dept / JLR — book resorts months ahead for Mar–May.', 'Carry binoculars; the boat safari is the best bet for elephants.']
  },

  /* ======================= ANDHRA PRADESH (3) ======================= */
  {
    id: 'gooty', name: 'Gooty Fort', kind: 'place', scope: 'domestic', country: 'India', state: 'Andhra Pradesh', parent: 'andhrapradesh',
    lat: 15.12, lng: 77.63, emoji: '🏰', tagline: 'Fifteen forts in one, on a bare Rayalaseema rock', aka: ['Gutti'],
    glance: { 'District': 'Anantapur', 'Height': '~300 m above the plain, 680 m ASL', 'Age': 'Kalyani Chalukya origins (11th c.), Vijayanagara and Maratha forts', 'Famous for': 'Ring of 15 interlinked forts, Murari Rao, Thomas Munro’s death', 'From Bengaluru': '~300 km on the Hyderabad highway' },
    history: ['One of the oldest hill forts in Andhra — mentioned in a 7th-century inscription; rebuilt by the **Vijayanagara** kings as a citadel on the Hampi–Penukonda road.', 'The Maratha chief **Murari Rao Ghorpade** held it from 1746 until Hyder Ali starved it out in 1776 — the garrison surrendered when the water ran dry.', 'Sir **Thomas Munro**, the great Madras governor and land-revenue reformer, died of cholera at Gooty in 1827; his grave is in the town.'],
    mustSee: ['The **climb** — hundreds of rock-cut steps through 15 gates to the topmost fort', '**Murari Rao’s seat** on the cliff edge, and the granaries and tanks cut into the rock', 'The views over the Rayalaseema plain and the railway junction below', 'Gandikota, Belum Caves and Penukonda on the same circuit'],
    food: ['Rayalaseema meals in Gooty town — ragi sangati and natu kodi'],
    culture: ['A railway-junction town whose fort is almost forgotten — you often have it to yourself'],
    funFacts: ['Gooty’s name comes from “Gutti”, a Telugu word for the rock; the British spelt it Gooty.', 'The fort had 15 forts, 15 gates and 15 water tanks — one ring inside another.', 'Thomas Munro’s ghost is said to ride the Gooty road on a white horse.'],
    tips: ['Start the climb early — no shade and no water sellers on the rock; sturdy shoes.']
  },

  /* ======================= SIKKIM (2) ======================= */
  {
    id: 'pelling', name: 'Pelling', kind: 'place', scope: 'domestic', country: 'India', state: 'Sikkim', parent: 'sikkim',
    lat: 27.30, lng: 88.24, emoji: '🌄', tagline: 'Kangchenjunga at breakfast and the Sky Walk',
    glance: { 'District': 'Gyalshing (West Sikkim)', 'Altitude': '2,150 m', 'Famous for': 'Kangchenjunga panorama, Pemayangtse monastery, Rabdentse ruins, Chenrezig Sky Walk', 'Best time': 'Oct–Dec, Mar–May', 'From Gangtok': '~115 km, 5 hours' },
    history: ['**Pemayangtse** (1705) is one of Sikkim’s oldest and most important monasteries — only “pure” Bhutia monks were admitted, and it crowned the Chogyals.', '**Rabdentse**, in the forest below, was Sikkim’s second capital (1670–1814) until Gurkha raids drove the court to Tumlong.', 'A sleepy village that became a tourist town in the 1990s for one reason: the mountain view.'],
    mustSee: ['**Kangchenjunga sunrise** from the hotel balcony — the whole range fills the sky', '**Pemayangtse monastery** and the wooden Zangdok Palri model', '**Rabdentse ruins** — a forest walk to the old palace', '**Chenrezig statue and Sky Walk** (glass) at Sanga Choeling', '**Khecheopalri lake**, the wish-fulfilling lake; Kanchenjunga falls; Singshore bridge'],
    food: ['Momos, thukpa, sel roti; Sikkimese thali at the homestays'],
    culture: ['Bhutia and Lepcha heartland — prayer wheels line the road'],
    funFacts: ['Pelling is often called the “Kangchenjunga viewpoint of Sikkim” — the mountain is closer here than from Gangtok.', 'The Chenrezig statue at Sanga Choeling is 42 m tall.'],
    tips: ['Only the first clear morning matters — set the alarm for 5:30; clouds arrive by 9.']
  },
  {
    id: 'ravangla', name: 'Ravangla', kind: 'place', scope: 'domestic', country: 'India', state: 'Sikkim', parent: 'sikkim',
    lat: 27.31, lng: 88.36, emoji: '🧘', tagline: 'The giant Buddha of Tathagata Tsal', aka: ['Ravengala', 'Rabong'],
    glance: { 'District': 'Namchi (South Sikkim)', 'Altitude': '2,100 m', 'Famous for': 'Buddha Park (Tathagata Tsal), Ralang monastery, Maenam hill', 'Buddha statue': '39 m, unveiled 2013 by the Dalai Lama', 'Between': 'Gangtok and Pelling' },
    history: ['The **Buddha Park** was built for the 2,550th birth anniversary of the Buddha (2006–13) and holds relics inside the statue.', '**Ralang monastery** (Kagyu) dates from 1768; the new Ralang (Palchen Choeling) is a grand modern gompa.', 'Ravangla was a small trade halt on the Gangtok–West Sikkim road, known for its Tibetan carpet weavers.'],
    mustSee: ['**Buddha Park** — the 39 m gilded Buddha against the Kangchenjunga range', '**Ralang monastery** — the Pang Lhabsol and Kagyed dances', '**Maenam hill** trek (3,200 m) through rhododendron forest', 'Temi tea garden — Sikkim’s only tea estate — on the way to Namchi', 'Namchi’s Char Dham and the Samdruptse Guru Padmasambhava statue (45 m)'],
    food: ['Temi tea; momos and chhurpi (yak cheese) snacks in the bazaar'],
    culture: ['The Pang Lhabsol festival worships Kangchenjunga as Sikkim’s guardian deity'],
    funFacts: ['The Buddha statue contains sacred relics gifted by monasteries across Asia.', 'Ravangla’s Tibetan carpet factory still weaves by hand for export.'],
    tips: ['The Buddha Park is best in the late afternoon light; combine Ravangla with Temi and Namchi.']
  }
);
