const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "../config/.env" });
const User = require("../models/User.js");

const router = express.Router();

router.post('/user', async (req, res) => {
    try {
        const { username,mobile ,password} = req.body;

        const found = await User.findOne({ mobile });
        if (found) {
            console.log("User already exists");
            return res.status(401).json({ message: "User already exists" });
        }

        const newUser = new User({ username,mobile ,password});
        await newUser.save();

        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
