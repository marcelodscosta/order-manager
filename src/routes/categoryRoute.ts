import { Router } from "express";
import { CategoryController } from "../controllers/CategoryController";


export const categoryRoute = Router();


categoryRoute.post('/create', new CategoryController().create);
categoryRoute.get('/', new CategoryController().findAll);
categoryRoute.get('/:id', new CategoryController().findById);
