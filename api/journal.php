<?php
/* journal.php — the family journal API.
     GET  journal.php?action=list                → {ok, notes:[…approved…], names:[…]}
     POST journal.php?action=post  (JSON body)   → {ok, note}   body: {place, who, date, title, text, pass, website}
     GET/POST journal.php?action=delete|approve&id=…&t=<token>   (from the notification email)
     POST journal.php?action=delete|approve&id=…&key=<admin key>  (from moderate.php)
   Spam protection: family passphrase, honeypot field ("website"), per-IP rate limit,
   length limits, link limit. Everything is escaped by the site when displayed. */
declare(strict_types=1);
require __DIR__ . '/lib.php';

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
$cfg = jr_config();
$action = $_GET['action'] ?? $_POST['action'] ?? '';
$method = $_SERVER['REQUEST_METHOD'];

function fail(int $code, string $msg): void {
    http_response_code($code);
    echo json_encode(['ok' => false, 'error' => $msg], JSON_UNESCAPED_UNICODE);
    exit;
}

/* ---------- list (public) ---------- */
if ($action === 'list') {
    $notes = array_values(array_filter(jr_notes(), fn($n) => ($n['status'] ?? 'approved') === 'approved'));
    echo json_encode(['ok' => true, 'notes' => array_map('jr_public', $notes), 'names' => $cfg['names']], JSON_UNESCAPED_UNICODE);
    exit;
}

/* ---------- delete / approve (admin key, or the per-note token from the email) ---------- */
if ($action === 'delete' || $action === 'approve') {
    $id = (string)($_REQUEST['id'] ?? '');
    $t = (string)($_REQUEST['t'] ?? '');
    $byToken = $id !== '' && $t !== '' && hash_equals(jr_token($id), $t);
    if (!$byToken && !jr_is_admin()) fail(403, 'Not allowed.');
    $found = false;
    jr_with_notes(function (array $notes) use ($id, $action, &$found) {
        foreach ($notes as $i => $n) {
            if (($n['id'] ?? '') === $id) {
                $found = true;
                if ($action === 'delete') unset($notes[$i]); else $notes[$i]['status'] = 'approved';
            }
        }
        return $notes;
    });
    if (!$found) fail(404, 'No such note (maybe already deleted).');
    if ($method === 'GET') {           // clicked from the email → show a friendly page
        header('Location: moderate.php?msg=' . ($action === 'delete' ? 'deleted' : 'approved'), true, 302);
        exit;
    }
    echo json_encode(['ok' => true]);
    exit;
}

/* ---------- post ---------- */
if ($method !== 'POST' || $action !== 'post') fail(400, 'Unknown request.');
$in = json_decode((string)file_get_contents('php://input'), true);
if (!is_array($in)) fail(400, 'Bad request.');

if (trim((string)($in['website'] ?? '')) !== '') fail(400, 'Rejected.');           // honeypot: humans never see this field
$pass = strtolower(trim((string)($in['pass'] ?? '')));
if ($pass === '' || !hash_equals((string)$cfg['pass_hash'], hash('sha256', $pass))) fail(403, 'That is not the family passphrase.');

$who = trim((string)($in['who'] ?? ''));
if (!in_array($who, $cfg['names'], true)) fail(400, 'Pick who you are.');
$place = trim((string)($in['place'] ?? ''));
if (!preg_match('/^[a-z0-9\-]{1,60}$/', $place)) fail(400, 'Pick a place.');
$date = trim((string)($in['date'] ?? ''));
if (!preg_match('/^\d{4}-\d{2}(-\d{2})?$/', $date)) fail(400, 'Pick a date.');
$title = trim((string)preg_replace('/\s+/', ' ', (string)($in['title'] ?? '')));
$text = trim(str_replace("\r\n", "\n", (string)($in['text'] ?? '')));
if ($title === '' || mb_strlen($title) > 120) fail(400, 'The title needs 1–120 characters.');
if ($text === '' || mb_strlen($text) > 2000) fail(400, 'The story needs 1–2000 characters.');
if (substr_count(strtolower($title . ' ' . $text), 'http') > 2) fail(400, 'Too many links for a journal note.');

/* rate limit: N posts per IP per hour */
$ip = $_SERVER['REMOTE_ADDR'] ?? '0';
$now = time();
$rateFile = jr_data_dir() . '/ratelimit.json';
$rate = [];
foreach (jr_read($rateFile) as $k => $ts) {
    $ts = array_values(array_filter((array)$ts, fn($x) => $x > $now - 3600));
    if ($ts) $rate[$k] = $ts;
}
$hits = $rate[$ip] ?? [];
if (count($hits) >= (int)($cfg['max_per_hour'] ?? 5)) fail(429, 'Too many notes in one hour from here — try again a little later.');
$hits[] = $now;
$rate[$ip] = $hits;
file_put_contents($rateFile, json_encode($rate), LOCK_EX);

$id = 'srv-' . gmdate('Ymd-His') . '-' . bin2hex(random_bytes(3));
$note = [
    'id' => $id, 'place' => $place, 'who' => $who, 'date' => $date, 'title' => $title, 'text' => $text,
    'status' => !empty($cfg['auto_approve']) ? 'approved' : 'pending',
    'created' => gmdate('c'), 'ip' => $ip,
];
jr_with_notes(function (array $notes) use ($note) { $notes[] = $note; return $notes; });

/* notify by email, with one-click links */
$base = jr_base_url();
$t = jr_token($id);
$lines = [
    "$who added a note to the Trips journal.", '',
    "Place: $place", "Date:  $date", "Title: $title", '', $text, '',
    'Delete this note:  ' . "$base/journal.php?action=delete&id=$id&t=$t",
];
if ($note['status'] === 'pending') $lines[] = 'Approve this note: ' . "$base/journal.php?action=approve&id=$id&t=$t";
$lines[] = 'Moderate all notes: ' . "$base/moderate.php";
$headers = 'From: ' . $cfg['from_email'] . "\r\nReply-To: " . $cfg['from_email'] . "\r\nContent-Type: text/plain; charset=UTF-8";
@mail($cfg['notify_email'], "[Trips journal] $who: $title", implode("\n", $lines), $headers);

echo json_encode(['ok' => true, 'note' => jr_public($note)], JSON_UNESCAPED_UNICODE);
