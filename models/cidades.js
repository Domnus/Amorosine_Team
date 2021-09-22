const conexao = require('../database/conexao')

class Cidade {
	adiciona(cidade) {
		const sql = 'INSERT INTO Cidades SET ?'

		conexao.query(sql, cidade, (erro, resultados) => {
			if (erro) {
				console.log(erro)
			} else {
				console.log(resultados)
			}
		})
	}
}

module.exports = new Cidade