<?php
/* lib.php — shared bits for the family-journal API (journal.php).
   No database: notes live in api/journal-data/notes.json on the server.
   The config (names, passphrase hashes, HMAC secret, email) lives ABOVE the web
   root in /domains/simonkayar.com/trips-journal-config.php — uploaded with
   `python tools/deploy_ftp.py --config`, never committed. */
declare(strict_types=1);

function jr_config(): array {
    static $cfg = null;
    if ($cfg !== null) return $cfg;
    foreach ([dirname(__DIR__, 3) . '/trips-journal-config.php', __DIR__ . '/config.php'] as $f) {
        if (file_exists($f)) { $cfg = require $f; return $cfg; }
    }
    http_response_code(500);
    header('Content-Type: application/json');
    echo json_encode(['ok' => false, 'error' => 'The journal is not configured on the server yet.']);
    exit;
}

function jr_data_dir(): string {
    $dir = __DIR__ . '/journal-data';
    if (!is_dir($dir)) mkdir($dir, 0755, true);
    // keep the raw files private even though the folder is inside the web root
    if (!file_exists("$dir/.htaccess")) file_put_contents("$dir/.htaccess", "Require all denied\n<IfModule !mod_authz_core.c>\nDeny from all\n</IfModule>\n");
    if (!file_exists("$dir/index.html")) file_put_contents("$dir/index.html", '');
    return $dir;
}

function jr_read(string $file): array {
    if (!file_exists($file)) return [];
    $d = json_decode((string)file_get_contents($file), true);
    return is_array($d) ? $d : [];
}

function jr_write(string $file, array $data): void {
    $tmp = $file . '.tmp';
    file_put_contents($tmp, json_encode(array_values($data), JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES), LOCK_EX);
    rename($tmp, $file);
}

/* run $fn while holding an exclusive lock on the notes file; $fn gets the list and returns the new one */
function jr_with_notes(callable $fn) {
    $file = jr_data_dir() . '/notes.json';
    $fp = fopen("$file.lock", 'c');
    flock($fp, LOCK_EX);
    try {
        $result = $fn(jr_read($file));
        if (is_array($result)) jr_write($file, $result);
    } finally {
        flock($fp, LOCK_UN);
        fclose($fp);
    }
    return $result;
}

function jr_notes(): array { return jr_read(jr_data_dir() . '/notes.json'); }

/* ---- session tokens: "role.expiry.signature", handed out by action=unlock ---- */
function jr_b64(string $s): string { return rtrim(strtr(base64_encode($s), '+/', '-_'), '='); }
function jr_make_token(string $role, int $days = 90): string {
    $payload = $role . '.' . (time() + $days * 86400);
    return $payload . '.' . jr_b64(hash_hmac('sha256', $payload, jr_config()['secret'], true));
}
/* returns 'family' | 'admin' | null */
function jr_token_role(?string $token): ?string {
    if (!$token || substr_count($token, '.') !== 2) return null;
    [$role, $exp, $sig] = explode('.', $token);
    if (!in_array($role, ['family', 'admin'], true) || (int)$exp < time()) return null;
    $good = jr_b64(hash_hmac('sha256', "$role.$exp", jr_config()['secret'], true));
    return hash_equals($good, $sig) ? $role : null;
}

/* per-note token so the email's delete link works without logging in */
function jr_note_token(string $id): string { return hash_hmac('sha256', 'note:' . $id, jr_config()['secret']); }

/* simple per-IP counters in ratelimit.json: jr_rate('post', 5) → true if allowed (and counts it) */
function jr_rate(string $kind, int $limit): bool {
    $file = jr_data_dir() . '/ratelimit.json';
    $key = $kind . ':' . ($_SERVER['REMOTE_ADDR'] ?? '0');
    $now = time();
    $rate = [];
    foreach (jr_read($file) as $k => $ts) {
        $ts = array_values(array_filter((array)$ts, fn($x) => $x > $now - 3600));
        if ($ts) $rate[$k] = $ts;
    }
    $hits = $rate[$key] ?? [];
    if (count($hits) >= $limit) return false;
    $hits[] = $now;
    $rate[$key] = $hits;
    file_put_contents($file, json_encode($rate), LOCK_EX);
    return true;
}

function jr_public(array $n): array { unset($n['ip']); return $n; }

function jr_base_url(): string {
    $https = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off') || ($_SERVER['HTTP_X_FORWARDED_PROTO'] ?? '') === 'https';
    return ($https ? 'https' : 'http') . '://' . ($_SERVER['HTTP_HOST'] ?? 'simonkayar.com') . rtrim(dirname($_SERVER['SCRIPT_NAME'] ?? '/'), '/');
}

function h(string $s): string { return htmlspecialchars($s, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8'); }
