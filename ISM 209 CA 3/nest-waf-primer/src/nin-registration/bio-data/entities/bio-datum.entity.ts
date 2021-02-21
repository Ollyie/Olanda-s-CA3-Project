import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class BioDatum {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column({ nullable: true })
    middleName: string;

    @Column()
    lastName: string;

    @Column({ nullable: true })
    dateOfBirth: Date;

    @Column({ nullable: true })
    nationality: string

    @Column({ nullable: true })
    countryOfBirth: string

    @Column({ nullable: true })
    stateOfBirth: string

    @Column({ nullable: true })
    townOfBirth: string

    @Column({ nullable: true })
    address: string

    @Column({ nullable: true })
    proffession: string

    @Column({ default: true })
    isActive: boolean;
}