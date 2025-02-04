// src/banner/banner.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { BannerService } from './banner.service';

@Controller('banners')
export class BannerController {
  constructor(private readonly bannerService: BannerService) {}

  @Get()
  async getAllBanners() {
    return this.bannerService.getAllBanners();
  }

  @Get(':id')
  async getBannerById(@Param('id') id: number) {
    return this.bannerService.getBannerById(id);
  }

  @Post()
  async createBanner(@Body() data: any) {
    return this.bannerService.createBanner(data);
  }

  @Put(':id')
  async updateBanner(@Param('id') id: number, @Body() data: any) {
    return this.bannerService.updateBanner(id, data);
  }

  @Delete(':id')
  async deleteBanner(@Param('id') id: number) {
    return this.bannerService.deleteBanner(id);
  }
}
