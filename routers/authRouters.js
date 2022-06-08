const express = require("express");
const {
  registerUser,
  loginUser,
  updateUser,
} = require("../controllers/authController");
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.patch("/update", updateUser);

module.exports = router;
