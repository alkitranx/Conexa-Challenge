import { Controller, Get } from '@nestjs/common';
import { ExternalApiService } from './external-api.service';

@Controller('api')

export class ExternalApiController {
  constructor(private readonly externalApi: ExternalApiService) {}

  @Get('getInfo')
  async registerUser() {
    return this.externalApi.getInfoApi();
  }
}
