<?php
$db_file = __DIR__ . '/db/nova_dev.sqlite';

try {
  $connection = new PDO("sqlite:$db_file");
  $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
  die(json_encode([
    'success' => false,
    'message' => 'SQLite connection failed: ' . $e->getMessage()

  ]));
}
