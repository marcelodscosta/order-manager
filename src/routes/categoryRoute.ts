import { Router } from "express";
import { CategoryController } from "../controllers/CategoryController";


export const categoryRoute = Router();

const categoryController = new CategoryController();


categoryRoute.post('/create', categoryController.create);
categoryRoute.get('/', categoryController.findAll);
categoryRoute.get('/:id', categoryController.findById);
categoryRoute.put('/:id/update', categoryController.update);
categoryRoute.put('/:id/delete', categoryController.delete);
