/* journal.js — memory log: notes from data/notes.js plus browser-local quick notes */
(function () {
  var T = window.TRIPS;
  var LOCAL_KEY = 'trips_local_notes';
  var filter = T.param('place') || '';

  // place selects
  var sorted = T.places.slice().sort(function (a, b) { return a.name.localeCompare(b.name); });
  [$('#filter'), $('#n-place')].forEach(function (sel) {
    sorted.forEach(function (p) {
      var o = document.createElement('option');
      o.value = p.id; o.textContent = p.emoji + ' ' + p.name;
      sel.appendChild(o);
    });
  });
  $('#filter').value = filter;
  if (filter) $('#n-place').value = filter;
  $('#n-date').value = new Date().toISOString().slice(0, 10);

  function localNotes() { return T.store.get(LOCAL_KEY, []); }
  function fmtDate(d) {
    if (!d) return '';
    var m = /^(\d{4})-(\d{2})(?:-(\d{2}))?/.exec(d);
    if (!m) return d;
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return (m[3] ? parseInt(m[3], 10) + ' ' : '') + months[parseInt(m[2], 10) - 1] + ' ' + m[1];
  }

  function render() {
    var all = T.notes.map(function (n) { return Object.assign({}, n, { local: false }); })
      .concat(localNotes().map(function (n) { return Object.assign({}, n, { local: true }); }));
    if (filter) {
      var kids = T.children(filter).map(function (c) { return c.id; });
      all = all.filter(function (n) { return n.place === filter || kids.indexOf(n.place) >= 0; });
    }
    all.sort(function (a, b) { return (b.date || '').localeCompare(a.date || ''); });
    $('#count').textContent = all.length + ' memor' + (all.length === 1 ? 'y' : 'ies');
    if (!all.length) {
      $('#timeline').innerHTML = '<div class="card pad muted">No memories here yet. Write one on the right →</div>';
      return;
    }
    $('#timeline').innerHTML = all.map(function (n) {
      var p = T.byId(n.place);
      return '<div class="card note' + (n.local ? ' local' : '') + '">' +
        (n.local ? '<button class="del" data-id="' + T.esc(n.id) + '">delete</button>' : '') +
        '<div class="head"><span class="title">' + T.esc(n.title) + '</span><span class="when">' + T.esc(fmtDate(n.date)) + '</span></div>' +
        (p ? '<div class="place"><a href="place.html?id=' + p.id + '">' + p.emoji + ' ' + T.esc(p.name) + '</a>' + (n.local ? ' · <span class="tag gold">on this device</span>' : '') + '</div>' : '') +
        '<div class="body">' + T.esc(n.text) + '</div></div>';
    }).join('');
    $$('.note .del').forEach(function (b) {
      b.addEventListener('click', function () {
        if (!confirm('Delete this note from this browser?')) return;
        T.store.set(LOCAL_KEY, localNotes().filter(function (n) { return n.id !== b.getAttribute('data-id'); }));
        render();
      });
    });
  }

  $('#filter').addEventListener('change', function (e) { filter = e.target.value; render(); });
  $('#n-save').addEventListener('click', function () {
    var title = $('#n-title').value.trim(), text = $('#n-text').value.trim();
    if (!title || !text) { T.toast('Give the note a title and some text'); return; }
    var notes = localNotes();
    notes.push({ id: 'local-' + Date.now(), place: $('#n-place').value, date: $('#n-date').value, title: title, text: text });
    T.store.set(LOCAL_KEY, notes);
    $('#n-title').value = ''; $('#n-text').value = '';
    T.toast('Saved on this device');
    render();
  });
  $('#n-export').addEventListener('click', function () {
    var notes = localNotes();
    if (!notes.length) { T.toast('No local notes to copy yet'); return; }
    var txt = 'Please add these notes to data/notes.js:\n\n' + notes.map(function (n) {
      return JSON.stringify({ place: n.place, date: n.date, title: n.title, text: n.text }, null, 2);
    }).join(',\n');
    function done() { T.toast('Copied ' + notes.length + ' note(s) — paste into a chat with Claude'); }
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(txt).then(done, function () { prompt('Copy this:', txt); });
    else prompt('Copy this:', txt);
  });

  render();
})();
