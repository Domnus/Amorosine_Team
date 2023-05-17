const query = require ("../database/queries")
const View = require('../template/ViewTemplate.tsx')

class Voluntario extends View {
    adiciona(voluntario){
        const sql = "INSERT INTO Voluntarios SET ?"

        return query(sql, voluntario)
    }

    lista() {
		const sql = 'SELECT * FROM Voluntarios'

		return query(sql)
	}

	busca(id) {
		const sql = 'SELECT * FROM Voluntarios WHERE idVoluntario = ?'

		return query(sql, id)
	}

	altera(id, valores) {
		const sql = 'UPDATE Voluntarios SET ? WHERE idVoluntario = ?'

		return query(sql, [valores, id])
	}

	deleta(id) {
		const sql = 'DELETE FROM Voluntarios WHERE idVoluntario = ?'

		return query(sql, id)
    }
}

module.exports = new Voluntario