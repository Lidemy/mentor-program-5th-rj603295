<?php
  session_start();
  require_once("conn.php");
  require_once("utils.php");
  $id = $_GET['id'];
  $username = NULL;
  $user = NULL;
  if (!empty($_SESSION['username'])) {
    $username = $_SESSION['username'];
    $user = getUserFromUsername($username);
  } else {
    header("Location: index.php");
  }
  $stmt = $conn -> prepare(
    'SELECT * FROM jess_comments where id = ?'
  );
  $stmt -> bind_param("i", $id);
  $result = $stmt -> execute();
  if (!$result) {
    die('Error: ' . $conn -> error);
  }
  $result = $stmt -> get_result();
  $row = $result -> fetch_assoc();
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
    
    <h1 class="board__title">編輯留言</h1>
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

    <form action="handle_update_comment.php" method="POST" class="board_new-comment-form">
      <div>
          <textarea name="content" id="" rows="5"><?php
          echo $row['content'] ?></textarea>
          <input type="hidden" name="id" value="<?php echo $row['id'] ?>" />
        <input class="board__submit-btn" type="submit" />
      </div>
    </form>
    <div class="board__hr"></div>
    
  </main>
  <script>
    let btn = document.querySelector('.update-nickname')
    btn.addEventListener('click', function() {
      let form = document.querySelector('.board__nickname-form')
      form.classList.toggle('hide')
    })
  </script>
</body>
</html>
