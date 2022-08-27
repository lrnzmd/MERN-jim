const express = require("express");
const { loginUser, singupUser } = require("../controllers/userController");

const router = express.Router();

//logins
router.post("/login", loginUser);

// singup
router.post("/singup", singupUser);



module.exports = router;