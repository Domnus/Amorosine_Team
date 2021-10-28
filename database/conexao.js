const mysql = require('mysql')

const conexao = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'ong_amorosine',
	password: 'amorosine',
	database: 'amorosine_team'
})

module.exports = conexao