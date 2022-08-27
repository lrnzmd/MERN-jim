const user = require('../models/userModel')

// login useer
const loginUser = async (req, res) => {
  res.json({ mssg: "login user" });
};

// singup useer
const singupUser = async (req, res) => {
  res.json({ mssg: "singup user" });
};

module.exports = {
  loginUser,
  singupUser,
};
