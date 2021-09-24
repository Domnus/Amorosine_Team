const AcaoSocial = require('../models/acoesSociais')

module.exports = app => {
	app.get('/acoes', (req, res) => {
		
	})

	app.post('/acoes', (req, res) => {
		const acaoSocial = req.body
		AcaoSocial.adiciona(acaoSocial, res)
	})
}