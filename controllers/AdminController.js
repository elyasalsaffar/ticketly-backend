const { Ticket } = require('../models')

const GetAllTickets = async (req, res) => {
    try {
        const tickets = await Ticket.find().populate('user')
        res.status(200).send(tickets)
    } catch (error) {
        res.status(500).send({ message: 'Error fetching tickets' })
    }
}

const UpdateTicketStatus = async (req, res) => {
    try {
        const { ticket_id } = req.params
        const { status } = req.body

        const updated = await Ticket.findByIdAndUpdate(
            ticket_id,
            { status },
            { new: true }
        )

        res.status(200).send(updated)
    } catch (error) {
        res.status(500).send({ message: 'Failed to update ticket status', error })
    }
}

module.exports = {
    GetAllTickets,
    UpdateTicketStatus
}