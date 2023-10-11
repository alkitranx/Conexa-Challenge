import { IsString, IsNumber, IsOptional } from 'class-validator';
import {ApiProperty} from "@nestjs/swagger";

export class UpdateFilmDto {
  @ApiProperty()
  @IsOptional()
  @IsString()
  title: string;
  @ApiProperty()
  @IsOptional()
  @IsNumber()
  episode_id: number;
  @ApiProperty()
  @IsOptional()
  @IsString()
  opening_crawl: string;
  @ApiProperty()
  @IsOptional()
  @IsString()
  director: string;
  @ApiProperty()
  @IsOptional()
  @IsString()
  producer: string;
  @ApiProperty()
  @IsOptional()
  release_date: Date;
  @ApiProperty()
  @IsOptional()
  created: Date;
  @ApiProperty()
  @IsOptional()
  edited: Date;
  @ApiProperty()
  @IsOptional()
  @IsNumber({}, { each: true })
  characters: number[];
  @ApiProperty()
  @IsOptional()
  @IsNumber({}, { each: true })
  planets: number[];
  @ApiProperty()
  @IsNumber({}, { each: true })
  @IsOptional()
  starships: number[];
  @ApiProperty()
  @IsOptional()
  @IsNumber({}, { each: true })
  vehicles: number[];
  @ApiProperty()
  @IsOptional()
  @IsNumber({}, { each: true })
  species: string[];
}
