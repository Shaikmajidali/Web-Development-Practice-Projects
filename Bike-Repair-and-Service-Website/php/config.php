<?php
/**
 * ============================================================
 * SITE CONFIGURATION
 * This site does NOT use a database — form submissions are sent
 * straight to the garage owner's email via PHP's built-in mail().
 * Nothing is stored on the server.
 * ============================================================
 */

// Ensures date()/time() in email notifications show the correct local
// time and avoids a PHP timezone warning on hosts that don't set one.
date_default_timezone_set('Asia/Kolkata');

// ---- Garage contact details ----
define('OWNER_EMAIL', 'masterbykeservice@gmail.com');
define('OWNER_PHONE', '8688287636'); // included in every notification so the owner can call/WhatsApp back

// ---- Outgoing email "From" address ----
// This MUST be an address on your own domain (masterbykeservice.com).
// Hostinger (and most hosts) will silently drop or spam-filter mail()
// sent with a free Gmail "From" address — it has to match your domain.
// You do not need a real inbox for this address to exist for mail() to
// work, but creating it in hPanel -> Emails is recommended so replies
// don't bounce.
define('MAIL_FROM_ADDRESS', 'no-reply@masterbykeservice.com');
define('MAIL_FROM_NAME', 'Masterbyke Service');

// ---- Optional: SMS / WhatsApp gateway (NOT configured by default) ----
// mail() can only send email — it cannot text a phone number. To also
// push a real SMS/WhatsApp alert to OWNER_PHONE, sign up with a gateway
// (Fast2SMS, MSG91, Twilio, Gupshup, etc.), fill these in, then flip
// SMS_ENABLED to true. See helpers.php -> notifyOwnerBySms().
define('SMS_ENABLED', false);
define('SMS_API_URL', '');   // e.g. 'https://www.fast2sms.com/dev/bulkV2'
define('SMS_API_KEY', '');
