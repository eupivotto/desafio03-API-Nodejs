const express = require('express');
const psicologosControler = require('../controller/psicologoControllers');// Importanto psicologos

const rotas = express.Router();


// Rotas 
rotas.post("/psicologos", psicologosControler.cadastrarPsicologo);//Cadastrar

rotas.get("/psicologos", psicologosControler.listarPsicologos); // Listar
rotas.get("/psicologo/:id", psicologosControler.showPsicologo); 
rotas.put("/psicologo/:id", psicologosControler.atualizarPsicologo); //Atualizar

rotas.delete("/psicologo/:id", psicologosControler.deletarPsicologo); //Deletar






