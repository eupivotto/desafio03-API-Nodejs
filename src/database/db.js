const Sequelize = require('sequelize');

// Informações de envio do banco de dados
const DB_NAME = "railway";
const DB_USER = "root";
const DB_PASS = "VaKK8eSp1IxfTW3MdjFC";

// Configurações do banco
const DB_CONFIG = {
  dialect: 'mysql',
  host: 'containers-us-west-137.railway.app',
  port: 7979
};

// Objeto para guardar a conexão do banco de dados
let db = {};

try {
  db = new Sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG);
} catch (error) {
  console.error("Erro ao tentar conexão com o banco de dados");
}

// Testar conexão
async function hasConnection() {
  try {
    await db.authenticate();
    console.log("Banco de dados conectado com sucesso");
  } catch (error) {
    console.error("Erro ao tentar se conectar com o banco de dados");
  }
}

Object.assign(db, {
  hasConnection,
});

module.exports = db;

