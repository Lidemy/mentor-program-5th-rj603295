<?php
  session_start();
  require_once("conn.php");
  require_once("utils.php");
  $username = NULL;
  $user = NULL;
  if (!empty($_SESSION['username'])) {
    $username = $_SESSION['username'];
    $user = getUserFromUsername($username);
  } else {
    header("Location: login.php");
    exit();
  }
  if (checkAuth($username) !== 'admin') {
    header("Location: index.php");
  }
  $page = 1;
  if (!empty($_GET['page'])) {
    $page = intval($_GET['page']); 
  }
  $items_per_page = 5;
  $offset = ($page - 1) * $items_per_page;
  $stmt = $conn -> prepare(
    'SELECT * FROM jess_users ORDER BY id DESC limit ? offset ?'
  );
  $stmt -> bind_param('ii', $items_per_page, $offset);
  $result = $stmt -> execute();
  if (!$result) {
    die('Error: ' . $conn -> error);
  }
  $result = $stmt -> get_result();

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
      <a class="board__btn" href="index.php">首頁</a>
      <a class="board__btn" href="logout.php">登出</a>
      <h3>你好！<?php echo escape($user['nickname']); ?></h3>
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

    <div class="board__hr"></div>
    <section class="section">
    <?php
      while ($row = $result -> fetch_assoc()) {
    ?>
      <div class="card">
        <div class="card__avatar"></div>
        <div class="card__body">
          <div class="card__info">
            <span class="card__author">暱稱：<?php echo escape($row['nickname']); ?></span>
            <span class="card__author">帳號：<?php echo escape($row['username']); ?>
            </span>
            <?php if ($row['username'] === $username || checkAuth($username) === 'admin') { ?>
            <a class="update-role" href="#">編輯權限</a>
            <?php }?>
          </div>
          <p class="card__content">權限：<?php echo authName($row['role']) ?></p>
      <form class="hide board__role-form board_new-comment-form" method="POST" action="update_role.php?id=<?php echo $row['id'] ?>">
      <div class="board__nickname">
        <span>新的權限：</span>
        <select name="role">
          <option value="0">admin</option>
          <option value="1">general</option>
          <option value="2">banned</option>
        </select>
        <input type="hidden" name="id" value="<?php echo $row['id'] ?>" />
        <input class="board__submit-btn" type="submit">
      </div>
      </form>
        </div>
      </div>
    <?php }?>
    </section>
    <div class="board__hr"></div>
    <?php 
      $stmt = $conn -> prepare(
        'SELECT COUNT(id) as count FROM jess_users'
      );
      $result = $stmt -> execute();
      $result = $stmt -> get_result();
      $row = $result -> fetch_assoc();
      $count = $row['count'];
      $total_page = ceil($count / $items_per_page);
    ?>
    <div class="page-info">
      <span>總共有<?php echo $count ?>筆資料，頁數：</span>
      <span><?php echo $page ?> / <?php echo $total_page ?></span>
    </div>
    <div class="paginator">
      <?php if($page != 1) {?>
        <a href="admin.php?page=1">首頁</a>
      <a href="admin.php?page=<?php echo $page -1?>">上一頁</a>
      <?php }?>
      <?php if($page != $total_page) {?>
      <a href="admin.php?page=<?php echo $page +1?>">下一頁</a>
      <a href="admin.php?page=<?php echo $total_page ?>">末頁</a>
      <?php }?>
    </div>
  </main>
  <script>
    const form = document.querySelectorAll('.board__role-form')
    const btn = document.querySelectorAll('.update-role')
    for (let i = 0; i < form.length; i++) {
      btn[i].addEventListener('click', (e) => {
        e.preventDefault()
        form[i].classList.toggle('hide')
      })
    }
  </script>
</body>
</html>
