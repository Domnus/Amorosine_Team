const AcaoSocial = require('../models/acoesSociais')

module.exports = app => {
	app.get('/acoes', (req, res) => res.send('Servidor rodando'))

	app.post('/acoes', (req, res) => {
		const acaoSocial = req.body
		AcaoSocial.adiciona(acaoSocial)

		res.status(200).send()
	})
}