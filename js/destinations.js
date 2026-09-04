/* destinations.js — searchable, filterable list grouped by country / state */
(function () {
  var T = window.TRIPS;
  var leaves = T.leaves();
  var state = { scope: T.param('scope') || 'all', region: T.param('region') || '', q: '', collection: T.param('collection') || '' };

  // collection header + chips (from data/collections.js)
  var coll = T.collectionById(state.collection);
  if (coll) {
    document.title = coll.title + ' · Trips & Tours';
    $('.page-head').insertAdjacentHTML('afterend', '<div class="coll-head"><span class="em">' + coll.emoji + '</span><div><h2>' + T.esc(coll.title) + '</h2><p>' + T.esc(coll.blurb || '') + '</p></div>' +
      '<a class="btn sm secondary" style="margin-left:auto" href="destinations.html">All places</a></div>');
  }
  $('#coll-chips').innerHTML = T.collections.map(function (c) {
    return '<a class="chip' + (state.collection === c.id ? ' active' : '') + '" href="destinations.html?collection=' + c.id + '">' + c.emoji + ' ' + T.esc(c.title) + '</a>';
  }).join('');

  var scopeChips = $$('#scope-chips .chip');
  scopeChips.forEach(function (c) {
    if (c.getAttribute('data-scope') === state.scope) { scopeChips.forEach(function (x) { x.classList.remove('active'); }); c.classList.add('active'); }
    c.addEventListener('click', function () {
      scopeChips.forEach(function (x) { x.classList.remove('active'); });
      c.classList.add('active');
      state.scope = c.getAttribute('data-scope');
      state.region = '';
      fillRegions();
      render();
    });
  });
  $('#q').addEventListener('input', function (e) { state.q = e.target.value.trim().toLowerCase(); render(); });

  function regionOf(p) { return p.parent ? T.byId(p.parent) : null; }

  // "jump to a state / country" dropdown — replaces the old row of chips
  var sel = $('#region-select');
  function fillRegions() {
    var regions = [];
    leaves.forEach(function (p) {
      if (state.scope !== 'all' && p.scope !== state.scope) return;
      var r = regionOf(p);
      if (r && regions.indexOf(r) < 0) regions.push(r);
    });
    sel.innerHTML = '<option value="">All states &amp; countries</option>' + regions.map(function (r) {
      return '<option value="' + r.id + '"' + (state.region === r.id ? ' selected' : '') + '>' + r.emoji + ' ' + T.esc(r.name) + '</option>';
    }).join('');
  }
  sel.addEventListener('change', function () { state.region = sel.value; render(); });
  fillRegions();

  function render() {
    var list = leaves.filter(function (p) {
      if (coll && coll.ids.indexOf(p.id) < 0) return false;
      if (state.scope !== 'all' && p.scope !== state.scope) return false;
      if (state.region && p.parent !== state.region) return false;
      if (state.q) {
        var hay = [p.name, p.state, p.country, p.tagline, (p.aka || [])].join(' ').toLowerCase();
        if (hay.indexOf(state.q) < 0) return false;
      }
      return true;
    });
    $('#count').textContent = list.length + ' place' + (list.length === 1 ? '' : 's');

    // group by region, keep data order
    var groups = [], byId = {};
    list.forEach(function (p) {
      var r = regionOf(p);
      // a place without a hub (e.g. Singapore, a city-state) is its own group
      var key = r ? r.id : p.id;
      if (!byId[key]) { byId[key] = { region: r, self: r ? null : p, items: [] }; groups.push(byId[key]); }
      byId[key].items.push(p);
    });
    if (!groups.length) { $('#groups').innerHTML = '<p class="muted">Nothing matches — try another search.</p>'; return; }
    $('#groups').innerHTML = groups.map(function (g) {
      var r = g.region;
      var head = r
        ? '<h3>' + r.emoji + ' ' + T.esc(r.name) + ' <span class="cnt">' + g.items.length + ' place' + (g.items.length === 1 ? '' : 's') + (r.visited ? ' · ' + T.esc(r.visited) : '') + '</span>' +
          '<a class="btn sm ghost" style="margin-left:auto" href="place.html?id=' + r.id + '">About ' + T.esc(r.name) + ' →</a></h3>'
        : '<h3>' + g.self.emoji + ' ' + T.esc(g.self.name) + ' <span class="cnt">' + T.esc(g.self.country || '') + (T.visitedLabel(g.self) ? ' · ' + T.esc(T.visitedLabel(g.self)) : '') + '</span></h3>';
      return '<section class="state-group">' + head + '<div class="grid cols-4">' + g.items.map(T.destCardHTML).join('') + '</div></section>';
    }).join('');
  }
  render();
})();
