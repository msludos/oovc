<?php
    $jsonurl = "https://api.vk.com/method/users.get?user_ids=".$_GET['id']."&access_token=vk1.a.5nwNgBGEcsAU__rTpV54q8Kq7eKbluzbq8v4Remw_--1I8bzXFLBL4NeCesWf-L1Rtvk6w73pjuMZmp1EtzSdy1OSXzxPi99AB1vGnGDdyVC7h_KW_HRd48nzwCHuoiEX1dBYMIkAdCA_xR9JaWaNAL9YIVCkha-9M75EHgroi316qrMeAMQgSHC3yMm0AQw&v=5.131";
    $json = file_get_contents($jsonurl);
    
    $decode = json_decode($json, true);

    echo "hello".$decode["response"][0]["first_name"];
?>