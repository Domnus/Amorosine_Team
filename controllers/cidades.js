const Cidade = require('../models/cidades')

module.exports = app => {
	app.get('/cidades', (req, res) => res.send('Rota cidades funcionando'))

	app.post('/cidades', (req, res) => {
		const cidade = req.body
		Cidade.adiciona(cidade, res)
	})
}