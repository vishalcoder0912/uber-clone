const userModel=require('../models/user.model');
const Userservice=require('../services/user.services');
const {validatoinResult}=require('express-validator');

module.exports.registerUser=async (req,res,next)=>{
const errors=validatoinResult(req);
if(!errors.isEmpty()){
return res.status(400).json({errors:errors.array()});

}

console.log(req.body);


const {firstname,lastname,email,password}=req.body;

const hashedPassword=await userModel.hashedPassword(password);

const user=await Userservice.createUser({
    firstnameirstname:firstname,
    lastname:lastname,
    email,
    password:hashedPassword
});

const token=user.generateAuthToken();
    res.status(201).json({
        token,
        user
    })
}