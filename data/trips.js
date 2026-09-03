/* ------------------------------------------------------------------
   trips.js — dated trips. `places` lists the ids (from places-*.js) that
   were part of the trip; the first id is used for "when did we visit …"
   quiz questions. `date` (YYYY-MM) is only used for sorting.
   ------------------------------------------------------------------ */
TRIPS.trips.push(
  {
    id: 'thailand-2024', title: 'Thailand', when: 'June 2024', date: '2024-06', emoji: '🐘',
    places: ['thailand', 'bangkok', 'phuket'],
    summary: 'Temples and street food in Bangkok, then beaches and island hopping around Phuket.'
  },
  {
    id: 'singapore-2024', title: 'Singapore', when: 'Dec 2024', date: '2024-12', emoji: '🦁',
    places: ['singapore'],
    summary: 'A year-end city break: Gardens by the Bay, Sentosa, Marina Bay and a lot of hawker food.'
  },
  {
    id: 'indonesia-2025', title: 'Indonesia', when: 'June 2025', date: '2025-06', emoji: '🌋',
    places: ['indonesia', 'borobudur', 'prambanan', 'bali'],
    summary: 'Sunrise at Borobudur, the Hindu temples of Prambanan, then rice terraces and beaches in Bali.'
  },
  {
    id: 'europe-2026', title: 'Switzerland & Paris', when: 'June 2026', date: '2026-06', emoji: '⛰️',
    places: ['switzerland', 'zurich', 'lucerne', 'interlaken', 'france', 'paris'],
    summary: 'Lakes and Alps across Zurich, Lucerne and Interlaken, finishing with a few days in Paris.'
  }
);
