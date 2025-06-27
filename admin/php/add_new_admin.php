<?php
require_once "../../php/connect.php";

$email = "admin@novadev.com";
$first_name = "John";
$last_name = "Doe";
$password = password_hash("novadevadmin", PASSWORD_DEFAULT);

$sql = "INSERT INTO admin (email, first_name, last_name, password) VALUES (?, ?, ?, ?)";
$stmt = $connection->prepare($sql);

if ($stmt->execute([$email, $first_name, $last_name, $password])) {
  echo "Admin Account Created!";
} else {
  echo "Error: " . $stmt->errorInfo();
}
