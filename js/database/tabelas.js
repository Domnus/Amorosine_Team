class Tabelas {
	init(conexao) {
		console.log('Tabelas chamadas')
		this.conexao = conexao

		this.criarAcoesSociais()
		this.criarCidades()
		this.criarEnderecos()
		this.criarEventos()
		this.criarVoluntarios()
		this.criarVoluntariosEvento()
	}

	criarAcoesSociais() {
		const sql = `CREATE TABLE IF NOT EXISTS amorosine_team.AcoesSociais (
			idAcaoSocial INT NOT NULL AUTO_INCREMENT, 
			nome VARCHAR(100) NOT NULL, 
			descricao VARCHAR(250) NULL DEFAULT NULL, 
			nomeImagem VARCHAR(200),
			PRIMARY KEY (idAcaoSocial)) 
			ENGINE = InnoDB;`

		this.conexao.query(sql, (erro) => {
			if(erro) {
				console.log(erro)
			} else {
				console.log('Tabela AcoesSociais criada com sucesso')
			}
		})
	}

	criarCidades() {
		const sql = `CREATE TABLE IF NOT EXISTS amorosine_team.Cidades (
			idCidade INT NOT NULL AUTO_INCREMENT, 
			nome VARCHAR(45) NOT NULL, 
			UF VARCHAR(2) NOT NULL, 
			PRIMARY KEY (idCidade)) 
			ENGINE = InnoDB;`

		this.conexao.query(sql, (erro) => {
			if (erro) {
				console.log(erro)
			} else {
				console.log('Tabela Cidades criada com sucesso')
			}
		})
	}

	criarEnderecos() {
		const sql = `CREATE TABLE IF NOT EXISTS amorosine_team.Enderecos (
			idEndereco INT NOT NULL AUTO_INCREMENT, 
			idCidade INT NOT NULL, 
			rua VARCHAR(45) NOT NULL, 
			numero VARCHAR(45) NOT NULL, 
			bairro VARCHAR(45) NOT NULL, 
			complemento VARCHAR(45) NULL DEFAULT NULL, 
			CEP VARCHAR(9) NOT NULL, 
			PRIMARY KEY (idEndereco, idCidade), 
			INDEX fk_Enderecos_Cidades1_idx (idCidade ASC) VISIBLE, 
			CONSTRAINT fk_Enderecos_Cidades1 FOREIGN KEY (idCidade) REFERENCES amorosine_team.Cidades (idCidade)) 
			ENGINE = InnoDB;`

		this.conexao.query(sql, (erro) => {
			if (erro) {
				console.log(erro)
			} else {
				console.log('Tabela Enderecos criada com sucesso')
			}
		})
	}

	criarEventos() {
		const sql = `CREATE TABLE IF NOT EXISTS amorosine_team.Eventos (
			idEvento INT NOT NULL AUTO_INCREMENT, 
			idAcaoSocial INT NOT NULL, 
			idEndereco INT NULL, 
			dataInicio DATETIME NULL DEFAULT NULL, 
			dataFinal DATETIME NULL DEFAULT NULL, 
			PRIMARY KEY (idEvento, idAcaoSocial), 
			INDEX fk_AcoesSociais_has_Voluntarios_AcoesSociais0_idx (idAcaoSocial ASC) VISIBLE, 
			INDEX fk_Evento_Enderecos1_idx (idEndereco ASC) VISIBLE, 
			CONSTRAINT fk_AcoesSociais_has_Voluntarios_AcoesSociais1 FOREIGN KEY (idAcaoSocial) REFERENCES amorosine_team.AcoesSociais (idAcaoSocial) ON DELETE RESTRICT ON UPDATE RESTRICT, 
			CONSTRAINT fk_Evento_Enderecos1 FOREIGN KEY (idEndereco) REFERENCES amorosine_team.Enderecos (idEndereco)) 
			ENGINE = InnoDB;`

		 
		this.conexao.query(sql, (erro) => {
			if (erro) {
				console.log(erro)
			} else {
				console.log('Tabela Eventos criada com sucesso')
			}
		})
	}
	

	criarVoluntarios() {
		const sql = `CREATE TABLE IF NOT EXISTS amorosine_team.Voluntarios (
			idVoluntario INT NOT NULL AUTO_INCREMENT,
			idEndereco INT NOT NULL, 
			CPF VARCHAR(14) NOT NULL, 
			nome VARCHAR(50) NOT NULL, 
			sobrenome VARCHAR(50) NOT NULL, 
			email VARCHAR(50) NOT NULL, 
			telefone VARCHAR(16) NOT NULL, 
			sexo CHAR(1) NOT NULL,
			dataNasc DATE NOT NULL,
			PRIMARY KEY (idVoluntario, idEndereco, CPF), 
			INDEX fk_Voluntarios_Enderecos_idx (idEndereco ASC) VISIBLE, 
			CONSTRAINT fk_Voluntarios_Enderecos FOREIGN KEY (idEndereco) REFERENCES amorosine_team.Enderecos (idEndereco)) 
			ENGINE = InnoDB;`

		this.conexao.query(sql, (erro) => {
			if (erro) {
				console.log(erro)
			} else {
				console.log('Tabela Voluntarios criada com sucesso')
			}
		})
	}


	criarVoluntariosEvento() {
		const sql = `CREATE TABLE IF NOT EXISTS amorosine_team.Voluntarios_Evento (
			idEvento INT NOT NULL, 
			idVoluntario INT NOT NULL, 
			idEndereco INT NOT NULL, 
			PRIMARY KEY (idEvento, idVoluntario, idEndereco), 
			INDEX fk_Voluntarios_Evento_Voluntarios1_idx (idVoluntario ASC, idEndereco ASC) VISIBLE, 
			CONSTRAINT fk_Voluntarios_Evento_Eventos1 FOREIGN KEY (idEvento) REFERENCES amorosine_team.Eventos (idEvento) ON DELETE NO ACTION ON UPDATE NO ACTION, 
			CONSTRAINT fk_Voluntarios_Evento_Voluntarios1 FOREIGN KEY (idVoluntario , idEndereco) REFERENCES amorosine_team.Voluntarios (idVoluntario , idEndereco) ON DELETE NO ACTION ON UPDATE NO ACTION) 
			ENGINE = InnoDB;`

		this.conexao.query(sql, (erro) => {
			if (erro) {
				console.log(erro)
			} else {
				console.log('Tabela Voluntarios_Evento criada com sucesso')
			}
		})
	}
}

module.exports = new Tabelas