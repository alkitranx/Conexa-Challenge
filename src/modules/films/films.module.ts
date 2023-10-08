import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { MongooseModule } from '@nestjs/mongoose';
import { Films, FilmsSchema } from '../schema/films.schema';
import { People, PeopleSchema } from '../schema/people.schema';
import { Vehicles, VehiclesSchema } from '../schema/vehicles.schema';
import { Starships, StarshipsSchema } from '../schema/starships.schema';
import { Species, SpeciesSchema } from '../schema/species.schema';
import { Planets, PlanetsSchema } from '../schema/planets.schema';
import { RegisterController } from '../external-api/external-api.controller';
import { ExternalApiService } from '../external-api/external-api.service';
import {FilmsService} from "./films.service";

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
  providers: [FilmsService],
  exports: [],
})
export class FilmsModule {}
