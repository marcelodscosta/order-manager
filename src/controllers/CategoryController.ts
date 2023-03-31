import { Request, Response } from "express";
import { ICategory } from "../interfaces/ICategory";
import { CategoryService } from "../services/CategoryService";
import { ApiError } from "../utils/ApiError";

export class CategoryController {

    async create(req: Request, res: Response) {

        const service = new CategoryService();

        const { description }: ICategory = req.body;
        const newCategory = await service.create({ description });
        return res.status(201).json({ message: "Category created successfully!!!" });
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
        if (!category) throw new ApiError('Invalid Category', 200);
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
        const message = 'Category deleted successfully';

        const service = new CategoryService();

        const category = await service.delete(Number(id));
        if (!category) throw new ApiError('Invalid Category', 200);
        res.status(201).json(message);
    }
};