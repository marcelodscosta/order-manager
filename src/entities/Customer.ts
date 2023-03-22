import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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

    @Column({ type: 'varchar', length: 200 })
    password: string;
};