const userModel=require('../models/user.model');


module.exports.createUser=async({
    Firstname,lastname,email,password
})=>{
    if(!Firstname||!email||!password){
        throw new Error('All fields are required');

    }
    const user=userModel.create({
        Fullname:{
            Firstname,
            Lastname
        },
        email,
        password
    })
}