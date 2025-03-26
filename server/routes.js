const express = require('express')

const controller = require('./controller')

const router = express.Router()

router.post('/generate-qr',controller.generatoQR)

module.exports = router