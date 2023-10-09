import { Controller, Post } from '@nestjs/common';
import { ExternalApiService } from './external-api.service';

@Controller('api')
export class ExternalApiController {
  constructor(private readonly externalApi: ExternalApiService) {}

  @Post('registerRowsInDb')
  async registerUser() {
    return this.externalApi.registerRowsInDb();
  }
}
