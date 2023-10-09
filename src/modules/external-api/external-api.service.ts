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
    @InjectModel(Films.name) private filmsModule: Model<FilmsDocument>,
    @InjectModel(People.name) private peopleModule: Model<PeopleDocument>,
    @InjectModel(Species.name) private speciesModule: Model<SpeciesDocument>,
    @InjectModel(Planets.name) private planetsModule: Model<PlanetsDocument>,
    @InjectModel(Starships.name)
    private starshipsModule: Model<StarshipsDocument>,
    @InjectModel(Vehicles.name) private vehiclesModule: Model<VehiclesDocument>,
  ) {}
  //metodo que carga los datos del Api externa en nuestra base de datos de peliculas

  async getInfoApi(): Promise<any> {
    /* const listSchemas = [
   /!*   'Films',
      'Species',*!/
      'People',
      /!*'Vehicles',
      'Starships',
      'Planets',*!/
    ];*/
    const listApiEx = [
      'films',
      'species',
      'people',
      'vehicles',
      'starships',
      'planets',
    ];
    let infoDetails;
    const infoTotal = [];
    await Promise.all(
      listApiEx.map(async (api, index) => {
        const info = await this.http
          .get(`https://swapi.dev/api/${api}/`)
          .toPromise()
          .then((response) => response.data)
          .catch((e) => console.log('error axios', e));
        for (let i = 0; i < 1000; i++) {
          infoDetails = await this.http
            .get(`https://swapi.dev/api/${api}/${i + 1}`)
            .toPromise()
            .then((response) => response.data)
            .catch((e) => console.log('error axios', e.data));
          console.log('daaa', infoDetails);
          if (!!infoDetails) {
            console.log('infoDetails', i + 1, api);
            infoDetails.idReference = i + 1;
            const objetData = infoTotal.push(infoDetails);
            console.log('objetData', objetData);
            if (objetData == 260) {
              console.log('ocurre el break')
              break;
            }
            await this[`${listApiEx[index]}Module`].create(infoDetails);
          }
        }
      }),
    );
  }
}
