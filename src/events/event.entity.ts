import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Event extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    eventName: string;

    // @Column()
    // x: string;
    //
    // @Column()
    // y: string;
}