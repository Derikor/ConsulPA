const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Horario_de_Especialidad = new Schema({
    nombre: String,
    appaterno: String,
    apmaterno: String,
    especialidad: String,
    horadeatencion: String
  });

  module.exports = mongoose.model('horario_de_especialidad',Horario_de_Especialidad);