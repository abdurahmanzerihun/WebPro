<?php
header('Content-Type: application/json');
require_once __DIR__ . '/../../php/connect.php';

try {
  $stmt = $connection->query("SELECT * FROM message ORDER BY created_at DESC");
  $messages = $stmt->fetchAll(PDO::FETCH_ASSOC);
  echo json_encode($messages);
} catch (PDOException $e) {
  http_response_code(500);
  echo json_encode(['error' => $e->getMessage()]);
}
