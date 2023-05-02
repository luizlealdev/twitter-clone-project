<?php
   require 'db.php';
   use Parse\ParseObject;

   $user_name = $_POST['user-tweet-name'];
   $user_username = $_POST['user-tweet-username'];
   $user_tweet = $_POST['tweet-textarea'];
   $user_profile_picture = $_POST['user-profile-picture'];
   $random_str = rand();
   $tweet_id = md5($random_str);

   $tweet = new ParseObject("Tweet");
   $tweet->set("tweet_id", $tweet_id);
   $tweet->set("name", $user_name);
   $tweet->set("username", strtolower($user_username));
   $tweet->set("tweet", $user_tweet);
   $tweet->set("image", $user_profile_picture);
   $tweet->set("date", date("Y/m/d"));

   try {
     $tweet->save();
     echo 'Tweet made successfully!';
   } catch (ParseException $ex) {  
     echo 'Error: ' . $ex->getMessage();
   }

   header("Location: ../index.php");
   exit;
?>

?>