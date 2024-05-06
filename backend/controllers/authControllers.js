// authController.js

// Import necessary modules
const User = require('../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

// Register a new user
exports.registerUser = async (req, res) => {
    try {
        // Create a new user
        const newUser = new User(req.body)
        // Hash the password
        newUser.password = await bcrypt.hash(newUser.password, 10)
        // Save the user to the database
        await newUser.save()
        res.status(201).json({ message: 'User registered successfully' })
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' })
    }
}

// Login user
exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body
        // Find the user by email
        const user = await User.findOne({ email })
        // If user not found or password doesn't match
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ message: 'Invalid email or password' })
        }
        // Generate JWT token
        const token = jwt.sign({ userId: user._id }, 'secret', { expiresIn: '1h' })
        res.status(200).json({ token })
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' })
    }
}
