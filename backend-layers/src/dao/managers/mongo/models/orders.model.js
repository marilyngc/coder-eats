import mongoose, { mongo } from "mongoose";

const ordersCollection = "business";




const ordersSchema = new mongoose.Schema({
  
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
   },
   status:{
      type:String,
      enum:["complet", "canceled","in process"],
      default:"in process"
   }
});


export const ordersModel = mongoose.model(ordersCollection,ordersSchema);