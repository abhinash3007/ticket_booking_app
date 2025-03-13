const express=require("express");
const userAuth = require("../middleware/userAuth");
const { createTicket } = require("../controller/ticketController");
const router=express.Router();

router.post("/create",userAuth,createTicket);

module.exports=router;