const express =require('express');
const router = express.Router();

const userController = require('../Contollers/user')

router.post('/signup', userController.postSignup )


module.exports = router;