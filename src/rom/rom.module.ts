// src/rom/rom.module.ts
import { Module } from '@nestjs/common';
import { RomService } from './rom.service';
import { RomController } from './rom.controller';
import { PrismaModule } from '../prisma/prisma.module'; // 导入 Prisma 模块

@Module({
  imports: [PrismaModule], // 导入 Prisma 模块来访问数据库
  controllers: [RomController],
  providers: [RomService],
})
export class RomModule {}
