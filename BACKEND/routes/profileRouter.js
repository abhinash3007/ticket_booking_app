const express=require("express");
const router=express.Router();

const { updateProfile, getProfile, getTickets } = require("../controller/adminController");
const userAuth = require("../middleware/userAuth");

router.patch("/edit",userAuth, updateProfile);
router.get("/getProfile",userAuth, getProfile);
router.get("/ticket",userAuth,getTickets);
module.exports=router;