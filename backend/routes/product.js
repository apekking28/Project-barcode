const { Router } = require("express");
const route = Router();
const productControllers = require("../controllers/product");
const auth = require("../middlewares/auth");

route.get("/product", auth, productControllers.getProduct);

module.exports = route;
