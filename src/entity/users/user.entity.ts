import { Entity, Column } from 'typeorm';

@Entity('USERS')
export class User {
  @Column('number', { primary: true, name: 'ID_USER' })
  id: number;

  @Column('varchar2', { name: 'NOM', nullable: true, length: 50 })
  firstName: string | null;

  @Column('varchar2', { name: 'PRENOM', nullable: true, length: 50 })
  lastName: string | null;

  @Column({ default: true })
  isActive: boolean;
}
