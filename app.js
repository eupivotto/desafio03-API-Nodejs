const express = require('express'); // importando o express
const app = express();
const port = 6852;
const db = require('./src/database/db'); // importando o banco de dados
// const rotas = require('./src/rotas'); // importanto as rotas
// const psicologos = require('./src/models/psicologos'); // importanto psicologos





app.listen(port, ()=> {
    console.log(`Servidor online em ${port}`)
})