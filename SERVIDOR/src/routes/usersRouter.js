const { Router } = require("express");
const {
  getUsersHandler,
  getUsersIdHandler,
  postUsersHandler,
  deleteUsersHandler,
  updateUserDBHandler,
} = require("../handlers/usersHandlers");

const usersRouter = Router();

usersRouter
  .get("/", getUsersHandler)
  .get("/:id", getUsersIdHandler)
  .post("/", postUsersHandler)
  .delete("/:id", deleteUsersHandler)
  .patch("/:id", updateUserDBHandler);

module.exports = usersRouter;