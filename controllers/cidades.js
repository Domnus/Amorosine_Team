const Cidade = require('../models/cidades')

module.exports = app => {
	app.get('/acoes', (req, res) => res.send('Servidor rodando'))

	app.post('/cidades', (req, res) => {
		const cidade = req.body
		Cidade.adiciona(cidade)

		res.status(200).send()
	})
}