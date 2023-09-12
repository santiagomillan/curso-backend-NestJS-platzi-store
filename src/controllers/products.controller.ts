import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  // Query,
  HttpStatus,
  HttpCode,
  // ParseIntPipe,
} from '@nestjs/common';

import { ProductsService } from './../services/products.service';
import { ParseIntPipe } from '../common/parse-int.pipe';
import { CreateProductDto, UpdateProductDto } from './../dtos/products.dtos';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  getProducts() {
    // @Query('limit') limit: number,
    // @Query('offset') offset: number,
    // @Query('brand') brand: string,
    // @Query('limit') limit = 100,
    // @Query('offset') offset = 0,
    // @Query('brand') brand: string,
    // ) {
    // return `product: limit=> ${limit} offset=> ${offset} brand => ${brand}`;
    return this.productsService.findAll();
  }

  @Get('filter')
  getProductFilter() {
    return `soy un filtro`;
  }

  // @Get('/products/:id')
  // getProduct(@Param() params: any) {
  //   return `product ${params.id}`;
  // }

  @Get(':productId')
  @HttpCode(HttpStatus.ACCEPTED)
  getProduct(@Param('productId', ParseIntPipe) productId: number) {
    // return `product ${productId}`;
    return this.productsService.findOne(productId);
  }

  @Post()
  create(@Body() payload: CreateProductDto) {
    // return {
    //   message: 'accion de crear',
    //   payload,
    // };
    return this.productsService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: UpdateProductDto) {
    // return {
    //   id,
    //   payload,
    // };
    return this.productsService.update(+id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.productsService.remove(+id);
  }
}
