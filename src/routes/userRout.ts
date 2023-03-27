import { Router } from 'express';
import { UserController } from '../controllers/UserController';

export const userRoute = Router()

const userController = new UserController();

userRoute.post('/create', userController.create);
userRoute.get('/', userController.findAll);
userRoute.get('/:id', userController.findById);
userRoute.put('/:id/update', userController.update);
userRoute.put('/:id/delete', userController.delete);