import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { cityOrm } from './cityOrm';
import { flyghtOrm } from './flightOrm';

@Entity('airport')
export class airportOrm {
  @PrimaryGeneratedColumn('increment')
  id_airport: number;

  @Column({ default: '' })
  name: string;

  @OneToMany(() => flyghtOrm, (ComplaintORM) => ComplaintORM.origin)
  flight: flyghtOrm;

  @ManyToOne(() => cityOrm, (cityORM) => cityORM.airport)
  city: cityOrm;
}
