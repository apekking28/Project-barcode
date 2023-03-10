const express = require("express");
const app = express();
const axios = require("axios");
const cookieParser = require("cookie-parser");
const database = require("./config/database");
const userRoutes = require("./routes/user");
const productRoutes = require("./routes/product");
require("dotenv").config();
const port = process.env.PORT;

// middlewares
app.use(express.json());
app.use(cookieParser());

app.use(userRoutes);
app.use(productRoutes);

app.listen(port, () => {
  console.log(`Server up running at ${port}`);
});
