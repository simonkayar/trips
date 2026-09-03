/* quiz.js — random quiz with "seen question" tracking so repeats are rare */
(function () {
  var T = window.TRIPS;
  var SEEN_KEY = 'trips_quiz_seen';
  var scope = 'both', placeId = T.param('place') || '';
  var pool = [], idx = 0, score = 0, answers = [];

  /* ----- setup screen ----- */
  function counts() {
    $$('#scope-opts .scope-opt').forEach(function (o) {
      var s = o.getAttribute('data-scope');
      $('.cnt', o).textContent = T.questionsFor(s, placeId).length + ' questions';
    });
    var seen = T.store.get(SEEN_KEY, []);
    $('#seen-note').textContent = seen.length ? seen.length + ' of ' + T.allQuestions().length + ' questions seen so far' : 'Fresh start — no questions seen yet';
  }
  $$('#scope-opts .scope-opt').forEach(function (o) {
    o.addEventListener('click', function () {
      $$('#scope-opts .scope-opt').forEach(function (x) { x.classList.remove('active'); });
      o.classList.add('active');
      scope = o.getAttribute('data-scope');
    });
  });
  var sel = $('#place');
  T.places.slice().sort(function (a, b) { return a.name.localeCompare(b.name); }).forEach(function (p) {
    var o = document.createElement('option');
    o.value = p.id; o.textContent = p.emoji + ' ' + p.name + (p.kind === 'place' ? '' : ' (all of ' + p.name + ')');
    if (p.id === placeId) o.selected = true;
    sel.appendChild(o);
  });
  sel.addEventListener('change', function () { placeId = sel.value; counts(); });
  $('#reset-seen').addEventListener('click', function () { T.store.set(SEEN_KEY, []); counts(); T.toast('Seen-question memory cleared'); });
  counts();

  /* ----- choose questions: unseen first, then least-recently-seen ----- */
  function choose(n) {
    var all = T.questionsFor(scope, placeId);
    var seen = T.store.get(SEEN_KEY, []);
    var unseen = all.filter(function (q) { return seen.indexOf(q.id) < 0; });
    var chosen = T.sample(unseen, n);
    if (chosen.length < n) {
      // everything in this scope has been seen — recycle the oldest ones
      var seenHere = seen.map(function (id) { return all.filter(function (q) { return q.id === id; })[0]; }).filter(Boolean);
      var pickedIds = chosen.map(function (q) { return q.id; });
      seenHere = seenHere.filter(function (q) { return pickedIds.indexOf(q.id) < 0; });
      chosen = chosen.concat(seenHere.slice(0, n - chosen.length));
      if (unseen.length === 0) T.toast('You have seen every question in this set — recycling the oldest ones');
    }
    // shuffle options per showing so the answer letter is not memorable
    return chosen.map(function (q) {
      var order = T.shuffle(q.a.map(function (_, i) { return i; }));
      return { id: q.id, place: q.place, q: q.q, why: q.why, a: order.map(function (i) { return q.a[i]; }), correct: order.indexOf(q.correct) };
    });
  }
  function markSeen(ids) {
    var seen = T.store.get(SEEN_KEY, []).filter(function (id) { return ids.indexOf(id) < 0; });
    seen = seen.concat(ids);                // newest at the end
    if (seen.length > 5000) seen = seen.slice(-5000);
    T.store.set(SEEN_KEY, seen);
  }

  /* ----- play ----- */
  $('#start').addEventListener('click', function () {
    var n = parseInt($('#num').value, 10);
    pool = choose(n);
    if (!pool.length) { T.toast('No questions for that selection yet'); return; }
    idx = 0; score = 0; answers = [];
    $('#setup').classList.add('hidden'); $('#result').classList.add('hidden'); $('#play').classList.remove('hidden');
    showQ();
  });
  $('#quit').addEventListener('click', function () { $('#play').classList.add('hidden'); $('#setup').classList.remove('hidden'); counts(); });
  $('#next').addEventListener('click', function () { idx++; if (idx >= pool.length) finish(); else showQ(); });
  $('#again').addEventListener('click', function () { $('#result').classList.add('hidden'); $('#setup').classList.remove('hidden'); counts(); window.scrollTo(0, 0); });

  function showQ() {
    var q = pool[idx], p = T.byId(q.place);
    $('#q-num').textContent = 'Question ' + (idx + 1) + ' of ' + pool.length;
    $('#q-score').textContent = 'Score ' + score;
    $('#q-bar').style.width = ((idx) / pool.length * 100) + '%';
    // the place is revealed only after answering — showing it up front gave away
    // questions like "which city is in Switzerland?"
    $('#q-place').textContent = '';
    $('#q-text').textContent = q.q;
    $('#q-why').classList.add('hidden'); $('#next').classList.add('hidden');
    $('#q-opts').innerHTML = q.a.map(function (opt, i) {
      return '<button class="q-opt" data-i="' + i + '"><span class="letter">' + 'ABCD'[i] + '</span><span>' + T.esc(opt) + '</span></button>';
    }).join('');
    $$('.q-opt').forEach(function (b) { b.addEventListener('click', function () { answer(+b.getAttribute('data-i')); }); });
  }
  function answer(i) {
    var q = pool[idx];
    var ok = i === q.correct;
    if (ok) score++;
    answers.push({ q: q, picked: i, ok: ok });
    $$('.q-opt').forEach(function (b, j) {
      b.disabled = true;
      if (j === q.correct) b.classList.add('correct');
      else if (j === i) b.classList.add('wrong');
    });
    var p = T.byId(q.place);
    $('#q-place').textContent = p ? p.emoji + ' ' + p.name + ' · ' + T.locationLabel(p) : '';
    var why = $('#q-why');
    why.innerHTML = (ok ? '✅ Correct! ' : '❌ Not quite — the answer is <strong>' + T.esc(q.a[q.correct]) + '</strong>. ') + T.esc(q.why || '');
    why.classList.remove('hidden');
    $('#q-score').textContent = 'Score ' + score;
    $('#next').textContent = idx + 1 >= pool.length ? 'See results →' : 'Next →';
    $('#next').classList.remove('hidden');
    $('#next').focus();
  }
  function finish() {
    markSeen(pool.map(function (q) { return q.id; }));
    $('#play').classList.add('hidden'); $('#result').classList.remove('hidden');
    var pct = Math.round(score / pool.length * 100);
    $('#r-title').textContent = pct === 100 ? 'Perfect! 🏆' : pct >= 70 ? 'Great memory! 🎉' : pct >= 40 ? 'Not bad! 🙂' : 'Time for another trip? 😄';
    $('#r-ring').style.setProperty('--pct', pct + '%');
    $('#r-score').textContent = score + '/' + pool.length;
    $('#r-msg').textContent = pct + '% correct';
    $('#r-review').innerHTML = answers.map(function (a) {
      var p = T.byId(a.q.place);
      return '<div class="review-item ' + (a.ok ? 'ok' : 'bad') + '"><div><strong>' + T.esc(a.q.q) + '</strong></div>' +
        '<div class="muted small">' + (a.ok ? '✓ ' : '✗ you said "' + T.esc(a.q.a[a.picked]) + '" · ') + 'Answer: ' + T.esc(a.q.a[a.q.correct]) +
        (p ? ' · <a href="place.html?id=' + p.id + '">' + T.esc(p.name) + '</a>' : '') + '</div></div>';
    }).join('');
    window.scrollTo(0, 0);
  }

  // keyboard: A-D / 1-4 to answer, Enter for next
  document.addEventListener('keydown', function (e) {
    if ($('#play').classList.contains('hidden')) return;
    var k = e.key.toUpperCase();
    var i = 'ABCD'.indexOf(k); if (i < 0) i = '1234'.indexOf(k);
    var btns = $$('.q-opt');
    if (i >= 0 && btns[i] && !btns[i].disabled) btns[i].click();
    // Enter advances — unless the Next button itself is focused, in which case the
    // browser already fires its click and we must not fire a second one.
    if (e.key === 'Enter' && document.activeElement !== $('#next') && !$('#next').classList.contains('hidden')) $('#next').click();
  });
})();
