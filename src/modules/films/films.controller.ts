import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Query,
  UseGuards,
  Delete,
  Request,
} from '@nestjs/common';
import { FilmsService } from './films.service';
import { CreateFilmDto } from './dtos/input/createFilmDto';
import { UpdateFilmDto } from './dtos/input/updateFilmDto';
import { ParamsInputDto } from './dtos/input/paramsInputDto';
import { UserJwtGuard } from '../../global-module/authorization/user-authorization/user-jwt.guard';
import { RoleDecorator } from '../../global-module/authorization/role-authorization/role.decorator';
import { RoleGuard } from '../../global-module/authorization/role-authorization/role.guard';
import { Roles } from '../../libs/enums';
import { ApiBearerAuth, ApiBody, ApiParam } from '@nestjs/swagger';

@Controller('api')
export class FilmsController {
  constructor(private readonly filmsService: FilmsService) {}
  @UseGuards(UserJwtGuard)
  @Get('films')
  async findFilms() {
    return this.filmsService.findAllFilms();
  }
  @ApiBearerAuth('User Token')
  @RoleDecorator(Roles.REGULAR)
  @UseGuards(UserJwtGuard, RoleGuard)
  @Get('filmDetailsById')
  async findFilmById(@Query('episodeId') param: string, @Request() req: any) {
    console.log('req', req.user);
    return this.filmsService.findDetailsFilmByEpisodeId(param);
  }
  @ApiBearerAuth('Administrator Token')
  @ApiBody({ type: CreateFilmDto })
  @RoleDecorator(Roles.ADMINISTRATOR)
  @UseGuards(UserJwtGuard, RoleGuard)
  @Post('newFilm')
  async registerUser(@Body() payload: CreateFilmDto) {
    return this.filmsService.createNewFilm(payload);
  }
  @ApiBearerAuth('Administrator Token')
  @ApiBody({ type: UpdateFilmDto })
  @ApiParam(ParamsInputDto)
  @RoleDecorator(Roles.ADMINISTRATOR)
  @UseGuards(UserJwtGuard, RoleGuard)
  @Put('updateFilm')
  async updateFilm(
    @Body() payload: UpdateFilmDto,
    @Query() param: ParamsInputDto,
  ) {
    return this.filmsService.updateFilm(payload, param.id);
  }
  @ApiBearerAuth('Administrator Token')
  @ApiParam(ParamsInputDto)
  @RoleDecorator(Roles.ADMINISTRATOR)
  @UseGuards(UserJwtGuard, RoleGuard)
  @Delete('filmsDelete')
  async updatesFilm(@Query() query: ParamsInputDto) {
    return this.filmsService.deleteFilm(query.id);
  }
}
