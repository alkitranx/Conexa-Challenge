import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { PrismaService } from '../../infrastructure/prisma/prisma.service';
import { InjectModel } from '@nestjs/mongoose';
import { Films, FilmsDocument } from '../schema/films.schema';
import { Model } from 'mongoose';
import { People, PeopleDocument } from '../schema/people.schema';
import { Species, SpeciesDocument } from '../schema/species.schema';
import { Planets, PlanetsDocument } from '../schema/planets.schema';
import { Starships, StarshipsDocument } from '../schema/starships.schema';
import { Vehicles, VehiclesDocument } from '../schema/vehicles.schema';

@Injectable()
export class ExternalApiService {
  constructor(
    private readonly http: HttpService,
    private readonly prismaService: PrismaService,
    @InjectModel(Films.name) private FilmsModule: Model<FilmsDocument>,
    @InjectModel(People.name) private PeopleModule: Model<PeopleDocument>,
    @InjectModel(Species.name) private SpeciesModule: Model<SpeciesDocument>,
    @InjectModel(Planets.name) private PlanetsModule: Model<PlanetsDocument>,
    @InjectModel(Starships.name)
    private StarshipsModule: Model<StarshipsDocument>,
    @InjectModel(Vehicles.name) private VehiclesModule: Model<VehiclesDocument>,
  ) {}
  //metodo que carga los datos del Api externa en nuestra base de datos de peliculas

  async getInfoApi(): Promise<any> {
    const listSchemas = [
      'Films',
      'Species',
      'People',
      'Vehicles',
      'Starships',
      'Planets',
    ];
    const listApiEx = [
      'films',
      'species',
      'people',
      'vehicles',
      'starships',
      'planets',
    ];
    await Promise.all(
      listApiEx.map(async (api, index) => {
        const info = await this.http
          .get(`https://swapi.dev/api/${api}/`)
          .toPromise()
          .then((response) => response.data)
          .catch((e) => console.log('error axios', e));
        return await this[`${listSchemas[index]}Module`].insertMany(
          info.results,
        );
      }),
    );
  }
}
