<?php
    $jsonurl = "https://OOVCbot.msludos.repl.co/countries?id=".$_GET["id"];
    $json = file_get_contents($jsonurl);
    
    $decode = json_decode($json, true);

    if ($decode[$_GET["q"]] == null) echo $_GET["id"];
    else echo $decode[$_GET["q"]];
?>
