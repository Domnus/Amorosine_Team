<?php

	ini_set('display_errors', 1);

	function sendForm($field, $address) {
		$postdata = http_build_query($field);
		$ch = curl_init();
		curl_setopt($ch,CURLOPT_URL, "http://localhost:3000/$address");
		curl_setopt($ch,CURLOPT_POST, true);
		curl_setopt($ch,CURLOPT_POSTFIELDS, $postdata);
		curl_setopt($ch,CURLOPT_RETURNTRANSFER, true);
		curl_setopt($ch, CURLOPT_HEADER, 1);

		$response = curl_exec($ch);
		$header_size = curl_getinfo($ch, CURLINFO_HEADER_SIZE);
		$header = substr($response, 0, $header_size);
		$body = substr($response, $header_size);

		$idObject = json_decode($body, true);
		$id = $idObject["id"];

		return $id;
	}

	$nomeAcao = $_POST['nomeAcao'];
	$descricaoAcao = $_POST['descricaoAcao'];

	if(isset($_FILES['imagem'])){
		$errors= array();

		$file_name = $_FILES['imagem']['name'];
		$file_size =$_FILES['imagem']['size'];
		$file_tmp =$_FILES['imagem']['tmp_name'];
		$file_type=$_FILES['imagem']['type'];
		$tmp = explode('.', $file_name);
		$file_ext = end($tmp);
		$file_path = "./assets/images/".$file_name;
		
		$file_name = str_replace(' ', '', $nomeAcao);
		$extensions= array("jpeg","jpg","png");
		
		if(in_array($file_ext,$extensions)=== false){
		   $errors[]="extension not allowed, please choose a JPEG or PNG file.";
		}
		
		if($file_size > 2097152){
		   $errors[]='File size must be excately 2 MB';
		}
		
		if(empty($errors)==true){
		   move_uploaded_file($file_tmp,"./assets/images/".$file_name);
		   echo "Success";
		}else{
		   print_r($errors);
		}
	 }

	$imagem = $file_path;

	/* Formulário de Acões Sociais */
	$fieldsAcao = [
		'nome' => $nomeAcao,
		'descricao' => $descricaoAcao,
		'imagem' => $imagem
	];

	sendForm($fieldsAcao, 'acoes');
	
		
?>