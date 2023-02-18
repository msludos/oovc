<?php
    $jsonurl = "https://vcs.pythonanywhere.com/method/geo.get?access_token=5114768&id=".$_GET["id"];
    $json = file_get_contents($jsonurl);

    echo $json;
?>
