<?php
$time = time();
$tempF = $_POST["temp"];
$file = 'index.html';
$data = $time."  -  ".$tempF;
file_put_contents($file, $data);
?>
