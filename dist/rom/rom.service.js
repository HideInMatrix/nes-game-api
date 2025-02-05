"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RomService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const voUtils_1 = require("../utils/voUtils");
let RomService = class RomService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getAllRoms() {
        let roms = await this.prisma.rom.findMany();
        return voUtils_1.VOUtils.success(roms);
    }
    async getRandomOneRom() {
        const count = await this.prisma.rom.count();
        const randomIndex = Math.floor(Math.random() * count);
        const randomRom = await this.prisma.rom.findMany({
            skip: randomIndex,
            take: 1,
        });
        return voUtils_1.VOUtils.success(randomRom[0]);
    }
    async getRomsByPage() {
        let roms = await this.prisma.rom.findMany();
    }
    async getRomById(id) {
        const rom = await this.prisma.rom.findUnique({
            where: { id: id },
        });
        return voUtils_1.VOUtils.success(rom);
    }
    async createRom(data) {
        const rom = await this.prisma.rom.create({
            data,
        });
        return voUtils_1.VOUtils.success(rom);
    }
    async updateRom(id, data) {
        const rom = await this.prisma.rom.update({
            where: { id: id },
            data,
        });
        return rom;
    }
    async deleteRom(id) {
        const rom = await this.prisma.rom.delete({
            where: { id: id },
        });
        return voUtils_1.VOUtils.success(rom);
    }
    async getGamesByCategory(limit = 5) {
        const categories = await this.prisma.category.findMany();
        const gamesByCategory = await Promise.all(categories.map(async (category) => {
            const games = await this.prisma.rom.findMany({
                where: { type: category.id },
                take: limit,
            });
            return {
                name: category.name,
                games: games,
            };
        }));
        return voUtils_1.VOUtils.success(gamesByCategory);
    }
    async getGamesByCategoryId(categoryId, page = 0, pageSize = 10, keyword = '') {
        const skip = +page * +pageSize;
        const take = +pageSize;
        const totalGames = await this.prisma.rom.count({
            where: {
                type: categoryId,
                title: { contains: keyword },
            },
        });
        const games = await this.prisma.rom.findMany({
            where: {
                type: categoryId,
                title: { contains: keyword },
            },
            skip: skip,
            take: take,
        });
        return voUtils_1.VOUtils.success({
            totalGames,
            totalPages: Math.ceil(totalGames / pageSize),
            games,
        });
    }
};
exports.RomService = RomService;
exports.RomService = RomService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], RomService);
//# sourceMappingURL=rom.service.js.map