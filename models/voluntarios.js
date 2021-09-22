const conexao = require('../database/conexao')

class Voluntario {
    adiciona(voluntario) {
        const sql = 'INSERT INTO Voluntarios SET ?'
        conexao.query(sql, voluntario, (erro, resultados) => {
            if (erro) {
                console.log(erro)
            } else {
                console.log(resultados)
            }
        })
    }
}

module.exports = new Voluntario