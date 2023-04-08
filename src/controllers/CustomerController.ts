import { Request, Response } from "express";
import { CustomerService } from "../services/CustomerService";

export class CustomerController {

    async create(req: Request, res: Response) {

        const service = new CustomerService()

        const newCustomer = await service.create(req.body);

        return res.status(201).json(newCustomer);
    }

    async findAll(_req: Request, res: Response) {

        const service = new CustomerService();

        const customers = await service.findAll();

        return res.status(200).json(customers);
    }

    async findById(req: Request, res: Response) {
        const { id } = req.params;

        const service = new CustomerService();

        const customer = await service.findById(Number(id));


        return res.status(200).json(customer);
    }

    async update(req: Request, res: Response) {
        const { id } = req.params;

        const service = new CustomerService();

        const customerUpdate = await service.update(Number(id), req.body);

        return res.status(201).json(customerUpdate);
    }

    async delete(req: Request, res: Response) {
        const { id } = req.params;

        const service = new CustomerService();

        await service.delete(Number(id));

        const message = 'Customer deleted successfully';

        return res.status(201).json(message);
    }
}