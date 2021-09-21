const customExpress = require('./config/customExpress')
const conexao = require('./infrastructure/conexao')
const Tabelas = require('./infrastructure/tabelas')

conexao.connect(erro => {
	if(erro) {
		console.log(erro)
	} else {
		console.log('Banco de dados conectado')

		Tabelas.init(conexao)

		const app = customExpress()

		app.listen(3000, () => console.log('Servidor rodando'))
	}
})