import mongoose, { mongo } from "mongoose";

const usersCollection = "users";




const userSchema = new mongoose.Schema({

    name:{
        type:String
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    rol:String,
    orders:{
        type:[
          {  type:mongoose.Schema.Types.ObjectId,
            ref:"orders"
        }
        ],
        default:[]
    }
});


export const usersModel = mongoose.model(usersCollection,userSchema);