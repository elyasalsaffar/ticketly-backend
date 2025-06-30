const { Ticket } = require('../models')

// Get all tickets for the User 
const getUserTickets = async (req, res) => {
    try {
        if (!req.user || !req.user.id) {
            return res.status(401).json({ error: "Unauthorized: User not authenticated" });
        }

        const tickets = await Ticket.find({ user: req.user.id });
        res.json(tickets);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to fetch tickets" });
    }
};

// Get one ticket by ID 
const getTicketById = async (req, res) => {
    try {
        if (!req.user || !req.user.id) {
            return res.status(401).json({ error: "Unauthorized: User not authenticated" });
        }

        const ticketId = req.params.id;
        const ticket = await Ticket.findOne({ _id: ticketId, user: req.user.id });

        if (!ticket) {
            return res.status(404).json({ error: "No ticket found with this ID " });
        }

        res.json(ticket);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to fetch ticket." });
    }
};


const CreateTicket = async (req, res) => {
    console.log('Reached ticket route')
    const { title, description, department, priority } = req.body

    if ( !title ||  !description || !department || !priority) {
        return res.status(500).send({messgae: "all fields are required"})
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