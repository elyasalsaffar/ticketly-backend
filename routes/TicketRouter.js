const express = require('express')
const router = require('express').Router()
const { CreateTicket } = require('../controllers/TicketController')
const verifyToken = require('../middleware/verifyToken')


router.post('/', verifyToken, CreateTicket)

module.exports = router