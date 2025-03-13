const mongoose=require("mongoose");
const User = require("./userSchema");
const ticketSchema=mongoose.Schema({
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:User
    },
    ticketOwner:{
        type:String,
        required:true
    },
    source:{
        type:String,
        required:true
    },
    destination:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    status:{
        type:String,
        required:true
    },
},{timestamp:true}
);
module.exports=mongoose.model("ticket",ticketSchema);