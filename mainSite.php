<?php
$Temp=$_POST["temperature"];
$Humidity=$_POST["humidity"];
$Write="<p>Temperature: " . $TEMP . " Celsius </p>". "<p>Humidity: ". $Humidity . " % </p>";
file_put_contents('site.html',$Write);
?>
