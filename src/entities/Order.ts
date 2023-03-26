import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Customer } from "./Customer";
import { Product } from "./Product";
import { User } from "./User";

@Entity('orders')
export class Order {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'date' })
    date: Date;

    @Column({ type: 'boolean' })
    status: boolean;

    @ManyToOne(() => User, (user) => user.order)
    @JoinColumn({ name: 'user_id' })
    user: User;

    @ManyToOne(() => Customer, (customer) => customer.order)
    @JoinColumn({ name: 'customer_id' })
    customer: Customer;

    @ManyToMany(() => Product, (product) => product.orders)
    @JoinTable({
        name: 'products_orders',
        joinColumn: {
            name: 'products_id',
            referencedColumnName: 'id'
        },
        inverseJoinColumn: {
            name: 'orders_id',
            referencedColumnName: 'id'
        },
    })
    products: Product[];
};