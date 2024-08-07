

import mongoose from "mongoose";

const userSchema =new mongoose.Schema({

    fullName:{
        type:String,
        required:true,
    }, 
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        },
     address:{
        type:String,
      //   required:true
     },
     role:{
        type:String,
        default:"user",
        enum:["user",'admin']
     },
     favourites:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Book'
     },
    ],
     cart:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Book'
     },],
     orders:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Order'
     }],
    },
     {timestamps:true}

)
const User = mongoose.model("User",userSchema);
export default User;