const express=require("express");
const mongoose=require("mongoose");
const app=express();
const userRouter=require("./routes/userRoute");
const profileRouter=require("./routes/profileRouter");
const cookieParser = require("cookie-parser");
app.use(express.json());
app.use(cookieParser());
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
app.use("/api/user/",userRouter);
app.use("/api/profile",profileRouter);
app.use("/",(req,res)=>{
    res.send("hello");
})
app.listen(3000,()=>{
    console.log("server is listening");
})