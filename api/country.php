<?php
    $jsonurl = "https://OOVCbot.msludos.repl.co/countries?id=".$_GET["id"];
    $json = file_get_contents($jsonurl);
    
    $decode = json_decode($json);

    echo $decode["status"];

    if (isset($_GET["name"])) {
        echo $decode["name"]."~";
    }
    if (isset($_GET["date"])) {
        echo $decode["date"]."~";
    }
    if (isset($_GET["text"])) {
        echo $decode["text"]."~";
    }
    if (isset($_GET["type"])) {
        echo $decode["type"]."~";
    }
    if (isset($_GET["valute"])) {
        echo $decode["valute"]."~";
    }
    if (isset($_GET["flag"])) {
        echo $decode["flag"]."~";
    }
    if (isset($_GET["vk"])) {
        echo $decode["vk"]."~";
    }
    if (isset($_GET["site"])) {
        echo $decode["site"]."~";
    }
?>
