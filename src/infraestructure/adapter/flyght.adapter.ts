import { Injectable } from '@nestjs/common';
import { iFlightRepository } from '../../application/Repository/flight.Repository';
import { EntityRepository, Repository, getRepository } from 'typeorm';
import { flyghtOrm } from '../orm/flightOrm';
import { flightDto } from '../../application/dto/flightDto';
import { cityOrm } from '../orm/cityOrm';
import { airportOrm } from '../orm/airportOrm';

@Injectable()
@EntityRepository(flyghtOrm)
export class flyghtAdapter
  extends Repository<flyghtOrm>
  implements iFlightRepository
{
  async allFlights(): Promise<any> {
    return await this.find();
  }

  async findFlights(flyghtDto: flightDto): Promise<any> {
    const cityorm = getRepository(cityOrm);

    const from_city = await cityorm.find({
      select: ['id_city'],
      where: { name: flyghtDto.from },
    });
    const to_city = await cityorm.find({
      select: ['id_city'],
      where: { name: flyghtDto.to },
    });

    const airportorm = getRepository(airportOrm);

    const from_airport = await airportorm.find({
      select: ['id_airport'],
      where: { city: from_city[0].id_city },
    });

    const to_airport = await airportorm.find({
      select: ['id_airport'],
      where: { city: to_city[0].id_city },
    });

    return await this.find({
      where: {
        origin: from_airport[0].id_airport,
        arrival: to_airport[0].id_airport,
        date_flyght: flyghtDto.date_flyght,
        ticket_type: flyghtDto.ticket_type,
      },
    });
  }
}
