import { Request, Response } from "express";
import { IUser } from "../interfaces/IUser";
import { UserService } from "../services/UserService";
import { ApiError } from "../utils/ApiError";

export class UserController {

    async create(req: Request, res: Response) {
        const { name, email, cpf, password, status }: IUser = req.body;
        const service = new UserService();
        await service.create({ name, email, cpf, password, status });
        res.status(201).json({ message: "User created successfully!!!" });
    }

    async findAll(_req: Request, res: Response) {
        const service = new UserService();
        const userList = await service.findAll();
        return res.status(200).json(userList);
    }

    async findById(req: Request, res: Response) {
        const { id } = req.params;
        const service = new UserService();
        const user = await service.findById(Number(id));
        if (user.length === 0) throw new ApiError('Invalid user', 200);
        return res.status(200).json(user);
    }

    async update(req: Request, res: Response) {
        const { id } = req.params;
        const { name, email, status, cpf, password } = req.body;
        const service = new UserService();
        const userUpdate = await service.update(Number(id), { name, email, status, cpf, password });
        if (!userUpdate) throw new ApiError('Invalid user', 200);
        return res.status(201).json(userUpdate);
    }

    async delete(req: Request, res: Response) {
        const { id } = req.params;

        const service = new UserService();

        const userDel = await service.delete(Number(id));
        if (!userDel) throw new ApiError('Invalid user', 200);
        const message = 'User deleted successfully';

        return res.status(201).json(message);
    }
}