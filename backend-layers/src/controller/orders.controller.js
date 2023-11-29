import { OrdersServices } from "../services/orders.service.js";
import { UsersService } from "../services/users.service.js";
import {BusinessServices} from "../services/business.service.js"

export class OrdersController{
    static getOrder = async (req,res) => {
        try {
            const result = await OrdersServices.getOrder();
            res.json({status:"succes", data:result});
        } catch (error) {
            console.log(error);
            res.json({status:error,message:"One error  in this request"})
        }
    };

    static createOrder = async (req,res) => {
        try {
            const {userId, businessId, orders} = req.body;
            //buscamos usuario
            const user = await UsersService.getUser(userId);
            // buscamos negocio
            const business = await BusinessServices.getOneBusiness(businessId)
            ;
            // obtener los productos del negocio
            const productsOrder = business.orders.filter(p => orders.incluides(p.id));
            // calculamos el precio total
            const total = productsOrder.reduce((acc,i) => acc+=i.price,0);

            // neuva orden
            const newOrden = {
                business: businessId,
                user:userId,
                orders: productsOrder,
                priceTotal: total, 
                 
            }

            const result = await OrdersServices.createOrder(newOrden)

          
            res.json({status:"succes", data:result});
        } catch (error) {
            console.log(error);
            res.json({status:error,message:"One error  in this request"})
        }
    };

    static modifyStatusOrder = async (req,res) => {
        try {
            const orderId = req.params.oid;
            const {status} = req.body;
            const order =  await OrdersServices.getOrder(orderId);
            
            if (!order) {
             return   res.json({status:error,message:"this order not exists"});
            }

            order.status = status
            const result = await OrdersServices.modifyStatusOrder(orderId,order)
            res.json({status:"succes", data:result});
        } catch (error) {
            console.log(error);
            res.json({status:error,message:"One error  in this request"})
        }
    };
}