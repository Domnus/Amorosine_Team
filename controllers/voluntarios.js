const Voluntario = require('../models/voluntarios')

module.exports = app => {
    app.get('/voluntarios', (req, res) => {res.send('Rota voluntarios funcionando')})

    app.post('/voluntarios', (req, res) => {
        const voluntario = req.body

        Voluntario.adiciona(voluntario)

        res.status(200).send()
    })
}