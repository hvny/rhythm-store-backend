import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Review } from "../review/review.entity";

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column("decimal")
  price: number;

  @Column({ default: true })
  isAvailable: boolean;

  @Column("int", { default: 0 })
  quantity: number;

  @OneToMany(() => Review, (review) => review.product)
  reviews: Review[];
}
