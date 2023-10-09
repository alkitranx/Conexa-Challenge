export class FilmEntity {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: Date;
  created: Date;
  edited: Date;
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];

  constructor(data: any) {
    this.title = data.title;
    this.episode_id = data.episode_id;
    this.opening_crawl = data.opening_crawl;
    this.director = data.director;
    this.producer = data.producer;
    this.release_date = data.release_date;
    this.created = data.created;
    this.edited = data.edited;
    this.characters = data.characters;
    this.planets = data.planets;
    this.starships = data.starships;
    this.vehicles = data.vehicles;
    this.species = data.species;
  }
}
