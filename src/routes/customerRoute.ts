import { Router } from 'express';
import { CustomerController } from '../controllers/CustomerController';

export const customerRoute = Router();

const customerController = new CustomerController();

customerRoute.post('/create', customerController.create);
customerRoute.get('/', customerController.findAll);
customerRoute.get('/:id', customerController.findById);
customerRoute.put('/:id/update', customerController.update);
customerRoute.put('/:id/delete', customerController.delete)