import { PrismaService } from '@/prisma/prisma.service';
export declare class CategoryService {
    private prisma;
    constructor(prisma: PrismaService);
    getAllCategories(): Promise<import("../vo/result.vo").ResultVO<{
        id: string;
        name: string;
    }[]>>;
    getCategoryById(id: string): Promise<import("../vo/result.vo").ResultVO<{
        id: string;
        name: string;
    }>>;
    createCategory(data: {
        id: string;
        name: string;
    }): Promise<import("../vo/result.vo").ResultVO<{
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
