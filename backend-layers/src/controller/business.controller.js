



export class BusinessController{
    static getAllBusiness = async (req,res) => {
        try {
            
            res.json({status:"succes", message:"getAllBusiness"});
        } catch (error) {
            console.log(error);
            res.json({status:error,message:"One error  in this request"})
        }
    };


    static getOneBusiness = async (req,res) => {
        try {
            
            res.json({status:"succes", message:"getOneBusiness"});
        } catch (error) {
            console.log(error);
            res.json({status:error,message:"One error  in this request"})
        }
    };



    static createBusiness = async (req,res) => {
        try {
            
            res.json({status:"succes", message:"createBusiness"});
        } catch (error) {
            console.log(error);
            res.json({status:error,message:"One error  in this request"})
        }
    };


    static addProducts = async (req,res) => {
        try {
            
            res.json({status:"succes", message:"addProducts"});
        } catch (error) {
            console.log(error);
            res.json({status:error,message:"One error  in this request"})
        }
    };
};