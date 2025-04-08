import { Column, Entity, PrimaryGeneratedColumn, OneToMany, DiscriminatorColumn } from "typeorm";
import { Review } from "../review/review.entity";

@Entity()
@DiscriminatorColumn({ name: "type", type: "varchar" }) // Указываем поле для различия типов
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

/* @Entity()
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
} */