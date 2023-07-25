const { Sequelize } = require("sequelize");
const UserModel = require("./models/User");
const PostModel = require("./models/Post");

// Requerimos dotenv para que se puedan leer las variables de entorno en nuestro archivo .env 
require("dotenv").config();

// Obtenemos las variables del .env
const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_DIALECT } = 
  process.env;

const sequelize = new Sequelize(
  `${DB_DIALECT}://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
  {
    logging: false,
  }
);

UserModel(sequelize);
PostModel(sequelize);

// Desestructuramos las relaciones literales
const { User, Post } = sequelize.models;

//! Relaciones 

//un usuario tiene muchos posts
User.hasMany(Post, {
  
  /* la opción ON DELETE CASCADE para especificar si desea eliminar filas en una tabla secundaria 
  cuando se eliminan las filas correspondientes en la tabla principal. Esto lo hacemos para borrar los posts del 
  usuario eliminado */
  onDelete: "CASCADE", 
  onUpdate: "CASCADE",
});

// Un post va a pertenecer a un usuario
Post.belongsTo(User);

module.exports = {
    ...sequelize.models,
    conn: sequelize,
};
