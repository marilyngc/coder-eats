import { BusinessServices } from "../services/business.service.js";



export class BusinessController{
    static getAllBusiness = async (req,res) => {
        try {
            const result = await BusinessServices.getAllBusiness();
            res.json({status:"succes", data:result});
        } catch (error) {
            console.log(error);
            res.json({status:error,message:"One error  in this request"})
        }
    };


    static getOneBusiness = async (req,res) => {
        try {
            const businessId = req.params.bid;
 
            const result = await BusinessServices.getOneBusiness(businessId);
            
            res.json({status:"succes", data:result});
        } catch (error) {
            console.log(error);
            res.json({status:error,message:"One error  in this request"})
        }
    };



    static createBusiness = async (req,res) => {
        try {
            const businessInfo = req.body;
            console.log(businessInfo)
           
      

            const result = await BusinessServices.createBusiness(businessInfo);
            console.log(result)
            res.json({status:"succes",data:result});
        } catch (error) {
            console.log(error);
            res.json({status:error,message:"One error  in this request"})
        }
    };


    static addProducts = async (req,res) => {
        try {
            const businessId = req.params.bid;
            const {orders} = req.body;
            const business = await BusinessServices.getOneBusiness(businessId);
            if (!business) {
              return  res.json({status:error,message:"this business not exists"});
            }

            business.orders = orders;
            const result = await BusinessServices.addProducts(businessId,business)
            res.json({status:"succes",data:result});
        } catch (error) {
            console.log(error);
            res.json({status:error,message:"One error  in this request"})
        }
    };
};