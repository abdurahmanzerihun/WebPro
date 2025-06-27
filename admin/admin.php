<?php
session_start();

if (!isset($_SESSION['admin_logged_in']) || $_SESSION['admin_logged_in'] !== true) {
  header("Location: /admin/index.html");
  exit;
}
?>

<!doctype html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="icon" href="../favicon.png" />
  <title>NovaDev | Admin</title>
  <link href="../style/nav-bar.css" rel="stylesheet" />
</head>

<body>
  <div class="nav-bar">
    <div class="nav-header">
      <img src="../img/logo.png" class="logo" alt="logo" />
      <button class="menu-toggle" onclick="toggleMenu()">☰</button>
    </div>

    <ul id="nav-links">
      <li><a href="#message">Messages</a></li>
      <li><a href="./php/logout.php">Logout</a></li>
    </ul>
  </div>

  <div id="messages"></div>

  <script src="../script/nav-bar.js"></script>
  <script src="./js/data.js"></script>
</body>

</html>
