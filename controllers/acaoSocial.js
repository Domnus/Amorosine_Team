const AcaoSocial = require('../models/acoesSociais')

module.exports = app => {
	app.get('/acoes', (req, res) => res.send('Rota acoes funcionando'))

	app.post('/acoes', (req, res) => {
		const acaoSocial = req.body
		AcaoSocial.adiciona(acaoSocial)

		res.status(200).send()
	})
}