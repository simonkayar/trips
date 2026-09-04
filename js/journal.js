/* journal.js — trip log (public) + family memories (unlock with the passphrase).
   Notes live on the server (api/journal.php). A session token from the unlock is
   kept in localStorage so the family types the passphrase once per device.
   Admin token (the admin passphrase) adds an ✕ on every note. */
(function () {
  var T = window.TRIPS;
  var FALLBACK_NAMES = ['Simon', 'Kayar', 'Smitha', 'Kanni', 'Susi', 'Sana'];
  var filter = T.param('place') || '';
  var session = T.journalSession();          // {token, role} or null
  var notes = [], names = FALLBACK_NAMES;

  /* ---------- trip log (always visible) ---------- */
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
    if (T.param('log') === '1' || !session) $('#triplog').open = !session && !T.param('place') ? false : $('#triplog').open;
  })();

  /* ---------- selects ---------- */
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
    var keep = T.store.get('trips_who', '') || (session && session.role === 'admin' ? 'Simon' : '');
    $('#n-who').innerHTML = names.map(function (n) { return '<option' + (n === keep ? ' selected' : '') + '>' + T.esc(n) + '</option>'; }).join('');
  }

  function fmtDate(d) {
    var m = /^(\d{4})-(\d{2})(?:-(\d{2}))?/.exec(d || '');
    if (!m) return d || '';
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return (m[3] ? parseInt(m[3], 10) + ' ' : '') + months[parseInt(m[2], 10) - 1] + ' ' + m[1];
  }

  /* ---------- locked / unlocked UI ---------- */
  function setState() {
    var on = !!session;
    $('#unlock-form').classList.toggle('hidden', on);
    $('#unlocked-state').classList.toggle('hidden', !on);
    $('#journal-main').classList.toggle('hidden', !on);
    $('#locked-hint').classList.toggle('hidden', on);
    if (on) {
      $('#role-label').textContent = session.role === 'admin' ? 'Admin' : 'Family';
      $('#role-note').textContent = session.role === 'admin' ? 'You can read, post and delete notes.' : 'You can read and post memories.';
    }
  }

  function render() {
    var list = notes.slice();
    if (filter) {
      var kids = T.children(filter).map(function (c) { return c.id; });
      list = list.filter(function (n) { return n.place === filter || kids.indexOf(n.place) >= 0; });
    }
    list.sort(function (a, b) { return (b.date || '').localeCompare(a.date || '') || (b.created || '').localeCompare(a.created || ''); });
    $('#count').textContent = list.length + ' memor' + (list.length === 1 ? 'y' : 'ies');
    if (!list.length) { $('#timeline').innerHTML = '<div class="card pad muted">No memories here yet. Write the first one on the right →</div>'; return; }
    var admin = session && session.role === 'admin';
    $('#timeline').innerHTML = list.map(function (n) {
      var p = T.byId(n.place);
      return '<div class="card note" data-id="' + T.esc(n.id) + '">' +
        (admin ? '<button class="del" title="Delete this note" data-id="' + T.esc(n.id) + '">✕ delete</button>' : '') +
        '<div class="head"><span class="title">' + T.esc(n.title) + '</span><span class="when">' + T.esc(fmtDate(n.date)) + '</span></div>' +
        '<div class="place">' + (p ? '<a href="place.html?id=' + p.id + '">' + p.emoji + ' ' + T.esc(p.name) + '</a>' : '') +
        (n.who ? ' · <span class="byline">by ' + T.esc(n.who) + '</span>' : '') + '</div>' +
        '<div class="body">' + T.esc(n.text) + '</div></div>';
    }).join('');
    $$('.note .del').forEach(function (b) {
      b.addEventListener('click', function () {
        var id = b.getAttribute('data-id');
        if (!confirm('Delete this note for everyone?')) return;
        T.journalApi('delete', { id: id }, function (d) {
          if (!d.ok) { T.toast(d.error || 'Could not delete'); return; }
          notes = notes.filter(function (n) { return n.id !== id; });
          T.toast('Deleted'); render();
        });
      });
    });
  }

  function load() {
    T.journalApi('list', {}, function (d) {
      if (!d.ok) {
        if (d.status === 401) { T.journalSession(null); session = null; setState(); T.toast('Please unlock again'); }
        else T.toast(d.error || 'Could not reach the journal');
        return;
      }
      notes = d.notes || []; names = d.names || FALLBACK_NAMES;
      fillWho(); render();
    });
  }

  /* ---------- unlock / lock ---------- */
  $('#unlock-form').addEventListener('submit', function (e) {
    e.preventDefault();
    var pass = $('#u-pass').value.trim();
    if (!pass) { $('#u-pass').focus(); return; }
    var btn = $('#u-go'); btn.disabled = true;
    T.journalApi('unlock', { pass: pass }, function (d) {
      btn.disabled = false;
      if (!d.ok) { T.toast(d.error || 'Could not unlock'); $('#u-pass').select(); return; }
      session = { token: d.token, role: d.role };
      T.journalSession(session);
      names = d.names || names;
      $('#u-pass').value = '';
      setState(); fillWho(); load();
      T.toast(d.role === 'admin' ? 'Welcome, admin' : 'Welcome to the family journal');
    });
  });
  $('#lock-link').addEventListener('click', function (e) {
    e.preventDefault();
    T.journalSession(null); session = null; notes = [];
    setState(); T.toast('Locked');
  });

  /* ---------- post ---------- */
  $('#filter').addEventListener('change', function (e) { filter = e.target.value; render(); });
  $('#note-form').addEventListener('submit', function (e) {
    e.preventDefault();
    var title = $('#n-title').value.trim(), text = $('#n-text').value.trim(), who = $('#n-who').value;
    if (!title || !text) { T.toast('Give the note a title and some text'); return; }
    T.store.set('trips_who', who);
    var btn = $('#n-save'); btn.disabled = true; btn.textContent = 'Posting…';
    T.journalApi('post', { place: $('#n-place').value, who: who, date: $('#n-date').value, title: title, text: text, website: $('#n-website').value }, function (d) {
      btn.disabled = false; btn.textContent = 'Post it';
      if (!d.ok) { T.toast(d.error || 'Could not post'); return; }
      notes.push(d.note);
      $('#n-title').value = ''; $('#n-text').value = '';
      filter = ''; $('#filter').value = '';
      T.toast('Posted — thank you, ' + who + '!');
      render();
      window.scrollTo({ top: $('#timeline').offsetTop - 90, behavior: 'smooth' });
    });
  });

  setState();
  if (session) load(); else $('#u-pass').focus();
})();
