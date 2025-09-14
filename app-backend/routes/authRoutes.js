const express = require('express')
const auth = require('../controllers/authController')

const router = express.Router()

router.post("/create",auth.add)


module.exports = router