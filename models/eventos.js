const moment = require('moment')
const repositorio = require('../repositories/eventos')

class Evento {
    constructor() {
        this.dataInicioValida = ({ dataAtual, dataInicio }) => moment(dataInicio).isSameOrAfter(dataAtual)
        this.dataFinalValida = ({ dataInicio, dataFinal }) => moment(dataFinal).isSameOrAfter(dataInicio)
        this.valida = parametros => this.validacoes.filter(campo => {
            const { nome } = campo
            const parametro = parametros[nome]

            return !campo.valido(parametro)
        })

        this.validacoes = [
            {
                nome: 'dataInicio',
                valido: this.dataInicioValida,
                mensagem: 'Data de início não pode ser anterior à data de hoje'
            },
            {
                nome: 'dataFinal',
                valido: this.dataFinalValida,
                mensagem: 'Data final deve ser após ou igual à data de início'
            }
        ]
    }

    async adiciona(evento) {
        if (evento.dataInicio === undefined && evento.dataFinal === undefined) {
            var existemErros = false
            var novoEvento = evento
        } else if (evento.dataInicio === undefined) {
            var erros = 'Data de início deve estar preenchida'
            var existemErros = true
        } else if (evento.dataFinal === undefined) {
            var erros = 'Data final deve estar preenchida'
            var existemErros = true
        } else {
            const dataAtual = moment().format('YYYY-MM-DD')
            const dataInicio = moment(evento.dataInicio, 'DD/MM/YYYY').format('YYYY-MM-DD')
            const dataFinal = moment(evento.dataFinal, 'DD/MM/YYYY').format('YYYY-MM-DD')

            const parametros = {
                dataInicio: { dataAtual, dataInicio },
                dataFinal: { dataInicio, dataFinal }
            }

            var erros = this.valida(parametros)
            var existemErros = erros.length
            var novoEvento = { ...evento, dataInicio, dataFinal }
        }

        if (existemErros) {
            return new Promise((resolve, reject) => reject(erros))
        } else {
            return repositorio.adiciona(novoEvento)
                .then((resultado) => { return novoEvento })
        }
    }

    lista() {
        return repositorio.lista()
    }

    busca(id) {
        return repositorio.busca(id)
    }

    async altera(id, valores) {
        if (!valores.dataInicio && !valores.dataFinal) {
            return new Promise((resolve, reject) => reject('Nenhuma data foi informada'))
        } else {
                const resultado = await this.busca(id)
                const evento = resultado[0]
                if (!valores.dataInicio) {
                    var dataInicio = moment(evento.dataInicio,).format('YYYY-MM-DD')
                    var dataFinal = moment(valores.dataFinal, 'DD/MM/YYYY').format('YYYY-MM-DD')
                } else if (!valores.dataFinal) {
                    var dataFinal = moment(evento.dataFinal).format('YYYY-MM-DD')
                    var dataInicio = moment(valores.dataInicio, 'DD/MM/YYYY').format('YYYY-MM-DD')
                } else {
                    var dataInicio = moment(valores.dataInicio, 'DD/MM/YYYY').format('YYYY-MM-DD')
                    var dataFinal = moment(valores.dataFinal, 'DD/MM/YYYY').format('YYYY-MM-DD')
                }
                const dataAtual = moment().format('YYYY-MM-DD')
                const parametros = {
                    dataInicio: { dataAtual, dataInicio },
                    dataFinal: { dataInicio, dataFinal }
                }
            
                var erros = this.valida(parametros)
                var existemErros = erros.length
                var novoValor = { ...evento, dataInicio, dataFinal }

                if (existemErros) {
                    return new Promise((resolve, reject) => reject(erros))
                } else {
                    return repositorio.altera(id, novoValor).then(resultados => {return novoValor})
                }
        }
    }

    async deleta(id) {
        return repositorio.deleta(id).then(resultado => {return id})
                                     .catch(erro => {return erro})
    }
}

module.exports = new Evento