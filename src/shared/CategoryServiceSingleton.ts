import { CategoryService } from "../services/CategoryService";

export class CategoryServiceSingleton {
    private static instance: CategoryService;

    public static getInstance(): CategoryService {
        if (!CategoryServiceSingleton.instance) {
            CategoryServiceSingleton.instance = new CategoryService();
        }

        return CategoryServiceSingleton.instance;
    }
}