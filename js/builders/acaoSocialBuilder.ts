class AcaoSocialBuilder {
    nome = '';
    descricao = '';
    nomeImagem = '';

    constructor(dados) {
        this.nome       = dados?.body?.nomeAcao
        this.descricao  = dados?.body?.descricaoAcao
        this.nomeImagem = dados?.file.filename
    }

    validaDados() {
        if (this.nome.length > 100) {
            return 'Nome muito longo!';
        }

        if (this.descricao.length > 250) {
            return 'Descrição muito longa!';
        }

        if (this.nomeImagem.length > 250) {
            return 'Nome da imagem muito longo!';
        }

        return '';
    }
}

module.exports = AcaoSocialBuilder;