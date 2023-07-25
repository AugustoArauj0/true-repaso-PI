const { createPostDB, getPostsDB } = require("../controllers/postsControllers");

  /* Los siguientes handlers esperan que los posts controllers ejecuten su logica tras "llamarlos", enviando determinadas 
  respuestas segun lo que reciban de estos, tipicamente del tipo 200 OK o 400 Not Found */ 

const getPostHandler = async (req, res) => {
  try {
    const response = await getPostsDB();
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const postHandler = async (req, res) => {
  const { title, body, userId } = req.body;
  try {
    const response = await createPostDB(title, body, userId);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getPostHandler,
  postHandler,
};