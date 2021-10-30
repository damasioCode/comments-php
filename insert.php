<?php
  header('Content-Type: application/json');

  //define variables
  $name = $_POST['name'];
  $comment = $_POST['comment'];

  $pdo = new PDO('mysql:host=localhost;dbname=bd_comments', 'root', '');

  //bind values
  $stmt = $pdo->prepare('INSERT INTO comments (name, comment) VALUES (:name, :comment)');
  $stmt->bindValue(':name', $name);
  $stmt->bindValue(':comment', $comment);
  $stmt->execute();

  if ($stmt->rowCount() >= 1) {
    echo json_encode('comment saved successfully');
  } else {
    echo json_encode('error saving comment');
  }
  

