<?php
    $jsonurl = "https://OOVCbot.msludos.repl.co/countries?id=".$_GET["id"]."&fields=".$_GET["fields"];
    $json = file_get_contents($jsonurl);

    echo $json;
?>
