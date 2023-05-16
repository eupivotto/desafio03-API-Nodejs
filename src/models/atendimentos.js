const db = require ('../database/db');
const { DataTypes } = require("sequelize");
const Pacientes = require('./Pacientes')
const psicologos = require('./Psicologos')


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

    },
  

},
{
    tableName: "atendimentos",
    timestamps: false 
}
);

module.exports = Atendimentos;