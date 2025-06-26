const mongoose = require('mongoose')
const userSchema = require('./User')
const ticketSchema = require('./Ticket')
const notificationSchema = require('./Notification')
const noteSchema = require('./Note')

const User = mongoose.model('User', userSchema)
const Ticket = mongoose.model('Ticket', ticketSchema)
const Notification = mongoose.model('Notification', notificationSchema)
const Note = mongoose.model('Note', noteSchema)

module.exports = {
  User,
  Ticket,
  Notification,
  Note
}