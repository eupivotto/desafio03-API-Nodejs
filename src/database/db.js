const Sequelize  = require('sequelize'); // importanto o sequelize


const DB_NAME = "produto"
const DB_USER = "root"
const DB_PASS = "@Ana301200"
const DB_CONFIG = {
    dialect: 'mysql',
    host: 'localhost',
    port: 5919
};

let db  = {};

try {
    db = new Sequelize (DB_NAME,DB_USER,DB_PASS,DB_CONFIG);
} catch (error) {
    console.log(error);
    
}



module.exports = db;