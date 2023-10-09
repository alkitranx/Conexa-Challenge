import { IsString, IsNumber, IsOptional } from 'class-validator';

export class UpdateFilmDto {
  @IsOptional()
  @IsString()
  title: string;
  @IsOptional()
  @IsNumber()
  episode_id: number;
  @IsOptional()
  @IsString()
  opening_crawl: string;
  @IsOptional()
  @IsString()
  director: string;
  @IsOptional()
  @IsString()
  producer: string;
  @IsOptional()
  release_date: Date;
  @IsOptional()
  created: Date;
  @IsOptional()
  edited: Date;
  @IsOptional()
  @IsNumber({}, { each: true })
  characters: number[];
  @IsOptional()
  @IsNumber({}, { each: true })
  planets: number[];
  @IsNumber({}, { each: true })
  @IsOptional()
  starships: number[];
  @IsOptional()
  @IsNumber({}, { each: true })
  vehicles: number[];
  @IsOptional()
  @IsNumber({}, { each: true })
  species: string[];
}
