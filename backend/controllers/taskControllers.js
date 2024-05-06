// taskController.js

// Import necessary modules
const Task = require('../models/task')

// Create a new task
exports.createTask = async (req, res) => {
    try {
        const newTask = new Task(req.body)
        await newTask.save()
        res.status(201).json(newTask)
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' })
    }
}

// Get all tasks
exports.getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find()
        res.status(200).json(tasks)
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' })
    }
}

// Get a single task by ID
exports.getTaskById = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id)
        if (!task) {
            return res.status(404).json({ message: 'Task not found' })
        }
        res.status(200).json(task)
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' })
    }
}

// Update a task by ID
exports.updateTask = async (req, res) => {
    try {
        const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if (!updatedTask) {
            return res.status(404).json({ message: 'Task not found' })
        }
        res.status(200).json(updatedTask)
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' })
    }
};

// Delete a task by ID
exports.deleteTask = async (req, res) => {
    try {
        const deletedTask = await Task.findByIdAndDelete(req.params.id)
        if (!deletedTask) {
            return res.status(404).json({ message: 'Task not found' })
        }
        res.status(200).json({ message: 'Task deleted successfully' })
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' })
    }

const NotificationService = require('./notificationService')

// Function to assign a task to a user
exports.assignTask = async (req, res) => {
    try {
        // Assign task logic
        // Send email notification
        await NotificationService.sendNotification('recipient@example.com', 'Task Assigned', 'You have been assigned a new task.');
        res.status(200).json({ message: 'Task assigned successfully' })
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' })
    }
}

// Function to update a task
exports.updateTask = async (req, res) => {
    try {
        // Update task logic
        // Send email notification
        await NotificationService.sendNotification('recipient@example.com', 'Task Updated', 'The task has been updated.');
        res.status(200).json({ message: 'Task updated successfully' })
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' })
    }
}

}
