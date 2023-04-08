import { Request, Response } from "express";
import { IUser } from "../interfaces/IUser";
import { UserService } from "../services/UserService";

export class UserController {

    async create(req: Request, res: Response) {
        const { name, email, cpf, password, status }: IUser = req.body;

        const service = new UserService();

        const newUser = await service.create({ name, email, cpf, password, status });


        res.status(201).json(newUser);
    }

    async findAll(_req: Request, res: Response) {
        const service = new UserService();
        const users = await service.findAll();
        return res.status(200).json(users);
    }

    async findById(req: Request, res: Response) {
        const { id } = req.params;

        const service = new UserService();

        const user = await service.findById(Number(id));


        return res.status(200).json(user);
    }

    async update(req: Request, res: Response) {
        const { id } = req.params;
        const { name, email, status, cpf, password } = req.body;
        const service = new UserService();

        const userUpdate = await service.update(Number(id), { name, email, status, cpf, password });

        return res.status(201).json(userUpdate);
    }

    async delete(req: Request, res: Response) {
        const { id } = req.params;

        const service = new UserService();

        await service.delete(Number(id));

        const message = 'User deleted successfully';

        return res.status(201).json(message);
    }
}