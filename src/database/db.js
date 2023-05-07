const Sequelize  = require('sequelize'); // importanto o sequelize


const DB_NAME = "railway"
const DB_USER = "root"
const DB_PASS = "4M8lU22Oht2MIVLV1Fl5"
const DB_CONFIG = {
    dialect: 'mysql',
    host: 'containers-us-west-210.railway.app',
    port: 6852
};

let db  = {};

try {
    db = new Sequelize (DB_NAME,DB_USER,DB_PASS,DB_CONFIG);
} catch (error) {
    console.log(error);
    
}



module.exports = db;