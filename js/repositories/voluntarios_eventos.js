const query = require("../database/queries")
const Repository = require('../template/RepositoryTemplate.js')

class Voluntarios_Evento extends Repository {
    adiciona(voluntario) {
        const sql = 'INSERT INTO Voluntarios_Evento SET ?'

		return query(sql, voluntario)
    }
    
    lista() {
		const sql = "SELECT * FROM Voluntarios_Evento "

		return query(sql)
	}

	altera(id, valores) {
		const sql = "UPDATE Voluntarios_Evento SET ? WHERE idVoluntario = ?"

		return query(sql, [valores, id])
	}

	deleta(id) {
		const sql = "DELETE FROM Voluntarios_Evento WHERE idVoluntario = ?"

		return query(sql, id)
	}
}

module.exports = new Voluntarios_Evento