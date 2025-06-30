const router = require('express').Router()
const middleware = require('../middleware')
const TicketController = require('../controllers/TicketController')

// Get all tickets for the user
router.get(
  '/tickets',
  middleware.stripToken,
  middleware.verifyToken,
  TicketController.getUserTickets
)

// Get a specific ticket by ID for the user
router.get(
  '/tickets/:id',
  middleware.stripToken,
  middleware.verifyToken,
  TicketController.getTicketById
)

module.exports = router


