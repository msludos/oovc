<?php
    $jsonurl = "https://vcs.pythonanywhere.com/method/geo.ids?access_token=5114768";
    $json = file_get_contents($jsonurl);

    echo $json;
?>
