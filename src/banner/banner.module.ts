// src/banner/banner.module.ts
import { Module } from '@nestjs/common';
import { BannerService } from '@/banner/banner.service';
import { BannerController } from '@/banner/banner.controller';
import { PrismaModule } from '@/prisma/prisma.module'; // 导入 Prisma 模
@Module({
  imports: [PrismaModule], // 导入 Prisma 模块来访问数据库
  controllers: [BannerController],
  providers: [BannerService],
})
export class BannerModule {}
