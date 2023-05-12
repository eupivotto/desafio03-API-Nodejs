// Importando Psicologos 
const Psicologos = require('../models/Psicologos');
// Função para armazenar senha
const bcrypt = require("bcryptjs");

//Cadastrar psicologos
const psicologosController   = {
    async cadastrarPsicologo(req, res) {
      try {
        const { nome, email, senha, apresentacao } = req.body;
  
        //Checagem de email cadastrado
        const checkEmail = await Psicologos.count({ where: { email } });
        if (checkEmail) {
          return res.status(400).json("Email ja foi cadastrado!");
        }
  
        //Configuração de uma nova senha
        const newSenha = bcrypt.hashSync(senha, 10);
  
        //Criando um novo psicologo
        const novoPsicologo = await Psicologos.create({
          nome,
          email,
          senha: newSenha,
          apresentacao,
          
        }); 
        res.status(201).json(novoPsicologo);
        
      } catch (error) {
        console.error(error)
        res.status(400).json("Psicologo não cadastrado");
      }
    },
  
    // Listagem dos psicologos cadastrados
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
  
        res.status(200).json(findPsicologo);
      } catch (error) {
        return res.error(404).json("Id não foi encontrado encontrado");
      }
    },
  

    // Atualizar informaçoes de psicologos
    async atualizarPsicologo(req, res) {
      try {
        const { id } = req.params;
        const { nome, email, senha, apresentacao } = req.body;
        
        const psicologo = await Psicologos.findByPk(id);
  
        if (!psicologo) {
           return res.status(404).json("Id não foi encontrado encontrado");
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
  
        console.error("Erro no servidor");
        console.log(error);
        res.status(500).json("Erro no servidor");
     }
  },
  

  // Deletar psicologos
    async deletarPsicologo(req, res) {
  
      try {
              const { id } = req.params;
              const psicologos = await Psicologos.findByPk(id);
  
              if (!psicologos) {
                 return res.status(404).json("Id não foi encontrado encontrado");
              }
     
              await Psicologos.update({ status: 0 }, { where: { id } });
     
              res.status(200).json("psicologo deletado com Sucesso");
  
           } catch (error) {
  
              res.status(500).json("psicologo deletado com Sucesso");
           }
        },
  };
  
  module.exports = psicologosController;