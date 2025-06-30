const { Note } = require('../models')

const CreateNote = async (req, res) => {
    try {
        const { content, ticket } = req.body
        const user = res.locals.payload.id

        const newNote = await Note.create({
            content,
            user,
            ticket
        })

        res.status(201).send(newNote)
    } catch (error) {
        res.status(500).send({ message: 'Error creating note', error })
    }
}

const getNotesByTicket = async (req, res) => {
    try {
        const notes = await Note.find({ ticket: req.params.ticket_id }).populate('user')
        res.status(200).send(notes)
    } catch (error) {
        res.status(500).send({ message: 'Error fetching notes' })
    }
}

const getNotesByTicketId = async (req, res) => {
  try {
    const notes = await Note.find({ ticket: req.params.ticket_id }).populate('user')
    res.status(200).send(notes)
  } catch (error) {
    res.status(500).send({ message: 'Error fetching notes' })
  }
}

module.exports = {
    CreateNote,
    getNotesByTicket,
    getNotesByTicketId
}