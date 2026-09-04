/* album.js — all uploaded photos (photos/<id>/), grouped by destination, one shared lightbox */
(function () {
  var T = window.TRIPS;
  var ids = Object.keys(T.photos).filter(function (id) { return T.byId(id) && T.photosOf(id).length; });
  // order like the data (destinations page order)
  ids.sort(function (a, b) { return T.places.indexOf(T.byId(a)) - T.places.indexOf(T.byId(b)); });
  var filter = T.param('place') || '';

  var sel = $('#filter');
  ids.forEach(function (id) {
    var p = T.byId(id), o = document.createElement('option');
    o.value = id; o.textContent = p.emoji + ' ' + p.name + ' (' + T.photosOf(id).length + ')';
    if (id === filter) o.selected = true;
    sel.appendChild(o);
  });
  sel.addEventListener('change', function () { filter = sel.value; render(); });

  var all = [];   // flat list for the lightbox
  function render() {
    all = [];
    var show = filter ? ids.filter(function (id) { return id === filter; }) : ids;
    if (!show.length) {
      $('#album').innerHTML = '<div class="empty-photos">No photos uploaded yet. Drop pictures into <code>photos/&lt;place-id&gt;/</code> and run <code>tools/scan_photos.py</code>.</div>';
      $('#count').textContent = '';
      return;
    }
    $('#album').innerHTML = show.map(function (id) {
      var p = T.byId(id), photos = T.photosOf(id);
      var html = '<section class="state-group"><h3>' + p.emoji + ' <a href="place.html?id=' + id + '">' + T.esc(p.name) + '</a> <span class="cnt">' + photos.length + ' photo' + (photos.length === 1 ? '' : 's') +
        (T.visitedLabel(p) ? ' · ' + T.esc(T.visitedLabel(p)) : '') + '</span></h3><div class="gallery">' +
        photos.map(function (ph) {
          var i = all.length; all.push({ src: ph.src, caption: ph.caption || p.name });
          return '<figure data-i="' + i + '"><img loading="lazy" src="' + T.esc(ph.src) + '" alt="' + T.esc(ph.caption || p.name) + '">' + (ph.caption ? '<figcaption>' + T.esc(ph.caption) + '</figcaption>' : '') + '</figure>';
        }).join('') + '</div></section>';
      return html;
    }).join('');
    $('#count').textContent = all.length + ' photo' + (all.length === 1 ? '' : 's');
    $$('.gallery figure').forEach(function (f) { f.addEventListener('click', function () { open(+f.getAttribute('data-i')); }); });
  }

  var lb = $('#lightbox'), cur = 0;
  function open(i) {
    cur = (i + all.length) % all.length;
    $('img', lb).src = all[cur].src;
    $('.cap', lb).textContent = all[cur].caption;
    lb.classList.add('open');
  }
  $('.close', lb).addEventListener('click', function () { lb.classList.remove('open'); });
  $('.prev', lb).addEventListener('click', function () { open(cur - 1); });
  $('.next', lb).addEventListener('click', function () { open(cur + 1); });
  lb.addEventListener('click', function (e) { if (e.target === lb) lb.classList.remove('open'); });
  document.addEventListener('keydown', function (e) {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape') lb.classList.remove('open');
    if (e.key === 'ArrowLeft') open(cur - 1);
    if (e.key === 'ArrowRight') open(cur + 1);
  });
  render();
})();
