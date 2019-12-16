const mongoose = require("mongoose");

// Definición del schema
const tareasSchema = new mongoose.Schema({
    nombre: { type: String, required: true, },
    descripcion: { type: String, required: true, },
    proyecto: { type: String, required: true },
  });

  module.exports = mongoose.model('Tareas', tareasSchema);