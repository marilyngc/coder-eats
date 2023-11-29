import mongoose, { mongo } from "mongoose";

const ordersCollection = "business";




const ordersSchema = new mongoose.Schema({
   numberOrder:{
    type:Number,
    require:true
   },
   business:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"business"
   },
   user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"users"
   },
   orders:[],
   priceTotal:{
    type:Number,
    require:true
   }
});


export const ordersModel = mongoose.model(ordersCollection,ordersSchema);