import { Router } from "express";
import { CategoryController } from "../controllers/CategoryController";
import { authMiddleware } from "../middlewares/authMiddleware";
import { categoryInputValidate } from "../middlewares/categoryInputValidate";


export const categoryRoute = Router();

const categoryController = new CategoryController();

categoryRoute.use(authMiddleware);
categoryRoute.post('/create', categoryInputValidate, categoryController.create);
categoryRoute.get('/', categoryController.findAll);
categoryRoute.get('/:id', categoryController.findById);
categoryRoute.put('/:id/update', categoryInputValidate, categoryController.update);
categoryRoute.put('/:id/delete', categoryController.delete);
