import { Request, Response } from "express";
import { UserServiceSingleton } from '../shared/UserServiceSingleton';

export class UserController {
    async create(req: Request, res: Response): Promise<Response> {
        const newUser = await UserServiceSingleton
            .getInstance().create(req.body);
        return res.status(201).json(newUser);
    };

    async findAll(_req: Request, res: Response): Promise<Response> {
        const users = await UserServiceSingleton
            .getInstance().findAll();
        return res.status(200).json(users);
    };

    async findById(req: Request, res: Response): Promise<Response> {
        const user = await UserServiceSingleton
            .getInstance().findById(Number(req.params.id));
        return res.status(200).json(user);
    };

    async update(req: Request, res: Response): Promise<Response> {
        const userUpdate = await UserServiceSingleton
            .getInstance().update(Number(req.params.id), req.body);
        return res.status(201).json(userUpdate);
    };

    async delete(req: Request, res: Response): Promise<Response> {
        await UserServiceSingleton
            .getInstance().delete(Number(req.params.id));
        return res.status(201)
            .json({ message: 'User deleted successfully' });
    };
};