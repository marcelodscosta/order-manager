import { ICategory } from "../interfaces/ICategory";
import { categoryRepository } from "../repositories/categoryRepository";


export class CategoryService {

    async create({ description }: ICategory) {
        const newCategory = categoryRepository.create({ description });
        await categoryRepository.save(newCategory);
        return newCategory;
    }

    async findAll() {
        const categories = await categoryRepository.find();
        return categories;
    }

    async findById(id: number) {
        const category = await categoryRepository.findOne({ where: { id: id } });
        return category;
    }
}