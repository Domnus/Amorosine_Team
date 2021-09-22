const Evento = require('../models/eventos')

module.exports = app => {
    app.get('/eventos', (req, res) => {res.send('Rota eventos funcionando')})

    app.post('/eventos', (req, res) => {
        const evento = req.body

        Evento.adiciona(evento)

        res.status(200).send()
    })
}