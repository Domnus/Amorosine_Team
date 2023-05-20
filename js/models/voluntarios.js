const repositorio = require("../views/voluntarios")
const moment = require('moment')
const Model = require('../template/ModelTemplate.ts')

class Voluntario extends Model {
    async adiciona(voluntario){
        if(voluntario.CPF){
            if ((voluntario.CPF).length !== 14){
                return new Promise((resolve,reject) => reject("CPF inválido"))
            } else {
                voluntario.dataNasc = moment().format('YYYY-MM-DD')
                if ((voluntario.telefone).length !== 16){
                    return new Promise ((resolve,reject) => reject("Telefone inválido"))                    
                }
                else {
                    return repositorio.adiciona(voluntario).then(resultado => {
                        const id = resultado.insertId
                        return {id, ...voluntario}
                    })
                }
            }
        } else {
            return new Promise((resolve, reject) => reject("CPF não informado"))
        }
    }

    async lista(){
        return repositorio.lista().then(resultado => {return resultado})
    }
    
    async busca(id){
        return repositorio.busca(id).then(resultado => {return resultado})
    }

    async buscaNome(nome){
        return repositorio.busca(nome).then(resultado => {return resultado})
    }

    async altera(id, valores){
        if(valores.CPF){
            if ((valores.CPF).length !== 14)
                return new Promise((resolve,reject) => reject("CPF inválido"))
        } else {
            return new Promise((resolve, reject) => reject("CPF não informado"))
        }
        return repositorio.altera(id, valores).then(resultado => {return {id,...valores}})
    } 

    async deleta(id){
        return repositorio.deleta(id).then(resultado => {return resultado.insertId})
    }
}
module.exports = new Voluntario