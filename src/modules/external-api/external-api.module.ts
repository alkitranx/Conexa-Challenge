import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ExternalApiService } from './external-api.service';
import { RegisterController } from './external-api.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Films, FilmsSchema } from '../schema/films.schema';
import { People, PeopleSchema } from '../schema/people.schema';
import { Vehicles, VehiclesSchema } from '../schema/vehicles.schema';
import { Starships, StarshipsSchema } from '../schema/starships.schema';
import { Species, SpeciesSchema } from '../schema/species.schema';
import { Planets, PlanetsSchema } from '../schema/planets.schema';

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
  controllers: [RegisterController],
  providers: [ExternalApiService],
  exports: [],
})
export class ExternalApiModule {}
