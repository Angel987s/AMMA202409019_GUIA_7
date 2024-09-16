const mongoose = require('mongoose');

// URI de conexión a MongoDB Atlas
const uri = "mongodb+srv://angelmiguelmenaargumedo:lCZOGhzzQyrcbu0y@cluster0.mcryh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

// Conectar con Mongoose sin las opciones obsoletas
mongoose.connect(uri)
    .then(() => console.log('Conectado a MongoDB Atlas!'))
    .catch(err => console.error('Error al conectar a MongoDB:', err));