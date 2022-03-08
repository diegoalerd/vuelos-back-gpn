import { flightDto } from '../../application/dto/flightDto';

export class findFlightQuery {
  constructor(public readonly flightquery: flightDto) {}
}
