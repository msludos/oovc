<?php
    foreach ($_POST as &$value) {
        if (is_array($value)) {
            foreach ($value as &$valuew) {
                echo $valuew;
            }
        } else {
            echo $value;
        }
        echo "<br><br>";
    }

    echo "https://oovcbot.msludos.repl.co/data?key=".$_POST["key"]."&name=".$_POST["name"]."&flag=".$_POST["flag"]."&date=".$_POST["date"]."&text=".$_POST["text"]."&vk=".$_POST["vk"]."&site=".$_POST["site"]."&valutename=".$_POST["valute-name"]."&valutechange=".$_POST["valute-change"]."&form=".$_POST["forms"][0]."&gover=".$_POST["gover"][0]."&politic=".$_POST["politic"][0]."&id=".$_POST["id"];
?>