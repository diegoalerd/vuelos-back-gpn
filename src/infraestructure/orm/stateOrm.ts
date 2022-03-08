import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { cityOrm } from './cityOrm';
import { countryOrm } from './countryOrm';

@Entity('state')
export class stateOrm {
  @PrimaryGeneratedColumn('increment')
  id_state: number;

  @Column({ default: '' })
  name: string;

  @OneToMany(() => cityOrm, (cityORM) => cityORM.state)
  city: cityOrm;

  @ManyToOne(() => countryOrm, (countryORM) => countryORM.state)
  country: countryOrm;
}
