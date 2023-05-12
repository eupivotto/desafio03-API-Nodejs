const express = require('express');
const psicologosController = require('../controller/psicologosController');// Importanto psicologos

const rotas = express.Router();


// Rotas 
rotas.post("/cadastrar", psicologosController.cadastrarPsicologo);
rotas.get("/psicologos", psicologosController.listarPsicologo); 
rotas.get("/psicologo/:id", psicologosController.showPsicologo);
rotas.put("/psicologo/:id", psicologosController.atualizarPsicologo); 
rotas.delete("/psicologo/:id", psicologosController.deletarPsicologo);

module.exports = rotas;




