const acaoSocial = require('../models/acoesSociais.js'); // Importe a classe acaoSocial
const fs = require('fs');
const AcaoSocialBuilder = require('../builders/acaoSocialBuilder.tsx')

module.exports = {
  enviarAcoes: async (req, res) => {
    try {
      // Recupera os dados do formulário do corpo da requisição
      // Cria um objeto acaoSocial com os dados do formulário
      const novaAcaoSocial = new AcaoSocialBuilder(req);

      if (erro != '') {
        resstatus(406).send(erro);
      }

      // Chama o método `adiciona` da classe acaoSocial para inserir a nova ação social no banco de dados
      resultado = await acaoSocial.adiciona(novaAcaoSocial);

      // Envia uma mensagem de sucesso para o cliente
      res.status(200).send('Ação social cadastrada com sucesso.');

    } catch (error) {
      console.error('Erro na requisição:', error);
      res.status(500).send('Erro na requisição.');
    }
  }
};