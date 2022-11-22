const express =require('express');
const router = express.Router();

const chatController = require('../Contollers/chat')
const middleware = require('../middleware/auth')

const userController = require('../Contollers/user')

router.post('/signup', userController.postSignup )

router.post('/login',userController.postLogin)

router.post('/message', middleware.authentication , chatController.postMessage )

module.exports = router;