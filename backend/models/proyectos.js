 const mongoose = require('mongoose');
 const { Schema } = mongoose;

 const proyectosSchema = new Schema({
     nombre: { type: String, required: true },
     descripcion: { type: String },
     usuario: { type: String, required: true },
     fecha: { type: Date, default:Date.now }
 });

 module.exports = mongoose.model('Proyectos', proyectosSchema); 