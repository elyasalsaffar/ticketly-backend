const { Schema } = require('mongoose')

const noteSchema = new Schema(
    {
        content: { type: String, required: true},
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        ticket: { 
            type: Schema.Types.ObjectId,
            ref: 'Ticket'
        }
    },
    { timestamps: true }
)

module.exports = noteSchema