import mongoose from "mongoose";

const {Schema} = mongoose


const userSchema = new Schema({
    username:{
        type:String,
        unique:true
    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String,

    }


},
{timeseries:true})


export const User = mongoose.model("User", userSchema)

