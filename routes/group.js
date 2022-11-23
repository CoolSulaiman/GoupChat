const express =require('express');
const router = express.Router();

const middleware = require('../middleware/auth')
const groupController = require('../Contollers/group')
const usergroupController = require('../Contollers/userGroup')

router.get('/getgroups', middleware.authentication , groupController.getGroups  )

router.post('/create-group' , middleware.authentication , groupController.createGroup)

router.get('/fetch-users/:groupId' , middleware.authentication , usergroupController.fetchUsers )

module.exports = router;