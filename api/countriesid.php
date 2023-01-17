<?php
    $jsonurl = "https://OOVCbot.msludos.repl.co/listc";
    $json = file_get_contents($jsonurl);
    
    echo $json;
?>
