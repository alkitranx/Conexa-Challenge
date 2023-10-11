import { Injectable } from '@nestjs/common';
import { FilmsRepository } from './films.repository';
import { FindAllFilmsOutput } from './dtos/output/findAllFilmsOutput';
import { FilmsDocument } from '../../infrastructure/schema/films.schema';

@Injectable()
export class FilmsService {
  constructor(private filmsRepository: FilmsRepository) {}

  // Divide una cadena de texto en partes usando "/" como separador y devuelve la penúltima parte
  private splitUrl(info: string): string {
    const result = info.split('/');
    return result[result.length - 2];
  }

  // Convierte los elementos de una lista en URLs usando un valor "key" específico
  private entityToUrl(info: any[], key: string): string[] {
    const result = [];
    for (const value of info) {
      const urlInfo = `https://swapi.dev/api/${key}/${value}/`;
      result.push(urlInfo);
    }
    return result;
  }

  // Obtiene los detalles de una película mediante su ID y una función de consulta específica
  private async forDetailsFilm(info: any[], query: string): Promise<string[]> {
    const result = [];
    if (info.length > 0) {
      for (const value of info) {
        const idInfo = this.splitUrl(value);
        const response = await this.filmsRepository[query](Number(idInfo));
        result.push(response?.name);
      }
    }
    return result;
  }

  // Obtiene todas las películas y las devuelve en el formato de salida correcto
  async findAllFilms(): Promise<FindAllFilmsOutput[]> {
    const findAllFilms = await this.filmsRepository.findAllFilms();
    console.log(findAllFilms[0]);
    return findAllFilms.map(
      (row: FilmsDocument) => new FindAllFilmsOutput(row),
    );
  }

  // Obtiene los detalles de una película según su ID de episodio y actualiza las URL de los personajes, naves espaciales, especies, vehículos y planetas
  async findDetailsFilmByEpisodeId(episodeId: string): Promise<any> {
    const findFilmByEpisodeId = await this.filmsRepository.findFilmByEpisodeId(
      Number(episodeId),
    );
    findFilmByEpisodeId.characters = await this.forDetailsFilm(
      findFilmByEpisodeId.characters,
      'findCharacterById',
    );
    findFilmByEpisodeId.starships = await this.forDetailsFilm(
      findFilmByEpisodeId.starships,
      'findStarshipById',
    );
    findFilmByEpisodeId.species = await this.forDetailsFilm(
      findFilmByEpisodeId.species,
      'findSpecieById',
    );
    findFilmByEpisodeId.vehicles = await this.forDetailsFilm(
      findFilmByEpisodeId.vehicles,
      'findVehicleById',
    );
    findFilmByEpisodeId.planets = await this.forDetailsFilm(
      findFilmByEpisodeId.planets,
      'findPlanetById',
    );
    return findFilmByEpisodeId;
  }

  // Crea una nueva película con un ID de referencia único y actualiza las URL de las especies, vehículos, personajes, naves espaciales y planetas
  async createNewFilm(data: any) {
    const lastIdReference = await this.filmsRepository.findAllFilms();
    const idReference = lastIdReference.map((row) => {
      return row.idReference;
    });
    idReference.sort(function (a, b) {
      return b - a;
    });
    data.idReference = idReference[0] + 1;
    data.species = this.entityToUrl(data.species, 'species');
    data.vehicles = this.entityToUrl(data.vehicles, 'vehicles');
    data.characters = this.entityToUrl(data.characters, 'people');
    data.starships = this.entityToUrl(data.starships, 'starships');
    data.planets = this.entityToUrl(data.planets, 'planets');
    return await this.filmsRepository.createFilm(data);
  }

  // Actualiza una película con nuevos datos y actualiza las URL de los planetas, especies, vehículos, personajes y naves espaciales si es necesario
  async updateFilm(data, idData: string) {
    if (data.planets) {
      data.planets = this.entityToUrl(data.planets, 'planets');
    }
    if (data.species) {
      data.species = this.entityToUrl(data.species, 'species');
    }
    if (data.vehicles) {
      data.vehicles = this.entityToUrl(data.vehicles, 'vehicles');
    }
    if (data.characters) {
      data.characters = this.entityToUrl(data.characters, 'people');
    }
    if (data.starships) {
      data.starships = this.entityToUrl(data.starships, 'starships');
    }
    return await this.filmsRepository.updateFilm(idData, data);
  }

  // Elimina una película según su ID
  async deleteFilm(idData: string) {
    return this.filmsRepository.deleteFilm(idData);
  }
}
