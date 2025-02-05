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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RomController = void 0;
const common_1 = require("@nestjs/common");
const rom_service_1 = require("./rom.service");
const path_1 = require("path");
const voUtils_1 = require("../../utils/voUtils");
let RomController = class RomController {
    constructor(romService) {
        this.romService = romService;
    }
    async getAllRoms() {
        return this.romService.getAllRoms();
    }
    async getRomById(id) {
        return this.romService.getRomById(+id);
    }
    async createRom(data) {
        return this.romService.createRom(data);
    }
    async updateRom(id, data) {
        return this.romService.updateRom(+id, data);
    }
    async deleteRom(id) {
        return this.romService.deleteRom(+id);
    }
    async getRandomOneRom() {
        return this.romService.getRandomOneRom();
    }
    async getRomFile(fileName, res) {
        const filePath = (0, path_1.join)(__dirname, '..', '..', 'romFile', `${fileName}`);
        try {
            return res.sendFile(filePath);
        }
        catch (error) {
            return voUtils_1.VOUtils.error(404, '未找到');
        }
    }
    async getGamesByCategory() {
        return this.romService.getGamesByCategory();
    }
    async getGamesByCategoryId(categoryId, page = 0, pageSize = 10, keyword) {
        return this.romService.getGamesByCategoryId(categoryId, page, pageSize, keyword);
    }
};
exports.RomController = RomController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RomController.prototype, "getAllRoms", null);
__decorate([
    (0, common_1.Get)('id'),
    __param(0, (0, common_1.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RomController.prototype, "getRomById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RomController.prototype, "createRom", null);
__decorate([
    (0, common_1.Post)('updata'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], RomController.prototype, "updateRom", null);
__decorate([
    (0, common_1.Post)('delete'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RomController.prototype, "deleteRom", null);
__decorate([
    (0, common_1.Get)('random'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RomController.prototype, "getRandomOneRom", null);
__decorate([
    (0, common_1.Get)('getFile'),
    __param(0, (0, common_1.Query)('fileName')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], RomController.prototype, "getRomFile", null);
__decorate([
    (0, common_1.Get)('gamesByCategory'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RomController.prototype, "getGamesByCategory", null);
__decorate([
    (0, common_1.Get)('gamesByCategoryId'),
    __param(0, (0, common_1.Query)('categoryId')),
    __param(1, (0, common_1.Query)('page')),
    __param(2, (0, common_1.Query)('pageSize')),
    __param(3, (0, common_1.Query)('keyword')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, Number, String]),
    __metadata("design:returntype", Promise)
], RomController.prototype, "getGamesByCategoryId", null);
exports.RomController = RomController = __decorate([
    (0, common_1.Controller)('roms'),
    __metadata("design:paramtypes", [rom_service_1.RomService])
], RomController);
//# sourceMappingURL=rom.controller.js.map