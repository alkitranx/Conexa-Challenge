import { Injectable } from '@nestjs/common';
import { PrismaService } from '../infrastructure/prisma/prisma.service';

@Injectable()
export class LoginRepository {
  constructor(private readonly prismaService: PrismaService) {}
  async findUserByEmail(data: string) {
    return this.prismaService.user.findUnique({
      where: { email: data }
    });
  }
}
