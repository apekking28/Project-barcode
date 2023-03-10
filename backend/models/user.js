const { Schema, model } = require("mongoose");

const user = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter your name"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Please enter your email"],
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please enter your passsword"],
      min: 6,
    },
  },
  { timestamps: true }
);

const User = model("user", user);

module.exports = User;
