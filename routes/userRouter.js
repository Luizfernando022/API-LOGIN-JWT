const express = require('express') 
const router = express.Router()
const control = require('../controllers/userController')


router.post('/register',control.register)
router.post('/login',control.login)


module.exports = router