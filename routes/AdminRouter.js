const router = require('express').Router()
const middleware = require('../middleware')
const controller = require('../controllers/AdminController')

router.get(
    '/',
    middleware.stripToken,
    middleware.verifyToken,
    controller.GetAllTickets
)
router.put(
    '/:ticket_id',
    middleware.stripToken,
    middleware.verifyToken,
    controller.UpdateTicketStatus
)

module.exports = router