import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./Product";

@Entity('categories')
export class Category {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: "varchar",
        length: 200
    })
    description: string;

    @OneToMany(() => Product, product => product.category)
    product: Product[];
};