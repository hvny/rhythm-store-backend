import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Product } from "../product/product.entity";

@Entity()
export class Review {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column("decimal", { precision: 2, scale: 1 })
  rating: number; // Оценка (0.0 - 10.0)

  @Column("text")
  comment: string; // Текст отзыва

  @ManyToOne(() => Product, (product) => product.reviews, { onDelete: "CASCADE" })
  product: Product; // Связь с товаром
}
