const ModelVoluntarios = require("../models/voluntarios");
const ModelEndereco = require("../models/enderecos");
const ModelCidades = require("../models/cidades");
const Voluntario = require("../builders/voluntarioBuilder.js");
const Endereco = require("../builders/enderecoBuilder.js");
const Cidade = require("../builders/cidadeBuilder.js");

module.exports = {
  enviarVoluntario: async (req, res) => {
    try {
      var erro = '';

      /* Informações da cidade */
      const cidade = new Cidade(req.body);
      erro = cidade.validaDados();

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

      var idCidade = resultadoCidade.idCidade;

      /* Informações do endereço */
      const endereco = new Endereco({idCidade, ...req.body});
      erro = endereco.validaDados();

      if (erro != '') {
        res.status(406).send(erro);
      }

      /* Cadastro do endereço */
      var resultadoEndereco = await ModelEndereco.adiciona(endereco)

      var idEndereco = resultadoEndereco.id;

      /* Informações do voluntário */
      const voluntario = new Voluntario(req.body);
      erro = voluntario.validaDados();

      if (erro != '') {
        res.status(406).send(erro);
        res.end();
      }

      /* Cadastro do voluntário */
      var resultadoVoluntario = await ModelVoluntarios.adiciona({idEndereco, ...voluntario})

      res.status(200).send("Voluntário cadastrado com sucesso.");
    } catch (error) {
      console.error("Erro na requisição:", error);
      res.status(500).send("Erro na requisição." + error);
    }
  },
};
