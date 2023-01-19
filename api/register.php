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
?>