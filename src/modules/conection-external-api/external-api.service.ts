// Importar los módulos y utilidades necesarios
import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { PrismaService } from '../../infrastructure/prisma/prisma.service';
import { InjectModel } from '@nestjs/mongoose';
import { Films, FilmsDocument } from '../../infrastructure/schema/films.schema';
import { Model } from 'mongoose';
import {
  People,
  PeopleDocument,
} from '../../infrastructure/schema/people.schema';
import {
  Species,
  SpeciesDocument,
} from '../../infrastructure/schema/species.schema';
import {
  Planets,
  PlanetsDocument,
} from '../../infrastructure/schema/planets.schema';
import {
  Starships,
  StarshipsDocument,
} from '../../infrastructure/schema/starships.schema';
import {
  Vehicles,
  VehiclesDocument,
} from '../../infrastructure/schema/vehicles.schema';

@Injectable()
export class ExternalApiService {
  constructor(
    private readonly http: HttpService,
    private readonly prismaService: PrismaService,
    // Inyectar los modelos de los esquemas
    @InjectModel(Films.name) private filmsModule: Model<FilmsDocument>,
    @InjectModel(People.name) private peopleModule: Model<PeopleDocument>,
    @InjectModel(Species.name) private speciesModule: Model<SpeciesDocument>,
    @InjectModel(Planets.name) private planetsModule: Model<PlanetsDocument>,
    @InjectModel(Starships.name)
    private starshipsModule: Model<StarshipsDocument>,
    @InjectModel(Vehicles.name) private vehiclesModule: Model<VehiclesDocument>,
  ) {}

  // Método para registrar las filas en la base de datos
  async registerRowsInDb(): Promise<any> {
    const listApiEx = [
      'films',
      'species',
      'people',
      'vehicles',
      'starships',
      'planets',
    ];

    let infoDetails: { idReference: number };
    const infoTotal = [];

    await Promise.all(
      listApiEx.map(async (api, index) => {
        // Iterar sobre el rango de elementos a obtener (0 a 999)
        for (let i = 0; i < 1000; i++) {
          // Obtener los detalles de la API mediante una solicitud HTTP
          infoDetails = await this.http
            .get(`https://swapi.dev/api/${api}/${i + 1}`)
            .toPromise()
            .then((response) => response.data)
            .catch((e) => console.log('error axios', e.data));

          // Comprobar si se obtuvo información válida
          if (!!infoDetails) {
            console.log('infoDetails', i + 1, api);
            // Establecer el campo "idReference" en el objeto de detalles
            infoDetails.idReference = i + 1;
            // Agregar los detalles a la lista total de información
            const objetData = infoTotal.push(infoDetails);
            console.log('objetData', objetData);
            // Comprobar si se han registrado todos los datos (260 elementos)
            if (objetData == 260) {
              console.log('ocurre el break');
              break;
            }
            // Crear un nuevo registro en la base de datos utilizando el modelo adecuado según la API actual
            await this[`${listApiEx[index]}Module`].create(infoDetails);
          }
        }
      }),
    );
  }
}
