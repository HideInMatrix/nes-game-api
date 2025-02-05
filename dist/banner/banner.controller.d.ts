import { BannerService } from './banner.service';
export declare class BannerController {
    private readonly bannerService;
    constructor(bannerService: BannerService);
    getAllBanners(): Promise<import("../vo/result.vo").ResultVO<{
        id: number;
        title: string | null;
    }[]>>;
    getBannerById(id: number): Promise<import("../vo/result.vo").ResultVO<{
        id: number;
        title: string | null;
    }>>;
    createBanner(data: any): Promise<import("../vo/result.vo").ResultVO<{
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
