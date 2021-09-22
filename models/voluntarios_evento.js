const conexao = require('../database/conexao')

class Voluntarios_Evento {
    adiciona(voluntario, res) {
        const sql = 'INSERT INTO Voluntarios_Evento SET ?'

        conexao.query(sql, voluntario, (erro, resultado) => {
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(201).json(resultado)
            }
        })
    }
}

module.exports = new Voluntarios_Evento