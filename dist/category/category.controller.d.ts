import { CategoryService } from './category.service';
export declare class CategoryController {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
    getAllCategories(): Promise<import("../vo/result.vo").ResultVO<{
        id: string;
        name: string;
    }[]>>;
    getCategoryById(id: string): Promise<import("../vo/result.vo").ResultVO<{
        id: string;
        name: string;
    }>>;
    createCategory(data: any): Promise<import("../vo/result.vo").ResultVO<{
        id: string;
        name: string;
    }>>;
    updateCategory(id: string, data: any): Promise<import("../vo/result.vo").ResultVO<{
        id: string;
        name: string;
    }>>;
    deleteCategory(id: string): Promise<import("../vo/result.vo").ResultVO<{
        id: string;
        name: string;
    }>>;
}
