import { Controller, Get, Post, Put, Delete, Param, Body, NotFoundException } from "@nestjs/common";
import { ProductService } from "./product.service";
import { Product } from "./product.entity";
@Controller("products")
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async findAll(): Promise<Product[]> {
    return await this.productService.findAll();
  }

  @Get(":id")
  async findOne(@Param("id") id: number): Promise<Product> {
    const product = await this.productService.findOne(id);
    if (!product) {
      throw new NotFoundException("Product not found");
    }
    return product;
  }

  @Put(":id")
  async update(@Param("id") id: number, @Body() productData: Partial<Product>): Promise<Product> {
    return await this.productService.update(id, productData);
  }
}
