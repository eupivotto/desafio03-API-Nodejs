const db = require('../database');
const { DataTypes } = require('sequelize');


const Psicologos = db.define('Psicologos', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },

    email:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true, 
    },

    senha:{
        type: DataTypes.STRING,
        allowNull: false,
    },

    apresentacao:{
        type: DataTypes.STRING,
        allowNull:false,
    },


},
)



module.exports = Psicologos;