const repositorio = require('../repositories/acaoSocial')
class AcaoSocial {

	async adiciona(acaoSocial) {
		return repositorio.adiciona(acaoSocial).then(resultado => {
			const id = resultado.insertId
			return {id, ...acaoSocial}
		})
											   .catch(erro => {return erro})
	}

	async lista() {
		return repositorio.lista().then(resultado => {return resultado})
							      .catch(erro => {return erro})
	}

	async busca(id) {
		return repositorio.busca(id).then(resultado => {return resultado[0]})
								    .catch(erro => {return erro})
	}	

	async altera(id, valores) {
		return repositorio.altera(id, valores).then(resultado => {return valores})
											  .catch(erro => {return erro})
	}

	async deleta(id) {
		return repositorio.deleta(id).then(resultado => {return id})
									 .catch(erro => {return erro})
	}
}

module.exports = new AcaoSocial