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

    echo "https://oovcbot.msludos.repl.co/data?code=".$_POST["code"]."&name=".$_POST["name"]."&flag=".$_POST["flag"]."&date=".$_POST["date"]."&text=".$_POST["text"]."&vk=".$_POST["vk"]."&site=".$_POST["site"]."&valutename=".$_POST["valute-name"]."&valutechange=".$_POST["valute-change"]."&form=".$_POST["forms"]."&gover=".$_POST["gover"]."&politic=".$_POST["politic"]."&key=".$_POST["key"]."&id=".$_POST["id"];
?>