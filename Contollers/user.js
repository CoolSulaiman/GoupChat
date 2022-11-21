const bcrypt = require('bcrypt');

const User=require('../models/user')
exports.postSignup= async (req,res,next)=>{

    try{

const {name,email,phone,password}=req.body

if( !name || !email || !phone || !password){

    return res.status(400).json({message: "add all fields"})
}

const user=await User.findAll({where:{email}})
if(user.length>0){
    return res.status(409).json({message:'user already exist'})
}

const saltRounds=10;
bcrypt.hash(password, saltRounds, async(err,hash)=>{
  const data=  await User.create({ name , email ,password:hash , phone})
  return res.status(201).json({data,message:'successfully created new user'})

})

}

catch(err){
    res.status(500).json(err);}


}