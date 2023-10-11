import { Injectable } from '@nestjs/common';
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
import { UpdateFilmDto } from './dtos/input/updateFilmDto';

@Injectable()
export class FilmsRepository {
  static findAllFilms: () => Promise<FilmsDocument[]>;
  constructor(
    @InjectModel(Films.name) private FilmsModule: Model<FilmsDocument>,
    @InjectModel(People.name) private PeopleModule: Model<PeopleDocument>,
    @InjectModel(Species.name) private SpeciesModule: Model<SpeciesDocument>,
    @InjectModel(Planets.name) private PlanetsModule: Model<PlanetsDocument>,
    @InjectModel(Starships.name)
    private StarshipsModule: Model<StarshipsDocument>,
    @InjectModel(Vehicles.name) private VehiclesModule: Model<VehiclesDocument>,
  ) {}

  async findAllFilms(): Promise<FilmsDocument[]> {
    return this.FilmsModule.find().exec();
  }

  async findFilmByEpisodeId(episodeId: number): Promise<FilmsDocument> {
    return this.FilmsModule.findOne({ episode_id: episodeId }).exec();
  }

  async findCharacterById(id: number) {
    return this.PeopleModule.findOne({ idReference: id });
  }
  async findVehicleById(id: number) {
    return this.VehiclesModule.findOne({ idReference: id });
  }
  async findPlanetById(id: number) {
    return this.PlanetsModule.findOne({ idReference: id });
  }
  async findSpecieById(id: number) {
    return this.SpeciesModule.findOne({ idReference: id });
  }
  async findStarshipById(id: number) {
    return this.StarshipsModule.findOne({ idReference: id });
  }

  async createFilm(data: FilmsDocument) {
    return this.FilmsModule.create(data);
  }

  async updateFilm(idData: string, data: UpdateFilmDto) {
    return this.FilmsModule.updateOne({ _id: idData }, data, {
      new: true,
    });
  }

  async deleteFilm(idData: string) {
    return this.FilmsModule.deleteOne({ _id: idData });
  }
}
