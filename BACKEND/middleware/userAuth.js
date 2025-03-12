const jwt=require("jsonwebtoken");
const User=require("../models/userSchema")
const userAuth = async (req, res,next) => {
  try {
    const {token}=req.cookies;
    console.log(token);
    if(!token){
        throw new Error("User not valid");
    }
    const decode= await jwt.verify(token,"Abhinash3007");
    const {_id}=decode;
    const user=await User.findById(_id);
    if(!user){
      res.status(401).send("no user");
    }
    req.user=user;
    next();

  } catch (err) {
    console.log(err);
  }
};
module.exports=userAuth;
