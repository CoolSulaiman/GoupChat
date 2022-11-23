const User = require('../models/user');
const Chat = require('../models/Chat');
const Group = require('../models/group');
const { response } = require('express');
const sequelize=require('sequelize')

exports.fetchUsers = async(req,res,next)=>{
    try {
        let groupId = req.params.groupId ;
        console.log('...........................' , groupId)
        const group = await  Group.findByPk(groupId)
        
        if(!group){
            return res.status(404).json({message:"no group found"})
        }
        let users = await group.getUsers()
        let data = users.filter(user => user.id != req.user.id)

        // console.log(users[0].dataValues.name)
        // console.log("SUno000000000000000kkkkkkkk", data)
        return res.status(200).json(data)
    } catch (err) {
        console.log(err)
    }
}



