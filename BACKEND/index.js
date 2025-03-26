const express=require("express");
const mongoose=require("mongoose");
const app=express();
const cors = require("cors");
const userRouter=require("./routes/userRoute");
const profileRouter=require("./routes/profileRouter");
const ticketRouter=require("./routes/ticketRouter");
const cookieParser = require("cookie-parser");
app.use(cors({
    origin: "http://localhost:5173", // Allow requests from React frontend
    methods: "GET,POST,PUT,DELETE",
    credentials: true // Allow cookies if needed
}));
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
app.use("/api/ticket/",ticketRouter);
app.use("/",(req,res)=>{
    res.send("hello");
})
app.listen(3000,()=>{
    console.log("server is listening");
})