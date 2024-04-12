const { request, response, json } = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Usermodel = require("../module/users");
const secret_key = "geet";

const signup = async (req, res) => {
    const { contactNo, email, name, username, password, confirmPassword, collegeName } = req.body;
    
    // Check if passwords match
    if (password !== confirmPassword) {
        return res.status(400).json({ message: "Passwords do not match" });
    }

    try {
        // Check existing user
        const existingUser = await Usermodel.findOne({ email: email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Hash password
        const hashedpassword = await bcrypt.hash(password, 10);

        // Create user
        const result = await Usermodel.create({
            collegeName: collegeName,
            contactNo: contactNo,
            email: email,
            name: name,
            username: username,
            password: hashedpassword,
            confirmPassword: hashedpassword,
        });

        // Generate token
        const token = jwt.sign({ email: email, id: result._id }, secret_key);

        // Send response
        res.status(201).json({ message: "User successfully created", token: token });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
};


const signin = async (req, res) => {
    const { email, password } = req.body;
    try {
        // Find the user by email
        const existingUser = await Usermodel.findOne({ email: email });
        if (!existingUser) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        // Validate password
        const isPasswordValid = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        // Generate JWT token
        const token = jwt.sign({ email: email, id: existingUser._id }, secret_key);

        res.status(200).json({ message: "Sign in successful", token: token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = { signup, signin };
