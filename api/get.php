<?php
$jsonurl = "https://api.vk.com/method/wall.get?owner_id=-201784905&count=".$_GET['count']."&access_token=vk1.a.5nwNgBGEcsAU__rTpV54q8Kq7eKbluzbq8v4Remw_--1I8bzXFLBL4NeCesWf-L1Rtvk6w73pjuMZmp1EtzSdy1OSXzxPi99AB1vGnGDdyVC7h_KW_HRd48nzwCHuoiEX1dBYMIkAdCA_xR9JaWaNAL9YIVCkha-9M75EHgroi316qrMeAMQgSHC3yMm0AQw&v=5.131";
$json = file_get_contents($jsonurl);

$decode = json_decode($json, true);
foreach ($decode["response"]["items"] as $item) {
    if (($item["text"] != "") && ($item["id"] != "4")) {
        $pos = strpos($item["text"], "\n");
        echo "<div class='news-w'>";
        echo "<div class='news-w'>";
        echo "<div class='news-item'>";
        echo "<div class='stat'>";
        echo "<div class=\"date\">";
        echo date('d m', $item["date"]+3600*3);
        echo "<hr>";
        echo date('h:i', $item["date"]+3600*3);
        echo "</div>";
        echo "</div>";
        echo "<a class=\"name\" href=\"https://vk.com/vgovernments?w=wall-201784905_";
        echo $item['id'];
        echo "\" target=\"_black\">";
        echo substr($item["text"], 0, $pos);
        echo "</a>";
        echo "</div>";
        echo "</div>";
        echo "</div>";
    }
} 
?>