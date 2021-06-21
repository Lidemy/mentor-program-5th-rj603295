<?php
  session_start();
  require_once("conn.php");
  require_once("utils.php");
  $username = NULL;
  if (!empty($_SESSION['username'])) {
    $username = $_SESSION['username'];
  }
  $result = $conn -> query ("SELECT * FROM jess_comments ORDER BY id DESC");
  if (!$result) {
    die('Error: ' . $conn -> error);
  }
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css">
  <title>留言板</title>
</head>
<body>
  <header>
    <div class="warning">
     <strong>注意！本站為練習用網站，因教學用途刻意忽略資安的實作，註冊時請勿使用任何真實的帳號或密碼。</strong>
    </div>
  </header>
  <main class="board">
    <?php if (!$username) {?>
    <div>
      <a class="board__btn" href="register.php">註冊</a>
      <a class="board__btn" href="login.php">登入</a>
    </div>
    <?php } else {?>
      <a class="board__btn" href="logout.php">登出</a>
      <h3>你好！<?php echo $username; ?></h3>
    <?php }?>
    <h1 class="board__title">Comments</h1>
    <?php
      if (!empty($_GET['errCode'])) {
        $code = $_GET['errCode'];
        $msg = 'Error';
        if ($code === '1') {
          $msg = '資料不齊全';
        }
        echo '<h2 class="error">錯誤: '. $msg .'</h2>';
      }
    ?>

    <form action="handle_add_comment.php" method="POST" class="board_new-comment-form">
      <div>
        <?php if ($username) { ?>
          <textarea name="content" id="" rows="5"></textarea>
        <input class="board__submit-btn" type="submit" />
      </div>
      <?php } else { ?>
        <h3>請登入發布留言</h3>
      <?php } ?>
    </form>
    <div class="board__hr"></div>
    <section>
    <?php
      while ($row = $result -> fetch_assoc()) {
    ?>
      <div class="card">
        <div class="card__avatar"></div>
        <div class="card__body">
          <div class="card__info">
            <span class="card__author"><?php echo $row['nickname']; ?></span>
            <span class="card__time"><?php echo $row['created_at'] ?></span>
          </div>
          <p class="card__content"><?php echo $row['content'] ?></p>
        </div>
      </div>
    <?php }?>
    <?php for($i=1; $i<=10; $i++) { ?>
      <div></div>
    <?php } ?>
    </section>
  </main>
</body>
</html>
