const conexao = require('../infrastructure/conexao')

class AcaoSocial {
	adiciona(acaoSocial) {
		const sql = 'INSERT INTO AcoesSociais SET ?'

		conexao.query(sql, acaoSocial, (erro, resultados) => {
			if (erro) {
				console.log(erro)
			} else {
				console.log(resultados)
			}
		})
	}
}

module.exports = new AcaoSocial