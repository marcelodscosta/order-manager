import { Request, Response } from "express";
import { CustomerService } from "../services/CustomerService";

export class CustomerController {

    async create(req: Request, res: Response) {
        const service = new CustomerService()
        const newCustomer = await service.create(req.body);
        return res.status(200).json(newCustomer);
    }
}