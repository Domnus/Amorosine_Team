const repositorio = require('../repositories/cidades')

class Cidade {
	async adiciona(cidade) {
		if (cidade.UF) {
			if ((cidade.UF).length === 2) {
				return repositorio.adiciona(cidade).then(resultado => {
				const id = resultado.insertId
				const novaCidade = {id, ...cidade}
				return novaCidade
				})
			} else {
				console.log(cidade.UF)
				if ((cidade.UF) === undefined || (cidade.UF).length !== 2) {
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

	async altera(id, valores) {
		if (valores.UF) {
			if ((valores.UF).length > 2 || (valores.UF).length < 2) {
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