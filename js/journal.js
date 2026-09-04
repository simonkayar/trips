/* journal.js — memory log.
   Notes come from three places: data/notes.js (git backup), the server API
   (api/journal.php — family posts, live) and, only when the API is unreachable
   (e.g. opening the site from disk), browser-local quick notes. */
(function () {
  var T = window.TRIPS;
  var LOCAL_KEY = 'trips_local_notes', PASS_KEY = 'trips_family_pass';
  var FALLBACK_NAMES = ['Simon', 'Kayar', 'Smitha', 'Kanni', 'Susi', 'Sana'];
  var filter = T.param('place') || '';
  var server = { on: false, notes: [], names: FALLBACK_NAMES };

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

  function fillWho() {
    var sel = $('#n-who'), keep = T.store.get('trips_who', '');
    sel.innerHTML = server.names.map(function (n) { return '<option' + (n === keep ? ' selected' : '') + '>' + T.esc(n) + '</option>'; }).join('');
  }
  fillWho();
  function passRow() {
    var has = !!T.store.get(PASS_KEY, '');
    $('#pass-row').classList.toggle('hidden', has);
    $('#forget-pass').classList.toggle('hidden', !has);
  }
  passRow();
  $('#forget-link').addEventListener('click', function (e) { e.preventDefault(); T.store.set(PASS_KEY, ''); passRow(); });

  // trip log: every trip from data/trips.js grouped by year, newest first
  (function () {
    var trips = T.trips.slice().sort(function (a, b) { return (b.date || '').localeCompare(a.date || ''); });
    $('#triplog-count').textContent = trips.length + ' trips since ' + (trips[trips.length - 1] || {}).when;
    var years = [];
    trips.forEach(function (t) { var y = (t.date || '').slice(0, 4); if (years.indexOf(y) < 0) years.push(y); });
    $('#triplog-body').innerHTML = years.map(function (y) {
      return '<div class="year-block"><div class="year">' + y + '</div><ul>' + trips.filter(function (t) { return (t.date || '').slice(0, 4) === y; }).map(function (t) {
        var links = t.places.map(function (id) { var p = T.byId(id); return p ? '<a href="place.html?id=' + id + '">' + p.emoji + ' ' + T.esc(p.name) + '</a>' : ''; }).join(' ');
        return '<li><span class="when">' + T.esc(t.when) + '</span> <strong>' + T.esc(t.title) + '</strong>' +
          (t.scope === 'international' ? ' <span class="tag intl">abroad</span>' : '') + (links ? '<div class="places">' + links + '</div>' : '') + '</li>';
      }).join('') + '</ul></div>';
    }).join('');
    if (T.param('log') === '1') $('#triplog').open = true;
  })();

  function localNotes() { return T.store.get(LOCAL_KEY, []); }
  function fmtDate(d) {
    if (!d) return '';
    var m = /^(\d{4})-(\d{2})(?:-(\d{2}))?/.exec(d);
    if (!m) return d;
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return (m[3] ? parseInt(m[3], 10) + ' ' : '') + months[parseInt(m[2], 10) - 1] + ' ' + m[1];
  }

  function allNotes() {
    var seen = {}, out = [];
    server.notes.forEach(function (n) { seen[n.id] = 1; out.push(Object.assign({}, n, { src: 'server' })); });
    T.notes.forEach(function (n) { if (!n.id || !seen[n.id]) out.push(Object.assign({}, n, { src: 'data' })); });
    if (!server.on) localNotes().forEach(function (n) { out.push(Object.assign({}, n, { src: 'local' })); });
    return out;
  }

  function render() {
    var all = allNotes();
    if (filter) {
      var kids = T.children(filter).map(function (c) { return c.id; });
      all = all.filter(function (n) { return n.place === filter || kids.indexOf(n.place) >= 0; });
    }
    all.sort(function (a, b) { return (b.date || '').localeCompare(a.date || '') || (b.created || '').localeCompare(a.created || ''); });
    $('#count').textContent = all.length + ' memor' + (all.length === 1 ? 'y' : 'ies');
    if (!all.length) {
      $('#timeline').innerHTML = '<div class="card pad muted">No memories here yet. Write one on the right →</div>';
      return;
    }
    $('#timeline').innerHTML = all.map(function (n) {
      var p = T.byId(n.place);
      return '<div class="card note' + (n.src === 'local' ? ' local' : '') + '">' +
        (n.src === 'local' ? '<button class="del" data-id="' + T.esc(n.id) + '">delete</button>' : '') +
        '<div class="head"><span class="title">' + T.esc(n.title) + '</span><span class="when">' + T.esc(fmtDate(n.date)) + '</span></div>' +
        '<div class="place">' + (p ? '<a href="place.html?id=' + p.id + '">' + p.emoji + ' ' + T.esc(p.name) + '</a>' : '') +
        (n.who ? ' · <span class="byline">by ' + T.esc(n.who) + '</span>' : '') +
        (n.src === 'local' ? ' · <span class="tag gold">on this device</span>' : '') + '</div>' +
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

  /* ---------- posting ---------- */
  function setMode() {
    $('#form-note').textContent = server.on
      ? 'Posts go straight onto the site. Simon gets an email for each one.'
      : 'The journal server is not reachable from here, so notes are saved in this browser only. Use “Copy for Claude” to send them on.';
    $('#n-export').classList.toggle('hidden', server.on);
    $('#pass-row').classList.toggle('hidden', !server.on || !!T.store.get(PASS_KEY, ''));
  }

  $('#note-form').addEventListener('submit', function (e) {
    e.preventDefault();
    var title = $('#n-title').value.trim(), text = $('#n-text').value.trim();
    if (!title || !text) { T.toast('Give the note a title and some text'); return; }
    var who = $('#n-who').value;
    T.store.set('trips_who', who);
    if (!server.on) {
      var notes = localNotes();
      notes.push({ id: 'local-' + Date.now(), place: $('#n-place').value, who: who, date: $('#n-date').value, title: title, text: text });
      T.store.set(LOCAL_KEY, notes);
      $('#n-title').value = ''; $('#n-text').value = '';
      T.toast('Saved on this device'); render();
      return;
    }
    var pass = T.store.get(PASS_KEY, '') || $('#n-pass').value;
    if (!pass) { $('#pass-row').classList.remove('hidden'); $('#n-pass').focus(); T.toast('Type the family passphrase'); return; }
    var btn = $('#n-save'); btn.disabled = true; btn.textContent = 'Posting…';
    fetch('api/journal.php?action=post', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ place: $('#n-place').value, who: who, date: $('#n-date').value, title: title, text: text, pass: pass, website: $('#n-website').value })
    }).then(function (r) { return r.json(); }).then(function (d) {
      btn.disabled = false; btn.textContent = 'Post it';
      if (!d.ok) {
        if (/passphrase/i.test(d.error || '')) { T.store.set(PASS_KEY, ''); passRow(); $('#n-pass').value = ''; $('#n-pass').focus(); }
        T.toast(d.error || 'Could not post'); return;
      }
      T.store.set(PASS_KEY, pass); passRow();
      server.notes.push(d.note);
      $('#n-title').value = ''; $('#n-text').value = '';
      T.toast('Posted — thank you, ' + who + '!');
      filter = ''; $('#filter').value = ''; render();
      window.scrollTo({ top: $('#timeline').offsetTop - 90, behavior: 'smooth' });
    }).catch(function () { btn.disabled = false; btn.textContent = 'Post it'; T.toast('Network problem — try again'); });
  });

  $('#n-export').addEventListener('click', function () {
    var notes = localNotes();
    if (!notes.length) { T.toast('No local notes to copy yet'); return; }
    var txt = 'Please add these notes to data/notes.js:\n\n' + notes.map(function (n) {
      return JSON.stringify({ place: n.place, who: n.who, date: n.date, title: n.title, text: n.text }, null, 2);
    }).join(',\n');
    function done() { T.toast('Copied ' + notes.length + ' note(s) — paste into a chat with Claude'); }
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(txt).then(done, function () { prompt('Copy this:', txt); });
    else prompt('Copy this:', txt);
  });

  /* ---------- load from the server, fall back quietly ---------- */
  render();
  setMode();
  T.loadServerNotes(function (d) {
    if (!d) { setMode(); return; }
    server.on = true; server.notes = d.notes || []; server.names = d.names || FALLBACK_NAMES;
    fillWho(); setMode(); render();
  });
})();
