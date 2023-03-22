import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Customer } from "./Customer";

@Entity('orders')
export class Order {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'date' })
    date: Date;

    @Column({ type: 'boolean' })
    status: boolean;

    @ManyToOne(() => Customer, (customer) => customer.order)
    @JoinColumn({ name: 'customer_id' })
    customer: Customer;
};