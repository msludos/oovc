<?php
    foreach ($_POST as &$value) {
        if (is_array($value)) {
            echo "\n\n";
            foreach ($value as &$valuew) {
                echo $valuew;
            }
            echo "\n\n";
        } else {
            echo $value;
        }
    }
?>