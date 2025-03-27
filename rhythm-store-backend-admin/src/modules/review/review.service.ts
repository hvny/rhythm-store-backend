import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Review } from "./review.entity";
import { Product } from "../product/product.entity";
@Injectable()
export class ReviewService {
  constructor(
    @InjectRepository(Review)
    private reviewRepository: Repository<Review>,
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  async create(
    userId: number,
    productId: number,
    comment: string,
    rating: number,
  ): Promise<Review> {
    const product = await this.productRepository.findOne({ where: { id: productId } });
    if (!product) {
      throw new Error("Product not found");
    }
    const review = this.reviewRepository.create({ userId, comment, rating, product });
    return await this.reviewRepository.save(review);
  }

  async findByProduct(productId: number): Promise<Review[]> {
    return await this.reviewRepository.find({ where: { product: { id: productId } } });
  }
}
