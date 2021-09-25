const Endereco = require("../models/enderecos")

module.exports = app => {
    app.get('/enderecos', (req, res) => {
        Endereco.lista().then(resultado => res.status(200).json(resultado))
                        .catch(erro => res.status(400).json(erro))
    })

    app.get('/enderecos/:id', (req, res) => {
        const id = req.params.id
        Endereco.busca(id).then(resultado => res.status(200).json(resultado))
                        .catch(erro => res.status(400).json(erro))
    })
    
    app.post('/enderecos', (req, res) => {
        const endereco = req.body

        Endereco.adiciona(endereco).then(resultado => res.status(200).json(resultado))
                                   .catch(erro => res.status(400).json(erro))
    })

    app.patch('/enderecos/:id', (req, res) => {
        const id = req.params.id
        const valores = req.body
        Endereco.altera(id, valores).then(resultado => res.status(200).json(resultado))
                        .catch(erro => res.status(400).json(erro))
    })

    app.delete('/enderecos/:id', (req, res) => {
        const id = req.params.id
        Endereco.deleta(id).then(resultado => res.status(200).json(resultado))
                           .catch(erro => res.status(400).json(erro))
    })
}