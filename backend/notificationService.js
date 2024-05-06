// notificationService.js

const nodemailer = require('nodemailer')

// Create a transporter
const transporter = nodemailer.createTransport({
    service: 'SMTP',
    auth: {
        user: 'your-email@example.com', // Your email
        pass: 'your-password' // Your email password or app password
    }
})

// Function to send email notification
exports.sendNotification = async (to, subject, text) => {
    try {
        await transporter.sendMail({
            from: 'your-email@example.com',
            to,
            subject,
            text
        })
        console.log('Notification email sent successfully')
    } catch (error) {
        console.error('Error sending notification email:', error)
    }
}
