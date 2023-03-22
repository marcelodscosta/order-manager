import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
};