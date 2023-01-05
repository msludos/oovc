<?php
    $jsonurl = "https://OOVCbot.msludos.repl.co/countries?id=".$_GET["id"];
    $json = file_get_contents($jsonurl);
    
    $decode = json_decode($json, true);
    
    $answer = $decode[$_GET["q"]];

    if ($answer === null) {
        echo $_GET["id"];
    } else {
        echo $answer;
    }
?>
