const mongoose=require("mongoose")
const express=require("express")
const app=express();
const mongoDB=async()=>{
    
    setTimeout(function() {
        mongoose.connect('mongodb://127.0.0.1:27017/Rachna');
        console.log("connected with  MySQL")
      }, 2000);
      
      

}
module.exports= mongoDB();

 


