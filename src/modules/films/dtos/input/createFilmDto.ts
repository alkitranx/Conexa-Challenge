import { IsNotEmpty, IsString, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateFilmDto {
  @IsNotEmpty()
  @IsString()
  title: string;
  @ApiProperty()
  @IsNotEmpty()
  episode_id: number;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  opening_crawl: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  director: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  producer: string;
  @ApiProperty()
  @IsNotEmpty()
  release_date: Date;
  @ApiProperty()
  @IsNotEmpty()
  created: Date;
  @ApiProperty()
  @IsNotEmpty()
  edited: Date;
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber({}, { each: true })
  characters: number[];
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber({}, { each: true })
  planets: number[];
  @ApiProperty()
  @IsNumber({}, { each: true })
  @IsNotEmpty()
  starships: number[];
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber({}, { each: true })
  vehicles: number[];
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber({}, { each: true })
  species: string[];
}
