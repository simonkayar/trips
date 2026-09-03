# Trips & Tours — family travel journal (static site)

A no-build static website: plain HTML/CSS/JS reading from `data/*.js`.
Hosted (later) by FTP at `simonkayar.com/sites/trips` — so **all paths are relative** and
nothing may depend on a server-side language or a build step.

## Run locally
- Double-click `serve.bat` (starts `python -m http.server 8765` and opens the browser), or
  open `index.html` directly. Maps need `http://` for the Leaflet tiles.

## Layout
| File | What it does |
|---|---|
| `index.html`, `js/home.js` | Landing page: stats, trips abroad, recently added |
| `destinations.html`, `js/destinations.js` | Searchable list grouped by country/state |
| `place.html?id=<id>`, `js/place.js` | The one-page **mind map** for any country / state / place |
| `maps.html`, `js/maps.js` | World map (international) + India map (domestic), Leaflet from cdnjs |
| `quiz.html`, `js/quiz.js` | Quiz; remembers seen question ids in `localStorage` |
| `slideshow.html`, `js/slideshow.js` | Random destinations auto-advancing |
| `journal.html`, `js/journal.js` | Memory log from `data/notes.js` + browser-local quick notes |
| `js/loader.js` | Creates `window.TRIPS` and loads every data file (edit the list to add a data file) |
| `js/app.js` | Shared helpers, question generation, header/footer |
| `data/places-*.js` | Destination content (see schema below) |
| `data/questions-*.js` | Hand-written quiz questions |
| `data/trips.js` | Dated trips (mainly international) |
| `data/notes.js` | Journal entries |
| `data/photos.js` | **Generated** by `tools/scan_photos.py` — never edit by hand |
| `photos/<place-id>/` | Drop photos here (optional `captions.txt`: `file.jpg | caption`) |
| `data/images.js`, `images/<id>.jpg` | One "realistic" picture per place, **generated** by `tools/fetch_images.py` (Wikipedia lead image + credit); flags in `images/flags/` |
| `data/facts-*.js` | Extra fun facts per place (`TRIPS.extraFacts[id] = [...]`), merged into the paged "Fun facts" box |
| `data/collections.js` | Themed collections (home-page tiles + destination filters) — lists of place ids |
| `data/maps-svg.js` | **Generated** by `tools/build_maps.py` — SVG outlines for the cartoon locator maps (only place.html loads it) |

## Adding a new place (the usual request)
1. Pick the data file by region (`places-karnataka.js`, `places-tamilnadu.js`,
   `places-kerala-ap-ts.js`, `places-others.js`, `places-international.js`). A new
   state/country needs a **hub** entry (`kind: 'state'` or `'country'`, `parent: 'india'`
   for Indian states) before its places.
2. Append a place object. Required: `id` (kebab-case, unique), `name`, `kind: 'place'`,
   `scope` (`'domestic'` | `'international'`), `country`, `state` (domestic only), `parent`
   (hub id), `lat`, `lng`, `emoji`, `tagline`. Content sections (all arrays of strings,
   `**bold**` allowed for a lead-in word): `history`, `mustSee`, `food`, `culture`,
   `funFacts`, `tips`; plus `glance` — an object of label → value. Optional `visited`
   (e.g. `'Dec 2024'`) and `aka: []` alternate spellings for search.
   International places usually carry `visited` on the place too.
3. Add 4–8 questions to the matching `questions-*.js`:
   `{ id: '<place>-<n>', place: '<id>', q, a: [4 options], correct: <index>, why }`.
   Keep facts verifiable; the `why` line is shown after answering.
4. For a dated trip, add/extend an entry in `data/trips.js` (`places` lists hub + places).
5. Photos: create `photos/<id>/`, copy pictures, run `python tools/scan_photos.py`
   (and `py -3.10 tools/shrink_photos.py` first if they are big phone originals).
   **A photo dropped into the folder is invisible until scan_photos.py has run** —
   the static site cannot list directories.
6. Picture: add the place to `TITLES` in `tools/fetch_images.py` (a list of Wikipedia
   article titles to try), run `python tools/fetch_images.py <id>`, then
   `py -3.10 tools/shrink_images.py <id>`. Flags (`FLAG_ISO`) only for country hubs.
7. Add 5–8 extra facts to the matching `data/facts-*.js`, and add the id to any
   fitting collections in `data/collections.js`.
8. Nothing else needs touching — every page reads the data at load time.

## Conventions
- Facts matter: this is a quiz. Prefer well-known, checkable facts; avoid guesses.
- Ids of hubs already in use: `india`, `karnataka`, `tamilnadu`, `puducherry`, `kerala`,
  `andhrapradesh`, `telangana`, `maharashtra`, `madhyapradesh`, `rajasthan`, `odisha`,
  `uttarpradesh`, `delhi-nct`, `uttarakhand`, `himachal`, `chandigarh-ut`, `thailand`,
  `indonesia`, `switzerland`, `france`. Singapore is a place with no hub.
- Lepakshi is filed under Andhra Pradesh (it is in AP, not Karnataka).
- Quiz question ids must be unique and stable — the browser stores which ids were seen.
- The quiz must not show the place name before the answer (it gives away "which city is
  in X" questions); it is revealed with the explanation.
- Wikimedia rate-limits: `fetch_images.py` identifies itself and waits between requests;
  do not remove the pauses. Flag/map/SVG lead images are rejected automatically.
- Windows cannot render flag emoji — use flag PNGs (`TRIPS.flags`) or ordinary emoji.
- Python: the machine's `py -3.10` already has Pillow; do not create a venv just for it.
- Keep the warm "paper journal" look: colours and components live in `css/style.css`.
- No frameworks, no build tools, no Node. Python 3 only for the helper scripts.

## Deploying
`python tools/deploy_ftp.py` uploads changed files to
`/domains/simonkayar.com/public_html/trips` → https://simonkayar.com/trips/ .
FTP credentials live **outside the project** in `C:\Users\simon\.secrets\trips-ftp.txt`
(never copy them into the repo). GitHub: https://github.com/simonkayar/trips — commit
and push after each change; update `Chat_Summary.txt` / `Project_Summary.txt` too.
