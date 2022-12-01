const userRouter = require("express").Router()
const { login, getUsers } = require("../controllers/users-ctrl");

userRouter.get("/" , getUsers)


module.exports = userRouter;