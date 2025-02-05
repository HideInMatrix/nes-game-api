import { RomService } from './rom.service';
import { Response } from 'express';
export declare class RomController {
    private readonly romService;
    constructor(romService: RomService);
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
    createRom(data: any): Promise<import("../vo/result.vo").ResultVO<{
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
    getRomFile(fileName: string, res: Response): Promise<void | import("../vo/result.vo").ResultVO<null>>;
    getGamesByCategory(): Promise<import("../vo/result.vo").ResultVO<{
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
    getGamesByCategoryId(categoryId: string, page: number, pageSize: number, keyword: string): Promise<import("../vo/result.vo").ResultVO<{
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
