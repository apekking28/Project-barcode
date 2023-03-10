const { Router } = require("express");
const route = Router();
const userController = require("../controllers/user");
const auth = require("../middlewares/auth");

route.post("/api/auth/register", userController.register);
route.post("/api/auth/activation", userController.activate);
route.post("/api/auth/signing", userController.signing);
route.post("/api/auth/access", userController.access);
route.get("/api/auth/signout", userController.signout);

module.exports = route;
