import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Order } from "./Order";

@Entity('users')
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: "varchar",
        length: 200
    })
    name: string;

    @Column({ type: 'varchar', length: 200, nullable: true })
    cpf: string;

    @Column({ type: 'varchar', length: 200 })
    email: string;

    @Column({ type: 'varchar' })
    password: string;

    @Column({ type: 'boolean' })
    status: boolean;

    @OneToMany(() => Order, (order) => order.user)
    order: Order[];
}