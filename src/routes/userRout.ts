import { Router } from 'express';
import { UserController } from '../controllers/UserController';
import { authMiddleware } from '../middlewares/authMiddleware';
import { userInputValidate } from '../middlewares/userInputValidate';
import { categoryRoute } from './categoryRoute';

export const userRoute = Router()

const userController = new UserController();

categoryRoute.use(authMiddleware);

userRoute.post('/create', userInputValidate, userController.create);
userRoute.get('/', userController.findAll);
userRoute.get('/:id', userController.findById);
userRoute.put('/:id/update', userInputValidate, userController.update);
userRoute.put('/:id/delete', userController.delete);