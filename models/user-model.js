const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please provide your name"],
    trim: true,
    minlength: 2,
  },
  email: {
    type: String,
    required: [true, "please provide your email"],
    validate: {
      validator: validator.isEmail,
      message: "please provide a valid email",
    },
    unique: true,
  },
  password: {
    type: String,
    required: [true, "please enter a password"],
    minlength: 6,
    select: false,
  },
  lastname: {
    type: String,
    default: "LastName",
    trim: true,
  },
  location: {
    type: String,
    default: "current city",
    trim: true,
  },
});
UserSchema.pre("save", async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.createJWT = function () {
  return jwt.sign({ userId: this._id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};

module.exports = mongoose.model("Users", UserSchema);
