const express = require('express');
const psicologosControler = require('../controller/controllers');// Importanto psicologos

const router = express.Router();


// Rotas 
routes.post("/psicologos", psicologosControler.cadastrarPsicologo);//Cadastrar

routes.get("/psicologos", psicologosControler.listarPsicologos); // Listar
routes.get("/psicologo/:id", psicologosControler.showPsicologo); // Buscar
routes.put("/psicologo/:id", psicologosControler.atualizarPsicologo); //Atualizar

routes.delete("/psicologo/:id", psicologosControler.deletarPsicologo); //Deletar







