<?php
/**
 * Simple contact form handler for the MyBookCentral static site.
 * Sends form submissions to the library's mailbox using PHP's built-in
 * mail() function, which SiteGround shared hosting supports out of the box.
 *
 * No external libraries required. Returns JSON so the front-end JS
 * (assets/js/main.js) can show a success/error status without reloading
 * the page.
 */

header('Content-Type: application/json');

// Only allow POST.
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['message' => 'Method not allowed.']);
    exit;
}

// Honeypot spam trap: real visitors never fill this hidden field in.
if (!empty($_POST['website'])) {
    // Pretend success so bots don't learn the trap worked.
    echo json_encode(['message' => "Thanks for your message! We'll be in touch soon."]);
    exit;
}

function clean_field($value) {
    $value = trim($value ?? '');
    // Strip characters that could be used for header injection in a mail client.
    $value = str_replace(["\r", "\n"], '', $value);
    return $value;
}

$name = clean_field($_POST['name'] ?? '');
$email = clean_field($_POST['email'] ?? '');
$phone = clean_field($_POST['phone'] ?? '');
$message = trim($_POST['message'] ?? '');

$errors = [];
if ($name === '') {
    $errors[] = 'Name is required.';
}
if ($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'A valid email address is required.';
}
if ($message === '') {
    $errors[] = 'Message is required.';
}

if (!empty($errors)) {
    http_response_code(400);
    echo json_encode(['message' => implode(' ', $errors)]);
    exit;
}

$to = 'fdml@pmt.org';
$subject = 'Website message from ' . $name;

$bodyLines = [
    "Name: $name",
    "Email: $email",
];
if ($phone !== '') {
    $bodyLines[] = "Phone: $phone";
}
$bodyLines[] = '';
$bodyLines[] = 'Message:';
$bodyLines[] = $message;
$body = implode("\r\n", $bodyLines);

// Send "from" the site's own domain, but let the library reply directly to
// the visitor. Using an on-domain From address helps with spam filtering.
$hostname = $_SERVER['HTTP_HOST'] ?? 'mybookcentral.com';
$fromAddress = 'no-reply@' . preg_replace('/^www\./', '', $hostname);

$headers = [];
$headers[] = "From: Book Central Website <$fromAddress>";
$headers[] = "Reply-To: $name <$email>";
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-Type: text/plain; charset=UTF-8';

$sent = mail($to, $subject, $body, implode("\r\n", $headers));

if ($sent) {
    echo json_encode(['message' => "Thanks for your message! We'll be in touch soon."]);
} else {
    http_response_code(500);
    echo json_encode(['message' => 'We could not send your message. Please try again or email fdml@pmt.org directly.']);
}
