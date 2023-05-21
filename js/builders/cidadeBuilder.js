const IBuilder = require('../template/BuilderTemplate');

class CidadeBuilder extends IBuilder {
    cidade = '';
    uf     = '';

    constructor(dados) {
      this.cidade = dados?.nomeCidade;
      this.uf     = dados?.uf;
    }

    validaDados() {
        if (this.cidade.length > 45) {
            return "Nome da cidade muito longo!";
        }

        if (this.uf.length > 2) {
            return "UF inválida!";
        }

        return "";
    }
}

module.exports = CidadeBuilder;