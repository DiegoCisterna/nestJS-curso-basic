

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Mensaje {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  nick: string;
  
  @Column({ length: 500 })
  mensaje: string
}