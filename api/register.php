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
    $json = '{"id": "'.$_POST["id"].'","name": "'.$_POST["name"].'","flag": "'.$_POST["flag"].'","date": "'.$_POST["date"].'","text": "'.$_POST["text"].'","vk": "'.$_POST["vk"].'","site": "'.$_POST["site"].'","valute-name": "'.$_POST["valute-name"].'","valute-change": "'.$_POST["valute-change"].'","form-government": "'.$_POST["forms"][0].'","form-government-system": "'.$_POST["gover"][0].'","form-politic": "'.$_POST["politic"][0].'","status": ""}';
    $url = "https://oovcbot.msludos.repl.co/data?key=".$_POST["key"]."&id=".$_POST["id"]."&text=".$json;
    echo file_get_contents($url);
?>                               

<!DOCTYPE html>
<html lang="en">
<head>
    <script>location.href = "/register"</script>
</head>
<body></body>
</html>