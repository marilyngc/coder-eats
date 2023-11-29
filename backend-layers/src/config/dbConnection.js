import { config } from "./config.js";
import mongoose, { mongo } from "mongoose";

export const dbConnection = async () => {
    try {
        await mongoose.connect(config.mongo.url);
        console.log("Data base connect")
    } catch (error) {
        console.log(`the server is not working ${error.message}`)
    }
}