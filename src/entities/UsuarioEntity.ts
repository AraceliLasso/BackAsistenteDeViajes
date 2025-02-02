import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"


@Entity({ name: "usuarios" })
export class UsuarioEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 100 })
    nombre: string

    @Column({ length: 50 })
    apellido: string
    
    @Column()
    password: string

    @Column({ length: 100 })
    email: string

    @Column()
    nacimiento: Date;


}