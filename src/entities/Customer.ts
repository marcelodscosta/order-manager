import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Order } from "./Order";

@Entity('customers')
export class Customer {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 200 })
    name: string;

    @Column({ type: 'varchar', length: 200 })
    email: string;

    @Column({ type: 'boolean' })
    status: boolean;

    @Column({ type: 'varchar', length: 200, nullable: true })
    cpf: string;

    @Column({ type: 'varchar', length: 200, nullable: true })
    cnpj: string;

    @OneToMany(() => Order, (order) => order.customer)
    order: Order[];
};