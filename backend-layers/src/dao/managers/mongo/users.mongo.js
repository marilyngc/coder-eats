import { usersModel } from "./models/users.model.js";

export class UsersMongo{
    constructor(){
        this.model = usersModel
    }

    async getUser (id) {
        try {
            const result = await this.model.findById(id);
            return result;
        } catch (error) {
            throw error;
        }
      };


      async createUser(info){
         try {
            const result = await this.model.create(info);
            return result;
         } catch (error) {
            throw error;
         }
      };
}