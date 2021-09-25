const conexao = require('../database/conexao')
const query = require('../database/queries')

class Evento {
    adiciona(evento) {
        const sql = 'INSERT INTO Eventos SET ?'
        return query(sql, evento)
    }

    lista() {
        const sql = 'SELECT * FROM Eventos' 

        return query(sql)
    }

    busca(id) {
        const sql = 'SELECT * FROM Eventos WHERE idEvento = ?'

        return query(sql, id)
    }

    altera(id, params) {
        const sql = 'UPDATE Eventos SET ? WHERE idEvento = ?'

        return query(sql, [params, id])
    }

    deleta(id) {
        const sql = 'DELETE FROM Eventos WHERE idEvento = ?'

        return query(sql, id)
    }
}

module.exports = new Evento