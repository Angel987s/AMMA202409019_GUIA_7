const mongoose = require('mongoose');

const productoAMMASchema = new mongoose.Schema({
    nombreAMMA: { type: String, required: true },
    descripcionAMMA: { type: String, required: true },
    precio: { type: Number, required: true },
    // Otros campos según sea necesario
});

const ProductoAMMA = mongoose.model('ProductoAMMA', productoAMMASchema);

module.exports = ProductoAMMA;