<?php
/* journal.php — the family journal API. Everything except unlock needs a session token.
     POST ?action=unlock  {pass}                        → {ok, role:'family'|'admin', token, names}
     POST ?action=list    {token}                       → {ok, notes:[…]}
     POST ?action=post    {token, place, who, date, title, text, website}  → {ok, note}
     POST ?action=delete  {token, id}                   → {ok}          (admin only)
     GET  ?action=delete&id=…&t=<note token>            → tiny HTML page (link in the email)
   Spam / abuse protection: passphrase (family) or admin passphrase, session tokens,
   unlock attempts limited per IP, honeypot field "website", posts limited per IP,
   length and link limits. The site escapes everything when displaying. */
declare(strict_types=1);
require __DIR__ . '/lib.php';

header('Cache-Control: no-store');
$cfg = jr_config();
$action = $_GET['action'] ?? '';
$method = $_SERVER['REQUEST_METHOD'];

function out(array $d, int $code = 200): void {
    http_response_code($code);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode($d, JSON_UNESCAPED_UNICODE);
    exit;
}
function fail(int $code, string $msg): void { out(['ok' => false, 'error' => $msg], $code); }

/* ---------- delete from the email link (GET with the per-note token) ---------- */
if ($method === 'GET' && $action === 'delete') {
    $id = (string)($_GET['id'] ?? ''); $t = (string)($_GET['t'] ?? '');
    $okTok = $id !== '' && $t !== '' && hash_equals(jr_note_token($id), $t);
    $found = false;
    if ($okTok) jr_with_notes(function (array $notes) use ($id, &$found) {
        foreach ($notes as $i => $n) if (($n['id'] ?? '') === $id) { unset($notes[$i]); $found = true; }
        return $notes;
    });
    header('Content-Type: text/html; charset=utf-8');
    $msg = !$okTok ? 'That link is not valid.' : ($found ? 'The note has been deleted.' : 'That note was already deleted.');
    echo '<!DOCTYPE html><meta charset="utf-8"><title>Trips journal</title><body style="font-family:system-ui;padding:40px;color:#1f2a30"><h2>Trips journal</h2><p>' . h($msg) . '</p><p><a href="../journal.html">Back to the journal</a></p></body>';
    exit;
}

if ($method !== 'POST') fail(400, 'Unknown request.');
$in = json_decode((string)file_get_contents('php://input'), true);
if (!is_array($in)) fail(400, 'Bad request.');

/* ---------- unlock: passphrase → session token ---------- */
if ($action === 'unlock') {
    if (!jr_rate('unlock', 10)) fail(429, 'Too many tries — wait a while and try again.');
    $pass = strtolower(trim((string)($in['pass'] ?? '')));
    $role = null;
    if ($pass !== '' && hash_equals((string)$cfg['admin_pass_hash'], hash('sha256', $pass))) $role = 'admin';
    elseif ($pass !== '' && hash_equals((string)$cfg['pass_hash'], hash('sha256', $pass))) $role = 'family';
    if (!$role) fail(403, 'That is not the family passphrase.');
    out(['ok' => true, 'role' => $role, 'token' => jr_make_token($role), 'names' => $cfg['names']]);
}

/* ---------- everything below needs a valid token ---------- */
$role = jr_token_role((string)($in['token'] ?? ''));
if (!$role) fail(401, 'Please enter the family passphrase.');

if ($action === 'list') {
    out(['ok' => true, 'role' => $role, 'names' => $cfg['names'], 'notes' => array_map('jr_public', jr_notes())]);
}

if ($action === 'delete') {
    if ($role !== 'admin') fail(403, 'Only the admin can delete notes.');
    $id = (string)($in['id'] ?? ''); $found = false;
    jr_with_notes(function (array $notes) use ($id, &$found) {
        foreach ($notes as $i => $n) if (($n['id'] ?? '') === $id) { unset($notes[$i]); $found = true; }
        return $notes;
    });
    if (!$found) fail(404, 'No such note (maybe already deleted).');
    out(['ok' => true]);
}

if ($action !== 'post') fail(400, 'Unknown request.');

/* ---------- post ---------- */
if (trim((string)($in['website'] ?? '')) !== '') fail(400, 'Rejected.');           // honeypot
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
if (!jr_rate('post', (int)($cfg['max_per_hour'] ?? 5))) fail(429, 'Too many notes in one hour from here — try again a little later.');

$id = 'srv-' . gmdate('Ymd-His') . '-' . bin2hex(random_bytes(3));
$note = ['id' => $id, 'place' => $place, 'who' => $who, 'date' => $date, 'title' => $title, 'text' => $text,
         'created' => gmdate('c'), 'ip' => $_SERVER['REMOTE_ADDR'] ?? '0'];
jr_with_notes(function (array $notes) use ($note) { $notes[] = $note; return $notes; });

/* notify by email with a one-click delete link */
$base = jr_base_url();
$body = implode("\n", [
    "$who added a note to the Trips journal.", '',
    "Place: $place", "Date:  $date", "Title: $title", '', $text, '',
    'Delete this note: ' . "$base/journal.php?action=delete&id=$id&t=" . jr_note_token($id),
    'Journal: ' . dirname($base) . '/journal.html',
]);
$headers = 'From: ' . $cfg['from_email'] . "\r\nReply-To: " . $cfg['from_email'] . "\r\nContent-Type: text/plain; charset=UTF-8";
@mail($cfg['notify_email'], "[Trips journal] $who: $title", $body, $headers);

out(['ok' => true, 'note' => jr_public($note)]);
