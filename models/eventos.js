const conexao = require('../database/conexao')
const moment = require('moment')
const repositorio = require('../repositories/eventos')

class Evento {
    constructor() {
        this.dataInicioValida = ({dataAtual, dataInicio}) => moment(dataInicio).isSameOrAfter(dataAtual)
        this.dataFinalValida = ({dataInicio, dataFinal}) => moment(dataFinal).isSameOrAfter(dataInicio)
        this.valida = parametros => this.validacoes.filter(campo => {
            const {nome} = campo
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
                dataInicio: {dataAtual, dataInicio},
                dataFinal: {dataInicio, dataFinal}
            }

            var erros = this.valida(parametros)
            var existemErros = erros.length
            var novoEvento = { ...evento, dataInicio, dataFinal }
        }

        if (existemErros) {
            return new Promise((resolve, reject) => reject(erros))
        } else {
            return repositorio.adiciona(novoEvento)
                .then((resultado) => {
                    return novoEvento
                })
        }
    }

    lista() {
        return repositorio.lista()
    }

    async busca(id) {
        return repositorio.busca(id)
  }

    async altera(id, valores) {
        this.busca(id).then(resultado => {
            const evento = resultado[0]
            console.log(evento.dataInicio)
            if (!valores.dataInicio && !valores.dataFinal) {
                return new Promise((resolve, reject)=> reject('Nenhuma data foi informada'))
            } else {
                if (!valores.dataInicio){
                    var dataInicio = evento.dataInicio 
                } else if (!valores.dataFinal){
                    var dataFinal = evento.dataFinal
                } else {
                    var dataInicio = moment(valores.dataInicio, 'DD/MM/YYYY').format('YYYY-MM-DD')
                    var dataFinal = moment(valores.dataFinal, 'DD/MM/YYYY').format('YYYY-MM-DD')
                }
                const dataAtual = moment().format('YYYY-MM-DD')
                var novoValor = { ...valores, dataInicio, dataFinal }

                const parametros = {
                    dataInicio: {dataAtual, dataInicio},
                    dataFinal: {dataInicio, dataFinal}
                }

                var erros = this.valida(parametros)
                var existemErros = erros.length
            }         

            if (existemErros) {
                return new Promise(erros)
            } else {
                return repositorio.altera(id, valores)
                    .then(resultado => {
                        return novoValor
                    })
            }
        }).catch(erro => {return erro})
    }

    deleta(id, res) {
        
        const sql = 'DELETE FROM Eventos WHERE idEvento = ?'
        conexao.query(sql, id, (erro, resultado) => {
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(id)
            }
        })

    }
}


module.exports = new Evento