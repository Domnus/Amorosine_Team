const acoes_url = "http://localhost:3000/acoes"

async function getData(url) {
	const response = await fetch(url);

	var data = await response.json();
	console.log(data);
	show(data);
}

function show(data) {
	let tab = 
		`
		<tr>
			<th>Nome</th>
			<th>Descrição</th>
		</t>
		`

	for (i = 0; i < data.length; i++) {
		tab += `
				<tr>
					<td>${data[i].nome}</td>
					<td>${data[i].descricao}</td>
				</tr>
				`
	}

	document.getElementById("acoesSociais").innerHTML = tab;
}

getData(acoes_url);