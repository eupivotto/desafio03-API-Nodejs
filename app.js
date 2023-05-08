const express = require('express'); // importando o express
const psicologos = require('./src/models/psicologos'); // importanto psicologos
const app = express();
const port = 5919;
const db = require('./src/database/db'); // importando o banco de dados
const rotas = require('./src/rotas'); // importanto as rotas
const bodyParser = require('body-parser');
const router = express.Router();

app.use(bodyParser.json())

// Listar todos os psicologos

 app.get('', (req, res) => {
     
     try {
         res.json({message:' <h1>Buscando psicologos</h1>'})

     } catch (error) {
         res.status(500).json({message: 'Psicologo não encontrado', error});
     }

 });

// Buscar informacões por id
psicologosCadastrados = [
    { id: 1, nome: 'Lucas', email: 'lucas@gmail.com', senha: '123456' },
    { id: 2, nome: 'Eduardo', email: 'eduardo@gmail.com', senha: '654123' },
    { id: 3, nome: 'Renan', email: 'renan.meira@gmail.com', senha: '123654' }
  ];

  
  // rota GET /psicologos/:id
  app.get('/psicologos/:id', (req, res) => {
    const id = Number(req.params.id);
    const psicologo = psicologos.find(p => p.id === id);
    
    if (psicologo) {
      // retorna objeto com informações do psicólogo
      const { senha, ...psicologoSemSenha } = psicologo;
      res.status(200).json(psicologoSemSenha);
    } else {
      // retorna mensagem de erro com status 404 se o psicólogo não for encontrado
      res.status(404).send('Id não encontrado');
    }
  });





app.listen(port, () => {
    console.log(`Servidor online em ${port}`)
})

