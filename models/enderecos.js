const repositorio = require("../repositories/enderecos")

class Endereco {
    async adiciona(endereco){
        if (endereco.CEP) {
            if ((endereco.CEP).length !== 8 || /[a-z]/i.test(endereco.CEP)){
                return new Promise((resolve, reject) => reject('CEP inválido'))
            } else {
                return repositorio.adiciona(endereco).then(resultado => {
                    const id = resultado.insertId
                    const novoEndereco = {id, ...endereco}
                    return novoEndereco
                })
            }
        } else {
            return new Promise((resolve, reject) => reject('CEP não foi informado'))
        }
    }

    async lista() {
        return repositorio.lista().then(resultado => {return resultado})
    }

    async busca(id) {
        return repositorio.busca(id).then(resultado => {return resultado})
    }

    async altera(id, valores) {
        if (valores.CEP) {
            if ((valores.CEP).length !== 8 || /[a-z]/i.test(valores.CEP)){
                return new Promise((resolve, reject) => reject('CEP inválido'))
            }  
        } 

        return repositorio.altera(id, valores).then(resultado => {return valores})
    }

    async deleta(id) {
        return repositorio.deleta(id).then(resultado => {return resultado.insertId})
    }
}

module.exports = new Endereco