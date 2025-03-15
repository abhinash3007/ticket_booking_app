const express=require("express");
const userAuth = require("../middleware/userAuth");
const { createTicket,getTickets } = require("../controller/ticketController");
const router=express.Router();

router.post("/create",userAuth,createTicket);
router.get("/getTicket",userAuth,getTickets);

module.exports=router;