const { Post } = require("../db");

// Este controlador recibe por parametro los datos del post que el usuario desea "Postear" y crea en la DB dicho post
const createPostDB = async (title, body, userId) => {
  const post = await Post.create({ body, title });
  await post.setUser(userId);
  return post;
};

// Este controlador trae los Posts almacenados en la base de datos
const getPostsDB = async () => {
  const posts = await Post.findAll();
  return posts;
};

module.exports = {
  createPostDB,
  getPostsDB,
};