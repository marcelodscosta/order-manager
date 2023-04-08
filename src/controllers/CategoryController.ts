import { Request, Response } from "express";
import { CategoryServiceSingleton } from "../shared/CategoryServiceSingleton";

export class CategoryController {
    public async create(req: Request, res: Response): Promise<Response> {
        const newCategory = await CategoryServiceSingleton
            .getInstance().create(req.body);
        return res.status(201).json(newCategory);
    };

    public async findAll(req: Request, res: Response): Promise<Response> {
        const categories = await CategoryServiceSingleton
            .getInstance().findAll();
        return res.status(200).json(categories);
    };

    public async findById(req: Request, res: Response): Promise<Response> {
        const category = await CategoryServiceSingleton
            .getInstance().findById(Number(req.params.id));
        return res.status(200).json(category);
    };

    public async update(req: Request, res: Response): Promise<Response> {
        const update = await CategoryServiceSingleton
            .getInstance().update(Number(req.params.id), req.body);
        return res.status(201).json(update);
    };

    public async delete(req: Request, res: Response): Promise<Response> {
        await CategoryServiceSingleton
            .getInstance().delete(Number(req.params.id));
        return res.status(200)
            .json({ message: `Category deleted successfully` });
    };
};
