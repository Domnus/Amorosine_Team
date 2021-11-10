window.onload = function() {
	/* Pegar dados do banco */
	const acoes_url = "http://localhost:3000/acoes"
	const eventosurl = "http://localost:3000/eventos"

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

	/* Modal */
	var addAcaoModal = document.getElementById("addAcaoModal");

	var addButton = document.getElementById("addAcao");

	var span = document.getElementById("close");

	addButton.onclick = function() {
		addAcaoModal.style.display = "block";
	}



	window.onclick = function (event) {
		if (event.target == addAcaoModal) {
			addAcaoModal.style.display = "none";
		}
	}
}