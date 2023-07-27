const express = require('express')
const verifyJwt = require('../middlewares/token')
const { getFeedPosts, getUserPosts, likePost } = require('../controllers/posts')
const router = express.Router()

// get post 
router.get('/', verifyJwt, getFeedPosts)
router.get('/:userId/posts', verifyJwt, getUserPosts)

// update impression
router.patch('/:id/like', verifyJwt, likePost)

module.exports = router

