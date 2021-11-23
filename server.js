const customExpress = require('./config/app')
const conexao = require('./js/database/conexao')
const Tabelas = require('./js/database/tabelas')

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
