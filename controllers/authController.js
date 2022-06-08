const { StatusCodes } = require("http-status-codes");
const { BadRequestError } = require("../Errors");
const User = require("../models/user-model");

const registerUser = async (req, res, next) => {
  console.log(req.body);
  const { name, password, email } = req.body;
  if (!name || !email || !password) {
    throw new BadRequestError("Please provide all values");
  }
  const newUser = await User.create(req.body);
  const token = newUser.createJWT();
  res.status(StatusCodes.CREATED).json({ newUser, token });
};

const loginUser = (req, res) => {
  res.send("user logged");
};
const updateUser = (req, res) => {
  res.send("user updated");
};
module.exports = { registerUser, loginUser, updateUser };
