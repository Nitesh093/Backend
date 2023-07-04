const mongoose=require('mongoose')
const userSchema=new mongoose.Schema({
    userId:{
        type:Number,
        required:true
    },
    usename:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,
        
    }
    ,
    password:{
        type:String,
        required:true
    },
    companyId:{
        type:String
    }


})
module.exports=mongoose.model('users',userSchema);