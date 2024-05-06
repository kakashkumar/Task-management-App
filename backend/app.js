// Import required modules
const express = require('express')
const app = express()

// Middleware for parsing JSON and urlencoded request bodies
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Middleware for CORS handling
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    next()
})

// Route Configuration
const authRoutes = require('./routes/authRoutes')
const taskRoutes = require('./routes/taskRoutes')
const commentRoutes = require('./routes/commentRoutes')

app.use('/auth', authRoutes)
app.use('/tasks', taskRoutes)
app.use('/comments', commentRoutes)


// Other middleware can be added as needed


// Middleware, routes, etc. would be configured here

// Import database connection
const db = require('./config/database')

// Start the server
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
