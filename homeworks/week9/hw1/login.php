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
    <a class="board__btn" href="index.php">回留言板</a>
    <a class="board__btn" href="register.php">註冊</a>
    <h1 class="board__title">登入</h1>
    <?php
      if (!empty($_GET['errCode'])) {
        $code = $_GET['errCode'];
        $msg = 'Error';
        if ($code === '1') {
          $msg = '資料不齊全';
        } else if ($code === '2') {
          $msg = '帳號或是密碼輸入錯誤';
        }
        echo '<h2 class="error">錯誤: '. $msg .'</h2>';
      }
    ?>
    <form action="handle_login.php" method="POST" class="board_new-comment-form">
      <div class="board__nickname">
        <span>帳號：</span>
        <input type="text" name="username" />
      </div>
      <div class="board__nickname">
        <span>密碼：</span>
        <input type="password" name="password" />
      </div>
      <div>
        <input class="board__submit-btn" type="submit" />
      </div>
    </form>
  </main>
</body>
</html>
