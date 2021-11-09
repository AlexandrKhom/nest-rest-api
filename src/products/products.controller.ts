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
  // Req,
  // Res,
} from '@nestjs/common';
// import { Request, Response } from 'express';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  // @Get()
  // // @Redirect('https://google.com', 301);
  // getAll(@Req() req: Request, @Res() res: Response): string {
  //   res.status(201).end('Something');
  //   return 'getAll';
  // }

  @Get()
  getAll() {
    return this.productsService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.productsService.getById(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Cache-Control', 'none')
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
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
