import { Injectable } from '@nestjs/common';
import { FilmsRepository } from './films.repository';
import { FindAllFilmsOutput } from './dtos/output/findAllFilmsOutput';
import { Films, FilmsDocument } from '../schema/films.schema';

@Injectable()
export class FilmsService {
  constructor(private filmsRepository: FilmsRepository) {}
  private splitUrl(info: string) {
    const result = info.split('/');
    return result[result.length - 2];
  }
  private entityToUrl(info, key) {
    const result = [];
    for (const value of info) {
      const urlInfo = `https://swapi.dev/api/${key}/${value}/`;
      result.push(urlInfo);
    }
    return result;
  }
  private async forDetailsFilm(info: any, query: string) {
    const result = [];
    if (info.length > 0) {
      for (const value of info) {
        const idInfo = this.splitUrl(value);
        const response = await this.filmsRepository[`${query}`](Number(idInfo));
        result.push(response?.name);
      }
    }
    return result;
  }
  async findAllFilms(): Promise<FindAllFilmsOutput[]> {
    const findAllFilms = await this.filmsRepository.findAllFilms();
    return findAllFilms.map(
      (row: FilmsDocument) => new FindAllFilmsOutput(row),
    );
  }

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
  async deleteFilm(idData: string) {
    return this.filmsRepository.deleteFilm(idData);
  }
}
