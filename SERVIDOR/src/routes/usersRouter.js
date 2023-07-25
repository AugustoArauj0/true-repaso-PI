const { Router } = require("express");
const {
  getUsersHandler,
  getUsersIdHandler,
  postUsersHandler,
  deleteUsersHandler,
} = require("../handlers/usersHandlers");

const usersRouter = Router();

usersRouter
  .get("/", getUsersHandler)
  .get("/:id", getUsersIdHandler)
  .post("/", postUsersHandler)
  .delete("/:id", deleteUsersHandler); 

module.exports = usersRouter;