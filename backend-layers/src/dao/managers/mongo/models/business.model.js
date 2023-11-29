import mongoose from "mongoose";

const businessCollection = "business";




const businessSchema = new mongoose.Schema({
    name:{
        type:String
    },
    orders:[]
});


export const businessModel = mongoose.model(businessCollection,businessSchema);