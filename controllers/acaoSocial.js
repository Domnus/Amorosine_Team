const AcaoSocial = require('../models/acoesSociais')

module.exports = app => {
	app.get('/acoes', (req, res) => {
		AcaoSocial.lista().then(resultado => res.status(200).json(resultado))
						  .catch(erro => res.status(400).json(erro))
	})

	app.get('/acoes/:id', (req, res) => {
		const id = req.params.id
		AcaoSocial.busca(id).then(resultado => res.status(200).json(resultado))
						  .catch(erro => res.status(400).json(erro))
	})

	app.post('/acoes', (req, res) => {
		const acaoSocial = req.body
		AcaoSocial.adiciona(acaoSocial).then(resultado => res.status(200).json(resultado))
									   .catch(erro => res.status(400).json(erro))
	})

	app.patch('/acoes/:id', (req, res) => {
		const id = req.params.id
		const valores = req.body
		AcaoSocial.altera(id, valores).then(resultado => res.status(200).json(resultado))
									  .catch(erro => res.status(400).json(erro))
	}) 

	app.delete('/acoes/:id', (req, res) => {
		const id = req.params.id
		AcaoSocial.deleta(id).then(resultado => res.status(200).json(resultado))
							 .catch(erro => res.status(400).json(erro))
	})
}