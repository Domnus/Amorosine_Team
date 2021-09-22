class Tabelas {
	init(conexao) {
		console.log('Tabelas chamadas')
		this.conexao = conexao

		this.criarAcoesSociais()
		this.criarCidades()
		this.criarEnderecos()
		this.criarVoluntarios()
		this.criarEventos()
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

	criarEnderecos() {
		const sql = 'CREATE TABLE IF NOT EXISTS `amorosine_team`.`Enderecos` (`idEnderecos` INT NOT NULL AUTO_INCREMENT, `idCidades` INT NOT NULL, `rua` VARCHAR(45) NOT NULL, `numero` VARCHAR(45) NOT NULL,`bairro` VARCHAR(45) NOT NULL, `complemento` VARCHAR(45) NULL, `CEP` VARCHAR(8) NOT NULL, PRIMARY KEY (`idEnderecos`, `idCidades`), INDEX `fk_Enderecos_Cidades1_idx` (`idCidades` ASC) VISIBLE, CONSTRAINT `fk_Enderecos_Cidades1` FOREIGN KEY (`idCidades`) REFERENCES `amorosine_team`.`Cidades` (`idCidades`)ON DELETE NO ACTION ON UPDATE NO ACTION) ENGINE = InnoDB;'

		this.conexao.query(sql, (erro) => {
			if (erro) {
				console.log(erro)
			} else {
				console.log('Tabela Enderecos criada com sucesso')
			}
		})
	}

	criarVoluntarios() {
		const sql = 'CREATE TABLE IF NOT EXISTS `amorosine_team`.`Voluntarios` (`idVoluntario` INT NOT NULL AUTO_INCREMENT,`idEndereco` INT NOT NULL,`CPF` VARCHAR(11) NOT NULL,`nome` VARCHAR(50) NOT NULL,`sobrenome` VARCHAR(50) NOT NULL,`email` VARCHAR(50) NOT NULL,`telefone` VARCHAR(9) NOT NULL,PRIMARY KEY (`idVoluntario`, `idEndereco`, `CPF`),INDEX `fk_Voluntarios_Enderecos_idx` (`idEndereco` ASC) VISIBLE,CONSTRAINT `fk_Voluntarios_Enderecos` FOREIGN KEY (`idEndereco`) REFERENCES `amorosine_team`.`Enderecos` (`idEnderecos`) ON DELETE NO ACTION ON UPDATE NO ACTION) ENGINE = InnoDB;'

		this.conexao.query(sql, (erro) => {
			if (erro) {
				console.log(erro)
			} else {
				console.log('Tabela Voluntarios criada com sucesso')
			}
		})
	}

	criarEventos() {
		const sql = 'CREATE TABLE IF NOT EXISTS `amorosine_team`.`Evento` (`idEvento`VARCHAR(45) NOT NULL, `idAcaoSocial` INT NOT NULL, `idVoluntario` INT NOT NULL, `idEndereco` INT NOT NULL, `dataInicio` DATETIME NULL, `dataFinal` DATETIME NULL, PRIMARY KEY (`idEvento`, `idAcaoSocial`, `idVoluntario`, `idEndereco`), INDEX `fk_AcoesSociais_has_Voluntarios_Voluntarios1_idx` (`idVoluntario` ASC) VISIBLE, INDEX `fk_AcoesSociais_has_Voluntarios_AcoesSociais1_idx` (`idAcaoSocial` ASC) VISIBLE, INDEX `fk_Evento_Enderecos1_idx` (`idEndereco` ASC) VISIBLE, CONSTRAINT `fk_AcoesSociais_has_Voluntarios_AcoesSociais1` FOREIGN KEY (`idAcaoSocial`) REFERENCES `amorosine_team`.`AcoesSociais` (`idAcoesSociais`) ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT `fk_AcoesSociais_has_Voluntarios_Voluntarios1` FOREIGN KEY (`idVoluntario`) REFERENCES `amorosine_team`.`Voluntarios` (`idVoluntario`) ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT `fk_Evento_Enderecos1` FOREIGN KEY (`idEndereco`) REFERENCES `amorosine_team`.`Enderecos` (`idEnderecos`) ON DELETE NO ACTION ON UPDATE NO ACTION) ENGINE = InnoDB;'

		this.conexao.query(sql, (erro) => {
			if (erro) {
				console.log(erro)
			} else {
				console.log('Tabela Eventos criada com sucesso')
			}
		})
	}
}

module.exports = new Tabelas