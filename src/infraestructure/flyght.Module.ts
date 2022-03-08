import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CqrsModule } from '@nestjs/cqrs';
import { allFlightHandler } from '../application/Handler/allFlights.service';
import { flyghtAdapter } from './adapter/flyght.adapter';
import { flyghtController } from './controller/flyingList.controller';
import { findFlightqueryHandler } from '../application/Handler/findFlights.service';
import { airportOrm } from './orm/airportOrm';
import { cityOrm } from './orm/cityOrm';
import { stateOrm } from './orm/stateOrm';
import { countryOrm } from './orm/countryOrm';

@Module({
  imports: [
    CqrsModule,
    TypeOrmModule.forFeature([
      flyghtAdapter,
      airportOrm,
      cityOrm,
      stateOrm,
      countryOrm,
    ]),
  ],
  providers: [allFlightHandler, findFlightqueryHandler],
  controllers: [flyghtController],
})
export class flightModule {}
