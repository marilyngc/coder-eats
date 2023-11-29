import { businessDao } from "../dao/index.js";


export class BusinessServices{
    static getAllBusiness =  () => {
        return businessDao.get();
    };


    static getOneBusiness =  (id) => {
        return businessDao.getById(id);
    };



    static createBusiness =  (info) => {
        return businessDao.createBusiness(info);
    };


    static addProducts =  () => {
        return businessDao.addProducts(id,info);
    };
}