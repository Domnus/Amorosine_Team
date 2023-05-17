class EnderecoBuilder {
    constructor(dados) {
        this.cep         = dados?.cep;
        this.rua         = dados?.rua;
        this.numero      = dados?.numero;
        this.bairro      = dados?.bairro;
        this.complemento = dados?.complemento;
    }

    validaDados() {
        if (this.dados.cep.length > 9) {
            return 'CEP inválido!';
        }

        if (this.dados.rua.length > 45) {
            return 'Nome da rua muito longo!';
        }

        if (this.dados.numero.length > 45) {
            return 'Número da rua muito longo!';
        }

        if (this.dados.bairro.length > 45) {
            return 'Nome do bairro muito longo!';
        }

        if (this.dados.complemento.length > 45) {
            return 'Complemento muito longo!';
        }

        return "";
    }
}

module.exports = new EnderecoBuilder;