const { Router } = require("express");
const usersRouter = require("./usersRouter");
const postsRouter = require("./postsRouter");

const mainRouter = Router();

// Le decimos al mainRouter que utilice las rutas para users y posts
mainRouter.use("/users", usersRouter);
mainRouter.use("/posts", postsRouter);

module.exports = mainRouter;
