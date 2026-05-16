const express = require("express");
const router = express.Router();
const User = require("../models/user");

//Add New User
router.post("/register", async (req, res) => {
  try {
    const newUser = new User(req.body);
    const saved = await newUser.save();
    res.send("User registered");
    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Login
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.send("User not found");
    if (user.password !== req.body.password)
      return res.send("Email, Password or Colour Sequence is incorrect");
    if (user.creativePassword !== req.body.creativePassword)
        return res.send("Email, Password or Colour Sequence is incorrect");
    res.send("Login successful");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;