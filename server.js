// server.js o app.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const productoAMMARoutes = require('./src/routes/productoAMMARoutes');
const mongoose = require('./src/config/database');

require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para analizar el cuerpo de las solicitudes en formato JSON
app.use(bodyParser.json());

// Middleware para habilitar CORS
app.use(cors());

// Rutas de la API
app.use('/productosAMMA', productoAMMARoutes);

// Middleware para manejar errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Algo salió mal.');
});


app.listen(3000, '0.0.0.0', () => {
    console.log('Server is running on port 3000');
});