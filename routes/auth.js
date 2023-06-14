const express = require('express')
const router = express.Router()

const AuthController = require('../controlers/AuthController')

router.post('/register', AuthController.register)

router.post('/login', AuthController.login)

router.post('/logout', AuthController.logout)

router.post('/referesh-token', AuthController.refereshToken)

module.exports = router