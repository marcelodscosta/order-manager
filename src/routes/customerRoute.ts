import { Router } from 'express';
import { CustomerController } from '../controllers/CustomerController';
import { customerInputValidate } from '../middlewares/customerInputValidate';

export const customerRoute = Router();

const customerController = new CustomerController();

customerRoute.post('/create', customerInputValidate, customerController.create);
customerRoute.get('/', customerController.findAll);
customerRoute.get('/:id', customerController.findById);
customerRoute.put('/:id/update', customerInputValidate, customerController.update);
customerRoute.put('/:id/delete', customerController.delete)