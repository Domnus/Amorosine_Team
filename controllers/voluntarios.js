const Voluntario = require('../models/voluntarios')

module.exports = app => {
    app.get('/voluntarios', (req, res) => {
        Voluntario.lista().then(resultado => res.status(200).json(resultado))
                          .catch(erro => res.status(400).json(erro))
    })

    app.get('/voluntarios/:id', (req, res) => {
        const id = req.params.id
        Voluntario.busca(id).then(resultado => res.status(200).json(resultado))
                            .catch(erro => res.status(400).json(erro))
    })

    app.post('/voluntarios', (req, res) => {
        const voluntario = req.body

        Voluntario.adiciona(voluntario).then(resultado => res.status(200).json(resultado))
                                       .catch(erro => res.status(400).json(erro))
    })

    app.patch('/voluntarios/:id', (req, res) => {
        const id = req.params.id
        const valores = req.body

        Voluntario.altera(id, valores).then(resultado => res.status(200).json(resultado))
                                      .catch(erro => res.status(400).json(erro))
    })

    app.delete('/voluntarios/:id', (req, res) => {
        const id = req.params.id

        Voluntario.deleta(id).then(resultado => res.status(200).json(resultado))
                             .catch(erro => res.status(400).json(erro))
    })
}