import { ordersDao } from "../dao/index.js";

export class OrdersServices{
    static getOrder = () => {
        return ordersDao.getOrder();
    };

    static createOrder = (info) => {
        return ordersDao.createOrder(info)
    };

    static modifyStatusOrder =  (id,info) => {
        return ordersDao.smodifyStatusOrder(id,info)
    };
}