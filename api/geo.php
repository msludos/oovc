<?php
    $jsonurl = "https://vcs.pythonanywhere.com/method/geo.get?access_token=5114768";
    $json = file_get_contents($jsonurl);

    echo $json;
?>
