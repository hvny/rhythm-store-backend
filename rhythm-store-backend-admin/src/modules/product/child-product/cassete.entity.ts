import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";
import { Product } from "../product.entity";

@Entity()
export class Cassette {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Product, { onDelete: "CASCADE" })
  @JoinColumn()
  product: Product;

  @Column()
  artist: string;

  @Column()
  genre: string;

  @Column()
  rpm: number;
}
