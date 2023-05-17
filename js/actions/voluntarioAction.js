const voluntarios = require("../models/voluntarios");
const endereco = require("../models/enderecos");
const cidades = require("../models/cidades");
const VoluntarioBuilder = require("../builders/voluntarioBuilder.tsx");
const EnderecoBuilder = require("../builders/enderecoBuilder.tsx");
const CidadeBuilder = require("../builders/cidadeBuilder.tsx");

module.exports = {
  enviarVoluntario: async (req, res) => {
    try {
      /* Informações do voluntário */
      const voluntario = VoluntarioBuilder(req.body);
      var erro = voluntario.validaDados();

      if (erro != '') {
        res.status(406).send(erro);
      }

      /* Informações do endereço */
      const endereco = EnderecoBuilder(req.body);
      var erro = endereco.validaDados();

      if (erro != '') {
        res.status(406).send(erro);
      }

      /* Informações da cidade */
      resultadoCidade = await cidades.buscaNome({ nome: cidade })

      if (resultadoCidade === undefined) {
        const cidade = new CidadeBuilder();
        var erro = cidade.validaDados();        

        if (erro != '') {
          res.status(406).send(erro);
        }

        resultadoCidade = await cidades.adiciona({ UF: uf, nome: cidade })
      }

      resultadoEndereco = await endereco.adiciona({
        CEP: cep,
        rua: rua,
        numero: numero,
        bairro: bairro,
        complemento: complemento,
        idCidade: resultadoCidade.id,
      })

      resultadoVoluntario = await voluntarios.adiciona({
        nome: nome,
        sobrenome: sobrenome,
        CPF: cpf,
        email: email,
        telefone: telefone,
        sexo: sexo,
        dataNasc: dataNascimento,
        idEndereco: resultadoEndereco.id,
      })

      res.status(200).send("Voluntário cadastrado com sucesso.");
    } catch (error) {
      console.error("Erro na requisição:", error);
      res.status(500).send("Erro na requisição." + error);
    }
  },
};
