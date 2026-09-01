<?php
require_once __DIR__ . '/helpers.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    jsonResponse(false, 'Invalid request method.');
}

$phone   = cleanInput($_POST['phone'] ?? '');
$service = cleanInput($_POST['service'] ?? 'Quick booking (popup form)');

if (!isValidIndianPhone($phone)) {
    jsonResponse(false, 'Please enter a valid 10-digit mobile number.');
}

$emailed = notifyOwnerByEmail('New Bike Service Booking - ' . $phone, [
    'A customer just booked a service on your website.',
    '',
    'Customer phone : ' . $phone,
    'Service        : ' . $service,
    'Booked at      : ' . date('d M Y, h:i A'),
    '',
    'Call or WhatsApp them back on the number above.',
    'Your notification number on file: ' . OWNER_PHONE,
]);

notifyOwnerBySms('New booking from ' . $phone . ' (' . $service . '). Call them back.');

if (!$emailed) {
    jsonResponse(false, 'Booking received, but we could not send the notification email. Please call us directly to confirm.');
}

jsonResponse(true, 'Booking request received! Our team will contact you shortly.');
