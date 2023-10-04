import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../infrastructure/prisma/prisma.service';

@Injectable()
export class AuthorizationService {
  constructor(private readonly prismaService: PrismaService) {}
  async getRoles(data: any): Promise<any> {
    const userEntityByEmail = await this.prismaService.user.findUnique({
      where: { email: data },
    });
    if (userEntityByEmail.id_role === 1) return false;
  }
}
