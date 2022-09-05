const express = require("express");
const { loginUser, signupUser } = require("../controllers/userController");

const router = express.Router();

//logins
router.post("/login", loginUser);

// signup
router.post("/signup", signupUser);



module.exports = router;