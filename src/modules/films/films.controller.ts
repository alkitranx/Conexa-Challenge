import { Controller, Get } from '@nestjs/common';
import { FilmsService } from './films.service';

@Controller('api')
export class FilmsController {
  constructor(private readonly filmsService: FilmsService) {}

  @Get('getInfo')
  async findFilms() {
    return this.filmsService.findAllFilms();
  }
}
