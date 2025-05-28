<?php
header('Content-Type: application/json');
require_once('./connect.php');

$json = file_get_contents('php://input');
$data = json_decode($json, true);

if (!isset($data['first_name'], $data['last_name'], $data['phone_number'], $data['email'], $data['message'])) {
  http_response_code(400);

  echo json_encode([
    'success' => false,
  ]);
  exit;
}

$first_name = htmlspecialchars($data['first_name']);
$last_name = htmlspecialchars($data['last_name']);
$phone_number = htmlspecialchars($data['phone_number']);
$email = filter_var($data['email'], FILTER_SANITIZE_EMAIL);
$message = htmlspecialchars($data['message']);

try {
  $msg_stmt = $connection->prepare("INSERT INTO message (first_name, last_name, phone_number, email, message)
    VALUES (:first_name, :last_name, :phone_number, :email, :message)");

  $msg_stmt->execute([
    ':first_name' => $first_name,
    ':last_name' => $last_name,
    ':phone_number' => $phone_number,
    ':email' => $email,
    ':message' => $message,
  ]);

  echo json_encode([
    'success' => true,
  ]);
} catch (PDOException $e) {
  http_response_code(500);
  echo json_encode([
    'success' => false,
    'message' => 'Database error: ' . $e->getMessage(),
  ]);
}
