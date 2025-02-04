// src/category/category.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Delete,
  Put,
  Query,
} from '@nestjs/common';
import { CategoryService } from './category.service';

@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  async getAllCategories() {
    return this.categoryService.getAllCategories();
  }

  @Get('id')
  async getCategoryById(@Query('id') id: string) {
    return this.categoryService.getCategoryById(id);
  }

  @Post('create')
  async createCategory(@Body() data: any) {
    return this.categoryService.createCategory(data);
  }

  @Put('update')
  async updateCategory(@Query('id') id: string, @Body() data: any) {
    return this.categoryService.updateCategory(id, data);
  }

  @Delete('delete')
  async deleteCategory(@Query('id') id: string) {
    return this.categoryService.deleteCategory(id);
  }
}
