const conexao = require('../database/conexao')

class AcaoSocial {
	adiciona(acaoSocial, res) {
		const sql = 'INSERT INTO AcoesSociais SET ?'

		conexao.query(sql, acaoSocial, (erro, resultado) => {
			if (erro) {
				res.status(400).json(erro)
			} else {
				res.status(201).json(resultado)
			}
		})
	}
}

module.exports = new AcaoSocial