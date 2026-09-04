<?php
/* lib.php — shared bits for the family-journal API (journal.php, moderate.php).
   No database: notes live in api/journal-data/notes.json on the server.
   The config (names, passphrase hash, admin key, email) lives ABOVE the web
   root in /domains/simonkayar.com/trips-journal-config.php — uploaded with
   `python tools/deploy_ftp.py --config`, never committed. */
declare(strict_types=1);

function jr_config(): array {
    static $cfg = null;
    if ($cfg !== null) return $cfg;
    $candidates = [dirname(__DIR__, 3) . '/trips-journal-config.php', __DIR__ . '/config.php'];
    foreach ($candidates as $f) {
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

/* run $fn while holding an exclusive lock on the notes file */
function jr_with_notes(callable $fn) {
    $file = jr_data_dir() . '/notes.json';
    $fp = fopen("$file.lock", 'c');
    flock($fp, LOCK_EX);
    try {
        $notes = jr_read($file);
        $result = $fn($notes);          // $notes is passed by value; $fn returns the new list (or null = unchanged)
        if (is_array($result)) jr_write($file, $result);
    } finally {
        flock($fp, LOCK_UN);
        fclose($fp);
    }
    return $result;
}

function jr_notes(): array { return jr_read(jr_data_dir() . '/notes.json'); }

/* per-note token so an email link can delete/approve without the admin password */
function jr_token(string $id): string { return hash_hmac('sha256', $id, jr_config()['secret']); }

function jr_is_admin(): bool {
    $cfg = jr_config();
    $key = $_POST['key'] ?? $_GET['key'] ?? $_COOKIE['trips_admin'] ?? '';
    return $key !== '' && hash_equals((string)$cfg['admin_key'], (string)$key);
}

function jr_public(array $n): array { unset($n['ip']); return $n; }

function jr_base_url(): string {
    $https = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off') || ($_SERVER['HTTP_X_FORWARDED_PROTO'] ?? '') === 'https';
    return ($https ? 'https' : 'http') . '://' . ($_SERVER['HTTP_HOST'] ?? 'simonkayar.com') . rtrim(dirname($_SERVER['SCRIPT_NAME'] ?? '/'), '/');
}

function h(string $s): string { return htmlspecialchars($s, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8'); }
