import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({name: 'customers'})
export class CustomerTypeORMEntity {
    @PrimaryColumn({length: 36})
    id: string;

    @Column({length: 200, nullable: false})
    name: string;

    @Column({length: 200, nullable: false})
    email: string;

    @Column({length: 2, nullable: false})
    type: string;

    @Column({length: 30, nullable: true})
    cpf: string

    @Column({length: 30, nullable: true})
    cnpj: string
}