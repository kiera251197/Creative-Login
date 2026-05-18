const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcryptjs");

// Register
router.post("/register", async (req, res) => {
  try {
    const { name, email, password, creativePassword } = req.body;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const hashedCreativePassword = await bcrypt.hash(creativePassword, salt);

    const registeredUser = new User({ 
      name,
      email,
      password: hashedPassword,
      creativePassword: hashedCreativePassword,
    });

    const saved = await registeredUser.save();
    return res.status(201).json({ message: "User registered successfully", data: saved });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const { email, password, creativePassword } = req.body;

    const loggedInUser = await User.findOne({ email });
    if (!loggedInUser) return res.status(404).json({ message: "User not found" });

    const isPasswordMatch = await bcrypt.compare(password, loggedInUser.password);
    const isCreativeMatch = await bcrypt.compare(creativePassword, loggedInUser.creativePassword);

    if (!isPasswordMatch || !isCreativeMatch) {
      return res.status(401).json({ message: "Email, Password or Colour Sequence is incorrect" });
    }

    return res.status(200).json({ message: "Login successful" });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

module.exports = router;