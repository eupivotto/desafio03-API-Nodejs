const express = require('express'); // importando o express

const psicologos = require('./src/models/psicologos'); // importanto psicologos

const rotas = require('./src/rotas'); // importanto as rotas

const db = require('./src/database/db'); // importando o banco de dados

const app = express();

const port = 5919;
const bodyParser = require('body-parser');
const router = express.Router();
app.use(bodyParser.json());




app.listen(port, () => {
    console.log(`Servidor online em ${port}`)
})

