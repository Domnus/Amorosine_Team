class Tabelas {
	init(conexao) {
		console.log('Tabelas chamadas')
		this.conexao = conexao

		this.criarAcoesSociais()
		this.criarCidades()
	}

	criarAcoesSociais() {
		const sql = 'CREATE TABLE IF NOT EXISTS `amorosine_team`.`AcoesSociais` (`idAcoesSociais` INT NOT NULL AUTO_INCREMENT,`nome` VARCHAR(100) NOT NULL,`descricao` VARCHAR(250) NULL, PRIMARY KEY (`idAcoesSociais`)) ENGINE = InnoDB;'
		this.conexao.query(sql, (erro) => {
			if(erro) {
				console.log(erro)
			} else {
				console.log('Tabela AcoesSociais criada com sucesso')
			}
		})
	}

	criarCidades() {
		const sql = 'CREATE TABLE IF NOT EXISTS `amorosine_team`.`Cidades` (`idCidades` INT NOT NULL AUTO_INCREMENT, `descricao` VARCHAR(45) NOT NULL, `UF` VARCHAR(2) NOT NULL, PRIMARY KEY (`idCidades`)) ENGINE = InnoDB;'

		this.conexao.query(sql, (erro) => {
			if (erro) {
				console.log(erro)
			} else {
				console.log('Tabela Cidades criada com sucesso')
			}
		})
	}
}

module.exports = new Tabelas