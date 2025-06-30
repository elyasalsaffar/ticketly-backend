const { Ticket } = require('../models')

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
    CreateTicket
}