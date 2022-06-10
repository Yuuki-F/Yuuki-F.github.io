<?php
$time = time();
$tempF = $_GET["temp"];
$file = 'temp.html';
$data = $time."  -  ".$tempF;
file_put_contents($file, $data);
?>
