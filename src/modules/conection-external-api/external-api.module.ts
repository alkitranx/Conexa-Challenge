import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ExternalApiService } from './external-api.service';
import { ExternalApiController } from './external-api.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Films, FilmsSchema } from '../../infrastructure/schema/films.schema';
import {
  People,
  PeopleSchema,
} from '../../infrastructure/schema/people.schema';
import {
  Vehicles,
  VehiclesSchema,
} from '../../infrastructure/schema/vehicles.schema';
import {
  Starships,
  StarshipsSchema,
} from '../../infrastructure/schema/starships.schema';
import {
  Species,
  SpeciesSchema,
} from '../../infrastructure/schema/species.schema';
import {
  Planets,
  PlanetsSchema,
} from '../../infrastructure/schema/planets.schema';

@Module({
  imports: [
    HttpModule,
    MongooseModule.forFeature([
      {
        name: Films.name,
        schema: FilmsSchema,
      },
      {
        name: People.name,
        schema: PeopleSchema,
      },
      {
        name: Vehicles.name,
        schema: VehiclesSchema,
      },
      {
        name: Starships.name,
        schema: StarshipsSchema,
      },
      {
        name: Species.name,
        schema: SpeciesSchema,
      },
      {
        name: Planets.name,
        schema: PlanetsSchema,
      },
    ]),
  ],
  controllers: [ExternalApiController],
  providers: [ExternalApiService],
  exports: [],
})
export class ExternalApiModule {}
