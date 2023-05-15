const db = require ('../database/db');
const { DataTypes } = require("sequelize");


const Atendimentos = db.define("Atendimentos", {
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },

    paciente_id:{
        type: DataTypes.INTEGER,
        references:{
            model:Pacientes,
            key:"id", 

        }

    },

    psicologo_id:{
        type: DataTypes.INTEGER,
        references:{
            model:psicologos,
            key:"id", 

        }

    },

    data_atendimento:{
        type: DataTypes.DATE,
        allowNull:false,
    },

    observacao:{
        type: DataTypes.STRING,
        allowNull: false,

    }

});

module.exports = Atendimentos;