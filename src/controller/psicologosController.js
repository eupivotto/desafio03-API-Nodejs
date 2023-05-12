const Psicologos = require('../models/Psicologos');
const bcrypt = require("bcryptjs");

const psicologosController = {
  async cadastrarPsicologo(req, res) {
    try {
      const { nome, email, senha, apresentacao } = req.body;

      const checkEmail = await Psicologos.count({ where: { email } });
      if (checkEmail) {
        return res.status(400).json("Email já foi cadastrado!");
      }

      const newSenha = bcrypt.hashSync(senha, 10);

      const novoPsicologo = await Psicologos.create({
        nome,
        email,
        senha: newSenha,
        apresentacao,
      }); 
      
      res.status(201).json(novoPsicologo);
      
    } catch (error) {
      console.error(error);
      res.status(400).json("Psicologo não cadastrado");
    }
  },

  async listarPsicologo(req, res) {
    try {
      const listaDePsicologo = await Psicologos.findAll();
      res.status(200).json(listaDePsicologo);
    } catch (error) {
      res.status(500).json("Erro no servidor");
    }
  },

  async showPsicologo(req, res) {
    try {
      const findPsicologo = await Psicologos.findByPk(req.params.id, {
        attributes: ["nome", "email", "apresentacao"],
      });

      if (!findPsicologo) {
        return res.status(404).json("Id não encontrado");
      }

      res.status(200).json(findPsicologo);
    } catch (error) {
      console.error(error);
      res.status(500).json("Erro no servidor");
    }
  },

  async atualizarPsicologo(req, res) {
    try {
      const { id } = req.params;
      const { nome, email, senha, apresentacao } = req.body;

      const psicologo = await Psicologos.findByPk(id);

      if (!psicologo) {
        return res.status(404).json("Id não encontrado");
      }

      const newSenhaAtualizada = bcrypt.hashSync(senha, 10);

      await Psicologos.update(
        {
          nome,
          email,
          senha: newSenhaAtualizada,
          apresentacao,
        },
        {
          where: {
            id,
          },
        }
      );

      const psicologoAtualizado = await Psicologos.findByPk(id);

      res.status(200).json(psicologoAtualizado);

    } catch (error) {
      console.error(error);
      res.status(500).json("Erro no servidor");
    }
  },

  async deletarPsicologo(req, res) {
    try {
      const { id } = req.params;
      const psicologo = await Psicologos.findByPk(id);

      if (!psicologo) {
        return res.status(404).json("Id não encontrado");
      }

      await Psicologos.destroy({ where: { id } });

      res.status(200).json("Psicólogo deletado com sucesso");

    } catch (error) {
      console.error(error);
      res.status(500).json("Erro no servidor");
    }
  },
};

module.exports = psicologosController;