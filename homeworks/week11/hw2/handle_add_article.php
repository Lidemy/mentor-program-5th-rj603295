<?php
  session_start();
  require_once('conn.php');
  require_once('utils.php');
  if(empty($_POST['content']) || empty($_POST['title'])) {
    header('Location: edit.php?mode=add&errCode=1');
    die('資料不齊全');
  }
  $username = $_SESSION['username'];
  $title = $_POST['title'];
  $content = $_POST['content'];
  $sql = "INSERT INTO jess_blog_article(username, title, content) VALUES(?, ?, ?)";
  $stmt = $conn -> prepare($sql);
  $stmt -> bind_param('sss', $username, $title, $content);
  $result = $stmt -> execute();
  if (!$result) {
    die($conn -> error);
  }
  header("Location: admin.php");
?>
