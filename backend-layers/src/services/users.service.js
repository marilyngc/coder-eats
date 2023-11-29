import { usersDao } from "../dao/index.js";


export class UsersService{
    static getUser =  (id) => {
      return usersDao.getUser(id);
    };
    static createUser =  (info) => {
        return usersDao.createUser(info);
    };
}