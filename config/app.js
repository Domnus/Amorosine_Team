const express = require('express')
const consign = require('consign')
const multer = require('multer'); 

const path = require('path')

const acoesController = require('../js/actions/acoesAction.tsx')
const voluntarioController = require('../js/actions/voluntarioAction.tsx')

// Configurando o multer para fazer upload de arquivos para a pasta 'public/img'
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/img/acoesSociais');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });

module.exports = () => {
	const app = express()

	app.use(express.urlencoded({limit: '50mb', extended: true}));
    app.use(express.json());

	app.use(function (_req, res, next) {
		res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
		next();
	});

	app.use(express.static(path.join(__dirname, '../')));

	app.post('/enviarAcoes', upload.single('imagem'), acoesController.enviarAcoes);
	app.post('/enviarVoluntario', upload.single(), voluntarioController.enviarVoluntario);

	app.get('/', (req, res) => {
		res.sendFile(path.join(__dirname, '../index.html'))
	})

	consign()
		.include('./js/controllers')
		.into(app)

	return app
}
