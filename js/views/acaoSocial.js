const query = require('../database/queries')
const View = require('../template/ViewTemplate.tsx')

class acaoSocial extends View {
	adiciona(acaoSocial) {
		const sql = 'INSERT INTO AcoesSociais SET ?'

		return query(sql, acaoSocial)
	}

	lista() {
		const sql = 'SELECT * FROM AcoesSociais'

		return query(sql)
	}

	busca(id) {
		const sql = 'SELECT * FROM AcoesSociais WHERE idAcaoSocial = ?'

		return query(sql, id)
	}

	altera(id, params) {
		const sql = 'UPDATE AcoesSociais SET ? WHERE idAcaoSocial = ?'

		return query(sql, [params, id])
	}

	deleta(id) {
		const sql = 'DELETE FROM AcoesSociais WHERE idAcaoSocial = ?'

		return query(sql, id)
	}
}

module.exports = new acaoSocial