import express from 'express';
import UserController from '../controllers/usersController';
import authMiddleware from '../middlewares/authMiddleware';
import rolesMiddleware from "../middlewares/adminMiddleare.js";
const routesUser = express.Router();

routesUser.get('/users', UserController.findUsers);
routesUser.get('/users/auth', authMiddleware, UserController.userAuthenticator)
routesUser.get('/user/auth/admin', authMiddleware, rolesMiddleware('admin'), (req, res)=>{
    return res.json({ message: "Você logou como Admin, bem vindo! "})
})
routesUser.post('/users/register', UserController.userRegister)
routesUser.post('/users/auth/login', UserController.userLogin)

export default routesUser;