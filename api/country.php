<?php
    $jsonurl = "https://OOVCbot.msludos.repl.co/countries?id=".$_GET["id"];
    $json = file_get_contents($jsonurl);
    
    $decode = json_decode($json, true);
     
    try {
        echo $decode[$_GET["q"]];
    } catch (Exception $e) {
        echo $_GET["id"];
    }
?>
