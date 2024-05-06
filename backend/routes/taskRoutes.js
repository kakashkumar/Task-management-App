// taskRoutes.js

// Import necessary modules
const express = require('express')
const router = express.Router()
const taskController = require('../controllers/taskController')

// Task CRUD endpoints
router.post('/', taskController.createTask)
router.get('/', taskController.getAllTasks)
router.get('/:id', taskController.getTaskById)
router.put('/:id', taskController.updateTask)
router.delete('/:id', taskController.deleteTask)

module.exports = router
