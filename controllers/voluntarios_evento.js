const Voluntario = require('../models/voluntarios_evento')

// FIXME
module.exports = app => {
    app.get('/voluntariosEvento', (req, res) => {console.log("Rota voluntariosEvento funcionando")})

    app.post('/voluntariosEvento', (req, res) => {
        const voluntario = req.body

        Voluntario.adiciona(voluntario, res)
    })
}