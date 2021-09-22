const conexao = require('../database/conexao')
const moment = require('moment')

class Evento {
    adiciona(evento, res) {
        if (evento.dataInicio !== '' && evento.dataFinal !== '') {
            const dataInicio = moment(evento.dataInicio, 'DD/MM/YYYY').format('YYYY-MM-SS')
            const dataFinal = moment(evento.dataFinal, 'DD/MM/YYYY').format('YYYY-MM-SS')
        } 

        const novoEvento = {...evento, dataInicio, dataFinal}

        const sql = 'INSERT INTO Eventos SET ?'
        conexao.query(sql, evento, (erro, resultado) => {
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(201).json(resultado)
            }
        })
    }
}

module.exports = new Evento