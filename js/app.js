/* ------------------------------------------------------------------
   app.js — shared helpers used by every page.
   Loaded after loader.js (so all data files are already in window.TRIPS).
   ------------------------------------------------------------------ */
(function () {
  var T = window.TRIPS;

  /* ---------- tiny DOM / utility helpers ---------- */
  window.$ = function (sel, root) { return (root || document).querySelector(sel); };
  window.$$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };
  T.esc = function (s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  };
  T.shuffle = function (arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  };
  T.sample = function (arr, n) { return T.shuffle(arr).slice(0, n); };
  T.pick = function (arr) { return arr[Math.floor(Math.random() * arr.length)]; };
  T.uniq = function (arr) { return arr.filter(function (v, i, a) { return v && a.indexOf(v) === i; }); };
  T.param = function (name) {
    var m = new RegExp('[?&]' + name + '=([^&]*)').exec(location.search);
    return m ? decodeURIComponent(m[1].replace(/\+/g, ' ')) : null;
  };
  T.store = {
    get: function (k, def) { try { var v = localStorage.getItem(k); return v == null ? def : JSON.parse(v); } catch (e) { return def; } },
    set: function (k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* private mode etc. */ } }
  };
  T.toast = function (msg) {
    var el = $('#toast');
    if (!el) { el = document.createElement('div'); el.id = 'toast'; el.className = 'toast'; document.body.appendChild(el); }
    el.textContent = msg; el.classList.add('show');
    clearTimeout(T._toastTimer);
    T._toastTimer = setTimeout(function () { el.classList.remove('show'); }, 2200);
  };

  /* ---------- data accessors ---------- */
  T.byId = function (id) {
    if (!T._index) {
      T._index = {};
      T.places.forEach(function (p) { T._index[p.id] = p; });
    }
    return T._index[id] || null;
  };
  T.leaves = function () { return T.places.filter(function (p) { return p.kind === 'place'; }); };
  T.hubs = function () { return T.places.filter(function (p) { return p.kind !== 'place'; }); };
  T.children = function (id) { return T.places.filter(function (p) { return p.parent === id; }); };
  T.hubOf = function (p) { return p && p.parent ? T.byId(p.parent) : null; };
  // every trip that included this place, oldest first. A place counts only when the
  // trip lists it directly; a hub (country/state) also rolls up its children's trips.
  T.tripsOf = function (p) {
    if (!p) return [];
    var kids = p.kind === 'place' ? [] : T.children(p.id).map(function (c) { return c.id; });
    return T.trips.filter(function (t) {
      if (t.places.indexOf(p.id) >= 0) return true;
      for (var i = 0; i < kids.length; i++) if (t.places.indexOf(kids[i]) >= 0) return true;
      return false;
    }).sort(function (a, b) { return (a.date || '').localeCompare(b.date || ''); });
  };
  T.tripOf = function (p) { var ts = T.tripsOf(p); return ts.length ? ts[ts.length - 1] : null; };
  T.visitedLabel = function (p) {
    if (!p) return '';
    if (p.visited) return p.visited;
    var hub = T.hubOf(p);
    if (hub && hub.visited) return hub.visited;
    return T.uniq(T.tripsOf(p).map(function (t) { return t.when; })).join(' · ');
  };
  T.locationLabel = function (p) {
    if (p.kind === 'country') return 'Country';
    if (p.kind === 'state') return 'State of India';
    if (p.scope === 'domestic') return (p.state ? p.state + ', ' : '') + 'India';
    return p.country || '';
  };
  T.scopeTag = function (p) {
    return p.scope === 'international'
      ? '<span class="tag intl">International</span>'
      : '<span class="tag dom">Domestic</span>';
  };
  T.mapsLink = function (p) {
    return 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(p.name + (p.scope === 'domestic' ? ', India' : ', ' + (p.country || '')));
  };

  /* ---------- photos ---------- */
  T.photosOf = function (id) {
    var list = T.photos[id] || [];
    return list.map(function (x) {
      return typeof x === 'string' ? { src: x, caption: '' } : x;
    });
  };
  T.coverPhoto = function (p) {
    var own = T.photosOf(p.id);
    if (own.length) return own[0].src;
    var kids = T.children(p.id);
    for (var i = 0; i < kids.length; i++) {
      var k = T.photosOf(kids[i].id);
      if (k.length) return k[0].src;
    }
    return T.picture(p);
  };

  /* ---------- representative pictures (tools/fetch_images.py) and flags ---------- */
  T.images = T.images || {};
  T.flags = T.flags || {};
  T.picture = function (p) { var i = p && T.images[p.id]; return i ? i.src : null; };
  T.pictureCredit = function (p) { var i = p && T.images[p.id]; return i ? i : null; };
  // the "realistic" picture first; our own photo if there is no picture; else nothing
  T.heroImage = function (p) { return T.picture(p) || (T.photosOf(p.id)[0] || {}).src || null; };

  /* ---------- extra fun facts (data/facts-*.js) are merged into each place ---------- */
  T.extraFacts = T.extraFacts || {};
  T.places.forEach(function (p) {
    var x = T.extraFacts[p.id];
    if (x && x.length) p.funFacts = (p.funFacts || []).concat(x);
  });

  /* ---------- collections (data/collections.js) ---------- */
  T.collections = T.collections || [];
  T.collectionById = function (id) { return T.collections.filter(function (c) { return c.id === id; })[0] || null; };
  T.collectionPlaces = function (c) { return c.ids.map(T.byId).filter(Boolean); };
  T.photoCount = function () {
    var n = 0;
    Object.keys(T.photos).forEach(function (k) { n += (T.photos[k] || []).length; });
    return n;
  };

  /* ---------- visuals ---------- */
  var GRADIENTS = [
    'linear-gradient(135deg,#0f6e6e,#4fb3a9)', 'linear-gradient(135deg,#c9553d,#e9a17c)',
    'linear-gradient(135deg,#d9a441,#f2d28a)', 'linear-gradient(135deg,#6f8f6a,#a9c5a1)',
    'linear-gradient(135deg,#3b4d8a,#7c8fd1)', 'linear-gradient(135deg,#7a4b8a,#c08ad0)',
    'linear-gradient(135deg,#2a6f97,#61a5c2)', 'linear-gradient(135deg,#9a6d17,#d9a441)'
  ];
  T.gradientFor = function (p) {
    var h = 0, s = p.id || '';
    for (var i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
    return GRADIENTS[h % GRADIENTS.length];
  };
  T.destCardHTML = function (p) {
    var cover = T.coverPhoto(p);
    var style = cover ? 'background-image:url(\'' + T.esc(cover) + '\')' : 'background:' + T.gradientFor(p);
    var visited = T.visitedLabel(p);
    return '<a class="card dest-card" href="place.html?id=' + encodeURIComponent(p.id) + '">' +
      '<div class="cover' + (cover ? ' has-photo' : '') + '" style="' + style + '"><span>' + (p.emoji || '📍') + '</span></div>' +
      '<div class="body"><div class="name">' + T.esc(p.name) + '</div>' +
      '<div class="sub">' + T.esc(p.tagline || T.locationLabel(p)) + '</div>' +
      '<div class="meta">' + T.scopeTag(p) + '<span>' + T.esc(visited) + '</span></div></div></a>';
  };

  /* ---------- quiz question pool ---------- */
  // Hand-written questions live in data/questions-*.js. On top of those we
  // generate a large set of structural questions from the place data itself,
  // so the pool is big enough that repeats are rare.
  function mk(id, p, q, correct, distractors, why) {
    var opts = T.shuffle([correct].concat(distractors.slice(0, 3)));
    return { id: id, place: p.id, scope: p.scope, q: q, a: opts, correct: opts.indexOf(correct), why: why, gen: true };
  }
  T.generatedQuestions = function () {
    if (T._gen) return T._gen;
    var out = [];
    var leaves = T.leaves();
    var dom = leaves.filter(function (p) { return p.scope === 'domestic'; });
    var intl = leaves.filter(function (p) { return p.scope === 'international'; });
    var states = T.uniq(dom.map(function (p) { return p.state; }));
    var countries = T.uniq(intl.map(function (p) { return p.country; }));
    var extraStates = ['Gujarat', 'West Bengal', 'Goa', 'Assam', 'Bihar', 'Punjab', 'Jharkhand', 'Chhattisgarh'];
    var extraCountries = ['Malaysia', 'Vietnam', 'Japan', 'Italy', 'Austria', 'Germany', 'Sri Lanka', 'Nepal', 'Australia'];

    dom.forEach(function (p) {
      if (!p.state) return;
      var d = T.sample(T.uniq(states.concat(extraStates)).filter(function (s) { return s !== p.state; }), 3);
      out.push(mk('gen-state-' + p.id, p, 'Which Indian state is ' + p.name + ' in?', p.state, d, p.name + ' is in ' + p.state + '.'));
    });
    intl.forEach(function (p) {
      if (!p.country || p.country === p.name) return;
      var d = T.sample(T.uniq(countries.concat(extraCountries)).filter(function (c) { return c !== p.country; }), 3);
      out.push(mk('gen-country-' + p.id, p, 'Which country is ' + p.name + ' in?', p.country, d, p.name + ' is in ' + p.country + '.'));
    });
    leaves.forEach(function (p) {
      if (!p.tagline) return;
      var pool = leaves.filter(function (o) { return o.scope === p.scope && o.id !== p.id; });
      out.push(mk('gen-tag-' + p.id, p, 'Which place we visited is described as "' + p.tagline + '"?', p.name,
        T.sample(pool, 3).map(function (o) { return o.name; }), p.name + ' — ' + p.tagline + '.'));
    });
    T.hubs().forEach(function (hub) {
      var kids = T.children(hub.id).filter(function (c) { return c.kind === 'place'; });
      if (!kids.length) return;
      var others = leaves.filter(function (o) { return o.scope === hub.scope && o.parent !== hub.id; });
      kids.forEach(function (c) {
        if (others.length < 3) return;
        out.push(mk('gen-in-' + c.id, c, 'Which of these places is in ' + hub.name + '?', c.name,
          T.sample(others, 3).map(function (o) { return o.name; }), c.name + ' is in ' + hub.name + '.'));
      });
    });
    T.trips.forEach(function (t) {
      var m = /(\d{4})/.exec(t.when || '');
      if (!m || !t.places.length) return;
      var y = m[1];
      var p = T.byId(t.places[0]);
      if (!p) return;
      var yrs = [];
      for (var i = 2018; i <= 2027; i++) if (String(i) !== y) yrs.push(String(i));
      out.push(mk('gen-year-' + t.id, p, 'In which year did we visit ' + t.title + '?', y, T.sample(yrs, 3), 'We visited ' + t.title + ' in ' + t.when + '.'));
      if (T.trips.length >= 4) {
        var whens = T.uniq(T.trips.map(function (o) { return o.when; })).filter(function (w) { return w !== t.when; });
        if (whens.length >= 3) out.push(mk('gen-when-' + t.id, p, 'When did we go on our ' + t.title + ' trip?', t.when, T.sample(whens, 3), 'The ' + t.title + ' trip was in ' + t.when + '.'));
      }
    });
    T._gen = out;
    return out;
  };
  T.allQuestions = function () {
    if (T._all) return T._all;
    var hand = T.questions.map(function (q) {
      var p = T.byId(q.place);
      return { id: q.id, place: q.place, scope: p ? p.scope : 'domestic', q: q.q, a: q.a, correct: q.correct, why: q.why || '' };
    });
    T._all = hand.concat(T.generatedQuestions());
    return T._all;
  };
  T.questionsFor = function (scope, placeId) {
    return T.allQuestions().filter(function (q) {
      if (scope && scope !== 'both' && q.scope !== scope) return false;
      if (placeId) {
        var p = T.byId(q.place);
        if (!(q.place === placeId || (p && p.parent === placeId))) return false;
      }
      return true;
    });
  };

  /* ---------- notes ---------- */
  // Fetch the family's live notes from api/journal.php (PHP on the host) and merge
  // them into T.notes. cb(data) on success, cb(null) if the API is unreachable
  // (file://, local static server, host down) — pages then just use data/notes.js.
  T.loadServerNotes = function (cb) {
    if (!window.fetch || location.protocol === 'file:') { cb(null); return; }
    fetch('api/journal.php?action=list', { cache: 'no-store' }).then(function (r) { return r.ok ? r.json() : null; }).then(function (d) {
      if (!d || !d.ok) { cb(null); return; }
      var have = {};
      T.notes.forEach(function (n) { if (n.id) have[n.id] = 1; });
      (d.notes || []).forEach(function (n) { if (!have[n.id]) T.notes.push(n); });
      cb(d);
    }).catch(function () { cb(null); });
  };
  T.notesFor = function (placeId) {
    var kids = T.children(placeId).map(function (c) { return c.id; });
    return T.notes.filter(function (n) { return n.place === placeId || kids.indexOf(n.place) >= 0; });
  };

  /* ---------- page chrome (header + footer) ---------- */
  var NAV = [
    ['index.html', 'Home', 'home'], ['destinations.html', 'Destinations', 'destinations'],
    ['maps.html', 'Maps', 'maps'], ['quiz.html', 'Quiz', 'quiz'],
    ['slideshow.html', 'Slideshow', 'slideshow'], ['album.html', 'Album', 'album'], ['journal.html', 'Journal', 'journal']
  ];
  function renderChrome() {
    var active = document.body.getAttribute('data-page') || '';
    var h = $('#site-header');
    if (h) {
      h.className = 'site-header';
      h.innerHTML = '<div class="wrap"><a class="brand" href="index.html"><span class="logo">🧳</span>Trips &amp; Tours</a>' +
        '<button class="nav-toggle" aria-label="Menu">☰</button><nav class="nav">' +
        NAV.map(function (n) { return '<a href="' + n[0] + '"' + (n[2] === active ? ' class="active"' : '') + '>' + n[1] + '</a>'; }).join('') +
        '</nav></div>';
      $('.nav-toggle', h).addEventListener('click', function () { $('.nav', h).classList.toggle('open'); });
    }
    var f = $('#site-footer');
    if (f) {
      f.className = 'site-footer';
      f.innerHTML = '<div class="wrap">Our family travel journal · ' + T.leaves().length + ' places · ' +
        T.allQuestions().length + ' quiz questions in the bank · made with ❤️</div>';
    }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', renderChrome);
  else renderChrome();
})();
