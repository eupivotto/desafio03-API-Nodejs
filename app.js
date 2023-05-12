const express = require('express'); // importando o express
const db = require('./src/database/db'); // importando o banco de dados
const rotas = require('./src/rotas/index'); // importanto as rotas
const Psicologos = require('./src/models/Psicologos'); // importanto psicologos

const port = 3333;
const app = express();
const bodyParser = require('body-parser');
const router = express.Router();

db.hasConnection();

app.use(bodyParser.json());
app.use(rotas);




app.listen(port, () => {
    console.log(`Servidor online em ${port}`)
})




