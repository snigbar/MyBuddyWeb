const express = require('express')
const router = express.Router()
const verifyJwt = require('../middlewares/token.js')
const {getUser, getUserFriends, addRemoveFriends} = require('../controllers/user.js')

router.get('/:id', verifyJwt, getUser)
router.get('/:id/friends', verifyJwt, getUserFriends)
router.patch('/:id/:friendId', verifyJwt, addRemoveFriends)

module.exports = router 