const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
    Id: { type: Number, required: true },
    nombreAMMA: { type: String, required: true },
    descripcionAMMA: { type: String, required: true },
    precio: { type: Number, required: true }
});

module.exports = mongoose.model('ProductoAMMA', productSchema);