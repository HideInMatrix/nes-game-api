// src/category/category.module.ts
import { Module } from '@nestjs/common';
import { CategoryService } from '@/category/category.service';
import { CategoryController } from '@/category/category.controller';
import { PrismaModule } from '@/prisma/prisma.module'; // 导入 Prisma 模块

@Module({
  imports: [PrismaModule], // 导入 Prisma 模块来访问数据库
  controllers: [CategoryController],
  providers: [CategoryService],
})
export class CategoryModule {}
