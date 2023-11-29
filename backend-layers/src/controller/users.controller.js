import { UsersService } from "../services/users.service.js";


export class UsersController {
    static getUser = async (req,res) => {
        try {
            const userId = req.params.uid;
    
            const result = await UsersService.getUser(userId)
            res.json({status:"succes", data:result});
        } catch (error) {
            console.log(error);
            res.json({status:error,message:"One error  in this request"})
        }
    };
    static createUser = async (req,res) => {
        try {
            const userInfo = req.body;
            const result = await UsersService.createUser(userInfo);
            res.json({status:"succes", data:result});
        } catch (error) {
            console.log(error);
            res.json({status:error,message:"One error  in this request"})
        }
    };

}