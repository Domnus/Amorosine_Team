const express = require('express')
const consign = require('consign')
const bodyParser = require("body-parser")

module.exports = () => {
	const app = express()

	app.use('/assets/images/', express.static('assets/images/'))

	app.use(bodyParser.urlencoded({limit: '50mb'}))

	app.use(function (req, res, next) {
		res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
		next();
	});

	consign()
		.include('controllers')
		.into(app)

	return app
}