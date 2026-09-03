/* maps.js — world map (international) + India map (domestic) using Leaflet */
(function () {
  var T = window.TRIPS;
  var leaves = T.leaves().filter(function (p) { return typeof p.lat === 'number'; });
  var intl = leaves.filter(function (p) { return p.scope === 'international'; });
  var dom = leaves.filter(function (p) { return p.scope === 'domestic'; });

  $('#intl-count').textContent = intl.length + ' places · ' + T.uniq(intl.map(function (p) { return p.country; })).length + ' countries';
  $('#dom-count').textContent = dom.length + ' places · ' + T.uniq(dom.map(function (p) { return p.state; })).length + ' states / UTs';

  var STATE_COLORS = ['#0f6e6e', '#c9553d', '#d9a441', '#6f8f6a', '#3b4d8a', '#7a4b8a', '#2a6f97', '#9a6d17', '#b23a48', '#4f772d', '#e07a5f', '#3d405b', '#81b29a', '#f2cc8f', '#5f0f40'];
  var stateColor = {};
  T.uniq(dom.map(function (p) { return p.state; })).forEach(function (s, i) { stateColor[s] = STATE_COLORS[i % STATE_COLORS.length]; });

  function listHTML(items) {
    return items.map(function (p) { return '<a href="place.html?id=' + p.id + '">' + p.emoji + ' ' + T.esc(p.name) + '</a>'; }).join('');
  }
  $('#world-list').innerHTML = listHTML(intl);
  $('#india-list').innerHTML = listHTML(dom);
  $('#india-legend').innerHTML = Object.keys(stateColor).map(function (s) {
    return '<span style="--dot:' + stateColor[s] + '">' + T.esc(s) + '</span>';
  }).join('');

  if (typeof L === 'undefined') {
    // offline / CDN blocked — keep the lists, explain the empty boxes
    var msg = '<div class="map-fallback">The map tiles need an internet connection. The places are listed below.</div>';
    $('#world-map').innerHTML = msg; $('#india-map').innerHTML = msg;
    return;
  }

  function popup(p) {
    var v = T.visitedLabel(p);
    return '<b>' + p.emoji + ' ' + T.esc(p.name) + '</b><br><span style="color:#7b8790">' + T.esc(T.locationLabel(p)) + (v ? ' · ' + T.esc(v) : '') + '</span>' +
      '<br><a href="place.html?id=' + p.id + '">Open page →</a>';
  }
  function tiles(map) {
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18, attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
  }

  /* world map: emoji pins */
  var world = L.map('world-map', { scrollWheelZoom: false, worldCopyJump: true, zoomSnap: 0.5 });
  tiles(world);
  var wb = [];
  intl.forEach(function (p) {
    var icon = L.divIcon({ className: 'pin', html: '📍', iconSize: [24, 24], iconAnchor: [12, 24], popupAnchor: [0, -22] });
    L.marker([p.lat, p.lng], { icon: icon }).addTo(world).bindPopup(popup(p)).bindTooltip(p.name);
    wb.push([p.lat, p.lng]);
  });
  // home base, so the world map shows where the trips start from
  L.circleMarker([12.97, 77.59], { radius: 6, color: '#0f6e6e', fillColor: '#0f6e6e', fillOpacity: .9 }).addTo(world).bindTooltip('Home · Bengaluru');
  wb.push([12.97, 77.59]);
  world.fitBounds(wb, { padding: [40, 40] });

  /* India map: coloured dots per state */
  var india = L.map('india-map', { scrollWheelZoom: false, zoomSnap: 0.5 });
  tiles(india);
  var ib = [];
  dom.forEach(function (p) {
    L.circleMarker([p.lat, p.lng], { radius: 7, color: '#fff', weight: 2, fillColor: stateColor[p.state] || '#0f6e6e', fillOpacity: .95 })
      .addTo(india).bindPopup(popup(p)).bindTooltip(p.name);
    ib.push([p.lat, p.lng]);
  });
  india.fitBounds(ib.length ? ib : [[7, 68], [34, 92]], { padding: [30, 30] });
})();
