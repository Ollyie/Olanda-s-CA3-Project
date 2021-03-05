import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { BioDatum } from "src/nin-registration/bio-data/entities/bio-datum.entity";

@Entity()
export class LinkedIdentity {

    @PrimaryGeneratedColumn()
    NIN: number;

    @Column()
    BVN: number

    @Column({ nullable: true })
    MobileNumber: number;

    @JoinColumn()
    @OneToOne(type => BioDatum, BioDatum => BioDatum.LinkedIdentity, { cascade: true })
    BioData: BioDatum;
  BioDatum: BioDatum;
}