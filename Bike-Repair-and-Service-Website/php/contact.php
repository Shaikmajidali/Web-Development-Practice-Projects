<?php
require_once __DIR__ . '/helpers.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    jsonResponse(false, 'Invalid request method.');
}

$fullName  = cleanInput($_POST['fullName'] ?? '');
$phone     = cleanInput($_POST['phone'] ?? '');
$email     = cleanInput($_POST['email'] ?? '');
$bikeModel = cleanInput($_POST['bikeModel'] ?? '');
$service   = cleanInput($_POST['service'] ?? '');
$message   = cleanInput($_POST['message'] ?? '');

if ($fullName === '' || $phone === '' || $email === '' || $bikeModel === '' || $service === '') {
    jsonResponse(false, 'Please fill in all required fields.');
}
if (!isValidIndianPhone($phone)) {
    jsonResponse(false, 'Please enter a valid 10-digit mobile number.');
}
if (!isValidEmail($email)) {
    jsonResponse(false, 'Please enter a valid email address.');
}

$emailed = notifyOwnerByEmail('New Contact Form Message - ' . $fullName, [
    'A customer sent a message through your website contact form.',
    '',
    'Full Name        : ' . $fullName,
    'Phone Number     : ' . $phone,
    'Email            : ' . $email,
    'Bike Model       : ' . $bikeModel,
    'Service Required : ' . $service,
    'Message          : ' . ($message !== '' ? $message : '(no message provided)'),
    '',
    'Sent at          : ' . date('d M Y, h:i A'),
    'Your notification number on file: ' . OWNER_PHONE,
]);

notifyOwnerBySms('New contact form message from ' . $fullName . ' (' . $phone . '), about ' . $service . '.');

if (!$emailed) {
    jsonResponse(false, 'Message received, but we could not send the notification email. Please call us directly.');
}

jsonResponse(true, 'Message sent! Our team will get back to you shortly.');
