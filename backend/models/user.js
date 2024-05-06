// Importing mongoose module
const mongoose = require('mongoose')

// Define user schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['admin', 'user'], // Possible roles
        default: 'user' // Default role
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

// Create User model
const User = mongoose.model('User', userSchema)

// Export User model
module.exports = User
