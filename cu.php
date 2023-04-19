<?php

require __DIR__ . '/vendor/autoload.php'; // carrega o SDK do Back4App

use Parse\ParseClient;
use Parse\ParseObject;
use Parse\ParseQuery;

// credenciais do seu aplicativo
ParseClient::initialize('UdrdFpwyKGjl1MM5qiqXwqvmbfASxbq3WRswwrPy', '1iKwPZzlntMhisQ41mDR9GeGO4ERhTiqAOQKVrN4', 'bvlkmF1cGMfOkPe3Gshtun9J0wg8TzzzVtZ5QcLj');
ParseClient::setServerURL('https://parseapi.back4app.com/', '/parse');

// conexão com a sua database
$query = new ParseQuery('Tweet');
$results = $query->find();

// exibição das informações na página
echo "<table>";
echo "<tr><th>Classe</th><th>Coluna</th><th>Tipo</th></tr>";
foreach ($results as $object) {
  echo "<tr>";
  echo "<td>" . $object->get('name') . "</td>";
  echo "<td>" . $object->get('username') . "</td>";
  echo "<td>" . $object->get('tweet') . "</td>";
  echo "</tr>";
}
echo "</table>";

?>