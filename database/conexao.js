const mysql = require('mysql')

const conexao = mysql.createConnection({
	host: '192.168.1.12',
	port: 3306,
	user: 'ong_amorosine',
	password: 'amorosine',
	database: 'amorosine_team'
})

module.exports = conexao