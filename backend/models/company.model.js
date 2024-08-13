import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
    },
    website:{
        type:String,
    },
    location:{
        type:String,
    },
    logo:{
        type:String // URL to company logo
    },
    userId:{
        type:String,
        ref:'User',
        required:true
    }
},{timestamps:true})
