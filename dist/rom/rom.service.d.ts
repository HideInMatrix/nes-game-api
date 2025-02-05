import { PrismaService } from '@/prisma/prisma.service';
export declare class RomService {
    private prisma;
    constructor(prisma: PrismaService);
    getAllRoms(): Promise<import("../vo/result.vo").ResultVO<{
        id: number;
        title: string;
        cover: string;
        image: string;
        language: string;
        type: string;
        source: string;
        comment: string;
        location: string;
        size: string;
        publisher: string;
        url: string;
    }[]>>;
    getRandomOneRom(): Promise<import("../vo/result.vo").ResultVO<{
        id: number;
        title: string;
        cover: string;
        image: string;
        language: string;
        type: string;
        source: string;
        comment: string;
        location: string;
        size: string;
        publisher: string;
        url: string;
    }>>;
    getRomsByPage(): Promise<void>;
    getRomById(id: number): Promise<import("../vo/result.vo").ResultVO<{
        id: number;
        title: string;
        cover: string;
        image: string;
        language: string;
        type: string;
        source: string;
        comment: string;
        location: string;
        size: string;
        publisher: string;
        url: string;
    }>>;
    createRom(data: {
        title: string;
        cover: string;
        image: string;
        language: string;
        type: string;
        source: string;
        comment: string;
        location: string;
        size: string;
        publisher: string;
        url: string;
    }): Promise<import("../vo/result.vo").ResultVO<{
        id: number;
        title: string;
        cover: string;
        image: string;
        language: string;
        type: string;
        source: string;
        comment: string;
        location: string;
        size: string;
        publisher: string;
        url: string;
    }>>;
    updateRom(id: number, data: any): Promise<{
        id: number;
        title: string;
        cover: string;
        image: string;
        language: string;
        type: string;
        source: string;
        comment: string;
        location: string;
        size: string;
        publisher: string;
        url: string;
    }>;
    deleteRom(id: number): Promise<import("../vo/result.vo").ResultVO<{
        id: number;
        title: string;
        cover: string;
        image: string;
        language: string;
        type: string;
        source: string;
        comment: string;
        location: string;
        size: string;
        publisher: string;
        url: string;
    }>>;
    getGamesByCategory(limit?: number): Promise<import("../vo/result.vo").ResultVO<{
        name: any;
        games: {
            id: number;
            title: string;
            cover: string;
            image: string;
            language: string;
            type: string;
            source: string;
            comment: string;
            location: string;
            size: string;
            publisher: string;
            url: string;
        }[];
    }[]>>;
    getGamesByCategoryId(categoryId: string, page?: number, pageSize?: number, keyword?: string): Promise<import("../vo/result.vo").ResultVO<{
        totalGames: number;
        totalPages: number;
        games: {
            id: number;
            title: string;
            cover: string;
            image: string;
            language: string;
            type: string;
            source: string;
            comment: string;
            location: string;
            size: string;
            publisher: string;
            url: string;
        }[];
    }>>;
}
