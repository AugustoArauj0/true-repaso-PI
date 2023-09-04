const { Op } = require("sequelize");
const axios = require("axios");
const { User, Post } = require("../db");

// Este controlador crea un usuario en la base de datos
const createUserDB = async (name, email, phone) => {
  const newUser = await User.create({ name, email, phone });
  return newUser;
};

// Este controlador trae los datos de usuario que se encuentran en la base de datos (creados desde la pagina)
const getUserDB = async () => {
  const allUsers = await User.findAll({
    // include lo pusimos para traernos el modelo de Post, por si se necesitase traer info de un modelo adicional (opcional)
    include: {
      model: Post,
      attributes: ["title", "body"],
    },
  });
  return allUsers;
};

// Este controlador trae usuarios de la API (los primeros 10)
const getUserApi = async () => {
  const peticion = (await axios("https://jsonplaceholder.typicode.com/users"))
    .data;
  const apiInfoMap = peticion.map((user) => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone,
    };
  });
  return apiInfoMap;
};

/* Este controlador trae los usuarios creados en la base de datos, y los "10 primeros" usuarios de la API, y adicionalmente busca entre estos 
aquellos cuyo nombre coincida parcial o completamente con lo ingresado en la searchBar */
const getAllUsers = async (name) => {
  const usersDB = await getUserDB(); //todos los usuarios de la DB
  const usersApi = await getUserApi(); //todos los usuarios de la API
  const allUsers = [...usersDB, ...usersApi]; //todos los USUARIOS
  if (name) {
    let filterUsers = allUsers.filter((user) =>
      user.name.toLowerCase().includes(name.toLowerCase())
    );
    if (filterUsers.length) {
      return filterUsers;
    }
    throw new Error("No se encontro un usuario con ese nombre");
  } else {
    return allUsers;
  }
};

// Este controlador trae el usuario cuyo ID coincide con el que recibe por parametro, buscandolo en la DB y en la API
const getUserById = async (id) => {
  if (isNaN(id)) {
    const user = await User.findByPk(id);
    return user;
  }
  const user = (
    await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
  ).data;
  return user;
};

// Este controlador BORRARA al usuario cuyo ID coincida con el que recibe por parametro
const deleteUser = async (id) => {
  await User.destroy({ where: { id } });
};

/* Este controlador ACTUALIZARA al usuario correspondiende al ID pasado por parametro, empleando los datos de este 
tambien pasados por parametro */
const updateUserDB = async (id, name, email, phone) => {
  const userId = id;
  const updatedUser = await User.findByPk(userId);
  updatedUser.set({
    name: name,
    email: email,
    phone: phone,
  })
  await updatedUser.save();
  return updatedUser;
};

// V1;
// const getUserDB = async (name) => {
//   if (name) {
//     const userByName = await User.findOne({ where: { name } });
//     return userByName;
//   }
//   const allUsers = await User.findAll();
//   return allUsers;
// };

//V2
// const getUserDB = async (name) => {
//   if (name) {
//     const userByName = await User.findAll({
//       limit: 2,
//       where: {
//         name: { [Op.iLike]: "%" + name + "%" },
//       },
//     });
//     return userByName;
//   }
//   const allUsers = await User.findAll();
//   return allUsers;
// };

//V3
// const getUserDB = async () => {
//   const userByName = await User.findAll({
//     order: [["phone", "ASC"]],
//   });
//   return userByName;
// };

module.exports = {
  createUserDB,
  // getUserDB,
  deleteUser,
  getAllUsers,
  getUserById,
  updateUserDB,
};
