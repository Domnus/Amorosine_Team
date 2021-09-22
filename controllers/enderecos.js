const Endereco = require('../models/enderecos')

module.exports = app => {
    app.get('/enderecos', (req, res) => res.send('Rota enderecos funcionando'))

    app.post('/enderecos', (req, res) => {
        const endereco = req.body

        Endereco.adiciona(endereco, res)
    })
}