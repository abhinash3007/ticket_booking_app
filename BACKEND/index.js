const express=require("express");
const mongoose=require("mongoose");
const app=express();

const mongoDB=async()=>{
    await mongoose.connect("mongodb://localhost:27017/ticket_booking");
}
mongoDB()
.then(()=>{
    console.log("connected to DB");
})
.catch((err)=>{
    console.log(err);
})
app.get("/",(req,res)=>{
    res.send("hello");
})
app.listen(3000,()=>{
    console.log("server is listening");
})