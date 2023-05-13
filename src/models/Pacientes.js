const db = require('../database/db');
const { DataTypes } = require("sequelize");

const Pacientes = db.define(
    "Pacientes",
    {
        id: {type: DataTypes.INTEGER,
            primaryKey: true,
            autoincrement: true,
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        data_nascimento: {
            type: DataTypes.DATE, // Alteração do tipo de dado para DATE
            allowNull: false
        },
        
    },
        {
            tableName: "pacientes",
            timestamps: false 
        }
    );

    module.exports = Pacientes;