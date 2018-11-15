const express = require('express')
const router = express.Router()

const UserController = require('../controllers/UserController')

router.get('/', UserController.getAll)
router.post('/', UserController.createUser)
router.delete('/:id', UserController.deleteUser)

module.exports = router