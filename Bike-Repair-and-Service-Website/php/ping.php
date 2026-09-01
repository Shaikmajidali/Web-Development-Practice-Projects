<?php
/**
 * ============================================================
 * DIAGNOSTIC TEST ENDPOINT — not called by the website itself.
 *
 * Visit this file directly in a browser after uploading to Hostinger:
 *     https://masterbykeservice.com/php/ping.php
 *
 * You should see exactly this JSON:
 *     {"success":true,"message":"PHP is running correctly on this server."}
 *
 * If instead you see a blank page, a "404 Not Found", the raw PHP
 * source code, or a file download prompt — PHP is NOT executing on
 * this path, which is why book_now.php and contact.php show
 * "Could not reach the server" on the website. That means the
 * upload/hosting setup needs fixing (wrong folder, PHP not enabled
 * on this domain, wrong file permissions), not the PHP code itself.
 *
 * Safe to delete this file once everything is confirmed working.
 * ============================================================
 */

require_once __DIR__ . '/helpers.php';

jsonResponse(true, 'PHP is running correctly on this server.', [
    'php_version' => PHP_VERSION,
    'server_time' => date('d M Y, h:i:s A'),
]);
