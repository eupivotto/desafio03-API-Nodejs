const { Atendimentos, Psicologos, Pacientes } = require('../models')

const atendimentosController = {
    listarAtendimentos: async (req, res) => {
      try {
        const { id } = req.params;
        const { psicologo_id, paciente_id } = req.body;
        if (!id) {
          const listaDeAtendimentos = await Atendimentos.findAll({
            include: [
              {
                model: Pacientes,
                attributes: { exclude: ["status"] },
              },
              {
                model: Psicologos,
                attributes: { exclude: ["senha", "status"] },
              },
            ],
          });
  
          res.status(200).json(listaDeAtendimentos);
        } else {
          const listaDeAtendimentos = await Atendimentos.findAll({
            where: { id },
            include: [
              {
                model: Pacientes,
                attributes: { exclude: ["status"] },
              },
              {
                model: Psicologos,
                attributes: { exclude: ["senha", "status"] },
              },
            ],
          });
  
          res.json(listaDeAtendimentos);
        }
      } catch (error) {
        res.status(500).json(error);
      }
    },
  
    criarAtendimento: async (req, res) => {
      try {
        const { id, data_atendimento, observacao } = req.body;
  
        const novoAtendimento = await Atendimentos.create({
          id,
          data_atendimento,
          observacao,
        });
  
        res.status(201).json(novoAtendimento);
      } catch (error) {
        res.status(500).json(error);
      }
    },
  
    cancelarAtendimento: async (req, res) => {
      try {
        const { id } = req.params;
  
        await Atendimentos.destroy({
          where: {
            id,
          },
        });
  
        res.status(204).json();
      } catch (error) {
        res.status(500).json(error);
      }
    },
  };
  
  module.exports = atendimentosController;
  