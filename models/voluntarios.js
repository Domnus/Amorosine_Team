const conexao = require('../database/conexao')

class Voluntario {
    adiciona(voluntario, res) {
        const sql = 'INSERT INTO Voluntarios SET ?'
        conexao.query(sql, voluntario, (erro, resultado) => {
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(201).json(resultado)
            }
        })
    }
}

module.exports = new Voluntario