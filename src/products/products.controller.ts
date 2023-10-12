import { Controller, Get, Post, Body, Put, Param, Delete, Res } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto, @Res() res) {
    this.productsService.create(createProductDto);

    return res.json({
      msg: 'Product created'
    })
  }

  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateProductDto: CreateProductDto, @Res() res) {
    this.productsService.update(+id, updateProductDto);

    return res.json({
      msg: 'Product updated'
    })

  }

  @Delete(':id')
  remove(@Param('id') id: string, @Res() res) {
    this.productsService.remove(+id);

    return res.json({
      msg: 'Product deleted'
    })

  }
}
