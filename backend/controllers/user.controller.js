const userModel=require('../models/user.model');
const Userservice=require('../services/user.services');
const {validatoinResult}=require('express-validator');

module.exports.registerUser=async (req,res,next)=>{
const errors=validatoinResult(req);
if(!errors.isEmpty()){
return res.status(400).json({errors:errors.array()});

}

const {Firstname,lastname,email,password}=req.body;

const hashedPassword=await userModel.hashedPassword(password);

const user=await Userservice.createUser({
    Firstname,
    lastname,
    email,
    password:hashedPassword
});

const token=user.generateAuthToken();
    
}