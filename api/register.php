<?php
    foreach ($_POST as &$value) {
        if (gettype($type).is_array()) {
            foreach ($value as &$valuew) {
                echo $valuew;
            }
        } else {
            echo $value;
        }
    }
?>