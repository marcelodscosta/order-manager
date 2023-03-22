import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('orders')
export class Order {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'date' })
    date: Date;

    @Column({ type: 'boolean' })
    status: boolean;
};