import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { airportOrm } from './airportOrm';

@Entity('flyght')
export class flyghtOrm {
  @PrimaryGeneratedColumn('increment')
  id_flight: number;

  @Column({ type: 'date', default: () => 'CURRENT_TIMESTAMP' })
  date_flyght: Date;

  @Column({ type: 'time', default: () => 'CURRENT_TIMESTAMP' })
  departure_time: Date;

  @Column({ type: 'time', default: () => 'CURRENT_TIMESTAMP' })
  arrival_time: Date;

  @Column()
  price: string;

  @Column({ default: '' })
  duration: string;

  @Column()
  number_flyght: string;

  @Column({ default: '' })
  ticket_type: string;

  @ManyToOne(() => airportOrm, (flyghtORM) => flyghtORM.flight)
  origin: airportOrm;

  @ManyToOne(() => airportOrm, (flyghtORM) => flyghtORM.flight)
  arrival: airportOrm;
}
