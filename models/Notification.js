const { Schema } = require('mongoose')

const notificationSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        ticket: {
            type: Schema.Types.ObjectId,
            ref: 'Ticket'
        },
        message: { type: String, required: true},
        isRead: { type: Boolean, default: false }
    },
    { timestamps: true }
)

module.exports = notificationSchema