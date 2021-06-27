<?php
  session_start();
  require_once("conn.php");
  require_once("utils.php");
 if($_GET['mode'] == 'edit'&& empty($_GET['id'])){
    header("Location: admin.php");
  }
  if (!empty($_GET['mode'])) {
    $mode = $_GET['mode'];
    if ($mode === 'edit') {
      $id = $_GET['id'];
    }
  } else {
    header("Location: admin.php");
  }
  $username = NULL;
  $user = NULL;
  if (!empty($_SESSION['username'])) {
    $username = $_SESSION['username'];
    $user = getUserFromUsername($username);
  } else {
    header("Location: login.php");
  }
  $stmt = $conn -> prepare(
    'SELECT * FROM jess_blog_article where id = ?'
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

<html>
<head>
  <meta charset="utf-8">
  <title>部落格</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="normalize.css" />
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <nav class="navbar">
    <div class="wrapper navbar__wrapper">
      <div class="navbar__site-name">
        <a href='index.html'>Who's Blog</a>
      </div>
      <ul class="navbar__list">
        <div>
          <li><a href="blog.php">文章列表</a></li>
          <li><a href="#">分類專區</a></li>
          <li><a href="#">關於我</a></li>
        </div>
        <div>
          <li><a href="admin.php">管理後台</a></li>
          <li><a href="logout.php">登出</a></li>
        </div>
      </ul>
    </div>
  </nav>
  <section class="banner">
    <div class="banner__wrapper">
      <h1>存放技術之地</h1>
      <div>Welcome to my blog</div>
    </div>
  </section>
  <div class="container-wrapper">
    <div class="container">
      <div class="edit-post">
      <?php if ($mode == 'add') { ?>
        <form action="handle_add_article.php" method="POST">
      <?php } else if ($mode  == 'edit') {?>
        <form action="handle_update_article.php" method="POST">
        <?php }?>
          <div class="edit-post__title">
            發表文章：
          </div>
          <div class="edit-post__input-wrapper">
            <input class="edit-post__input" name="title" placeholder="請輸入文章標題" oninput="checkArticle()" <?php if($mode == 'edit') { ?> value="<?php
          echo $row['title'] ?>" <?php } ?> />
          </div>
          <div class="edit-post__input-wrapper">
            <textarea rows="20" class="edit-post__content" name="content" oninput="checkArticle()"><?php if($mode == 'edit') { 
          echo $row['content'];}?></textarea>
          <span class="isEmpty">文章標題或內容不能為空</span>
          <input type="hidden" name="id" <?php if($mode == 'edit') { ?> value="<?php echo $row['id'] ?>" <?php } ?>  />
          </div>
          <div class="edit-post__btn-wrapper">
              <input class="edit-post__btn" type="submit" value="送出" disabled/>
          </div>
        </form>
      </div>
    </div>
  </div>
  <footer>Copyright © 2020 Who's Blog All Rights Reserved.</footer>
    <script>
      let sendBtn = document.querySelector('.edit-post__btn')
      let emptyHint = document.querySelector('.isEmpty')
      function checkArticle() {
        let title = document.querySelector('.edit-post__input').value.trim()
        let content = document.querySelector('.edit-post__content').value.trim()
        if (title == "" || content == "") {
          sendBtn.disabled = true
          emptyHint.classList.add('visible')
        } else {
          sendBtn.disabled = false
          emptyHint.classList.remove('visible')
        }
      }
    </script>
</body>
</html>