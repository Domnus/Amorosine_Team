const { json } = require('body-parser')
const Cidade = require('../models/cidades')

module.exports = app => {
	app.get('/cidades', (req, res) => {
		Cidade.lista().then(resultado => res.status(200).json(resultado))
					  .catch(erro => res.status(400).json(erro))
	})

	app.get('/cidades/:id', (req, res) => {
		const id = req.params.id
		Cidade.busca(id).then(resultado => res.status(200).json(resultado))
						.catch(erro => res.status(400).json(erro))
	})

	app.post('/cidades', (req, res) => {
		const cidade = req.body
		Cidade.adiciona(cidade).then(resultado => res.status(201).json(resultado))
							   .catch(erro => res.status(400).json(erro))
	})

	app.patch('/cidades/:id', (req, res) => {
		const id = req.params.id
		const valores = req.body

		Cidade.altera(id, valores).then(resultado => res.status(200).json(resultado))
								  .catch(erro => res.status(400).json(erro))
	})

	app.delete('/cidades/:id', (req, res) => {
		const id = req.params.id

		Cidade.deleta(id).then(resultado => res.status(200).json(resultado))
						 .catch(erro => res.status(400).json(erro))
	})
}