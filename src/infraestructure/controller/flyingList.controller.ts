import { Controller, Param, Body, Get } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { flightDto } from '../../application/dto/flightDto';
import { allFlightQuery } from '../queryBus/allFlightsQuery';
import { findFlightQuery } from '../queryBus/findFlightsQuery';

@Controller('flying')
export class flyghtController {
  constructor(private readonly _iflightService: QueryBus) {}

  @Get('/all')
  async allflights(): Promise<any> {
    return this._iflightService.execute<allFlightQuery, any>(
      new allFlightQuery(),
    );
  }

  @Get('/find')
  async findFlights(@Body() flight: flightDto): Promise<any> {
    return this._iflightService.execute<findFlightQuery, any>(
      new findFlightQuery(flight),
    );
  }
}
