<?php
    /* Ativar debug */
    ini_set('display_errors', 1);

    if (isset($_POST['submitform'])) {
        function buscaCidade($nomeCidade, $ufCidade) {
            $cidades = file_get_contents('http://localhost:3000/cidades/');
            $cidades = json_decode($cidades, true);

            for ($i = 0; $i < count($cidades); $i++) {
                if ($nomeCidade == $cidades[$i]["nome"] && $ufCidade == $cidades[$i]["UF"]) {
                    return $cidades[$i]["idCidade"];
                }
            }

            return False;
        }

        /* Função para enviar os dados do formulário */
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

        /* Formulário de Voluntário */

        /* Variáveis de Cidade */
        $cidade = $_POST['nomeCidade'];
        $UF = $_POST['uf'];

        /* Variáveis de Endereço */
        $CEP = $_POST['cep'];
        $rua = $_POST['rua'];
        $numero = $_POST['numero'];
        $bairro = $_POST['bairro'];
        $complemento = $_POST['complemento'];

        /* Variáveis de Voluntário */
        $nome = $_POST['nome'];
        $sobrenome = $_POST['sobrenome'];
        $CPF = $_POST['cpf'];
        $email = $_POST['email'];
        $telefone = $_POST['telefone'];
        $sexo = $_POST['sexo'];
        $dataNasc = $_POST['data'];


        /* Enviando os dados da Cidade */
        $fieldsCidade = [
            'nome' => $cidade,
            'UF' => $UF
        ];

        $idCidade = buscaCidade($cidade, $UF);

        if (gettype($idCidade) == 'boolean') {
            $idCidade = sendForm($fieldsCidade, 'cidades');
        }

        /* Enviando os dados do Endereço */
        $fieldsEndereco = [
            'idCidade' => $idCidade,
            'rua' => $rua,
            'numero' => $numero,
            'bairro' => $bairro,
            'complemento' => $complemento,
            'CEP' => $CEP
        ];

        $idEndereco = sendForm($fieldsEndereco, 'enderecos');

        /* Enviando os dados do Voluntário */
        $fieldsVoluntario = [
            'idEndereco' => $idEndereco,
            'CPF' => $CPF,
            'nome' => $nome,
            'sobrenome' => $sobrenome,
            'email' => $email,
            'telefone' => $telefone,
            'sexo' => $sexo,
            'dataNasc' => $dataNasc
        ];

        sendForm($fieldsVoluntario, 'voluntarios');

        if (isset($_POST['submitform'])) {   

            ?>
                <script type="text/javascript">
                    alert("Obrigado por se voluntariar!");
                    window.location = "../index.html";
                </script>      
            <?php

        }
    }
?>