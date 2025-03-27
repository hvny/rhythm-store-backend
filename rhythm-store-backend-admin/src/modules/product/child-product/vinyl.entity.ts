import { Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, Entity } from "typeorm";
import { Product } from "../product.entity";

@Entity()
export class Vinyl {
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
