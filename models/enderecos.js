const conexao = require('../database/conexao')

// FIXME
class Endereco {
    adiciona(endereco, res) {
        const sql = 'INSERT INTO Enderecos SET ?'

        conexao.query(sql, endereco, (erro, resultado) => {
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(201).json(resultado)
            }
        })
    }
}

module.exports = new Endereco