const express = require("express");
const {
  registerUser,
  loginUser,
  updateUser,
} = require("../controllers/authController");
const { authenticateUser } = require("../middleware/auth");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.route("/update").patch(authenticateUser, updateUser);

module.exports = router;
