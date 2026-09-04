<?php
/* moderate.php — Simon's moderation page: log in with the admin key (from the
   server config), see every note, delete or approve. Also the landing page
   for the one-click links in the notification emails. */
declare(strict_types=1);
require __DIR__ . '/lib.php';
$cfg = jr_config();

/* login / logout */
if (isset($_POST['login'])) {
    if (hash_equals((string)$cfg['admin_key'], (string)($_POST['key'] ?? ''))) {
        setcookie('trips_admin', (string)$_POST['key'], ['expires' => time() + 60 * 86400, 'path' => dirname($_SERVER['SCRIPT_NAME']), 'secure' => true, 'httponly' => true, 'samesite' => 'Lax']);
        header('Location: moderate.php'); exit;
    }
    $error = 'Wrong key.';
}
if (isset($_GET['logout'])) { setcookie('trips_admin', '', time() - 3600, dirname($_SERVER['SCRIPT_NAME'])); header('Location: moderate.php'); exit; }

$admin = jr_is_admin();
$msg = $_GET['msg'] ?? '';

/* actions from the buttons on this page */
if ($admin && isset($_POST['do'], $_POST['id'])) {
    $id = (string)$_POST['id']; $do = $_POST['do'] === 'approve' ? 'approve' : 'delete';
    jr_with_notes(function (array $notes) use ($id, $do) {
        foreach ($notes as $i => $n) if (($n['id'] ?? '') === $id) { if ($do === 'delete') unset($notes[$i]); else $notes[$i]['status'] = 'approved'; }
        return $notes;
    });
    header('Location: moderate.php?msg=' . ($do === 'delete' ? 'deleted' : 'approved')); exit;
}
$notes = $admin ? array_reverse(jr_notes()) : [];
?>
<!DOCTYPE html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Journal moderation · Trips &amp; Tours</title>
<link rel="stylesheet" href="../css/style.css">
<style>
  .note-row { padding: 14px 16px; margin-bottom: 12px; }
  .note-row .head { display: flex; gap: 10px; align-items: baseline; flex-wrap: wrap; }
  .note-row .body { white-space: pre-line; color: var(--ink-2); margin: 6px 0 10px; }
  .note-row form { display: inline; }
  .pending { border-left: 4px solid var(--gold); }
</style></head>
<body>
<main class="wrap" style="max-width:820px">
  <div class="page-head"><div class="eyebrow">Trips &amp; Tours</div><h1>Journal moderation</h1>
  <p class="lead"><a href="../journal.html">← Back to the journal</a></p></div>

  <?php if ($msg === 'deleted'): ?><div class="card pad" style="border-left:4px solid var(--terracotta);margin-bottom:18px">Note deleted.</div><?php endif; ?>
  <?php if ($msg === 'approved'): ?><div class="card pad" style="border-left:4px solid var(--sage);margin-bottom:18px">Note approved.</div><?php endif; ?>

  <?php if (!$admin): ?>
    <form method="post" class="card pad" style="max-width:420px">
      <label class="field">Admin key</label>
      <input type="password" name="key" autocomplete="current-password" style="margin-bottom:12px">
      <?php if (!empty($error)): ?><p style="color:var(--terracotta)"><?= h($error) ?></p><?php endif; ?>
      <button class="btn" name="login" value="1">Log in</button>
    </form>
  <?php else: ?>
    <p class="muted small"><?= count($notes) ?> note<?= count($notes) === 1 ? '' : 's' ?> · posting is <?= !empty($cfg['auto_approve']) ? 'immediate' : 'approve-first' ?> · <a href="?logout=1">log out</a></p>
    <?php if (!$notes): ?><div class="card pad muted">No notes yet.</div><?php endif; ?>
    <?php foreach ($notes as $n): $pending = ($n['status'] ?? 'approved') !== 'approved'; ?>
      <div class="card note-row<?= $pending ? ' pending' : '' ?>">
        <div class="head">
          <strong><?= h($n['title'] ?? '') ?></strong>
          <span class="muted small"><?= h($n['who'] ?? '') ?> · <?= h($n['place'] ?? '') ?> · <?= h($n['date'] ?? '') ?><?= $pending ? ' · <b>PENDING</b>' : '' ?></span>
        </div>
        <div class="body"><?= h($n['text'] ?? '') ?></div>
        <?php if ($pending): ?>
          <form method="post"><input type="hidden" name="id" value="<?= h($n['id']) ?>"><button class="btn sm" name="do" value="approve">Approve</button></form>
        <?php endif; ?>
        <form method="post" onsubmit="return confirm('Delete this note?')"><input type="hidden" name="id" value="<?= h($n['id']) ?>"><button class="btn sm secondary" name="do" value="delete">Delete</button></form>
        <span class="muted small" style="margin-left:8px">posted <?= h($n['created'] ?? '') ?> · id <?= h($n['id']) ?></span>
      </div>
    <?php endforeach; ?>
  <?php endif; ?>
</main>
</body></html>
