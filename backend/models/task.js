// Importing mongoose module
const mongoose = require('mongoose')

// Define task schema
const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    priority: {
        type: String,
        enum: ['high', 'medium', 'low'], // Possible priorities
        default: 'medium' // Default priority
    },
    status: {
        type: String,
        enum: ['todo', 'in progress', 'done'], // Possible statuses
        default: 'todo' // Default status
    },
    due_date: {
        type: Date,
        required: true
    },
    user_assignments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
})

// Create Task model
const Task = mongoose.model('Task', taskSchema)

// Export Task model
module.exports = Task
