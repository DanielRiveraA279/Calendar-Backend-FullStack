const express = require('express');
require('dotenv').config(); //necesitamos esto para usar variables de entornos
const cors = require('cors');
const {dbConnection} = require('./database/config');

// Crear el servidor de express
const app = express();

//Base de datos
dbConnection();

// Habilitamos CORS 
app.use(cors());

//Directorio Publico
app.use(express.static('public')) //indicamos la carpeta con su index

//Lectura y parseo del body antes de ejecutar el enpoind
app.use(express.json());

//Rutas
app.use('/api/auth', require('./routes/auth')) //todo lo que este archivo valla a exporta lo habilita en la ruta definida en el primer argumento

//TODO: CRUD: Eventos

//Escuchar peticiones
app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en puerto ' + process.env.PORT)
});