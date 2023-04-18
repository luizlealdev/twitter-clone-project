<?php
   require 'config.php';
   require '../vendor/autoload.php';

   use Parse\ParseClient;
   ParseClient::initialize($app_id, $rest_key, $master_key);
   ParseClient::setServerURL($server_url, '/parse');
?>
