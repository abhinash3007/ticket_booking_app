const jwt=require("jsonwebtoken");
const User=require("../models/userSchema")
const userAuth = async (req, res,next) => {
  try {
    const cookies=req.cookies;
    const {token}=cookies;
    if(!token){
        throw new Error("User not valid");
    }
    const decode= await jwt.verify(token,"Abhinash3007");
    const {id}=decode;
    const user=await User.findOneById(id);
    req.user=user;
    next();

  } catch (err) {
    console.log(err);
  }
};
