import { PrismaService } from '@/prisma/prisma.service';
export declare class BannerService {
    private prisma;
    constructor(prisma: PrismaService);
    getAllBanners(): Promise<import("../vo/result.vo").ResultVO<{
        id: number;
        title: string | null;
    }[]>>;
    getBannerById(id: number): Promise<import("../vo/result.vo").ResultVO<{
        id: number;
        title: string | null;
    }>>;
    createBanner(data: {
        title: string;
    }): Promise<import("../vo/result.vo").ResultVO<{
        id: number;
        title: string | null;
    }>>;
    updateBanner(id: number, data: any): Promise<import("../vo/result.vo").ResultVO<{
        id: number;
        title: string | null;
    }>>;
    deleteBanner(id: number): Promise<import("../vo/result.vo").ResultVO<{
        id: number;
        title: string | null;
    }>>;
}
