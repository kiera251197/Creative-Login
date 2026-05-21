const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Register
router.post("/register", async (req, res) => {
  try {
    const { name, email, password, creativePassword } = req.body;

    // Checks if email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "An account with this email already exists" });

    //Bycrpt
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const registeredUser = new User({ 
      name,
      email,
      password: hashedPassword,
      creativePassword: creativePassword,
    });

    const saved = await registeredUser.save();

    //JWT Token
    const token = jwt.sign(
      { id: saved._id, email: saved.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    return res.status(201).json({ message: "User registered successfully", data: saved, token });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const { email, password, creativePassword } = req.body;

    // Checks if user exists
    const loggedInUser = await User.findOne({ email });
    if (!loggedInUser) return res.status(404).json({ message: "User not found" });

    //Checks password and colour sequence
    const isPasswordMatch = await bcrypt.compare(password, loggedInUser.password);
    const isCreativeMatch = loggedInUser.creativePassword === creativePassword;

    if (!isPasswordMatch || !isCreativeMatch) {
      return res.status(401).json({ message: "Email, Password or Colour Palette Sequence is incorrect" });
    }

    //JWT Token
    const token = jwt.sign(
      { id: loggedInUser._id, email: loggedInUser.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    return res.status(200).json({ message: "Login successful", token,
      user: { id: loggedInUser._id, name: loggedInUser.name, email: loggedInUser.email }
 });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

module.exports = router;