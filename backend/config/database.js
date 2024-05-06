// Import Mongoose module
const mongoose = require('mongoose')

// MongoDB connection URI
const mongoURI = 'mongodb://localhost:27017/task_management_app'

// Connect to MongoDB
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})

// Get the default connection
const db = mongoose.connection

// Event handlers for MongoDB connection
db.on('connected', () => {
    console.log('Connected to MongoDB')
})

db.on('error', (error) => {
    console.error('MongoDB connection error:', error)
})

// Export MongoDB connection
module.exports = db
