import { Request, Response } from "express";
import { CustomerServiceSingleton } from '../shared/CustomerServiceSingleton';

export class CustomerController {

    async create(req: Request, res: Response): Promise<Response> {
        const newCustomer = await CustomerServiceSingleton
            .getInstance().create(req.body);
        return res.status(201).json(newCustomer);
    };

    async findAll(_req: Request, res: Response): Promise<Response> {
        const customers = await CustomerServiceSingleton
            .getInstance().findAll();
        return res.status(200).json(customers);
    };

    async findById(req: Request, res: Response): Promise<Response> {
        const customer = await CustomerServiceSingleton
            .getInstance().findById(Number(req.params.id));
        return res.status(200).json(customer);
    };

    async update(req: Request, res: Response): Promise<Response> {
        const customerUpdate = await CustomerServiceSingleton
            .getInstance().update(Number(req.params.id), req.body);
        return res.status(201).json(customerUpdate);
    };

    async delete(req: Request, res: Response): Promise<Response> {
        await CustomerServiceSingleton
            .getInstance().delete(Number(req.params.id));
        return res.status(201)
            .json({ message: 'Customer deleted successfully' });
    };
};