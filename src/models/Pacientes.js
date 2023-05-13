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
        // status: {
        //     type: DataTypes.INTEGER,
        //     defaultValue: 1, // Valor padrão para indicar status ativo
        //   },
        
    },
        {
            tableName: "pacientes",
            timestamps: false 
        }
    );

    module.exports = Pacientes;