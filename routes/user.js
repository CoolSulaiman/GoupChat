const express =require('express');
const router = express.Router();

const userController = require('../Contollers/user')

router.post('/signup', userController.postSignup )

router.post('/login',userController.postLogin)


module.exports = router;