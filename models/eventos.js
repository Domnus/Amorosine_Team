const conexao = require('../database/conexao')
const moment = require('moment')

class Evento {

    validarDatas(dataInicio, dataFinal) {
        const dataAtual = moment().format('YYYY-MM-DD HH:mm:ss')

        const dataInicioValida = moment(dataInicio).isSameOrAfter(dataAtual)
        const dataFinalValida = moment(dataFinal).isSameOrAfter(dataInicio)

        const validacoes = [
            {
                nome: 'dataInicio',
                valido: dataInicioValida,
                mensagem: 'Data de início não pode ser anterior à data de hoje'
            },
            {
                nome: 'dataFinal',
                valido: dataFinalValida,
                mensagem: 'Data final deve ser após ou igual à data de início'
            }
        ]

        return validacoes.filter(campo => !campo.valido)
    }


    adiciona(evento, res) {
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
            const dataInicio = moment(evento.dataInicio, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss')
            const dataFinal = moment(evento.dataFinal, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss')

            var erros = this.validarDatas(dataInicio, dataFinal)
            var existemErros = erros.length
            var novoEvento = { ...evento, dataInicio, dataFinal }
        }

        if (existemErros) {
            res.status(401).json(erros)
        } else {
            const sql = 'INSERT INTO Eventos SET ?'
            conexao.query(sql, novoEvento, (erro, resultado) => {
                if (erro) {
                    res.status(400).json(erro)
                } else {
                    res.status(201).json(resultado)
                }
            })
        }
    }
}


module.exports = new Evento