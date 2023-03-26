import { Request, Response } from "express";
import { ICategory } from "../interfaces/ICategory";
import { CategoryService } from "../services/CategoryService";

export class CategoryController {

    async create(req: Request, res: Response) {

        const service = new CategoryService();

        const { description }: ICategory = req.body;
        const newCategory = await service.create({ description });
        return res.status(201).json(newCategory);
    }

    async findAll(req: Request, res: Response) {

        const service = new CategoryService();

        const categories = await service.findAll();
        return res.status(200).json(categories);
    }

    async findById(req: Request, res: Response) {

        const { id } = req.params;

        const service = new CategoryService();

        const category = await service.findById(Number(id));
        return res.status(200).json(category);
    }

    async update(req: Request, res: Response) {
        const { id } = req.params;
        const { description } = req.body;

        const service = new CategoryService();

        const updateCategory: ICategory = {
            id: Number(id),
            description
        };

        const update = await service.update(updateCategory);
        res.status(201).json(update);
    }

    async delete(req: Request, res: Response) {
        const { id } = req.params;

        const service = new CategoryService();

        const update = await service.delete(Number(id));
        res.status(201).json(update);
    }
};