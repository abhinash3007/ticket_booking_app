const User = require("../models/userSchema");
const validator = require("validator");
const bcrypt = require("bcrypt");
const Ticket = require("../models/ticketSchema");

module.exports.updateProfile = async (req, res) => {
  try {
    const allowedFields = [
      "firstName",
      "lastName",
      "avatar",
      "age",
      "password",
    ];
    for (const field in req.body) {
      if (!allowedFields.includes(field)) {
        throw new Error("Field cannot be updated");
      }
    }
    const user = req.user;
    Object.keys(req.body).forEach((key) => {
      if (req.body[key]) {
        if (key === "password" &&!validator.isStrongPassword(req.body[key])) {
          throw new Error("Password is not strong");
        }
        if (key === "password") {
          user[key] = bcrypt.hashSync(req.body[key], 10);
        } else {
          user[key] = req.body[key];
        }
      }
    });
    await user.save();
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
};

module.exports.getProfile=async(req,res)=>{
    try{
        const user=req.user;
        res.status(200).send(user);
    }
    catch(err){
        console.log(err);
    }   
}
