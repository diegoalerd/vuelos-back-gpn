import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { airportOrm } from './airportOrm';
import { stateOrm } from './stateOrm';

@Entity('city')
export class cityOrm {
  @PrimaryGeneratedColumn('increment')
  id_city: number;

  @Column({ default: '' })
  name: string;

  @OneToMany(() => airportOrm, (airportORM) => airportORM.city)
  airport: airportOrm;

  @ManyToOne(() => stateOrm, (stateORM) => stateORM.city)
  state: stateOrm;
}
