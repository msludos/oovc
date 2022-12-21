<?php
$token = "vk1.a.bNGU0eqrn_O5mYDsEFxeeoK4JwznJ3axFjqcv_GqndH4elX3MRRhP9u3O-5Si9CEglYZ5tatPe146cxkw5VFvMVimWVDVtlV5WjbUFjGonc9Ly6fUCCZxveCIgZ8PqniF8RCvBtpov_vMuRI7ppcMWq6VgZT3pnzxHw-BkAQ1XJ0i1DnP5L2vIE6q-mfoWk05r73ryPXr8QNqmrP3EyfXA";

function vk_msg_send($id, $text){
	$request_params = array(
		'message' => $text, 
		'peer_id' => $id, 
		'access_token' => $token,
		'v' => '5.87' 
	);
	$get_params = http_build_query($request_params); 
	file_get_contents('https://api.vk.com/method/messages.send?'.$get_params);
}

 
$data = json_decode(file_get_contents('php://input'));
switch ($data->type) {  
	case 'confirmation': 
		echo $token; 
	break;  
		
	case 'message_new': 
		$message_text = $data -> object -> text;
		$chat_id = $data -> object -> peer_id;
        
		if ($message_text == "привет"){
			vk_msg_send($chat_id, "Привет, я бот, который говорит две фразы.");
		}
		if ($message_text == "пока"){
			vk_msg_send($chat_id, "Пока. Если захочешь с кем-то поговорить, то у тебя есть бот, который говорит две фразы.");
		}
		echo 'ok';
	break;
}
?>