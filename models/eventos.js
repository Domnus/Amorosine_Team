const conexao = require('../database/conexao')

class Evento {
    adiciona(evento) {
        const sql = 'INSERT INTO Eventos SET ?'
        conexao.query(sql, evento, (erro, resultados) => {
            if (erro) {
                console.log(erro)
            } else {
                console.log(resultados)
            }
        })
    }
}

module.exports = new Evento