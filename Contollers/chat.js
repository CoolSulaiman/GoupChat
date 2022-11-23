const jwt = require('jsonwebtoken')
const User=require('../models/user')
const Chat=require('../models/Chat')

exports.postMessage = async(req,res,next)=>{

console.log(req.body)
const {message}=req.body

try {
    if(!message){
       return  res.status(400).json({message:"Nothing Entered"})
    }
        const data= await Chat.create(
            {message,
            userId:req.user.id
            })
            res.status(201).json({data , message:'sucessfully added chat message'})
    
} catch (err) {
    
}

}

exports.getMessage = async(req,res,next)=>{

    let msgId = req.query.msg ;
    try {
        const data =await Chat.findAll({where:{userId:req.user.id}})
        console.log(data.length)
        let index = data.findIndex(chat => chat.id == msgId)
        console.log("------",index);
        let messagestosend = data.slice(index+1)
        console.log("BRO-------------ll",messagestosend)
        const userName=req.user.name
        res.status(200).json({messagestosend, userName})
        
    } catch (err) {
        res.status(500).json({message:'unable to get chats'})
    }

}