/* slideshow.js — random destinations, auto-advancing */
(function () {
  var T = window.TRIPS;
  var scope = 'both', onlyPhotos = false, interval = 10;
  var order = [], pos = -1, timer = null, playing = true;

  function build() {
    var leaves = T.leaves().filter(function (p) {
      if (scope !== 'both' && p.scope !== scope) return false;
      if (onlyPhotos && !T.photosOf(p.id).length) return false;
      return true;
    });
    order = T.shuffle(leaves);
    pos = -1;
  }
  function highlights(p) {
    var pool = [];
    (p.mustSee || []).slice(0, 4).forEach(function (s) { pool.push('🏛️ ' + s); });
    (p.funFacts || []).forEach(function (s) { pool.push('✨ ' + s); });
    (p.food || []).slice(0, 2).forEach(function (s) { pool.push('🍛 ' + s); });
    return T.sample(pool, 3);
  }
  function show(step) {
    if (!order.length) { $('#content').innerHTML = '<h2>No places match</h2><p>Try another filter.</p>'; return; }
    pos = (pos + step + order.length) % order.length;
    var p = order[pos];
    var photos = T.photosOf(p.id);
    var pic = T.picture(p);
    var bg = $('#bg');
    bg.className = 'bg';
    var old = $('.polaroid', $('#show')); if (old) old.remove();
    var oldCredit = $('.credit', $('#show')); if (oldCredit) oldCredit.remove();
    if (pic || photos.length) {
      // the realistic picture fills the background; our own photo sits on top as a polaroid
      bg.style.backgroundImage = 'url(\'' + (pic || T.pick(photos).src) + '\')';
      bg.innerHTML = '';
      void bg.offsetWidth; bg.classList.add('kb');   // restart the ken-burns animation
      if (pic && photos.length) {
        var ph = T.pick(photos);
        $('#show').insertAdjacentHTML('beforeend', '<div class="polaroid"><img src="' + T.esc(ph.src) + '" alt=""><span>' + T.esc(ph.caption || 'our photo') + '</span></div>');
      }
      if (pic) $('#show').insertAdjacentHTML('beforeend', '<div class="credit">Picture: Wikipedia</div>');
    } else {
      bg.style.backgroundImage = T.gradientFor(p);
      bg.innerHTML = '<div class="emoji">' + p.emoji + '</div>';
    }
    var visited = T.visitedLabel(p);
    var c = $('#content');
    c.style.animation = 'none'; void c.offsetWidth; c.style.animation = '';
    c.innerHTML = '<div class="where">' + T.esc(T.locationLabel(p)) + '</div><h2>' + p.emoji + ' ' + T.esc(p.name) + '</h2>' +
      '<div class="tagline">' + T.esc(p.tagline || '') + '</div><ul>' +
      highlights(p).map(function (h) { return '<li>' + T.esc(h).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>') + '</li>'; }).join('') + '</ul>' +
      (visited ? '<span class="visited">📅 Visited ' + T.esc(visited) + '</span>' : '');
    $('#counter').textContent = (pos + 1) + ' / ' + order.length;
    $('#open').href = 'place.html?id=' + p.id;
    restartBar();
  }
  function restartBar() {
    var bar = $('#bar');
    bar.style.transition = 'none'; bar.style.width = '0';
    void bar.offsetWidth;
    if (playing) { bar.style.transition = 'width ' + interval + 's linear'; bar.style.width = '100%'; }
  }
  function schedule() {
    clearInterval(timer);
    if (playing) timer = setInterval(function () { show(1); }, interval * 1000);
  }
  function setPlaying(v) {
    playing = v;
    $('#toggle').textContent = playing ? '⏸' : '▶';
    schedule(); restartBar();
  }

  $$('#scope-chips .chip').forEach(function (c) {
    c.addEventListener('click', function () {
      $$('#scope-chips .chip').forEach(function (x) { x.classList.remove('active'); });
      c.classList.add('active'); scope = c.getAttribute('data-scope');
      build(); show(1); schedule();
    });
  });
  $('#interval').addEventListener('change', function (e) { interval = +e.target.value; schedule(); restartBar(); });
  $('#only-photos').addEventListener('change', function (e) { onlyPhotos = e.target.checked; build(); show(1); schedule(); });
  $('#prev').addEventListener('click', function () { show(-1); schedule(); });
  $('#next').addEventListener('click', function () { show(1); schedule(); });
  $('#toggle').addEventListener('click', function () { setPlaying(!playing); });
  $('#fs').addEventListener('click', function () {
    var el = $('#show');
    if (document.fullscreenElement) document.exitFullscreen();
    else if (el.requestFullscreen) el.requestFullscreen();
  });
  document.addEventListener('keydown', function (e) {
    if (e.target.tagName === 'SELECT' || e.target.tagName === 'INPUT') return;
    if (e.key === ' ') { e.preventDefault(); setPlaying(!playing); }
    if (e.key === 'ArrowRight') { show(1); schedule(); }
    if (e.key === 'ArrowLeft') { show(-1); schedule(); }
    if (e.key.toLowerCase() === 'f') $('#fs').click();
  });

  build(); show(1); schedule();
})();
