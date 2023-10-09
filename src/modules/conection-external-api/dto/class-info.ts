export class FilmDto {
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
    this.director = data.director;
    this.title = data.title;
    this.episode_id = data.episode_id;
    this.opening_crawl = data.opening_crawl;
    this.release_date = new Date(data.release_date);
    this.producer = data.producer;
    this.created = data.created;
    this.edited = data.edited;
    this.characters = data.characters;
    this.planets = data.planets;
    this.starships = data.starships;
    this.vehicles = data.vehicles;
    this.species = data.species;
  }
}

export class SpecieDto {
  name: string;
  classification: string;
  designation: string;
  average_height: string;
  skin_colors: string;
  hair_colors: string;
  eye_colors: string;
  average_lifespan: string;
  homeworld: string;
  language: string;
  people: string[];
  films: string[];
  constructor(data: any) {
    this.name = data.name;
    this.classification = data.classification;
    this.designation = data.designation;
    this.average_height = data.average_height;
    this.skin_colors = data.skin_colors;
    this.hair_colors = data.hair_colors;
    this.eye_colors = data.eye_colors;
    this.average_lifespan = data.average_lifespan;
    this.homeworld = data.homeworld;
    this.language = data.language;
    this.people = data.people;
    this.films = data.films;
  }
}

export class PeopleDto {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  constructor(data: any) {
    this.name = data.name;
    this.height = data.height;
    this.mass = data.mass;
    this.hair_color = data.hair_color;
    this.skin_color = data.skin_color;
    this.eye_color = data.eye_color;
    this.birth_year = data.birth_year;
    this.gender = data.gender;
    this.films = data.films;
    this.species = data.species;
    this.vehicles = data.vehicles;
    this.starships = data.starships;
  }
}

export class PlanetDto {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
  films: string[];
  constructor(data: any) {
    this.name = data.name;
    this.rotation_period = data.rotation_period;
    this.orbital_period = data.orbital_period;
    this.diameter = data.diameter;
    this.climate = data.climate;
    this.gravity = data.gravity;
    this.terrain = data.terrain;
    this.surface_water = data.surface_water;
    this.population = data.population;
    this.residents = data.residents;
    this.films = data.films;
  }
}

export class StarshipDto {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  hyperdrive_rating: string;
  MGLT: string;
  starship_class: string;
  pilots: string[];
  films: string[];
  constructor(data: any) {
    this.name = data.name;
    this.model = data.model;
    this.manufacturer = data.manufacturer;
    this.cost_in_credits = data.cost_in_credits;
    this.length = data.length;
    this.max_atmosphering_speed = data.max_atmosphering_speed;
    this.crew = data.crew;
    this.passengers = data.passengers;
    this.cargo_capacity = data.cargo_capacity;
    this.consumables = data.consumables;
    this.hyperdrive_rating = data.hyperdrive_rating;
    this.MGLT = data.MGLT;
    this.starship_class = data.starship_class;
    this.pilots = data.pilots;
    this.films = data.films;
  }
}

export class VehicleDto {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  vehicle_class: string;
  pilots: string[];
  films: string[];
  constructor(data: any) {
    this.name = data.name;
    this.model = data.model;
    this.manufacturer = data.manufacturer;
    this.cost_in_credits = data.cost_in_credits;
    this.length = data.length;
    this.max_atmosphering_speed = data.max_atmosphering_speed;
    this.crew = data.crew;
    this.passengers = data.passengers;
    this.cargo_capacity = data.cargo_capacity;
    this.consumables = data.consumables;
    this.vehicle_class = data.vehicle_class;
    this.pilots = data.pilots;
    this.films = data.films;
  }
}
