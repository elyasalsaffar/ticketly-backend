const router = require('express').Router()
const middleware = require('../middleware')
const controller = require('../controllers/NoteController')

router.post(
    '/',
    middleware.stripToken,
    middleware.verifyToken,
    controller.CreateNote
)
router.get(
    '/ticket/:ticket_id',
    middleware.stripToken,
    middleware.verifyToken,
    controller.getNotesByTicket
)

module.exports = router