import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Statistic {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    autoId!: string;

    @Column({ default: 0 }) // Приклад встановлення значення за замовчуванням
    listingViews!: number;

    @Column({ default: 0 }) // Приклад встановлення значення за замовчуванням
    ownerPhoneViews!: number;
}

