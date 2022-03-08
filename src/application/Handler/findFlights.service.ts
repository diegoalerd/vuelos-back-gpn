import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { flyghtAdapter } from '../../infraestructure/adapter/flyght.adapter';
import { iFlightRepository } from '../Repository/flight.Repository';
import { findFlightQuery } from '../../infraestructure/queryBus/findFlightsQuery';

@Injectable()
@QueryHandler(findFlightQuery)
export class findFlightqueryHandler implements IQueryHandler<findFlightQuery> {
  constructor(
    @InjectRepository(flyghtAdapter)
    private readonly _flyghtRepository: iFlightRepository,
  ) {}

  async execute({ flightquery }: findFlightQuery): Promise<any> {
    return await this._flyghtRepository.findFlights(flightquery);
  }
}
