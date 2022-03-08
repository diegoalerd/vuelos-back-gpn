import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { stateOrm } from './stateOrm';

@Entity('country')
export class countryOrm {
  @PrimaryGeneratedColumn('increment')
  id_country: number;

  @Column({ default: '' })
  name: string;

  @OneToMany(() => stateOrm, (stateORM) => stateORM.country)
  state: stateOrm;
}
