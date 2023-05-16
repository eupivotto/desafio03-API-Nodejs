const Atendimentos = require('../models/Atendimentos');
const Psicologos = require('../models/Psicologos');
const Pacientes = require('../models/Pacientes')

Atendimentos.belongsTo(Pacientes, {
   foreignKey: "paciente_id",
});

Pacientes.hasMany(Atendimentos, {
   foreignKey: "paciente_id",
});

Atendimentos.belongsTo(Psicologos, {
   foreignKey: "psicologo_id",
});

Psicologos.hasMany(Atendimentos, {
   foreignKey: "psicologo_id",
});

module.exports = {
    Atendimentos,
   Psicologos,
   Pacientes,
}