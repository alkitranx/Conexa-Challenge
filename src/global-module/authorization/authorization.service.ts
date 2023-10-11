import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../infrastructure/prisma/prisma.service';

@Injectable()
export class AuthorizationService {
  constructor(private readonly prismaService: PrismaService) {}
  async findUser(data: any): Promise<any> {
    return await this.prismaService.user.findUnique({
      where: { email: data },
    });
  }
}
