const express = require('express');
const psicologosController = require('../controller/psicologosController');// Importanto psicologos
const pacientesController = require("../controller/pacientesController"); //Importando Pacientes

const rotas = express.Router();


// Rotas Psicologos
rotas.post("/cadastrar", psicologosController.cadastrarPsicologo);
rotas.get("/psicologos", psicologosController.listarPsicologo); 
rotas.get("/psicologo/:id", psicologosController.showPsicologo);
rotas.put("/psicologo/:id", psicologosController.atualizarPsicologo); 
rotas.delete("/psicologo/:id", psicologosController.deletarPsicologo);

//Rotas Pacientes 
rotas.get("/pacientes", pacientesController.listarPacientes);
rotas.get("/pacientes/:id", pacientesController.listarPacientes);
rotas.post("/pacientes/criar", pacientesController.cadastrarPacientes);
rotas.delete("/pacientes/:id",pacientesController.deletarPacientes);
rotas.put("/pacientes/:id",pacientesController.atualizarPacientes);

module.exports = rotas;




