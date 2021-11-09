import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Req,
  Res,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('products')
export class ProductsController {
  @Get()
  // @Redirect('https://google.com', 301);
  getAll(@Req() req: Request, @Res() res: Response): string {
    res.status(201).end('Something');
    return 'getAll';
  }

  // @Get()
  // getAll(): string {
  //   return 'getAll';
  // }

  @Get(':id')
  getOne(@Param('id') id: string): string {
    return 'getOne ' + id;
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Cache-Control', 'none')
  create(@Body() createProductDto: CreateProductDto) {
    return `Title: ${createProductDto.title} Price: ${createProductDto.price}`;
  }

  @Delete(':id')
  delete(@Param('id') id: string): string {
    return 'Delete ' + id;
  }

  @Put(':id')
  update(@Body() updateProductDto: UpdateProductDto, @Param('id') id: string) {
    return `Update ` + id;
  }
}
