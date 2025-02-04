import { Module } from '@nestjs/common';
import { RomModule } from './rom/rom.module'; // 导入 RomModule
import { CategoryModule } from './category/category.module'; // 导入 CategoryModule
import { BannerModule } from './banner/banner.module'; // 导入 BannerModule
import { PrismaModule } from './prisma/prisma.module'; // 导入 Prisma 模块

@Module({
  imports: [
    PrismaModule, // 导入 Prisma 模块（这个模块提供数据库连接）
    RomModule, // 导入 Rom 模块
    CategoryModule, // 导入 Category 模块
    BannerModule, // 导入 Banner 模块
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
