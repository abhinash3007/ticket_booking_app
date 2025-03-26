const express=require("express");
const userAuth = require("../middleware/userAuth");
const { createTicket,getTickets, ticketsHistory ,cancelTicket} = require("../controller/ticketController");
const router=express.Router();

router.post("/create",userAuth,createTicket);
router.get("/getTicket",userAuth,getTickets);
router.get("/history",userAuth,ticketsHistory);
router.patch("/cancel/:ticketID",userAuth,cancelTicket);
module.exports=router;