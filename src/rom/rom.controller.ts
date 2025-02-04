// src/rom/rom.controller.ts
import { Controller, Get, Post, Body, Param, Query, Res } from '@nestjs/common';
import { RomService } from '@/rom/rom.service';
import { Response } from 'express';
import { join } from 'path';
import { VOUtils } from 'utils/voUtils';

@Controller('roms')
export class RomController {
  constructor(private readonly romService: RomService) {}

  @Get()
  async getAllRoms() {
    return this.romService.getAllRoms();
  }

  @Get('id')
  async getRomById(@Query('id') id: number) {
    return this.romService.getRomById(+id);
  }

  @Post()
  async createRom(@Body() data: any) {
    return this.romService.createRom(data);
  }

  @Post('updata')
  async updateRom(@Param('id') id: number, @Body() data: any) {
    return this.romService.updateRom(+id, data);
  }

  @Post('delete')
  async deleteRom(@Param('id') id: number) {
    return this.romService.deleteRom(+id);
  }

  // 获取一个随机的ROM
  @Get('random')
  async getRandomOneRom() {
    return this.romService.getRandomOneRom();
  }

  // 根据文件名动态返回 .rom 文件
  @Get('getFile')
  async getRomFile(@Query('fileName') fileName: string, @Res() res: Response) {
    const filePath = join(__dirname, '..', '..', 'romFile', `${fileName}`);

    // 检查文件是否存在
    try {
      return res.sendFile(filePath);
    } catch (error) {
      return VOUtils.error(404, '未找到');
    }
  }

  @Get('gamesByCategory')
  async getGamesByCategory() {
    return this.romService.getGamesByCategory();
  }

  // 根据 categoryId 和分页查询游戏
  @Get('gamesByCategoryId')
  async getGamesByCategoryId(
    @Query('categoryId') categoryId: string, // 获取查询参数 categoryId
    @Query('page') page: number = 0, // 默认页码为 0
    @Query('pageSize') pageSize: number = 10, // 默认每页显示 10 个游戏
    @Query("keyword") keyword:string
  ) {
    return this.romService.getGamesByCategoryId(categoryId, page, pageSize,keyword);
  }
}
