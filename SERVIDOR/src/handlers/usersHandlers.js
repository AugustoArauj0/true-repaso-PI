const {
    createUserDB,
    // getUserDB,
    deleteUser,
    getAllUsers,
    getUserById,
  } = require("../controllers/usersControllers");

  /* Los siguientes handlers esperan que los users controllers ejecuten su logica tras "llamarlos", enviando determinadas
  respuestas segun lo que reciban de estos, tipicamente del tipo 200 OK o 400 Not Found */ 
  
  //query --> /?name=nico&apellido=burgueño
  const getUsersHandler = async (req, res) => {
    const { name } = req.query;
    try {
      if (name) {
        const response = await getAllUsers(name);
        return res.status(200).json(response);
      }
      const response = await getAllUsers();
      return res.status(200).json(response);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  //params --> /:id
  const getUsersIdHandler = async (req, res) => {
    const { id } = req.params;
    try {
      const response = await getUserById(id);
      res.status(200).json(response);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  // body --> (por aca vienen datos de formulario, por ejemplo)
  const postUsersHandler = async (req, res) => {
    const { name, email, phone } = req.body;
    try {
      const response = await createUserDB(name, email, phone);
      res.status(200).json(response);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  const deleteUsersHandler = async (req, res) => {
    const { id } = req.params;
    try {
      await deleteUser(id);
      res.status(200).send(`Usuario con id: ${id} a sido borrado.`);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  module.exports = {
    getUsersHandler,
    getUsersIdHandler,
    postUsersHandler,
    deleteUsersHandler,
  };