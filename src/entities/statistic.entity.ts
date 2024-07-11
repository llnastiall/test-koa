import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Statistic {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    autoId!: string;

    @Column({ default: 0 }) 
    listingViews!: number;

    @Column({ default: 0 }) 
    ownerPhoneViews!: number;
}

