const { Schema } = require('mongoose')

const userSchema = new Schema(
  {
    first: { type: String, required: true },
    last: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    passwordDigest: { type: String, required: true },
    phone: { type: String, required: true },
    role: { type: String, default: 'user'},
    profilePicture: { type: String },
    tickets: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Ticket'
      }
    ]
  },
  { timestamps: true }
)

module.exports = userSchema