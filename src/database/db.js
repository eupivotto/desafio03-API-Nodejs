const Sequelize  = require('sequelize'); // importanto o sequelize

//Informações de envio do banco de dados
 const DB_NAME = "lavie"
 const DB_USER = "root"
 const DB_PASS = "NAF4n7Wo024NwNiwtH1X"

 // Configurações do banco
 const DB_CONFIG = {
     dialect: 'mysql',
     host: 'containers-us-west-24.railway.app',
     port: 5919
 };

 // Objeto para guardar a conexão do banco de dados
 let db  = {};

 try {
     db = new Sequelize (DB_NAME, DB_USER, DB_PASS, DB_CONFIG);

 } catch (error) {
     console.error("Erro ao tentar conexão com banco de dados");
    
 }

 // Testar conexão
 try {
    db = new Sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG);
  } catch (error) {
    console.log(error);
  }
  
  async function hasConnection() {
    try {
      await db.authenticate();
      console.log("Banco de dados conectado com sucesso");
    } catch (error) {
      console.error("erro ao tentar se conectar com o banco de dados");
    }
  }
  
  Object.assign(db, {
    hasConnection,
  });
  module.exports = db;
 


module.exports = db;