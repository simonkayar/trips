<?php
/* Template for the journal config. The REAL file lives outside the web root at
   /domains/simonkayar.com/trips-journal-config.php (local copy in
   C:\Users\simon\.secrets\trips-journal-config.php) and is uploaded with
   `python tools/deploy_ftp.py --config`. Never commit the real one. */
return [
    'names'           => ['Simon', 'Kayar', 'Smitha', 'Kanni', 'Susi', 'Sana'],   // the "who" dropdown
    'pass_hash'       => hash('sha256', 'family-passphrase-in-lowercase'),        // unlocks reading + posting
    'admin_pass_hash' => hash('sha256', 'admin-passphrase-in-lowercase'),         // same, plus deleting
    'secret'          => 'long-random-string-that-signs-session-tokens-and-email-links',
    'notify_email'    => 'you@example.com',
    'from_email'      => 'journal@simonkayar.com',
    'max_per_hour'    => 5,          // posts per IP per hour (unlock attempts: 10/hour)
];
