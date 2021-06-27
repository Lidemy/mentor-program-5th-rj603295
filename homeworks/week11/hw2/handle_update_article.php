<?php
  session_start();
  require_once('conn.php');
  require_once('utils.php');
  if(empty($_POST['content']) || empty($_POST['title'])) {
    header('Location: edit.php?mode=edit&errCode=1&id='.$_POST['id']);
    die('資料不齊全');
  }
  $username = $_SESSION['username'];
  $id = $_POST['id'];
  $content = $_POST['content'];
  $title = $_POST['title'];
  $sql = "UPDATE jess_blog_article SET title=?, content=? WHERE id=? AND username = ?";
  $stmt = $conn -> prepare($sql);
  $stmt -> bind_param('ssis', $title, $content, $id, $username);
  $result = $stmt -> execute();
  if (!$result) {
    die($conn -> error);
  }
  header("Location: admin.php")
?>
