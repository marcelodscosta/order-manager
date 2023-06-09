import { ICategory } from "../interfaces/ICategory";
import { categoryRepository } from "../repositories/categoryRepository";
import { ApiError } from "../utils/ApiError";


export class CategoryService {

    async create(category: ICategory) {
        const categoryExists = await categoryRepository
            .findOne({ where: { description: category.description } });
        if (categoryExists)
            throw new ApiError('There is already a category with this description registere', 409);
        const newCategory = categoryRepository.create(category);
        await categoryRepository.save(newCategory);
        return newCategory;
    };

    async findAll() {
        const categories = await categoryRepository
            .find();
        if (categories.length === 0) throw new ApiError('No categories found', 204);
        return categories;
    };

    async findById(id: number) {
        const category = await categoryRepository
            .findOne({ where: { id } });
        if (!category) throw new ApiError('Category not found', 404);
        return category;
    };

    async update(id: number, category: ICategory) {
        const categoryExist = await categoryRepository
            .findOne({ where: { id } });
        if (!categoryExist) throw new ApiError('Category not found', 404);
        const categoryUpdate = Object.assign(categoryExist, category);
        await categoryRepository.save(categoryUpdate);
        return category;
    };

    async delete(id: number) {
        const category = await categoryRepository
            .findOne({ where: { id } });
        if (!category) throw new ApiError('Category not found', 404);
        await categoryRepository.remove(category);
        return category;
    };
};