const query = require("../database/queries")
const Repository = require('../template/RepositoryTemplate.js')

class Endereco extends Repository {
	lista() {
		const sql = "SELECT * FROM Enderecos"

		return query(sql)
	}

	busca(id) {
		const sql = "SELECT * FROM Enderecos WHERE idEndereco = ?"
		
		return query(sql, id)
	}

    adiciona(endereco){
        const sql = "INSERT INTO Enderecos SET ?"
        return query(sql, endereco)
    }

	altera(id, valores) {
		const sql = "UPDATE Enderecos SET ? WHERE idEndereco = ?"

		return query(sql, [valores, id])
	}

	deleta(id) {
		const sql = "DELETE FROM Enderecos WHERE idEndereco = ?"

		return query(sql, id)
	}
}

module.exports = new Endereco