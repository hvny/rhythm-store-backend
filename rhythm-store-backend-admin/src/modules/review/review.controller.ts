import { Controller, Post, Body, Param, Get } from "@nestjs/common";
import { ReviewService } from "./review.service";

@Controller("reviews")
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @Post(":productId")
  async createReview(
    @Param("productId") productId: number,
    @Body("userId") userId: number,
    @Body("comment") comment: string,
    @Body("rating") rating: number,
  ) {
    return this.reviewService.create(userId, productId, comment, rating);
  }

  @Get(":productId")
  async getReviews(@Param("productId") productId: number) {
    return this.reviewService.findByProduct(productId);
  }
}
