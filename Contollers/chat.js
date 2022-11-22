const jwt = require('jsonwebtoken')

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