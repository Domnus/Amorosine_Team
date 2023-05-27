const repositorio = require("../repositories/enderecos")
const Model = require('../template/ModelTemplate.js')

class Endereco extends Model {
    async adiciona(endereco){
        if (endereco.cep) {
            if ((endereco.cep).length !== 9 || /[a-z]/i.test(endereco.cep)){
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
        if (valores.cep) {
            if ((valores.cep).length !== 9 || /[a-z]/i.test(valores.cep)){
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