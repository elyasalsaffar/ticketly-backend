const express = require('express')
const router = require('express').Router()
const controller = require('../controllers/TicketController')
const middleware = require('../middleware')


router.post(
    '/',
    middleware.verifyToken, 
    controller.CreateTicket)


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