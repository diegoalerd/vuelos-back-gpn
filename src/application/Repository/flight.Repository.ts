import { flightDto } from '../dto/flightDto';
export interface iFlightRepository {
  allFlights(): Promise<any>;
  findFlights(flyghtDto: flightDto): Promise<any>;
}
