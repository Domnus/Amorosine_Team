const repositorio = require('../repositories/acaoSocial')
const Model = require('../template/ModelTemplate.js')

class AcaoSocial extends Model {

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
        const acaoSocial = await repositorio.busca(id)
        if (acaoSocial.length !== 0) {
            return new Promise((resolve, reject) => resolve(acaoSocial[0]))
        } else {
		   return new Promise((resolve, reject) => reject("Ação inexistente!"))
        }
	}

	async altera(id, valores) {
 		const acaoSocial = await this.busca(id)
        if (acaoSocial !== 0) {
			return repositorio.altera(id, valores).then(resultado => {return {...acaoSocial, ...valores}})
									 .catch(erro => {return "Ocorreu um erro!"})
       } else {
		   return new Promise((resolve, reject) => reject("Ação inexistente!"))
	   }
	}

	async deleta(id) {
		const acaoSocial = await this.busca(id) 
        if (acaoSocial) {
			return repositorio.deleta(id).then(resultado => {return resultado})
										 .catch(erro => {return "Ocorreu um erro!"})
       } else {
		   return new Promise((resolve, reject) => reject("Ação inexistente!"))
	   }
	}
}

module.exports = new AcaoSocial
