<?php

require 'db.php';
use Parse\ParseObject;

$user_name = [''];

$tweet = new ParseObject("Tweet");
$tweet->set("tweet_id", "JFNi57ab7b7yF5B7F");
$tweet->set("name", "Sean Plott");
$tweet->set("username", "@sean_pl");

try {
  $tweet->save();
  echo 'Dados salvos com sucesso!';
} catch (ParseException $ex) {  
  echo 'Erro: ' . $ex->getMessage();
}

?>
