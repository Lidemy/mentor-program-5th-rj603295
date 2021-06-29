<?php
  require_once("conn.php");
  function getUserFromUsername($username) {
    global $conn;
    $sql = "SELECT * FROM jess_users WHERE username = ?";
    $stmt = $conn -> prepare($sql);    
    $stmt -> bind_param('s', $username);
    $result = $stmt -> execute();
    $result = $stmt -> get_result();
    $row = $result -> fetch_assoc();
    return $row;
  }
  function escape($str) {
    return htmlspecialchars($str, ENT_QUOTES);
  }
  function checkAuth($username) {
    if ($username === NULL) {
      $auth = 'guest';
      return $auth;
    }
    global $conn;
    $sql = "SELECT * FROM jess_users WHERE username = ?";
    $stmt = $conn -> prepare($sql);
    $stmt -> bind_param('s', $username);
    $result = $stmt -> execute();
    $result = $stmt -> get_result();
    $row = $result -> fetch_assoc();
    if ($row['role'] === 0) {
      $auth = 'admin';
    } else if ($row['role'] === 1) {
      $auth = 'general';
    } else if ($row['role'] === 2) {
      $auth = 'banned';
    }
    return $auth;
  }
  function authName($role) {
    if ($role === 0) {
      $auth = 'admin';
    } else if ($role === 1) {
      $auth = 'general';
    } else if ($role === 2) {
      $auth = 'banned';
    }
    return $auth;
  }
?>
