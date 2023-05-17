const query = require('../database/queries')
const View = require('../template/ViewTemplate.tsx')

class Cidade extends View {
	adiciona(cidade) {
		const sql = 'INSERT INTO Cidades SET ?'

		return query(sql, cidade)
	}

	lista() {
		const sql = 'SELECT * FROM Cidades'

		return query(sql)
	}

	busca(id) {
		const sql = 'SELECT * FROM Cidades WHERE idCidade = ?'

		return query(sql, id)
	}

	buscaNome(nome) {
		const sql = 'SELECT * FROM Cidades WHERE nome = ?'

		return query(sql, nome)
	}

	altera(id, valores) {
		const sql = 'UPDATE Cidades SET ? WHERE idCidade = ?'

		return query(sql, [valores, id])
	}

	deleta(id) {
		const sql = 'DELETE FROM Cidades WHERE idCidade = ?'

		return query(sql, id)
	}
}

module.exports = new Cidade