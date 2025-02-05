// src/banner/banner.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
import { VOUtils } from 'utils/voUtils';

@Injectable()
export class BannerService {
  constructor(private prisma: PrismaService) {}

  // 获取所有Banner
  async getAllBanners() {
    let banners = await this.prisma.banner.findMany();
    return VOUtils.success(banners);
  }

  // 根据ID获取Banner
  async getBannerById(id: number) {
    let banner = await this.prisma.banner.findUnique({
      where: { id: id },
    });
    return VOUtils.success(banner);
  }

  // 创建Banner
  async createBanner(data: { title: string }) {
    const banner = await this.prisma.banner.create({
      data,
    });
    return VOUtils.success(banner);
  }

  // 更新Banner
  async updateBanner(id: number, data: any) {
    const banner = await this.prisma.banner.update({
      where: { id: id },
      data,
    });
    return VOUtils.success(banner);
  }

  // 删除Banner
  async deleteBanner(id: number) {
    const banner = await this.prisma.banner.delete({
      where: { id: id },
    });
    return VOUtils.success(banner);
  }
}
