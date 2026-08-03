import mongoose from "mongoose"

const User=new mongoose.Schema({
     name:{
        type:String
     },

     password:{
        type:String
     }
})

export const User= mongooge.model("User",User);