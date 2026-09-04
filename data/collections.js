/* ------------------------------------------------------------------
   collections.js — themed groups shown on the home page and as filters on the
   destinations page. `ids` are place ids; order = display order.
   To add a place to a collection, just add its id here.
   ------------------------------------------------------------------ */
TRIPS.collections = [
  {
    id: 'murugan', title: 'Six Abodes of Murugan', emoji: '🪶', blurb: 'Arupadai Veedu — all six, ticked off.',
    ids: ['thiruparankundram', 'tiruchendur', 'palani', 'swamimalai', 'thiruthani', 'pazhamudircholai']
  },
  {
    id: 'temples', title: 'Temples & shrines', emoji: '🛕', blurb: 'From Hoysala lace-work to Prambanan and Borobudur.',
    ids: ['madurai', 'thanjavur', 'rameswaram', 'tirupati', 'hampi', 'belur', 'halebidu', 'udupi', 'sringeri', 'kukke-subramanya',
      'melukote', 'bhoga-nandeeshwara', 'gokarna', 'shravanabelagola', 'kanchipuram', 'trichy', 'mahabalipuram', 'lepakshi',
      'puri', 'konark', 'bhubaneswar', 'shirdi', 'velankanni', 'sanchi', 'prambanan', 'borobudur', 'bangkok', 'bali',
      'thiruparankundram', 'tiruchendur', 'palani', 'swamimalai', 'thiruthani', 'pazhamudircholai',
      'chidambaram', 'murudeshwar', 'somanathapura', 'coimbatore', 'devarayanadurga', 'mandaragiri', 'gangtok', 'talakadu']
  },
  {
    id: 'abroad', title: 'Countries & cities abroad', emoji: '✈️', blurb: 'From Singapore and Bali to the Grand Canyon, the Great Wall and Paris.',
    ids: ['singapore', 'bangkok', 'phuket', 'borobudur', 'prambanan', 'bali', 'zurich', 'lucerne', 'interlaken', 'paris',
      'grand-canyon', 'las-vegas', 'niagara-falls', 'new-york', 'san-diego', 'beijing', 'gumi']
  },
  {
    id: 'treks', title: 'Treks & hikes', emoji: '🥾', blurb: 'Where we earned the view on foot.',
    ids: ['hampta-pass', 'gumi', 'nandi-hills', 'kukke-subramanya', 'chikkamagaluru', 'devarayanadurga', 'mandaragiri', 'wayanad', 'grand-canyon', 'kodaikanal', 'yelagiri']
  },
  {
    id: 'beaches', title: 'Beaches, islands & coasts', emoji: '🏖️', blurb: 'Andaman sands to the three seas at Kanyakumari.',
    ids: ['phuket', 'bali', 'gokarna', 'udupi', 'mangalore', 'kanyakumari', 'dhanushkodi', 'rameswaram', 'pondicherry',
      'mahabalipuram', 'kochi', 'alleppey', 'chilika', 'puri', 'konark', 'mumbai', 'singapore', 'tiruchendur',
      'goa', 'murudeshwar', 'san-diego', 'tharangambadi', 'pichavaram']
  },
  {
    id: 'hills', title: 'Hill stations & mountains', emoji: '⛰️', blurb: 'Tea, mist, toy trains and the Alps.',
    ids: ['ooty', 'kodaikanal', 'munnar', 'coorg', 'chikkamagaluru', 'wayanad', 'yercaud', 'yelagiri', 'nandi-hills',
      'lonavala', 'mussoorie', 'shimla', 'kufri', 'manali', 'interlaken', 'lucerne', 'darjeeling', 'gangtok', 'hampta-pass', 'devarayanadurga']
  },
  {
    id: 'forts', title: 'Forts & palaces', emoji: '🏰', blurb: 'Where kings, sultans and maharanas lived and fought.',
    ids: ['mysuru', 'srirangapatna', 'chitradurga', 'hampi', 'vellore', 'kumbhalgarh', 'jaipur', 'udaipur', 'agra',
      'delhi', 'hyderabad', 'aurangabad', 'lonavala', 'bangkok', 'gandikota', 'tharangambadi', 'beijing', 'goa', 'devarayanadurga']
  },
  {
    id: 'unesco', title: 'UNESCO World Heritage', emoji: '🏛️', blurb: 'The places the whole world agrees are special.',
    ids: ['hampi', 'belur', 'halebidu', 'thanjavur', 'mahabalipuram', 'ooty', 'ellora', 'ajanta', 'bhimbetka', 'sanchi',
      'jaipur', 'kumbhalgarh', 'konark', 'agra', 'delhi', 'mumbai', 'shimla', 'chandigarh', 'borobudur', 'prambanan',
      'bali', 'singapore', 'paris', 'grand-canyon', 'new-york', 'beijing', 'darjeeling', 'somanathapura', 'goa']
  },
  {
    id: 'ancient', title: 'Ancient marvels', emoji: '🗿', blurb: 'Older than a thousand years — caves, stupas and rock art.',
    ids: ['bhimbetka', 'sanchi', 'ajanta', 'ellora', 'mahabalipuram', 'kanchipuram', 'bhoga-nandeeshwara', 'shravanabelagola',
      'thanjavur', 'bhubaneswar', 'trichy', 'borobudur', 'prambanan', 'thiruparankundram', 'wayanad', 'belum-caves', 'chidambaram', 'beijing', 'talakadu']
  },
  {
    id: 'water', title: 'Waterfalls, lakes & rivers', emoji: '💦', blurb: 'Backwaters, alpine lakes and the roar of the Kaveri.',
    ids: ['shivanasamudra', 'alleppey', 'chilika', 'dandeli', 'coorg', 'chikkamagaluru', 'kodaikanal', 'ooty', 'wayanad',
      'bhopal', 'udaipur', 'rishikesh', 'interlaken', 'lucerne', 'zurich', 'kochi', 'niagara-falls', 'hogenakkal', 'mekedatu', 'gandikota', 'hampta-pass', 'pichavaram']
  },
  {
    id: 'wildlife', title: 'Wildlife & nature', emoji: '🐘', blurb: 'Hornbills, tahr, dolphins and vultures.',
    ids: ['kabini', 'dandeli', 'coorg', 'munnar', 'wayanad', 'chilika', 'ramanagara', 'kufri', 'mysuru', 'singapore', 'bali', 'dehradun', 'srirangapatna', 'pichavaram', 'san-diego', 'mekedatu', 'darjeeling']
  },
  {
    id: 'pilgrim', title: 'Pilgrim trails', emoji: '🙏', blurb: 'Char Dham corners, Sai Baba, Velankanni and more.',
    ids: ['tirupati', 'rameswaram', 'puri', 'shirdi', 'velankanni', 'kanyakumari', 'rishikesh', 'kukke-subramanya',
      'sringeri', 'udupi', 'shravanabelagola', 'melukote', 'madurai', 'kanchipuram', 'sanchi', 'palani']
  },
  {
    id: 'food', title: 'Food towns', emoji: '🍛', blurb: 'Where the eating was half the trip.',
    ids: ['udupi', 'mangalore', 'madurai', 'hyderabad', 'mumbai', 'delhi', 'kochi', 'mysuru', 'coorg', 'agra', 'lonavala',
      'bangkok', 'singapore', 'paris', 'zurich']
  },
  {
    id: 'rides', title: 'Rides & journeys', emoji: '🚂', blurb: 'Toy trains, houseboats, rafts and cogwheels.',
    ids: ['ooty', 'shimla', 'alleppey', 'dandeli', 'rishikesh', 'rameswaram', 'chilika', 'kochi', 'lucerne', 'interlaken', 'nandi-hills', 'kufri', 'darjeeling', 'niagara-falls', 'hogenakkal', 'pichavaram', 'mekedatu']
  },
  {
    id: 'cities', title: 'Big cities', emoji: '🏙️', blurb: 'Skylines, bazaars and metro maps.',
    ids: ['mumbai', 'delhi', 'hyderabad', 'jaipur', 'kochi', 'mysuru', 'bhopal', 'bhubaneswar', 'chandigarh', 'bangkok', 'singapore', 'zurich', 'paris', 'new-york', 'las-vegas', 'beijing', 'coimbatore']
  }
];
