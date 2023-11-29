


export class UsersController {
    static getUser = async (req,res) => {
        try {
            
            res.json({status:"succes", message:"getUser"});
        } catch (error) {
            console.log(error);
            res.json({status:error,message:"One error  in this request"})
        }
    };
    static createUser = async (req,res) => {
        try {
            
            res.json({status:"succes", message:"createUser"});
        } catch (error) {
            console.log(error);
            res.json({status:error,message:"One error  in this request"})
        }
    };

}