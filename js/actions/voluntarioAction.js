const voluntarios = require("../views/voluntarios");
const endereco = require("../views/enderecos");
const cidades = require("../views/cidades");

module.exports = {
  enviarVoluntario: (req, res) => {
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

      cidades.adiciona({
        nome: cidade,
        UF: uf,
      })
        .then((idCidade) => {
          id = idCidade;
          endereco.adiciona({
            CEP: cep,
            rua: rua,
            numero: numero,
            bairro: bairro,
            complemento: complemento,
            idCidade: idCidade,
          })
            .then((idEndereco) => {
              voluntarios.adiciona({
                nome: nome,
                sobrenome: sobrenome,
                CPF: cpf,
                email: email,
                telefone: telefone,
                sexo: sexo,
                dataNasc: dataNascimento,
                idEndereco: idEndereco,
              })
                .then(() => {
                  res.status(200).send("Voluntário cadastrado com sucesso.");
                })
                .catch((error) => {
                  console.error("Erro ao cadastrar voluntário:", error);
                  res.status(500).send("Erro ao cadastrar voluntário." + error);
                });
            })
            .catch((error) => {
              console.error("Erro ao cadastrar endereço:", error);
              res.status(500).send("Erro ao cadastrar endereço." + error);
            });
        })
    } catch (error) {
      console.error("Erro na requisição:", error);
      res.status(500).send("Erro na requisição." + error);
    }
  },
};
