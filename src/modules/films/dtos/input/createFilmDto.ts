import {
  IsNotEmpty,
  IsString,
  IsNumber,
} from 'class-validator';

export class CreateFilmDto {
  @IsNotEmpty()
  @IsString()
  title: string;
  @IsNotEmpty()
  episode_id: number;
  @IsNotEmpty()
  @IsString()
  opening_crawl: string;
  @IsNotEmpty()
  @IsString()
  director: string;
  @IsNotEmpty()
  @IsString()
  producer: string;
  @IsNotEmpty()
  release_date: Date;
  @IsNotEmpty()
  created: Date;
  @IsNotEmpty()
  edited: Date;
  @IsNotEmpty()
  @IsNumber({}, { each: true })
  characters: number[];
  @IsNotEmpty()
  @IsNumber({}, { each: true })
  planets: number[];
  @IsNumber({}, { each: true })
  @IsNotEmpty()
  starships: number[];
  @IsNotEmpty()
  @IsNumber({}, { each: true })
  vehicles: number[];
  @IsNotEmpty()
  @IsNumber({}, { each: true })
  species: string[];
}
