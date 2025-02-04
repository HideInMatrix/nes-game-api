// src/rom/rom.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { VOUtils } from '../../utils/voUtils';

@Injectable()
export class RomService {
  constructor(private prisma: PrismaService) {}

  // 获取所有ROM
  async getAllRoms() {
    let roms = await this.prisma.rom.findMany();
    return VOUtils.success(roms);
  }

  async getRandomOneRom() {
    // 使用 Prisma 生成一个随机数索引，进行随机查询
    const count = await this.prisma.rom.count(); // 获取总的ROM数目
    const randomIndex = Math.floor(Math.random() * count); // 生成随机索引

    const randomRom = await this.prisma.rom.findMany({
      skip: randomIndex,
      take: 1, // 只获取一个随机 ROM
    });

    return VOUtils.success(randomRom[0]);
  }

  async getRomsByPage() {
    let roms = await this.prisma.rom.findMany();
  }

  // 根据ID获取ROM
  async getRomById(id: number) {
    const rom = await this.prisma.rom.findUnique({
      where: { id: id },
    });
    return VOUtils.success(rom);
  }

  // 创建ROM
  async createRom(data: {
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
  }) {
    const rom = await this.prisma.rom.create({
      data,
    });
    return VOUtils.success(rom);
  }

  // 更新ROM
  async updateRom(id: number, data: any) {
    const rom = await this.prisma.rom.update({
      where: { id: id },
      data,
    });
    return rom;
  }

  // 删除ROM
  async deleteRom(id: number) {
    const rom = await this.prisma.rom.delete({
      where: { id: id },
    });
    return VOUtils.success(rom);
  }

  async getGamesByCategory(limit: number = 5) {
    const categories = await this.prisma.category.findMany();

    // 获取每个分类的前5个游戏
    const gamesByCategory = await Promise.all(
      categories.map(async (category: { id: any; name: any }) => {
        const games = await this.prisma.rom.findMany({
          where: { type: category.id },
          take: limit, // 每个分类取5个游戏
        });

        return {
          name: category.name,
          games: games,
        };
      }),
    );

    return VOUtils.success(gamesByCategory);
  }

  // 根据 categoryId 获取分页的游戏数据
  async getGamesByCategoryId(
    categoryId: string,
    page: number = 0,
    pageSize: number = 10,
    keyword: string = '',
  ) {
    const skip = +page * +pageSize; // 计算跳过的记录数
    const take = +pageSize; // 每页获取的记录数

    // 获取该分类下的游戏数量
    const totalGames = await this.prisma.rom.count({
      where: {
        type: categoryId,
        title: { contains: keyword },
      },
    });

    // 获取该分类下的分页游戏数据
    const games = await this.prisma.rom.findMany({
      where: {
        type: categoryId,
        title: { contains: keyword },
      },
      skip: skip,
      take: take,
    });

    return VOUtils.success({
      totalGames,
      totalPages: Math.ceil(totalGames / pageSize),
      games,
    });
  }
}
