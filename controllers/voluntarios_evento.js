const Voluntario_Evento = require('../models/voluntarios_evento')

module.exports = app => {
    app.get('/voluntariosEvento', (req, res) => {
        Voluntario_Evento.lista().then(resultado => res.status(200).json(resultado))
                                  .catch(erro => res.status(400).json(erro))
    })
    
    app.get('/voluntario/:id', (req, res) => {
        const id = req.params.id 
        Voluntario_Evento.busca(id).then(resultado => res.status(200).json(resultado))
                            .catch(erro => res.status(400).json(erro))
    })

    app.post('/voluntariosEvento', (req, res) => {
        const voluntario = req.body

        Voluntario_Evento.adiciona(voluntario, res).then(resultado => res.status(200).json(resultado))
                                            .catch(erro => res.status(400).json(erro))
    })

    app.patch('/voluntariosEvento/:id', (req, res) => {
        const id = req.params.id
        const valores = req.body

        Voluntario_Evento.altera(id, valores).then(resultado => res.status(200).json(resultado))
                                      .catch(erro => res.status(400).json(erro))
    })
    
    app.delete('/voluntariosEvento/:id', (req, res) => {
        const id = req.params.id

        Voluntario_Evento.deleta(id).then(resultado => res.status(200).json(resultado))
                                     .catch(erro => res.status(400).json(erro))
    })
}