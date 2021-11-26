'use strict';

// Preencher automaticamente o endereço

const fillForm = (endereco) => {
	document.getElementById('rua').value = endereco.logradouro;
	document.getElementById('bairro').value = endereco.bairro;
	document.getElementById('cidade').value = endereco.localidade;
	document.getElementById('uf').value = endereco.uf;
}

const searchCEP = async() => {
	const cep = document.getElementById('cep').value;
	const url = `http://viacep.com.br/ws/${cep}/json/`
	const dados = await fetch(url);
	const endereco = await dados.json();

	fillForm(endereco);
}

document.getElementById('cep').addEventListener('focusout', searchCEP);


// Validar o CPF

function validarCPF(cpf) {
	cpf = cpf.replace(/[^\d]+/g,'');
	if(cpf == '') return false;
	// Elimina CPFs invalidos conhecidos
	if (cpf.length != 11 ||
		cpf == "00000000000" ||
		cpf == "11111111111" ||
		cpf == "22222222222" ||
		cpf == "33333333333" ||
		cpf == "44444444444" ||
		cpf == "55555555555" ||
		cpf == "66666666666" ||
		cpf == "77777777777" ||
		cpf == "88888888888" ||
		cpf == "99999999999")
			return false;
	// Valida 1o digito
	var add = 0;
	for (var i=0; i < 9; i ++)
		add += parseInt(cpf.charAt(i)) * (10 - i);
		rev = 11 - (add % 11);
		if (rev == 10 || rev == 11)
			rev = 0;
		if (rev != parseInt(cpf.charAt(9)))
			return false;
	// Valida 2o digito
	add = 0;
	for (var i = 0; i < 10; i ++)
		add += parseInt(cpf.charAt(i)) * (11 - i);
	rev = 11 - (add % 11);
	if (rev == 10 || rev == 11)
		rev = 0;
	if (rev != parseInt(cpf.charAt(10)))
		return false;
	return true;
}

const checkCPF = () => {
	var cpf = document.getElementById('cpf').value

	var valido = validarCPF(cpf)

	if (!valido) {
		alert("CPF inválido!!!")
	}
}

document.getElementById('cpf').addEventListener('focusout', checkCPF);
