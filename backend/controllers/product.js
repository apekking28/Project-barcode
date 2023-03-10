const axios = require("axios");

const productControllers = {
  getProduct: async (req, res) => {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      res.send(response.data);
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = productControllers;
