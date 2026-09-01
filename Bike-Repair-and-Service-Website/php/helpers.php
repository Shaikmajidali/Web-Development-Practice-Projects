<?php
require_once __DIR__ . '/config.php';

// Every endpoint in this folder MUST always return valid JSON — even
// when something goes wrong on the server — because script.js calls
// response.json() on whatever comes back. If a PHP warning, notice,
// or fatal error ever leaked raw HTML/text into the response instead
// of JSON, the front-end's JSON.parse() would fail and show
// "Could not reach the server" even though PHP DID run.
error_reporting(0);
ini_set('display_errors', '0');

header('Content-Type: application/json; charset=utf-8');
// Blocks the JSON API from being embedded/sniffed cross-site.
header('X-Content-Type-Options: nosniff');

// Safety net: if a fatal error still slips through, catch it here and
// hand back valid JSON instead of PHP's default HTML error page.
register_shutdown_function(function () {
    $error = error_get_last();
    if ($error && in_array($error['type'], [E_ERROR, E_PARSE, E_CORE_ERROR, E_COMPILE_ERROR], true)) {
        if (!headers_sent()) {
            header('Content-Type: application/json; charset=utf-8');
        }
        echo json_encode([
            'success' => false,
            'message' => 'Something went wrong on the server. Please try again or call us directly.'
        ]);
    }
});

function jsonResponse($success, $message, $extra = []) {
    echo json_encode(array_merge(['success' => $success, 'message' => $message], $extra));
    exit;
}

function cleanInput($value) {
    return trim(htmlspecialchars(strip_tags($value ?? ''), ENT_QUOTES, 'UTF-8'));
}

function isValidIndianPhone($phone) {
    return (bool) preg_match('/^[6-9]\d{9}$/', $phone);
}

function isValidEmail($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL) !== false;
}

/**
 * Emails the garage owner. Uses PHP's built-in mail(), which Hostinger
 * and most shared hosting support without any setup, as long as
 * MAIL_FROM_ADDRESS in config.php is an address on your own domain
 * (masterbykeservice.com). If mail() is disabled on your plan or
 * messages land in spam, swap this for PHPMailer + a real SMTP
 * account (Hostinger email, Gmail SMTP, SendGrid, etc.) — keep the
 * same function signature and every endpoint below keeps working
 * unchanged.
 */
function notifyOwnerByEmail($subject, $bodyLines) {
    $to = OWNER_EMAIL;
    $body = implode("\r\n", $bodyLines);
    $body .= "\r\n\r\n-- Sent automatically from the masterbykeservice.com website";

    $headers  = "From: " . MAIL_FROM_NAME . " <" . MAIL_FROM_ADDRESS . ">\r\n";
    $headers .= "Reply-To: " . MAIL_FROM_ADDRESS . "\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    $headers .= "MIME-Version: 1.0\r\n";

    $safeSubject = str_replace(["\r", "\n"], '', $subject);

    return @mail($to, $safeSubject, $body, $headers);
}

/**
 * Optional SMS/WhatsApp push to OWNER_PHONE. Does nothing until you
 * configure a real gateway in config.php (SMS_ENABLED, SMS_API_URL,
 * SMS_API_KEY) — no free method can text an actual phone number.
 * The request format below is generic; adjust the field names to
 * match whichever provider's API docs you sign up with.
 */
function notifyOwnerBySms($text) {
    if (!SMS_ENABLED || SMS_API_URL === '' || SMS_API_KEY === '') {
        return false;
    }

    $ch = curl_init(SMS_API_URL);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_TIMEOUT, 8);
    curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query([
        'api_key' => SMS_API_KEY,
        'to'      => OWNER_PHONE,
        'message' => $text,
    ]));
    $result = curl_exec($ch);
    curl_close($ch);
    return $result !== false;
}
