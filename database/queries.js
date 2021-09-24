const conexao = require('./conexao')

const executaQuery = (sql, params = '') => {
    return new Promise((resolve, reject) => {
        conexao.query(sql, params, (erro, resultado, campos) => {
            if (erro) {
                reject(erro)
            } else {
                resolve(resultado)
            }
        })
    })
}

module.exports = executaQuery