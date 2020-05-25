import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ default: true })
    isActive: boolean;

    @Column({ default: 0 })
    x: number;

    @Column({ default: 0 })
    y: number;

    @Column()
    username: string;

    @Column()
    password: string;

}
