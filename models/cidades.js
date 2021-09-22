const conexao = require('../database/conexao')

class Cidade {
	adiciona(cidade, res) {
		const sql = 'INSERT INTO Cidades SET ?'

		conexao.query(sql, cidade, (erro, resultado) => {
			if (erro) {
				res.status(400).json(erro)
			} else {
				res.status(201).json(resultado)
			}
		})
	}
}

module.exports = new Cidade