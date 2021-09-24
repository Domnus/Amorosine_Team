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

    lista(res) {
        const sql = 'SELECT * FROM Voluntarios'

        conexao.query(sql, (erro, resultado) => {
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(resultado)
            }
        })
    }

    busca(res, id) {
        const sql = 'SELECT * FROM Voluntarios WHERE idVoluntario = ?'

        conexao.query(sql, id, (erro, resultado) => {
            const voluntario = resultado[0]
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(voluntario)
            }
        })
    }
}

module.exports = new Voluntario