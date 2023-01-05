<?php
    $jsonurl = "https://OOVCbot.msludos.repl.co/countries?id=".$_GET["id"];
    $json = file_get_contents($jsonurl);
    
    $decode = json_decode($json, true);
    
    if (("" === $decode[$_GET["q"]]) || (null === $decode[$_GET["q"]])) {
        echo "undefined";
    } else {
        echo $decode[$_GET["q"]];
    }
?>
