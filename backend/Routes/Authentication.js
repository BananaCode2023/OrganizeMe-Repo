const express = require("express");
const UserModel = require("../Models/Users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// const {getProfile} = require('../Controllers/authController');

const router = express.Router();

//router for signing up
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

//router for logging in
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

//router for logging out
router.get('/logout', (req,res) => {
  res.clearCookie("token")
  res.json({message: "Logged out"})
})

//router for getting the username of the logged in user for the shown tasklist
router.get('/username/:id', async (req,res) => {
  const id = req.params.id
  try{
    const user = await UserModel.findById({_id: id})
    res.status(200).json(user)
  }
  catch(err){
    res.status(404).json(err)
  }
})


module.exports = router;