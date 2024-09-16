const mongoose = require('mongoose');

// Reemplaza esto con la URI correcta de MongoDB Atlas
const uri = "mongodb+srv://angelmiguelmenaargumedo:lCZOGhzzQyrcbu0y@cluster0.mcryh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

// Conexión con Mongoose
mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Conectado a MongoDB Atlas!'))
    .catch(err => console.error('Error al conectar a MongoDB:', err));