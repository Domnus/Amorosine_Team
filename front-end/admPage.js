window.onload = function() {
	/* Pegar dados do banco */
	const acoes_url = "http://localhost:3000/acoes"
	const eventosurl = "http://localost:3000/eventos"
	const urlImagem = "../assets/images/"

	async function getData(url) {
		const response = await fetch(url);

		var data = await response.json();
		console.log(data);
		show(data);
	}

	function show(data) {
		let form = ``
		let styleData = ``
		
		for (i = 0; i < data.length; i++) {
			let nomeAcao = data[i].nome
			nomeAcao = nomeAcao.replaceAll(/\s/g,'')

			styleData += `
.programs .boxContainer .box:nth-child(${i+1}) .cardImage,
.programs .boxContainer .box:nth-child(${i+1}) .cardImage:after
{
	background-image: url(${urlImagem + nomeAcao});
}`
		}
		
		for (i = 0; i < data.length; i++) {
			form += `
					<div class="box">
                        <div class="cardImage"></div>
                        <div class="programTitle">${data[i].nome}
                        <div class="donationCount">${data[i].descricao}</div>
                        <button class="botao1">Gerenciar</button>
							</div>
					</div>
					`
		}

		var css = styleData,
		head = document.head || document.getElementsByTagName('head')[0],
		style = document.createElement('style');

		head.appendChild(style);

		style.type = 'text/css';
		if (style.styleSheet){
			// This is required for IE8 and below.
			style.styleSheet.cssText = css;
		} else {
			style.appendChild(document.createTextNode(css));
		}

		document.getElementById("acoesSociais").innerHTML = form;
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