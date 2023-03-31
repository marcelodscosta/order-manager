import { ICategory } from "../interfaces/ICategory";
import { categoryRepository } from "../repositories/categoryRepository";
import { categoryValidation } from "../validations/categoryValidation";


export class CategoryService {

    // Create
    async create({ description }: ICategory) {

        await categoryValidation.validate({ description });

        const newCategory = categoryRepository.create({ description });
        await categoryRepository.save(newCategory);
        return newCategory;
    }

    // Read - ReadAll
    async findAll() {
        const categories = await categoryRepository.find();
        return categories;
    }

    async findById(id: number) {
        const category = await categoryRepository.findOne({ where: { id: id } });
        return category;
    }

    // Update

    async update({ id, description }: ICategory) {

        await categoryValidation.validate({ description });

        const category = await categoryRepository.findOne({ where: { id: id } });
        if (category) {
            category.description = description;
            await categoryRepository.save(category);
        }


        return category;
    }

    // Delete

    async delete(id: number) {
        const category = await categoryRepository.findOne({ where: { id: id } });
        if (category) {
            await categoryRepository.remove(category);
        }
        return category;
    }

}