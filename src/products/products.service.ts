import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './entities/product.entity';
@Injectable()
export class ProductsService {

  ProductModel: Product[]  = [];

  create(createProductDto: CreateProductDto) {
      return this.ProductModel.push(createProductDto);
  }

  findAll() {
    return this.ProductModel;
  }

  findOne(id: number) {
    return this.ProductModel.filter(product => product.id === id);
  }

  update(id: number, updateProductDto: CreateProductDto) {
    return this.ProductModel = this.ProductModel.map( product => product.id === id ? updateProductDto : product);
  }

  remove(id: number) {
    return this.ProductModel = this.ProductModel.filter( product => product.id !== id);
  }
}
