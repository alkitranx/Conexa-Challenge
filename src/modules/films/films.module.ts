import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { MongooseModule } from '@nestjs/mongoose';
import { Films, FilmsSchema } from '../schema/films.schema';
import { People, PeopleSchema } from '../schema/people.schema';
import { Vehicles, VehiclesSchema } from '../schema/vehicles.schema';
import { Starships, StarshipsSchema } from '../schema/starships.schema';
import { Species, SpeciesSchema } from '../schema/species.schema';
import { Planets, PlanetsSchema } from '../schema/planets.schema';
import { FilmsService } from './films.service';
import { FilmsRepository } from './films.repository';
import { FilmsController } from './films.controller';

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
  controllers: [FilmsController],
  providers: [FilmsService, FilmsRepository],
  exports: [],
})
export class FilmsModule {}
