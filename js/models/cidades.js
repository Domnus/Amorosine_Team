const repositorio = require('../views/cidades')
const Model = require('../template/ModelTemplate.ts')

class Cidade extends Model {
	async adiciona(cidade) {
		if (cidade.uf) {
			if ((cidade.uf).length === 2) {
				return repositorio.adiciona(cidade).then(resultado => {
				const id = resultado.insertId
				const novaCidade = {id, ...cidade}
				return novaCidade
				})
			} else {
				console.log(cidade.uf)
				if ((cidade.uf) === undefined || (cidade.uf).length !== 2) {
					return new Promise((resolv, reject) => reject('UF inválida'))
				}
			}
		} else {
			return new Promise((resolv, reject) => reject('Nenhuma UF foi informada'))
		}
	}

	async lista() {
		return repositorio.lista().then(resultado => {return resultado})
						  		  .catch(erro => {return erro})
	}

	async busca(id) {
		return repositorio.busca(id).then(resultado => {return resultado[0]})
									.catch(erro => {return erro})
	}

	async buscaNome(nome) {
		return repositorio.buscaNome(nome).then(resultado => {return resultado[0]})
										  .catch(erro => {return erro})
	}

	async altera(id, valores) {
		if (valores.uf) {
			if ((valores.uf).length > 2 || (valores.uf).length < 2) {
				return new Promise((resolv, reject) => reject('UF inválida'))
			}
		}

		return repositorio.altera(id, valores).then(resultado => {
			return valores
		})
		.catch(erro => {return erro})
	}

	async deleta(id) {
		return repositorio.deleta(id).then(resultado => {return id})
									 .catch(erro => {return erro})
	}
}

module.exports = new Cidade