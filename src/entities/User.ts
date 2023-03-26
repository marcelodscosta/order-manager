import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
}