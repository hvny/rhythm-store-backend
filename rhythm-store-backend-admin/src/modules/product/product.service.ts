import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Product } from "./product.entity";

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>, // Репозиторий для работы с сущностью Product
  ) {}

  async findAll(): Promise<Product[]> {
    return await this.productRepository.find();
  }

  // Получение товара по ID
  async findOne(id: number): Promise<Product | null> {
    return await this.productRepository.findOne({ where: { id } });
  }

  // Создание нового товара
  async create(productData: Partial<Product>): Promise<Product> {
    const product = this.productRepository.create(productData);
    return await this.productRepository.save(product);
  }

  // Обновление товара
  async update(id: number, productData: Partial<Product>): Promise<Product> {
    await this.productRepository.update(id, productData);
    const updatedProduct = await this.findOne(id);
    if (!updatedProduct) {
      throw new Error("Product not found after update");
    }
    return updatedProduct;
  }

  // Удаление товара
  async remove(id: number): Promise<void> {
    await this.productRepository.delete(id);
  }
}
