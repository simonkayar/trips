/* home.js — landing page */
(function () {
  var T = window.TRIPS;
  var leaves = T.leaves();

  // polaroids: prefer places that have photos
  var withPhotos = leaves.filter(function (p) { return T.photosOf(p.id).length; });
  var picks = T.sample(withPhotos, 3);
  if (picks.length < 3) picks = picks.concat(T.sample(leaves.filter(function (p) { return picks.indexOf(p) < 0; }), 3 - picks.length));
  var poses = ['left:0;top:10px;transform:rotate(-6deg)', 'left:38%;top:70px;transform:rotate(4deg);z-index:2', 'left:12%;top:190px;transform:rotate(-2deg)'];
  $('#hero-art').innerHTML = picks.map(function (p, i) {
    var cover = T.coverPhoto(p);
    var style = cover ? 'background-image:url(\'' + T.esc(cover) + '\')' : 'background:' + T.gradientFor(p);
    return '<a class="polaroid" href="place.html?id=' + p.id + '" style="' + poses[i] + '">' +
      '<div class="pic' + (cover ? ' has-photo' : '') + '" style="' + style + '"><span>' + p.emoji + '</span></div>' +
      '<div class="cap">' + T.esc(p.name) + '</div></a>';
  }).join('');

  // stats
  var intl = leaves.filter(function (p) { return p.scope === 'international'; });
  var dom = leaves.filter(function (p) { return p.scope === 'domestic'; });
  var countries = T.uniq(intl.map(function (p) { return p.country; }));
  var states = T.uniq(dom.map(function (p) { return p.state; }));
  var stats = [
    [countries.length, 'countries abroad', 'destinations.html?scope=international'],
    [states.length, 'Indian states & UTs', 'place.html?id=india'],
    [leaves.length, 'places visited', 'destinations.html'],
    [T.photoCount(), 'photos', 'album.html'],
    [T.allQuestions().length, 'quiz questions', 'quiz.html']
  ];
  $('#stats').innerHTML = stats.map(function (s) {
    return '<a class="stat" href="' + s[2] + '"><div class="num">' + s[0] + '</div><div class="lbl">' + s[1] + ' →</div></a>';
  }).join('');

  // collections — themed tiles instead of repeating the menu
  $('#collections').innerHTML = T.collections.map(function (c) {
    var places = T.collectionPlaces(c);
    // cover: a place id whose picture fits the theme, or a dedicated images/<id>.jpg
    var cover = null;
    if (c.cover) cover = T.byId(c.cover) ? T.coverPhoto(T.byId(c.cover)) : (T.images[c.cover] || {}).src;
    if (!cover) { var withPic = places.filter(function (p) { return T.coverPhoto(p); }); cover = withPic.length ? T.coverPhoto(T.pick(withPic)) : null; }
    var style = cover ? 'background-image:url(\'' + T.esc(cover) + '\')' : 'background:' + T.gradientFor(c);
    return '<a class="coll" href="destinations.html?collection=' + c.id + '" style="' + style + '"><div class="shade"></div>' +
      '<span class="em">' + c.emoji + '</span><span class="cnt">' + places.length + ' places</span>' +
      '<div class="txt"><h3>' + T.esc(c.title) + '</h3><p>' + T.esc(c.blurb || '') + '</p></div></a>';
  }).join('');

  // trips abroad (the full log, domestic included, is on the journal page)
  var trips = T.trips.filter(function (t) { return t.scope === 'international'; })
    .sort(function (a, b) { return (b.date || '').localeCompare(a.date || ''); });
  $('#trips').innerHTML = trips.map(function (t) {
    return '<div class="card trip-card"><div class="em">' + t.emoji + '</div><div>' +
      '<div class="when">' + T.esc(t.when) + '</div><h3>' + T.esc(t.title) + '</h3>' +
      '<p class="muted small" style="margin:0">' + T.esc(t.summary || '') + '</p>' +
      '<div class="places">' + t.places.map(function (id) {
        var p = T.byId(id); return p ? '<a href="place.html?id=' + id + '">' + p.emoji + ' ' + T.esc(p.name) + '</a>' : '';
      }).join('') + '</div></div></div>';
  }).join('');

  // "recently added" = last 8 leaves in data order
  $('#recent').innerHTML = leaves.slice(-8).reverse().map(T.destCardHTML).join('');

  $('#surprise').addEventListener('click', function () {
    location.href = 'place.html?id=' + T.pick(leaves).id;
  });
})();
