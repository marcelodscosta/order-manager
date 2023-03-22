import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "./Category";

@Entity('products')
export class Product {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: "varchar",
        length: 200
    })
    description: string;

    @Column({ type: 'integer' })
    price: number;

    @ManyToOne(() => Category, category => category.product)
    @JoinColumn({ name: 'categories_id' })
    category: Category;

};