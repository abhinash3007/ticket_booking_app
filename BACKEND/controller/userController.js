const mongoose=require("mongoose");
const User=require("../models/userSchema");
const validator=require("validator");
module.exports.signup= async (req,res)=>{
    const {firstName,lastName,age,gender,email,password,avatar}=req.body;
    try{
        if(!email || !password || !firstName || !lastName || !gender || !age ){
            res.json({message:"please enter full details"});
        }
        const userEmail=await User.findOne({email:email});
        if(userEmail){
            res.json({message:"email already exits"});
        }
        if(!validator.isEmail(email)){
            res.send("email not correct");
        }
        if(!validator.isStrongPassword(password)){
            res.send("Password not strong");
        }
        const user=new User({
            firstName,
            lastName,
            age,
            gender,
            email,
            password,
            avatar
        });
        await user.save();
        res.send(user);
    }catch(err){
        console.log(err);
    }
}