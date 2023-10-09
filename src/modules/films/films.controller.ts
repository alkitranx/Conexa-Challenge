import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Query,
  Delete,
  Param,
} from '@nestjs/common';
import { FilmsService } from './films.service';
import { CreateFilmDto } from './dtos/input/createFilmDto';
import { UpdateFilmDto } from './dtos/input/updateFilmDto';
import { ParamsInputDto } from './dtos/input/paramsInputDto';

@Controller('api')
export class FilmsController {
  constructor(private readonly filmsService: FilmsService) {}

  @Get('films')
  async findFilms() {
    return this.filmsService.findAllFilms();
  }

  @Get('filmDetailsById')
  async findFilmById(@Query('episodeId') param: string) {
    return this.filmsService.findDetailsFilmByEpisodeId(param);
  }

  @Post('newFilm')
  async registerUser(@Body() payload: CreateFilmDto) {
    return this.filmsService.createNewFilm(payload);
  }

  @Put('updateFilm')
  async updateFilm(
    @Body() payload: UpdateFilmDto,
    @Query() param: ParamsInputDto,
  ) {
    return this.filmsService.updateFilm(payload, param.id);
  }

  @Delete('filmsDelete')
  async updatesFilm(@Query() query: ParamsInputDto) {
    return this.filmsService.deleteFilm(query.id);
  }
}
