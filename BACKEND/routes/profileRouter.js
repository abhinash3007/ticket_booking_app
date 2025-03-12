const express=require("express");
const router=express.Router();

const { updateProfile, getProfile } = require("../controller/adminController");
const userAuth = require("../middleware/userAuth");

router.patch("/edit",userAuth, updateProfile);
router.get("/getProfile",userAuth, getProfile);

module.exports=router;