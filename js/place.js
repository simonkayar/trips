/* place.js — the one-page "mind map" for a destination (country, state or place) */
(function () {
  var T = window.TRIPS;
  var id = T.param('id');
  var p = T.byId(id);

  if (!p) {
    $('#main').innerHTML = '<div class="page-head"><h1>Hmm, we haven\'t been there yet</h1>' +
      '<p class="lead">No page called <code>' + T.esc(id || '') + '</code>. <a href="destinations.html">See all destinations →</a></p></div>';
    return;
  }
  document.title = p.name + ' · Trips & Tours';

  var hub = T.hubOf(p);
  var visited = T.visitedLabel(p);
  var kids = T.children(p.id);

  /* ---------- hero: text + the representative picture ---------- */
  var crumbs = '<a href="index.html">Home</a> › <a href="destinations.html">Destinations</a>';
  if (hub) crumbs += ' › <a href="place.html?id=' + hub.id + '">' + T.esc(hub.name) + '</a>';
  crumbs += ' › ' + T.esc(p.name);
  var badges = T.scopeTag(p);
  if (p.kind === 'place') badges += '<span class="tag gold">' + T.esc(T.locationLabel(p)) + '</span>';
  else badges += '<span class="tag gold">' + (p.kind === 'country' ? 'Country' : 'State') + ' · ' + kids.length + ' places</span>';
  if (visited) badges += '<span class="tag sage">Visited ' + T.esc(visited) + '</span>';

  var ownPhotos = T.photosOf(p.id);
  var pic = T.picture(p), credit = T.pictureCredit(p);
  var heroSrc = pic || (ownPhotos[0] && ownPhotos[0].src);
  var heroHtml = '';
  if (heroSrc) {
    var cap = pic
      ? 'Picture: <a target="_blank" rel="noopener" href="' + T.esc(credit.page) + '">Wikipedia</a>' + (credit.file ? ' · ' + T.esc(credit.file.replace(/_/g, ' ').replace(/\.[a-z]+$/i, '')) : '')
      : T.esc(ownPhotos[0].caption || 'Our photo');
    heroHtml = '<figure class="hero-photo' + (pic ? '' : ' own') + '"><img src="' + T.esc(heroSrc) + '" alt="' + T.esc(p.name) + '"><figcaption>' + cap + '</figcaption></figure>';
  }
  var iconHtml = p.icon ? '<img class="icon-img" src="' + T.esc(p.icon) + '" alt="">' : p.emoji;
  $('#hero').innerHTML = '<div class="hero-text"><div class="big-emoji">' + iconHtml + '</div><div>' +
    '<div class="crumbs">' + crumbs + '</div><h1>' + T.esc(p.name) + '</h1>' +
    '<div class="tagline">' + T.esc(p.tagline || '') + '</div><div class="badges">' + badges + '</div>' +
    '<div class="actions"><a class="btn" href="quiz.html?place=' + p.id + '">🧠 Quiz me on this</a>' +
    '<a class="btn secondary" target="_blank" rel="noopener" href="' + T.mapsLink(p) + '">📍 Google Maps</a></div></div></div>' + heroHtml;

  /* ---------- mind-map nodes ---------- */
  function fmt(s) { return T.esc(s).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>'); }
  function list(items) { return '<ul>' + items.map(function (s) { return '<li>' + fmt(s) + '</li>'; }).join('') + '</ul>'; }

  // state names in the map file differ from ours in a few cases
  var STATE_ALIASES = {
    'Delhi': ['NCT of Delhi', 'Delhi', 'National Capital Territory of Delhi'],
    'Odisha': ['Odisha', 'Orissa'], 'Uttarakhand': ['Uttarakhand', 'Uttaranchal'],
    'Puducherry (UT)': ['Puducherry', 'Pondicherry'], 'Chandigarh (UT)': ['Chandigarh'],
    'Telangana': ['Telangana']  // absent from older state files — then only the pin shows
  };
  function findState(name) {
    var st = T.mapIndia && T.mapIndia.states;
    if (!st) return null;
    var cands = STATE_ALIASES[name] || [name];
    for (var i = 0; i < cands.length; i++) if (st[cands[i]]) return st[cands[i]];
    return null;
  }

  var nodes = [];
  if (p.glance) {
    nodes.push({ title: 'At a glance', ic: '📌', cls: 'c-teal', html: '<dl class="kv">' + Object.keys(p.glance).map(function (k) {
      return '<dt>' + T.esc(k) + '</dt><dd>' + T.esc(p.glance[k]) + '</dd>';
    }).join('') + '</dl>' });
  }
  // cartoon locator map — world for international, India for domestic
  if (typeof p.lat === 'number' && (T.mapWorld || T.mapIndia)) {
    nodes.push({ title: 'Where it is', ic: '🗺️', cls: 'c-terracotta', html: locatorHTML(p) });
  }
  if (kids.length) {
    nodes.push({ title: p.kind === 'country' ? 'Places we visited here' : 'Our stops in ' + p.name, ic: '📍', cls: 'c-sage',
      html: '<div class="children">' + kids.map(function (c) { return '<a href="place.html?id=' + c.id + '">' + c.emoji + ' ' + T.esc(c.name) + '</a>'; }).join('') + '</div>' });
  }
  if (p.history && p.history.length) nodes.push({ title: 'History', ic: '📜', cls: 'c-gold', html: list(p.history) });
  if (p.mustSee && p.mustSee.length) nodes.push({ title: 'Tourist Highlights', ic: '🏛️', cls: 'c-terracotta', html: list(p.mustSee) });
  if (p.food && p.food.length) nodes.push({ title: 'Food & flavours', ic: '🍛', cls: 'c-sage', html: list(p.food) });
  if (p.culture && p.culture.length) nodes.push({ title: 'Culture & people', ic: '🎭', cls: 'c-ink', html: list(p.culture) });
  if (p.funFacts && p.funFacts.length) nodes.push({ title: 'Fun facts', ic: '✨', cls: 'c-gold', html: '<div id="facts"></div>', facts: true });
  if (p.tips && p.tips.length) nodes.push({ title: 'Travel tips', ic: '🧭', cls: 'c-teal', html: list(p.tips) });

  // our own memories (data/notes.js now; live family posts are merged in below)
  function ourTripHTML() {
    var notes = T.notesFor(p.id);
    var html = '';
    var myTrips = T.tripsOf(p);
    if (myTrips.length) {
      html += '<ul>' + myTrips.slice().reverse().map(function (t) {
        return '<li><strong>' + T.esc(t.when) + '</strong> — ' + T.esc(t.title) + (t.summary ? '<br><span class="muted small">' + T.esc(t.summary) + '</span>' : '') + '</li>';
      }).join('') + '</ul>';
    } else if (visited) html += '<p><strong>Visited:</strong> ' + T.esc(visited) + '</p>';
    if (notes.length) html += list(notes.slice(0, 4).map(function (n) { return '**' + n.title + '**' + (n.who ? ' (' + n.who + ')' : '') + ' — ' + n.text; }));
    var unlocked = !!T.journalSession();
    html += '<p style="margin:10px 0 0"><a href="journal.html?place=' + p.id + '">' +
      (notes.length ? 'All ' + notes.length + ' memories in the journal →' : (unlocked ? 'Add a memory in the journal →' : '🔒 Family memories — unlock in the journal →')) + '</a></p>';
    return html;
  }
  nodes.push({ title: 'Our trip', ic: '❤️', cls: 'c-terracotta', html: '<div id="ourtrip">' + ourTripHTML() + '</div>' });
  T.loadServerNotes(function (d) { if (d && $('#ourtrip')) { $('#ourtrip').innerHTML = ourTripHTML(); drawLinks(); } });

  var left = $('#col-left'), right = $('#col-right');
  nodes.forEach(function (n, i) {
    var div = document.createElement('div');
    div.className = 'card mm-node ' + n.cls;
    div.innerHTML = '<h3><span class="ic">' + n.ic + '</span>' + T.esc(n.title) + '</h3>' + n.html;
    (i % 2 === 0 ? left : right).appendChild(div);
  });

  /* ---------- fun facts pager (3 at a time, arrows cycle) ---------- */
  (function () {
    var box = $('#facts');
    if (!box) return;
    var facts = p.funFacts, per = 3, pages = Math.ceil(facts.length / per), page = 0;
    function render() {
      var slice = facts.slice(page * per, page * per + per);
      box.innerHTML = '<div class="facts-page">' + list(slice) + '</div>' +
        (pages > 1 ? '<div class="facts-nav"><button class="prev" aria-label="Previous facts">‹</button><span class="cnt">' + (page + 1) + ' / ' + pages + ' · ' + facts.length + ' facts</span><button class="next" aria-label="More facts">›</button></div>' : '');
      if (pages > 1) {
        $('.prev', box).addEventListener('click', function () { page = (page - 1 + pages) % pages; render(); drawLinks(); });
        $('.next', box).addEventListener('click', function () { page = (page + 1) % pages; render(); drawLinks(); });
      }
    }
    render();
  })();

  /* ---------- hub (centre of the mind map) ---------- */
  var where = p.kind === 'place' ? T.locationLabel(p) : (p.kind === 'country' ? 'Country' : 'State of India');
  var flag = T.flags[p.id];
  var capital = p.glance && (p.glance['Capital'] || p.glance['Capital city']);
  $('#hub').className = 'mm-hub' + (p.scope === 'international' ? ' intl' : '');
  $('#hub').innerHTML =
    (flag ? '<img class="flag" src="' + T.esc(flag) + '" alt="Flag of ' + T.esc(p.name) + '">' :
      (p.icon ? '<img class="icon-img" src="' + T.esc(p.icon) + '" alt="">' : '<div class="emoji">' + p.emoji + '</div>')) +
    '<h2>' + T.esc(p.name) + '</h2><div class="where">' + T.esc(where) + '</div>' +
    (capital ? '<div class="capital">Capital: <b>' + T.esc(capital) + '</b></div>' : '') +
    (visited ? '<div class="visited">📅 ' + T.esc(visited) + '</div>' : '') +
    (typeof p.lat === 'number' ? '<div class="coords">' + Math.abs(p.lat).toFixed(2) + '° ' + (p.lat < 0 ? 'S' : 'N') + ' · ' + Math.abs(p.lng).toFixed(2) + '° ' + (p.lng < 0 ? 'W' : 'E') + '</div>' : '');

  /* ---------- cartoon locator map ---------- */
  function locatorHTML(p) {
    var svg = '', w, h, capLeft, capRight;
    if (p.scope === 'international' && T.mapWorld) {
      var M = T.mapWorld; w = M.w; h = M.h;
      var px = (p.lng + 180) / 360 * w, py = (90 - p.lat) / 180 * h;
      var hx = (77.59 + 180) / 360 * w, hy = (90 - 12.97) / 180 * h;   // home: Bengaluru
      var cx = (px + hx) / 2, cy = Math.min(py, hy) - 40;             // a gentle arc for the "flight"
      var land = '', here = '';
      Object.keys(M.countries).forEach(function (n) {
        if (n === p.country) here += M.countries[n]; else land += M.countries[n];
      });
      // crop the world to a band around the route so the map isn't a thin strip
      var minX = Math.max(0, Math.min(px, hx) - 180), maxX = Math.min(w, Math.max(px, hx) + 180);
      var minY = Math.max(0, Math.min(py, hy) - 110), maxY = Math.min(h, Math.max(py, hy) + 110);
      var vw = maxX - minX, vh = Math.max(maxY - minY, vw * 0.55);
      svg = '<svg viewBox="' + minX + ' ' + (minY - (vh - (maxY - minY)) / 2) + ' ' + vw + ' ' + vh + '">' +
        '<path class="land" d="' + land + '"/>' + (here ? '<path class="here" d="' + here + '"/>' : '') +
        '<path class="route" d="M' + hx + ',' + hy + ' Q' + cx + ',' + cy + ' ' + px + ',' + py + '"/>' +
        '<circle class="home" cx="' + hx + '" cy="' + hy + '" r="4"/><text class="lbl small" x="' + (hx + 7) + '" y="' + (hy + 14) + '">Home</text>' +
        '<circle class="pulse" cx="' + px + '" cy="' + py + '" r="9"/><circle class="dot" cx="' + px + '" cy="' + py + '" r="5"/>' +
        '<text class="lbl" x="' + (px + 10) + '" y="' + (py - 8) + '">' + T.esc(p.name) + '</text>' +
        '<text class="compass" x="' + (minX + vw - 34) + '" y="' + (minY + 30) + '">🧭</text></svg>';
      capLeft = '✈️ From home to ' + T.esc(p.country); capRight = 'world map';
    } else if (T.mapIndia) {
      var I = T.mapIndia, B = I.box; w = I.w; h = I.h;
      var ix = (p.lng - B[0]) / (B[1] - B[0]) * w, iy = (B[3] - p.lat) / (B[3] - B[2]) * h;
      var hereState = p.state ? findState(p.state) : null;
      var others = '';
      if (I.states && Object.keys(I.states).length) {
        Object.keys(I.states).forEach(function (n) { if (I.states[n] !== hereState) others += I.states[n]; });
      }
      svg = '<svg viewBox="0 0 ' + w + ' ' + h + '">' +
        (others ? '<path class="land" d="' + others + '"/>' : '<path class="land" d="' + I.outline + '"/>') +
        (hereState ? '<path class="here-state" d="' + hereState + '"/>' : '') +
        (I.outline && others ? '<path class="outline" d="' + I.outline + '"/>' : '') +
        '<circle class="pulse" cx="' + ix + '" cy="' + iy + '" r="9"/><circle class="dot" cx="' + ix + '" cy="' + iy + '" r="5"/>' +
        '<text class="lbl" x="' + (ix + 10) + '" y="' + (iy - 8) + '">' + T.esc(p.name) + '</text>' +
        '<text class="compass" x="' + (w - 40) + '" y="34">🧭</text></svg>';
      capLeft = '📍 ' + T.esc(p.state || 'India'); capRight = 'India map';
    }
    return '<div class="locator">' + svg + '</div><div class="locator-cap"><span>' + capLeft + '</span><span>' + capRight + '</span></div>';
  }

  /* ---------- connector lines from hub to each node ---------- */
  function drawLinks() {
    var svg = $('#links'), mm = $('#mindmap');
    if (!svg || window.innerWidth < 980) { if (svg) svg.innerHTML = ''; return; }
    var box = mm.getBoundingClientRect();
    var hb = $('#hub').getBoundingClientRect();
    var hy = hb.top - box.top + hb.height / 2;
    svg.setAttribute('viewBox', '0 0 ' + box.width + ' ' + box.height);
    var paths = '';
    $$('.mm-node').forEach(function (n) {
      var r = n.getBoundingClientRect();
      var isLeft = r.left < hb.left;
      var x2 = isLeft ? r.right - box.left : r.left - box.left;
      var y2 = r.top - box.top + Math.min(40, r.height / 2);
      var x1 = isLeft ? hb.left - box.left : hb.right - box.left;
      var cx = (x1 + x2) / 2;
      paths += '<path d="M' + x1 + ',' + hy + ' C' + cx + ',' + hy + ' ' + cx + ',' + y2 + ' ' + x2 + ',' + y2 + '"/>';
    });
    svg.innerHTML = paths;
  }
  drawLinks();
  window.addEventListener('resize', drawLinks);
  window.addEventListener('scroll', drawLinks, { passive: true });
  setTimeout(drawLinks, 300);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(drawLinks);

  /* ---------- photos ---------- */
  var photos = ownPhotos.slice();
  kids.forEach(function (c) { photos = photos.concat(T.photosOf(c.id).map(function (x) { return { src: x.src, caption: x.caption || c.name }; })); });
  $('#photo-count').textContent = photos.length ? photos.length + ' photo' + (photos.length === 1 ? '' : 's') : '';
  if (!photos.length) {
    $('#gallery').innerHTML = '<div class="empty-photos">No photos yet. Drop pictures into <code>photos/' + T.esc(p.id) + '/</code> and run <code>tools/scan_photos.py</code> (or just ask Claude) to show them here.</div>';
  } else {
    $('#gallery').innerHTML = '<div class="gallery">' + photos.map(function (ph, i) {
      return '<figure data-i="' + i + '"><img loading="lazy" src="' + T.esc(ph.src) + '" alt="' + T.esc(ph.caption || p.name) + '">' +
        (ph.caption ? '<figcaption>' + T.esc(ph.caption) + '</figcaption>' : '') + '</figure>';
    }).join('') + '</div>';
    var lb = $('#lightbox'), cur = 0;
    function show(i) {
      cur = (i + photos.length) % photos.length;
      $('img', lb).src = photos[cur].src;
      $('.cap', lb).textContent = photos[cur].caption || '';
      lb.classList.add('open');
    }
    $$('.gallery figure').forEach(function (f) { f.addEventListener('click', function () { show(+f.getAttribute('data-i')); }); });
    $('.close', lb).addEventListener('click', function () { lb.classList.remove('open'); });
    $('.prev', lb).addEventListener('click', function () { show(cur - 1); });
    $('.next', lb).addEventListener('click', function () { show(cur + 1); });
    lb.addEventListener('click', function (e) { if (e.target === lb) lb.classList.remove('open'); });
    document.addEventListener('keydown', function (e) {
      if (!lb.classList.contains('open')) return;
      if (e.key === 'Escape') lb.classList.remove('open');
      if (e.key === 'ArrowLeft') show(cur - 1);
      if (e.key === 'ArrowRight') show(cur + 1);
    });
  }
})();
