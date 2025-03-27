import { Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, Column } from "typeorm";
import { Product } from "../product.entity";

@Entity()
export class Turntable {
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
