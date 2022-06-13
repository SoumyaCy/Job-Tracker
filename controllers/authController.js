const { StatusCodes } = require("http-status-codes");
const { BadRequestError, UnAuthenticatedError } = require("../Errors");
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

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError("Please provide all the values");
  }
  const newUser = await User.findOne({ email }).select("+password");
  if (!newUser) {
    throw new UnAuthenticatedError("no user found with the given email");
  }
  const isPasswordCorrect = await newUser.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new UnAuthenticatedError(
      "the email or password entered is incorrect"
    );
  }
  // console.log(user);
  const token = newUser.createJWT();
  newUser.password = undefined;
  res.status(StatusCodes.OK).json({ newUser, token });
};
const updateUser = (req, res) => {
  res.send("user updated");
};
module.exports = { registerUser, loginUser, updateUser };
