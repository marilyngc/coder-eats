import { OrdersServices } from "../services/orders.services.js";

export class OrdersController{
    static getOrder = async (req,res) => {
        try {
            
            res.json({status:"succes", message:"getOrder"});
        } catch (error) {
            console.log(error);
            res.json({status:error,message:"One error  in this request"})
        }
    };

    static createOrder = async (req,res) => {
        try {
            
            res.json({status:"succes", message:"createOrder"});
        } catch (error) {
            console.log(error);
            res.json({status:error,message:"One error  in this request"})
        }
    };

    static modifyStatusOrder = async (req,res) => {
        try {
            
            res.json({status:"succes", message:"modifyStatusOrder"});
        } catch (error) {
            console.log(error);
            res.json({status:error,message:"One error  in this request"})
        }
    };
}