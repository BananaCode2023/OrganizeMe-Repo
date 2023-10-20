const express = require("express");
const UserModel = require("../Models/Users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {getProfile} = require('../Controllers/authController');

const router = express.Router();


router.post('/register', async (req,res) => {
  const { username, email, password } = req.body;
  const user = await UserModel.findOne({ email });
  if (user) {
    return res.json({ message: "user already existed" });
  }
  const hashpassword = await bcrypt.hash(password, 10);
  const newuser = new UserModel({ username, email, password: hashpassword });
  await newuser.save();
  return res.json({ message: "account is saved" });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email });
  if (!user) {
    return res.json({ message: "wrong email" });
  }
  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    return res.json({ message: "wrong password" });
  }
  const token = jwt.sign({ id: user._id }, "secret");
  res.cookie("token", token)
  return res.json({message: "successfully logged in", id: user._id})
});


router.get('/profile', getProfile)


module.exports = router;