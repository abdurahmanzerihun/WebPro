<?php
session_start();
header('Content-Type: application/json');
require_once "../../php/connect.php";

$json = file_get_contents('php://input');
$data = json_decode($json, true);

if (!isset($data['email'], $data['password'])) {
  http_response_code(400);

  echo json_encode([
    'success' => false,
    'message' => "Incorrect email or password!"
  ]);
  exit;
}

$email = $data['email'];
$password = $data['password'];

try {
  $stmt = $connection->prepare("SELECT * FROM admin WHERE email = :email");
  $stmt->bindParam(':email', $email);
  $stmt->execute();

  $user = $stmt->fetch(PDO::FETCH_ASSOC);

  if ($user && password_verify($password, $user['password'])) {
    $_SESSION['admin_logged_in'] = true;
    echo json_encode([
      'success' => true,
    ]);
  } else {
    http_response_code(401);
    echo json_encode([
      'success' => false,
    ]);
  }
} catch (PDOException $e) {
  http_response_code(500);
  echo json_encode([
    'success' => false,
    'message' => 'Database error: ' . $e->getMessage(),
  ]);
}
