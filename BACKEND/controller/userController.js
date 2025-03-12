const User=require("../models/userSchema");
const validator=require("validator");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
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
        const hashedPass=await bcrypt.hash(password,10);
        const user=new User({
            firstName,
            lastName,
            age,
            gender,
            email,
            password:hashedPass,
            avatar
        });
        await user.save();
        res.send(user);
    }catch(err){
        console.log(err);
    }
}

module.exports.login=async(req,res)=>{
    try{
        const{email,password}=req.body;
        if(!email || !password){
            res.status(400).send("feild is empty");
        }
        const user=await User.findOne({email});
        if(!user){
            res.status(400).send("invalid credentials");
        }
        const comparePass=await bcrypt.compare(password,user.password);
        const token=jwt.sign({_id:user._id},"Abhinash3007");
        res.cookie("token",token);
        if(!comparePass){
            res.status(400).send("invalid credentials");
        }else{
            res.status(200).send("login succesfull");
        }
    }catch(err){
        console.log(err);
    }
}
