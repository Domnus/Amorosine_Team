const express = require('express')
const consign = require('consign')

module.exports = () => {
	const app = express()

	app.use(express.urlencoded({limit: '50mb'}))
    app.use(express.json())

	app.use(function (_req, res, next) {
		res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
		next();
	});

	consign()
		.include('./js/controllers')
		.into(app)

	return app
}
