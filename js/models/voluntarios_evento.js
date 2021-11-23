const repositorio = require('../views/voluntarios_eventos')
class Voluntarios_Evento {
    async adiciona(voluntarios_evento) {
        return repositorio.adiciona(voluntarios_evento).then(resultado => {
            const id = resultado.insertId
            return {id, ...voluntarios_evento}
        })
    }
    
    async lista() {
        return repositorio.lista().then(resultado => {return resultado})
    }

    async altera(id, valores){
        return repositorio.altera(id, valores).then(resultado => {return {id,  ...valores}})
    }

    async busca(id) {
        return repositorio.busca(id).then(resultado => {return resultado})
    }

    async deleta(id) {
        return repositorio.deleta(id).then(resultado => {return resultado})
    }
}

module.exports = new Voluntarios_Evento