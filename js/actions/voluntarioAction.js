const voluntarios = require("../models/voluntarios");
const endereco = require("../models/enderecos");
const cidades = require("../models/cidades");

module.exports = {
  enviarVoluntario: async (req, res) => {
    try {
      /* Informações do voluntário */
      const nome = req.body.nome;
      const sobrenome = req.body.sobrenome;
      const cpf = req.body.cpf;
      const email = req.body.email;
      const telefone = req.body.telefone;
      const sexo = req.body.sexo;
      const dataNascimento = req.body.dataNascimento;

      /* Informações do endereço */
      const cep = req.body.cep;
      const rua = req.body.rua;
      const numero = req.body.numero;
      const bairro = req.body.bairro;
      const cidade = req.body.nomeCidade;
      const uf = req.body.uf;
      const complemento = req.body.complemento;

      resultado = await cidades.buscaNome({ nome: cidade })

      if (resultado === undefined) {
        resultado = await cidades.adiciona({ UF: uf, nome: cidade })
      }

      resultado = await endereco.adiciona({
        CEP: cep,
        rua: rua,
        numero: numero,
        bairro: bairro,
        complemento: complemento,
        idCidade: resultado.id,
      })

      resultado = await voluntarios.adiciona({
        nome: nome,
        sobrenome: sobrenome,
        CPF: cpf,
        email: email,
        telefone: telefone,
        sexo: sexo,
        dataNasc: dataNascimento,
        idEndereco: resultado.id,
      })

      res.status(200).send("Voluntário cadastrado com sucesso.");
    } catch (error) {
      console.error("Erro na requisição:", error);
      res.status(500).send("Erro na requisição." + error);
    }
  },
};
