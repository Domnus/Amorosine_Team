const acaoSocial = require('../views/acaoSocial.js'); // Importe a classe acaoSocial

module.exports = {
  enviarAcoes: (req, res) => {
    try {
      // Recupera os dados do formulário do corpo da requisição
      const nomeAcao = req.body.nomeAcao;
      const descricaoAcao = req.body.descricaoAcao;
      const imagem = req.file.filename; // Nome do arquivo de imagem enviado

      // Cria um objeto acaoSocial com os dados do formulário
      const novaAcaoSocial = {
        nome: nomeAcao,
        descricao: descricaoAcao,
        imagem: imagem
      };

      // Chama o método `adiciona` da classe acaoSocial para inserir a nova ação social no banco de dados
      acaoSocial.adiciona(novaAcaoSocial)
        .then(() => {
          // Envia uma resposta para o cliente indicando que a ação foi criada com sucesso
          res.status(200).send('Ação criada com sucesso!');
        })
        .catch((error) => {
          console.error('Erro na requisição:', error);
          res.status(500).send('Erro na requisição.');
        });

    } catch (error) {
      console.error('Erro na requisição:', error);
      res.status(500).send('Erro na requisição.');
    }
  }
};