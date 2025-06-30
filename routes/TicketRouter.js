const express = require('express')
const router = require('express').Router()
const controller = require('../controllers/TicketController')
const middleware = require('../middleware')


router.post(
    '/',
    middleware.stripToken,
    middleware.verifyToken, 
    controller.CreateTicket)

module.exports = router