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
    $postdata = http_build_query(
        array(
            'key' => $_POST["key"],
            'id' => $_POST["id"],
            'name' => $_POST["name"],
            'flag' => $_POST["flag"],
            'date' => $_POST["date"],
            'text' => $_POST["text"],
            'vk' => $_POST["vk"],
            'site' => $_POST["site"],
            'valute-name' => $_POST["valute-name"],
            'valute-change' => $_POST["valute-change"],
            'form-government' => $_POST["forms"][0],
            'form-government-system' => $_POST["gover"][0],
            'form-politic' => $_POST["politic"][0],
            'status' => '0'
        )
    );
    $opts = array('http' =>
        array(
            'method'  => 'POST',
            'header'  => 'Content-type: application/x-www-form-urlencoded',
            'content' => $postdata
        )
    );
    $context  = stream_context_create($opts);
    $result = file_get_contents('https://oovcbot.msludos.repl.co/data', false, $context);
?>

<script>window.onload = function() {
    location.href = "/register/result.html?text=<?php echo $result?>";
}</script>