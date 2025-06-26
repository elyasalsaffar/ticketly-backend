const { Schema } = require('mongoose')

const ticketSchema = new Schema(
    {
        title: { type: String, required: true},
        description: { type: String, required: true},
        status: { type: String, default: 'open'},
        priority: { type: String, default: 'medium'},
        user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
        department: { type: String, required: true, default: 'inquiry' },
        attachment: { type: String }
    },
    { timestamps: true }
)

module.exports = ticketSchema