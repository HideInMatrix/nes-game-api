// src/category/category.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
import { VOUtils } from 'utils/voUtils';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}

  // 获取所有类别
  async getAllCategories() {
    const categories = await this.prisma.category.findMany();
    return VOUtils.success(categories);
  }

  // 根据ID获取类别
  async getCategoryById(id: string) {
    const category = await this.prisma.category.findUnique({
      where: { id: id },
    });
    return VOUtils.success(category);
  }

  // 创建类别
  async createCategory(data: { id: string; name: string }) {
    const category = await this.prisma.category.create({
      data,
    });
    return VOUtils.success(category);
  }

  // 更新类别
  async updateCategory(id: string, data: any) {
    const category = await this.prisma.category.update({
      where: { id: id },
      data,
    });
    return VOUtils.success(category);
  }

  // 删除类别
  async deleteCategory(id: string) {
    const category = await this.prisma.category.delete({
      where: { id: id },
    });
    return VOUtils.success(category);
  }


}
