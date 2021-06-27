<?php
  session_start();
  require_once('conn.php');
  require_once('utils.php');
  if(empty($_GET['id'])) {
    header('Location: admin.php?errCode=1');
    die('資料不齊全');
  }
  $id = $_GET['id'];
  $role = $_POST['role'];
  $username = $_SESSION['username'];
  $sql = "update jess_users set role=? where id=?";
  $stmt = $conn -> prepare($sql);
  $stmt -> bind_param('ii', $role, $id);
  $result = $stmt -> execute();
  if (!$result) {
    die($conn -> error);
  }
  header("Location: admin.php")
?>
