const { Router } = require("express");
const { getPostHandler, postHandler } = require("../handlers/postsHandlers");

const postsRouter = Router();

postsRouter.get("/", getPostHandler);
postsRouter.post("/", postHandler);

module.exports = postsRouter;