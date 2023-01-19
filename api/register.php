<?php
    foreach ($_POST as &$value) {
        if (gettype($type) == "array") {
            foreach ($value as &$valuew) {
                echo $valuew;
            }
        } else {
            echo $value;
        }
    }
?>