class Footer extends HTMLElement {
	constructor() {
		super()
	}

	connectedCallback() {
		this.innerHTML = `
		<style>
			@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');
			footer
			{
				background-color: #181818;
				color:#7f7f7f;
				padding:50px 0;
				font-size:14px;
			}

			footer .container
			{
				display:grid;
				grid-template-columns: 1fr 1fr 1fr;
				grid-gap: 50px;
			}

			footer .title
			{
				font-size:20px;
				font-weight: 600;
				text-transform:uppercase;
				border-bottom: 2px solid;
				margin-bottom:30px;
				padding: 0 0 5px 0;
			}

			footer p
			{
				margin-bottom:10px;
			}

			footer .linksContainer ul
			{
				list-style-type: none;
			}

			footer .linksContainer ul li a
			{
				text-decoration: none;
				color:#7f7f7f;
				margin-bottom:10px;
				display:inline-block;
			}

			footer .newsLetterContainer img
			{
				height:70px;
				margin-bottom:11px;
			}

			footer .newsLetterContainer .input
			{
				background-color:transparent;
				border: 1px solid #7f7f7f;
				outline:none;
				padding: 10px 15px;
				width:100%;
				margin-top:100px;
				color:#ccc;
				border-radius: 30px;
			}		
		</style>
		<footer>
			<div class="container">
				<div class="newsLetterContainer">
					<img src="../public/img/logo.png" alt="logo">
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus consectetur molestias neque tempore amet quae atque.</p>

				</div>

				<div class="linksContainer">
					<div class="title">Links úteis</div>
					<ul>
						<li>
							<a href="../index.html">Home</a>
						</li>

						<li>
							<a href="https://pt-br.facebook.com/AmorosineTeam/" target="_blank" rel="noopener">Facebook</a>
						</li>

						<li>
							<a href="https://www.instagram.com/amorosineteam/" target="_blank">Instagram</a>
						</li>

						
					</ul>
				</div>
				
				<div class="connectCointainer">
					<div class="title">Conecte-se conosco</div>

					<p>Oriente - SP <br>
						CEP: 17570000
					</p>

					<p>emailexemplo@email.com</p>
					<p>(14)12345-6789</p>
				</div>

			</div>
		</footer>
		`
	}
}

customElements.define('footer-component', Footer);