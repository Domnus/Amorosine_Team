class EnderecoBuilder {
    cep         = '';
    rua         = '';
    numero      = '';
    bairro      = '';
    complemento = '';

    constructor(dados) {
        this.cep         = dados?.cep;
        this.rua         = dados?.rua;
        this.numero      = dados?.numero;
        this.bairro      = dados?.bairro;
        this.complemento = dados?.complemento;
    }

    validaDados() {
        if (this.cep.length > 9) {
            return 'CEP inválido!';
        }

        if (this.rua.length > 45) {
            return 'Nome da rua muito longo!';
        }

        if (this.numero.length > 45) {
            return 'Número da rua muito longo!';
        }

        if (this.bairro.length > 45) {
            return 'Nome do bairro muito longo!';
        }

        if (this.complemento.length > 45) {
            return 'Complemento muito longo!';
        }

        return "";
    }
}

module.exports = EnderecoBuilder;