const express=require('express');
const router=express.Router();
const {body}=require("express-validator")
const userConroller=require('../controllers/user.controller');

router.post('/register',[
    body('email').isEmail().withMessage('invalid email address'),
    body('Fullname.Firstname').isLength({min:3}).withMessage('First name must be at least 3 character long '),
    body('password').isLength({min:6}).withMessage('password must be at least 6 character long ')
],userConroller.registerUser
);




module.exports=router;