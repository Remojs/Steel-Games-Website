require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const { DB_USER, DB_PASSWORD, DB_PORT} = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_PORT}/videogames`, {logging: false, native: false}); //se conecta a la db videogames
const basename = path.basename(__filename); //variable q almacena el nombre del archivo actual
const modelDefiners = []; //array vacio que va a guardar los modelos de la db

fs.readdirSync(path.join(__dirname, '/models')) //lee de manera sincronica el dir /models, filtrando solo los modelos al array de model definer
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => { 
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

modelDefiners.forEach(model => model(sequelize)); //ejecuta cada modelo existente en model definers pasandole sequelize para que se defina el modelo.
let entries = Object.entries(sequelize.models); //devuelve una variable con una matriz de pares clave-valor que representa cada model definido en sequelize
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]); //transforma las claves valor en un string con la primer letra en mayus y crea una nueva matriz de pares clave-valor
sequelize.models = Object.fromEntries(capsEntries); //crea un objeto con las claves en mayusc y los values de los modelos definidos en sequelize

//este codigo crea instancias de modelos de base de datos y las define en sequelize para usarlos en node.

// Traemos los models
const { Videogames, Genres } = sequelize.models;

//relaciones de models
Videogames.belongsToMany(Genres, { through: "videogames_genres" });
Genres.belongsToMany(Videogames, { through: "videogames_genres" });

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};
