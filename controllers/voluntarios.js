const Voluntario = require('../models/voluntarios')

// FIXME
module.exports = app => {
    app.get('/voluntarios', (req, res) => {
        Voluntario.lista(res)
    })

    app.get('/voluntarios/:id', (req, res) => {
        const id = req.params.id
        Voluntario.busca(res, id)
    })


    app.post('/voluntarios', (req, res) => {
        const voluntario = req.body

        Voluntario.adiciona(voluntario, res)
    })
}