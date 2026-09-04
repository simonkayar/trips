<?php
/* Template for the journal config. The REAL file lives outside the web root at
   /domains/simonkayar.com/trips-journal-config.php (local copy in
   C:\Users\simon\.secrets\trips-journal-config.php) and is uploaded with
   `python tools/deploy_ftp.py --config`. Never commit the real one. */
return [
    'names'        => ['Simon', 'Kayar', 'Smitha', 'Kanni', 'Susi', 'Sana'],   // the "who" dropdown
    'pass_hash'    => hash('sha256', 'the-family-passphrase-in-lowercase'),   // compared case-insensitively
    'admin_key'    => 'long-random-string-for-moderate.php',
    'secret'       => 'another-long-random-string-for-email-links',
    'notify_email' => 'you@example.com',
    'from_email'   => 'journal@simonkayar.com',
    'auto_approve' => true,      // false = notes wait for approval (email has an approve link)
    'max_per_hour' => 5,         // posts per IP per hour
];
