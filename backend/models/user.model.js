const mongoose=require('mongoose');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken')

const userSchema=new mongoose.Schema({
    Fullname:{
        Firstname:{
            type:String,
            required:true,
            minlength:[3,'firstname must be at least 3 character '],
        },
        Lastname:{
            type:String,
            required:true,
            minlength:[3,'last name  must be at least 3 character '],
        }
        
    },
    email:{
        type:String,
        required:true,
        unique:true,
        minglength:[5,'email must be at least 5 character '],

    },
    password:{
        type:String,
        required:true, 
        select:false,   
    },

    socketId:{
type:String,
    },


})

userSchema.methods.generateAuthToken=function(){
    const token=jwt.sign({_id:this._id,},process.env.JWT_SECRET_KEY);
    return token;
}

userSchema.methods.comparePassword=async function(password_){
    return await bcrypt.compare(password_,this.password);
}

userSchema.static.hashPassword=async function(password){
    return await bcrypt.hash(password,10);
}

const userModel=mongoose.model('user',userSchema);

module.exports=userModel;