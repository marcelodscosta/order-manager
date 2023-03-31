import { Router } from 'express';
import { CustomerController } from '../controllers/CustomerController';

export const customerRoute = Router();

const customerController = new CustomerController();

customerRoute.post('/create', customerController.create);