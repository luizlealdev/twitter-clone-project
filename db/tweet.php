<?php
   require 'db.php';
   use Parse\ParseObject;

   $user_name = $_POST['user-tweet-name'];
   $user_username = $_POST['user-tweet-username'];
   $user_tweet = $_POST['tweet-textarea'];
   $random_str = rand();
   $tweet_id = md5($random_str);

   $tweet = new ParseObject("Tweet");
   $tweet->set("tweet_id", $tweet_id);
   $tweet->set("name", $user_name);
   $tweet->set("username", $user_username);
   $tweet->set("tweet", $user_tweet);

   try {
     $tweet->save();
     echo 'Dados salvos com sucesso!';
   } catch (ParseException $ex) {  
     echo 'Erro: ' . $ex->getMessage();
   }
?>