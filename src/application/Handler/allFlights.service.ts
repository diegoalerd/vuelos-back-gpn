import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { allFlightQuery } from '../../infraestructure/queryBus/allFlightsQuery';
import { flyghtAdapter } from '../../infraestructure/adapter/flyght.adapter';
import { iFlightRepository } from '../Repository/flight.Repository';

@Injectable()
@QueryHandler(allFlightQuery)
export class allFlightHandler implements IQueryHandler<allFlightQuery> {
  constructor(
    @InjectRepository(flyghtAdapter)
    private readonly _flyghtRepository: iFlightRepository,
  ) {}

  async execute(): Promise<any> {
    return await this._flyghtRepository.allFlights();
  }
}
