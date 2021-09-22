const conexao = require('../database/conexao')

class Endereco {
    adiciona(endereco) {
        const sql = 'INSERTO INTO Enderecos SET ?'

        conexao.query(sql, endereco, (erro, resultados) => {
            if (erro) {
                console.log(erro)
            } else {
                console.log(resultados)
            }
        })
    }
}

module.exports = new Endereco