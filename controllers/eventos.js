const Evento = require('../models/eventos')

module.exports = app => {
    app.get('/eventos', (req, res) => {
        Evento.lista()
            .then(resultado => res.status(200).json(resultado))
            .catch(erro => res.status(400).json(erro))
    })

    app.get('/eventos/:id', (req, res) => {
        const id = req.params.id
        Evento.busca(id)
            .then(resultado => res.status(200).json(resultado))
            .catch(erro => res.status(400).json(erro))
    })

    app.post('/eventos', (req, res) => {
        const evento = req.body

        Evento.adiciona(evento)
            .then(evento => res.status(201).json(evento))
            .catch(erro => res.status(400).json(erro))
    })

    app.patch('/eventos/:id', (req, res) => {
        const id = req.params.id
        const valores = req.body

        Evento.altera(id, valores)
            .then(evento => res.status(200).json(evento))
            .catch(erro => res.status(400).json(erro))
    })

    app.delete('/eventos/:id', (req, res) => {
        const id = req.params.id

        Evento.deleta(id, res)
    })
}