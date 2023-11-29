import { BusinessMongo } from "./managers/mongo/business.mongo.js";
import { UsersMongo } from "./managers/mongo/users.mongo.js";



export const businessDao = new BusinessMongo();
export const usersDao= new UsersMongo();