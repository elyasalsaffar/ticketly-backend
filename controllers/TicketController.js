const { Ticket } = require('../models')

// Get all tickets for the User 
const getUserTickets = async (req, res) => {
  try {
    const userId = res.locals.payload.id
    const tickets = await Ticket.find({ user: userId })
    res.json(tickets)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: "Failed to fetch tickets" })
  }
}

// Get one ticket by ID 
const getTicketById = async (req, res) => {
  try {
    const userId = res.locals.payload.id
    const ticketId = req.params.id

    const ticket = await Ticket.findOne({ _id: ticketId, user: userId })

    if (!ticket) {
      return res.status(404).json({ error: "No ticket found with this ID " })
    }

    res.json(ticket)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: "Failed to fetch ticket." })
  }
}



const CreateTicket = async (req, res) => {
    console.log('Reached ticket route')
    const { title, description, department, priority } = req.body

    if ( !title ||  !description || !department || !priority) {
        return res.status(500).send({ message: "all fields are required"})
    }

    try {
        const newTicket = new Ticket({
            title,
            description,
            department,
            priority,
            user: res.locals.payload.id
        })

        await newTicket.save()
        res.status(201).send(newTicket)
    } catch (error) {
        console.error("Error creating ticket :(")
        res.status(500).send({message: "server ERROR! "})        
    }
}

module.exports = {
    CreateTicket,
    getUserTickets,
    getTicketById
}