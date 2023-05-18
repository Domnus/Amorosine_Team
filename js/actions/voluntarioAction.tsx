const ModelVoluntarios = require("../models/voluntarios");
const ModelEndereco = require("../models/enderecos");
const ModelCidades = require("../models/cidades");
require("../builders/voluntarioBuilder.tsx");
require("../builders/enderecoBuilder.tsx");
require("../builders/cidadeBuilder.tsx");

module.exports = {
  enviarVoluntario: async (req, res) => {
    try {
      /* Informações do voluntário */
      const voluntario = new VoluntarioBuilder(req.body);
      var erro = voluntario.validaDados();

      if (erro != '') {
        res.status(406).send(erro);
      }

      /* Informações do endereço */
      const endereco = new EnderecoBuilder(req.body);
      var erro = endereco.validaDados();

      if (erro != '') {
        res.status(406).send(erro);
      }

      /* Informações da cidade */
      const cidade = new CidadeBuilder(req.body);
      var erro = cidade.validaDados();

      if (erro != '') {
        res.status(406).send(erro);
      }

      /* Cadastro da cidade */
      var resultadoCidade = await ModelCidades.buscaNome(cidade.cidade);

      if (resultadoCidade === undefined) {
        resultadoCidade = await ModelCidades.adiciona({
          nome: cidade.cidade,
          uf: cidade.uf,
        });
      }

      /* Cadastro do endereço */
      var resultadoEndereco = await ModelEndereco.adiciona(endereco)

      /* Cadastro do voluntário */
      var resultadoVoluntario = await ModelVoluntarios.adiciona(voluntario)

      res.status(200).send("Voluntário cadastrado com sucesso.");
    } catch (error) {
      console.error("Erro na requisição:", error);
      res.status(500).send("Erro na requisição." + error);
    }
  },
};
