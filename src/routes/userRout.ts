import { Router } from 'express';
import { UserController } from '../controllers/UserController';
import { authMiddleware } from '../middlewares/authMiddleware';
import { categoryRoute } from './categoryRoute';

export const userRoute = Router()

const userController = new UserController();

categoryRoute.use(authMiddleware);
userRoute.post('/create', userController.create);
userRoute.get('/', userController.findAll);
userRoute.get('/:id', userController.findById);
userRoute.put('/:id/update', userController.update);
userRoute.put('/:id/delete', userController.delete);