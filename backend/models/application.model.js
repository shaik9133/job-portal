import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
    job:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'job',
        required:true
    },
    application:{
        type:mongoose.Schema.Types.ObjectedId,
        ref:'user',
        required:true
    },
    status:{
        type:String,
        enum:['pending', 'accepted', 'rejected'],
        default:'pending'
    }
},{timeseries:true});
export const Application = mongoose.model("Application", applicationSchema);