<?php
/* Variáveis de Cidade */
$cidade = $_POST['nomeCidade'];
$UF = $_POST['UF'];

/* Variáveis de Endereço */
$CEP = $_POST['CEP'];
$rua = $_POST['rua'];
$numero = $_POST['numero'];
$bairro = $_POST['bairro'];
$complemento = $_POST['complemento'];

/* Variáveis de Dados Pessoais */
$nome = $_POST['nome'];
$sobrenome = $_POST['sobrenome'];
$CPF = $_POST['CPF'];
$email = $_POST['email'];
$telefone = $_POST['telefone'];

$fieldsCidade = [
    'nome' => $cidade,
    'UF' => $UF,
];

$postdata = http_build_query($fieldsCidade);
$ch = curl_init();
curl_setopt($ch,CURLOPT_URL, 'http://localhost:3000/cidades');
curl_setopt($ch,CURLOPT_POST, true);
curl_setopt($ch,CURLOPT_POSTFIELDS, $postdata);
curl_setopt($ch,CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HEADER, 1);

$response = curl_exec($ch);
$header_size = curl_getinfo($ch, CURLINFO_HEADER_SIZE);
$header = substr($response, 0, $header_size);
$body = substr($response, $header_size);

$idCidade = json_decode($body, true);
$idCidade = $idCidade["id"];

$fieldsEndereco = [
    'idCidade' => $idCidade,
    'rua' => $rua,
    'numero' => $numero,
    'bairro' => $bairro,
    'complemento' => $complemento,
    'CEP' => $CEP,
];

$postdata = http_build_query($fieldsEndereco);
$ch = curl_init();
curl_setopt($ch,CURLOPT_URL, 'http://localhost:3000/enderecos');
curl_setopt($ch,CURLOPT_POST, true);
curl_setopt($ch,CURLOPT_POSTFIELDS, $postdata);
curl_setopt($ch,CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HEADER, 1);

$response = curl_exec($ch);
$header_size = curl_getinfo($ch, CURLINFO_HEADER_SIZE);
$header = substr($response, 0, $header_size);
$body = substr($response, $header_size);

echo $body;

$idEndereco = json_decode($body, true);
$idEndereco = $idEndereco["id"];

$fieldsVoluntario = [
    'idEndereco' => $idEndereco,
    'CPF' => $CPF,
    'nome' => $nome,
    'sobrenome' => $sobrenome,
    'email' => $email,
    'telefone' => $telefone,
];

$postdata = http_build_query($fieldsVoluntario);
$ch = curl_init();
curl_setopt($ch,CURLOPT_URL, 'http://localhost:3000/voluntarios');
curl_setopt($ch,CURLOPT_POST, true);
curl_setopt($ch,CURLOPT_POSTFIELDS, $postdata);
curl_setopt($ch,CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HEADER, 1);

$response = curl_exec($ch);
$header_size = curl_getinfo($ch, CURLINFO_HEADER_SIZE);
$header = substr($response, 0, $header_size);
$body = substr($response, $header_size);

echo $body;

?>